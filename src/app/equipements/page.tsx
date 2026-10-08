import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Phone, CheckCircle2, ArrowRight } from "lucide-react";
import { EQUIPMENTS_DATA } from "@/data/equipmentsData";
import { SITE_CONFIG } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Fourniture d'Équipements de Sécurité | ATHENA SECURITY SARL",
  description:
    "Catalogue d'équipements de sûreté professionnelle à Ouagadougou : détecteurs Garrett, portiques, pointeuses biométriques, lampes Energizer, barbelés et extincteurs.",
};

export default function EquipementsPage() {
  return (
    <div className="space-y-0">
      {/* Page Header */}
      <section className="bg-navy-900 text-white py-16 border-b border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-800 text-blue-accent text-xs font-heading tracking-widest uppercase rounded-[2px]">
              <ShieldCheck className="w-3.5 h-3.5" />
              Catalogue Matériel Certifié
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white">
              Fourniture d&apos;Équipements de Sécurité
            </h1>
            <p className="text-base text-gray-300 leading-relaxed">
              Dispositifs et matériels de sécurité de haute qualité, à la pointe du progrès technologique pour garantir une protection maximale de vos infrastructures et personnes.
            </p>
          </div>
        </div>
      </section>

      {/* Equipment Showcase Banner Image */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-gray-50 p-6 sm:p-8 border border-gray-200 rounded-[2px]">
            <div className="lg:col-span-6 space-y-4">
              <h2 className="font-heading text-2xl font-bold uppercase text-navy-900">
                Matériels Testés & Conformes aux Normes Internationales
              </h2>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                ATHENA SECURITY SARL sélectionne rigoureusement ses équipements auprès de constructeurs de renom mondial (Garrett, Energizer, etc.) pour offrir des matériels adaptés aux contraintes d&apos;exploitation au Burkina Faso.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Button href="/contact?service=equipements-securite" variant="accent" size="md">
                  Commander ou demander un devis matériel
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="relative w-full aspect-16/9 rounded-[2px] overflow-hidden border-2 border-navy-700 shadow-md">
                <Image
                  src="/images/pexels-ethangorosti-38768056.jpg"
                  alt="Équipements de sécurité et contrôle d'accès ATHENA SECURITY"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Grid */}
      <section className="bg-gray-50 py-16 sm:py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-heading uppercase tracking-widest text-blue-accent">
              Gamme de Matériels
            </span>
            <h2 className="font-heading text-3xl font-bold uppercase text-navy-900">
              Nos Équipements de Sûreté en Catalogue
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EQUIPMENTS_DATA.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-[2px] p-6 space-y-4 flex flex-col justify-between shadow-xs hover:border-blue-accent/50 transition-colors"
              >
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="px-2.5 py-0.5 bg-navy-800 text-blue-accent text-[11px] font-heading uppercase rounded-[2px]">
                      {item.categoryLabel}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg uppercase text-navy-900">
                    {item.name}
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed">
                    {item.description}
                  </p>

                  <ul className="space-y-1.5 pt-2 border-t border-gray-100">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="text-xs text-gray-700 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-accent shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-mono">Matériel garanti</span>
                  <Button href={`/contact?service=equipements-securite&equipment=${item.id}`} variant="secondary" size="sm">
                    Cotation
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
