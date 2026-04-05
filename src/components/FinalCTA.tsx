import { motion } from 'framer-motion'
import { ArrowRight, Zap } from 'lucide-react'
import PlayingCard from './PlayingCard'

export default function FinalCTA() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(212,160,52,0.08), transparent)',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl p-8 md:p-16 text-center overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(18,35,24,0.8), rgba(13,31,22,0.9))',
            border: '1px solid rgba(212, 160, 52, 0.2)',
            boxShadow: '0 0 80px rgba(0,0,0,0.3), inset 0 0 80px rgba(212,160,52,0.03)',
          }}
        >
          {/* Decorative cards */}
          <div className="absolute top-6 left-6 opacity-15 rotate-[-12deg] hidden md:block">
            <PlayingCard rank="A" suit="spades" small delay={0} />
          </div>
          <div className="absolute bottom-6 right-6 opacity-15 rotate-[15deg] hidden md:block">
            <PlayingCard rank="2" suit="hearts" small delay={0} />
          </div>
          <div className="absolute top-8 right-16 opacity-10 rotate-[8deg] hidden lg:block">
            <PlayingCard rank="K" suit="diamonds" small delay={0} />
          </div>
          <div className="absolute bottom-8 left-16 opacity-10 rotate-[-20deg] hidden lg:block">
            <PlayingCard rank="Q" suit="clubs" small delay={0} />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8"
              style={{
                background: 'rgba(212, 160, 52, 0.1)',
                border: '1px solid rgba(212, 160, 52, 0.2)',
              }}
            >
              <Zap size={14} className="text-[#f0c040]" />
              <span className="text-xs font-medium tracking-wider uppercase text-[#d4a034]">
                Gratuit — Aucune inscription requise pour commencer
              </span>
            </motion.div>

            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              style={{
                fontFamily: "'Cinzel', serif",
                background: 'linear-gradient(135deg, #f0c040 0%, #d4a034 50%, #f0c040 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Prêt à jouer ?
            </h2>

            <p className="text-lg md:text-xl text-[#b8a88a] max-w-xl mx-auto mb-10 leading-relaxed">
              Rejoignez la table, montrez votre stratégie et grimpez dans le classement.
              Votre première partie vous attend.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://le13-lac.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-12 py-5 rounded-xl text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_50px_rgba(212,160,52,0.5)] flex items-center gap-3"
                style={{
                  background: 'linear-gradient(135deg, #f0c040, #d4a034, #8a6820)',
                  color: '#0a1610',
                }}
              >
                Commencer maintenant
                <ArrowRight size={22} className="transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <p className="mt-6 text-sm text-[#7a6e5a]">
              Pas de téléchargement. Jouez directement dans votre navigateur.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
