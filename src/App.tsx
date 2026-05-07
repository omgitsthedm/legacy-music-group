import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect, useState, createContext, lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import BookingModal from './components/BookingModal'
import JsonLd from './components/JsonLd'
import Home from './pages/Home'
import { organizationSchema, localBusinessSchema, websiteSchema } from './lib/schemas'

// Code-split secondary routes for faster initial paint.
// Home stays eagerly imported because it's the most-hit route.
const Engineers = lazy(() => import('./pages/Engineers'))
const EngineerProfile = lazy(() => import('./pages/EngineerProfile'))
const Services = lazy(() => import('./pages/Services'))
const ServicePage = lazy(() => import('./pages/ServicePage'))
const Studio = lazy(() => import('./pages/Studio'))
const Gear = lazy(() => import('./pages/Gear'))
const Pricing = lazy(() => import('./pages/Pricing'))
const NeighborhoodPage = lazy(() => import('./pages/NeighborhoodPage'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const Reviews = lazy(() => import('./pages/Reviews'))
const Events = lazy(() => import('./pages/Events'))
const Contact = lazy(() => import('./pages/Contact'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Policies = lazy(() => import('./pages/Policies'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))

export const BookingContext = createContext<{
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  openBooking: () => void
}>({ isOpen: false, setIsOpen: () => {}, openBooking: () => {} })

function PageLoader() {
  return (
    <div className="pt-40 pb-20 min-h-[60vh] flex items-center justify-center">
      <div className="w-6 h-6 rounded-full border-2 border-[rgba(232,163,61,0.2)] border-t-[#E8A33D] animate-spin" />
    </div>
  )
}

function NotFound() {
  return (
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
  )
}

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
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/engineers" element={<Engineers />} />
            <Route path="/engineers/:id" element={<EngineerProfile />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:slug" element={<ServicePage />} />
            <Route path="/studio" element={<Studio />} />
            <Route path="/gear" element={<Gear />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/neighborhoods/:slug" element={<NeighborhoodPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/policies" element={<Policies />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
        <BookingModal />
      </div>
    </BookingContext.Provider>
  )
}

export default App
