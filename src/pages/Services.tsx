import { useContext } from 'react'
import { Link } from 'react-router'
import { Mic, Sliders, Compass, Check, ChevronRight } from 'lucide-react'
import { BookingContext } from '../lib/booking-context'
import ScrollReveal from '../components/ScrollReveal'
import JsonLd from '../components/JsonLd'
import { useSeo } from '../lib/seo'
import { pricing, services as genreServices } from '../lib/data'
import { buildBreadcrumbSchema, buildServiceSchema, buildItemListSchema } from '../lib/schemas'

const services = [
  {
    icon: Mic,
    title: 'Recording',
    body: 'Engineer-led and room-only sessions are available for vocals, instruments, podcasts, voiceover and project work. Legacy confirms the right room and setup before your date.',
    features: ['Vocal recording', 'Instrument sessions by scope', 'Engineer-led option', 'Room-only option'],
    image: '/images/studio-vocal-booth.jpg',
  },
  {
    icon: Sliders,
    title: 'Mixing & Mastering',
    body: 'Mixing and mastering are available for songs recorded at Legacy or delivered as an outside project. File requirements, revisions and delivery are confirmed with the studio.',
    features: ['Mixing', 'Mastering', 'Delivery requirements confirmed', 'Starting at $150 per song'],
    image: '/images/studio-control-room.jpg',
  },
  {
    icon: Compass,
    title: 'Artist Development',
    body: 'Project strategy and creative direction are available by consultation. The first conversation establishes fit, scope and useful next steps for the work.',
    features: ['$99 consultation', 'Project review', 'Creative direction', 'Custom longer scope'],
    image: '/images/about-studio-wide.jpg',
  },
]

