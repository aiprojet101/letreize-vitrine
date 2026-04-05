import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer
      className="relative pt-20 pb-10"
      style={{
        background: 'linear-gradient(180deg, rgba(10,22,16,0), rgba(13,31,22,0.5))',
        borderTop: '1px solid rgba(212, 160, 52, 0.08)',
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Top: Logo + tagline centered */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center text-sm font-bold"
              style={{
                fontFamily: "'Cinzel', serif",
                background: 'linear-gradient(135deg, #1a3a24, #0d2014)',
                border: '1.5px solid rgba(212, 160, 52, 0.5)',
                color: '#d4a034',
              }}
            >
              13
            </div>
            <span
              className="text-xl font-bold"
              style={{
                fontFamily: "'Cinzel', serif",
                color: '#d4a034',
              }}
            >
              Le Treize
            </span>
          </div>
          <p className="text-sm text-[#7a6e5a]">
            Le jeu de cartes vietnamien Tiến Lên — gratuit, en ligne, sans téléchargement.
          </p>
        </div>

        {/* Middle: All links in a single flat row */}
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mb-14">
          <a
            href="https://le13-lac.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#b8a88a] hover:text-[#d4a034] transition-colors duration-300"
          >
            Jouer
          </a>
          <a href="#how-to-play" className="text-sm text-[#b8a88a] hover:text-[#d4a034] transition-colors duration-300">
            Règles
          </a>
          <a href="#game-modes" className="text-sm text-[#b8a88a] hover:text-[#d4a034] transition-colors duration-300">
            Modes de jeu
          </a>
          <a href="#features" className="text-sm text-[#b8a88a] hover:text-[#d4a034] transition-colors duration-300">
            Fonctionnalités
          </a>
          <a href="#video" className="text-sm text-[#b8a88a] hover:text-[#d4a034] transition-colors duration-300">
            Vidéo
          </a>

          <span className="hidden sm:block w-px h-4 bg-[rgba(212,160,52,0.15)]" />

          <Link to="/mentions-legales" className="text-sm text-[#7a6e5a] hover:text-[#d4a034] transition-colors duration-300">
            Mentions légales
          </Link>
          <Link to="/confidentialite" className="text-sm text-[#7a6e5a] hover:text-[#d4a034] transition-colors duration-300">
            Confidentialité
          </Link>
          <Link to="/cgu" className="text-sm text-[#7a6e5a] hover:text-[#d4a034] transition-colors duration-300">
            CGU
          </Link>
          <a
            href="mailto:contact@letreize.fr"
            className="text-sm text-[#7a6e5a] hover:text-[#d4a034] transition-colors duration-300"
          >
            Contact
          </a>
        </div>

        {/* Separator */}
        <div
          className="h-px w-full mb-8"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(212,160,52,0.15), transparent)' }}
        />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#7a6e5a]">
          <p>&copy; {new Date().getFullYear()} Le Treize. Tous droits réservés.</p>
          <p className="flex items-center gap-1.5">
            Fait avec <Heart size={12} className="text-[#c23b3b]" /> au Vietnam et en France
          </p>
        </div>
      </div>
    </footer>
  )
}
