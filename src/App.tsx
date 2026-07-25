import { Link, Routes, Route, useLocation } from 'react-router'
import { useEffect, useState, lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import JsonLd from './components/JsonLd'
import Home from './pages/Home'
import { BookingContext } from './lib/booking-context'
import { organizationSchema, localBusinessSchema, websiteSchema } from './lib/schemas'
import { useSeo } from './lib/seo'

// Code-split secondary routes for faster initial paint.
// Home stays eagerly imported because it's the most-hit route.
const Engineers = lazy(() => import('./pages/Engineers'))
const EngineerProfile = lazy(() => import('./pages/EngineerProfile'))
const Services = lazy(() => import('./pages/Services'))
const ServicePage = lazy(() => import('./pages/ServicePage'))
const Studio = lazy(() => import('./pages/Studio'))
const Gear = lazy(() => import('./pages/Gear'))
const Pricing = lazy(() => import('./pages/Pricing'))
const Blog = lazy(() => import('./pages/Blog'))
const Reviews = lazy(() => import('./pages/Reviews'))
const Events = lazy(() => import('./pages/Events'))
const Contact = lazy(() => import('./pages/Contact'))
const FAQ = lazy(() => import('./pages/FAQ'))
const Policies = lazy(() => import('./pages/Policies'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const BookingModal = lazy(() => import('./components/BookingModal'))

function PageLoader() {
  return (
    <div className="pt-40 pb-20 min-h-[60vh] flex items-center justify-center" role="status">
      <div className="w-6 h-6 rounded-sm border-2 border-[rgba(232,163,61,0.2)] border-t-[#E8A33D] animate-spin" />
      <span className="sr-only">Loading page</span>
    </div>
  )
}

function NotFound() {
  useSeo({
    title: 'Page Not Found',
    description: 'The requested page could not be found.',
    path: window.location.pathname,
    noindex: true,
  })

  return (
    <div className="pt-40 pb-20 text-center px-4 min-h-[60vh] flex flex-col items-center justify-center">
      <p className="font-body text-[0.75rem] uppercase tracking-[2px] text-[#E8A33D] font-medium mb-3">
        404
      </p>
      <h1 className="font-display text-3xl text-[#f1f1ee]">Page not found</h1>
      <p className="font-body text-[0.95rem] text-[#b7bcc2] mt-3">
        The page you're looking for doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block bg-[#E8A33D] text-[#0b0c0d] font-body text-[0.9rem] font-medium px-6 py-2.5 rounded-sm hover:bg-[#D4873C] transition-all duration-300"
      >
        Back to Home
      </Link>
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
      <div className="min-h-screen bg-[#0b0c0d] text-[#f1f1ee]">
        <Navbar />
        <main id="main-content">
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
              <Route path="/blog" element={<Blog />} />
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
        </main>
        <Footer />
        {isBookingOpen && (
          <Suspense fallback={null}>
            <BookingModal />
          </Suspense>
        )}
      </div>
    </BookingContext.Provider>
  )
}

export default App
