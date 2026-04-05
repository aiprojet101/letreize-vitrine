import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowToPlay from './components/HowToPlay'
import GameModes from './components/GameModes'
import VideoSection from './components/VideoSection'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import CookieBanner from './components/CookieBanner'
import MentionsLegales from './pages/MentionsLegales'
import Confidentialite from './pages/Confidentialite'
import CGU from './pages/CGU'

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <HowToPlay />
      <GameModes />
      <VideoSection />
      <Features />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a1610] text-[#f0e6d2]">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/confidentialite" element={<Confidentialite />} />
        <Route path="/cgu" element={<CGU />} />
      </Routes>
      <CookieBanner />
    </div>
  )
}
