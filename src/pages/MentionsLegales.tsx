import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function MentionsLegales() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="min-h-screen bg-[#0a1610] text-[#f0e6d2]">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-[#7a6e5a] hover:text-[#d4a034] transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Retour à l'accueil
        </Link>

        <h1
          className="text-4xl font-bold mb-2"
          style={{
            fontFamily: "'Cinzel', serif",
            background: 'linear-gradient(135deg, #f0c040, #d4a034)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Mentions Légales
        </h1>
        <p className="text-sm text-[#7a6e5a] mb-12">Dernière mise à jour : 6 avril 2026</p>

        <div className="space-y-10 text-[#b8a88a] text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-[#f0e6d2] mb-3">1. Éditeur du site</h2>
            <p>
              Le site <strong className="text-[#d4a034]">letreize.fr</strong> est édité par :
            </p>
            <ul className="mt-3 space-y-1 ml-4 list-disc">
              <li>Nom : David Pélerin</li>
              <li>Statut : Personne physique</li>
              <li>Email : <a href="mailto:contact@letreize.fr" className="text-[#d4a034] hover:underline">contact@letreize.fr</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f0e6d2] mb-3">2. Directeur de la publication</h2>
            <p>David Pélerin</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f0e6d2] mb-3">3. Hébergement</h2>
            <p>Le site est hébergé par :</p>
            <ul className="mt-3 space-y-1 ml-4 list-disc">
              <li>Vercel Inc.</li>
              <li>440 N Baxter St, Los Angeles, CA 90004, États-Unis</li>
              <li>Site : vercel.com</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f0e6d2] mb-3">4. Propriété intellectuelle</h2>
            <p>
              L'ensemble du contenu de ce site (textes, images, graphismes, logo, icônes, code source)
              est la propriété exclusive de l'éditeur ou de ses partenaires. Toute reproduction, distribution,
              modification, adaptation, retransmission ou publication est strictement interdite sans
              l'accord écrit préalable de l'éditeur.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f0e6d2] mb-3">5. Données personnelles</h2>
            <p>
              Les informations relatives au traitement des données personnelles sont détaillées dans notre{' '}
              <Link to="/confidentialite" className="text-[#d4a034] hover:underline">
                Politique de Confidentialité
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f0e6d2] mb-3">6. Cookies</h2>
            <p>
              Le site utilise des cookies techniques nécessaires à son fonctionnement et, sous réserve de
              votre consentement, des cookies analytiques pour mesurer l'audience. Vous pouvez gérer vos
              préférences à tout moment via la bannière de cookies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f0e6d2] mb-3">7. Limitation de responsabilité</h2>
            <p>
              L'éditeur s'efforce de fournir des informations aussi précises que possible. Toutefois, il ne
              pourra être tenu responsable des omissions, des inexactitudes ou des carences dans la mise à
              jour. L'éditeur décline toute responsabilité en cas de problèmes techniques rencontrés par
              l'utilisateur.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f0e6d2] mb-3">8. Droit applicable</h2>
            <p>
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les
              tribunaux français seront seuls compétents.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
