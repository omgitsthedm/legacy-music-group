import { useEffect, useState } from 'react'

const GTM_CONTAINER_ID = 'GTM-PP6RZB73'
const CONSENT_KEY = 'legacy:analytics-consent:v1'

declare global { interface Window { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void } }

function gtag(...args: unknown[]) {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push(args)
}

function loadTag() {
  if (document.querySelector(`script[data-legacy-gtm="${GTM_CONTAINER_ID}"]`)) return
  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_CONTAINER_ID}`
  script.dataset.legacyGtm = GTM_CONTAINER_ID
  window.dataLayer?.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' })
  document.head.append(script)
}

export default function AnalyticsConsent() {
  const [open, setOpen] = useState(() => {
    if (navigator.webdriver) return false
    try { return localStorage.getItem(CONSENT_KEY) === null } catch { return true }
  })

  useEffect(() => {
    if (navigator.webdriver) return
    window.dataLayer = window.dataLayer || []
    window.gtag = gtag
    gtag('consent', 'default', { analytics_storage: 'denied', ad_storage: 'denied', ad_user_data: 'denied', ad_personalization: 'denied', wait_for_update: 500 })
    let choice: string | null = null
    try { choice = localStorage.getItem(CONSENT_KEY) } catch { /* storage is optional */ }
    if (choice === 'granted') { gtag('consent', 'update', { analytics_storage: 'granted' }); loadTag() }
  }, [])

  function choose(granted: boolean) {
    try { localStorage.setItem(CONSENT_KEY, granted ? 'granted' : 'denied') } catch { /* storage is optional */ }
    gtag('consent', 'update', { analytics_storage: granted ? 'granted' : 'denied' })
    if (granted) loadTag()
    setOpen(false)
  }

  return <>
    {open && <section role="dialog" aria-label="Analytics preferences" className="fixed bottom-4 right-4 z-[100] max-w-[min(420px,calc(100vw-2rem))] rounded-xl border border-[rgba(232,163,61,0.38)] bg-[#111111] p-5 shadow-2xl">
      <p className="font-body text-xs uppercase tracking-[2px] text-[#E8A33D]">Analytics preferences</p>
      <p className="mt-2 font-body text-sm leading-relaxed text-[#F5F0E8]">Help us improve the studio website with anonymous usage measurements. Analytics stays off unless you choose Allow.</p>
      <div className="mt-4 flex flex-wrap gap-3"><button type="button" onClick={() => choose(true)} className="rounded-full bg-[#E8A33D] px-4 py-2 font-body text-sm font-medium text-[#0A0A0A] hover:bg-[#D4873C]">Allow analytics</button><button type="button" onClick={() => choose(false)} className="rounded-full border border-[rgba(245,240,232,0.25)] px-4 py-2 font-body text-sm text-[#F5F0E8] hover:border-[#E8A33D]">Keep off</button></div>
    </section>}
    <button type="button" onClick={() => setOpen(true)} className="fixed bottom-3 left-3 z-[99] rounded border border-[rgba(245,240,232,0.2)] bg-[#111111] px-2 py-1 font-body text-[10px] uppercase tracking-[1px] text-[#A38F7B] hover:text-[#E8A33D]">Analytics settings</button>
  </>
}
