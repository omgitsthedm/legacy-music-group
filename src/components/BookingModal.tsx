import { useContext, useState, useRef, useEffect, useMemo } from 'react'
import {
  X,
  ChevronRight,
  Headphones,
  User,
  Sliders,
  Package,
  Check,
  Calendar as CalIcon,
  Clock,
  CreditCard,
  FileText,
  Mail,
} from 'lucide-react'
import { BookingContext } from '../App'
import { Calendar } from '@/components/ui/calendar'
import { engineers } from '../lib/data'

const timeSlots = [
  '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM',
  '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM',
  '6:00 PM', '7:00 PM', '8:00 PM',
]
// PLACEHOLDER: disabled slots are illustrative — wire to real availability backend.
const disabledSlots = ['12:00 PM', '3:00 PM', '6:00 PM']

const ADDON_PRICES: Record<string, number> = {
  mixing: 150,
  full: 300,
}
const HOURLY_RATE: Record<'with' | 'without', number> = {
  with: 75,
  without: 45,
}

type Step = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9

interface ContactDetails {
  name: string
  email: string
  phone: string
  notes: string
  source: string
  optIn: boolean
}

const initialContact: ContactDetails = {
  name: '',
  email: '',
  phone: '',
  notes: '',
  source: '',
  optIn: false,
}

