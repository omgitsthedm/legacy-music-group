import { useEffect, useRef, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Mic, Sliders, Star, Play, Pause, ChevronRight, Users, MapPin, Clock } from 'lucide-react'
import { BookingContext } from '../lib/booking-context'
import ScrollReveal from '../components/ScrollReveal'
import Quickbook from '../components/Quickbook'
import NewsletterSignup from '../components/NewsletterSignup'
import { useSeo } from '../lib/seo'
import { engineers, reviews, blogPosts, pressMentions, contact } from '../lib/data'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const studioImages = [
  { src: '/images/studio-control-room.jpg', caption: 'Control Room A' },
  { src: '/images/studio-vocal-booth.jpg', caption: 'Vocal Booth' },
  { src: '/images/studio-live-room.jpg', caption: 'Live Room' },
  { src: '/images/studio-lobby.jpg', caption: 'Creative Lounge' },
  { src: '/images/studio-gear.jpg', caption: 'Outboard Gear' },
  { src: '/images/about-studio-wide.jpg', caption: 'Studio Hallway' },
]

// PLACEHOLDER: clip metadata is fictional. See PLACEHOLDERS.md §Media.
const clips = [
  { src: '/videos/session-clip-1.mp4', title: 'Midnight Sessions', artist: 'Ari Lennox Vibe' },
  { src: '/videos/session-clip-2.mp4', title: 'Behind the Board', artist: 'Producer POV' },
  { src: '/videos/session-clip-3.mp4', title: 'Live Drums', artist: 'Deep Ellum Jam' },
  { src: '/videos/session-clip-4.mp4', title: 'Guitar Tracking', artist: 'Indie Artist Feature' },
]

type SessionClip = (typeof clips)[number]

function SessionClipCard({ clip }: { clip: SessionClip }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const play = () => {
    const video = videoRef.current
    if (!video) return
    void video.play().catch(() => setIsPlaying(false))
  }

  const playOnHover = (pointerType: string) => {
    if (pointerType !== 'mouse' || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    play()
  }

  const reset = () => {
    const video = videoRef.current
    if (!video) return
    video.pause()
    video.currentTime = 0
  }

  const toggle = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      play()
    } else {
      video.pause()
    }
  }

  return (
    <div
      className="group relative rounded-xl overflow-hidden bg-[#111111] aspect-square"
      onPointerEnter={(event) => playOnHover(event.pointerType)}
      onPointerLeave={(event) => { if (event.pointerType === 'mouse') reset() }}
    >
      <video
        ref={videoRef}
        src={clip.src}
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <button
        type="button"
        onClick={toggle}
        aria-pressed={isPlaying}
        aria-label={`${isPlaying ? 'Pause' : 'Play'} ${clip.title} by ${clip.artist}`}
        className="absolute inset-0 flex items-center justify-center rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#E8A33D]"
      >
        <span className="w-14 h-14 rounded-full bg-[rgba(10,10,10,0.7)] border border-[rgba(245,240,232,0.2)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {isPlaying ? (
            <Pause size={20} className="text-[#F5F0E8]" fill="#F5F0E8" />
          ) : (
            <Play size={20} className="text-[#F5F0E8] ml-1" fill="#F5F0E8" />
          )}
        </span>
      </button>
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[rgba(0,0,0,0.8)] to-transparent">
        <p className="font-body text-[0.9rem] font-medium text-[#F5F0E8]">{clip.artist}</p>
        <p className="font-body text-[0.8rem] text-[#A38F7B]">{clip.title}</p>
      </div>
    </div>
  )
}

