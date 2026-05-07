import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState, createContext } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'
import JsonLd from './components/JsonLd'
import Home from './pages/Home'
import Engineers from './pages/Engineers'
import EngineerProfile from './pages/EngineerProfile'
import Services from './pages/Services'
import Studio from './pages/Studio'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Policies from './pages/Policies'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import { organizationSchema, localBusinessSchema, websiteSchema } from './lib/schemas'

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
      <JsonLd id="organization" data={organizationSchema} />
      <JsonLd id="localbusiness" data={localBusinessSchema} />
      <JsonLd id="website" data={websiteSchema} />

      <div className="min-h-screen bg-[#0A0A0A] text-[#F5F0E8]">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/engineers" element={<Engineers />} />
          <Route path="/engineers/:id" element={<EngineerProfile />} />
          <Route path="/services" element={<Services />} />
          <Route path="/studio" element={<Studio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/policies" element={<Policies />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route
            path="*"
            element={
              <div className="pt-40 pb-20 text-center px-4 min-h-[60vh] flex flex-col items-center justify-center">
                <p className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium mb-3">
                  404
                </p>
                <h1 className="font-display text-3xl text-[#F5F0E8]">Page not found</h1>
                <p className="font-body text-[0.95rem] text-[#A38F7B] mt-3">
                  The page you're looking for doesn't exist.
                </p>
                <a
                  href="/"
                  className="mt-6 inline-block bg-[#E8A33D] text-[#0A0A0A] font-body text-[0.9rem] font-medium px-6 py-2.5 rounded-full hover:bg-[#D4873C] transition-all duration-300"
                >
                  Back to Home
                </a>
              </div>
            }
          />
        </Routes>
        <Footer />
        <BookingModal />
      </div>
    </BookingContext.Provider>
  )
}

export default App
