import ScrollReveal from '../components/ScrollReveal'
import JsonLd from '../components/JsonLd'
import { useSeo } from '../lib/seo'
import { buildBreadcrumbSchema } from '../lib/schemas'
import { CONTACT_HANDOFF_URL } from '../lib/handoff'

export default function Terms() {
  useSeo({ title: 'Terms Information', description: 'Contact Legacy Music Group for current service and booking terms.', path: '/terms' })
  return (
    <div className="pt-20">
      <JsonLd id="terms-breadcrumb" data={buildBreadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Terms Information', path: '/terms' }])} />
      <section className="pt-[clamp(4rem,8vw,6rem)] pb-[clamp(6rem,12vw,10rem)] px-[clamp(1.5rem,5vw,4rem)]"><div className="mx-auto max-w-[760px] text-center"><ScrollReveal><span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">Terms information</span><h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.0] tracking-[-1.5px] text-[#F5F0E8] mt-3">Current terms are confirmed with Legacy.</h1><p className="font-body text-[1rem] text-[#A38F7B] mt-5 leading-[1.8]">This Netlify site does not publish contractual booking terms. Contact the studio directly for current service and booking information.</p><a href={CONTACT_HANDOFF_URL} className="inline-block mt-10 rounded-full bg-[#E8A33D] px-7 py-3.5 font-body text-[0.95rem] font-medium text-[#0A0A0A] hover:bg-[#D4873C] transition-colors duration-300">Contact Legacy</a></ScrollReveal></div></section>
    </div>
  )
}