export default function Home() {
  const { openBooking } = useContext(BookingContext)
  const heroRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)
  const galleryInnerRef = useRef<HTMLDivElement>(null)

  useSeo({
    title: 'Recording Studio in Deep Ellum, Dallas — 4.4★ on Google',
    description:
      "Legacy Music Group is Dallas' #1 full-service recording studio in Deep Ellum. Hit-quality recordings, top-tier audio engineers, affordable rates. Recording from $75/hr. Book in under a minute.",
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
            Hit-quality recordings from top-tier audio engineers in Deep Ellum, Dallas. Recording, mixing, mastering, and artist development at affordable rates.
          </p>
          <div className="hero-cta flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 opacity-0">
            <button
              onClick={openBooking}
              className="bg-[#E8A33D] text-[#0A0A0A] font-body text-[0.95rem] font-medium px-8 py-3.5 rounded-full hover:bg-[#D4873C] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(232,163,61,0.3)]"
            >
              Book a Session
            </button>
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
                  Legacy Music Group is a full-service recording studio and production company in Deep Ellum. Owned and operated by music business maven Matthew Medlock, we offer hit-quality recordings at affordable rates. Top-tier audio engineers will have your sound just right.
                </p>
                <p className="font-body text-[1rem] text-[#A38F7B] leading-[1.7] max-w-[540px]">
                  Recording, mixing, mastering, custom production, and artist development — all under one roof. Built for artists, producers, and engineers who want quality professional work without the gatekeeping or corporate feel of bigger studios.
                </p>
                <Link
                  to="/studio"
                  className="inline-flex items-center gap-2 font-body text-[1rem] text-[#F5F0E8] hover:text-[#E8A33D] transition-colors duration-300 group"
                >
                  Read Our Story
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
                body: 'Vocals, voiceovers, podcasts, full bands. From $75/hr with engineer.',
              },
              {
                icon: Sliders,
                title: 'Mixing & Mastering',
                body: 'Industry-standard mixing from $150. Mastering from $30. Two rounds of revisions included.',
              },
              {
                icon: Star,
                title: 'Artist Development',
                body: 'Strategy, branding, and music business consulting from $99 — beyond the recording booth.',
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
                  <span className="inline-flex items-center gap-1 font-body text-[0.9rem] text-[#E8A33D] group-hover:gap-2 transition-all duration-300">
                    Learn More <ChevronRight size={14} />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Engineer Preview */}
      <section className="py-[clamp(6rem,12vw,10rem)] px-[clamp(1.5rem,5vw,4rem)] bg-[#111111]">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal className="mb-12">
            <span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">
              The Team
            </span>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-1px] text-[#F5F0E8] mt-3 text-balance">
              Top-tier engineers. Major-label credits.
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {engineers.map((eng, i) => (
              <ScrollReveal key={eng.id} delay={i * 100}>
                <Link
                  to={`/engineers/${eng.id}`}
                  className="group block rounded-xl overflow-hidden bg-[#0A0A0A] border border-[rgba(245,240,232,0.08)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={eng.image}
                      alt={`${eng.name} — ${eng.specialty} engineer at Legacy Music Group`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-body text-[1.1rem] font-medium text-[#F5F0E8] group-hover:text-[#E8A33D] transition-colors duration-300">
                      {eng.name}
                    </h3>
                    <p className="font-body text-[0.85rem] text-[#A38F7B] mt-1">
                      {eng.specialty}
                    </p>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/engineers"
              className="inline-flex items-center gap-2 font-body text-[0.9rem] text-[#F5F0E8] hover:text-[#E8A33D] transition-colors duration-300 group"
            >
              View All Engineers
              <ChevronRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Press Strip */}
      <section className="py-10 px-[clamp(1.5rem,5vw,4rem)] border-y border-[rgba(245,240,232,0.05)]">
        <div className="mx-auto max-w-[1200px]">
          <p className="font-body text-[0.7rem] uppercase tracking-[2px] text-[#A38F7B] text-center mb-6">
            As featured in
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-60">
            {pressMentions.map((p) => (
              <span
                key={p.outlet}
                className="font-display text-[1.1rem] text-[#A38F7B] tracking-[1px]"
              >
                {p.outlet}
              </span>
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
                  Real reviews from real sessions.
                </h2>
              </div>
              <div className="flex items-center gap-3 bg-[#111111] border border-[rgba(232,163,61,0.25)] rounded-full px-4 py-2">
                <div className="flex items-center gap-0.5">
                  {[1, 2, 3, 4, 5].map((n) => (
                    <Star
                      key={n}
                      size={12}
                      fill={n <= Math.round(contact.rating.value) ? '#E8A33D' : 'transparent'}
                      className={
                        n <= Math.round(contact.rating.value)
                          ? 'text-[#E8A33D]'
                          : 'text-[rgba(232,163,61,0.4)]'
                      }
                    />
                  ))}
                </div>
                <span className="font-body text-[0.85rem] text-[#F5F0E8]">
                  <strong>{contact.rating.value.toFixed(1)}</strong> · {contact.rating.count} Google reviews
                </span>
              </div>
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

      {/* Legacy Live / Social Proof */}
      <section className="py-[clamp(6rem,12vw,10rem)] px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal className="text-center mb-12">
            <span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">
              Legacy Live
            </span>
            <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-1px] text-[#F5F0E8] mt-3">
              See what happens inside — and at our weekly open mic.
            </h2>
            <p className="font-body text-[0.95rem] text-[#A38F7B] mt-4 max-w-[560px] mx-auto leading-[1.7]">
              Our free Monday-night open mic at TX Tea Room is one of the most active
              songwriter rooms in Deep Ellum.{' '}
              <Link to="/events" className="text-[#E8A33D] hover:underline">
                See the next dates →
              </Link>
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {clips.map((clip, i) => (
              <ScrollReveal key={clip.src} delay={i * 100}>
                <SessionClipCard clip={clip} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Community Signal — BRIEF §14 + §11 */}
      <section className="py-[clamp(6rem,12vw,10rem)] px-[clamp(1.5rem,5vw,4rem)] bg-[#111111]">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <ScrollReveal>
              <div className="bg-[#0A0A0A] border border-[rgba(245,240,232,0.08)] rounded-xl p-6 sm:p-7 h-full">
                <div className="w-11 h-11 rounded-full bg-[rgba(232,163,61,0.15)] flex items-center justify-center mb-5">
                  <Mic size={20} className="text-[#E8A33D]" />
                </div>
                <h3 className="font-body text-[1.1rem] font-medium text-[#F5F0E8]">A studio</h3>
                <p className="font-body text-[0.95rem] text-[#A38F7B] mt-2 leading-[1.6]">
                  Acoustically tuned rooms, pro engineers, and gear that does the heavy lifting.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="bg-[#0A0A0A] border border-[rgba(245,240,232,0.08)] rounded-xl p-6 sm:p-7 h-full">
                <div className="w-11 h-11 rounded-full bg-[rgba(232,163,61,0.15)] flex items-center justify-center mb-5">
                  <Star size={20} className="text-[#E8A33D]" />
                </div>
                <h3 className="font-body text-[1.1rem] font-medium text-[#F5F0E8]">A development brand</h3>
                <p className="font-body text-[0.95rem] text-[#A38F7B] mt-2 leading-[1.6]">
                  Strategy, branding, creative direction. We help artists turn songs into careers.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="bg-[#0A0A0A] border border-[rgba(245,240,232,0.08)] rounded-xl p-6 sm:p-7 h-full">
                <div className="w-11 h-11 rounded-full bg-[rgba(232,163,61,0.15)] flex items-center justify-center mb-5">
                  <Users size={20} className="text-[#E8A33D]" />
                </div>
                <h3 className="font-body text-[1.1rem] font-medium text-[#F5F0E8]">A creative community</h3>
                <p className="font-body text-[0.95rem] text-[#A38F7B] mt-2 leading-[1.6]">
                  Connecting Dallas artists with each other, with venues, and with the wider Deep Ellum scene.
                </p>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="mt-10 flex items-center justify-center gap-2 text-[#A38F7B]">
              <MapPin size={14} />
              <span className="font-body text-[0.85rem] uppercase tracking-[2px]">
                Rooted in Deep Ellum, Dallas
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* From the Journal */}
      <section className="py-[clamp(6rem,12vw,10rem)] px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[1100px]">
          <ScrollReveal className="mb-12 flex items-end justify-between flex-wrap gap-4">
            <div>
              <span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">
                Journal
              </span>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] tracking-[-1px] text-[#F5F0E8] mt-3">
                Read up before you record.
              </h2>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center gap-1 font-body text-[0.9rem] text-[#A38F7B] hover:text-[#F5F0E8] transition-colors duration-300 group"
            >
              All articles
              <ChevronRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {blogPosts.slice(0, 3).map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 80}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block bg-[#111111] border border-[rgba(245,240,232,0.08)] rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] hover:border-[rgba(232,163,61,0.3)] transition-all duration-300 h-full"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-body text-[0.65rem] uppercase tracking-[1.5px] text-[#E8A33D] font-medium">
                        {post.category}
                      </span>
                      <span className="font-body text-[0.65rem] uppercase tracking-[1.5px] text-[#A38F7B] flex items-center gap-1">
                        <Clock size={10} /> {post.readMins}min
                      </span>
                    </div>
                    <h3 className="font-display text-[1.2rem] leading-[1.25] text-[#F5F0E8] group-hover:text-[#E8A33D] transition-colors duration-300">
                      {post.title}
                    </h3>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / Artist List */}
      <section className="py-[clamp(4rem,8vw,6rem)] px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[700px]">
          <ScrollReveal>
            <NewsletterSignup label="Join the Artist List" />
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
              Book your session in under a minute. We'll have your sound just right.
            </p>
            <button
              onClick={openBooking}
              className="btn-press bg-[#E8A33D] text-[#0A0A0A] font-body text-[1rem] font-medium px-10 py-4 rounded-full hover:bg-[#D4873C] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(232,163,61,0.3)]"
            >
              Book Now
            </button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
