import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowToPlay from './components/HowToPlay'
import GameModes from './components/GameModes'
import VideoSection from './components/VideoSection'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a1610] text-[#f0e6d2]">
      <Navbar />
      <Hero />
      <HowToPlay />
      <GameModes />
      <VideoSection />
      <Features />
      <Testimonials />
      <FinalCTA />
      <Footer />
    </div>
  )
}
