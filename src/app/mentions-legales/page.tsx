import React from "react";
import Link from "next/link";
import { Shield, FileText } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { PlaceholderNotice } from "@/components/ui/PlaceholderNotice";

export const metadata = {
  title: "Mentions Légales | ATHENA SECURITY SARL",
  description:
    "Mentions légales et informations réglementaires concernant la société de sécurité privée ATHENA SECURITY SARL à Ouagadougou.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="space-y-0">
      <section className="bg-navy-900 text-white py-12 border-b border-navy-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-800 text-blue-accent text-xs font-heading uppercase rounded-[2px]">
              <FileText className="w-3.5 h-3.5" />
              Information Réglementaire
            </div>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold uppercase text-white">
              Mentions Légales
            </h1>
            <p className="text-xs text-gray-300">
              Dernière mise à jour : Octobre 2026
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-xs sm:text-sm text-gray-700 leading-relaxed">
          <div className="p-6 bg-gray-50 border border-gray-200 rounded-[2px] space-y-4">
            <h2 className="font-heading text-lg uppercase text-navy-900 border-b border-gray-200 pb-2">
              1. Éditeur du Site Web
            </h2>
            <p>
              Le présent site internet est édité par la société <strong>{SITE_CONFIG.legalName}</strong>, Société à Responsabilité Limitée (SARL) de droit burkinabè, régie par la législation en vigueur relative aux entreprises privées de sûreté.
            </p>
            <ul className="space-y-1.5 text-xs text-gray-700">
              <li><strong>Nom commercial :</strong> ATHENA SECURITY SARL</li>
              <li><strong>Siège social :</strong> Somgandé, Ouagadougou, Burkina Faso</li>
              <li><strong>Agrément Ministériel :</strong> <PlaceholderNotice label="AGRÉMENT CLIENT" inline /></li>
              <li><strong>Registre du Commerce (RCCM) :</strong> <PlaceholderNotice label="RCCM CLIENT" inline /></li>
              <li><strong>IFU (Identifiant Fiscal Unique) :</strong> <PlaceholderNotice label="IFU CLIENT" inline /></li>
              <li><strong>Téléphones Infoline 24h/24 :</strong> {SITE_CONFIG.contact.phonePrimary} / {SITE_CONFIG.contact.phoneSecondary}</li>
              <li><strong>Email de contact :</strong> {SITE_CONFIG.contact.email}</li>
              <li><strong>Directeur de la Publication :</strong> Le Directeur Général d&apos;ATHENA SECURITY SARL</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-lg uppercase text-navy-900 border-b border-gray-200 pb-2">
              2. Hébergement du Site
            </h2>
            <p>
              Le site internet est hébergé sur des infrastructures sécurisées garantissant la disponibilité et la protection des données.
            </p>
            <p className="text-xs text-gray-600">
              Hébergeur : Vercel Inc. / Netlify Inc. (Plateforme Cloud sécurisée conforme ISO 27001).
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-lg uppercase text-navy-900 border-b border-gray-200 pb-2">
              3. Propriété Intellectuelle
            </h2>
            <p>
              L&apos;ensemble du contenu du site ATHENA SECURITY SARL (textes, éléments graphiques, logo officiel écusson, slogans, icônes, photographies et structures) est protégé par les lois internationales relatives à la propriété intellectuelle et aux droits d&apos;auteur.
            </p>
            <p>
              Toute reproduction, représentation, modification ou adaptation totale ou partielle sans l&apos;autorisation écrite préalable d&apos;ATHENA SECURITY SARL est strictement interdite.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="font-heading text-lg uppercase text-navy-900 border-b border-gray-200 pb-2">
              4. Limites de Responsabilité
            </h2>
            <p>
              ATHENA SECURITY SARL s&apos;efforce de fournir des informations aussi précises que possible sur son site vitrine. Toutefois, l&apos;entreprise ne pourra être tenue responsable des omissions, des inexactitudes ou des carences dans la mise à jour des contenus.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
