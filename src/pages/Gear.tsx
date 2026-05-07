import { useContext, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { BookingContext } from '../App'
import ScrollReveal from '../components/ScrollReveal'
import JsonLd from '../components/JsonLd'
import { useSeo } from '../lib/seo'
import { gearList } from '../lib/data'
import { buildBreadcrumbSchema, buildProductSchema, buildItemListSchema } from '../lib/schemas'

const CATEGORY_ORDER: Array<typeof gearList[number]['category']> = [
  'console',
  'software',
  'microphone',
  'preamp',
  'compressor',
  'outboard',
  'monitor',
  'instrument',
]

const CATEGORY_LABEL: Record<typeof gearList[number]['category'], string> = {
  console: 'Console & Summing',
  software: 'DAWs',
  microphone: 'Microphones',
  preamp: 'Preamps',
  compressor: 'Compressors',
  outboard: 'Outboard',
  monitor: 'Monitoring',
  instrument: 'Instruments',
}

export default function Gear() {
  const { openBooking } = useContext(BookingContext)

  useSeo({
    title: 'Studio Gear — Console, Microphones, Outboard',
    description:
      'The full gear list at Legacy Music Group: SSL console, Pro Tools, Neumann U87, Sony C-800G, Shure SM7B, Neve, API, LA-2A, 1176, Distressor, Genelec monitors, and more.',
    path: '/gear',
  })

  const grouped = useMemo(() => {
    const map = new Map<string, typeof gearList>()
    for (const item of gearList) {
      const arr = map.get(item.category) ?? []
      arr.push(item)
      map.set(item.category, arr)
    }
    return CATEGORY_ORDER.filter((c) => map.has(c)).map((c) => ({
      category: c,
      label: CATEGORY_LABEL[c],
      items: map.get(c)!,
    }))
  }, [])

  return (
    <div className="pt-20">
      <JsonLd
        id="gear-breadcrumb"
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Studio', path: '/studio' },
          { name: 'Gear', path: '/gear' },
        ])}
      />
      <JsonLd
        id="gear-list"
        data={buildItemListSchema(
          'Studio Gear at Legacy Music Group',
          gearList.map((g) => ({ name: g.name, url: '/gear' })),
        )}
      />
      {gearList.map((g, i) => (
        <JsonLd
          key={g.name}
          id={`gear-${i}`}
          data={buildProductSchema({
            name: g.name,
            brand: g.brand,
            category: g.category,
            description: g.description,
          })}
        />
      ))}

      <section className="pt-[clamp(4rem,8vw,6rem)] pb-12 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[900px]">
          <ScrollReveal>
            <span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">
              Inside the Room
            </span>
            <h1
              data-speakable
              className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.0] tracking-[-1.5px] text-[#F5F0E8] mt-3"
            >
              Studio Gear
            </h1>
            <p className="font-body text-[1rem] text-[#A38F7B] mt-4 leading-[1.7] max-w-[640px]">
              Real consoles, broadcast-grade microphones, classic outboard, and modern DAWs. The chain that makes the difference between a session that sounds like a session and one that sounds like a record.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-[clamp(6rem,12vw,10rem)] px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[900px] space-y-12">
          {grouped.map(({ category, label, items }) => (
            <ScrollReveal key={category}>
              <div>
                <h2
                  data-speakable
                  className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium mb-4"
                >
                  {label}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {items.map((item) => (
                    <div
                      key={item.name}
                      className="bg-[#111111] border border-[rgba(245,240,232,0.08)] rounded-xl p-5 hover:border-[rgba(232,163,61,0.3)] transition-colors duration-300"
                    >
                      <h3 className="font-body text-[1rem] font-medium text-[#F5F0E8]">
                        {item.name}
                      </h3>
                      {item.brand && (
                        <p className="font-body text-[0.75rem] uppercase tracking-[1px] text-[#E8A33D] mt-1">
                          {item.brand}
                        </p>
                      )}
                      {item.description && (
                        <p className="font-body text-[0.85rem] text-[#A38F7B] mt-2 leading-[1.6]">
                          {item.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}

          <ScrollReveal>
            <div className="bg-[rgba(232,163,61,0.08)] border border-[rgba(232,163,61,0.25)] rounded-xl p-6 sm:p-8 mt-12">
              <p className="font-body text-[0.85rem] text-[#A38F7B] leading-[1.6]">
                <strong className="text-[#F5F0E8]">A note on the list:</strong> this is a working
                inventory. We rotate gear in and out as projects demand. If you need something
                specific that isn’t listed (a particular ribbon, a vintage compressor, a specific
                amp), tell us when you book — we can usually source it for the session.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="border-t border-[rgba(245,240,232,0.08)] pt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <Link
                to="/studio"
                className="inline-flex items-center gap-2 font-body text-[0.95rem] text-[#A38F7B] hover:text-[#F5F0E8] transition-colors duration-300 group"
              >
                <ChevronRight size={14} className="rotate-180" />
                Back to The Studio
              </Link>
              <button
                onClick={openBooking}
                className="bg-[#E8A33D] text-[#0A0A0A] font-body text-[0.95rem] font-medium px-8 py-3 rounded-full hover:bg-[#D4873C] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(232,163,61,0.3)]"
              >
                Book a Session
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
