import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'
import JsonLd from '../components/JsonLd'
import ScrollReveal from '../components/ScrollReveal'
import { buildBreadcrumbSchema } from '../lib/schemas'
import { useSeo } from '../lib/seo'

const coverage = [
  {
    outlet: 'D Magazine',
    title: 'The 25 Most Influential Dallas Recording Artists of the Last 25 Years',
    date: 'July 2026',
    href: 'https://www.dmagazine.com/publications/d-magazine/2026/july/the-25-most-influential-dallas-recording-artists-of-the-last-25-years/',
  },
  {
    outlet: 'Dallas Observer',
    title: "Deep Ellum's Matthew Medlock Is Undeterred",
    date: 'May 2016',
    href: 'https://www.dallasobserver.com/music/deep-ellums-matthew-medlock-is-undeterred-by-shooting-at-his-recording-studio-8278683/',
  },
]

export default function Blog() {
  useSeo({
    title: 'Newsroom and Studio Notes',
    description:
      'Verified coverage of Legacy Music Group plus a growing archive of owner-reviewed studio notes.',
    path: '/blog',
  })

  return (
    <div className="pt-20">
      <JsonLd
        id="blog-breadcrumb"
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Newsroom', path: '/blog' },
        ])}
      />

      <section className="site-shell section-space border-b border-white/15">
        <ScrollReveal>
          <p className="control-label text-[#E8A33D]">Newsroom / field notes</p>
          <h1 className="mt-5 max-w-[10ch] font-display text-[clamp(4.5rem,11vw,10rem)] font-semibold uppercase leading-[0.82] tracking-[-0.045em] text-[#f1f1ee]">
            Signal over noise.
          </h1>
          <p className="mt-7 max-w-[58ch] font-body text-base leading-7 text-[#b7bcc2]">
            Verified coverage lives here now. The studio-note archive is being rebuilt
            around pieces written or reviewed by the people who work in the room.
          </p>
        </ScrollReveal>
      </section>

      <section className="site-shell section-space">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <ScrollReveal>
            <p className="control-label">Press desk</p>
            <h2 className="mt-4 font-display text-5xl uppercase leading-[0.9] text-[#f1f1ee]">
              Read the source.
            </h2>
          </ScrollReveal>
          <div className="border-t border-white/15">
            {coverage.map((item, index) => (
              <ScrollReveal key={item.href} delay={index * 80}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid gap-4 border-b border-white/15 py-7 sm:grid-cols-[0.42fr_1fr_auto] sm:items-start"
                >
                  <div>
                    <p className="font-control text-xs uppercase tracking-[0.12em] text-[#E8A33D]">
                      {item.outlet}
                    </p>
                    <p className="mt-2 text-xs text-[#8f969d]">{item.date}</p>
                  </div>
                  <h3 className="font-display text-3xl uppercase leading-none text-[#f1f1ee] group-hover:text-[#E8A33D]">
                    {item.title}
                  </h3>
                  <ArrowUpRight aria-hidden="true" className="text-[#b7bcc2] group-hover:text-[#E8A33D]" />
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#E8A33D] text-[#0b0c0d]">
        <div className="site-shell flex flex-col gap-8 py-16 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-control text-xs uppercase tracking-[0.14em]">Need a practical answer?</p>
            <h2 className="mt-3 font-display text-[clamp(3.5rem,8vw,7rem)] font-semibold uppercase leading-[0.82]">
              Ask the room.
            </h2>
          </div>
          <Link
            to="/contact"
            className="inline-flex min-h-12 items-center justify-center border border-[#0b0c0d] px-6 font-control text-sm font-bold uppercase tracking-[0.1em] hover:bg-[#0b0c0d] hover:text-[#f1f1ee]"
          >
            Contact Legacy
          </Link>
        </div>
      </section>
    </div>
  )
}
