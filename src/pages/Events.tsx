import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, MapPin, ChevronRight, Mic, Clock, Users, Volume2 } from 'lucide-react'
import { BookingContext } from '../lib/booking-context'
import ScrollReveal from '../components/ScrollReveal'
import JsonLd from '../components/JsonLd'
import { useSeo } from '../lib/seo'
import { studioEvents, legacyLiveSeries } from '../lib/data'
import { buildBreadcrumbSchema, buildEventSchema } from '../lib/schemas'

const TX_TEA_ROOM_LOCATION = {
  name: 'TX Tea Room',
  addressLocality: 'Dallas',
  addressRegion: 'TX',
}

export default function Events() {
  const { openBooking } = useContext(BookingContext)

  useSeo({
    title: 'Legacy Live — Weekly Open Mic in Deep Ellum',
    description:
      'Legacy Live is our free weekly open mic for the Dallas artist community. Every Monday at TX Tea Room in Deep Ellum. Sign-ups 8:30 PM, show 9 PM.',
    path: '/events',
  })

  return (
    <div className="pt-20">
      <JsonLd
        id="events-breadcrumb"
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Events', path: '/events' },
        ])}
      />
      {studioEvents.map((e, i) => (
        <JsonLd
          key={e.slug}
          id={`event-${i}`}
          data={buildEventSchema({
            name: e.name,
            startDate: e.startDate,
            endDate: e.endDate,
            description: e.description,
            url: `https://legacy-music-group.netlify.app/events#${e.slug}`,
            image: e.image,
            location: TX_TEA_ROOM_LOCATION,
            isFree: true,
          })}
        />
      ))}

      <section className="pt-[clamp(4rem,8vw,6rem)] pb-12 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[1000px]">
          <ScrollReveal>
            <span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">
              Community
            </span>
            <h1
              data-speakable
              className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.0] tracking-[-1.5px] text-[#F5F0E8] mt-3"
            >
              {legacyLiveSeries.name}
            </h1>
            <p
              data-speakable
              className="font-body text-[1.2rem] text-[#F5F0E8] mt-5 max-w-[640px] leading-[1.5] italic"
            >
              "{legacyLiveSeries.tagline}"
            </p>
            <p className="font-body text-[1rem] text-[#A38F7B] mt-4 max-w-[640px] leading-[1.7]">
              {legacyLiveSeries.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Series info card */}
      <section className="pb-12 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[1000px]">
          <ScrollReveal>
            <div className="bg-[#111111] border border-[rgba(232,163,61,0.25)] rounded-2xl p-6 sm:p-8">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <Stat icon={<Calendar size={18} />} label="When" value={legacyLiveSeries.recurrence} />
                <Stat icon={<Clock size={18} />} label="Show" value={legacyLiveSeries.start} />
                <Stat icon={<MapPin size={18} />} label="Where" value={`${legacyLiveSeries.venue.name} · ${legacyLiveSeries.venue.neighborhood}`} />
                <Stat icon={<Mic size={18} />} label="Cost" value={legacyLiveSeries.cost} />
              </div>
              <div className="mt-6 pt-6 border-t border-[rgba(245,240,232,0.08)] grid grid-cols-1 sm:grid-cols-2 gap-4 text-[#A38F7B]">
                <p className="font-body text-[0.9rem] flex items-start gap-2">
                  <Users size={14} className="mt-1 shrink-0 text-[#E8A33D]" />
                  Sign-ups start at 8:30 PM. One song per artist, limited slots.
                </p>
                <p className="font-body text-[0.9rem] flex items-start gap-2">
                  <Volume2 size={14} className="mt-1 shrink-0 text-[#E8A33D]" />
                  Hosted by Legacy Music Group · Sound by Kyle Cannon
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Upcoming dates */}
      <section className="py-12 px-[clamp(1.5rem,5vw,4rem)] bg-[#111111]">
        <div className="mx-auto max-w-[1000px]">
          <ScrollReveal className="mb-8">
            <h2
              data-speakable
              className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium"
            >
              Upcoming dates
            </h2>
            <p className="font-display text-[clamp(1.5rem,2.5vw,2rem)] text-[#F5F0E8] mt-2">
              Next {studioEvents.length} Mondays at TX Tea Room
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {studioEvents.map((e, i) => {
              const start = new Date(e.startDate)
              return (
                <ScrollReveal key={e.slug} delay={i * 40}>
                  <article
                    id={e.slug}
                    className="bg-[#0A0A0A] border border-[rgba(245,240,232,0.08)] rounded-xl p-5 hover:border-[rgba(232,163,61,0.3)] transition-colors duration-300"
                  >
                    <p className="font-body text-[0.7rem] uppercase tracking-[1.5px] text-[#E8A33D] font-medium mb-3">
                      {start.toLocaleDateString('en-US', {
                        weekday: 'long',
                      })}
                    </p>
                    <p className="font-display text-[1.4rem] text-[#F5F0E8]">
                      {start.toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                      })}
                    </p>
                    <p className="font-body text-[0.85rem] text-[#A38F7B] mt-1">
                      {start.getFullYear()}
                    </p>
                    <p className="font-body text-[0.85rem] text-[#A38F7B] mt-3 flex items-center gap-1.5">
                      <Clock size={11} />
                      {start.toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: '2-digit',
                      })}
                      <span className="opacity-60">· doors 8:30 PM</span>
                    </p>
                  </article>
                </ScrollReveal>
              )
            })}
          </div>

          <ScrollReveal>
            <p className="font-body text-[0.85rem] text-[#A38F7B] mt-8 text-center">
              Show up early — we run on a first-come sign-up sheet, and slots fill fast.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-[clamp(4rem,8vw,6rem)] px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[700px] text-center">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] tracking-[-1px] text-[#F5F0E8]">
              Want to host an event here?
            </h2>
            <p className="font-body text-[1rem] text-[#A38F7B] mt-3 mb-7">
              Listening parties, label nights, intimate showcases — Legacy hosts a
              limited number of community events at the studio. Reach out.
            </p>
            <Link
              to="/contact"
              className="bg-[#E8A33D] text-[#0A0A0A] font-body text-[0.95rem] font-medium px-10 py-3.5 rounded-full hover:bg-[#D4873C] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(232,163,61,0.3)] inline-block"
            >
              Get in Touch
            </Link>
            <div className="mt-6">
              <button
                onClick={openBooking}
                className="font-body text-[0.9rem] text-[#A38F7B] hover:text-[#F5F0E8] transition-colors duration-300 inline-flex items-center gap-1"
              >
                Or book a regular session <ChevronRight size={14} />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div>
      <div className="flex items-center gap-2 text-[#E8A33D] mb-2">{icon}</div>
      <p className="font-body text-[0.7rem] uppercase tracking-[1.5px] text-[#A38F7B]">
        {label}
      </p>
      <p className="font-body text-[1rem] text-[#F5F0E8] mt-1">{value}</p>
    </div>
  )
}
