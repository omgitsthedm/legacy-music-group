import { useState } from 'react'
import { AlertCircle, Check, Phone } from 'lucide-react'

type SubmitState = 'idle' | 'submitting' | 'success' | 'error'

const encode = (values: Record<string, string>) =>
  new URLSearchParams(values).toString()

export default function CallbackForm() {
  const [state, setState] = useState<SubmitState>('idle')
  const [data, setData] = useState({
    name: '',
    phone: '',
    time: 'anytime',
    interest: '',
    botField: '',
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (state === 'submitting') return
    setState('submitting')

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'legacy-callback',
          name: data.name,
          phone: data.phone,
          time: data.time,
          interest: data.interest,
          'bot-field': data.botField,
        }),
      })
      if (!response.ok) throw new Error('Submission failed')
      setState('success')
    } catch {
      setState('error')
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setData((previous) => ({ ...previous, [event.target.name]: event.target.value }))
  }

  if (state === 'success') {
    return (
      <div className="border border-white/10 bg-[#14171a] p-7 text-left" role="status">
        <Check aria-hidden="true" size={22} className="text-[#E8A33D]" />
        <h3 className="mt-5 font-display text-3xl uppercase text-[#f1f1ee]">Request received.</h3>
        <p className="mt-2 font-body text-sm leading-6 text-[#b7bcc2]">
          The Legacy team will call {data.name || 'you'}{' '}
          {data.time === 'anytime' ? 'as soon as they can' : `during the ${data.time}`}.
        </p>
      </div>
    )
  }

  return (
    <form
      name="legacy-callback"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-5 border border-white/10 bg-[#14171a] p-6 sm:p-7"
    >
      <input type="hidden" name="form-name" value="legacy-callback" />
      <p className="hidden" aria-hidden="true">
        <label>
          Do not fill this out
          <input
            name="bot-field"
            tabIndex={-1}
            autoComplete="off"
            value={data.botField}
            onChange={handleChange}
          />
        </label>
      </p>

      <div className="flex items-start gap-4">
        <Phone aria-hidden="true" size={20} className="mt-1 shrink-0 text-[#E8A33D]" />
        <div>
          <h3 className="font-display text-2xl uppercase text-[#f1f1ee]">Request a callback</h3>
          <p className="mt-1 font-body text-sm text-[#b7bcc2]">For project and scheduling questions.</p>
        </div>
      </div>

      <Field label="Name" htmlFor="callback-name">
        <input
          id="callback-name"
          type="text"
          name="name"
          autoComplete="name"
          required
          value={data.name}
          onChange={handleChange}
          className="form-control"
          placeholder="Your name"
        />
      </Field>

      <Field label="Phone" htmlFor="callback-phone">
        <input
          id="callback-phone"
          type="tel"
          name="phone"
          autoComplete="tel"
          required
          value={data.phone}
          onChange={handleChange}
          className="form-control"
          placeholder="(214) 377-9729"
        />
      </Field>

      <Field label="Best time to call" htmlFor="callback-time">
        <select
          id="callback-time"
          name="time"
          value={data.time}
          onChange={handleChange}
          className="form-control"
        >
          <option value="anytime">Anytime today</option>
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
          <option value="evening">Evening</option>
        </select>
      </Field>

      <Field label="What is the project? (optional)" htmlFor="callback-interest">
        <input
          id="callback-interest"
          type="text"
          name="interest"
          value={data.interest}
          onChange={handleChange}
          className="form-control"
          placeholder="Recording, mixing, mastering..."
        />
      </Field>

      <button
        type="submit"
        disabled={state === 'submitting'}
        className="signal-button w-full justify-center disabled:cursor-wait disabled:opacity-60"
      >
        {state === 'submitting' ? 'Sending request' : 'Request callback'}
      </button>
      {state === 'error' && (
        <p role="alert" className="flex items-center gap-2 font-body text-sm text-[#ff8a80]">
          <AlertCircle aria-hidden="true" size={15} />
          That did not send. Call (214) 377-9729 or try again.
        </p>
      )}
    </form>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="control-label mb-2 block">
        {label}
      </label>
      {children}
    </div>
  )
}
