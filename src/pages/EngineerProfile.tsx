import { useParams, Link } from 'react-router-dom'
import { useContext } from 'react'
import { Play, ChevronLeft, ChevronRight } from 'lucide-react'
import { BookingContext } from '../App'
import ScrollReveal from '../components/ScrollReveal'
import JsonLd from '../components/JsonLd'
import { useSeo } from '../lib/seo'
import { engineers, services } from '../lib/data'
import { buildPersonSchema, buildBreadcrumbSchema } from '../lib/schemas'

export default function EngineerProfile() {
  const { id } = useParams()
  const { openBooking } = useContext(BookingContext)
  const engineer = engineers.find((e) => e.id === id)

  useSeo({
    title: engineer ? `${engineer.name} — Engineer` : 'Engineer Not Found',
    description: engineer
      ? `${engineer.name} — ${engineer.specialty} engineer at Legacy Music Group. ${engineer.stats.experience}, ${engineer.stats.projects}. Book a session.`
      : 'Engineer profile not found.',
    path: engineer ? `/engineers/${engineer.id}` : '/engineers',
    ogImage: engineer?.image,
    ogType: 'profile',
  })

  if (!engineer) {
    return (
      <div className="pt-40 pb-20 text-center px-4">
        <h1 className="font-display text-3xl text-[#F5F0E8]">Engineer not found</h1>
        <Link to="/engineers" className="mt-4 inline-block text-[#E8A33D] hover:underline">
          Back to all engineers
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-20">
      <JsonLd id={`engineer-${engineer.id}`} data={buildPersonSchema(engineer)} />
      <JsonLd
        id={`engineer-${engineer.id}-breadcrumb`}
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Engineers', path: '/engineers' },
          { name: engineer.name, path: `/engineers/${engineer.id}` },
        ])}
      />

      <section className="pt-[clamp(3rem,6vw,5rem)] pb-16 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[1400px]">
          <Link
            to="/engineers"
            className="inline-flex items-center gap-2 font-body text-[0.9rem] text-[#A38F7B] hover:text-[#F5F0E8] transition-colors duration-300 mb-8"
          >
            <ChevronLeft size={16} /> All Engineers
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-3">
              <div className="rounded-xl overflow-hidden">
                <img
                  src={engineer.image}
                  alt={`${engineer.name} — ${engineer.specialty} engineer at Legacy Music Group`}
                  className="w-full h-auto object-cover aspect-[4/3] lg:aspect-[16/10]"
                />
              </div>
            </div>
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal>
                <span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">
                  Engineer
                </span>
                <h1 className="font-display text-[clamp(2.5rem,4vw,3.5rem)] leading-[1.0] tracking-[-1.5px] text-[#F5F0E8] mt-2">
                  {engineer.name}
                </h1>
                <div className="flex flex-wrap gap-2 mt-4">
                  {engineer.genres.map((genre) => (
                    <span
                      key={genre}
                      className="font-body text-[0.8rem] text-[#A38F7B] bg-[#1A1A1A] border border-[rgba(245,240,232,0.1)] rounded-full px-3 py-1"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
                <button
                  onClick={openBooking}
                  className="mt-6 bg-[#E8A33D] text-[#0A0A0A] font-body text-[0.95rem] font-medium px-8 py-3 rounded-full hover:bg-[#D4873C] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(232,163,61,0.3)]"
                >
                  Book with {engineer.name.split(' ')[0]}
                </button>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-[clamp(1.5rem,5vw,4rem)] bg-[#0A0A0A]">
        <div className="mx-auto max-w-[700px]">
          <ScrollReveal>
            <h2 className="font-body text-[1.5rem] font-medium text-[#F5F0E8] mb-6">About</h2>
            <p className="font-body text-[1.05rem] text-[#A38F7B] leading-[1.7]">
              {engineer.bio}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="mt-10 flex items-center justify-center gap-8 py-6 border-y border-[rgba(245,240,232,0.08)]">
              {Object.entries(engineer.stats).map(([key, value]) => (
                <div key={key} className="text-center">
                  <p className="font-body text-[1.1rem] font-medium text-[#F5F0E8]">{value}</p>
                  <p className="font-body text-[0.75rem] uppercase tracking-[1px] text-[#A38F7B] mt-1">
                    {key === 'experience' ? 'Experience' : key === 'projects' ? 'Projects' : 'Highlight'}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {engineer.serviceSlugs.length > 0 && (
        <section className="py-12 px-[clamp(1.5rem,5vw,4rem)]">
          <div className="mx-auto max-w-[700px]">
            <ScrollReveal>
              <h2 className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium mb-5">
                Specializes In
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {engineer.serviceSlugs.map((slug) => {
                  const s = services.find((x) => x.slug === slug)
                  if (!s) return null
                  return (
                    <Link
                      key={slug}
                      to={`/services/${slug}`}
                      className="group flex items-center justify-between gap-3 bg-[#111111] border border-[rgba(245,240,232,0.08)] rounded-xl p-4 hover:border-[rgba(232,163,61,0.3)] transition-all duration-300"
                    >
                      <div>
                        <h3 className="font-body text-[0.95rem] font-medium text-[#F5F0E8] group-hover:text-[#E8A33D] transition-colors duration-300">
                          {s.shortName}
                        </h3>
                        <p className="font-body text-[0.8rem] text-[#A38F7B] mt-0.5">
                          From {s.startingPrice}
                        </p>
                      </div>
                      <ChevronRight size={16} className="text-[#A38F7B] group-hover:text-[#E8A33D]" />
                    </Link>
                  )
                })}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      <section className="py-16 px-[clamp(1.5rem,5vw,4rem)] bg-[#111111]">
        <div className="mx-auto max-w-[700px]">
          <ScrollReveal>
            <h2 className="font-body text-[1.5rem] font-medium text-[#F5F0E8] mb-2">Sound Samples</h2>
            <p className="font-body text-[0.85rem] text-[#A38F7B] mb-8">
              Audio playback wires up when real samples are added. (Placeholder titles below.)
            </p>
          </ScrollReveal>
          <div className="space-y-0">
            {engineer.samples.map((sample, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="group flex items-center gap-4 py-4 border-b border-[rgba(245,240,232,0.08)] hover:bg-[rgba(245,240,232,0.03)] transition-colors duration-300 px-2 -mx-2 rounded-lg cursor-pointer">
                  <button
                    aria-label={`Play sample ${sample.title}`}
                    className="w-10 h-10 rounded-full border border-[#A38F7B] flex items-center justify-center group-hover:border-[#E8A33D] group-hover:bg-[rgba(232,163,61,0.15)] transition-all duration-300"
                  >
                    <Play size={14} className="text-[#F5F0E8] ml-0.5" />
                  </button>
                  <div className="flex-1 min-w-0">
                    <p className="font-body text-[1rem] text-[#F5F0E8] truncate">{sample.title}</p>
                    <p className="font-body text-[0.85rem] text-[#A38F7B]">{sample.artist}</p>
                  </div>
                  <span className="font-body text-[0.85rem] text-[#A38F7B] shrink-0">{sample.duration}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-[clamp(4rem,8vw,6rem)] px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[700px] text-center">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(2rem,4vw,3rem)] leading-[1.1] tracking-[-1px] text-[#F5F0E8]">
              Work with {engineer.name.split(' ')[0]}
            </h2>
            <button
              onClick={openBooking}
              className="mt-6 bg-[#E8A33D] text-[#0A0A0A] font-body text-[1rem] font-medium px-10 py-4 rounded-full hover:bg-[#D4873C] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(232,163,61,0.3)]"
            >
              Book a Session
            </button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
