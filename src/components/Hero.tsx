import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import PlayingCard from './PlayingCard'

const floatingCards = [
  { rank: 'A', suit: 'spades' as const, x: '8%', y: '15%', rotate: -15, delay: 0.2 },
  { rank: 'K', suit: 'hearts' as const, x: '85%', y: '20%', rotate: 12, delay: 0.4 },
  { rank: 'Q', suit: 'diamonds' as const, x: '75%', y: '65%', rotate: -8, delay: 0.6 },
  { rank: '2', suit: 'spades' as const, x: '12%', y: '70%', rotate: 20, delay: 0.8 },
  { rank: 'J', suit: 'clubs' as const, x: '90%', y: '45%', rotate: -22, delay: 1.0 },
]

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        {/* Radial gradient center glow */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(45,122,90,0.15), rgba(10,22,16,0) 70%)',
          }}
        />
        {/* Gold accent glow */}
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(212,160,52,0.08), transparent 60%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(rgba(212,160,52,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,160,52,0.3) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating cards */}
      {floatingCards.map((card, i) => (
        <motion.div
          key={i}
          className="absolute hidden lg:block pointer-events-none"
          style={{ left: card.x, top: card.y }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 0.2,
            scale: 1,
            y: [0, -15, 0],
            rotate: [card.rotate, card.rotate + 3, card.rotate],
          }}
          transition={{
            opacity: { delay: card.delay, duration: 1 },
            scale: { delay: card.delay, duration: 0.8 },
            y: { delay: card.delay + 1, duration: 4, repeat: Infinity, ease: 'easeInOut' },
            rotate: { delay: card.delay + 1, duration: 5, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <PlayingCard rank={card.rank} suit={card.suit} small />
        </motion.div>
      ))}

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-20">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
          style={{
            background: 'rgba(212, 160, 52, 0.1)',
            border: '1px solid rgba(212, 160, 52, 0.25)',
          }}
        >
          <Sparkles size={14} className="text-[#f0c040]" />
          <span className="text-xs font-medium tracking-wider uppercase text-[#d4a034]">
            Le jeu de cartes vietnamien
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-6"
        >
          <span
            className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-none"
            style={{
              fontFamily: "'Cinzel', serif",
              background: 'linear-gradient(135deg, #f0c040 0%, #d4a034 40%, #8a6820 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 0 40px rgba(212,160,52,0.3))',
            }}
          >
            Tiến Lên
          </span>
          <span
            className="block text-lg sm:text-xl md:text-2xl mt-4 tracking-[0.15em] uppercase text-[#b8a88a]"
            style={{ fontFamily: "'Cinzel', serif" }}
          >
            Le Jeu des 13 Cartes
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-lg md:text-xl text-[#b8a88a] max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Débarrassez-vous de vos cartes avant vos adversaires dans ce classique vietnamien.
          Stratégie, bluff et adrénaline — en solo ou en multijoueur.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://le13-lac.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-10 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(212,160,52,0.4)] flex items-center gap-3"
            style={{
              background: 'linear-gradient(135deg, #d4a034, #8a6820)',
              color: '#0a1610',
            }}
          >
            Jouer gratuitement
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#how-to-play"
            className="px-10 py-4 rounded-xl text-lg font-medium transition-all duration-300 hover:bg-[rgba(212,160,52,0.1)]"
            style={{
              border: '1px solid rgba(212, 160, 52, 0.3)',
              color: '#d4a034',
            }}
          >
            Découvrir les règles
          </a>
        </motion.div>

        {/* Showcase cards row */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 flex items-end justify-center gap-[-8px]"
        >
          {[
            { rank: '3', suit: 'diamonds' as const },
            { rank: '3', suit: 'clubs' as const },
            { rank: '3', suit: 'hearts' as const },
            { rank: '3', suit: 'spades' as const },
            { rank: '2', suit: 'spades' as const },
          ].map((card, i) => (
            <motion.div
              key={i}
              className="relative"
              style={{
                marginLeft: i > 0 ? '-12px' : 0,
                zIndex: i,
              }}
              whileHover={{ y: -20, zIndex: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <PlayingCard rank={card.rank} suit={card.suit} delay={1.3 + i * 0.1} />
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-16 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-[#7a6e5a] tracking-wider uppercase">Défiler</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-[rgba(212,160,52,0.3)] flex items-start justify-center pt-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-[#d4a034]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
