import React from "react";
import { Shield, Lock } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";

export const metadata = {
  title: "Politique de Confidentialité | ATHENA SECURITY SARL",
  description:
    "Politique de protection des données personnelles et d'utilisation respectueuse de la vie privée d'ATHENA SECURITY SARL.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="space-y-0">
      <section className="bg-navy-900 text-white py-12 border-b border-navy-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-800 text-blue-accent text-xs font-heading uppercase rounded-[2px]">
              <Lock className="w-3.5 h-3.5" />
              Protection des Données
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold uppercase text-white">
              Politique de Confidentialité
            </h1>
            <p className="text-xs text-gray-300">
              Engagement de discrétion et de protection des données
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-xs sm:text-sm text-gray-700 leading-relaxed">
          <div className="p-6 bg-gray-50 border border-gray-200 rounded-[2px] space-y-4">
            <h2 className="font-heading text-lg uppercase text-navy-900 border-b border-gray-200 pb-2">
              1. Engagement d&apos;ATHENA SECURITY SARL
            </h2>
            <p>
              En tant qu&apos;entreprise de sûreté et de sécurité privée, la discrétion et la confidentialité absolue sont au cœur des valeurs d&apos;ATHENA SECURITY SARL. Nous nous engageons à protéger scrupuleusement la confidentialité des données personnelles transmises via notre site internet.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-lg uppercase text-navy-900 border-b border-gray-200 pb-2">
              2. Collecte des Données via le Formulaire de Devis
            </h2>
            <p>
              Les seules données personnelles collectées sur ce site sont celles que vous nous fournissez volontairement lors de la soumission d&apos;une demande de devis ou de contact (Nom, entreprise, téléphone, e-mail, ville et précisions sur la mission).
            </p>
            <p>
              Ces informations sont exclusivement destinées au service commercial et opérationnel d&apos;ATHENA SECURITY SARL aux fins d&apos;établir votre cotation et de vous recontacter.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-lg uppercase text-navy-900 border-b border-gray-200 pb-2">
              3. Absence de Traçage Intrusif & Respect du Chargement de la Carte
            </h2>
            <p>
              Notre site vitrine n&apos;utilise aucun traqueur publicitaire ni cookie tiers intrusif. La carte interactive OpenStreetMap est chargée <strong>uniquement à votre demande expresse</strong> (au clic) afin qu&apos;aucune connexion externe ne soit établie à votre insu.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-lg uppercase text-navy-900 border-b border-gray-200 pb-2">
              4. Vos Droits
            </h2>
            <p>
              Conformément aux réglementations sur la protection des données, vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de vos données personnelles. Pour exercer ce droit, adressez un message à : <strong>{SITE_CONFIG.contact.email}</strong>.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
