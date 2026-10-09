import ScrollReveal from '../components/ScrollReveal'
import JsonLd from '../components/JsonLd'
import { useSeo } from '../lib/seo'
import { buildBreadcrumbSchema } from '../lib/schemas'
import { BOOKING_HANDOFF_URL } from '../lib/handoff'
import { contact } from '../lib/data'

const faqs = [
  { question: 'How do I schedule a session?', answer: 'Use Legacy Music Group’s current booking page, call the studio, or email the team. This website does not show availability or complete bookings.' },
  { question: 'What rates are currently published?', answer: 'Legacy’s current site lists recording at $75 per hour, mixing from $150, custom production at $500 per beat, and a two-hour minimum. Confirm the right option directly with the studio.' },
  { question: 'Where is the studio?', answer: 'Legacy Music Group lists 2815 Main St, Suite A, Dallas, TX 75226.' },
  { question: 'Can I ask about my project first?', answer: 'Yes. Call or email the studio directly so the team can confirm the current options for your project.' },
]

export default function FAQ() {
  useSeo({ title: 'Studio FAQ', description: 'Current contact, booking, and location information for Legacy Music Group.', path: '/faq' })
  return (
    <div className="pt-20">
      <JsonLd id="faq-breadcrumb" data={buildBreadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'FAQ', path: '/faq' }])} />
      <section className="pt-[clamp(4rem,8vw,6rem)] pb-12 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[800px]">
          <ScrollReveal>
            <span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">Answers</span>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.0] tracking-[-1.5px] text-[#F5F0E8] mt-3">Studio FAQ</h1>
            <p className="font-body text-[1rem] text-[#A38F7B] mt-4 leading-[1.7] max-w-[620px]">Straightforward information from Legacy&apos;s currently published details. Confirm project-specific questions with the studio.</p>
          </ScrollReveal>
        </div>
      </section>
      <section className="pb-16 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[800px] space-y-3">
          {faqs.map((faq, i) => <ScrollReveal key={faq.question} delay={i * 50}><details className="group bg-[#111111] border border-[rgba(245,240,232,0.08)] rounded-xl overflow-hidden hover:border-[rgba(232,163,61,0.3)] transition-colors duration-300"><summary className="cursor-pointer list-none flex items-center justify-between gap-4 p-5 sm:p-6"><h2 className="font-body text-[1rem] sm:text-[1.05rem] font-medium text-[#F5F0E8]">{faq.question}</h2><span aria-hidden="true" className="shrink-0 w-7 h-7 rounded-full border border-[rgba(245,240,232,0.2)] flex items-center justify-center text-[#A38F7B] group-open:bg-[#E8A33D] group-open:border-[#E8A33D] group-open:text-[#0A0A0A]"><span className="group-open:hidden text-lg">+</span><span className="hidden group-open:block text-lg">−</span></span></summary><p className="px-5 sm:px-6 pb-5 sm:pb-6 font-body text-[0.95rem] text-[#A38F7B] leading-[1.7]">{faq.answer}</p></details></ScrollReveal>)}
          <ScrollReveal><div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center"><a href={BOOKING_HANDOFF_URL} className="rounded-full bg-[#E8A33D] px-6 py-3 text-center font-body text-[0.95rem] font-medium text-[#0A0A0A] hover:bg-[#D4873C] transition-colors duration-300">Open booking page</a><a href={`mailto:${contact.email}`} className="rounded-full border border-[rgba(245,240,232,0.25)] px-6 py-3 text-center font-body text-[0.95rem] text-[#F5F0E8] hover:border-[#E8A33D] transition-colors duration-300">Email the studio</a></div></ScrollReveal>
        </div>
      </section>
    </div>
  )
}
