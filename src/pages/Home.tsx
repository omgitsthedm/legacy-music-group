import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Mic, Sliders, Star, ChevronRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import Quickbook from '../components/Quickbook'
import JsonLd from '../components/JsonLd'
import { useSeo } from '../lib/seo'
import { localBusinessSchema, organizationSchema, websiteSchema } from '../lib/schemas'
import { reviews } from '../lib/data'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BOOKING_HANDOFF_URL } from '../lib/handoff'

gsap.registerPlugin(ScrollTrigger)

const studioImages = [
  { src: '/images/studio-control-room.jpg', caption: 'Control Room A' },
  { src: '/images/studio-vocal-booth.jpg', caption: 'Vocal Booth' },
  { src: '/images/studio-live-room.jpg', caption: 'Live Room' },
  { src: '/images/studio-lobby.jpg', caption: 'Creative Lounge' },
  { src: '/images/studio-gear.jpg', caption: 'Outboard Gear' },
  { src: '/images/about-studio-wide.jpg', caption: 'Studio Hallway' },
]

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const galleryInnerRef = useRef<HTMLDivElement>(null)

  useSeo({
    title: 'Recording Studio in Deep Ellum, Dallas',
    description:
      'Legacy Music Group is a Dallas recording studio and production company in Deep Ellum. Call, email, or use the studio’s current booking page.',
    path: '/',
  })

  useEffect(() => {
    const hero = heroRef.current
    if (!hero) return
    const tagline = hero.querySelector('.hero-tagline')
    const headline = hero.querySelector('.hero-headline')
    const subheadline = hero.querySelector('.hero-subheadline')
    const ctaGroup = hero.querySelector('.hero-cta')

    const tl = gsap.timeline({ delay: 0.3 })
    tl.fromTo(tagline, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' })
      .fromTo(headline, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }, '-=0.5')
      .fromTo(subheadline, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6')
      .fromTo(ctaGroup, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')

    return () => { tl.kill() }
  }, [])

  useEffect(() => {
    const gallery = galleryRef.current
    const inner = galleryInnerRef.current
    if (!gallery || !inner) return

    const scrollWidth = inner.scrollWidth - window.innerWidth

    const st = ScrollTrigger.create({
      trigger: gallery,
      start: 'top top',
      end: () => `+=${scrollWidth}`,
      pin: true,
      scrub: 1,
      animation: gsap.to(inner, { x: -scrollWidth, ease: 'none' }),
    })

    return () => { st.kill() }
  }, [])

  return (
    <div>
      <JsonLd id="home-organization" data={organizationSchema} />
      <JsonLd id="home-localbusiness" data={localBusinessSchema} />
      <JsonLd id="home-website" data={websiteSchema} />
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="/images/hero-studio-dark.jpg"
            alt="Deep Ellum recording studio control room"
            className="w-full h-full object-cover"
            fetchPriority="high"
          />
          {/* Vertical scrim — darkens top + ensures clean transition into next section */}
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,10,10,0.55)] via-[rgba(10,10,10,0.35)] to-[#0A0A0A]" />
          {/* Center vignette — darkens behind the headline so lamp glow doesn't fight text */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_center,rgba(10,10,10,0.55)_0%,rgba(10,10,10,0.2)_55%,#0A0A0A_100%)]" />
          {/* Soft horizontal band centered on the headline for extra contrast */}
          <div className="absolute inset-x-0 top-1/4 h-1/2 bg-[radial-gradient(ellipse_70%_60%_at_center,rgba(10,10,10,0.35)_0%,transparent_75%)]" />
        </div>

        <div className="relative z-10 text-center px-[clamp(1.5rem,5vw,4rem)] max-w-[820px] mx-auto">
          <p className="hero-tagline font-body text-[0.75rem] uppercase tracking-[3px] text-[#A38F7B] mb-6 opacity-0">
            Deep Ellum, Dallas
          </p>
          <h1 className="hero-headline font-display text-[clamp(3.5rem,8vw,7rem)] leading-[0.95] tracking-[-2px] text-[#F5F0E8] opacity-0 [text-shadow:0_2px_40px_rgba(0,0,0,0.5)]">
            Record Your Legacy
          </h1>
          <p className="hero-subheadline font-body text-[1.1rem] text-[rgba(245,240,232,0.8)] max-w-[540px] mx-auto mt-6 opacity-0">
            Recording studio and production services in Deep Ellum, Dallas.
          </p>
          <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 opacity-0">
            <a
              href={BOOKING_HANDOFF_URL}
              className="bg-[#E8A33D] text-[#0A0A0A] font-body text-[0.95rem] font-medium px-8 py-3.5 rounded-full hover:bg-[#D4873C] transition-colors duration-300"
            >
              Book on Legacy
            </a>
            <Link
              to="/studio"
              className="border border-[rgba(245,240,232,0.3)] text-[#F5F0E8] font-body text-[0.95rem] font-medium px-8 py-3.5 rounded-full hover:bg-[rgba(245,240,232,0.1)] transition-all duration-300"
            >
              Explore Studio
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-[#A38F7B] animate-pulse" />
        </div>
      </section>

      {/* Quickbook — fast-booking preview per BRIEF §14 */}
      <Quickbook />

      {/* What Legacy Is */}
      <section className="py-[clamp(6rem,12vw,10rem)] px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <ScrollReveal>
              <div className="space-y-6">
                <span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">
                  What Legacy Is
                </span>
                <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-1px] text-[#F5F0E8]">
                  Dallas' studio for serious artists.
                </h2>
                <p data-speakable className="font-body text-[1.05rem] text-[#A38F7B] leading-[1.8] max-w-[540px]">
                  Legacy Music Group is a Dallas recording studio and production company in Deep Ellum.
                </p>
                <p className="font-body text-[1rem] text-[#A38F7B] leading-[1.7] max-w-[540px]">
                  Use the studio’s current booking page, phone number, or email to confirm the right option for your project.
                </p>
                <Link
                  to="/studio"
                  className="inline-flex items-center gap-2 font-body text-[1rem] text-[#F5F0E8] hover:text-[#E8A33D] transition-colors duration-300 group"
                >
                  Explore the studio
                  <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="overflow-hidden rounded-xl">
                <img
                  src="/images/about-studio-wide.jpg"
                  alt="Inside Legacy Music Group's Deep Ellum studio"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform [transition-duration:1200ms] ease-out"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Studio Environment Showcase */}
      <section ref={galleryRef} className="relative bg-[#111111] min-h-screen overflow-hidden">
        <div className="pt-16 pb-8 px-[clamp(1.5rem,5vw,4rem)] text-center">
          <ScrollReveal>
            <span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">
              The Space
            </span>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-1px] text-[#F5F0E8] mt-3 mb-4">
              Built for Creativity
            </h2>
          </ScrollReveal>
        </div>
        <div ref={galleryInnerRef} className="flex gap-8 pl-[clamp(1.5rem,5vw,4rem)] pb-16 will-change-transform">
          {studioImages.map((img, i) => (
            <div
              key={i}
              className="relative shrink-0 w-[60vw] max-w-[900px] h-[70vh] max-h-[700px] rounded-lg overflow-hidden group"
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent p-6">
                <span className="font-body text-[0.85rem] uppercase tracking-[2px] text-[#A38F7B]">
                  {img.caption}
                </span>
              </div>
            </div>
          ))}
          <div className="shrink-0 w-[20vw]" />
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-[clamp(6rem,12vw,10rem)] px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal className="text-center mb-16">
            <span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">
              Services
            </span>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-1px] text-[#F5F0E8] mt-3 text-balance">
              Recording, mixing, mastering — under one roof.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Mic,
                title: 'Recording',
                body: 'Recording is currently published from $75 per hour. Confirm the right session with the studio.',
              },
              {
                icon: Sliders,
                title: 'Mixing & Mastering',
                body: 'Mixing is currently published from $150. Confirm deliverables directly with the studio.',
              },
              {
                icon: Star,
                title: 'Custom Production',
                body: 'Custom production is currently published at $500 per beat. Confirm details with the studio.',
              },
            ].map((service, i) => (
              <ScrollReveal key={service.title} delay={i * 100}>
                <Link
                  to="/services"
                  className="card-lift group block bg-[#111111] border border-[rgba(245,240,232,0.08)] rounded-xl p-8 h-full hover:border-[rgba(232,163,61,0.3)]"
                >
                  <div className="w-12 h-12 rounded-full bg-[rgba(232,163,61,0.15)] flex items-center justify-center mb-6">
                    <service.icon size={22} className="text-[#E8A33D]" />
                  </div>
                  <h3 className="font-body text-[1.25rem] font-medium text-[#F5F0E8] mb-3">
                    {service.title}
                  </h3>
                  <p className="font-body text-[0.95rem] text-[#A38F7B] leading-[1.6] mb-6">
                    {service.body}
                  </p>
                  <span className="inline-flex items-center gap-1 font-body text-[0.9rem] text-[#E8A33D]">
                    Studio information <ChevronRight size={14} />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Preview */}
      <section className="py-[clamp(6rem,12vw,10rem)] px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[1100px]">
          <ScrollReveal className="mb-12">
            <div className="flex items-end justify-between flex-wrap gap-4">
              <div>
                <span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">
                  What artists say
                </span>
                <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-1px] text-[#F5F0E8] mt-3">
                  Selected feedback from Legacy&apos;s current site.
                </h2>
              </div>
              <p className="font-body text-[0.85rem] text-[#A38F7B] max-w-[240px]">
                Selected feedback currently published by Legacy Music Group.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {reviews.slice(0, 3).map((r, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <article className="bg-[#111111] border border-[rgba(245,240,232,0.08)] rounded-xl p-6 h-full">
                  <div className="flex items-center gap-0.5 mb-3">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <Star
                        key={n}
                        size={12}
                        fill={n <= r.rating ? '#E8A33D' : 'transparent'}
                        className={n <= r.rating ? 'text-[#E8A33D]' : 'text-[rgba(232,163,61,0.4)]'}
                      />
                    ))}
                  </div>
                  <p className="font-body text-[0.95rem] text-[#F5F0E8] leading-[1.7] mb-4">
                    "{r.body.length > 180 ? r.body.slice(0, 180) + '…' : r.body}"
                  </p>
                  <p className="font-body text-[0.85rem] text-[#A38F7B] font-medium">
                    {r.author}
                  </p>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-10 text-center">
              <Link
                to="/reviews"
                className="inline-flex items-center gap-2 font-body text-[0.9rem] text-[#F5F0E8] hover:text-[#E8A33D] transition-colors duration-300 group"
              >
                Read all reviews
                <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-[clamp(6rem,10vw,8rem)] px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[700px] text-center">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-1px] text-[#F5F0E8] text-balance">
              Ready to make a record that lasts?
            </h2>
            <p className="font-body text-[1.1rem] text-[#A38F7B] mt-4 mb-8">
              Continue to Legacy&apos;s current booking page to review its live session options.
            </p>
            <a
              href={BOOKING_HANDOFF_URL}
              className="bg-[#E8A33D] text-[#0A0A0A] font-body text-[1rem] font-medium px-10 py-4 rounded-full hover:bg-[#D4873C] transition-colors duration-300"
            >
              Open booking page
            </a>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
