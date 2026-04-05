import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function Confidentialite() {
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
          Politique de Confidentialité
        </h1>
        <p className="text-sm text-[#7a6e5a] mb-12">Dernière mise à jour : 6 avril 2026</p>

        <div className="space-y-10 text-[#b8a88a] text-sm leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-[#f0e6d2] mb-3">1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des données collectées sur{' '}
              <strong className="text-[#d4a034]">letreize.fr</strong> et l'application Le Treize est :
            </p>
            <ul className="mt-3 space-y-1 ml-4 list-disc">
              <li>David Pélerin</li>
              <li>Email : <a href="mailto:contact@letreize.fr" className="text-[#d4a034] hover:underline">contact@letreize.fr</a></li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f0e6d2] mb-3">2. Données collectées</h2>
            <p>Nous collectons les données suivantes :</p>
            <ul className="mt-3 space-y-2 ml-4 list-disc">
              <li>
                <strong className="text-[#f0e6d2]">Données de compte</strong> : pseudo, adresse email
                (lors de l'inscription sur l'application de jeu)
              </li>
              <li>
                <strong className="text-[#f0e6d2]">Données de jeu</strong> : statistiques de parties,
                classement, progression
              </li>
              <li>
                <strong className="text-[#f0e6d2]">Données techniques</strong> : adresse IP, type de
                navigateur, pages visitées, durée de visite (via cookies analytiques, sous réserve de consentement)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f0e6d2] mb-3">3. Finalités du traitement</h2>
            <p>Vos données sont traitées pour :</p>
            <ul className="mt-3 space-y-1 ml-4 list-disc">
              <li>Assurer le fonctionnement de l'application de jeu</li>
              <li>Gérer votre compte joueur et vos statistiques</li>
              <li>Améliorer l'expérience utilisateur</li>
              <li>Mesurer l'audience du site (avec votre consentement)</li>
              <li>Assurer la sécurité et prévenir la fraude</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f0e6d2] mb-3">4. Base légale</h2>
            <p>Le traitement de vos données repose sur :</p>
            <ul className="mt-3 space-y-1 ml-4 list-disc">
              <li><strong className="text-[#f0e6d2]">L'exécution du contrat</strong> : pour la fourniture du service de jeu</li>
              <li><strong className="text-[#f0e6d2]">Le consentement</strong> : pour les cookies analytiques et les communications marketing</li>
              <li><strong className="text-[#f0e6d2]">L'intérêt légitime</strong> : pour la sécurité et l'amélioration du service</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f0e6d2] mb-3">5. Cookies</h2>
            <p>Le site utilise les types de cookies suivants :</p>
            <div className="mt-4 space-y-4">
              <div
                className="p-4 rounded-lg"
                style={{ background: 'rgba(18, 35, 24, 0.7)', border: '1px solid rgba(45, 122, 90, 0.2)' }}
              >
                <h3 className="text-[#f0e6d2] font-medium mb-1">Cookies strictement nécessaires</h3>
                <p>Indispensables au fonctionnement du site. Ne peuvent pas être désactivés.</p>
              </div>
              <div
                className="p-4 rounded-lg"
                style={{ background: 'rgba(18, 35, 24, 0.7)', border: '1px solid rgba(45, 122, 90, 0.2)' }}
              >
                <h3 className="text-[#f0e6d2] font-medium mb-1">Cookies analytiques</h3>
                <p>
                  Permettent de mesurer l'audience et d'analyser la navigation. Activés uniquement
                  avec votre consentement.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f0e6d2] mb-3">6. Durée de conservation</h2>
            <ul className="space-y-1 ml-4 list-disc">
              <li>Données de compte : conservées tant que le compte est actif, puis 1 an après suppression</li>
              <li>Données de jeu : conservées tant que le compte est actif</li>
              <li>Cookies analytiques : 13 mois maximum</li>
              <li>Logs techniques : 12 mois</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f0e6d2] mb-3">7. Partage des données</h2>
            <p>
              Vos données ne sont ni vendues ni cédées à des tiers. Elles peuvent être partagées avec :
            </p>
            <ul className="mt-3 space-y-1 ml-4 list-disc">
              <li><strong className="text-[#f0e6d2]">Vercel</strong> : hébergement du site et de l'application</li>
              <li><strong className="text-[#f0e6d2]">Supabase</strong> : base de données et authentification</li>
            </ul>
            <p className="mt-3">
              Ces prestataires sont soumis à des obligations de confidentialité et ne traitent vos
              données que pour notre compte.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f0e6d2] mb-3">8. Vos droits (RGPD)</h2>
            <p>Conformément au RGPD, vous disposez des droits suivants :</p>
            <ul className="mt-3 space-y-1 ml-4 list-disc">
              <li><strong className="text-[#f0e6d2]">Droit d'accès</strong> : obtenir une copie de vos données</li>
              <li><strong className="text-[#f0e6d2]">Droit de rectification</strong> : corriger vos données inexactes</li>
              <li><strong className="text-[#f0e6d2]">Droit à l'effacement</strong> : demander la suppression de vos données</li>
              <li><strong className="text-[#f0e6d2]">Droit à la portabilité</strong> : recevoir vos données dans un format structuré</li>
              <li><strong className="text-[#f0e6d2]">Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
              <li><strong className="text-[#f0e6d2]">Droit de limitation</strong> : limiter le traitement de vos données</li>
            </ul>
            <p className="mt-4">
              Pour exercer ces droits, contactez-nous à{' '}
              <a href="mailto:contact@letreize.fr" className="text-[#d4a034] hover:underline">
                contact@letreize.fr
              </a>.
            </p>
            <p className="mt-2">
              Vous pouvez également introduire une réclamation auprès de la{' '}
              <strong className="text-[#f0e6d2]">CNIL</strong> (Commission Nationale de l'Informatique et des Libertés).
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f0e6d2] mb-3">9. Sécurité</h2>
            <p>
              Nous mettons en place des mesures techniques et organisationnelles appropriées pour
              protéger vos données contre tout accès non autorisé, perte ou altération. Les connexions
              au site sont sécurisées par HTTPS.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f0e6d2] mb-3">10. Modifications</h2>
            <p>
              Nous nous réservons le droit de modifier cette politique à tout moment. Les modifications
              prennent effet dès leur publication sur cette page. Nous vous encourageons à consulter
              régulièrement cette page.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-[#f0e6d2] mb-3">11. Contact</h2>
            <p>
              Pour toute question relative à cette politique, contactez-nous à{' '}
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
