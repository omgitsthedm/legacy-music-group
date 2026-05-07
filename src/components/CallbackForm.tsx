import { useState } from 'react'
import { Phone, Check } from 'lucide-react'

/**
 * Callback request form. Captures name + phone + best time to call.
 *
 * PLACEHOLDER ACTION: submit currently no-ops and shows a success state.
 * Needs wiring to Supabase / Resend / Netlify Forms before launch.
 * See PLACEHOLDERS.md §Lead capture.
 */
export default function CallbackForm() {
  const [submitted, setSubmitted] = useState(false)
  const [data, setData] = useState({ name: '', phone: '', time: 'anytime', interest: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // PLACEHOLDER: send to backend (Supabase + Resend)
    // For now: optimistic local-only state
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  if (submitted) {
    return (
      <div className="bg-[#111111] border border-[rgba(245,240,232,0.08)] rounded-xl p-6 text-center">
        <div className="w-12 h-12 rounded-full bg-[rgba(74,124,89,0.2)] flex items-center justify-center mx-auto mb-4">
          <Check size={20} className="text-[#4A7C59]" />
        </div>
        <h3 className="font-body text-[1.05rem] font-medium text-[#F5F0E8]">Got it.</h3>
        <p className="font-body text-[0.9rem] text-[#A38F7B] mt-2">
          We'll call {data.name || 'you'} {data.time === 'anytime' ? 'shortly' : `during ${data.time}`}.
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
          <Phone size={18} className="text-[#E8A33D]" />
        </div>
        <div>
          <h3 className="font-body text-[1.05rem] font-medium text-[#F5F0E8]">Request a Callback</h3>
          <p className="font-body text-[0.85rem] text-[#A38F7B]">Faster than email when you have questions.</p>
        </div>
      </div>

      <div>
        <label className="block font-body text-[0.75rem] uppercase tracking-[1px] text-[#A38F7B] mb-2">
          Name
        </label>
        <input
          type="text"
          name="name"
          required
          value={data.name}
          onChange={handleChange}
          className="w-full bg-[#0A0A0A] border border-[rgba(245,240,232,0.1)] rounded-lg px-4 py-3 text-[#F5F0E8] font-body text-[0.95rem] placeholder:text-[rgba(163,143,123,0.5)] focus:border-[#E8A33D] focus:outline-none transition-colors duration-300"
          placeholder="Your name"
        />
      </div>

      <div>
        <label className="block font-body text-[0.75rem] uppercase tracking-[1px] text-[#A38F7B] mb-2">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          required
          value={data.phone}
          onChange={handleChange}
          className="w-full bg-[#0A0A0A] border border-[rgba(245,240,232,0.1)] rounded-lg px-4 py-3 text-[#F5F0E8] font-body text-[0.95rem] placeholder:text-[rgba(163,143,123,0.5)] focus:border-[#E8A33D] focus:outline-none transition-colors duration-300"
          placeholder="(214) 555-0199"
        />
      </div>

      <div>
        <label className="block font-body text-[0.75rem] uppercase tracking-[1px] text-[#A38F7B] mb-2">
          Best time to call
        </label>
        <select
          name="time"
          value={data.time}
          onChange={handleChange}
          className="w-full bg-[#0A0A0A] border border-[rgba(245,240,232,0.1)] rounded-lg px-4 py-3 text-[#F5F0E8] font-body text-[0.95rem] focus:border-[#E8A33D] focus:outline-none transition-colors duration-300"
        >
          <option value="anytime">Anytime today</option>
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
          <option value="evening">Evening</option>
        </select>
      </div>

      <div>
        <label className="block font-body text-[0.75rem] uppercase tracking-[1px] text-[#A38F7B] mb-2">
          What's the project? (optional)
        </label>
        <input
          type="text"
          name="interest"
          value={data.interest}
          onChange={handleChange}
          className="w-full bg-[#0A0A0A] border border-[rgba(245,240,232,0.1)] rounded-lg px-4 py-3 text-[#F5F0E8] font-body text-[0.95rem] placeholder:text-[rgba(163,143,123,0.5)] focus:border-[#E8A33D] focus:outline-none transition-colors duration-300"
          placeholder="Recording, mixing, mastering..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#E8A33D] text-[#0A0A0A] font-body text-[0.95rem] font-medium px-6 py-3 rounded-full hover:bg-[#D4873C] transition-all duration-300 hover:scale-[1.01]"
      >
        Request Callback
      </button>
    </form>
  )
}
