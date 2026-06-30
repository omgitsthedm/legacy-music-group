import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Check, ChevronLeft, ChevronRight } from 'lucide-react'
import { BookingContext } from '../lib/booking-context'
import ScrollReveal from '../components/ScrollReveal'
import JsonLd from '../components/JsonLd'
import { useSeo } from '../lib/seo'
import { services, engineers } from '../lib/data'
import { buildBreadcrumbSchema, buildFaqSchema, buildServiceSchema } from '../lib/schemas'

export default function ServicePage() {
  const { slug } = useParams()
  const { openBooking } = useContext(BookingContext)
  const service = services.find((s) => s.slug === slug)

  useSeo({
    title: service ? service.name : 'Service',
    description: service
      ? `${service.oneLiner} ${service.intro.slice(0, 80)}...`
      : 'Service page.',
    path: service ? `/services/${service.slug}` : '/services',
    ogImage: service?.image,
  })

  if (!service) {
    return (
      <div className="pt-40 pb-20 text-center px-4">
        <h1 className="font-display text-3xl text-[#F5F0E8]">Service not found</h1>
        <Link to="/services" className="mt-4 inline-block text-[#E8A33D] hover:underline">
          Back to services
        </Link>
      </div>
    )
  }

  const recommendedEngineers = engineers.filter((e) =>
    service.recommendedEngineerIds.includes(e.id),
  )

  return (
    <div className="pt-20">
      <JsonLd
        id={`service-${service.slug}`}
        data={buildServiceSchema({
          name: service.name,
          slug: service.slug,
          description: service.oneLiner,
          startingPrice: service.startingPrice.replace(/[^\d.]/g, '') || undefined,
          faqs: service.faqs,
        })}
      />
      <JsonLd id={`service-${service.slug}-faq`} data={buildFaqSchema(service.faqs)} />
      <JsonLd
        id={`service-${service.slug}-breadcrumb`}
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: service.shortName, path: `/services/${service.slug}` },
        ])}
      />

      <section className="pt-[clamp(4rem,8vw,6rem)] pb-12 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[900px]">
          <ScrollReveal>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-body text-[0.9rem] text-[#A38F7B] hover:text-[#F5F0E8] transition-colors duration-300 mb-6"
            >
              <ChevronLeft size={16} /> All Services
            </Link>
            <span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">
              {service.category === 'recording' ? 'Recording' : service.category === 'production' ? 'Production' : 'Creative Services'}
            </span>
            <h1
              data-speakable
              className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.0] tracking-[-1.5px] text-[#F5F0E8] mt-3"
            >
              {service.name}
            </h1>
            <p className="font-body text-[1.15rem] text-[#A38F7B] mt-4 max-w-[640px] leading-[1.7]">
              {service.oneLiner}
            </p>
            <div className="mt-7 flex items-center gap-4 flex-wrap">
              <button
                onClick={openBooking}
                className="bg-[#E8A33D] text-[#0A0A0A] font-body text-[0.95rem] font-medium px-8 py-3 rounded-full hover:bg-[#D4873C] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(232,163,61,0.3)]"
              >
                Book a Session
              </button>
              <span className="font-body text-[0.9rem] text-[#A38F7B]">
                Starting from <span className="text-[#F5F0E8] font-medium">{service.startingPrice}</span>
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-[clamp(1.5rem,5vw,4rem)] pb-12">
        <div className="mx-auto max-w-[900px]">
          <ScrollReveal>
            <div className="aspect-[16/8] rounded-xl overflow-hidden">
              <img
                src={service.hero}
                alt={service.name}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-12 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[800px] space-y-6">
          <ScrollReveal>
            <p data-speakable className="font-body text-[1.1rem] text-[#F5F0E8] leading-[1.7]">
              {service.intro}
            </p>
          </ScrollReveal>
          {service.body.map((p, i) => (
            <ScrollReveal key={i} delay={i * 60}>
              <p className="font-body text-[1rem] text-[#A38F7B] leading-[1.7]">{p}</p>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="py-12 px-[clamp(1.5rem,5vw,4rem)] bg-[#111111]">
        <div className="mx-auto max-w-[800px]">
          <ScrollReveal>
            <h2
              data-speakable
              className="font-body text-[1.5rem] font-medium text-[#F5F0E8] mb-6"
            >
              What's Included
            </h2>
            <ul className="space-y-3">
              {service.whatsIncluded.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <Check size={18} className="text-[#4A7C59] shrink-0 mt-1" />
                  <span className="font-body text-[1rem] text-[#F5F0E8] leading-[1.6]">{f}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {recommendedEngineers.length > 0 && (
        <section className="py-12 px-[clamp(1.5rem,5vw,4rem)]">
          <div className="mx-auto max-w-[900px]">
            <ScrollReveal>
              <h2
                data-speakable
                className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium mb-6"
              >
                Engineers for {service.shortName}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {recommendedEngineers.map((eng) => (
                  <Link
                    key={eng.id}
                    to={`/engineers/${eng.id}`}
                    className="group flex items-center gap-4 bg-[#111111] border border-[rgba(245,240,232,0.08)] rounded-xl p-4 hover:border-[rgba(232,163,61,0.3)] transition-all duration-300"
                  >
                    <img
                      src={eng.image}
                      alt={eng.name}
                      className="w-14 h-14 rounded-full object-cover"
                      loading="lazy"
                    />
                    <div className="flex-1 min-w-0">
                      <h3 className="font-body text-[1rem] font-medium text-[#F5F0E8] group-hover:text-[#E8A33D] transition-colors duration-300">
                        {eng.name}
                      </h3>
                      <p className="font-body text-[0.8rem] text-[#A38F7B] uppercase tracking-[1px] mt-0.5">
                        {eng.specialty}
                      </p>
                    </div>
                    <ChevronRight size={16} className="text-[#A38F7B]" />
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      <section className="py-12 px-[clamp(1.5rem,5vw,4rem)] bg-[#111111]">
        <div className="mx-auto max-w-[800px]">
          <ScrollReveal className="mb-8">
            <h2
              data-speakable
              className="font-display text-[clamp(1.75rem,3vw,2.5rem)] text-[#F5F0E8]"
            >
              Frequently Asked
            </h2>
          </ScrollReveal>
          <div className="space-y-3">
            {service.faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 50}>
                <details className="group bg-[#0A0A0A] border border-[rgba(245,240,232,0.08)] rounded-xl overflow-hidden hover:border-[rgba(232,163,61,0.3)] transition-colors duration-300">
                  <summary className="cursor-pointer list-none flex items-center justify-between gap-4 p-5">
                    <h3 className="font-body text-[1rem] font-medium text-[#F5F0E8]">
                      {faq.question}
                    </h3>
                    <span className="shrink-0 w-7 h-7 rounded-full border border-[rgba(245,240,232,0.2)] flex items-center justify-center text-[#A38F7B] group-open:bg-[#E8A33D] group-open:border-[#E8A33D] group-open:text-[#0A0A0A] transition-all duration-300">
                      <span className="block group-open:hidden text-lg leading-none">+</span>
                      <span className="hidden group-open:block text-lg leading-none">−</span>
                    </span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="font-body text-[0.95rem] text-[#A38F7B] leading-[1.7]">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[clamp(4rem,8vw,6rem)] px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[700px] text-center">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-1px] text-[#F5F0E8]">
              Ready to book {service.shortName.toLowerCase()}?
            </h2>
            <p className="font-body text-[1rem] text-[#A38F7B] mt-3 mb-7 max-w-[520px] mx-auto">
              From {service.startingPrice}. Booking takes a minute.
            </p>
            <button
              onClick={openBooking}
              className="bg-[#E8A33D] text-[#0A0A0A] font-body text-[0.95rem] font-medium px-10 py-3.5 rounded-full hover:bg-[#D4873C] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(232,163,61,0.3)]"
            >
              Book a Session
            </button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
