import assert from 'node:assert/strict'
import { execFile } from 'node:child_process'
import { mkdtemp, readFile, rm } from 'node:fs/promises'
import { tmpdir } from 'node:os'
import path from 'node:path'
import { promisify } from 'node:util'
import { pathToFileURL } from 'node:url'

const execFileAsync = promisify(execFile)
const output = await mkdtemp(path.join(tmpdir(), 'legacy-analytics-'))
try {
  await execFileAsync(process.execPath, [
    'node_modules/typescript/bin/tsc',
    'src/lib/analytics-gate.ts',
    '--target', 'ES2022', '--module', 'NodeNext', '--moduleResolution', 'NodeNext',
    '--outDir', output, '--skipLibCheck',
  ])
  const gate = await import(pathToFileURL(path.join(output, 'analytics-gate.js')).href)
  const future = 'https://legacymusicgroup.com/services?email=person@example.com#book'
  const original = new URL(future).href
  const base = { robots: 'index, follow', webdriver: false, storageAvailable: true, sessionQa: false, consent: 'granted' }

  assert.equal(gate.isAnalyticsEligible({ ...base, href: future }), true, 'verified future public route may load after grant')
  assert.equal(gate.isAnalyticsEligible({ ...base, href: future.replace('https:', 'http:') }), false, 'HTTP never loads')
  assert.equal(gate.isAnalyticsEligible({ ...base, href: 'https://legacy-music-group.netlify.app/?qa=1' }), false, 'current preview never loads')
  assert.equal(gate.isAnalyticsEligible({ ...base, href: 'https://legacymusicgroup.com/services?qa=1' }), false, 'QA sessions never load')
  assert.equal(gate.isAnalyticsEligible({ ...base, href: 'https://legacymusicgroup.com/services', sessionQa: true }), false, 'persisted QA sessions stay blocked after navigation')
  assert.equal(gate.isAnalyticsEligible({ ...base, href: 'https://legacymusicgroup.com/engineers/1' }), false, 'held routes never load')
  assert.equal(gate.isAnalyticsEligible({ ...base, href: future, robots: 'noindex, nofollow' }), false, 'noindex never loads')
  assert.equal(gate.isAnalyticsEligible({ ...base, href: future, webdriver: true }), false, 'webdriver never loads')
  assert.equal(gate.isAnalyticsEligible({ ...base, href: future, storageAvailable: false }), false, 'storage failures fail closed')

  const payload = gate.analyticsConfigPayload(future)
  assert.deepEqual(payload, { page_location: 'https://legacymusicgroup.com/services', page_path: '/services', page_referrer: '' }, 'payload omits query, hash, and referrer')
  assert.equal(new URL(future).href, original, 'payload construction never changes visitor URL or hash')

  const sessionStore = new Map()
  const sessionStorage = { getItem(key) { return sessionStore.get(key) ?? null }, setItem(key, value) { sessionStore.set(key, value) } }
  assert.deepEqual(gate.readOrMarkQaSession(sessionStorage, 'https://legacymusicgroup.com/services?qa=1'), { available: true, active: true }, 'QA query marks this session')
  assert.deepEqual(gate.readOrMarkQaSession(sessionStorage, 'https://legacymusicgroup.com/services'), { available: true, active: true }, 'controller session guard survives navigation without a query')

  const throwingStorage = { getItem() { throw new Error('blocked') }, setItem() { throw new Error('blocked') } }
  assert.deepEqual(gate.readStoredConsent(throwingStorage), { available: false, value: null }, 'read failure fails closed')
  assert.deepEqual(gate.readOrMarkQaSession(throwingStorage, 'https://legacymusicgroup.com/services'), { available: false, active: true }, 'session getter failure fails closed')
  assert.equal(gate.writeStoredConsent(throwingStorage, 'granted'), false, 'write failure fails closed')
  assert.equal(gate.shouldAppendGtm({ eligible: true, scriptAlreadyPresent: false }), true)
  assert.equal(gate.shouldAppendGtm({ eligible: true, scriptAlreadyPresent: true }), false, 'duplicate loader blocked')
  assert.equal(gate.consentTransition({ previous: null, next: 'denied', eligible: false, measurementId: null }), 'deny')
  assert.equal(gate.consentTransition({ previous: 'denied', next: 'granted', eligible: true, measurementId: null }), 'load', 'deny then grant loads only when eligible')
  assert.equal(gate.consentTransition({ previous: 'granted', next: 'granted', eligible: false, measurementId: null }), 'hold', 'saved grant on preview stays dormant')
  assert.equal(gate.consentTransition({ previous: 'granted', next: 'denied', eligible: true, measurementId: null }), 'reload', 'revoke safely clears unknown destination runtime')
  assert.equal(gate.consentTransition({ previous: 'granted', next: 'denied', eligible: true, measurementId: 'G-VERIFIED' }), 'disable')

  const component = await readFile('src/components/AnalyticsConsent.tsx', 'utf8')
  assert.match(component, /function gtag\([^)]*\)[\s\S]*?push\(arguments\)/, 'official arguments-object transport')
  assert.doesNotMatch(component, /removeQueryAndHash|replaceState|location\.replace/, 'visitor URL is never rewritten')
  assert.match(component, /gtag\('set', analyticsConfigPayload\(window\.location\.href\)\)/, 'sanitized payload is queued before tag load')
  assert.match(component, /if \(eligible\) \{[\s\S]*?grantAnalytics\(\)[\s\S]*?loadTag\(eligible\)/, 'controller only grants transport after eligibility')
  console.log('analytics consent gates: passed')
} finally {
  await rm(output, { recursive: true, force: true })
}
