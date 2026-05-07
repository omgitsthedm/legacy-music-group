import { useState } from 'react'
import { Mail, Check } from 'lucide-react'

interface NewsletterSignupProps {
  variant?: 'inline' | 'block'
  label?: string
}

/**
 * Artist list opt-in. Captures email for the Legacy artist newsletter
 * (release tips, event invites, studio updates).
 *
 * PLACEHOLDER ACTION: submit currently no-ops and shows success state.
 * Needs wiring to email provider (Klaviyo / Resend / Mailchimp) before launch.
 * See PLACEHOLDERS.md §Lead capture.
 */
export default function NewsletterSignup({
  variant = 'block',
  label = 'Join the Artist List',
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    // PLACEHOLDER: send to email provider
    setSubmitted(true)
  }

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className="flex items-center gap-2 max-w-md">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={submitted}
          className="flex-1 bg-[#0A0A0A] border border-[rgba(245,240,232,0.1)] rounded-full px-4 py-2.5 text-[#F5F0E8] font-body text-[0.9rem] placeholder:text-[rgba(163,143,123,0.5)] focus:border-[#E8A33D] focus:outline-none transition-colors duration-300 disabled:opacity-50"
          placeholder="your@email.com"
        />
        <button
          type="submit"
          disabled={submitted}
          className="bg-[#E8A33D] text-[#0A0A0A] font-body text-[0.85rem] font-medium px-5 py-2.5 rounded-full hover:bg-[#D4873C] transition-all duration-300 disabled:opacity-50 whitespace-nowrap"
        >
          {submitted ? 'Subscribed' : 'Subscribe'}
        </button>
      </form>
    )
  }

  if (submitted) {
    return (
      <div className="bg-[#111111] border border-[rgba(245,240,232,0.08)] rounded-xl p-6 sm:p-7 text-center">
        <div className="w-12 h-12 rounded-full bg-[rgba(74,124,89,0.2)] flex items-center justify-center mx-auto mb-4">
          <Check size={20} className="text-[#4A7C59]" />
        </div>
        <h3 className="font-body text-[1.05rem] font-medium text-[#F5F0E8]">You're in.</h3>
        <p className="font-body text-[0.9rem] text-[#A38F7B] mt-2">
          We'll send the next drop straight to your inbox.
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#111111] border border-[rgba(245,240,232,0.08)] rounded-xl p-6 sm:p-7 space-y-4"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-10 h-10 rounded-full bg-[rgba(232,163,61,0.15)] flex items-center justify-center shrink-0">
          <Mail size={18} className="text-[#E8A33D]" />
        </div>
        <div>
          <h3 className="font-body text-[1.05rem] font-medium text-[#F5F0E8]">{label}</h3>
          <p className="font-body text-[0.85rem] text-[#A38F7B]">
            Studio drops, release tips, Dallas music events. No spam.
          </p>
        </div>
      </div>

      <div>
        <label className="block font-body text-[0.75rem] uppercase tracking-[1px] text-[#A38F7B] mb-2">
          Email
        </label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-[#0A0A0A] border border-[rgba(245,240,232,0.1)] rounded-lg px-4 py-3 text-[#F5F0E8] font-body text-[0.95rem] placeholder:text-[rgba(163,143,123,0.5)] focus:border-[#E8A33D] focus:outline-none transition-colors duration-300"
          placeholder="your@email.com"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#E8A33D] text-[#0A0A0A] font-body text-[0.95rem] font-medium px-6 py-3 rounded-full hover:bg-[#D4873C] transition-all duration-300 hover:scale-[1.01]"
      >
        Subscribe
      </button>
    </form>
  )
}
