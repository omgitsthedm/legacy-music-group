import ScrollReveal from '../components/ScrollReveal'
import JsonLd from '../components/JsonLd'
import { useSeo } from '../lib/seo'
import { buildBreadcrumbSchema } from '../lib/schemas'
import { CONTACT_HANDOFF_URL } from '../lib/handoff'

export default function Privacy() {
  useSeo({ title: 'Privacy Information', description: 'Privacy information for the Legacy Music Group Netlify site.', path: '/privacy' })
  return (
    <div className="pt-20">
      <JsonLd id="privacy-breadcrumb" data={buildBreadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Privacy Information', path: '/privacy' }])} />
      <section className="pt-[clamp(4rem,8vw,6rem)] pb-[clamp(6rem,12vw,10rem)] px-[clamp(1.5rem,5vw,4rem)]"><div className="mx-auto max-w-[760px] space-y-8"><ScrollReveal><span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">Privacy information</span><h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.0] tracking-[-1.5px] text-[#F5F0E8] mt-3">This site does not collect lead forms.</h1><p className="font-body text-[1rem] text-[#A38F7B] mt-5 leading-[1.8]">This Netlify site has no contact, callback, newsletter, or booking form. Booking and contact links take you to Legacy Music Group&apos;s current site, where its own practices apply.</p></ScrollReveal><ScrollReveal delay={100}><article className="bg-[#111111] border border-[rgba(245,240,232,0.08)] rounded-2xl p-7"><h2 className="font-body text-xl font-medium text-[#F5F0E8]">Optional analytics</h2><p className="font-body text-[0.95rem] text-[#A38F7B] leading-[1.75] mt-3">Analytics stays off unless you choose Allow. Your preference is stored only in this browser and can be changed through Analytics settings. No custom form fields or booking details are sent from this site.</p></article></ScrollReveal><ScrollReveal delay={150}><a href={CONTACT_HANDOFF_URL} className="inline-block rounded-full border border-[rgba(245,240,232,0.25)] px-7 py-3.5 font-body text-[0.95rem] text-[#F5F0E8] hover:border-[#E8A33D] transition-colors duration-300">Contact Legacy about privacy</a></ScrollReveal></div></section>
    </div>
  )
}
