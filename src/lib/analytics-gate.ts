export const CONSENT_KEY = 'legacy:analytics-consent:v1'
export const ADS_CONSENT_KEY = 'legacy:ads-consent:v1'
export const QA_SESSION_KEY = 'legacy:analytics-qa-session:v1'

export type AnalyticsConsent = 'granted' | 'denied' | null
export type StorageRead = { available: boolean; value: AnalyticsConsent }
export type SessionQaRead = { available: boolean; active: boolean }

const FUTURE_HOSTS = new Set(['legacymusicgroup.com', 'www.legacymusicgroup.com'])
const PUBLIC_PATHS = new Set([
  '/', '/studio', '/services', '/pricing', '/contact', '/faq', '/reviews', '/events', '/policies', '/privacy', '/terms',
])

export function readStoredConsent(storage: Storage | null): StorageRead {
  if (!storage) return { available: false, value: null }
  try {
    const value = storage.getItem(CONSENT_KEY)
    return { available: true, value: value === 'granted' || value === 'denied' ? value : null }
  } catch {
    return { available: false, value: null }
  }
}

export function writeStoredConsent(storage: Storage | null, value: Exclude<AnalyticsConsent, null>) {
  if (!storage) return false
  try {
    storage.setItem(CONSENT_KEY, value)
    return true
  } catch {
    return false
  }
}

export function readStoredAdsConsent(storage: Storage | null): StorageRead {
  if (!storage) return { available: false, value: null }
  try {
    const value = storage.getItem(ADS_CONSENT_KEY)
    return { available: true, value: value === 'granted' || value === 'denied' ? value : null }
  } catch {
    return { available: false, value: null }
  }
}

export function writeStoredAdsConsent(storage: Storage | null, value: Exclude<AnalyticsConsent, null>) {
  if (!storage) return false
  try {
    storage.setItem(ADS_CONSENT_KEY, value)
    return true
  } catch {
    return false
  }
}

export function isValidAdsPixelId(value: string | undefined): value is string {
  return typeof value === 'string' && /^[0-9]{5,20}$/.test(value.trim())
}

export function hasQaQuery(href: string) {
  const search = new URL(href).searchParams
  return ['qa', 'test', 'debug'].some((key) => search.has(key))
}

/** A QA session must stay transport-disabled after navigation; unavailable session storage fails closed. */
export function readOrMarkQaSession(storage: Storage | null, href: string): SessionQaRead {
  const queryQa = hasQaQuery(href)
  if (!storage) return { available: false, active: true }
  try {
    const savedQa = storage.getItem(QA_SESSION_KEY) === '1'
    if (queryQa && !savedQa) storage.setItem(QA_SESSION_KEY, '1')
    return { available: true, active: queryQa || savedQa }
  } catch {
    return { available: false, active: true }
  }
}

export function analyticsConfigPayload(href: string) {
  const url = new URL(href)
  return {
    page_location: `${url.origin}${url.pathname}`,
    page_path: url.pathname,
    page_referrer: '',
  }
}

function hasIndexableRobots(robots: string | null) {
  if (!robots) return false
  const directives = robots.toLowerCase().split(',').map((value) => value.trim())
  return directives.includes('index') && !directives.includes('noindex')
}

export function isAnalyticsEligible(input: {
  href: string
  robots: string | null
  webdriver: boolean
  storageAvailable: boolean
  sessionQa: boolean
  consent: AnalyticsConsent
}) {
  const url = new URL(input.href)
  const isQa = input.sessionQa || hasQaQuery(input.href)
  return input.consent === 'granted'
    && input.storageAvailable
    && !input.webdriver
    && !isQa
    && url.protocol === 'https:'
    && FUTURE_HOSTS.has(url.hostname)
    && PUBLIC_PATHS.has(url.pathname)
    && hasIndexableRobots(input.robots)
}

export function shouldAppendGtm(input: { eligible: boolean; scriptAlreadyPresent: boolean }) {
  return input.eligible && !input.scriptAlreadyPresent
}

/** Ads measurement reuses the analytics eligibility boundary plus a configured pixel ID and no GPC opt-out. */
export function isAdsEligible(input: {
  href: string
  robots: string | null
  webdriver: boolean
  storageAvailable: boolean
  sessionQa: boolean
  consent: AnalyticsConsent
  pixelId: string | undefined
  gpc: boolean
}) {
  if (!isValidAdsPixelId(input.pixelId) || input.gpc) return false
  return isAnalyticsEligible(input)
}

export function shouldAppendPixel(input: { eligible: boolean; scriptAlreadyPresent: boolean }) {
  return input.eligible && !input.scriptAlreadyPresent
}

export function consentTransition(input: {
  previous: AnalyticsConsent
  next: Exclude<AnalyticsConsent, null>
  eligible: boolean
  measurementId: string | null
}) {
  if (input.next === 'granted') return input.eligible ? 'load' : 'hold'
  if (input.previous !== 'granted') return 'deny'
  return input.measurementId ? 'disable' : 'reload'
}
