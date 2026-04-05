import { Heart } from 'lucide-react'

const footerLinks = [
  {
    title: 'Jeu',
    links: [
      { label: 'Jouer', href: 'https://le13-lac.vercel.app' },
      { label: 'Règles', href: '#how-to-play' },
      { label: 'Modes de jeu', href: '#game-modes' },
    ],
  },
  {
    title: 'Produit',
    links: [
      { label: 'Fonctionnalités', href: '#features' },
      { label: 'Vidéo tutoriel', href: '#video' },
    ],
  },
  {
    title: 'Légal',
    links: [
      { label: 'Confidentialité', href: 'https://le13-lac.vercel.app/privacy' },
      { label: 'CGU', href: '#' },
      { label: 'Contact', href: 'mailto:aiprojet101@gmail.com' },
    ],
  },
]

export default function Footer() {
  return (
    <footer
      className="relative pt-16 pb-8"
      style={{
        background: 'linear-gradient(180deg, rgba(10,22,16,0), rgba(13,31,22,0.5))',
        borderTop: '1px solid rgba(212, 160, 52, 0.08)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Top section */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
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
                className="text-lg font-bold"
                style={{
                  fontFamily: "'Cinzel', serif",
                  color: '#d4a034',
                }}
              >
                Le Treize
              </span>
            </div>
            <p className="text-sm text-[#7a6e5a] leading-relaxed">
              Le jeu de cartes vietnamien Tiến Lên, réinventé pour le web.
              Gratuit, en ligne, sans téléchargement.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4
                className="text-sm font-semibold text-[#b8a88a] mb-4 uppercase tracking-wider"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                {group.title}
              </h4>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#7a6e5a] hover:text-[#d4a034] transition-colors duration-300"
                      {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Separator */}
        <div
          className="h-px w-full mb-8"
          style={{ background: 'linear-gradient(90deg, transparent, rgba(212,160,52,0.15), transparent)' }}
        />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#7a6e5a]">
          <p>&copy; {new Date().getFullYear()} Le Treize. Tous droits réservés.</p>
          <p className="flex items-center gap-1.5">
            Fait avec <Heart size={12} className="text-[#c23b3b]" /> au Vietnam et en France
          </p>
        </div>
      </div>
    </footer>
  )
}
