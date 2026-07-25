import { ArrowUpRight, Instagram, Phone } from 'lucide-react'
import JsonLd from '../components/JsonLd'
import ScrollReveal from '../components/ScrollReveal'
import { contact } from '../lib/data'
import { buildBreadcrumbSchema } from '../lib/schemas'
import { useSeo } from '../lib/seo'

export default function Events() {
  useSeo({
    title: 'Legacy Live and Studio Events',
    description:
      'Find the next Legacy Music Group artist showcase through the studio social feed or direct contact.',
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

      <section className="relative min-h-[calc(100dvh-5rem)] overflow-hidden border-b border-white/15">
        <div className="absolute inset-0">
          <img
            src="/images/studio-live-room.jpg"
            alt=""
            className="h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0b0c0d] via-[#0b0c0d]/85 to-[#0b0c0d]/30" />
        </div>
        <div className="site-shell relative flex min-h-[calc(100dvh-5rem)] items-end py-[clamp(4rem,10vw,8rem)]">
          <ScrollReveal>
            <p className="control-label text-[#E8A33D]">Legacy Live</p>
            <h1 className="mt-5 max-w-[9ch] font-display text-[clamp(5rem,13vw,12rem)] font-semibold uppercase leading-[0.76] tracking-[-0.045em] text-[#f1f1ee]">
              Find the next stage.
            </h1>
            <p className="mt-7 max-w-[54ch] font-body text-base leading-7 text-[#b7bcc2]">
              Showcase dates and venues move with the Dallas calendar. Follow the studio
              feed or call Legacy for the next confirmed lineup.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={contact.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="signal-button"
              >
                <Instagram aria-hidden="true" size={17} />
                Check Instagram
                <ArrowUpRight aria-hidden="true" size={15} />
              </a>
              <a
                href={`tel:${contact.phoneE164}`}
                className="signal-button signal-button-secondary"
              >
                <Phone aria-hidden="true" size={17} />
                Call {contact.phone}
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
