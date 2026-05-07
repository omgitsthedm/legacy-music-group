import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Star, ChevronRight } from 'lucide-react'
import { BookingContext } from '../App'
import ScrollReveal from '../components/ScrollReveal'
import JsonLd from '../components/JsonLd'
import { useSeo } from '../lib/seo'
import { reviews } from '../lib/data'
import {
  buildAggregateRatingSchema,
  buildBreadcrumbSchema,
  buildReviewSchema,
} from '../lib/schemas'

export default function Reviews() {
  const { openBooking } = useContext(BookingContext)
  const avgRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / Math.max(1, reviews.length)

  useSeo({
    title: 'Reviews — What Artists Say About Recording at Legacy',
    description:
      'Reviews from artists, producers, podcasters, and voice actors who have recorded at Legacy Music Group in Deep Ellum, Dallas.',
    path: '/reviews',
  })

  return (
    <div className="pt-20">
      <JsonLd
        id="reviews-aggregate"
        data={buildAggregateRatingSchema({
          ratingValue: Number(avgRating.toFixed(1)),
          reviewCount: reviews.length,
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
              className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.0] tracking-[-1.5px] text-[#F5F0E8] mt-3"
            >
              Reviews
            </h1>
            <div className="mt-6 inline-flex items-center gap-3 bg-[#111111] border border-[rgba(245,240,232,0.08)] rounded-full px-5 py-2.5">
              <div className="flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star
                    key={n}
                    size={14}
                    fill={n <= avgRating ? '#E8A33D' : 'transparent'}
                    className={n <= avgRating ? 'text-[#E8A33D]' : 'text-[rgba(232,163,61,0.4)]'}
                  />
                ))}
              </div>
              <span className="font-body text-[0.85rem] text-[#F5F0E8]">
                {avgRating.toFixed(1)} · {reviews.length} reviews
              </span>
            </div>
            <p className="font-body text-[0.85rem] text-[#A38F7B] mt-4 max-w-[480px] mx-auto">
              Reviews shown are placeholders for design preview. Real reviews wire from
              Google Business Profile at launch.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-[clamp(6rem,12vw,10rem)] px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[900px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {reviews.map((r, i) => (
              <ScrollReveal key={i} delay={i * 60}>
                <article className="bg-[#111111] border border-[rgba(245,240,232,0.08)] rounded-xl p-6 h-full">
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
                    <span className="font-body text-[0.7rem] uppercase tracking-[1.5px] text-[#A38F7B]">
                      {r.source}
                    </span>
                  </div>
                  <p
                    data-speakable
                    className="font-body text-[0.95rem] text-[#F5F0E8] leading-[1.7] mb-4"
                  >
                    "{r.body}"
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="font-body text-[0.85rem] text-[#A38F7B] font-medium">
                      {r.author}
                    </p>
                    <p className="font-body text-[0.75rem] text-[#A38F7B]">
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
                className="bg-[#E8A33D] text-[#0A0A0A] font-body text-[0.95rem] font-medium px-10 py-3.5 rounded-full hover:bg-[#D4873C] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(232,163,61,0.3)]"
              >
                Book a Session
              </button>
              <div className="mt-6">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1 font-body text-[0.9rem] text-[#A38F7B] hover:text-[#F5F0E8] transition-colors duration-300"
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
