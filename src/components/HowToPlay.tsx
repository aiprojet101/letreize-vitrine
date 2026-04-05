import { motion } from 'framer-motion'
import { Layers, ArrowUpRight, Trophy, Swords } from 'lucide-react'

const steps = [
  {
    icon: Layers,
    number: '01',
    title: 'Recevez vos cartes',
    description: 'Chaque joueur reçoit 13 cartes. Triez votre main et repérez vos meilleures combinaisons : paires, brelans, suites, couleurs...',
    color: '#2d7a5a',
    glow: 'rgba(45, 122, 90, 0.2)',
  },
  {
    icon: ArrowUpRight,
    title: 'Jouez plus fort',
    number: '02',
    description: 'À chaque tour, posez une combinaison plus forte que la précédente. Le 2 est la carte la plus puissante, le 3 la plus faible.',
    color: '#d4a034',
    glow: 'rgba(212, 160, 52, 0.2)',
  },
  {
    icon: Swords,
    title: 'Dominez la table',
    description: 'Si personne ne peut battre votre combinaison, vous remportez le pli et relancez. Bluffez, anticipez, écrasez.',
    number: '03',
    color: '#c23b3b',
    glow: 'rgba(194, 59, 59, 0.2)',
  },
  {
    icon: Trophy,
    title: 'Videz votre main',
    number: '04',
    description: 'Le premier joueur à se débarrasser de toutes ses cartes gagne. Les autres accumulent des points de pénalité.',
    color: '#f0c040',
    glow: 'rgba(240, 192, 64, 0.2)',
  },
]

export default function HowToPlay() {
  return (
    <section id="how-to-play" className="relative py-32 overflow-hidden">
      {/* Subtle background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(212,160,52,0.5) 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-[#d4a034] mb-4 block">
            Règles du jeu
          </span>
          <h2
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
            style={{
              fontFamily: "'Cinzel', serif",
              background: 'linear-gradient(135deg, #f0e6d2, #b8a88a)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Comment jouer
          </h2>
          <p className="mt-4 text-lg text-[#7a6e5a] max-w-xl mx-auto">
            Simple à apprendre, impossible à maîtriser. Voici les bases en 4 étapes.
          </p>
        </motion.div>

        {/* Steps grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.15, duration: 0.6 }}
                className="group relative rounded-2xl p-8 transition-all duration-500 hover:translate-y-[-4px]"
                style={{
                  background: 'rgba(18, 35, 24, 0.5)',
                  border: '1px solid rgba(212, 160, 52, 0.1)',
                  backdropFilter: 'blur(10px)',
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ boxShadow: `inset 0 0 60px ${step.glow}, 0 0 30px ${step.glow}` }}
                />

                <div className="relative z-10">
                  {/* Number + Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="text-5xl font-bold opacity-10"
                      style={{ fontFamily: "'Cinzel', serif", color: step.color }}
                    >
                      {step.number}
                    </span>
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: `rgba(${step.color === '#d4a034' ? '212,160,52' : step.color === '#2d7a5a' ? '45,122,90' : step.color === '#c23b3b' ? '194,59,59' : '240,192,64'},0.15)`,
                        border: `1px solid ${step.color}30`,
                      }}
                    >
                      <Icon size={22} style={{ color: step.color }} />
                    </div>
                  </div>

                  <h3
                    className="text-xl font-bold mb-3 text-[#f0e6d2]"
                    style={{ fontFamily: "'Cinzel', serif" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-[#b8a88a] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Card ranking reminder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div
            className="inline-flex items-center gap-4 px-8 py-4 rounded-xl"
            style={{
              background: 'rgba(18, 35, 24, 0.6)',
              border: '1px solid rgba(212, 160, 52, 0.15)',
            }}
          >
            <span className="text-sm text-[#7a6e5a]">Hiérarchie :</span>
            <div className="flex items-center gap-2 text-lg">
              {['3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A', '2'].map((rank, i) => (
                <span
                  key={rank}
                  className="font-bold transition-colors"
                  style={{
                    fontFamily: "'Cinzel', serif",
                    color: i < 10 ? '#7a6e5a' : i < 12 ? '#d4a034' : '#f0c040',
                    fontSize: i === 12 ? '1.3em' : undefined,
                  }}
                >
                  {rank}
                </span>
              ))}
            </div>
            <span className="text-sm text-[#7a6e5a]">♦ ♣ ♥ ♠</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
