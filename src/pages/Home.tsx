import { useContext, useEffect, useRef } from 'react'
import { ArrowUpRight, Clock3, MapPin, Star } from 'lucide-react'
import { Link } from 'react-router'
import SessionBuilder from '../components/SessionBuilder'
import { BookingContext } from '../lib/booking-context'
import { contact, engineers, reviews } from '../lib/data'
import { useSeo } from '../lib/seo'

const studioFrames = [
  {
    src: '/images/studio-control-room.jpg',
    alt: 'Legacy Music Group control room',
    label: 'Control room',
    className: 'md:col-span-7 md:row-span-2',
  },
  {
    src: '/images/studio-vocal-booth.jpg',
    alt: 'Legacy Music Group vocal booth',
    label: 'Vocal booth',
    className: 'md:col-span-5',
  },
  {
    src: '/images/studio-gear.jpg',
    alt: 'Recording equipment at Legacy Music Group',
    label: 'Signal chain',
    className: 'md:col-span-5',
  },
  {
    src: '/images/studio-live-room.jpg',
    alt: 'Legacy Music Group live room',
    label: 'Live room',
    className: 'md:col-span-5',
  },
  {
    src: '/images/studio-lobby.jpg',
    alt: 'Creative lounge at Legacy Music Group',
    label: 'Creative lounge',
    className: 'md:col-span-7',
  },
]

