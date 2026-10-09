import { Link } from 'react-router-dom'
import { ChevronRight, Clock } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import JsonLd from '../components/JsonLd'
import { useSeo } from '../lib/seo'
import { blogPosts } from '../lib/data'
import { buildBreadcrumbSchema, buildItemListSchema } from '../lib/schemas'

export default function Blog() {
  useSeo({
    title: 'Journal — Recording, Mixing, and the Dallas Music Scene',
    description:
      'Practical writing about recording in Dallas, mixing & mastering, artist development, and the Deep Ellum studio scene from the Legacy Music Group team.',
    path: '/blog',
  })

  const sorted = [...blogPosts].sort((a, b) => b.datePublished.localeCompare(a.datePublished))

  return (
    <div className="pt-20">
      <JsonLd
        id="blog-breadcrumb"
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Journal', path: '/blog' },
        ])}
      />
      <JsonLd
        id="blog-list"
        data={buildItemListSchema(
          'Legacy Music Group Journal',
          sorted.map((p) => ({ name: p.title, url: `/blog/${p.slug}` })),
        )}
      />

      <section className="pt-[clamp(4rem,8vw,6rem)] pb-12 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[1000px]">
          <ScrollReveal>
            <span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">
              Journal
            </span>
            <h1
              data-speakable
              className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.0] tracking-[-1.5px] text-[#F5F0E8] mt-3"
            >
              The Legacy Journal
            </h1>
            <p className="font-body text-[1rem] text-[#A38F7B] mt-4 max-w-[640px] leading-[1.7]">
              Recording, mixing, mastering, and the Dallas music scene — from the
              engineers, producers, and team at Legacy.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-[clamp(6rem,12vw,10rem)] px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[1000px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sorted.map((post, i) => (
              <ScrollReveal key={post.slug} delay={i * 60}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block bg-[#111111] border border-[rgba(245,240,232,0.08)] rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] hover:border-[rgba(232,163,61,0.3)] transition-all duration-300"
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="font-body text-[0.7rem] uppercase tracking-[1.5px] text-[#E8A33D] font-medium">
                        {post.category}
                      </span>
                      <span className="font-body text-[0.7rem] uppercase tracking-[1.5px] text-[#A38F7B] flex items-center gap-1">
                        <Clock size={11} /> {post.readMins} min read
                      </span>
                    </div>
                    <h2 className="font-display text-[1.5rem] leading-[1.2] text-[#F5F0E8] group-hover:text-[#E8A33D] transition-colors duration-300">
                      {post.title}
                    </h2>
                    <p className="font-body text-[0.95rem] text-[#A38F7B] mt-3 leading-[1.6]">
                      {post.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-4 font-body text-[0.85rem] text-[#E8A33D] group-hover:gap-2 transition-all duration-300">
                      Read article <ChevronRight size={14} />
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
