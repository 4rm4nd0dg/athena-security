import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Phone,
  ArrowRight,
  ShieldCheck,
  Zap,
  UserCheck,
  GraduationCap,
  FileCheck,
  CheckCircle2,
  Clock,
  MapPin,
  Award,
  Lock,
} from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { SERVICES_DATA } from "@/data/servicesData";
import { Button } from "@/components/ui/Button";
import { DevisForm } from "@/components/forms/DevisForm";

export default function HomePage() {
  return (
    <div className="space-y-0">
      {/* 1. HERO SECTION */}
      <section className="relative bg-navy-900 text-white overflow-hidden border-b border-navy-700">
        {/* Subtle geometric background overlay */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#009BE3_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20 lg:py-24 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-800 border border-blue-accent/30 text-blue-accent text-xs font-heading tracking-widest uppercase rounded-[2px]">
                <Shield className="w-3.5 h-3.5" />
                Société de Sûreté Privée • Ouagadougou
              </div>

              <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-none uppercase">
                La Vigilance au Service de <span className="text-blue-accent">Votre Sécurité</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-300 font-normal max-w-2xl leading-relaxed">
                ATHENA SECURITY SARL déploie des agents qualifiés, des patrouilles d&apos;intervention d&apos;urgence et des équipements certifiés pour garantir la quiétude absolue des entreprises, institutions et personnalités au Burkina Faso.
              </p>

              {/* Slogan highlight banner */}
              <div className="p-4 bg-navy-800/90 border-l-4 border-blue-accent rounded-[2px] text-xs sm:text-sm text-gray-200 italic">
                « {SITE_CONFIG.slogans.secondary} »
              </div>

              {/* Dual CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Button href="/contact" variant="accent" size="lg" icon={<ArrowRight className="w-4 h-4" />} iconPosition="right">
                  Demander un devis gratuit
                </Button>
                <Button
                  href={`tel:${SITE_CONFIG.contact.phonePrimaryRaw}`}
                  variant="outline"
                  size="lg"
                  icon={<Phone className="w-4 h-4 text-blue-accent" />}
                >
                  Appeler l&apos;infoline 24h/24
                </Button>
              </div>

              {/* Immediate Reassurance Points */}
              <div className="pt-4 grid grid-cols-3 gap-2 text-center sm:text-left text-xs text-gray-300 border-t border-navy-700/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-accent shrink-0" />
                  <span>Supervision 24h/24</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-accent shrink-0" />
                  <span>Rigueur Militaire & Bancaire</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-accent shrink-0" />
                  <span>Intervention Mobile Rapide</span>
                </div>
              </div>
            </div>

            {/* Right Column: Soft & Professional Security Operational Badge & Officer Visual */}
            <div className="lg:col-span-5 relative flex justify-center items-center">
              <div className="relative w-full max-w-md">
                {/* Outer Subtle Geometric Glow Accent */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-accent/20 to-navy-700/40 rounded-[4px] blur-xs -z-10" />

                {/* Main Card Frame */}
                <div className="relative bg-navy-800 border-2 border-navy-700 rounded-[2px] overflow-hidden shadow-2xl">
                  {/* Header Bar inside card */}
                  <div className="px-4 py-3 bg-navy-900 border-b border-navy-700 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
                      <span className="font-heading text-xs uppercase tracking-widest text-white font-bold">
                        POSTE OPÉRATIONNEL • ATHENA
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-blue-accent px-2 py-0.5 bg-navy-800 border border-navy-700 rounded-[2px]">
                      24H/24 - 7J/7
                    </span>
                  </div>

                  {/* Officer Image Container (Clean Cropped Photo without text) */}
                  <div className="relative w-full h-[420px] bg-navy-900">
                    <Image
                      src="/images/officer-athena.jpeg"
                      alt="Agent de sécurité professionnel ATHENA SECURITY SARL"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-top filter contrast-105"
                      priority
                    />
                    {/* Soft Gradient Overlay for flawless contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/30 to-transparent" />

                    {/* Floating Stamp / Logo Badge */}
                    <div className="absolute top-4 right-4 bg-navy-900/90 backdrop-blur-xs p-2 border border-navy-700 rounded-[2px] shadow-lg flex items-center gap-2">
                      <div className="relative w-8 h-9 shrink-0">
                        <Image
                          src="/images/logo-athena-transparent.png"
                          alt="Logo Écusson ATHENA"
                          fill
                          sizes="32px"
                          className="object-contain"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-heading text-[11px] uppercase text-white font-bold leading-tight">
                          ATHENA
                        </span>
                        <span className="text-[9px] text-blue-accent font-semibold tracking-wider uppercase">
                          SÛRETÉ PRIVÉE
                        </span>
                      </div>
                    </div>

                    {/* Bottom Operational Reassurance Overlay */}
                    <div className="absolute bottom-4 left-4 right-4 bg-navy-900/95 backdrop-blur-md p-4 border border-navy-700 rounded-[2px] shadow-xl space-y-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-heading uppercase text-blue-accent font-bold tracking-wider">
                          Engagement de Sûreté
                        </span>
                        <span className="text-[10px] text-gray-400 font-mono">Burkina Faso</span>
                      </div>

                      <div className="grid grid-cols-3 gap-2 pt-1 border-t border-navy-700 text-[11px] text-gray-200 font-medium text-center">
                        <div className="p-1.5 bg-navy-800/80 border border-navy-700 rounded-[2px]">
                          Discrétion
                        </div>
                        <div className="p-1.5 bg-navy-800/80 border border-navy-700 rounded-[2px]">
                          Respect
                        </div>
                        <div className="p-1.5 bg-navy-800/80 border border-navy-700 rounded-[2px]">
                          Efficacité
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REASSURANCE FACTUAL BLOCK */}
      <section className="bg-white py-12 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Box 1 */}
            <div className="p-6 bg-gray-50 border border-gray-200 rounded-[2px] space-y-2">
              <div className="flex items-center justify-between">
                <Clock className="w-6 h-6 text-blue-accent" />
                <span className="text-2xl font-heading font-bold text-navy-900">24H/24</span>
              </div>
              <h3 className="font-heading text-sm uppercase text-navy-900">Permanence Absolue</h3>
              <p className="text-xs text-gray-600">
                Infoline et poste de commandement joignables jour et nuit sans interruption.
              </p>
            </div>

            {/* Box 2 */}
            <div className="p-6 bg-gray-50 border border-gray-200 rounded-[2px] space-y-2">
              <div className="flex items-center justify-between">
                <UserCheck className="w-6 h-6 text-blue-accent" />
                <span className="text-2xl font-heading font-bold text-navy-900">
                  QUALIFIÉS
                </span>
              </div>
              <h3 className="font-heading text-sm uppercase text-navy-900">Personnel Formé</h3>
              <p className="text-xs text-gray-600">
                Agents formés à la déontologie, au secourisme et aux consignes écrites.
              </p>
            </div>

            {/* Box 3 */}
            <div className="p-6 bg-gray-50 border border-gray-200 rounded-[2px] space-y-2">
              <div className="flex items-center justify-between">
                <MapPin className="w-6 h-6 text-blue-accent" />
                <span className="text-2xl font-heading font-bold text-navy-900">SUB-RÉGIONAL</span>
              </div>
              <h3 className="font-heading text-sm uppercase text-navy-900">Ancrage Territorial</h3>
              <p className="text-xs text-gray-600">
                Basé à Somgandé (Ouagadougou) avec vocation d&apos;intervention sous-régionale.
              </p>
            </div>

            {/* Box 4 */}
            <div className="p-6 bg-gray-50 border border-gray-200 rounded-[2px] space-y-2">
              <div className="flex items-center justify-between">
                <Award className="w-6 h-6 text-blue-accent" />
                <span className="text-2xl font-heading font-bold text-navy-900">CONFORME</span>
              </div>
              <h3 className="font-heading text-sm uppercase text-navy-900">Agrément Officiel</h3>
              <p className="text-xs text-gray-600">
                Société légalement constituée sous la législation du Burkina Faso.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LES 6 SERVICES (EDITORIAL ASYMMETRIC GRID) */}
      <section className="bg-gray-50 py-16 sm:py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-gray-200 pb-6">
            <div>
              <span className="text-xs font-heading uppercase tracking-widest text-blue-accent block mb-1">
                Catalogue de Prestations
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase text-navy-900">
                Nos 6 Services de Sûreté & Sécurité
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 max-w-md leading-relaxed">
              Une gamme complète de solutions physiques, tactiques et électroniques adaptées aux menaces contemporaines.
            </p>
          </div>

          {/* Asymmetric Layout: Service 3 (Surveillance & Intervention) is highlighted as Point Fort */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {SERVICES_DATA.map((service, index) => {
              const isHighlight = service.badgeText !== undefined;
              
              return (
                <div
                  key={service.id}
                  className={`flex flex-col justify-between p-7 rounded-[2px] transition-all duration-200 border ${
                    isHighlight
                      ? "bg-navy-900 text-white border-blue-accent lg:col-span-2 shadow-xl"
                      : "bg-white text-navy-900 border-gray-200 hover:border-blue-accent/50 shadow-xs"
                  }`}
                >
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <div
                        className={`w-12 h-12 flex items-center justify-center rounded-[2px] ${
                          isHighlight ? "bg-blue-accent text-white" : "bg-navy-800 text-white"
                        }`}
                      >
                        {index === 0 && <Shield className="w-6 h-6" />}
                        {index === 1 && <UserCheck className="w-6 h-6" />}
                        {index === 2 && <Zap className="w-6 h-6" />}
                        {index === 3 && <ShieldCheck className="w-6 h-6" />}
                        {index === 4 && <GraduationCap className="w-6 h-6" />}
                        {index === 5 && <FileCheck className="w-6 h-6" />}
                      </div>

                      {isHighlight && (
                        <span className="px-3 py-1 bg-blue-accent text-white text-xs font-heading uppercase tracking-wider rounded-[2px]">
                          {service.badgeText}
                        </span>
                      )}
                      {!isHighlight && (
                        <span className="font-heading text-xs text-gray-400 font-bold">
                          0{index + 1}
                        </span>
                      )}
                    </div>

                    <h3
                      className={`font-heading text-xl uppercase ${
                        isHighlight ? "text-white" : "text-navy-900"
                      }`}
                    >
                      {service.title}
                    </h3>

                    <p
                      className={`text-xs sm:text-sm leading-relaxed ${
                        isHighlight ? "text-gray-300" : "text-gray-600"
                      }`}
                    >
                      {service.shortDescription}
                    </p>

                    {/* Key points bullets */}
                    <ul className="space-y-1.5 pt-2">
                      {service.keyPoints.slice(0, 3).map((kp, idx) => (
                        <li
                          key={idx}
                          className={`text-xs flex items-center gap-2 ${
                            isHighlight ? "text-gray-200" : "text-gray-700"
                          }`}
                        >
                          <span className="w-1.5 h-1.5 bg-blue-accent rounded-full shrink-0" />
                          {kp}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 border-t border-gray-100/20 mt-6 flex items-center justify-between">
                    <Link
                      href={`/services/${service.slug}`}
                      className={`text-xs font-heading uppercase tracking-wider font-bold inline-flex items-center gap-1.5 hover:underline ${
                        isHighlight ? "text-blue-accent" : "text-navy-800"
                      }`}
                    >
                      En savoir plus
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Button
                      href={`/contact?service=${service.id}`}
                      variant={isHighlight ? "accent" : "secondary"}
                      size="sm"
                    >
                      Devis
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. POURQUOI ATHENA (VALEURS & FONDATEUR) */}
      <section className="bg-white py-16 sm:py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Founder Background */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-800 text-white text-xs font-heading tracking-widest uppercase rounded-[2px]">
                <Award className="w-3.5 h-3.5 text-blue-accent" />
                Expertise & Commandement
              </div>

              <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase text-navy-900">
                Pourquoi Choisir ATHENA SECURITY SARL ?
              </h2>

              <p className="text-sm text-gray-700 leading-relaxed">
                ATHENA SECURITY SARL est dirigée par un <strong>expert en sûreté et sécurité</strong> ayant acquis une expérience significative et avérée dans trois secteurs stratégiques : <strong>l&apos;armée</strong>, <strong>les organisations internationales</strong> et <strong>le secteur bancaire</strong>.
              </p>

              <p className="text-sm text-gray-700 leading-relaxed">
                Fort de cette alliance unique entre rigueur militaire tactique, haut niveau d&apos;exigence bancaire et diplomatie internationale, ATHENA SECURITY centralise les valeurs de <strong>sagesse</strong>, de <strong>protection</strong> et de <strong>présence stratégique</strong>.
              </p>

              {/* Agent Distinctive Qualities Box */}
              <div className="p-5 bg-gray-50 border border-gray-200 rounded-[2px] space-y-3">
                <h4 className="font-heading text-xs uppercase text-navy-900 tracking-wider">
                  Des Agents Distingués & Reconnaissables :
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-gray-700">
                  {SITE_CONFIG.agentQualities.map((quality, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-accent shrink-0 mt-0.5" />
                      <span>{quality}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2">
                <Button href="/a-propos" variant="primary" size="md">
                  Découvrir notre philosophie d&apos;action
                </Button>
              </div>
            </div>

            {/* Right Column: Values Cards Grid */}
            <div className="lg:col-span-6 space-y-4">
              <div className="p-6 bg-navy-900 text-white rounded-[2px] border-l-4 border-blue-accent shadow-md space-y-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-navy-800 text-blue-accent rounded-[2px]">
                    <Shield className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-xl uppercase tracking-wider text-white">
                    01. Sagesse
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pl-12">
                  L&apos;analyse mesurée des risques et la maîtrise de soi guidant chaque intervention pour éviter l&apos;escalade inutile tout en maintenant une posture ferme.
                </p>
              </div>

              <div className="p-6 bg-navy-800 text-white rounded-[2px] border-l-4 border-blue-accent shadow-md space-y-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-navy-700 text-blue-accent rounded-[2px]">
                    <Lock className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-xl uppercase tracking-wider text-white">
                    02. Protection
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pl-12">
                  La garantie intégrale de la sûreté des personnes, des biens stratégiques et des infrastructures par une présence vigilance continue.
                </p>
              </div>

              <div className="p-6 bg-navy-900 text-white rounded-[2px] border-l-4 border-blue-accent shadow-md space-y-2">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-navy-800 text-blue-accent rounded-[2px]">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-xl uppercase tracking-wider text-white">
                    03. Présence Stratégique
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-300 leading-relaxed pl-12">
                  Un positionnement dissuasif sur le terrain et une capacité de projection rapide en cas d&apos;urgence pour verrouiller immédiatement la menace.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PROCESSUS DE COLLABORATION EN 5 ÉTAPES */}
      <section className="bg-gray-50 py-16 sm:py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-heading uppercase tracking-widest text-blue-accent">
              Méthodologie Opérationnelle
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase text-navy-900">
              Notre Processus de Collaboration en 5 Étapes
            </h2>
            <p className="text-xs sm:text-sm text-gray-600">
              Une démarche structurée de la première évaluation jusqu&apos;au suivi quotidien sur le terrain.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {SITE_CONFIG.collaborationSteps.map((stepItem, idx) => (
              <div
                key={idx}
                className="bg-white p-5 border border-gray-200 rounded-[2px] space-y-3 relative shadow-xs flex flex-col justify-between"
              >
                <div>
                  <span className="font-heading text-2xl font-bold text-blue-accent block mb-1">
                    {stepItem.step}
                  </span>
                  <h3 className="font-heading text-sm uppercase text-navy-900 border-b border-gray-100 pb-2">
                    {stepItem.title}
                  </h3>
                  <p className="text-xs text-gray-600 mt-2 leading-relaxed">
                    {stepItem.description}
                  </p>
                </div>
                {idx < 4 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                    <span className="w-6 h-6 bg-navy-800 text-white rounded-full flex items-center justify-center text-xs font-bold">
                      ›
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BANDEAU DE CONVERSION ET FORMULAIRE FINAL */}
      <section className="bg-navy-900 py-16 sm:py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-heading uppercase tracking-widest text-blue-accent">
                Prise de Contact Rapide
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold uppercase text-white leading-tight">
                Besoin d&apos;une Solution de Sécurité Immédiate ?
              </h2>
              <p className="text-sm text-gray-300 leading-relaxed">
                Nos conseillers en sûreté analysent gratuitement votre situation et vous transmettent une proposition détaillée sous 24 heures.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-center gap-3 p-3 bg-navy-800 border border-navy-700 rounded-[2px]">
                  <Phone className="w-5 h-5 text-blue-accent" />
                  <div>
                    <span className="text-[10px] font-heading uppercase text-gray-400 block">Infoline Directe 24h/24 :</span>
                    <a href={`tel:${SITE_CONFIG.contact.phonePrimaryRaw}`} className="text-sm font-bold text-white hover:text-blue-accent">
                      {SITE_CONFIG.contact.phonePrimary} / {SITE_CONFIG.contact.phoneSecondary}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-navy-800 border border-navy-700 rounded-[2px]">
                  <MapPin className="w-5 h-5 text-blue-accent" />
                  <div>
                    <span className="text-[10px] font-heading uppercase text-gray-400 block">Siège Social :</span>
                    <span className="text-xs text-white">{SITE_CONFIG.contact.address.full}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <DevisForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
