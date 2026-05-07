import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, MapPin, ChevronRight } from 'lucide-react'
import { BookingContext } from '../App'
import ScrollReveal from '../components/ScrollReveal'
import JsonLd from '../components/JsonLd'
import { useSeo } from '../lib/seo'
import { studioEvents } from '../lib/data'
import { buildBreadcrumbSchema, buildEventSchema } from '../lib/schemas'

export default function Events() {
  const { openBooking } = useContext(BookingContext)

  useSeo({
    title: 'Events — Open Mics, Songwriter Circles, Sessions',
    description:
      'Open mics, songwriter circles, and community events at Legacy Music Group in Deep Ellum, Dallas. Free or low-cost gatherings for working artists.',
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
            url: `https://legacymusicgroup.com/events#${e.slug}`,
            image: e.image,
          })}
        />
      ))}

      <section className="pt-[clamp(4rem,8vw,6rem)] pb-12 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[900px]">
          <ScrollReveal>
            <span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">
              Community
            </span>
            <h1
              data-speakable
              className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.0] tracking-[-1.5px] text-[#F5F0E8] mt-3"
            >
              Events at Legacy
            </h1>
            <p className="font-body text-[1rem] text-[#A38F7B] mt-4 max-w-[640px] leading-[1.7]">
              Open mics, songwriter circles, listening parties — free and low-cost
              gatherings for working Dallas artists. Community is part of the
              development.
            </p>
            <p className="font-body text-[0.85rem] text-[#A38F7B] mt-3">
              Calendar is a placeholder for design preview. Real events scheduled by
              the Legacy team.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-[clamp(6rem,12vw,10rem)] px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[900px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {studioEvents.map((e, i) => {
              const start = new Date(e.startDate)
              const end = e.endDate ? new Date(e.endDate) : null
              return (
                <ScrollReveal key={e.slug} delay={i * 60}>
                  <article id={e.slug} className="bg-[#111111] border border-[rgba(245,240,232,0.08)] rounded-xl overflow-hidden hover:border-[rgba(232,163,61,0.3)] transition-colors duration-300 h-full flex flex-col">
                    {e.image && (
                      <div className="aspect-[16/9] overflow-hidden">
                        <img
                          src={e.image}
                          alt={e.name}
                          className="w-full h-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="p-6 flex-1 flex flex-col">
                      <h2 className="font-display text-[1.5rem] leading-[1.2] text-[#F5F0E8]">
                        {e.name}
                      </h2>
                      <div className="mt-3 space-y-1.5">
                        <p className="font-body text-[0.85rem] text-[#A38F7B] flex items-center gap-2">
                          <Calendar size={12} />
                          {start.toLocaleDateString('en-US', {
                            weekday: 'long',
                            month: 'long',
                            day: 'numeric',
                            year: 'numeric',
                          })}
                          {' · '}
                          {start.toLocaleTimeString('en-US', {
                            hour: 'numeric',
                            minute: '2-digit',
                          })}
                          {end && (
                            <>
                              {' – '}
                              {end.toLocaleTimeString('en-US', {
                                hour: 'numeric',
                                minute: '2-digit',
                              })}
                            </>
                          )}
                        </p>
                        <p className="font-body text-[0.85rem] text-[#A38F7B] flex items-center gap-2">
                          <MapPin size={12} />
                          Legacy Music Group · Deep Ellum, Dallas
                        </p>
                      </div>
                      <p className="font-body text-[0.95rem] text-[#A38F7B] mt-4 leading-[1.6] flex-1">
                        {e.description}
                      </p>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-1 mt-5 font-body text-[0.9rem] text-[#E8A33D] hover:gap-2 transition-all duration-300"
                      >
                        RSVP <ChevronRight size={14} />
                      </Link>
                    </div>
                  </article>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="pb-[clamp(6rem,10vw,8rem)] px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[700px] text-center">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] tracking-[-1px] text-[#F5F0E8]">
              Want to host an event here?
            </h2>
            <p className="font-body text-[1rem] text-[#A38F7B] mt-3 mb-7">
              Listening parties, label nights, intimate showcases — Legacy hosts a
              limited number of community events. Reach out.
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
