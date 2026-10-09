import { useEffect, useState } from 'react'
import {
  analyticsConfigPayload,
  consentTransition,
  isAdsEligible,
  isAnalyticsEligible,
  isValidAdsPixelId,
  readOrMarkQaSession,
  readStoredAdsConsent,
  readStoredConsent,
  shouldAppendGtm,
  shouldAppendPixel,
  writeStoredAdsConsent,
  writeStoredConsent,
  type AnalyticsConsent as Consent,
} from '../lib/analytics-gate'

const GTM_CONTAINER_ID = 'GTM-PP6RZB73'
// The repository confirms this container only. A GA measurement ID has not been verified.
const MEASUREMENT_ID: string | null = null
// Meta Pixel ID for ads measurement, set in the production Netlify environment.
// Empty means off: no Meta script loads and the ads choice never renders.
const META_PIXEL_ID = (() => {
  const raw = (import.meta.env.VITE_META_PIXEL_ID as string | undefined) ?? ''
  return isValidAdsPixelId(raw) ? raw.trim() : ''
})()

declare global {
  interface Window {
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
    _fbq?: unknown
    [key: `ga-disable-${string}`]: boolean | undefined
  }
}

/** Google’s documented arguments-object transport; this is not an array-of-arguments wrapper. */
function gtag(...args: unknown[]) {
  void args
  window.dataLayer = window.dataLayer || []
  // eslint-disable-next-line prefer-rest-params -- Google requires the native arguments object here.
  window.dataLayer.push(arguments)
}

function browserStorage(): Storage | null {
  try { return window.localStorage } catch { return null }
}

function browserSessionStorage(): Storage | null {
  try { return window.sessionStorage } catch { return null }
}

function currentChoice() {
  return readStoredConsent(browserStorage())
}

function robotsDirective() {
  return document.querySelector('meta[name="robots"]')?.getAttribute('content') ?? null
}

function eligibility(consent: Consent, storageAvailable: boolean) {
  const sessionQa = readOrMarkQaSession(browserSessionStorage(), window.location.href)
  return isAnalyticsEligible({
    href: window.location.href,
    robots: robotsDirective(),
    webdriver: navigator.webdriver,
    storageAvailable: storageAvailable && sessionQa.available,
    sessionQa: sessionQa.active,
    consent,
  })
}

function tagSelector() {
  return `script[data-legacy-gtm="${GTM_CONTAINER_ID}"]`
}

function denyAnalytics() {
  gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  })
  gtag('consent', 'update', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  })
}

function grantAnalytics() {
  gtag('consent', 'update', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  })
}

