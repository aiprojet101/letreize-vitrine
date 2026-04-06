import { motion } from 'framer-motion'
import { Star, Quote, TrendingUp } from 'lucide-react'

const stats = [
  { value: '13', label: 'cartes en main', suffix: '' },
  { value: '5', label: 'modes de jeu', suffix: '' },
  { value: '52', label: 'cartes par partie', suffix: '' },
  { value: '∞', label: 'parties possibles', suffix: '' },
]

const testimonials = [
  {
    name: 'Minh T.',
    division: 'Diamant',
    avatar: '💎',
    text: 'Le meilleur Tiến Lên en ligne que j\'ai trouvé. L\'interface est magnifique et le matchmaking est rapide.',
    stars: 5,
  },
  {
    name: 'Sarah L.',
    division: 'Or',
    avatar: '🥇',
    text: 'J\'ai appris à jouer grâce au mode solo. Maintenant je bats mes amis en salon privé !',
    stars: 5,
  },
  {
    name: 'Kevin P.',
    division: 'Platine',
    avatar: '⚡',
    text: 'Le système de classement est addictif. Chaque partie classée me pousse à progresser.',
    stars: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 xl:px-16">
        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20 md:mb-28"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-8 rounded-2xl"
              style={{
                background: 'rgba(18, 35, 24, 0.4)',
                border: '1px solid rgba(212, 160, 52, 0.1)',
              }}
            >
              <div
                className="text-5xl md:text-6xl font-bold mb-2"
                style={{
                  fontFamily: "'Cinzel', serif",
                  background: 'linear-gradient(135deg, #f0c040, #d4a034)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                {stat.value}{stat.suffix}
              </div>
              <div className="text-sm text-[#7a6e5a] uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-[#d4a034] mb-4 block">
            La communauté parle
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold"
            style={{
              fontFamily: "'Cinzel', serif",
              background: 'linear-gradient(135deg, #f0e6d2, #b8a88a)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Ils jouent, ils adorent
          </h2>
        </motion.div>

        {/* Testimonial cards */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative rounded-2xl p-8 flex flex-col"
              style={{
                background: 'rgba(18, 35, 24, 0.5)',
                border: '1px solid rgba(212, 160, 52, 0.1)',
                backdropFilter: 'blur(10px)',
              }}
            >
              {/* Quote icon */}
              <Quote size={32} className="text-[#d4a034] opacity-20 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={14} fill="#d4a034" color="#d4a034" />
                ))}
              </div>

              {/* Text */}
              <p className="text-[#b8a88a] leading-relaxed flex-1 mb-6 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-[rgba(212,160,52,0.1)]">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-lg"
                  style={{
                    background: 'rgba(212, 160, 52, 0.1)',
                    border: '1px solid rgba(212, 160, 52, 0.2)',
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm text-[#f0e6d2]">{t.name}</div>
                  <div className="flex items-center gap-1.5">
                    <TrendingUp size={12} className="text-[#d4a034]" />
                    <span className="text-xs text-[#7a6e5a]">Division {t.division}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
