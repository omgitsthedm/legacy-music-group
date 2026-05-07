import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Check, ChevronRight } from 'lucide-react'
import { BookingContext } from '../App'
import ScrollReveal from '../components/ScrollReveal'
import JsonLd from '../components/JsonLd'
import { useSeo } from '../lib/seo'
import { pricingTiers, alaCarteServices } from '../lib/data'
import { buildBreadcrumbSchema, buildFaqSchema } from '../lib/schemas'

const pricingFaqs = [
  {
    question: 'Why is your pricing public when most studios hide theirs?',
    answer:
      "We think pricing transparency is a feature. You can shop intelligently, plan a budget, and walk in knowing what to expect. The trade-off is we get fewer 'how much' emails and more confirmed bookings.",
  },
  {
    question: 'Are taxes and fees included?',
    answer:
      'Texas state tax is added at checkout. There are no other fees — no booking fees, no engineer surcharges, no equipment rental fees. The number you see is what you pay.',
  },
  {
    question: 'Do you offer discounts for recurring or block bookings?',
    answer:
      'Yes. Recurring weekly sessions (podcasts, ongoing projects) get block-discount pricing. Multi-session album bookings get a 15–25% discount over per-session rates.',
  },
  {
    question: 'What\'s your refund policy?',
    answer:
      'Full refund 48+ hours before your session. Inside 48 hours, deposits are non-refundable but transferable to a future session. Full policy at /policies.',
  },
  {
    question: 'Can I pay in installments?',
    answer:
      'Yes for full-package and album bookings. We accept a deposit at booking and balance before the session. Talk to us about payment plans for larger projects.',
  },
]

export default function Pricing() {
  const { openBooking } = useContext(BookingContext)

  useSeo({
    title: 'Pricing — Recording, Mixing, Mastering Rates',
    description:
      'Transparent rates for Legacy Music Group: $75/hr with engineer, $280 4-hour block, $520 8-hour day, $150/song mixing & mastering. Full Package $500.',
    path: '/pricing',
  })

  return (
    <div className="pt-20">
      <JsonLd
        id="pricing-breadcrumb"
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Pricing', path: '/pricing' },
        ])}
      />
      <JsonLd id="pricing-faq" data={buildFaqSchema(pricingFaqs)} />

      <section className="pt-[clamp(4rem,8vw,6rem)] pb-8 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[900px] text-center">
          <ScrollReveal>
            <span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">
              Transparent Pricing
            </span>
            <h1
              data-speakable
              className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.0] tracking-[-1.5px] text-[#F5F0E8] mt-3"
            >
              Pricing
            </h1>
            <p className="font-body text-[1rem] text-[#A38F7B] mt-4 leading-[1.7] max-w-[640px] mx-auto">
              Most Dallas studios hide their rates behind contact forms. We don’t. Here’s
              what a session at Legacy actually costs — no surprises, no surcharges.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-12 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {pricingTiers.map((tier, i) => (
              <ScrollReveal key={tier.name} delay={i * 80}>
                <div
                  className={`h-full bg-[#111111] border rounded-xl p-6 sm:p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                    tier.highlighted
                      ? 'border-[#E8A33D] shadow-[0_0_40px_rgba(232,163,61,0.15)]'
                      : 'border-[rgba(245,240,232,0.08)] hover:border-[rgba(232,163,61,0.3)]'
                  }`}
                >
                  {tier.highlighted && (
                    <span className="font-body text-[0.7rem] uppercase tracking-[2px] text-[#E8A33D] font-medium mb-3">
                      Most Popular
                    </span>
                  )}
                  <h2 className="font-body text-[1.05rem] font-medium text-[#F5F0E8]">
                    {tier.name}
                  </h2>
                  <p className="font-body text-[0.85rem] text-[#A38F7B] mt-1">{tier.tagline}</p>
                  <div className="mt-5 mb-5">
                    <span className="font-display text-[2.5rem] text-[#F5F0E8] leading-none">
                      {tier.price}
                    </span>
                    <p className="font-body text-[0.8rem] text-[#A38F7B] mt-2">{tier.unit}</p>
                  </div>
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check size={14} className="text-[#4A7C59] shrink-0 mt-1" />
                        <span className="font-body text-[0.85rem] text-[#A38F7B] leading-[1.5]">
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={openBooking}
                    className={`w-full font-body text-[0.9rem] font-medium px-6 py-2.5 rounded-full transition-all duration-300 ${
                      tier.highlighted
                        ? 'bg-[#E8A33D] text-[#0A0A0A] hover:bg-[#D4873C]'
                        : 'border border-[rgba(245,240,232,0.2)] text-[#F5F0E8] hover:border-[#E8A33D] hover:text-[#E8A33D]'
                    }`}
                  >
                    Book this
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* À la carte services */}
      <section className="py-12 px-[clamp(1.5rem,5vw,4rem)] bg-[#111111]">
        <div className="mx-auto max-w-[1000px]">
          <ScrollReveal>
            <h2
              data-speakable
              className="font-display text-[clamp(1.75rem,3vw,2.5rem)] text-[#F5F0E8] mb-3 text-center"
            >
              À La Carte
            </h2>
            <p className="font-body text-[0.95rem] text-[#A38F7B] mb-8 text-center max-w-[560px] mx-auto">
              Beyond the packages — individual services, hourly rates, and consultations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {alaCarteServices.map((s) => (
                <div
                  key={s.name}
                  className="bg-[#0A0A0A] border border-[rgba(245,240,232,0.08)] rounded-xl p-4"
                >
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="font-body text-[0.95rem] font-medium text-[#F5F0E8] leading-[1.3]">
                      {s.name}
                    </h3>
                    <span className="font-body text-[0.85rem] text-[#E8A33D] font-medium whitespace-nowrap">
                      {s.price}
                    </span>
                  </div>
                  <p className="font-body text-[0.8rem] text-[#A38F7B] leading-[1.5]">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-[clamp(4rem,8vw,6rem)] px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[800px]">
          <ScrollReveal className="text-center mb-10">
            <h2
              data-speakable
              className="font-display text-[clamp(1.75rem,3vw,2.5rem)] text-[#F5F0E8]"
            >
              Pricing Questions
            </h2>
          </ScrollReveal>

          <div className="space-y-3">
            {pricingFaqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <details className="group bg-[#111111] border border-[rgba(245,240,232,0.08)] rounded-xl overflow-hidden hover:border-[rgba(232,163,61,0.3)] transition-colors duration-300">
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
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-12 text-center">
              <Link
                to="/policies"
                className="inline-flex items-center gap-1 font-body text-[0.9rem] text-[#A38F7B] hover:text-[#F5F0E8] transition-colors duration-300"
              >
                See full booking policies <ChevronRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

