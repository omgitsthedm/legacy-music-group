import { useState } from 'react'
import { AlertCircle, Check, Mail } from 'lucide-react'

interface NewsletterSignupProps {
  variant?: 'inline' | 'block'
  label?: string
}

type SubmitState = 'idle' | 'submitting' | 'success' | 'error'

const encode = (values: Record<string, string>) =>
  new URLSearchParams(values).toString()

export default function NewsletterSignup({
  variant = 'block',
  label = 'Join the Artist List',
}: NewsletterSignupProps) {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<SubmitState>('idle')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!email || state === 'submitting') return
    setState('submitting')

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({ 'form-name': 'legacy-newsletter', email }),
      })
      if (!response.ok) throw new Error('Submission failed')
      setState('success')
    } catch {
      setState('error')
    }
  }

  if (variant === 'inline') {
    return (
      <form
        name="legacy-newsletter"
        data-netlify="true"
        onSubmit={handleSubmit}
        className="max-w-md"
      >
        <div className="flex items-center gap-2">
          <input type="hidden" name="form-name" value="legacy-newsletter" />
          <input
            aria-label="Email address"
            type="email"
            name="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={state === 'submitting' || state === 'success'}
            className="min-h-12 flex-1 border border-white/15 bg-[#0b0c0d] px-4 font-body text-sm text-[#f1f1ee] outline-none transition-colors placeholder:text-[#777d83] focus:border-[#E8A33D] disabled:opacity-60"
            placeholder="your@email.com"
          />
          <button
            type="submit"
            disabled={state === 'submitting' || state === 'success'}
            className="signal-button min-h-12 disabled:cursor-wait disabled:opacity-60"
          >
            {state === 'success' ? 'Subscribed' : state === 'submitting' ? 'Sending' : 'Subscribe'}
          </button>
        </div>
        <FormStatus state={state} />
      </form>
    )
  }

  if (state === 'success') {
    return (
      <div className="border border-white/10 bg-[#14171a] p-7 text-left" role="status">
        <Check aria-hidden="true" size={22} className="text-[#E8A33D]" />
        <h3 className="mt-5 font-display text-3xl uppercase text-[#f1f1ee]">You are on the list.</h3>
        <p className="mt-2 font-body text-sm text-[#b7bcc2]">
          The next studio drop will go to {email}.
        </p>
      </div>
    )
  }

  return (
    <form
      name="legacy-newsletter"
      data-netlify="true"
      onSubmit={handleSubmit}
      className="space-y-5 border border-white/10 bg-[#14171a] p-6 sm:p-7"
    >
      <input type="hidden" name="form-name" value="legacy-newsletter" />
      <div className="flex items-start gap-4">
        <Mail aria-hidden="true" size={20} className="mt-1 shrink-0 text-[#E8A33D]" />
        <div>
          <h3 className="font-display text-2xl uppercase text-[#f1f1ee]">{label}</h3>
          <p className="mt-1 font-body text-sm text-[#b7bcc2]">
            Studio drops, release tips and Dallas music events. No spam.
          </p>
        </div>
      </div>
      <div>
        <label htmlFor="newsletter-email" className="control-label mb-2 block">
          Email
        </label>
        <input
          id="newsletter-email"
          type="email"
          name="email"
          autoComplete="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="min-h-12 w-full border border-white/15 bg-[#0b0c0d] px-4 font-body text-sm text-[#f1f1ee] outline-none transition-colors placeholder:text-[#777d83] focus:border-[#E8A33D]"
          placeholder="your@email.com"
        />
      </div>
      <button
        type="submit"
        disabled={state === 'submitting'}
        className="signal-button w-full justify-center disabled:cursor-wait disabled:opacity-60"
      >
        {state === 'submitting' ? 'Sending' : 'Subscribe'}
      </button>
      <FormStatus state={state} />
    </form>
  )
}

function FormStatus({ state }: { state: SubmitState }) {
  if (state !== 'error') return null
  return (
    <p role="alert" className="mt-3 flex items-center gap-2 font-body text-sm text-[#ff8a80]">
      <AlertCircle aria-hidden="true" size={15} />
      That did not send. Try again or email info@legacymusicgroup.com.
    </p>
  )
}