export default function BookingModal() {
  const { isOpen, setIsOpen } = useContext(BookingContext)
  const [step, setStep] = useState<Step>(1)
  const [sessionType, setSessionType] = useState<'with' | 'without' | null>(null)
  const [addons, setAddons] = useState<string[]>([])
  const [selectedEngineer, setSelectedEngineer] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [contact, setContact] = useState<ContactDetails>(initialContact)
  const [agreed, setAgreed] = useState(false)
  const [paymentInfo, setPaymentInfo] = useState({ name: '', card: '', exp: '', cvc: '', zip: '' })
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Without-engineer flow skips the engineer step. Same total (8 steps + 1 confirm)
  // visually, but we route around step 3 in transitions.
  const totalSteps = 8

  const stepNumberLabel = step === 9 ? 'Confirmed' : `${step} of ${totalSteps}`

  const reset = () => {
    setStep(1)
    setSessionType(null)
    setAddons([])
    setSelectedEngineer(null)
    setSelectedDate(new Date())
    setSelectedTime(null)
    setContact(initialContact)
    setAgreed(false)
    setPaymentInfo({ name: '', card: '', exp: '', cvc: '', zip: '' })
  }

  const handleClose = () => {
    setIsOpen(false)
    setTimeout(reset, 300)
  }

  const goNext = () => {
    if (step === 1 && sessionType === 'without') {
      setStep(3) // skip engineer step
      return
    }
    if (step === 8) {
      // PLACEHOLDER: payment processing — see PLACEHOLDERS.md §Booking backend
      setStep(9)
      return
    }
    setStep((step + 1) as Step)
  }

  const goBack = () => {
    if (step === 3 && sessionType === 'without') {
      setStep(1)
      return
    }
    setStep((step - 1) as Step)
  }

  const toggleAddon = (id: string) => {
    setAddons((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id],
    )
  }

  const canAdvance = useMemo(() => {
    switch (step) {
      case 1: return !!sessionType
      case 2: return true // addons optional
      case 3: return sessionType === 'without' || !!selectedEngineer
      case 4: return !!selectedDate && !!selectedTime
      case 5:
        return (
          contact.name.trim().length > 1 &&
          /\S+@\S+\.\S+/.test(contact.email) &&
          contact.phone.replace(/\D/g, '').length >= 10
        )
      case 6: return true // review only
      case 7: return agreed
      case 8:
        return (
          paymentInfo.name.trim().length > 1 &&
          paymentInfo.card.replace(/\s/g, '').length >= 13 &&
          paymentInfo.exp.length >= 4 &&
          paymentInfo.cvc.length >= 3
        )
      default: return false
    }
  }, [step, sessionType, selectedEngineer, selectedDate, selectedTime, contact, agreed, paymentInfo])

  const sessionTypeLabel = sessionType === 'with' ? 'With Engineer' : sessionType === 'without' ? 'Without Engineer' : '—'
  const engineerName = engineers.find((e) => e.id === selectedEngineer)?.name ?? '—'
  const formattedDate = selectedDate?.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  })
  const baseRate = sessionType ? HOURLY_RATE[sessionType] : 0
  const addonTotal = addons.reduce((sum, a) => sum + (ADDON_PRICES[a] ?? 0), 0)
  const estimatedTotal = baseRate + addonTotal

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-[rgba(0,0,0,0.9)] backdrop-blur-sm transition-opacity duration-300"
        onClick={handleClose}
      />

      <div className="relative w-full max-w-[640px] max-h-[90vh] flex flex-col bg-[#111111] border border-[rgba(245,240,232,0.08)] rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(245,240,232,0.08)] shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <span className="font-body text-[0.7rem] uppercase tracking-[2px] text-[#A38F7B] whitespace-nowrap">
              Step {stepNumberLabel}
            </span>
            {step !== 9 && (
              <div className="flex items-center gap-1 overflow-hidden">
                {Array.from({ length: totalSteps }).map((_, i) => {
                  const stepIndex = i + 1
                  const isPast = stepIndex < step
                  const isCurrent = stepIndex === step
                  const isSkipped = sessionType === 'without' && stepIndex === 3 && step > 3
                  return (
                    <div
                      key={i}
                      className={`w-3 sm:w-4 h-1 rounded-full transition-colors duration-300 ${
                        isPast || isCurrent
                          ? isSkipped
                            ? 'bg-[rgba(232,163,61,0.3)]'
                            : 'bg-[#E8A33D]'
                          : 'bg-[rgba(245,240,232,0.15)]'
                      }`}
                    />
                  )
                })}
              </div>
            )}
          </div>
          <button
            onClick={handleClose}
            className="text-[#A38F7B] hover:text-[#F5F0E8] transition-colors duration-300 p-1"
            aria-label="Close booking"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content (scroll) */}
        <div ref={contentRef} className="flex-1 overflow-y-auto px-6 py-6">
          {/* Step 1: Session Type */}
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-right-2 duration-200">
              <h3 className="font-display text-2xl text-[#F5F0E8] mb-1">Choose your session type</h3>
              <p className="font-body text-[0.9rem] text-[#A38F7B] mb-6">Pick what fits how you work.</p>
              <div className="space-y-3">
                <SelectCard
                  active={sessionType === 'with'}
                  onClick={() => setSessionType('with')}
                  icon={<Headphones size={20} />}
                  title="With Engineer"
                  body="Guided session with a pro engineer. Recommended for most artists."
                  meta="From $75/hr"
                />
                <SelectCard
                  active={sessionType === 'without'}
                  onClick={() => setSessionType('without')}
                  icon={<User size={20} />}
                  title="Without Engineer"
                  body="Self-service session. You run the board. For experienced artists."
                  meta="From $45/hr"
                />
              </div>
            </div>
          )}

          {/* Step 2: Add-ons */}
          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-2 duration-200">
              <h3 className="font-display text-2xl text-[#F5F0E8] mb-1">Enhance your session</h3>
              <p className="font-body text-[0.9rem] text-[#A38F7B] mb-6">Optional. Skip if you're just tracking.</p>
              <div className="space-y-3">
                <SelectCard
                  active={addons.includes('mixing')}
                  onClick={() => toggleAddon('mixing')}
                  icon={<Sliders size={20} />}
                  title="Mixing & Mastering"
                  body="Add professional mix and master to your session."
                  meta="+$150"
                  toggle
                />
                <SelectCard
                  active={addons.includes('full')}
                  onClick={() => toggleAddon('full')}
                  icon={<Package size={20} />}
                  title="Full Package"
                  body="Mixing + mastering + 3 promo clips for social."
                  meta="+$300"
                  toggle
                />
              </div>
            </div>
          )}

          {/* Step 3: Engineer (skipped for without-engineer flow) */}
          {step === 3 && sessionType === 'with' && (
            <div className="animate-in fade-in slide-in-from-right-2 duration-200">
              <h3 className="font-display text-2xl text-[#F5F0E8] mb-1">Choose your engineer</h3>
              <p className="font-body text-[0.9rem] text-[#A38F7B] mb-6">Pick the one whose style fits yours.</p>
              <div className="space-y-2">
                {engineers.map((eng) => (
                  <button
                    key={eng.id}
                    onClick={() => setSelectedEngineer(eng.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 ${
                      selectedEngineer === eng.id
                        ? 'border-[#E8A33D] bg-[rgba(232,163,61,0.1)]'
                        : 'border-[rgba(245,240,232,0.08)] bg-[#0A0A0A] hover:border-[rgba(245,240,232,0.2)]'
                    }`}
                  >
                    <img src={eng.image} alt={eng.name} className="w-10 h-10 rounded-full object-cover" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-body text-[0.95rem] font-medium text-[#F5F0E8]">{eng.name}</h4>
                      <p className="font-body text-[0.75rem] text-[#E8A33D] uppercase tracking-[1px]">{eng.specialty}</p>
                    </div>
                    {selectedEngineer === eng.id ? (
                      <div className="w-5 h-5 rounded-full bg-[#E8A33D] flex items-center justify-center">
                        <Check size={12} className="text-[#0A0A0A]" />
                      </div>
                    ) : (
                      <ChevronRight size={16} className="text-[#A38F7B]" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 4: Date + Time */}
          {step === 4 && (
            <div className="animate-in fade-in slide-in-from-right-2 duration-200">
              <h3 className="font-display text-2xl text-[#F5F0E8] mb-1">Pick a time</h3>
              <p className="font-body text-[0.9rem] text-[#A38F7B] mb-6">Pre-launch placeholder — real availability syncs once scheduling is wired.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="bg-[#0A0A0A] rounded-xl border border-[rgba(245,240,232,0.08)] p-3"
                    disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
                  />
                </div>
                <div>
                  <h4 className="font-body text-[0.7rem] uppercase tracking-[2px] text-[#A38F7B] mb-3">
                    Available Slots
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.map((slot) => {
                      const isDisabled = disabledSlots.includes(slot)
                      const isSelected = selectedTime === slot
                      return (
                        <button
                          key={slot}
                          disabled={isDisabled}
                          onClick={() => setSelectedTime(slot)}
                          className={`font-body text-[0.85rem] py-2.5 px-3 rounded-full border transition-all duration-300 ${
                            isSelected
                              ? 'bg-[#E8A33D] text-[#0A0A0A] border-[#E8A33D]'
                              : isDisabled
                              ? 'text-[rgba(163,143,123,0.4)] border-[rgba(245,240,232,0.05)] line-through cursor-not-allowed'
                              : 'text-[#F5F0E8] border-[rgba(245,240,232,0.2)] hover:border-[#E8A33D] hover:text-[#E8A33D]'
                          }`}
                        >
                          {slot}
                        </button>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Contact Details */}
          {step === 5 && (
            <div className="animate-in fade-in slide-in-from-right-2 duration-200 space-y-4">
              <div>
                <h3 className="font-display text-2xl text-[#F5F0E8] mb-1">Your details</h3>
                <p className="font-body text-[0.9rem] text-[#A38F7B]">So we can confirm your session.</p>
              </div>
              <FieldInput
                label="Name"
                name="name"
                value={contact.name}
                onChange={(v) => setContact({ ...contact, name: v })}
                placeholder="Your name"
                autoComplete="name"
              />
              <FieldInput
                label="Email"
                name="email"
                type="email"
                value={contact.email}
                onChange={(v) => setContact({ ...contact, email: v })}
                placeholder="you@example.com"
                autoComplete="email"
              />
              <FieldInput
                label="Phone"
                name="phone"
                type="tel"
                value={contact.phone}
                onChange={(v) => setContact({ ...contact, phone: v })}
                placeholder="(214) 555-0199"
                autoComplete="tel"
              />
              <FieldInput
                label="Notes (optional)"
                name="notes"
                value={contact.notes}
                onChange={(v) => setContact({ ...contact, notes: v })}
                placeholder="Anything we should know?"
                multiline
              />
              <div>
                <label className="block font-body text-[0.7rem] uppercase tracking-[1px] text-[#A38F7B] mb-2">
                  How did you hear about us? (optional)
                </label>
                <select
                  value={contact.source}
                  onChange={(e) => setContact({ ...contact, source: e.target.value })}
                  className="w-full bg-[#0A0A0A] border border-[rgba(245,240,232,0.1)] rounded-lg px-4 py-3 text-[#F5F0E8] font-body text-[0.95rem] focus:border-[#E8A33D] focus:outline-none transition-colors duration-300"
                >
                  <option value="">Select...</option>
                  <option value="instagram">Instagram</option>
                  <option value="google">Google search</option>
                  <option value="referral">Friend / referral</option>
                  <option value="event">Legacy Live or event</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <label className="flex items-start gap-3 cursor-pointer pt-2">
                <input
                  type="checkbox"
                  checked={contact.optIn}
                  onChange={(e) => setContact({ ...contact, optIn: e.target.checked })}
                  className="mt-1 accent-[#E8A33D]"
                />
                <span className="font-body text-[0.85rem] text-[#A38F7B] leading-[1.5]">
                  Add me to the artist list — studio drops, release tips, Dallas events. Unsubscribe anytime.
                </span>
              </label>
            </div>
          )}

          {/* Step 6: Review */}
          {step === 6 && (
            <div className="animate-in fade-in slide-in-from-right-2 duration-200">
              <h3 className="font-display text-2xl text-[#F5F0E8] mb-1">Review your booking</h3>
              <p className="font-body text-[0.9rem] text-[#A38F7B] mb-6">Make sure everything looks right.</p>

              <div className="space-y-3 bg-[#0A0A0A] border border-[rgba(245,240,232,0.08)] rounded-xl p-5">
                <ReviewRow icon={<Headphones size={14} />} label="Session" value={sessionTypeLabel} />
                {sessionType === 'with' && (
                  <ReviewRow icon={<User size={14} />} label="Engineer" value={engineerName} />
                )}
                {addons.length > 0 && (
                  <ReviewRow
                    icon={<Sliders size={14} />}
                    label="Add-ons"
                    value={addons
                      .map((a) =>
                        a === 'mixing' ? 'Mixing & Mastering' : 'Full Package',
                      )
                      .join(', ')}
                  />
                )}
                <ReviewRow icon={<CalIcon size={14} />} label="Date" value={formattedDate ?? '—'} />
                <ReviewRow icon={<Clock size={14} />} label="Time" value={selectedTime ?? '—'} />
                <ReviewRow icon={<Mail size={14} />} label="Contact" value={`${contact.name} · ${contact.email}`} />
              </div>

              <div className="mt-6 bg-[rgba(232,163,61,0.08)] border border-[rgba(232,163,61,0.25)] rounded-xl p-5">
                <div className="flex items-center justify-between">
                  <p className="font-body text-[0.85rem] uppercase tracking-[1px] text-[#A38F7B]">
                    Estimated total
                  </p>
                  <p className="font-display text-2xl text-[#F5F0E8]">${estimatedTotal}</p>
                </div>
                <p className="font-body text-[0.75rem] text-[#A38F7B] mt-2">
                  Hourly rate × your session length, plus any add-ons. Final total confirmed at checkout. (Placeholder calculation.)
                </p>
              </div>
            </div>
          )}

          {/* Step 7: Agreement */}
          {step === 7 && (
            <div className="animate-in fade-in slide-in-from-right-2 duration-200">
              <h3 className="font-display text-2xl text-[#F5F0E8] mb-1">Studio agreement</h3>
              <p className="font-body text-[0.9rem] text-[#A38F7B] mb-6">Quick read. The rules of the room.</p>

              <div className="bg-[#0A0A0A] border border-[rgba(245,240,232,0.08)] rounded-xl p-5 space-y-3 max-h-[260px] overflow-y-auto">
                <div className="flex gap-3">
                  <FileText size={16} className="text-[#E8A33D] shrink-0 mt-0.5" />
                  <p className="font-body text-[0.85rem] text-[#A38F7B] leading-[1.6]">
                    Cancellations 48+ hrs before your session are fully refundable. Inside 48 hrs, the deposit is non-refundable but transferable to a future session.
                  </p>
                </div>
                <div className="flex gap-3">
                  <FileText size={16} className="text-[#E8A33D] shrink-0 mt-0.5" />
                  <p className="font-body text-[0.85rem] text-[#A38F7B] leading-[1.6]">
                    Sessions start and end at the scheduled time. Late arrivals don't extend the session.
                  </p>
                </div>
                <div className="flex gap-3">
                  <FileText size={16} className="text-[#E8A33D] shrink-0 mt-0.5" />
                  <p className="font-body text-[0.85rem] text-[#A38F7B] leading-[1.6]">
                    You own everything you create here. We may reference our work with you for portfolio purposes.
                  </p>
                </div>
                <div className="flex gap-3">
                  <FileText size={16} className="text-[#E8A33D] shrink-0 mt-0.5" />
                  <p className="font-body text-[0.85rem] text-[#A38F7B] leading-[1.6]">
                    Damage to equipment is the responsibility of the booking party.
                  </p>
                </div>
                <p className="font-body text-[0.75rem] text-[rgba(163,143,123,0.7)] pt-2 border-t border-[rgba(245,240,232,0.06)]">
                  Full policies at <a href="/policies" className="text-[#E8A33D] hover:underline">/policies</a>. (Placeholder copy — final terms pending owner confirmation.)
                </p>
              </div>

              <label className="flex items-start gap-3 cursor-pointer mt-5 p-4 rounded-xl border border-[rgba(245,240,232,0.1)] hover:border-[rgba(232,163,61,0.4)] transition-colors duration-300">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 accent-[#E8A33D] w-4 h-4"
                />
                <span className="font-body text-[0.95rem] text-[#F5F0E8] leading-[1.5]">
                  I've read the studio agreement and policies, and I'm good to proceed.
                </span>
              </label>
            </div>
          )}

          {/* Step 8: Payment */}
          {step === 8 && (
            <div className="animate-in fade-in slide-in-from-right-2 duration-200">
              <div className="flex items-start justify-between gap-4 mb-1">
                <h3 className="font-display text-2xl text-[#F5F0E8]">Payment</h3>
                <span className="font-body text-[0.75rem] uppercase tracking-[1px] text-[#A38F7B]">
                  ${estimatedTotal} estimated
                </span>
              </div>
              <p className="font-body text-[0.85rem] text-[#A38F7B] mb-5">
                Secure deposit holds your slot. Balance is settled before your session.
              </p>

              <div className="bg-[rgba(232,163,61,0.08)] border border-[rgba(232,163,61,0.25)] rounded-xl p-3 mb-5 flex items-start gap-2">
                <CreditCard size={16} className="text-[#E8A33D] shrink-0 mt-0.5" />
                <p className="font-body text-[0.8rem] text-[#A38F7B] leading-[1.5]">
                  Placeholder form — live card processing wires to Stripe before launch. No real charge will be attempted.
                </p>
              </div>

              <div className="space-y-4">
                <FieldInput
                  label="Cardholder name"
                  name="cardName"
                  value={paymentInfo.name}
                  onChange={(v) => setPaymentInfo({ ...paymentInfo, name: v })}
                  placeholder="Name on card"
                  autoComplete="cc-name"
                />
                <FieldInput
                  label="Card number"
                  name="card"
                  value={paymentInfo.card}
                  onChange={(v) => setPaymentInfo({ ...paymentInfo, card: v })}
                  placeholder="4242 4242 4242 4242"
                  autoComplete="cc-number"
                  inputMode="numeric"
                />
                <div className="grid grid-cols-3 gap-3">
                  <FieldInput
                    label="Exp"
                    name="exp"
                    value={paymentInfo.exp}
                    onChange={(v) => setPaymentInfo({ ...paymentInfo, exp: v })}
                    placeholder="MM/YY"
                    autoComplete="cc-exp"
                    inputMode="numeric"
                  />
                  <FieldInput
                    label="CVC"
                    name="cvc"
                    value={paymentInfo.cvc}
                    onChange={(v) => setPaymentInfo({ ...paymentInfo, cvc: v })}
                    placeholder="123"
                    autoComplete="cc-csc"
                    inputMode="numeric"
                  />
                  <FieldInput
                    label="ZIP"
                    name="zip"
                    value={paymentInfo.zip}
                    onChange={(v) => setPaymentInfo({ ...paymentInfo, zip: v })}
                    placeholder="75226"
                    autoComplete="postal-code"
                    inputMode="numeric"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 9: Confirmation */}
          {step === 9 && (
            <div className="flex flex-col items-center justify-center h-full py-12 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="w-16 h-16 rounded-full bg-[rgba(74,124,89,0.2)] flex items-center justify-center mb-6">
                <Check size={32} className="text-[#4A7C59]" />
              </div>
              <h3 className="font-display text-2xl text-[#F5F0E8] mb-3">Booking Confirmed</h3>
              <p className="font-body text-[0.95rem] text-[#A38F7B] max-w-[420px] mb-2">
                Your session is locked in for <span className="text-[#F5F0E8]">{formattedDate}</span> at <span className="text-[#F5F0E8]">{selectedTime}</span>.
              </p>
              <p className="font-body text-[0.85rem] text-[#A38F7B] max-w-[420px] mb-6">
                Confirmation sent to {contact.email || 'your email'}. We'll text {contact.phone || 'you'} the day before with parking and check-in details.
              </p>
              <button
                onClick={handleClose}
                className="bg-[#E8A33D] text-[#0A0A0A] font-body text-[0.9rem] font-medium px-8 py-3 rounded-full hover:bg-[#D4873C] transition-all duration-300"
              >
                Done
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        {step !== 9 && (
          <div className="flex items-center justify-between px-6 py-4 border-t border-[rgba(245,240,232,0.08)] shrink-0">
            <button
              onClick={goBack}
              disabled={step === 1}
              className={`font-body text-[0.9rem] transition-colors duration-300 ${
                step === 1
                  ? 'text-[rgba(163,143,123,0.4)] cursor-not-allowed'
                  : 'text-[#A38F7B] hover:text-[#F5F0E8]'
              }`}
            >
              Back
            </button>
            <button
              onClick={goNext}
              disabled={!canAdvance}
              className={`font-body text-[0.9rem] font-medium px-6 py-2.5 rounded-full transition-all duration-300 ${
                !canAdvance
                  ? 'bg-[rgba(232,163,61,0.3)] text-[rgba(10,10,10,0.5)] cursor-not-allowed'
                  : 'bg-[#E8A33D] text-[#0A0A0A] hover:bg-[#D4873C] hover:scale-[1.02]'
              }`}
            >
              {step === 8 ? 'Pay & Confirm' : step === 7 ? 'Continue to Payment' : step === 6 ? 'Looks Good' : 'Next'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

// --- Subcomponents -------------------------------------------------------

function SelectCard({
  active,
  onClick,
  icon,
  title,
  body,
  meta,
  toggle = false,
}: {
  active: boolean
  onClick: () => void
  icon: React.ReactNode
  title: string
  body: string
  meta: string
  toggle?: boolean
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-start gap-4 ${
        active
          ? 'border-[#E8A33D] bg-[rgba(232,163,61,0.1)]'
          : 'border-[rgba(245,240,232,0.08)] bg-[#0A0A0A] hover:border-[rgba(245,240,232,0.2)]'
      }`}
    >
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
          active ? 'bg-[#E8A33D] text-[#0A0A0A]' : 'bg-[#1A1A1A] text-[#A38F7B]'
        }`}
      >
        {icon}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2 flex-wrap">
          <h4 className="font-body text-[1rem] font-medium text-[#F5F0E8]">{title}</h4>
          <span className="font-body text-[0.85rem] text-[#E8A33D] font-medium">{meta}</span>
        </div>
        <p className="font-body text-[0.85rem] text-[#A38F7B] mt-1">{body}</p>
      </div>
      {toggle && (
        <div
          className={`w-5 h-5 rounded border flex items-center justify-center shrink-0 mt-1 transition-colors duration-300 ${
            active ? 'bg-[#E8A33D] border-[#E8A33D]' : 'border-[rgba(245,240,232,0.3)]'
          }`}
        >
          {active && <Check size={12} className="text-[#0A0A0A]" />}
        </div>
      )}
    </button>
  )
}

function FieldInput({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = 'text',
  autoComplete,
  inputMode,
  multiline = false,
}: {
  label: string
  name: string
  value: string
  onChange: (v: string) => void
  placeholder?: string
  type?: string
  autoComplete?: string
  inputMode?: 'numeric' | 'text' | 'email' | 'tel'
  multiline?: boolean
}) {
  const className =
    'w-full bg-[#0A0A0A] border border-[rgba(245,240,232,0.1)] rounded-lg px-4 py-3 text-[#F5F0E8] font-body text-[0.95rem] placeholder:text-[rgba(163,143,123,0.5)] focus:border-[#E8A33D] focus:outline-none transition-colors duration-300'
  return (
    <div>
      <label className="block font-body text-[0.7rem] uppercase tracking-[1px] text-[#A38F7B] mb-2">
        {label}
      </label>
      {multiline ? (
        <textarea
          name={name}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          rows={3}
          className={`${className} resize-none`}
        />
      ) : (
        <input
          name={name}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          autoComplete={autoComplete}
          inputMode={inputMode}
          className={className}
        />
      )}
    </div>
  )
}

function ReviewRow({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-2 text-[#A38F7B]">
        {icon}
        <span className="font-body text-[0.85rem] uppercase tracking-[1px]">{label}</span>
      </div>
      <span className="font-body text-[0.95rem] text-[#F5F0E8] text-right truncate max-w-[60%]">
        {value}
      </span>
    </div>
  )
}
