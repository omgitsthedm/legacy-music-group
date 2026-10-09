import ScrollReveal from '../components/ScrollReveal'
import JsonLd from '../components/JsonLd'
import { useSeo } from '../lib/seo'
import { buildBreadcrumbSchema } from '../lib/schemas'
import { BOOKING_HANDOFF_URL, CONTACT_HANDOFF_URL } from '../lib/handoff'

export default function Policies() {
  useSeo({ title: 'Booking Information', description: 'Use Legacy Music Group’s current booking and contact pages for current session information.', path: '/policies' })
  return (
    <div className="pt-20">
      <JsonLd id="policies-breadcrumb" data={buildBreadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Booking Information', path: '/policies' }])} />
      <section className="pt-[clamp(4rem,8vw,6rem)] pb-[clamp(6rem,12vw,10rem)] px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[760px] text-center">
          <ScrollReveal>
            <span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">Booking information</span>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.0] tracking-[-1.5px] text-[#F5F0E8] mt-3">Confirm details with the studio.</h1>
            <p className="font-body text-[1rem] text-[#A38F7B] mt-5 leading-[1.8]">Session terms, availability, payment, and cancellation details are not published on this Netlify site. Use Legacy&apos;s current booking page or contact the studio for the current information.</p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center"><a href={BOOKING_HANDOFF_URL} className="rounded-full bg-[#E8A33D] px-7 py-3.5 font-body text-[0.95rem] font-medium text-[#0A0A0A] hover:bg-[#D4873C] transition-colors duration-300">Open booking page</a><a href={CONTACT_HANDOFF_URL} className="rounded-full border border-[rgba(245,240,232,0.25)] px-7 py-3.5 font-body text-[0.95rem] text-[#F5F0E8] hover:border-[#E8A33D] transition-colors duration-300">Contact Legacy</a></div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
