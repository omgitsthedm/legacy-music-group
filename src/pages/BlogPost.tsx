import { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react'
import { BookingContext } from '../App'
import ScrollReveal from '../components/ScrollReveal'
import JsonLd from '../components/JsonLd'
import { useSeo } from '../lib/seo'
import { blogPosts } from '../lib/data'
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqSchema,
} from '../lib/schemas'

export default function BlogPost() {
  const { slug } = useParams()
  const { openBooking } = useContext(BookingContext)
  const post = blogPosts.find((p) => p.slug === slug)

  useSeo({
    title: post ? post.title : 'Article',
    description: post ? post.excerpt : 'Article on legacymusicgroup.com',
    path: post ? `/blog/${post.slug}` : '/blog',
    ogImage: post?.image,
    ogType: 'article',
  })

  if (!post) {
    return (
      <div className="pt-40 pb-20 text-center px-4">
        <h1 className="font-display text-3xl text-[#F5F0E8]">Article not found</h1>
        <Link to="/blog" className="mt-4 inline-block text-[#E8A33D] hover:underline">
          Back to journal
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-20">
      <JsonLd
        id={`blog-${post.slug}-article`}
        data={buildArticleSchema({
          slug: post.slug,
          title: post.title,
          description: post.excerpt,
          datePublished: post.datePublished,
          image: post.image,
        })}
      />
      <JsonLd
        id={`blog-${post.slug}-breadcrumb`}
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Journal', path: '/blog' },
          { name: post.title, path: `/blog/${post.slug}` },
        ])}
      />
      {post.faqs && post.faqs.length > 0 && (
        <JsonLd id={`blog-${post.slug}-faq`} data={buildFaqSchema(post.faqs)} />
      )}

      <section className="pt-[clamp(4rem,8vw,6rem)] pb-8 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[760px]">
          <ScrollReveal>
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 font-body text-[0.9rem] text-[#A38F7B] hover:text-[#F5F0E8] transition-colors duration-300 mb-6"
            >
              <ChevronLeft size={16} /> All Articles
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="font-body text-[0.7rem] uppercase tracking-[1.5px] text-[#E8A33D] font-medium">
                {post.category}
              </span>
              <span className="font-body text-[0.7rem] uppercase tracking-[1.5px] text-[#A38F7B] flex items-center gap-1">
                <Clock size={11} /> {post.readMins} min read
              </span>
              <span className="font-body text-[0.7rem] uppercase tracking-[1.5px] text-[#A38F7B]">
                {new Date(post.datePublished).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
            </div>
            <h1
              data-speakable
              className="font-display text-[clamp(2rem,4.5vw,3.75rem)] leading-[1.1] tracking-[-1.5px] text-[#F5F0E8]"
            >
              {post.title}
            </h1>
            <p
              data-speakable
              className="font-body text-[1.1rem] text-[#A38F7B] mt-4 leading-[1.7]"
            >
              {post.excerpt}
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-[clamp(1.5rem,5vw,4rem)] pb-10">
        <div className="mx-auto max-w-[900px]">
          <ScrollReveal>
            <div className="aspect-[16/8] rounded-xl overflow-hidden">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <article className="pb-12 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[760px] space-y-10">
          {post.sections.map((section, i) => (
            <ScrollReveal key={i}>
              <section className="space-y-4">
                <h2
                  data-speakable
                  className="font-display text-[clamp(1.5rem,2.5vw,1.875rem)] leading-[1.2] text-[#F5F0E8]"
                >
                  {section.heading}
                </h2>
                {section.paragraphs.map((p, j) => (
                  <p
                    key={j}
                    className="font-body text-[1.05rem] text-[#A38F7B] leading-[1.8]"
                  >
                    {p}
                  </p>
                ))}
              </section>
            </ScrollReveal>
          ))}
        </div>
      </article>

      {post.faqs && post.faqs.length > 0 && (
        <section className="py-12 px-[clamp(1.5rem,5vw,4rem)] bg-[#111111]">
          <div className="mx-auto max-w-[760px]">
            <ScrollReveal className="mb-6">
              <h2
                data-speakable
                className="font-display text-[clamp(1.5rem,2.5vw,1.875rem)] text-[#F5F0E8]"
              >
                FAQ
              </h2>
            </ScrollReveal>
            <div className="space-y-3">
              {post.faqs.map((faq, i) => (
                <ScrollReveal key={i} delay={i * 40}>
                  <details className="group bg-[#0A0A0A] border border-[rgba(245,240,232,0.08)] rounded-xl overflow-hidden hover:border-[rgba(232,163,61,0.3)] transition-colors duration-300">
                    <summary className="cursor-pointer list-none flex items-center justify-between gap-4 p-5">
                      <h3 className="font-body text-[1rem] font-medium text-[#F5F0E8]">
                        {faq.question}
                      </h3>
                      <span className="shrink-0 w-7 h-7 rounded-full border border-[rgba(245,240,232,0.2)] flex items-center justify-center text-[#A38F7B] group-open:bg-[#E8A33D] group-open:border-[#E8A33D] group-open:text-[#0A0A0A] transition-all duration-300">
                        <span className="block group-open:hidden text-lg leading-none">+</span>
                        <span className="hidden group-open:block text-lg leading-none">−</span>
                      </span>
                    </summary>
                    <div className="px-5 pb-5">
                      <p className="font-body text-[0.95rem] text-[#A38F7B] leading-[1.7]">
                        {faq.answer}
                      </p>
                    </div>
                  </details>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {post.related && post.related.length > 0 && (
        <section className="py-12 px-[clamp(1.5rem,5vw,4rem)]">
          <div className="mx-auto max-w-[760px]">
            <ScrollReveal>
              <h2 className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium mb-4">
                Related
              </h2>
              <ul className="space-y-2">
                {post.related.map((r) => (
                  <li key={r.href}>
                    <Link
                      to={r.href}
                      className="inline-flex items-center gap-1 font-body text-[1rem] text-[#F5F0E8] hover:text-[#E8A33D] transition-colors duration-300 group"
                    >
                      {r.label}
                      <ChevronRight
                        size={14}
                        className="text-[#A38F7B] group-hover:text-[#E8A33D] group-hover:translate-x-1 transition-all duration-300"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          </div>
        </section>
      )}

      <section className="py-[clamp(4rem,8vw,6rem)] px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[700px] text-center">
          <ScrollReveal>
            <h2 className="font-display text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.1] tracking-[-1px] text-[#F5F0E8]">
              Ready to make your record?
            </h2>
            <p className="font-body text-[1rem] text-[#A38F7B] mt-3 mb-7">
              Booking takes about a minute.
            </p>
            <button
              onClick={openBooking}
              className="bg-[#E8A33D] text-[#0A0A0A] font-body text-[0.95rem] font-medium px-10 py-3.5 rounded-full hover:bg-[#D4873C] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(232,163,61,0.3)]"
            >
              Book a Session
            </button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
