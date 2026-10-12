import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Check, ChevronRight } from 'lucide-react'
import { BookingContext } from '../lib/booking-context'
import ScrollReveal from '../components/ScrollReveal'
import JsonLd from '../components/JsonLd'
import { useSeo } from '../lib/seo'
import { pricingTiers, alaCarteServices } from '../lib/data'
import { buildBreadcrumbSchema, buildFaqSchema } from '../lib/schemas'

const pricingFaqs = [
  {
    "question": "What is the recording rate?",
    "answer": "Legacy lists recording at $75 an hour with a two-hour minimum. Confirm the room, engineer, and scope when you book."
  },
  {
    "question": "Are mixing and mastering separate?",
    "answer": "Yes. The standalone menu lists mixing from $150 and mastering at $30. Packages may include both; compare the items in each option."
  },
  {
    "question": "Are block discounts available?",
    "answer": "The published menu lists discounts starting at five-hour blocks. Ask for the current quote for your dates and project."
  },
  {
    "question": "What will my full project cost?",
    "answer": "Ask for a quote that covers recording time, edits, mixes, masters, any visual work, and applicable charges. A starting rate is not the total for every project."
  },
  {
    "question": "What if I need to change my booking?",
    "answer": "Review Legacy’s current booking terms and confirm the payment, notice period, and any fee with the studio before you pay."
  }
]

export default function Pricing() {
  const { openBooking } = useContext(BookingContext)

  useSeo({
    title: 'Pricing — Recording, Mixing, Mastering Rates',
    description:
      'Legacy Music Group recording is listed at $75/hour, mixing from $150, and mastering at $30. Compare studio packages and ask for your project quote.',
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
              Start with the published rates below. Then match the time, files, and
              services to your project before you book.
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
                      Music + Photos
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
                    Check this option
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
