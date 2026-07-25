import { useState } from 'react'
import { AlertCircle, MapPin, Phone, Mail, Send, Check } from 'lucide-react'
import ScrollReveal from '../components/ScrollReveal'
import CallbackForm from '../components/CallbackForm'
import NewsletterSignup from '../components/NewsletterSignup'
import JsonLd from '../components/JsonLd'
import { useSeo } from '../lib/seo'
import { contact } from '../lib/data'
import { buildBreadcrumbSchema } from '../lib/schemas'

export default function Contact() {
  const [submitState, setSubmitState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
    botField: '',
  })

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (submitState === 'submitting') return
    setSubmitState('submitting')

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'legacy-contact',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          interest: formData.interest,
          message: formData.message,
          'bot-field': formData.botField,
        }).toString(),
      })
      if (!response.ok) throw new Error('Submission failed')
      setSubmitState('success')
    } catch {
      setSubmitState('error')
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  useSeo({
    title: 'Contact',
    description:
      'Get in touch with Legacy Music Group - phone, email, contact form, or callback request. Deep Ellum recording studio in Dallas, TX.',
    path: '/contact',
  })

  return (
    <div className="pt-20">
      <JsonLd
        id="contact-breadcrumb"
        data={buildBreadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
      />

      <section className="pt-[clamp(4rem,8vw,6rem)] pb-12 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[800px]">
          <ScrollReveal className="text-center">
            <span className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium">
              Get in Touch
            </span>
            <h1 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[1.0] tracking-[-1.5px] text-[#f1f1ee] mt-3">
              Let's talk about your project.
            </h1>
            <p className="font-body text-[1rem] text-[#b7bcc2] mt-4">
              Not ready to book? Send a message, request a callback, or call us direct.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="pb-16 px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Long form contact */}
            <ScrollReveal>
              {submitState === 'success' ? (
                <div className="text-center py-12 bg-[#14171a] rounded-sm border border-[rgba(241,241,238,0.08)] h-full flex flex-col items-center justify-center" role="status">
                  <div className="w-16 h-16 rounded-sm bg-[rgba(74,124,89,0.2)] flex items-center justify-center mb-6">
                    <Check size={32} className="text-[#4A7C59]" />
                  </div>
                  <h3 className="font-display text-2xl text-[#f1f1ee] mb-3">Message Sent</h3>
                  <p className="font-body text-[0.95rem] text-[#b7bcc2] max-w-[400px]">
                    Thanks for reaching out. We'll be in touch within 24 hours.
                  </p>
                </div>
              ) : (
                <form
                  name="legacy-contact"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                  className="bg-[#14171a] border border-[rgba(241,241,238,0.08)] rounded-sm p-6 sm:p-7 space-y-4"
                >
                  <input type="hidden" name="form-name" value="legacy-contact" />
                  <p className="hidden" aria-hidden="true">
                    <label>
                      Do not fill this out
                      <input
                        name="bot-field"
                        tabIndex={-1}
                        autoComplete="off"
                        value={formData.botField}
                        onChange={handleChange}
                      />
                    </label>
                  </p>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-sm bg-[rgba(232,163,61,0.15)] flex items-center justify-center shrink-0">
                      <Mail size={18} className="text-[#E8A33D]" />
                    </div>
                    <div>
                      <h2 className="font-body text-[1.05rem] font-medium text-[#f1f1ee]">Send a Message</h2>
                      <p className="font-body text-[0.85rem] text-[#b7bcc2]">
                        We reply within 24 hours.
                      </p>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-name" className="block font-body text-[0.7rem] uppercase tracking-[1px] text-[#b7bcc2] mb-2">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#0b0c0d] border border-[rgba(241,241,238,0.1)] rounded-sm px-4 py-3 text-[#f1f1ee] font-body text-[0.95rem] placeholder:text-[rgba(183,188,194,0.5)] focus:border-[#E8A33D] focus:outline-none transition-colors duration-300"
                      placeholder="Your name"
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block font-body text-[0.7rem] uppercase tracking-[1px] text-[#b7bcc2] mb-2">
                      Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-[#0b0c0d] border border-[rgba(241,241,238,0.1)] rounded-sm px-4 py-3 text-[#f1f1ee] font-body text-[0.95rem] placeholder:text-[rgba(183,188,194,0.5)] focus:border-[#E8A33D] focus:outline-none transition-colors duration-300"
                      placeholder="you@example.com"
                      autoComplete="email"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block font-body text-[0.7rem] uppercase tracking-[1px] text-[#b7bcc2] mb-2">
                      Phone (optional)
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#0b0c0d] border border-[rgba(241,241,238,0.1)] rounded-sm px-4 py-3 text-[#f1f1ee] font-body text-[0.95rem] placeholder:text-[rgba(183,188,194,0.5)] focus:border-[#E8A33D] focus:outline-none transition-colors duration-300"
                      placeholder="(214) 377-9729"
                      autoComplete="tel"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-interest" className="block font-body text-[0.7rem] uppercase tracking-[1px] text-[#b7bcc2] mb-2">
                      I'm interested in
                    </label>
                    <select
                      id="contact-interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full bg-[#0b0c0d] border border-[rgba(241,241,238,0.1)] rounded-sm px-4 py-3 text-[#f1f1ee] font-body text-[0.95rem] focus:border-[#E8A33D] focus:outline-none transition-colors duration-300"
                    >
                      <option value="">Select...</option>
                      <option value="recording">Recording</option>
                      <option value="mixing">Mixing & Mastering</option>
                      <option value="development">Artist Development</option>
                      <option value="other">Something else</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block font-body text-[0.7rem] uppercase tracking-[1px] text-[#b7bcc2] mb-2">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-[#0b0c0d] border border-[rgba(241,241,238,0.1)] rounded-sm px-4 py-3 text-[#f1f1ee] font-body text-[0.95rem] placeholder:text-[rgba(183,188,194,0.5)] focus:border-[#E8A33D] focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitState === 'submitting'}
                    className="w-full bg-[#E8A33D] text-[#0b0c0d] font-body text-[0.95rem] font-medium px-6 py-3 rounded-sm hover:bg-[#D4873C] transition-all duration-300 flex items-center justify-center gap-2 disabled:cursor-wait disabled:opacity-60"
                  >
                    <Send aria-hidden="true" size={16} />
                    {submitState === 'submitting' ? 'Sending message' : 'Send message'}
                  </button>
                  {submitState === 'error' && (
                    <p role="alert" className="flex items-center gap-2 font-body text-sm text-[#ff8a80]">
                      <AlertCircle aria-hidden="true" size={15} />
                      That did not send. Call (214) 377-9729 or try again.
                    </p>
                  )}
                </form>
              )}
            </ScrollReveal>

            {/* Callback option */}
            <ScrollReveal delay={100}>
              <CallbackForm />
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="py-12 px-[clamp(1.5rem,5vw,4rem)] bg-[#14171a]">
        <div className="mx-auto max-w-[800px]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <ScrollReveal>
              <div className="text-center">
                <div className="w-12 h-12 rounded-sm bg-[rgba(232,163,61,0.15)] flex items-center justify-center mx-auto mb-4">
                  <MapPin size={20} className="text-[#E8A33D]" />
                </div>
                <p className="font-body text-[0.95rem] text-[#f1f1ee] font-medium">{contact.addressLine1}</p>
                <p className="font-body text-[0.85rem] text-[#b7bcc2] mt-1">{contact.addressLine2}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="text-center">
                <div className="w-12 h-12 rounded-sm bg-[rgba(232,163,61,0.15)] flex items-center justify-center mx-auto mb-4">
                  <Phone size={20} className="text-[#E8A33D]" />
                </div>
                <a
                  href={`tel:${contact.phoneE164}`}
                  className="font-body text-[0.95rem] text-[#f1f1ee] font-medium hover:text-[#E8A33D] transition-colors duration-300"
                >
                  {contact.phone}
                </a>
                <p className="font-body text-[0.85rem] text-[#b7bcc2] mt-1">{contact.hours}</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="text-center">
                <div className="w-12 h-12 rounded-sm bg-[rgba(232,163,61,0.15)] flex items-center justify-center mx-auto mb-4">
                  <Mail size={20} className="text-[#E8A33D]" />
                </div>
                <a
                  href={`mailto:${contact.email}`}
                  className="font-body text-[0.95rem] text-[#f1f1ee] font-medium hover:text-[#E8A33D] transition-colors duration-300 break-all"
                >
                  {contact.email}
                </a>
                <p className="font-body text-[0.85rem] text-[#b7bcc2] mt-1">{contact.responseTime}</p>
              </div>
            </ScrollReveal>
          </div>
          <p className="font-body text-[0.8rem] text-[#b7bcc2] text-center mt-8">
            {contact.parkingNote}
          </p>
        </div>
      </section>

      <section className="py-[clamp(4rem,8vw,6rem)] px-[clamp(1.5rem,5vw,4rem)]">
        <div className="mx-auto max-w-[700px]">
          <ScrollReveal>
            <NewsletterSignup label="Join the Artist List" />
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
