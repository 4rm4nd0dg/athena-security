import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Shield, MessageSquare } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { SERVICES_DATA } from "@/data/servicesData";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-900 text-white border-t-4 border-blue-accent pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-navy-700">
          {/* Column 1: Company Profile & Slogan */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-12 shrink-0">
                <Image
                  src="/images/logo-athena-transparent.png"
                  alt="ATHENA SECURITY Logo Écusson"
                  fill
                  sizes="40px"
                  className="object-contain filter brightness-110"
                />
              </div>
              <div>
                <span className="font-heading text-xl font-bold tracking-tight text-white block">
                  ATHENA <span className="text-blue-accent">SECURITY</span>
                </span>
                <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-widest block">
                  SARL • Sûreté Privée
                </span>
              </div>
            </div>

            <p className="text-xs text-gray-300 leading-relaxed italic border-l-2 border-blue-accent pl-3 py-1">
              « {SITE_CONFIG.slogans.primary} »
            </p>

            <p className="text-xs text-gray-300 leading-relaxed">
              Société de sûreté et de sécurité privée à vocation sous-régionale basée à Ouagadougou. Gardiennage, protection rapprochée, surveillance & intervention 24h/24.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_CONFIG.contact.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-navy-800 hover:bg-blue-accent border border-navy-700 text-white rounded-[2px] flex items-center justify-center transition-colors"
                aria-label="Suivre ATHENA SECURITY sur Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=Bonjour%20ATHENA%20SECURITY,%20je%20souhaite%20des%20informations.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-emerald-700 hover:bg-emerald-600 border border-emerald-600 text-white rounded-[2px] flex items-center justify-center transition-colors"
                aria-label="Contacter ATHENA SECURITY sur WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Nos Services */}
          <div>
            <h3 className="font-heading text-base uppercase tracking-wider text-white mb-4 border-b border-navy-700 pb-2">
              Services de Sécurité
            </h3>
            <ul className="space-y-2.5 text-xs text-gray-300">
              {SERVICES_DATA.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="hover:text-blue-accent transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-blue-accent font-bold">›</span>
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/equipements"
                  className="hover:text-blue-accent transition-colors flex items-center gap-1.5 pt-1"
                >
                  <span className="text-blue-accent font-bold">›</span>
                  Catalogue des Équipements
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation & Information */}
          <div>
            <h3 className="font-heading text-base uppercase tracking-wider text-white mb-4 border-b border-navy-700 pb-2">
              Information & Organisation
            </h3>
            <ul className="space-y-2.5 text-xs text-gray-300">
              <li>
                <Link href="/a-propos" className="hover:text-blue-accent transition-colors">
                  • Présentation & Fondateur
                </Link>
              </li>
              <li>
                <Link href="/formation" className="hover:text-blue-accent transition-colors">
                  • Formation en Sûreté Physique
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-accent transition-colors">
                  • Obtenir un Devis Personnalisé
                </Link>
              </li>
              <li>
                <Link href="/mentions-legales" className="hover:text-blue-accent transition-colors">
                  • Mentions Légales & Réglementation
                </Link>
              </li>
              <li>
                <Link href="/politique-de-confidentialite" className="hover:text-blue-accent transition-colors">
                  • Politique de Confidentialité
                </Link>
              </li>
            </ul>

            <div className="mt-6 p-3 bg-navy-800 border border-navy-700 rounded-[2px]">
              <div className="flex items-center gap-2 text-xs font-heading text-blue-accent uppercase">
                <Clock className="w-4 h-4" />
                Horaires d'opération
              </div>
              <p className="text-xs text-gray-300 mt-1 font-semibold">
                Permanence Opérationnelle 24h/24 et 7j/7
              </p>
            </div>
          </div>

          {/* Column 4: Contact & Infoline */}
          <div>
            <h3 className="font-heading text-base uppercase tracking-wider text-white mb-4 border-b border-navy-700 pb-2">
              Coordonnées Officielle
            </h3>
            <div className="space-y-3.5 text-xs text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-blue-accent shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contact.address.full}</span>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-blue-accent shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="font-heading uppercase text-gray-400 text-[10px]">Infoline 24h/24 :</span>
                  <a
                    href={`tel:${SITE_CONFIG.contact.phonePrimaryRaw}`}
                    className="font-bold text-white hover:text-blue-accent transition-colors"
                  >
                    {SITE_CONFIG.contact.phonePrimary}
                  </a>
                  <a
                    href={`tel:${SITE_CONFIG.contact.phoneSecondaryRaw}`}
                    className="font-bold text-white hover:text-blue-accent transition-colors"
                  >
                    {SITE_CONFIG.contact.phoneSecondary}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-blue-accent shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-heading uppercase text-gray-400 text-[10px]">Email Direct :</span>
                  <a
                    href={`mailto:${SITE_CONFIG.contact.email}`}
                    className="font-bold text-white hover:text-blue-accent transition-colors"
                  >
                    {SITE_CONFIG.contact.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal Rights Bar */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
          <p>
            © 2026 <strong className="text-white">ATHENA SECURITY SARL</strong>. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/mentions-legales" className="hover:text-white transition-colors">
              Mentions Légales
            </Link>
            <span>•</span>
            <Link href="/politique-de-confidentialite" className="hover:text-white transition-colors">
              Confidentialité
            </Link>
            <span>•</span>
            <span className="text-gray-500">Ouagadougou, Burkina Faso</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
