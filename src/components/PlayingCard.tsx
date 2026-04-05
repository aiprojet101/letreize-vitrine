import { motion } from 'framer-motion'

const suits = {
  spades: { symbol: '♠', color: '#1a1a2e' },
  hearts: { symbol: '♥', color: '#d42b2b' },
  diamonds: { symbol: '♦', color: '#d42b2b' },
  clubs: { symbol: '♣', color: '#1a1a2e' },
}

type Suit = keyof typeof suits
type Rank = string

interface PlayingCardProps {
  rank: Rank
  suit: Suit
  faceDown?: boolean
  className?: string
  style?: React.CSSProperties
  delay?: number
  small?: boolean
}

export default function PlayingCard({ rank, suit, faceDown, className = '', style, delay = 0, small }: PlayingCardProps) {
  const s = suits[suit]
  const w = small ? 'w-16 h-24' : 'w-20 h-[120px]'

  if (faceDown) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 30, rotateY: 180 }}
        animate={{ opacity: 1, y: 0, rotateY: 0 }}
        transition={{ delay, duration: 0.5, type: 'spring', stiffness: 120 }}
        className={`${w} rounded-xl relative overflow-hidden shadow-lg ${className}`}
        style={{
          background: 'linear-gradient(145deg, #1a3a24, #0d2014)',
          border: '1.5px solid rgba(212, 160, 52, 0.4)',
          ...style,
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="text-2xl font-bold"
            style={{ fontFamily: "'Cinzel', serif", color: '#d4a034' }}
          >
            13
          </span>
        </div>
        <div
          className="absolute inset-[6px] rounded-lg border border-dashed"
          style={{ borderColor: 'rgba(212, 160, 52, 0.2)' }}
        />
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateY: 180 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ delay, duration: 0.5, type: 'spring', stiffness: 120 }}
      className={`${w} rounded-xl relative overflow-hidden shadow-lg ${className}`}
      style={{
        background: 'linear-gradient(145deg, #fffef5, #f0e8d8)',
        border: '1px solid rgba(0,0,0,0.1)',
        ...style,
      }}
    >
      <div className="absolute top-1.5 left-2 flex flex-col items-center leading-none">
        <span className="text-sm font-bold" style={{ color: s.color }}>{rank}</span>
        <span className="text-xs" style={{ color: s.color }}>{s.symbol}</span>
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-3xl" style={{ color: s.color }}>{s.symbol}</span>
      </div>
      <div className="absolute bottom-1.5 right-2 flex flex-col items-center leading-none rotate-180">
        <span className="text-sm font-bold" style={{ color: s.color }}>{rank}</span>
        <span className="text-xs" style={{ color: s.color }}>{s.symbol}</span>
      </div>
    </motion.div>
  )
}
