import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronLeft, ChevronRight, MapPin } from 'lucide-react'
import { BookingContext } from '../lib/booking-context'
import ScrollReveal from '../components/ScrollReveal'
import JsonLd from '../components/JsonLd'
import { useSeo } from '../lib/seo'
import { neighborhoods } from '../lib/data'
import { buildBreadcrumbSchema, buildPlaceSchema } from '../lib/schemas'

export default function NeighborhoodPage() {
  const { slug } = useParams()
  const { openBooking } = useContext(BookingContext)
  const place = neighborhoods.find((n) => n.slug === slug)

  useSeo({
    title: place ? `Recording Studio Near ${place.name}` : 'Neighborhood',
    description: place
      ? `Legacy Music Group serves ${place.fullName} — ${place.driveTime} from the studio in Deep Ellum. ${place.oneLiner}`
      : 'Neighborhood page.',
    path: place ? `/neighborhoods/${place.slug}` : '/neighborhoods',
  })

  if (!place) {
    return (
      <div className="pt-40 pb-20 text-center px-4">
        <h1 className="font-display text-3xl text-[#F5F0E8]">Neighborhood not found</h1>
        <Link to="/" className="mt-4 inline-block text-[#E8A33D] hover:underline">
          Back home
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-20">
      <JsonLd
        id={`neighborhood-${place.slug}-place`}
        data={buildPlaceSchema({
          name: place.name,
          slug: place.slug,
          description: place.oneLiner,
          containedInPlace: 'Dallas-Fort Worth Metroplex',
          geo: place.geo,
        })}
      />
      <JsonLd
        id={`neighborhood-${place.slug}-breadcrumb`}
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Neighborhoods', path: '/' },
          { name: place.name, path: `/neighborhoods/${place.slug}` },
        ])}
      />

      <section className="pt-[clamp(4rem,8vw,6rem)] pb-12 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[900px]">
          <ScrollReveal>
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-body text-[0.9rem] text-[#A38F7B] hover:text-[#F5F0E8] transition-colors duration-300 mb-6"
            >
              <ChevronLeft size={16} /> All Neighborhoods
            </Link>
            <span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium flex items-center gap-2">
              <MapPin size={12} />
              {place.driveTime}
            </span>
            <h1
              data-speakable
              className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.0] tracking-[-1.5px] text-[#F5F0E8] mt-3"
            >
              {place.fullName}
            </h1>
            <p className="font-body text-[1.1rem] text-[#A38F7B] mt-4 max-w-[640px] leading-[1.7]">
              {place.oneLiner}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {place.image && (
        <section className="px-[clamp(1.5rem,5vw,4rem)] pb-12">
          <div className="mx-auto max-w-[900px]">
            <ScrollReveal>
              <div className="aspect-[16/8] rounded-xl overflow-hidden">
                <img
                  src={place.image}
                  alt={`Legacy Music Group near ${place.name}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      <section className="pb-12 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[800px] space-y-6">
          <ScrollReveal>
            <p
              data-speakable
              className="font-body text-[1.1rem] text-[#F5F0E8] leading-[1.7]"
            >
              {place.intro}
            </p>
          </ScrollReveal>
          {place.body.map((p, i) => (
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
              className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium mb-6"
            >
              Quick Reference
            </h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {place.highlights.map((h) => (
                <div
                  key={h.label}
                  className="bg-[#0A0A0A] border border-[rgba(245,240,232,0.08)] rounded-xl p-5"
                >
                  <dt className="font-body text-[0.75rem] uppercase tracking-[1.5px] text-[#A38F7B]">
                    {h.label}
                  </dt>
                  <dd className="font-body text-[1rem] text-[#F5F0E8] mt-1.5">{h.detail}</dd>
                </div>
              ))}
            </dl>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-[clamp(4rem,8vw,6rem)] px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[700px] text-center">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-1px] text-[#F5F0E8]">
              Easy from {place.name}.
            </h2>
            <p className="font-body text-[1rem] text-[#A38F7B] mt-3 mb-7 max-w-[520px] mx-auto">
              {place.driveTime} away — book your session in under a minute.
            </p>
            <button
              onClick={openBooking}
              className="bg-[#E8A33D] text-[#0A0A0A] font-body text-[0.95rem] font-medium px-10 py-3.5 rounded-full hover:bg-[#D4873C] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(232,163,61,0.3)]"
            >
              Book a Session
            </button>
            <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
              <Link
                to="/services"
                className="font-body text-[0.9rem] text-[#A38F7B] hover:text-[#F5F0E8] transition-colors duration-300 inline-flex items-center gap-1"
              >
                See Services <ChevronRight size={14} />
              </Link>
              <Link
                to="/pricing"
                className="font-body text-[0.9rem] text-[#A38F7B] hover:text-[#F5F0E8] transition-colors duration-300 inline-flex items-center gap-1"
              >
                See Pricing <ChevronRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
