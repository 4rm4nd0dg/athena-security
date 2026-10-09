import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Shield, Award, CheckCircle2, UserCheck, Phone, ArrowRight, Lock } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "À Propos & Vision | ATHENA SECURITY SARL",
  description:
    "Découvrez l'histoire, la philosophie et le profil du fondateur d'ATHENA SECURITY SARL, société de sûreté privée basée à Ouagadougou.",
};

export default function AboutPage() {
  return (
    <div className="space-y-0">
      {/* Page Header Banner */}
      <section className="bg-navy-900 text-white py-16 border-b border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-800 text-blue-accent text-xs font-heading tracking-widest uppercase rounded-[2px]">
              <Shield className="w-3.5 h-3.5" />
              Présentation Institutionnelle
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white">
              À Propos d&apos;ATHENA SECURITY SARL
            </h1>
            <p className="text-base text-gray-300 leading-relaxed">
              Une entreprise de sûreté et de sécurité privée à vocation sous-régionale, fondée sur les valeurs de sagesse, de protection et d&apos;excellence opérationnelle.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="bg-white py-16 sm:py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-heading uppercase tracking-widest text-blue-accent block">
                Qui Sommes-Nous ?
              </span>
              <h2 className="font-heading text-3xl font-bold uppercase text-navy-900">
                La Rigueur de l&apos;Armée et du Secteur Bancaire au Service de Votre Quiétude
              </h2>

              <p className="text-sm text-gray-700 leading-relaxed">
                La société <strong>ATHENA SECURITY SARL</strong> est une entreprise de sécurité privée à vocation sous-régionale, basée à Somgandé (Ouagadougou, Burkina Faso). Elle est dirigée par un <strong>expert en sûreté et sécurité</strong>, qui a acquis une expérience significative dans des domaines aussi variés que <strong>l&apos;armée</strong>, <strong>les organisations internationales</strong>, ainsi que <strong>dans le secteur bancaire</strong>.
              </p>

              <p className="text-sm text-gray-700 leading-relaxed">
                Fort de ces expériences enrichissantes, le fondateur a choisi de mettre son savoir-faire au service de ceux qui recherchent une tranquillité d&apos;esprit absolue. C&apos;est ainsi qu&apos;il a créé ATHENA SECURITY SARL, une société dédiée à fournir des solutions de sécurité sur mesure, répondant aux besoins spécifiques de chaque client.
              </p>

              <div className="p-4 bg-navy-900 text-white border-l-4 border-blue-accent rounded-[2px] italic text-sm">
                « ATHENA, le garant de votre quiétude et de votre tranquillité »
              </div>

              {/* Official Objectives */}
              <div className="pt-4 space-y-3">
                <h3 className="font-heading text-lg uppercase text-navy-900 border-b border-gray-200 pb-2">
                  Nos Objectifs Majeurs
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  ATHENA SECURITY se veut plus près de vous, en vous garantissant la sécurité des personnes, des biens et des services par l&apos;entremise de nos experts en sécurité et en Cybersécurité.
                </p>
                <p className="text-sm text-gray-700 leading-relaxed">
                  La qualité de nos services est une promesse mais aussi un objectif de résultat mesurable et quantifiable. La discrétion et l&apos;efficacité de nos agents de sécurité en sont les garanties d&apos;une parfaite formation de ces derniers à l&apos;exécution des missions qui leurs sont confiées.
                </p>
              </div>
            </div>

            {/* Right Column: Official Brochure Visual Embedded */}
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-4/5 rounded-[2px] overflow-hidden border-2 border-navy-700 shadow-xl">
                <Image
                  src="/images/brochure-qui-sommes-nous.jpeg"
                  alt="Brochure officielle ATHENA SECURITY - Qui Sommes-Nous"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Personnel Section */}
      <section className="bg-gray-50 py-16 sm:py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <span className="text-xs font-heading uppercase tracking-widest text-blue-accent">
              Valeurs & Capital Humain
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase text-navy-900">
              Nos Valeurs et le Personnel ATHENA
            </h2>
            <p className="text-sm text-gray-600">
              ATHENA SECURITY SARL centralise les valeurs de sagesse, de protection et de présence stratégique qui renforcent vos défenses et instaurent une atmosphère paisible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Box 1: Personnel Distinction */}
            <div className="bg-white p-8 border border-gray-200 rounded-[2px] space-y-4 shadow-xs">
              <div className="w-12 h-12 bg-navy-800 text-blue-accent rounded-[2px] flex items-center justify-center">
                <UserCheck className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl uppercase text-navy-900">
                Distinction du Personnel
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                ATHENA SECURITY met à votre disposition des agents de sécurité bien formés et expérimentés dont la bonne qualité de services est continue et adaptée à vos besoins. Pour bien effectuer leur travail, nos agents sont distingués et reconnaissables à :
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-700 pt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-accent shrink-0" />
                  Leur discrétion, leur respect, leur disponibilité et leur efficacité en tout lieu.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-accent shrink-0" />
                  Leur respect strict des règles de déontologie du métier d&apos;agent de sécurité.
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-accent shrink-0" />
                  Leurs uniformes, leurs chaussures et leur matériel de sécurité adaptés.
                </li>
              </ul>
            </div>

            {/* Box 2: Legal & Administrative Governance */}
            <div className="bg-navy-900 text-white p-8 border border-navy-700 rounded-[2px] space-y-4 shadow-md flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-blue-accent text-white rounded-[2px] flex items-center justify-center">
                  <Lock className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl uppercase text-white">
                  Gouvernance & Transparence
                </h3>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  Toutes nos prestations s&apos;effectuent dans le respect le plus strict des lois et règlements régissant les entreprises privées de sécurité au Burkina Faso.
                </p>

                <div className="p-4 bg-navy-800 border border-navy-700 rounded-[2px] space-y-2 text-xs">
                  <div className="flex justify-between items-center text-gray-300">
                    <span>Raison sociale :</span>
                    <strong className="text-white">ATHENA SECURITY SARL</strong>
                  </div>
                  <div className="flex justify-between items-center text-gray-300">
                    <span>Statut Juridique :</span>
                    <strong className="text-white">Société à Responsabilité Limitée (SARL)</strong>
                  </div>
                  <div className="flex justify-between items-center text-gray-300">
                    <span>Siège Social :</span>
                    <strong className="text-white">Somgandé, Ouagadougou</strong>
                  </div>
                  <div className="flex justify-between items-center text-gray-300">
                    <span>Conformité Légale :</span>
                    <strong className="text-white">Société de sûreté agréée</strong>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-navy-700">
                <Button href="/contact" variant="accent" size="md" className="w-full">
                  Demander un devis institutionnel
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
