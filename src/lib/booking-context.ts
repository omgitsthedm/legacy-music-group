import { createContext } from 'react'

export type SessionType = 'with' | 'without'

export const BookingContext = createContext<{
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  initialSessionType: SessionType | null
  openSessionBooking: (sessionType: SessionType) => void
  openBooking: () => void
}>({ isOpen: false, setIsOpen: () => {}, openBooking: () => {}, initialSessionType: null, openSessionBooking: () => {} })
