import { motion } from 'framer-motion'
import { Play, MonitorPlay } from 'lucide-react'

export default function VideoSection() {
  return (
    <section id="video" className="relative py-40 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px]"
        style={{
          background: 'radial-gradient(ellipse, rgba(212,160,52,0.06), transparent 60%)',
          filter: 'blur(80px)',
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-[#d4a034] mb-4 block">
            Apprenez en 2 minutes
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
            Voir le jeu en action
          </h2>
          <p className="mt-4 text-lg text-[#7a6e5a] max-w-xl mx-auto">
            Découvrez une partie complète commentée, des règles de base aux stratégies avancées.
          </p>
        </motion.div>

        {/* Video placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="relative group cursor-pointer"
        >
          {/* Video container */}
          <div
            className="relative aspect-video rounded-2xl overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, rgba(18,35,24,0.8), rgba(10,22,16,0.95))',
              border: '1px solid rgba(212, 160, 52, 0.15)',
              boxShadow: '0 0 60px rgba(0,0,0,0.5), 0 0 120px rgba(212,160,52,0.05)',
            }}
          >
            {/* Inner visual: simulated game table */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="absolute inset-8 rounded-xl"
                style={{
                  background: 'radial-gradient(ellipse at center, rgba(45,122,90,0.15), rgba(10,22,16,0) 70%)',
                }}
              />

              {/* Card fan decoration */}
              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex">
                {['-20deg', '-10deg', '0deg', '10deg', '20deg'].map((rot, i) => (
                  <div
                    key={i}
                    className="w-14 h-20 rounded-lg relative"
                    style={{
                      background: 'linear-gradient(145deg, #1a3a24, #0d2014)',
                      border: '1px solid rgba(212,160,52,0.3)',
                      transform: `rotate(${rot}) translateY(${Math.abs(i - 2) * 6}px)`,
                      marginLeft: i > 0 ? '-20px' : 0,
                      zIndex: i,
                    }}
                  >
                    <span
                      className="absolute inset-0 flex items-center justify-center text-sm font-bold"
                      style={{ fontFamily: "'Cinzel', serif", color: '#d4a034' }}
                    >
                      13
                    </span>
                  </div>
                ))}
              </div>

              {/* Monitor icon top */}
              <div className="absolute top-8 left-8 flex items-center gap-2 opacity-40">
                <MonitorPlay size={16} className="text-[#d4a034]" />
                <span className="text-xs text-[#7a6e5a] tracking-wider uppercase">Tutoriel</span>
              </div>

              {/* Duration */}
              <div className="absolute top-8 right-8 opacity-40">
                <span className="text-xs text-[#7a6e5a] tracking-wider">2:30</span>
              </div>
            </div>

            {/* Play button */}
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_40px_rgba(212,160,52,0.4)]"
                style={{
                  background: 'linear-gradient(135deg, #d4a034, #8a6820)',
                  boxShadow: '0 0 30px rgba(212,160,52,0.2)',
                }}
              >
                <Play size={32} fill="#0a1610" color="#0a1610" className="ml-1" />
              </motion.div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
          </div>

          {/* Decorative border glow */}
          <div
            className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
            style={{
              background: 'linear-gradient(135deg, rgba(212,160,52,0.3), rgba(45,122,90,0.2), rgba(212,160,52,0.3))',
              filter: 'blur(8px)',
            }}
          />
        </motion.div>

        {/* Caption */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-6 text-sm text-[#7a6e5a]"
        >
          Vidéo à venir — Partie commentée avec règles et stratégies
        </motion.p>
      </div>
    </section>
  )
}
