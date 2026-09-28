import { createContext } from 'react'
import { BOOKING_HANDOFF_URL } from './handoff'

export type SessionType = 'with' | 'without'

function openVerifiedBookingHandoff() {
  window.location.assign(BOOKING_HANDOFF_URL)
}

/**
 * Compatibility context for secondary authored pages. It makes an explicit
 * external handoff; it never presents availability or captures booking data.
 */
export const BookingContext = createContext<{
  openSessionBooking: (sessionType: SessionType) => void
  openBooking: () => void
}>({
  openBooking: openVerifiedBookingHandoff,
  openSessionBooking: () => openVerifiedBookingHandoff(),
})
