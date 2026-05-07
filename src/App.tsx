import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState, createContext } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'
import Home from './pages/Home'
import Engineers from './pages/Engineers'
import EngineerProfile from './pages/EngineerProfile'
import Services from './pages/Services'
import Studio from './pages/Studio'
import Contact from './pages/Contact'

export const BookingContext = createContext<{
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  openBooking: () => void
}>({ isOpen: false, setIsOpen: () => {}, openBooking: () => {} })

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  const openBooking = () => setIsBookingOpen(true)

  return (
    <BookingContext.Provider value={{ isOpen: isBookingOpen, setIsOpen: setIsBookingOpen, openBooking }}>
      <div className="min-h-screen bg-[#0A0A0A] text-[#F5F0E8]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/engineers" element={<Engineers />} />
          <Route path="/engineers/:id" element={<EngineerProfile />} />
          <Route path="/services" element={<Services />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <BookingModal />
      </div>
    </BookingContext.Provider>
  )
}

export default App
