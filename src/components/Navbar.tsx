import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'Comment jouer', href: '#how-to-play' },
  { label: 'Modes de jeu', href: '#game-modes' },
  { label: 'Fonctionnalités', href: '#features' },
  { label: 'Vidéo', href: '#video' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[rgba(10,22,16,0.95)] backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] border-b border-[rgba(212,160,52,0.15)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(212,160,52,0.4)]"
              style={{
                fontFamily: "'Cinzel', serif",
                background: 'linear-gradient(135deg, #1a3a24, #0d2014)',
                border: '1.5px solid rgba(212, 160, 52, 0.5)',
                color: '#d4a034',
              }}
            >
              13
            </div>
            <div>
              <span
                className="text-xl font-bold block leading-none"
                style={{
                  fontFamily: "'Cinzel', serif",
                  background: 'linear-gradient(135deg, #f0c040, #d4a034)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Le Treize
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#7a6e5a]">
                Tiến Lên
              </span>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-[#b8a88a] hover:text-[#f0c040] transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#d4a034] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a
              href="https://le13-lac.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:shadow-[0_0_25px_rgba(212,160,52,0.4)] hover:scale-105"
              style={{
                background: 'linear-gradient(135deg, #d4a034, #8a6820)',
                color: '#0a1610',
              }}
            >
              Jouer maintenant
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#b8a88a] hover:text-[#f0c040] transition-colors"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[rgba(10,22,16,0.98)] backdrop-blur-xl pt-24 px-8 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-2xl font-medium text-[#b8a88a] hover:text-[#f0c040] transition-colors"
                  style={{ fontFamily: "'Cinzel', serif" }}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://le13-lac.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="mt-4 px-8 py-4 rounded-xl text-center text-lg font-semibold"
                style={{
                  background: 'linear-gradient(135deg, #d4a034, #8a6820)',
                  color: '#0a1610',
                }}
              >
                Jouer maintenant
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
