import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function CGU() {
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
          Conditions Générales d'Utilisation
        </h1>
        <p className="text-sm text-[#7a6e5a] mb-12">Dernière mise à jour : 6 avril 2026</p>

        <div className="space-y-10 text-[#b8a88a] text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-[#f0e6d2] mb-3">1. Objet</h2>
            <p>
              Les présentes Conditions Générales d'Utilisation (ci-après « CGU ») ont pour objet de
              définir les conditions d'accès et d'utilisation du site{' '}
              <strong className="text-[#d4a034]">letreize.fr</strong> et de l'application de jeu
              Le Treize (Tiến Lên).
            </p>
            <p className="mt-2">
              En accédant au site ou en utilisant l'application, vous acceptez sans réserve les
              présentes CGU.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f0e6d2] mb-3">2. Description du service</h2>
            <p>
              Le Treize est un jeu de cartes en ligne gratuit basé sur le Tiến Lên (jeu des 13 cartes),
              un jeu de cartes traditionnel vietnamien. Le service propose :
            </p>
            <ul className="mt-3 space-y-1 ml-4 list-disc">
              <li>Un mode solo contre l'intelligence artificielle</li>
              <li>Un mode multijoueur en ligne</li>
              <li>Un système de classement et de statistiques</li>
              <li>Des salons privés pour jouer entre amis</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f0e6d2] mb-3">3. Accès au service</h2>
            <p>
              L'accès au site vitrine est libre et gratuit. L'utilisation de l'application de jeu peut
              nécessiter la création d'un compte utilisateur. Le service est accessible depuis tout
              navigateur web moderne.
            </p>
            <p className="mt-2">
              L'éditeur se réserve le droit de suspendre ou d'interrompre l'accès au service pour
              maintenance ou mise à jour, sans préavis ni indemnité.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f0e6d2] mb-3">4. Inscription et compte</h2>
            <p>
              L'inscription est gratuite. L'utilisateur s'engage à fournir des informations exactes
              et à maintenir la confidentialité de ses identifiants de connexion. Tout usage du compte
              est sous la responsabilité de l'utilisateur.
            </p>
            <p className="mt-2">
              L'éditeur se réserve le droit de supprimer tout compte en cas de violation des présentes
              CGU.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f0e6d2] mb-3">5. Comportement des utilisateurs</h2>
            <p>L'utilisateur s'engage à :</p>
            <ul className="mt-3 space-y-1 ml-4 list-disc">
              <li>Respecter les autres joueurs et maintenir un comportement fair-play</li>
              <li>Ne pas utiliser de logiciels tiers, bots ou scripts automatisés</li>
              <li>Ne pas tenter de tricher ou d'exploiter des failles du jeu</li>
              <li>Ne pas diffuser de contenu offensant, discriminatoire ou illégal</li>
              <li>Ne pas perturber le fonctionnement du service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f0e6d2] mb-3">6. Propriété intellectuelle</h2>
            <p>
              L'ensemble des éléments du site et de l'application (code, design, graphismes, logos,
              textes) est protégé par le droit de la propriété intellectuelle. Toute reproduction ou
              utilisation non autorisée est interdite.
            </p>
            <p className="mt-2">
              Le jeu Tiến Lên est un jeu traditionnel du domaine public. Les règles du jeu ne font
              l'objet d'aucune propriété intellectuelle.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f0e6d2] mb-3">7. Gratuité</h2>
            <p>
              Le service est entièrement gratuit. Aucun achat intégré n'est proposé. L'éditeur se
              réserve le droit d'introduire des fonctionnalités payantes à l'avenir, qui feront l'objet
              d'une information préalable.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f0e6d2] mb-3">8. Responsabilité</h2>
            <p>
              L'éditeur ne saurait être tenu responsable des dommages directs ou indirects résultant
              de l'utilisation du service, notamment :
            </p>
            <ul className="mt-3 space-y-1 ml-4 list-disc">
              <li>Interruptions ou dysfonctionnements du service</li>
              <li>Perte de données ou de progression de jeu</li>
              <li>Comportement d'autres utilisateurs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f0e6d2] mb-3">9. Données personnelles</h2>
            <p>
              Le traitement des données personnelles est décrit dans notre{' '}
              <Link to="/confidentialite" className="text-[#d4a034] hover:underline">
                Politique de Confidentialité
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f0e6d2] mb-3">10. Modification des CGU</h2>
            <p>
              L'éditeur se réserve le droit de modifier les présentes CGU à tout moment. Les
              modifications entrent en vigueur dès leur publication. L'utilisation continue du service
              après modification vaut acceptation des nouvelles CGU.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f0e6d2] mb-3">11. Droit applicable</h2>
            <p>
              Les présentes CGU sont soumises au droit français. Tout litige relatif à leur
              interprétation ou exécution relève de la compétence des tribunaux français.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f0e6d2] mb-3">12. Contact</h2>
            <p>
              Pour toute question, contactez-nous à{' '}
              <a href="mailto:contact@letreize.fr" className="text-[#d4a034] hover:underline">
                contact@letreize.fr
              </a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
