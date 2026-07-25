import { useEffect, useMemo, useState } from 'react'
import { ChevronLeft, ChevronRight, Loader2, AlertCircle, Clock, Mail, Phone } from 'lucide-react'
import { calendly, contact } from '../lib/data'

interface Slot {
  start: string
  end: string
  schedulingUrl: string
}

interface AvailabilityResponse {
  slots: Slot[]
  mock: boolean
  note?: string
  error?: string
}

interface CalendlyPickerProps {
  /** Calendly event type URI used to query availability via Netlify proxy */
  eventTypeUri: string
  /** Public Calendly booking URL used as fallback (no slot pre-locked) */
  bookingUrl: string
  /** Optional context line shown above the calendar */
  contextLine?: string
}

/**
 * Brand-matched custom calendar + slot list. Fetches real availability from
 * Calendly via /.netlify/functions/calendly-availability (server-side proxy
 * with PAT auth) and deep-links to Calendly's hosted page with the exact
 * slot's scheduling_url so the user lands on Calendly's contact form with
 * the time pre-locked.
 */
export default function CalendlyPicker({
  eventTypeUri,
  bookingUrl,
  contextLine,
}: CalendlyPickerProps) {
  const [monthOffset, setMonthOffset] = useState(0)
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [slots, setSlots] = useState<Slot[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isMock, setIsMock] = useState(false)
  const isConfigured = !eventTypeUri.includes('PLACEHOLDER')

  const today = useMemo(() => {
    const d = new Date()
    d.setHours(0, 0, 0, 0)
    return d
  }, [])

  const visibleMonth = useMemo(() => {
    const d = new Date(today)
    d.setMonth(d.getMonth() + monthOffset)
    d.setDate(1)
    return d
  }, [today, monthOffset])

  // Fetch availability for the visible month (in 7-day chunks, since Calendly
  // limits each query to a 7-day window).
  useEffect(() => {
    let cancelled = false
    if (!isConfigured) return () => {
      cancelled = true
    }

    const monthStart = new Date(visibleMonth)
    const nextMonthStart = new Date(visibleMonth)
    nextMonthStart.setMonth(nextMonthStart.getMonth() + 1)

    // Don't query the past; clip start to today.
    const queryStart = monthStart < today ? today : monthStart
    const queryEnd = nextMonthStart

    const ranges: { start: Date; end: Date }[] = []
    let cursor = new Date(queryStart)
    while (cursor < queryEnd) {
      const next = new Date(cursor)
      next.setDate(next.getDate() + 7)
      ranges.push({ start: new Date(cursor), end: next > queryEnd ? queryEnd : next })
      cursor = next
    }

    queueMicrotask(() => {
      if (cancelled) return
      setLoading(true)
      setError(null)
    })

    Promise.all(
      ranges.map((r) => {
        const params = new URLSearchParams({
          eventTypeUri,
          start: r.start.toISOString(),
          end: r.end.toISOString(),
        })
        return fetch(`${calendly.availabilityEndpoint}?${params}`).then(
          (res) => res.json() as Promise<AvailabilityResponse>,
        )
      }),
    )
      .then((results) => {
        if (cancelled) return
        const all: Slot[] = []
        let mock = false
        for (const r of results) {
          if (r.error) {
            setError(r.error)
            continue
          }
          if (r.mock) mock = true
          all.push(...r.slots)
        }
        setSlots(all)
        setIsMock(mock)
      })
      .catch((err) => {
        if (cancelled) return
        setError(err instanceof Error ? err.message : 'Failed to load availability.')
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [eventTypeUri, isConfigured, visibleMonth, today])

  // Group slots by YYYY-MM-DD (in viewer's local timezone)
  const slotsByDate = useMemo(() => {
    const map = new Map<string, Slot[]>()
    for (const s of slots) {
      const key = formatLocalDateKey(new Date(s.start))
      const arr = map.get(key) ?? []
      arr.push(s)
      map.set(key, arr)
    }
    // Sort each day's slots ascending
    for (const list of map.values()) {
      list.sort((a, b) => a.start.localeCompare(b.start))
    }
    return map
  }, [slots])

  const firstAvailableDate = useMemo(() => [...slotsByDate.keys()].sort()[0] ?? null, [slotsByDate])
  const effectiveSelectedDate = selectedDate && slotsByDate.has(selectedDate)
    ? selectedDate
    : firstAvailableDate

  const calendarCells = useMemo(() => buildMonthCells(visibleMonth), [visibleMonth])

  const selectedSlots = effectiveSelectedDate ? slotsByDate.get(effectiveSelectedDate) ?? [] : []

  if (!isConfigured || isMock) {
    return (
      <div className="px-6 pb-7">
        {contextLine && (
          <p className="mb-5 font-body text-sm text-[#b7bcc2]">{contextLine}</p>
        )}
        <div className="border border-white/10 bg-[#0b0c0d] p-6 sm:p-8">
          <p className="font-control text-xs uppercase tracking-[0.18em] text-[#E8A33D]">
            Scheduling desk
          </p>
          <h4 className="mt-3 font-display text-3xl uppercase leading-none text-[#f1f1ee]">
            Let the studio lock in your time.
          </h4>
          <p className="mt-4 max-w-lg font-body text-sm leading-6 text-[#b7bcc2]">
            Live calendar booking is being connected. Call or email Legacy with your
            preferred date, session length and engineer, and the team will confirm
            availability directly.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${contact.phoneE164}`}
              className="signal-button justify-center"
            >
              <Phone aria-hidden="true" size={16} />
              Call {contact.phone}
            </a>
            <a
              href={`mailto:${contact.email}?subject=Studio session request`}
              className="inline-flex min-h-12 items-center justify-center gap-2 border border-white/15 px-5 font-control text-sm uppercase tracking-[0.12em] text-[#f1f1ee] transition-colors hover:border-[#E8A33D] hover:text-[#E8A33D]"
            >
              <Mail aria-hidden="true" size={16} />
              Email the studio
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="px-6 pb-6">
      {contextLine && (
        <p className="font-body text-[0.85rem] text-[#b7bcc2] mb-4">{contextLine}</p>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,260px)] gap-5">
        {/* Calendar */}
        <div className="bg-[#0b0c0d] border border-[rgba(241,241,238,0.08)] rounded-sm p-4">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setMonthOffset((o) => Math.max(0, o - 1))}
              disabled={monthOffset === 0}
              aria-label="Previous month"
              className={`w-8 h-8 rounded-sm flex items-center justify-center transition-colors duration-200 ${
                monthOffset === 0
                  ? 'text-[rgba(183,188,194,0.3)] cursor-not-allowed'
                  : 'text-[#b7bcc2] hover:text-[#f1f1ee] hover:bg-[rgba(241,241,238,0.05)]'
              }`}
            >
              <ChevronLeft size={16} />
            </button>
            <p className="font-body text-[1rem] font-medium text-[#f1f1ee]">
              {visibleMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </p>
            <button
              onClick={() => setMonthOffset((o) => Math.min(11, o + 1))}
              disabled={monthOffset === 11}
              aria-label="Next month"
              className={`w-8 h-8 rounded-sm flex items-center justify-center transition-colors duration-200 ${
                monthOffset === 11
                  ? 'text-[rgba(183,188,194,0.3)] cursor-not-allowed'
                  : 'text-[#b7bcc2] hover:text-[#f1f1ee] hover:bg-[rgba(241,241,238,0.05)]'
              }`}
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 gap-1 mb-1">
            {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
              <div
                key={i}
                className="font-body text-[0.65rem] uppercase tracking-[1px] text-[#b7bcc2] text-center py-1"
              >
                {d}
              </div>
            ))}
          </div>

          {/* Date cells */}
          <div className="grid grid-cols-7 gap-1 relative">
            {calendarCells.map((cell, i) => {
              if (!cell) return <div key={i} className="aspect-square" />
              const key = formatLocalDateKey(cell)
              const isPast = cell < today
              const has = slotsByDate.has(key) && slotsByDate.get(key)!.length > 0
              const isSelected = effectiveSelectedDate === key
              const isDisabled = isPast || !has

              return (
                <button
                  key={i}
                  disabled={isDisabled}
                  onClick={() => setSelectedDate(key)}
                  aria-label={cell.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                  className={`aspect-square rounded-sm flex flex-col items-center justify-center text-[0.85rem] font-body transition-all duration-200 relative ${
                    isSelected
                      ? 'bg-[#E8A33D] text-[#0b0c0d] font-medium'
                      : isDisabled
                      ? 'text-[rgba(183,188,194,0.3)] cursor-not-allowed'
                      : 'text-[#f1f1ee] hover:bg-[rgba(232,163,61,0.15)] hover:text-[#E8A33D]'
                  }`}
                >
                  <span>{cell.getDate()}</span>
                  {has && !isSelected && (
                    <span className="absolute bottom-1.5 w-1 h-1 rounded-sm bg-[#E8A33D]" />
                  )}
                </button>
              )
            })}
            {loading && (
              <div className="absolute inset-0 bg-[rgba(10,10,10,0.6)] backdrop-blur-sm rounded-sm flex items-center justify-center">
                <Loader2 size={20} className="text-[#E8A33D] animate-spin" />
              </div>
            )}
          </div>
        </div>

        {/* Slots */}
        <div className="bg-[#0b0c0d] border border-[rgba(241,241,238,0.08)] rounded-sm p-4">
          <div className="flex items-center gap-2 mb-3 text-[#b7bcc2]">
            <Clock size={13} />
            <p className="font-body text-[0.7rem] uppercase tracking-[1.5px]">
              {effectiveSelectedDate
                ? new Date(effectiveSelectedDate).toLocaleDateString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                  })
                : 'Select a date'}
            </p>
          </div>

          {error ? (
            <div className="text-center py-6">
              <AlertCircle size={20} className="text-[#b7bcc2] mx-auto mb-2" />
              <p className="font-body text-[0.85rem] text-[#b7bcc2] mb-3">
                Couldn't load availability.
              </p>
              <a
                href={bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-[0.85rem] text-[#E8A33D] hover:underline"
              >
                Open Calendly directly
              </a>
            </div>
          ) : selectedSlots.length === 0 && !loading ? (
            <p className="font-body text-[0.85rem] text-[#b7bcc2] text-center py-6">
              No times available. Try another date.
            </p>
          ) : (
            <div className="space-y-1.5 max-h-[280px] lg:max-h-[330px] overflow-y-auto pr-1">
              {selectedSlots.map((s) => {
                const time = new Date(s.start).toLocaleTimeString('en-US', {
                  hour: 'numeric',
                  minute: '2-digit',
                })
                return (
                  <a
                    key={s.start}
                    href={s.schedulingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-left px-4 py-2.5 rounded-sm border border-[rgba(241,241,238,0.08)] text-[#f1f1ee] font-body text-[0.9rem] hover:border-[#E8A33D] hover:bg-[rgba(232,163,61,0.08)] hover:text-[#E8A33D] transition-all duration-200"
                  >
                    {time}
                  </a>
                )
              })}
            </div>
          )}
        </div>
      </div>

      <p className="font-body text-[0.75rem] text-[#b7bcc2] mt-4 text-center">
        Times shown in your local timezone. Picking a time opens Calendly to confirm contact details and lock the booking.
      </p>
    </div>
  )
}

// --- helpers --------------------------------------------------------------

function formatLocalDateKey(d: Date): string {
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

/**
 * Build a 6-row month view: Sunday-leading. Returns Date objects for
 * in-month cells and `null` for leading/trailing blanks.
 */
function buildMonthCells(monthStart: Date): (Date | null)[] {
  const cells: (Date | null)[] = []
  const firstDay = monthStart.getDay() // 0 = Sun
  const daysInMonth = new Date(monthStart.getFullYear(), monthStart.getMonth() + 1, 0).getDate()

  for (let i = 0; i < firstDay; i++) cells.push(null)
  for (let i = 1; i <= daysInMonth; i++) {
    cells.push(new Date(monthStart.getFullYear(), monthStart.getMonth(), i))
  }
  while (cells.length % 7 !== 0) cells.push(null)
  return cells
}
