import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import JsonLd from '../components/JsonLd'
import { useSeo } from '../lib/seo'
import { engineers } from '../lib/data'
import { buildBreadcrumbSchema } from '../lib/schemas'

export default function Engineers() {
  useSeo({
    title: 'Engineers',
    description:
      'Meet the engineers and producers behind Legacy Music Group — Hip-Hop, R&B, Pop, Electronic, Rock, Folk, and Soul specialists in Deep Ellum, Dallas.',
    path: '/engineers',
  })

  return (
    <div className="pt-20">
      <JsonLd
        id="engineers-breadcrumb"
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Engineers', path: '/engineers' },
        ])}
      />

      <section className="pt-[clamp(4rem,8vw,6rem)] pb-16 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[1400px]">
          <ScrollReveal>
            <span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">
              The Team
            </span>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.0] tracking-[-1.5px] text-[#F5F0E8] mt-3">
              Meet the Engineers
            </h1>
            <p className="font-body text-[1rem] text-[#A38F7B] mt-4 max-w-[600px] leading-[1.7]">
              Our team of producers and engineers bring decades of combined experience across every major genre — Hip-Hop, R&B, Pop, Electronic, Rock, Folk, Soul, and beyond.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-[clamp(6rem,12vw,10rem)] px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[1400px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {engineers.map((eng, i) => (
              <ScrollReveal key={eng.id} delay={i * 100}>
                <Link
                  to={`/engineers/${eng.id}`}
                  className="group block bg-[#111111] rounded-xl overflow-hidden border border-[rgba(245,240,232,0.08)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-300"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={eng.image}
                      alt={`${eng.name} — ${eng.specialty} engineer`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-body text-[1.25rem] font-medium text-[#F5F0E8]">
                      {eng.name}
                    </h3>
                    <p className="font-body text-[0.85rem] text-[#E8A33D] uppercase tracking-[1px] mt-1">
                      {eng.specialty}
                    </p>
                    <p className="font-body text-[0.9rem] text-[#A38F7B] mt-3 leading-[1.6] line-clamp-2">
                      {eng.bio}
                    </p>
                    <span className="inline-flex items-center gap-1 font-body text-[0.9rem] text-[#F5F0E8] mt-4 group-hover:text-[#E8A33D] transition-colors duration-300">
                      View Profile <ChevronRight size={14} />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
