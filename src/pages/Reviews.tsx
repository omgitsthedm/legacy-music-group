import { Star, ArrowUpRight } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import JsonLd from '../components/JsonLd'
import { useSeo } from '../lib/seo'
import { reviews } from '../lib/data'
import { buildBreadcrumbSchema } from '../lib/schemas'
import { CURRENT_LEGACY_SITE } from '../lib/handoff'

export default function Reviews() {
  useSeo({ title: 'Selected Studio Feedback', description: 'Selected feedback currently published by Legacy Music Group.', path: '/reviews' })
  return (
    <div className="pt-20">
      <JsonLd id="reviews-breadcrumb" data={buildBreadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Selected Studio Feedback', path: '/reviews' }])} />
      <section className="pt-[clamp(4rem,8vw,6rem)] pb-12 px-[clamp(1.5rem,5vw,4rem)]"><div className="mx-auto max-w-[820px] text-center"><ScrollReveal><span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">Studio feedback</span><h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.0] tracking-[-1.5px] text-[#F5F0E8] mt-3">Selected feedback.</h1><p className="font-body text-[1rem] text-[#A38F7B] leading-[1.7] mt-4">These excerpts are currently published on Legacy Music Group&apos;s existing website. This page does not state an aggregate rating or review count.</p></ScrollReveal></div></section>
      <section className="pb-[clamp(6rem,12vw,10rem)] px-[clamp(1.5rem,5vw,4rem)]"><div className="mx-auto max-w-[900px] grid grid-cols-1 md:grid-cols-3 gap-5">{reviews.map((review, i) => <ScrollReveal key={review.author} delay={i * 60}><article className="h-full bg-[#111111] border border-[rgba(245,240,232,0.08)] rounded-2xl p-6"><div className="flex gap-0.5 mb-4">{[1, 2, 3, 4, 5].map((star) => <Star key={star} size={13} fill={star <= review.rating ? '#E8A33D' : 'transparent'} className="text-[#E8A33D]" aria-hidden="true" />)}</div><p className="font-body text-[0.95rem] text-[#F5F0E8] leading-[1.7]">&ldquo;{review.body}&rdquo;</p><p className="font-body text-[0.85rem] text-[#A38F7B] mt-5 font-medium">{review.author} <span className="font-normal">· published on Legacy&apos;s site</span></p></article></ScrollReveal>)}</div><ScrollReveal><div className="mt-10 text-center"><a href={CURRENT_LEGACY_SITE} className="inline-flex items-center gap-2 rounded-full border border-[rgba(245,240,232,0.25)] px-6 py-3 font-body text-[0.9rem] text-[#F5F0E8] hover:border-[#E8A33D] hover:text-[#E8A33D] transition-colors duration-300">Visit Legacy&apos;s current site <ArrowUpRight size={15} aria-hidden="true" /></a></div></ScrollReveal></section>
    </div>
  )
}
