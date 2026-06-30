import { createContext } from 'react'

export const BookingContext = createContext<{
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  openBooking: () => void
}>({ isOpen: false, setIsOpen: () => {}, openBooking: () => {} })