function loadTag(eligible: boolean) {
  if (!shouldAppendGtm({ eligible, scriptAlreadyPresent: Boolean(document.querySelector(tagSelector())) })) return

  // The supplied page values intentionally omit query, fragment, and referrer before a tag can load.
  gtag('set', analyticsConfigPayload(window.location.href))
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_CONTAINER_ID}`
  script.dataset.legacyGtm = GTM_CONTAINER_ID
  window.dataLayer?.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
  document.head.append(script)
}

function adsEligibility(consent: Consent, storageAvailable: boolean) {
  const sessionQa = readOrMarkQaSession(browserSessionStorage(), window.location.href)
  return isAdsEligible({
    href: window.location.href,
    robots: robotsDirective(),
    webdriver: navigator.webdriver,
    storageAvailable: storageAvailable && sessionQa.available,
    sessionQa: sessionQa.active,
    consent,
    pixelId: META_PIXEL_ID,
    gpc: (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true,
  })
}

function pixelSelector() {
  return 'script[data-legacy-pixel]'
}

function loadPixel(eligible: boolean) {
  if (!shouldAppendPixel({ eligible, scriptAlreadyPresent: Boolean(document.querySelector(pixelSelector())) })) return
  const fbq = window.fbq = window.fbq || function () {
    const stub = window.fbq as unknown as { q?: unknown[][] }
    // eslint-disable-next-line prefer-rest-params -- Meta requires the native arguments object here.
    ;(stub.q = stub.q || []).push(Array.from(arguments))
  }
  if (!window._fbq) window._fbq = fbq
  const runtime = window.fbq as unknown as Record<string, unknown>
  runtime.push = window.fbq
  runtime.loaded = true
  runtime.version = '2.0'
  runtime.queue = []
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://connect.facebook.net/en_US/fbevents.js'
  script.dataset.legacyPixel = META_PIXEL_ID
  document.head.append(script)
  window.fbq('init', META_PIXEL_ID)
  window.fbq('track', 'PageView')
}

// Booking happens on Legacy's external booking page, which will never fire
// this pixel, so the handoff click is the InitiateCheckout the ad account
// optimises on. Calls and emails are Contact. See docs/ADS.md.
function trackAdsClick(event: MouseEvent) {
  if (typeof window.fbq !== 'function') return
  const target = event.target instanceof Element ? event.target.closest('a, button') : null
  if (!target) return
  const hook = target.closest('[data-legacy-event]')?.getAttribute('data-legacy-event')
  const href = target.getAttribute('href') || ''
  if (hook === 'booking_handoff') window.fbq('track', 'InitiateCheckout')
  else if (hook === 'contact' || href.startsWith('tel:') || href.startsWith('mailto:')) window.fbq('track', 'Contact')
}

const adsOffered = META_PIXEL_ID !== ''

function currentAdsChoice() {
  return readStoredAdsConsent(browserStorage())
}

export default function AnalyticsConsent() {
  const [initial] = useState(() => currentChoice())
  const [open, setOpen] = useState(() => !initial.available || initial.value === null)
  const [notice, setNotice] = useState('')
  const [adsNotice, setAdsNotice] = useState('')

  useEffect(() => {
    window.dataLayer = window.dataLayer || []
    window.gtag = gtag
    denyAnalytics()

    const stored = currentChoice()
    if (stored.value === 'granted') {
      const eligible = eligibility(stored.value, stored.available)
      if (eligible) {
        grantAnalytics()
        loadTag(eligible)
      }
    }

    if (adsOffered) {
      const storedAds = currentAdsChoice()
      if (storedAds.value === 'granted') {
        loadPixel(adsEligibility(storedAds.value, storedAds.available))
      }
      document.addEventListener('click', trackAdsClick)
      return () => document.removeEventListener('click', trackAdsClick)
    }
  }, [])

  function choose(next: Exclude<Consent, null>) {
    const storage = browserStorage()
    const previous = readStoredConsent(storage)
    if (!writeStoredConsent(storage, next)) {
      denyAnalytics()
      setOpen(true)
      setNotice('Optional usage measurement remains off because this browser cannot save your choice.')
      return
    }

    const eligible = eligibility(next, true)
    const transition = consentTransition({ previous: previous.value, next, eligible, measurementId: MEASUREMENT_ID })

    if (next === 'granted') {
      if (eligible) {
        grantAnalytics()
        loadTag(eligible)
      } else {
        denyAnalytics()
      }
      setOpen(false)
      setNotice(eligible ? '' : 'Optional usage measurement is unavailable on this preview.')
      return
    }

    denyAnalytics()
    const loadedTag = document.querySelector(tagSelector())
    loadedTag?.remove()
    window.dataLayer = []
    setOpen(false)
    setNotice('Optional usage measurement is off.')

    if (transition === 'disable' && MEASUREMENT_ID) {
      window[`ga-disable-${MEASUREMENT_ID}`] = true
    }
    // A known destination is required for an in-place disable. Preserve the exact URL on a clean runtime reload.
    if (transition === 'reload' && loadedTag) window.location.reload()
  }

  function chooseAds(next: Exclude<Consent, null>) {
    if (!adsOffered) return
    const storage = browserStorage()
    if (!writeStoredAdsConsent(storage, next)) {
      setAdsNotice('Ads measurement remains off because this browser cannot save your choice.')
      return
    }
    if (next === 'granted') {
      const eligible = adsEligibility(next, true)
      loadPixel(eligible)
      setAdsNotice(eligible ? '' : 'Ads measurement is unavailable on this preview.')
    } else {
      document.querySelector(pixelSelector())?.remove()
      setAdsNotice('Ads measurement is off.')
    }
  }

  return (
    <>
      {open && (
        <section role="dialog" aria-label="Analytics preferences" className="fixed bottom-4 right-4 z-[100] max-w-[min(420px,calc(100vw-2rem))] rounded-xl border border-[rgba(232,163,61,0.38)] bg-[#111111] p-5 shadow-2xl">
          <p className="font-body text-xs uppercase tracking-[2px] text-[#E8A33D]">Analytics preferences</p>
          <p className="mt-2 font-body text-sm leading-relaxed text-[#F5F0E8]">Optional usage measurement stays off unless you choose Allow. Contact and booking details are not sent by this site.</p>
          {notice && <p role="status" className="mt-2 font-body text-xs leading-relaxed text-[#A38F7B]">{notice}</p>}
          <div className="mt-4 flex flex-wrap gap-3">
            <button type="button" onClick={() => choose('granted')} className="rounded-full bg-[#E8A33D] px-4 py-2 font-body text-sm font-medium text-[#0A0A0A] hover:bg-[#D4873C] transition-colors duration-300">Allow analytics</button>
            <button type="button" onClick={() => choose('denied')} className="rounded-full border border-[rgba(245,240,232,0.25)] px-4 py-2 font-body text-sm text-[#F5F0E8] hover:border-[#E8A33D] transition-colors duration-300">Keep off</button>
          </div>
          {adsOffered && (
            <>
              <p className="mt-4 font-body text-xs uppercase tracking-[2px] text-[#E8A33D]">Ads measurement</p>
              {adsNotice && <p role="status" className="mt-2 font-body text-xs leading-relaxed text-[#A38F7B]">{adsNotice}</p>}
              <div className="mt-2 flex flex-wrap gap-3">
                <button type="button" onClick={() => chooseAds('granted')} className="rounded-full border border-[rgba(232,163,61,0.6)] px-4 py-2 font-body text-sm text-[#F5F0E8] hover:border-[#E8A33D] transition-colors duration-300">Allow ads measurement</button>
                <button type="button" onClick={() => chooseAds('denied')} className="rounded-full border border-[rgba(245,240,232,0.25)] px-4 py-2 font-body text-sm text-[#F5F0E8] hover:border-[#E8A33D] transition-colors duration-300">Ads off</button>
              </div>
            </>
          )}
        </section>
      )}
      <button type="button" onClick={() => setOpen(true)} className="fixed bottom-3 left-3 z-[99] rounded border border-[rgba(245,240,232,0.2)] bg-[#111111] px-2 py-1 font-body text-[10px] uppercase tracking-[1px] text-[#A38F7B] hover:text-[#E8A33D] transition-colors duration-300">Analytics settings</button>
    </>
  )
}
