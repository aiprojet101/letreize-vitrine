import { motion } from 'framer-motion'
import {
  Target,
  BarChart3,
  Users,
  Smartphone,
  Shield,
  Sparkles,
  GripVertical,
  Bell,
  Award,
} from 'lucide-react'

const features = [
  {
    icon: BarChart3,
    title: 'Classement ELO',
    description: 'Système de classement compétitif avec 5 divisions : Bronze, Argent, Or, Platine et Diamant.',
  },
  {
    icon: Target,
    title: 'Missions quotidiennes',
    description: 'Complétez des défis journaliers et hebdomadaires pour gagner des récompenses et de l\'XP.',
  },
  {
    icon: Users,
    title: 'Social & Invitations',
    description: 'Recherchez des joueurs, partagez des invitations via WhatsApp, Telegram ou par lien direct.',
  },
  {
    icon: GripVertical,
    title: 'Drag & Drop',
    description: 'Réorganisez vos cartes en main par glisser-déposer pour optimiser votre stratégie.',
  },
  {
    icon: Bell,
    title: 'Notifications',
    description: 'Restez informé de vos changements de division, invitations et résultats de parties.',
  },
  {
    icon: Award,
    title: 'Succès & Trophées',
    description: 'Débloquez des succès uniques en atteignant des objectifs de jeu spéciaux.',
  },
  {
    icon: Smartphone,
    title: '100% Mobile',
    description: 'Interface optimisée pour le mobile. Jouez n\'importe où, n\'importe quand.',
  },
  {
    icon: Shield,
    title: 'Fair Play',
    description: 'Système anti-triche intégré. Aucun avantage injuste, que du skill.',
  },
  {
    icon: Sparkles,
    title: 'Animations premium',
    description: 'Distribution des cartes, effets de victoire, transitions fluides — une expérience visuelle soignée.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-40 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, rgba(10,22,16,0), rgba(13,31,22,0.5), rgba(10,22,16,0))',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-[#d4a034] mb-4 block">
            Tout est inclus
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
            Fonctionnalités
          </h2>
          <p className="mt-4 text-lg text-[#7a6e5a] max-w-xl mx-auto">
            Une expérience de jeu complète, pensée pour les joueurs exigeants.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group relative rounded-xl p-6 transition-all duration-400 hover:translate-y-[-3px]"
                style={{
                  background: 'rgba(18, 35, 24, 0.3)',
                  border: '1px solid rgba(212, 160, 52, 0.06)',
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    border: '1px solid rgba(212, 160, 52, 0.15)',
                    boxShadow: 'inset 0 0 30px rgba(212,160,52,0.03)',
                  }}
                />

                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(212,160,52,0.2)]"
                    style={{
                      background: 'rgba(212, 160, 52, 0.1)',
                      border: '1px solid rgba(212, 160, 52, 0.15)',
                    }}
                  >
                    <Icon size={18} className="text-[#d4a034]" />
                  </div>
                  <h3 className="text-base font-semibold text-[#f0e6d2] mb-2">{feature.title}</h3>
                  <p className="text-sm text-[#7a6e5a] leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
