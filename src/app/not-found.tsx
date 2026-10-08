import React from "react";
import Link from "next/link";
import { ShieldAlert, Home, Phone } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Page Non Trouvée - 404 | ATHENA SECURITY SARL",
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-navy-900 text-white flex items-center justify-center p-6 border-b border-navy-700">
      <div className="max-w-md w-full text-center space-y-6 bg-navy-800 p-8 border border-navy-700 rounded-[2px] shadow-2xl">
        <div className="w-16 h-16 bg-navy-900 border-2 border-blue-accent text-blue-accent rounded-full flex items-center justify-center mx-auto shadow-lg">
          <ShieldAlert className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="font-heading text-4xl font-bold text-blue-accent block">
            ERREUR 404
          </span>
          <h1 className="font-heading text-xl uppercase tracking-wider text-white">
            Page Introuvable ou Hors Périmètre
          </h1>
          <p className="text-xs text-gray-300 leading-relaxed">
            La page que vous recherchez n&apos;existe pas ou a été déplacée. Veuillez retourner à l&apos;accueil ou contacter directement notre infoline.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-3">
          <Button href="/" variant="accent" size="md" icon={<Home className="w-4 h-4" />}>
            Retourner à l&apos;accueil
          </Button>

          <a
            href={`tel:${SITE_CONFIG.contact.phonePrimaryRaw}`}
            className="py-2.5 px-4 bg-navy-900 hover:bg-navy-700 text-white text-xs font-heading uppercase tracking-wider border border-navy-700 rounded-[2px] inline-flex items-center justify-center gap-2 transition-colors"
          >
            <Phone className="w-4 h-4 text-blue-accent" />
            Urgence Infoline 24h/24
          </a>
        </div>
      </div>
    </div>
  );
}
