import { useMemo } from 'react'
import ScrollReveal from '../components/ScrollReveal'
import JsonLd from '../components/JsonLd'
import { useSeo } from '../lib/seo'
import { buildFaqSchema, buildBreadcrumbSchema } from '../lib/schemas'
import { faqs } from '../lib/data'

export default function FAQ() {
  useSeo({
    title: 'FAQ',
    description:
      'Frequently asked questions about booking, sessions, mixing, mastering, artist development, and our Deep Ellum studio location.',
    path: '/faq',
  })

  const groups = useMemo(() => {
    const map = new Map<string, typeof faqs>()
    faqs.forEach((f) => {
      if (!map.has(f.category)) map.set(f.category, [])
      map.get(f.category)!.push(f)
    })
    return Array.from(map.entries())
  }, [])

  return (
    <div className="pt-20">
      <JsonLd
        id="faq"
        data={buildFaqSchema(faqs.map((f) => ({ question: f.question, answer: f.answer })))}
      />
      <JsonLd
        id="faq-breadcrumb"
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'FAQ', path: '/faq' },
        ])}
      />

      <section className="pt-[clamp(4rem,8vw,6rem)] pb-12 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[800px]">
          <ScrollReveal>
            <span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">
              Answers
            </span>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.0] tracking-[-1.5px] text-[#F5F0E8] mt-3">
              Frequently Asked Questions
            </h1>
            <p className="font-body text-[1rem] text-[#A38F7B] mt-4 leading-[1.7] max-w-[600px]">
              Quick answers about booking, sessions, mixing, mastering, and how Legacy works.
              Don't see what you need? <a href="/contact" className="text-[#E8A33D] hover:underline">Get in touch</a>.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-[clamp(6rem,12vw,10rem)] px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[800px] space-y-12">
          {groups.map(([category, items], gi) => (
            <ScrollReveal key={category} delay={gi * 50}>
              <h2 className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium mb-4">
                {category}
              </h2>
              <div className="space-y-3">
                {items.map((faq, i) => (
                  <details
                    key={i}
                    className="group bg-[#111111] border border-[rgba(245,240,232,0.08)] rounded-xl overflow-hidden hover:border-[rgba(232,163,61,0.3)] transition-colors duration-300"
                  >
                    <summary className="cursor-pointer list-none flex items-center justify-between gap-4 p-5 sm:p-6">
                      <h3 className="font-body text-[1rem] sm:text-[1.05rem] font-medium text-[#F5F0E8]">
                        {faq.question}
                      </h3>
                      <span className="shrink-0 w-7 h-7 rounded-full border border-[rgba(245,240,232,0.2)] flex items-center justify-center text-[#A38F7B] group-open:bg-[#E8A33D] group-open:border-[#E8A33D] group-open:text-[#0A0A0A] transition-all duration-300">
                        <span className="block group-open:hidden text-lg leading-none">+</span>
                        <span className="hidden group-open:block text-lg leading-none">−</span>
                      </span>
                    </summary>
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6">
                      <p className="font-body text-[0.95rem] text-[#A38F7B] leading-[1.7]">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </div>
  )
}
