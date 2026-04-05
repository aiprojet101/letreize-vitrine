import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cookie, X } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent')
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const accept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setVisible(false)
  }

  const refuse = () => {
    localStorage.setItem('cookie-consent', 'refused')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div
            className="max-w-4xl mx-auto rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-5"
            style={{
              background: 'rgba(13, 31, 22, 0.97)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(212, 160, 52, 0.2)',
              boxShadow: '0 -4px 40px rgba(0, 0, 0, 0.5)',
            }}
          >
            <button
              onClick={refuse}
              className="absolute top-3 right-3 text-[#7a6e5a] hover:text-[#d4a034] transition-colors md:hidden"
            >
              <X size={18} />
            </button>

            <div className="flex items-start gap-4 flex-1">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                style={{
                  background: 'rgba(212, 160, 52, 0.1)',
                  border: '1px solid rgba(212, 160, 52, 0.25)',
                }}
              >
                <Cookie size={20} className="text-[#d4a034]" />
              </div>
              <div>
                <h3 className="text-[#f0e6d2] font-semibold text-sm mb-1">
                  Ce site utilise des cookies
                </h3>
                <p className="text-[#7a6e5a] text-xs leading-relaxed">
                  Nous utilisons des cookies essentiels pour le fonctionnement du site et, avec votre
                  accord, des cookies analytiques pour améliorer votre expérience.{' '}
                  <Link
                    to="/confidentialite"
                    className="text-[#d4a034] hover:underline"
                  >
                    En savoir plus
                  </Link>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 w-full md:w-auto">
              <button
                onClick={refuse}
                className="flex-1 md:flex-none px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-[rgba(212,160,52,0.1)]"
                style={{
                  border: '1px solid rgba(212, 160, 52, 0.3)',
                  color: '#d4a034',
                }}
              >
                Refuser
              </button>
              <button
                onClick={accept}
                className="flex-1 md:flex-none px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(212,160,52,0.3)]"
                style={{
                  background: 'linear-gradient(135deg, #d4a034, #8a6820)',
                  color: '#0a1610',
                }}
              >
                Accepter
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
