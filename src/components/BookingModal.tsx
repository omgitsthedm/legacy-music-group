import { useContext, useState, useRef, useEffect, useMemo } from 'react'
import {
  X,
  ChevronRight,
  Headphones,
  User,
  Sliders,
  Package,
  Check,
  ExternalLink,
} from 'lucide-react'
import { BookingContext } from '../App'
import { engineers, calendly } from '../lib/data'
import CalendlyPicker from './CalendlyPicker'

type Step = 1 | 2 | 3 | 4 | 5

const TOTAL_VISIBLE_STEPS = 4

export default function BookingModal() {
  const { isOpen, setIsOpen } = useContext(BookingContext)
  const [step, setStep] = useState<Step>(1)
  const [sessionType, setSessionType] = useState<'with' | 'without' | null>(null)
  const [addons, setAddons] = useState<string[]>([])
  const [selectedEngineer, setSelectedEngineer] = useState<string | null>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const reset = () => {
    setStep(1)
    setSessionType(null)
    setAddons([])
    setSelectedEngineer(null)
  }

  const handleClose = () => {
    setIsOpen(false)
    setTimeout(reset, 300)
  }

  const goNext = () => {
    if (step === 1 && sessionType === 'without') {
      setStep(2)
      return
    }
    setStep((step + 1) as Step)
  }

  const goBack = () => {
    if (step === 2 && sessionType === 'without') {
      setStep(1)
      return
    }
    if (step === 4 && sessionType === 'without') {
      setStep(2)
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
      case 2: return true
      case 3: return sessionType === 'without' || !!selectedEngineer
      default: return false
    }
  }, [step, sessionType, selectedEngineer])

  const visibleStep = useMemo(() => {
    if (step === 5) return TOTAL_VISIBLE_STEPS
    if (sessionType === 'without' && step >= 3) return step - 1
    return step
  }, [step, sessionType])

  // Resolve which Calendly event we're targeting based on prior selections
  const eventConfig = useMemo(() => {
    if (sessionType === 'without') return calendly.withoutEngineer
    if (sessionType === 'with' && selectedEngineer) {
      return calendly.withEngineer.byEngineerId[selectedEngineer] ?? calendly.withEngineer.default
    }
    return calendly.withEngineer.default
  }, [sessionType, selectedEngineer])

  const engineerObj = engineers.find((e) => e.id === selectedEngineer)
  const addonString = addons
    .map((a) => (a === 'mixing' ? 'Mixing & Mastering' : 'Full Package'))
    .join(' + ')

  const contextLine = useMemo(() => {
    if (sessionType === 'with' && engineerObj) {
      return `Booking with ${engineerObj.name}${addons.length ? ` · ${addonString}` : ''}.`
    }
    if (sessionType === 'without') {
      return `Studio time, no engineer${addons.length ? ` · ${addonString}` : ''}.`
    }
    return undefined
  }, [sessionType, engineerObj, addons, addonString])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-[rgba(0,0,0,0.9)] backdrop-blur-sm transition-opacity duration-300"
        onClick={handleClose}
      />

      <div
        className={`relative w-full ${
          step === 4 ? 'max-w-[820px]' : 'max-w-[640px]'
        } max-h-[92vh] flex flex-col bg-[#111111] border border-[rgba(245,240,232,0.08)] rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in-95 duration-300`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[rgba(245,240,232,0.08)] shrink-0">
          <div className="flex items-center gap-3 min-w-0">
            <span className="font-body text-[0.7rem] uppercase tracking-[2px] text-[#A38F7B] whitespace-nowrap">
              {step === 5 ? 'Confirmed' : `Step ${visibleStep} of ${TOTAL_VISIBLE_STEPS}`}
            </span>
            {step !== 5 && (
              <div className="flex items-center gap-1">
                {Array.from({ length: TOTAL_VISIBLE_STEPS }).map((_, i) => {
                  const stepIndex = i + 1
                  const isPast = stepIndex < visibleStep
                  const isCurrent = stepIndex === visibleStep
                  return (
                    <div
                      key={i}
                      className={`w-3 sm:w-4 h-1 rounded-full transition-colors duration-300 ${
                        isPast || isCurrent
                          ? 'bg-[#E8A33D]'
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

        {/* Content */}
        <div ref={contentRef} className="flex-1 overflow-y-auto">
          {step === 1 && (
            <div className="px-6 py-6 animate-in fade-in slide-in-from-right-2 duration-200">
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

          {step === 2 && (
            <div className="px-6 py-6 animate-in fade-in slide-in-from-right-2 duration-200">
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

          {step === 3 && sessionType === 'with' && (
            <div className="px-6 py-6 animate-in fade-in slide-in-from-right-2 duration-200">
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

          {step === 4 && (
            <div className="animate-in fade-in slide-in-from-right-2 duration-200">
              <div className="px-6 pt-6 pb-2">
                <h3 className="font-display text-2xl text-[#F5F0E8]">Pick a time</h3>
              </div>
              <CalendlyPicker
                eventTypeUri={eventConfig.eventTypeUri}
                bookingUrl={eventConfig.bookingUrl}
                contextLine={contextLine}
              />
            </div>
          )}

          {step === 5 && (
            <div className="px-6 py-12 flex flex-col items-center justify-center text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="w-16 h-16 rounded-full bg-[rgba(74,124,89,0.2)] flex items-center justify-center mb-6">
                <Check size={32} className="text-[#4A7C59]" />
              </div>
              <h3 className="font-display text-2xl text-[#F5F0E8] mb-3">You're booked.</h3>
              <p className="font-body text-[0.95rem] text-[#A38F7B] max-w-[420px] mb-2">
                Check your email for the calendar invite and confirmation.
              </p>
              <button
                onClick={handleClose}
                className="bg-[#E8A33D] text-[#0A0A0A] font-body text-[0.9rem] font-medium px-8 py-3 rounded-full hover:bg-[#D4873C] transition-all duration-300 mt-4"
              >
                Done
              </button>
            </div>
          )}
        </div>

        {/* Footer */}
        {step <= 3 && (
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
              {step === 3 ? 'Continue to scheduling' : step === 2 && sessionType === 'without' ? 'Continue to scheduling' : 'Next'}
            </button>
          </div>
        )}
        {step === 4 && (
          <div className="flex items-center justify-between px-6 py-3 border-t border-[rgba(245,240,232,0.08)] shrink-0">
            <button
              onClick={goBack}
              className="font-body text-[0.9rem] text-[#A38F7B] hover:text-[#F5F0E8] transition-colors duration-300"
            >
              Back
            </button>
            <a
              href={eventConfig.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-body text-[0.85rem] text-[#A38F7B] hover:text-[#E8A33D] transition-colors duration-300"
            >
              Open Calendly directly
              <ExternalLink size={13} />
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

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
