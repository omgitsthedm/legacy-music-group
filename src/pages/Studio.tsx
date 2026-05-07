import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import JsonLd from '../components/JsonLd'
import { useSeo } from '../lib/seo'
import { buildBreadcrumbSchema } from '../lib/schemas'

const galleryImages = [
  '/images/studio-control-room.jpg',
  '/images/studio-vocal-booth.jpg',
  '/images/studio-live-room.jpg',
  '/images/studio-lobby.jpg',
  '/images/studio-gear.jpg',
  '/images/about-studio-wide.jpg',
]

export default function Studio() {
  useSeo({
    title: 'The Studio',
    description:
      'Inside Legacy Music Group — acoustically treated rooms, professional gear, and a creative atmosphere designed for serious work in Deep Ellum, Dallas.',
    path: '/studio',
  })

  return (
    <div className="pt-20">
      <JsonLd
        id="studio-breadcrumb"
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Studio', path: '/studio' },
        ])}
      />

      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <img
          src="/images/about-studio-wide.jpg"
          alt="Inside Legacy Music Group's Deep Ellum studio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[rgba(10,10,10,0.3)] to-[rgba(10,10,10,0.5)]" />
        <div className="absolute bottom-0 left-0 right-0 p-[clamp(1.5rem,5vw,4rem)]">
          <div className="mx-auto max-w-[1400px]">
            <ScrollReveal>
              <span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">
                The Space
              </span>
              <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.0] tracking-[-1.5px] text-[#F5F0E8] mt-3">
                The Studio
              </h1>
              <p className="font-body text-[1.1rem] text-[#A38F7B] mt-3 max-w-[500px]">
                Designed for sound. Built for creativity.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-[clamp(6rem,12vw,10rem)] px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div className="space-y-6">
                <span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">
                  Philosophy
                </span>
                <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-1px] text-[#F5F0E8]">
                  Where precision meets vibe.
                </h2>
                <p className="font-body text-[1rem] text-[#A38F7B] leading-[1.7]">
                  Every room at Legacy is acoustically treated and equipped with industry-standard monitoring. But beyond the gear, we've curated an atmosphere that puts artists at ease. We believe the best takes happen when you feel at home.
                </p>
                <p className="font-body text-[1rem] text-[#A38F7B] leading-[1.7]">
                  From the moment you walk through our doors in Deep Ellum, you are not just booking studio time — you are entering a creative space designed to help you produce your best work.
                </p>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 font-body text-[1rem] text-[#F5F0E8] hover:text-[#E8A33D] transition-colors duration-300 group"
                >
                  Explore Our Services
                  <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/images/studio-control-room.jpg"
                  alt="Legacy Music Group control room with mixing desk"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-[1.2s] ease-out"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-[clamp(6rem,12vw,10rem)] px-[clamp(1.5rem,5vw,4rem)] bg-[#111111]">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal delay={150} className="order-2 lg:order-1">
              <div className="rounded-xl overflow-hidden">
                <img
                  src="/images/studio-lobby.jpg"
                  alt="Legacy Music Group studio lobby in Deep Ellum"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-[1.2s] ease-out"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal className="order-1 lg:order-2">
              <div className="space-y-6">
                <span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">
                  Location
                </span>
                <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-1px] text-[#F5F0E8]">
                  Rooted in Deep Ellum.
                </h2>
                <p className="font-body text-[1rem] text-[#A38F7B] leading-[1.7]">
                  We're proud to be part of Dallas' most historic creative district. Deep Ellum has been the heartbeat of the city's music scene for decades, and Legacy was built to continue that story.
                </p>
                <p className="font-body text-[1rem] text-[#A38F7B] leading-[1.7]">
                  Walk out of a session and into legendary venues, art galleries, and late-night food spots. The neighborhood fuels the creativity that happens inside our walls.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="text-center px-4 py-3 bg-[#1A1A1A] rounded-lg border border-[rgba(245,240,232,0.08)]">
                    <p className="font-body text-[1.25rem] font-medium text-[#F5F0E8]">Deep Ellum</p>
                    <p className="font-body text-[0.75rem] uppercase tracking-[1px] text-[#A38F7B]">Neighborhood</p>
                  </div>
                  <div className="text-center px-4 py-3 bg-[#1A1A1A] rounded-lg border border-[rgba(245,240,232,0.08)]">
                    <p className="font-body text-[1.25rem] font-medium text-[#F5F0E8]">Dallas, TX</p>
                    <p className="font-body text-[0.75rem] uppercase tracking-[1px] text-[#A38F7B]">City</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Internal links to deeper pages */}
      <section className="py-12 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              to="/gear"
              className="group block bg-[#111111] border border-[rgba(245,240,232,0.08)] rounded-xl p-6 hover:border-[rgba(232,163,61,0.3)] hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-body text-[0.7rem] uppercase tracking-[2px] text-[#E8A33D] font-medium mb-2">
                Inside the room
              </h3>
              <p className="font-display text-[1.4rem] text-[#F5F0E8] group-hover:text-[#E8A33D] transition-colors duration-300">
                See the full gear list
              </p>
              <p className="font-body text-[0.85rem] text-[#A38F7B] mt-2">
                Console, mics, outboard, monitoring — what makes a session sound like a record.
              </p>
            </Link>
            <Link
              to="/neighborhoods/deep-ellum"
              className="group block bg-[#111111] border border-[rgba(245,240,232,0.08)] rounded-xl p-6 hover:border-[rgba(232,163,61,0.3)] hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-body text-[0.7rem] uppercase tracking-[2px] text-[#E8A33D] font-medium mb-2">
                The neighborhood
              </h3>
              <p className="font-display text-[1.4rem] text-[#F5F0E8] group-hover:text-[#E8A33D] transition-colors duration-300">
                About Deep Ellum
              </p>
              <p className="font-body text-[0.85rem] text-[#A38F7B] mt-2">
                The history, the venues, and why we built Legacy here.
              </p>
            </Link>
            <Link
              to="/pricing"
              className="group block bg-[#111111] border border-[rgba(245,240,232,0.08)] rounded-xl p-6 hover:border-[rgba(232,163,61,0.3)] hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="font-body text-[0.7rem] uppercase tracking-[2px] text-[#E8A33D] font-medium mb-2">
                Transparent rates
              </h3>
              <p className="font-display text-[1.4rem] text-[#F5F0E8] group-hover:text-[#E8A33D] transition-colors duration-300">
                See pricing
              </p>
              <p className="font-body text-[0.85rem] text-[#A38F7B] mt-2">
                Hourly, blocks, day rates, and packages — all published.
              </p>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-[clamp(6rem,12vw,10rem)] px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal className="text-center mb-12">
            <span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">
              Gallery
            </span>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-1px] text-[#F5F0E8] mt-3">
              Inside Legacy
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="aspect-square rounded-lg overflow-hidden group">
                  <img
                    src={src}
                    alt={`Studio image ${i + 1} — Legacy Music Group`}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.02] group-hover:brightness-110"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
