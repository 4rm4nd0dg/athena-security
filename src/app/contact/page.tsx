import React from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { DevisForm } from "@/components/forms/DevisForm";
import { OpenStreetMap } from "@/components/ui/OpenStreetMap";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";

export const metadata = {
  title: "Contact & Demande de Devis | ATHENA SECURITY SARL",
  description:
    "Contactez ATHENA SECURITY SARL à Ouagadougou. Infoline 24h/24 (+226 76 00 65 03 / +226 70 69 46 55), email athenasecurit@gmail.com et demande de devis en ligne.",
};

export default function ContactPage() {
  return (
    <div className="space-y-0">
      {/* Header Banner */}
      <section className="bg-navy-900 text-white py-16 border-b border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-800 text-blue-accent text-xs font-heading tracking-widest uppercase rounded-[2px]">
              <Phone className="w-3.5 h-3.5" />
              Service Commercial & Permanence 24h/24
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white">
              Contact & Demande de Devis
            </h1>
            <p className="text-base text-gray-300 leading-relaxed">
              Une question, une alerte d&apos;urgence ou un besoin d&apos;évaluation de sécurité ? Nos équipes sont joignables 24h/24 et 7j/7.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Direct Contact Channels & Form */}
      <section className="bg-white py-16 sm:py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Infoline & Channels */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <h2 className="font-heading text-2xl font-bold uppercase text-navy-900 border-b border-gray-200 pb-2">
                  Nos Lignes Directes
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  Pour les situations d&apos;urgence ou les demandes d&apos;intervention rapide, nous vous recommandons un contact direct par téléphone.
                </p>
              </div>

              {/* Phone Infoline Box */}
              <div className="p-6 bg-navy-900 text-white border-l-4 border-blue-accent rounded-[2px] space-y-4 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-navy-800 text-blue-accent rounded-[2px]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-heading uppercase text-blue-accent block font-bold">
                      INFOLINE PERMANENTE 24H/24
                    </span>
                    <span className="text-xs text-gray-300">Appels direct & urgences</span>
                  </div>
                </div>

                <div className="space-y-2 pt-2 border-t border-navy-700">
                  <a
                    href={`tel:${SITE_CONFIG.contact.phonePrimaryRaw}`}
                    className="block text-xl font-heading font-bold text-white hover:text-blue-accent transition-colors"
                  >
                    {SITE_CONFIG.contact.phonePrimary}
                  </a>
                  <a
                    href={`tel:${SITE_CONFIG.contact.phoneSecondaryRaw}`}
                    className="block text-xl font-heading font-bold text-white hover:text-blue-accent transition-colors"
                  >
                    {SITE_CONFIG.contact.phoneSecondary}
                  </a>
                </div>
              </div>

              {/* WhatsApp Direct Chat Box */}
              <div className="p-6 bg-emerald-900/90 text-white border-l-4 border-emerald-500 rounded-[2px] space-y-3 shadow-md">
                <div className="flex items-center gap-3">
                  <WhatsAppIcon className="w-6 h-6 text-emerald-400" />
                  <div>
                    <h3 className="font-heading text-base uppercase text-white font-bold">
                      Contact WhatsApp Officiel
                    </h3>
                    <p className="text-xs text-emerald-100">
                      Échangez en direct avec un responsable ATHENA SECURITY
                    </p>
                  </div>
                </div>
                <div className="pt-2">
                  <a
                    href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=Bonjour%20ATHENA%20SECURITY,%20je%20souhaite%20des%20informations%20sur%20vos%20services.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-heading uppercase tracking-wider font-bold rounded-[2px] transition-colors"
                  >
                    <WhatsAppIcon className="w-4 h-4" />
                    Ouvrir la conversation WhatsApp
                  </a>
                </div>
              </div>

              {/* Email & Physical Address */}
              <div className="space-y-4 p-6 bg-gray-50 border border-gray-200 rounded-[2px]">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-heading text-xs uppercase text-navy-900">Email Officiel (orthographe exacte) :</strong>
                    <a
                      href={`mailto:${SITE_CONFIG.contact.email}`}
                      className="text-sm text-navy-900 font-bold hover:text-blue-accent transition-colors"
                    >
                      {SITE_CONFIG.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-gray-200">
                  <MapPin className="w-5 h-5 text-blue-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-heading text-xs uppercase text-navy-900">Adresse du Siège Social :</strong>
                    <span className="text-xs text-gray-700">{SITE_CONFIG.contact.address.full}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-gray-200">
                  <Clock className="w-5 h-5 text-blue-accent shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-heading text-xs uppercase text-navy-900">Horaires d&apos;Ouverture :</strong>
                    <span className="text-xs text-gray-700">Permanence opérationnelle 24h/24 et 7j/7</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Full Form */}
            <div className="lg:col-span-7">
              <DevisForm />
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section (Loaded on Click Only for Privacy & Performance) */}
      <section className="bg-gray-50 py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-heading uppercase tracking-widest text-blue-accent">
              Carte d&apos;Accès Siège Social
            </span>
            <h2 className="font-heading text-2xl font-bold uppercase text-navy-900">
              Notre Localisation à Somgandé, Ouagadougou
            </h2>
          </div>

          <OpenStreetMap />
        </div>
      </section>
    </div>
  );
}
