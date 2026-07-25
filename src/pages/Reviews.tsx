import { useContext } from 'react'
import { Link } from 'react-router'
import { Star, ChevronRight } from 'lucide-react'
import { BookingContext } from '../lib/booking-context'
import ScrollReveal from '../components/ScrollReveal'
import JsonLd from '../components/JsonLd'
import { useSeo } from '../lib/seo'
import { reviews, contact } from '../lib/data'
import {
  buildAggregateRatingSchema,
  buildBreadcrumbSchema,
  buildReviewSchema,
} from '../lib/schemas'

export default function Reviews() {
  const { openBooking } = useContext(BookingContext)
  // Real Google Business Profile aggregate stats (sourced 2026-05-07)
  const avgRating = contact.rating.value
  const ratingCount = contact.rating.count

  useSeo({
    title: 'Reviews - 4.4★ on Google · 128 Reviews',
    description:
      'Legacy Music Group is rated 4.4 stars across 128 Google reviews. Read what artists, producers, podcasters, and voice actors say about recording at our Deep Ellum studio.',
    path: '/reviews',
  })

  return (
    <div className="pt-20">
      <JsonLd
        id="reviews-aggregate"
        data={buildAggregateRatingSchema({
          ratingValue: avgRating,
          reviewCount: ratingCount,
        })}
      />
      <JsonLd
        id="reviews-breadcrumb"
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Reviews', path: '/reviews' },
        ])}
      />
      {reviews.map((r, i) => (
        <JsonLd
          key={i}
          id={`review-${i}`}
          data={buildReviewSchema({
            author: r.author,
            reviewBody: r.body,
            ratingValue: r.rating,
            datePublished: r.date,
          })}
        />
      ))}

      <section className="pt-[clamp(4rem,8vw,6rem)] pb-12 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[900px] text-center">
          <ScrollReveal>
            <span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">
              What artists say
            </span>
            <h1
              data-speakable
              className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.0] tracking-[-1.5px] text-[#f1f1ee] mt-3"
            >
              Reviews
            </h1>
            <div className="mt-6 inline-flex items-center gap-3 bg-[#14171a] border border-[rgba(232,163,61,0.25)] rounded-sm px-5 py-2.5">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star
                    key={n}
                    size={14}
                    fill={n <= Math.round(avgRating) ? '#E8A33D' : 'transparent'}
                    className={
                      n <= Math.round(avgRating)
                        ? 'text-[#E8A33D]'
                        : 'text-[rgba(232,163,61,0.4)]'
                    }
                  />
                ))}
              </div>
              <span className="font-body text-[0.9rem] text-[#f1f1ee]">
                <strong>{avgRating.toFixed(1)}</strong> · {ratingCount} Google reviews
              </span>
            </div>
            <p className="font-body text-[0.85rem] text-[#b7bcc2] mt-4 max-w-[520px] mx-auto leading-[1.6]">
              Aggregate rating reflects all {ratingCount} verified Google reviews. Three
              recent highlights below - the full list lives on{' '}
              <a
                href="https://www.google.com/search?q=Legacy+Music+Group+Dallas"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E8A33D] hover:underline"
              >
                Legacy's Google Business Profile
              </a>
              .
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-[clamp(6rem,12vw,10rem)] px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[900px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {reviews.map((r, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <article className="bg-[#14171a] border border-[rgba(241,241,238,0.08)] rounded-sm p-6 h-full">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-0.5">
                      {[1, 2, 3, 4, 5].map((n) => (
                        <Star
                          key={n}
                          size={12}
                          fill={n <= r.rating ? '#E8A33D' : 'transparent'}
                          className={
                            n <= r.rating
                              ? 'text-[#E8A33D]'
                              : 'text-[rgba(232,163,61,0.4)]'
                          }
                        />
                      ))}
                    </div>
                    <span className="font-body text-[0.7rem] uppercase tracking-[1.5px] text-[#b7bcc2]">
                      {r.source}
                    </span>
                  </div>
                  <p
                    data-speakable
                    className="font-body text-[0.95rem] text-[#f1f1ee] leading-[1.7] mb-4"
                  >
                    "{r.body}"
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="font-body text-[0.85rem] text-[#b7bcc2] font-medium">
                      {r.author}
                    </p>
                    <p className="font-body text-[0.75rem] text-[#b7bcc2]">
                      {new Date(r.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                      })}
                    </p>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="mt-12 text-center">
              <button
                onClick={openBooking}
                className="bg-[#E8A33D] text-[#0b0c0d] font-body text-[0.95rem] font-medium px-10 py-3.5 rounded-sm hover:bg-[#D4873C] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(232,163,61,0.3)]"
              >
                Book a Session
              </button>
              <div className="mt-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 font-body text-[0.9rem] text-[#b7bcc2] hover:text-[#f1f1ee] transition-colors duration-300"
                >
                  Have feedback after a session? Get in touch <ChevronRight size={14} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
