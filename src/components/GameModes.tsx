import { motion } from 'framer-motion'
import { User, Users, Swords, Trophy, Zap } from 'lucide-react'

const modes = [
  {
    icon: User,
    title: 'Solo',
    description: 'Affrontez des bots IA de difficulté croissante. Parfait pour apprendre et progresser à votre rythme.',
    tag: 'Entraînement',
    color: '#2d7a5a',
    features: ['3 niveaux de difficulté', 'Sauvegarde automatique', 'Pas de pression'],
  },
  {
    icon: Zap,
    title: 'Partie rapide',
    description: 'Une manche, un résultat. Idéal pour des sessions courtes et intenses entre deux pauses.',
    tag: 'Express',
    color: '#70b8e6',
    features: ['1 manche', 'Mise ELO', 'Résultat instantané'],
  },
  {
    icon: Swords,
    title: 'Classé',
    description: 'Grimpez les divisions de Bronze à Diamant. Chaque victoire compte, chaque défaite pèse.',
    tag: 'Compétitif',
    color: '#d4a034',
    features: ['Système ELO', '5 divisions', '3 paliers de mise'],
  },
  {
    icon: Trophy,
    title: 'Tournoi',
    description: 'Plusieurs manches, score cumulé. Le joueur avec le moins de points à la fin remporte la mise ×4.',
    tag: 'Prestige',
    color: '#f0c040',
    features: ['Multi-manches', 'Score cumulé', 'Gains ×4'],
  },
  {
    icon: Users,
    title: 'Salon privé',
    description: 'Créez votre table, invitez vos amis par lien. Choisissez les règles, la durée et le mode.',
    tag: 'Entre amis',
    color: '#c23b3b',
    features: ['Code de salle', 'Invitation par lien', 'Règles personnalisées'],
  },
]

export default function GameModes() {
  return (
    <section id="game-modes" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(45,122,90,0.06), transparent 60%)',
          filter: 'blur(100px)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 lg:px-12 xl:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm tracking-[0.3em] uppercase text-[#d4a034] mb-4 block">
            Pour tous les styles
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
            Modes de jeu
          </h2>
          <p className="mt-4 text-lg text-[#7a6e5a] max-w-xl mx-auto">
            Du casual au compétitif, trouvez votre terrain de jeu.
          </p>
        </motion.div>

        {/* Modes grid — top row 3, bottom row 2 centered */}
        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {modes.slice(0, 3).map((mode, i) => (
            <ModeCard key={i} mode={mode} index={i} />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {modes.slice(3).map((mode, i) => (
            <ModeCard key={i + 3} mode={mode} index={i + 3} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ModeCard({ mode, index }: { mode: typeof modes[0]; index: number }) {
  const Icon = mode.icon
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      className="group relative rounded-2xl p-8 transition-all duration-500 hover:translate-y-[-6px] flex flex-col"
      style={{
        background: 'rgba(18, 35, 24, 0.4)',
        border: '1px solid rgba(212, 160, 52, 0.08)',
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Hover border effect */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ border: `1px solid ${mode.color}40` }}
      />

      {/* Tag */}
      <span
        className="inline-block self-start text-[10px] tracking-[0.2em] uppercase font-semibold px-3 py-1 rounded-full mb-6"
        style={{
          background: `${mode.color}15`,
          color: mode.color,
          border: `1px solid ${mode.color}25`,
        }}
      >
        {mode.tag}
      </span>

      {/* Icon + Title */}
      <div className="flex items-center gap-4 mb-4">
        <div
          className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:shadow-[0_0_20px_var(--glow)]"
          style={{
            background: `${mode.color}15`,
            border: `1px solid ${mode.color}30`,
            '--glow': `${mode.color}30`,
          } as React.CSSProperties}
        >
          <Icon size={20} style={{ color: mode.color }} />
        </div>
        <h3
          className="text-xl font-bold text-[#f0e6d2]"
          style={{ fontFamily: "'Cinzel', serif" }}
        >
          {mode.title}
        </h3>
      </div>

      <p className="text-[#b8a88a] leading-relaxed mb-6 flex-1">
        {mode.description}
      </p>

      {/* Features */}
      <div className="flex flex-wrap gap-2">
        {mode.features.map((feat) => (
          <span
            key={feat}
            className="text-xs px-3 py-1.5 rounded-lg text-[#7a6e5a]"
            style={{
              background: 'rgba(18, 35, 24, 0.8)',
              border: '1px solid rgba(212, 160, 52, 0.08)',
            }}
          >
            {feat}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