export default function Home() {
  const { openBooking } = useContext(BookingContext)
  const heroRef = useRef<HTMLElement>(null)
  const storyImageRef = useRef<HTMLDivElement>(null)

  useSeo({
    title: 'Recording Studio in Deep Ellum, Dallas',
    description:
      'Engineer-led recording, mixing, mastering and artist development in Deep Ellum. Published rates start at $45 per hour.',
    path: '/',
    ogImage: '/images/legacy-social-card-gold.jpg',
  })

  useEffect(() => {
    const hero = heroRef.current
    if (!hero || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const animations: Animation[] = []
    hero.querySelectorAll<HTMLElement>('[data-hero-reveal]').forEach((item, index) => {
      animations.push(
        item.animate(
          [
            { opacity: 0, transform: 'translateY(28px)' },
            { opacity: 1, transform: 'translateY(0)' },
          ],
          {
            duration: 820,
            delay: index * 100,
            easing: 'cubic-bezier(0.16, 1, 0.3, 1)',
            fill: 'both',
          },
        ),
      )
    })

    const heroImage = hero.querySelector<HTMLElement>('[data-hero-image]')
    if (heroImage) {
      animations.push(
        heroImage.animate(
          [
            { opacity: 0, transform: 'scale(1.045)' },
            { opacity: 1, transform: 'scale(1)' },
          ],
          { duration: 1300, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', fill: 'both' },
        ),
      )
    }

    return () => animations.forEach((animation) => animation.cancel())
  }, [])

  useEffect(() => {
    const frame = storyImageRef.current
    const image = frame?.querySelector('img')
    if (!frame || !image || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let animation: Animation | undefined
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        animation = image.animate(
          [{ transform: 'scale(1.06)' }, { transform: 'scale(1)' }],
          { duration: 1200, easing: 'cubic-bezier(0.16, 1, 0.3, 1)', fill: 'both' },
        )
        observer.disconnect()
      },
      { threshold: 0.2 },
    )

    observer.observe(frame)
    return () => {
      observer.disconnect()
      animation?.cancel()
    }
  }, [])

  return (
    <div className="overflow-hidden bg-[#0b0c0d]">
      <section
        ref={heroRef}
        className="relative isolate min-h-[100dvh] overflow-hidden border-b border-white/15 pt-20"
      >
        <div className="absolute inset-0 bg-[#0b0c0d]" />
        <div
          data-hero-image
          className="absolute inset-y-0 right-0 w-full lg:w-[64%]"
          aria-hidden="true"
        >
          <img
            src="/images/control-room-signal-gold.webp"
            alt=""
            className="h-full w-full object-cover object-center"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,#0b0c0d_2%,rgba(11,12,13,0.9)_23%,rgba(11,12,13,0.25)_62%,rgba(11,12,13,0.5)_100%)] lg:bg-[linear-gradient(90deg,#0b0c0d_0%,rgba(11,12,13,0.94)_20%,rgba(11,12,13,0.18)_70%,rgba(11,12,13,0.45)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,12,13,0.3),transparent_45%,#0b0c0d_100%)]" />
        </div>

        <div className="site-shell relative z-10 grid min-h-[calc(100dvh-5rem)] items-center py-10 lg:grid-cols-12">
          <div className="max-w-[49rem] lg:col-span-8">
            <p data-hero-reveal className="control-label mb-6">
              Legacy Music Group, Deep Ellum
            </p>
            <h1
              data-hero-reveal
              className="font-display max-w-[9.8ch] text-[clamp(4.6rem,11vw,9.8rem)] font-semibold uppercase leading-[0.78] tracking-[-0.045em] text-[#f1f1ee]"
            >
              Make the record people remember.
            </h1>
            <p
              data-hero-reveal
              className="mt-7 max-w-[34rem] text-base font-medium leading-7 text-[#d3d6d8] sm:text-lg"
            >
              Engineer-led recording, mixing and artist development in the center of Dallas music.
            </p>
            <div data-hero-reveal className="mt-9 flex flex-col gap-3 sm:flex-row">
              <button type="button" onClick={openBooking} className="signal-button">
                Book a session
              </button>
              <Link to="/studio" className="signal-button signal-button-secondary">
                Explore the studio
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/15" aria-labelledby="proof-heading">
        <div className="site-shell grid lg:grid-cols-[1.18fr_0.82fr]">
          <div className="border-b border-white/15 py-10 lg:border-b-0 lg:border-r lg:py-14 lg:pr-14">
            <p id="proof-heading" className="font-display text-3xl font-medium uppercase tracking-tight text-[#f1f1ee] sm:text-4xl">
              Named among the studios shaping North Texas sound.
            </p>
            <a
              href="https://www.dmagazine.com/publications/d-magazine/2026/july/the-25-most-influential-dallas-recording-artists-of-the-last-25-years/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#E8A33D] link-underline"
            >
              Read the D Magazine feature
              <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.8} />
            </a>
          </div>
          <div className="grid grid-cols-2 gap-px bg-white/15 lg:grid-cols-1">
            <div className="bg-[#0b0c0d] px-5 py-8 sm:px-8">
              <p className="control-label mb-2">Recorded here</p>
              <p className="font-display text-2xl uppercase leading-tight text-[#f1f1ee]">
                Post Malone, André 3000, Mac Miller
              </p>
            </div>
            <div className="bg-[#0b0c0d] px-5 py-8 sm:px-8">
              <p className="control-label mb-2">In the press</p>
              <a
                href="https://www.dallasobserver.com/music/deep-ellums-matthew-medlock-is-undeterred-by-shooting-at-his-recording-studio-8278683/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display text-2xl uppercase leading-tight text-[#f1f1ee] hover:text-[#E8A33D]"
              >
                Dallas Observer
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space" aria-labelledby="legacy-story-heading">
        <div className="site-shell grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:gap-20">
          <div className="order-2 lg:order-1">
            <h2
              id="legacy-story-heading"
              className="font-display text-[clamp(3.4rem,7vw,7rem)] font-semibold uppercase leading-[0.84] tracking-[-0.035em] text-[#f1f1ee]"
            >
              Built inside the scene, not beside it.
            </h2>
            <p data-speakable className="mt-7 max-w-[52ch] text-base leading-7 text-[#b7bcc2]">
              Legacy is an independent recording studio and artist-development company at 2815 Main Street. Matthew Medlock built it for artists who want serious engineering without corporate distance.
            </p>
            <dl className="mt-10 grid gap-6 border-t border-white/15 pt-6 sm:grid-cols-2">
              <div>
                <dt className="control-label mb-2">Location</dt>
                <dd className="flex gap-3 text-sm leading-6 text-[#f1f1ee]">
                  <MapPin aria-hidden="true" className="mt-0.5 shrink-0 text-[#E8A33D]" size={17} strokeWidth={1.7} />
                  <span>{contact.addressLine1}<br />{contact.addressLine2}</span>
                </dd>
              </div>
              <div>
                <dt className="control-label mb-2">Hours</dt>
                <dd className="flex gap-3 text-sm leading-6 text-[#f1f1ee]">
                  <Clock3 aria-hidden="true" className="mt-0.5 shrink-0 text-[#E8A33D]" size={17} strokeWidth={1.7} />
                  <span>{contact.hours}</span>
                </dd>
              </div>
            </dl>
            <Link
              to="/studio"
              className="mt-10 inline-flex min-h-11 items-center gap-2 font-bold text-[#f1f1ee] link-underline hover:text-[#E8A33D]"
            >
              Read the studio story
            </Link>
          </div>

          <div ref={storyImageRef} className="order-1 overflow-hidden border border-white/15 lg:order-2">
            <img
              src="/images/about-studio-wide.jpg"
              alt="Inside Legacy Music Group in Deep Ellum"
              className="aspect-[5/4] h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section-space border-y border-white/15 bg-[#0e1012]" aria-labelledby="rooms-heading">
        <div className="site-shell">
          <h2
            id="rooms-heading"
            className="max-w-[11ch] font-display text-[clamp(3.6rem,8vw,7.8rem)] font-semibold uppercase leading-[0.82] tracking-[-0.04em] text-[#f1f1ee]"
          >
            Every room has a job.
          </h2>
          <p className="mt-6 max-w-[48ch] text-base leading-7 text-[#b7bcc2]">
            Track vocals, cut live parts, edit at the board or reset between takes. The space follows the work.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-12 md:auto-rows-[15rem]">
            {studioFrames.map((frame) => (
              <figure key={frame.label} className={frame.className}>
                <div className="group h-full overflow-hidden border border-white/15 bg-[#14171a]">
                  <img
                    src={frame.src}
                    alt={frame.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.025]"
                  />
                </div>
                <figcaption className="mt-2 font-control text-[0.68rem] uppercase tracking-[0.1em] text-[#b7bcc2]">
                  {frame.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <SessionBuilder />

      <section className="section-space border-y border-white/15" aria-labelledby="engineers-heading">
        <div className="site-shell">
          <h2
            id="engineers-heading"
            className="font-display text-[clamp(3.5rem,8vw,7.6rem)] font-semibold uppercase leading-[0.82] tracking-[-0.04em] text-[#f1f1ee]"
          >
            The people at the board.
          </h2>
          <p className="mt-6 max-w-[48ch] text-base leading-7 text-[#b7bcc2]">
            Choose the engineer whose working style fits the record, or let the studio make the match.
          </p>

          <div className="mt-12 grid gap-5 md:grid-cols-12">
            {engineers.map((engineer, index) => (
              <Link
                key={engineer.id}
                to={`/engineers/${engineer.id}`}
                className={`group border border-white/15 bg-[#14171a] ${
                  index < 2 ? 'md:col-span-6' : index === 3 ? 'md:col-span-8' : 'md:col-span-4'
                }`}
              >
                <div className={`${index < 2 ? 'aspect-[4/3]' : 'aspect-[16/10]'} overflow-hidden`}>
                  <img
                    src={engineer.image}
                    alt={`${engineer.name}, ${engineer.specialty} at Legacy Music Group`}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.025]"
                  />
                </div>
                <div className="flex items-end justify-between gap-5 border-t border-white/15 p-5 sm:p-6">
                  <div>
                    <h3 className="font-display text-3xl font-medium uppercase text-[#f1f1ee] group-hover:text-[#E8A33D]">
                      {engineer.name}
                    </h3>
                    <p className="mt-1 text-sm text-[#b7bcc2]">{engineer.specialty}</p>
                  </div>
                  <ArrowUpRight aria-hidden="true" className="shrink-0 text-[#b7bcc2]" size={19} strokeWidth={1.7} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space" aria-labelledby="reviews-heading">
        <div className="site-shell grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div>
            <p className="control-label mb-4">Google rating snapshot</p>
            <div className="flex items-center gap-3">
              <span className="font-display text-7xl font-semibold leading-none text-[#f1f1ee]">
                {contact.rating.value.toFixed(1)}
              </span>
              <div>
                <div
                  className="flex gap-1"
                  role="img"
                  aria-label={`${contact.rating.value} out of 5 stars`}
                >
                  {[1, 2, 3, 4, 5].map((item) => (
                    <Star
                      key={item}
                      aria-hidden="true"
                      size={16}
                      fill={item <= Math.round(contact.rating.value) ? '#E8A33D' : 'transparent'}
                      className={item <= Math.round(contact.rating.value) ? 'text-[#E8A33D]' : 'text-[#737a81]'}
                    />
                  ))}
                </div>
                <p className="mt-2 text-sm text-[#b7bcc2]">{contact.rating.count} reviews</p>
              </div>
            </div>
            <p className="mt-5 text-xs leading-5 text-[#8f969d]">Rating snapshot collected May 2026.</p>
          </div>

          <div className="border-l-2 border-[#E8A33D] pl-6 sm:pl-10">
            <h2 id="reviews-heading" className="sr-only">Artist reviews</h2>
            <blockquote className="font-display text-[clamp(2.4rem,5vw,4.8rem)] font-medium uppercase leading-[0.94] tracking-[-0.025em] text-[#f1f1ee]">
              “{reviews[0].body}”
            </blockquote>
            <p className="mt-7 text-sm font-bold text-[#b7bcc2]">{reviews[0].author}, Google review</p>
            <Link
              to="/reviews"
              className="mt-8 inline-flex min-h-11 items-center font-bold text-[#f1f1ee] link-underline hover:text-[#E8A33D]"
            >
              Read every review
            </Link>
          </div>
        </div>
      </section>

      <section className="border-t border-white/15 bg-[#E8A33D] py-16 text-[#0b0c0d] sm:py-20">
        <div className="site-shell flex flex-col items-start justify-between gap-9 lg:flex-row lg:items-end">
          <div>
            <h2 className="max-w-[11ch] font-display text-[clamp(3.7rem,8vw,8rem)] font-semibold uppercase leading-[0.8] tracking-[-0.04em]">
              Bring the song. Leave with a record.
            </h2>
            <p className="mt-6 max-w-[44ch] text-base font-semibold leading-7">
              Tell us what you are making and how far you want to take it.
            </p>
          </div>
          <button
            type="button"
            onClick={openBooking}
            className="inline-flex min-h-14 shrink-0 items-center justify-center border border-[#0b0c0d] bg-[#0b0c0d] px-7 text-sm font-extrabold text-[#f1f1ee] transition hover:bg-transparent hover:text-[#0b0c0d] active:translate-y-px"
          >
            Book a session
          </button>
        </div>
      </section>
    </div>
  )
}