export default function ServicesPage() {
  const { openBooking } = useContext(BookingContext)

  useSeo({
    title: 'Services',
    description:
      'Recording, mixing, mastering and artist-development services at Legacy Music Group in Deep Ellum, Dallas. Room rates start at $45 per hour.',
    path: '/services',
  })

  return (
    <div className="pt-20">
      <JsonLd
        id="services-breadcrumb"
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ])}
      />
      <JsonLd
        id="services-list"
        data={buildItemListSchema(
          'Services at Legacy Music Group',
          genreServices.map((s) => ({ name: s.name, url: `/services/${s.slug}` })),
        )}
      />
      {genreServices.map((s) => (
        <JsonLd
          key={s.slug}
          id={`service-${s.slug}-overview`}
          data={buildServiceSchema({
            name: s.name,
            slug: s.slug,
            description: s.oneLiner,
          })}
        />
      ))}

      <section className="pt-[clamp(4rem,8vw,6rem)] pb-16 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">
              What We Do
            </span>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.0] tracking-[-1.5px] text-[#f1f1ee] mt-3">
              Studio Services
            </h1>
            <p className="font-body text-[1rem] text-[#b7bcc2] mt-4 max-w-[600px] leading-[1.7]">
              Recording, mixing, mastering and artist development, scoped around the work you are ready to make.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-16 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[1000px] space-y-16">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 100}>
              <div className={`bg-[#14171a] rounded-sm overflow-hidden border border-[rgba(241,241,238,0.08)] flex flex-col ${
                i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}>
                <div className="lg:w-1/2">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto lg:h-full"
                    loading="lazy"
                  />
                </div>
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div className="w-12 h-12 rounded-sm bg-[rgba(232,163,61,0.15)] flex items-center justify-center mb-6">
                    <service.icon size={24} className="text-[#E8A33D]" />
                  </div>
                  <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] text-[#f1f1ee] mb-4">
                    {service.title}
                  </h2>
                  <p className="font-body text-[1rem] text-[#b7bcc2] leading-[1.7] mb-6">
                    {service.body}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <Check size={16} className="text-[#4A7C59] shrink-0" />
                        <span className="font-body text-[0.95rem] text-[#f1f1ee]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={openBooking}
                    className="inline-flex items-center gap-1 font-body text-[0.95rem] text-[#E8A33D] hover:gap-2 transition-all duration-300 self-start"
                  >
                    Plan This Service <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Genre / category service pages */}
      <section className="py-16 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[1000px]">
          <ScrollReveal className="text-center mb-10">
            <span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">
              Specialized
            </span>
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] text-[#f1f1ee] mt-3">
              Genre &amp; format-specific recording
            </h2>
            <p className="font-body text-[0.95rem] text-[#b7bcc2] mt-3 max-w-[560px] mx-auto">
              Sessions tuned for what you actually do - rap, R&amp;B, podcasts, voiceover, artist development.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {genreServices.map((s, i) => (
              <ScrollReveal key={s.slug} delay={i * 60}>
                <Link
                  to={`/services/${s.slug}`}
                  className="group block bg-[#14171a] border border-[rgba(241,241,238,0.08)] rounded-sm overflow-hidden hover:border-[rgba(232,163,61,0.3)] hover:-translate-y-1 transition-all duration-300 h-full"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-body text-[1.05rem] font-medium text-[#f1f1ee] group-hover:text-[#E8A33D] transition-colors duration-300">
                      {s.shortName}
                    </h3>
                    <p className="font-body text-[0.85rem] text-[#b7bcc2] mt-1.5 leading-[1.5]">
                      {s.oneLiner}
                    </p>
                    <p className="font-body text-[0.75rem] text-[#E8A33D] mt-3 font-medium">
                      From {s.startingPrice}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-[clamp(1.5rem,5vw,4rem)] bg-[#14171a]">
        <div className="mx-auto max-w-[800px]">
          <ScrollReveal className="text-center mb-3">
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] text-[#f1f1ee]">
              Session Rates
            </h2>
          </ScrollReveal>
          <ScrollReveal className="text-center mb-10">
            <p className="font-body text-[0.85rem] text-[#b7bcc2]">
              Published starting rates. The studio confirms availability, deposit and final scope.
            </p>
          </ScrollReveal>

          <ScrollReveal>
            <div className="border border-[rgba(241,241,238,0.08)] rounded-sm overflow-hidden">
              <div className="grid grid-cols-3 bg-[#1c2024] px-6 py-4">
                <span className="font-body text-[0.8rem] uppercase tracking-[1px] text-[#b7bcc2]">Service</span>
                <span className="font-body text-[0.8rem] uppercase tracking-[1px] text-[#b7bcc2] text-center">With Engineer</span>
                <span className="font-body text-[0.8rem] uppercase tracking-[1px] text-[#b7bcc2] text-center">Without Engineer</span>
              </div>
              {pricing.map((row, i) => (
                <div
                  key={row.service}
                  className={`grid grid-cols-3 px-6 py-4 items-center ${
                    i < pricing.length - 1 ? 'border-b border-[rgba(241,241,238,0.05)]' : ''
                  }`}
                >
                  <span className="font-body text-[0.95rem] text-[#b7bcc2]">{row.service}</span>
                  <span className="font-body text-[0.95rem] text-[#f1f1ee] font-medium text-center">{row.withEngineer}</span>
                  <span className="font-body text-[0.95rem] text-[#f1f1ee] font-medium text-center">{row.withoutEngineer}</span>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <div className="mt-8 text-center flex items-center justify-center gap-4 flex-wrap">
            <button
              onClick={openBooking}
              className="bg-[#E8A33D] text-[#0b0c0d] font-body text-[0.95rem] font-medium px-8 py-3 rounded-sm hover:bg-[#D4873C] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(232,163,61,0.3)]"
            >
              Book a Session
            </button>
            <Link
              to="/pricing"
              className="font-body text-[0.9rem] text-[#b7bcc2] hover:text-[#f1f1ee] transition-colors duration-300 inline-flex items-center gap-1"
            >
              See full pricing <ChevronRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
