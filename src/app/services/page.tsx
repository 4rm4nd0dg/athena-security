import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, UserCheck, Zap, ShieldCheck, GraduationCap, FileCheck } from "lucide-react";
import { SERVICES_DATA } from "@/data/servicesData";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Nos 6 Services de Sécurité & Sûreté | ATHENA SECURITY SARL",
  description:
    "Découvrez les 6 services officiels d'ATHENA SECURITY SARL : gardiennage, protection rapprochée, surveillance et intervention, équipements, formation et audits.",
};

export default function ServicesPage() {
  return (
    <div className="space-y-0">
      {/* Header Banner */}
      <section className="bg-navy-900 text-white py-16 border-b border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-800 text-blue-accent text-xs font-heading tracking-widest uppercase rounded-[2px]">
              <Shield className="w-3.5 h-3.5" />
              Catalogue Officiel
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white">
              Nos Services de Sécurité & Sûreté
            </h1>
            <p className="text-base text-gray-300 leading-relaxed">
              ATHENA SECURITY SARL propose une gamme intégrée de 6 prestations de haute sûreté, conçues sur mesure pour répondre aux exigences du secteur public et privé au Burkina Faso.
            </p>
          </div>
        </div>
      </section>

      {/* Services List Grid */}
      <section className="bg-white py-16 sm:py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICES_DATA.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                id={service.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center p-8 bg-gray-50 border border-gray-200 rounded-[2px] shadow-xs"
              >
                {/* Left/Right Text Content */}
                <div className={`lg:col-span-7 space-y-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-navy-800 text-blue-accent rounded-[2px] flex items-center justify-center">
                      {index === 0 && <Shield className="w-5 h-5" />}
                      {index === 1 && <UserCheck className="w-5 h-5" />}
                      {index === 2 && <Zap className="w-5 h-5" />}
                      {index === 3 && <ShieldCheck className="w-5 h-5" />}
                      {index === 4 && <GraduationCap className="w-5 h-5" />}
                      {index === 5 && <FileCheck className="w-5 h-5" />}
                    </div>
                    <span className="font-heading text-xs uppercase tracking-widest text-blue-accent font-bold">
                      Prestation 0{index + 1} {service.badgeText && `• ${service.badgeText}`}
                    </span>
                  </div>

                  <h2 className="font-heading text-2xl sm:text-3xl font-bold uppercase text-navy-900">
                    {service.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-medium">
                    {service.shortDescription}
                  </p>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {service.fullDescription}
                  </p>

                  <div className="p-4 bg-white border border-gray-200 rounded-[2px]">
                    <h4 className="font-heading text-xs uppercase text-navy-900 mb-2">
                      Points Forts & Équipements :
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                      {service.keyPoints.map((kp, idx) => (
                        <span key={idx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 bg-blue-accent rounded-full shrink-0" />
                          {kp}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    <Button href={`/services/${service.slug}`} variant="primary" size="md">
                      Fiche détaillée
                    </Button>
                    <Button href={`/contact?service=${service.id}`} variant="accent" size="md">
                      Demander un devis pour ce service
                    </Button>
                  </div>
                </div>

                {/* Right/Left Image Visual */}
                <div className={`lg:col-span-5 ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                  <div className="relative w-full aspect-4/3 clip-corner-cut overflow-hidden border-2 border-navy-700 shadow-md">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
