import { MapPin, Phone, Mail, ArrowUpRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import JsonLd from '../components/JsonLd'
import { useSeo } from '../lib/seo'
import { contact } from '../lib/data'
import { buildBreadcrumbSchema } from '../lib/schemas'
import { BOOKING_HANDOFF_URL, CONTACT_HANDOFF_URL } from '../lib/handoff'

const actionClass = 'group flex min-h-14 items-center justify-center gap-2 rounded-full px-6 py-3 font-body text-[0.95rem] font-medium transition-colors duration-300'

export default function Contact() {
  useSeo({
    title: 'Contact',
    description: 'Call, email, or use Legacy Music Group’s current contact and booking pages.',
    path: '/contact',
  })

  return (
    <div className="pt-20">
      <JsonLd id="contact-breadcrumb" data={buildBreadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])} />
      <section className="pt-[clamp(4rem,8vw,6rem)] pb-12 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[800px] text-center">
          <ScrollReveal>
            <span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">Get in Touch</span>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.0] tracking-[-1.5px] text-[#F5F0E8] mt-3">Let&apos;s talk about your project.</h1>
            <p className="font-body text-[1rem] text-[#A38F7B] mt-4 leading-[1.7] max-w-[620px] mx-auto">
              This site does not store contact or booking details. Use Legacy&apos;s current contact page, call, or email the studio directly.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-16 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[960px] grid grid-cols-1 md:grid-cols-2 gap-5">
          <ScrollReveal>
            <article className="h-full bg-[#111111] border border-[rgba(245,240,232,0.08)] rounded-2xl p-7 sm:p-8 flex flex-col">
              <Mail size={22} className="text-[#E8A33D] mb-5" aria-hidden="true" />
              <h2 className="font-display text-2xl text-[#F5F0E8]">Contact Legacy</h2>
              <p className="font-body text-[0.95rem] text-[#A38F7B] leading-[1.7] mt-3 mb-7">
                Continue to the studio&apos;s current contact page for its live contact options.
              </p>
              <a href={CONTACT_HANDOFF_URL} className={`${actionClass} mt-auto border border-[rgba(245,240,232,0.24)] text-[#F5F0E8] hover:border-[#E8A33D] hover:text-[#E8A33D]`}>
                Open contact page <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </article>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <article className="h-full bg-[#111111] border border-[rgba(232,163,61,0.3)] rounded-2xl p-7 sm:p-8 flex flex-col shadow-[0_18px_56px_rgba(0,0,0,0.28)]">
              <Phone size={22} className="text-[#E8A33D] mb-5" aria-hidden="true" />
              <h2 className="font-display text-2xl text-[#F5F0E8]">Schedule a session</h2>
              <p className="font-body text-[0.95rem] text-[#A38F7B] leading-[1.7] mt-3 mb-7">
                Scheduling stays with Legacy&apos;s current booking page. Availability and confirmation are handled there.
              </p>
              <a href={BOOKING_HANDOFF_URL} className={`${actionClass} mt-auto bg-[#E8A33D] text-[#0A0A0A] hover:bg-[#D4873C]`}>
                Open booking page <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </article>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-12 px-[clamp(1.5rem,5vw,4rem)] bg-[#111111]">
        <div className="mx-auto max-w-[960px] grid grid-cols-1 sm:grid-cols-3 gap-8">
          <ScrollReveal><div className="text-center"><MapPin size={20} className="text-[#E8A33D] mx-auto mb-4" aria-hidden="true" /><p className="font-body text-[0.95rem] text-[#F5F0E8] font-medium">{contact.addressLine1}</p><p className="font-body text-[0.85rem] text-[#A38F7B] mt-1">{contact.addressLine2}</p></div></ScrollReveal>
          <ScrollReveal delay={100}><div className="text-center"><Phone size={20} className="text-[#E8A33D] mx-auto mb-4" aria-hidden="true" /><a href={`tel:${contact.phoneE164}`} className="font-body text-[0.95rem] text-[#F5F0E8] font-medium hover:text-[#E8A33D] transition-colors duration-300">{contact.phone}</a><p className="font-body text-[0.85rem] text-[#A38F7B] mt-1">Call the studio directly.</p></div></ScrollReveal>
          <ScrollReveal delay={200}><div className="text-center"><Mail size={20} className="text-[#E8A33D] mx-auto mb-4" aria-hidden="true" /><a href={`mailto:${contact.email}`} className="font-body text-[0.95rem] text-[#F5F0E8] font-medium hover:text-[#E8A33D] transition-colors duration-300 break-all">{contact.email}</a><p className="font-body text-[0.85rem] text-[#A38F7B] mt-1">Email the studio directly.</p></div></ScrollReveal>
        </div>
      </section>
    </div>
  )
}
