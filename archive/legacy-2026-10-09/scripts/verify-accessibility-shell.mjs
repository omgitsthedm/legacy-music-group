import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const [indexHtml, app] = await Promise.all([
  readFile(path.join(root, 'index.html'), 'utf8'),
  readFile(path.join(root, 'src', 'App.tsx'), 'utf8'),
])

assert.match(indexHtml, /<div id="root">\s*<main id="main-content">/)
assert.doesNotMatch(indexHtml, /<main id="root"/)
assert.equal((indexHtml.match(/<main\b/g) ?? []).length, 1, 'static fallback must expose one main landmark')

const skipLink = '<a href="#main-content" className="skip-link">'
const skipLinkAt = app.indexOf(skipLink)
const analyticsAt = app.indexOf('<AnalyticsConsent />')
const mainAt = app.indexOf('<main id="main-content" tabIndex={-1}>')

assert.ok(skipLinkAt >= 0, 'hydrated app must expose a skip link targeting #main-content')
assert.ok(mainAt >= 0, 'hydrated app must expose the #main-content target')
assert.ok(skipLinkAt < analyticsAt, 'skip link must precede analytics controls in source order')
assert.ok(skipLinkAt < mainAt, 'skip link must precede its main landmark target')
assert.equal((app.match(/<main\b/g) ?? []).length, 1, 'hydrated app must expose exactly one main landmark')

console.log('PASS accessibility shell: static and hydrated main landmarks plus skip-link source order')
