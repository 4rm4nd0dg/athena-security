import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  CheckCircle2,
  ArrowRight,
  UserCheck,
  Zap,
  ShieldCheck,
  GraduationCap,
  FileCheck,
  Target,
  Workflow,
  Award,
  Phone,
} from "lucide-react";
import { SERVICES_DATA } from "@/data/servicesData";
import { SITE_CONFIG } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";
import { DevisForm } from "@/components/forms/DevisForm";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  if (!service) return { title: "Service non trouvé" };

  return {
    title: `${service.title} | ATHENA SECURITY SARL`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="space-y-0">
      {/* Detail Header Banner */}
      <section className="bg-navy-900 text-white py-16 border-b border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-2">
                <Link
                  href="/services"
                  className="text-xs font-heading uppercase text-blue-accent hover:underline"
                >
                  Services
                </Link>
                <span className="text-gray-500 text-xs">/</span>
                <span className="text-xs font-heading uppercase text-gray-300">
                  {service.title}
                </span>
              </div>
              <h1 className="font-heading text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white">
                {service.title}
              </h1>
              <p className="text-base text-gray-300 leading-relaxed">
                {service.shortDescription}
              </p>
            </div>

            <Button
              href={`/contact?service=${service.id}`}
              variant="accent"
              size="lg"
              className="shrink-0"
            >
              Devis pour ce service
            </Button>
          </div>
        </div>
      </section>

      {/* Main Content Details */}
      <section className="bg-white py-16 sm:py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Main Article */}
            <div className="lg:col-span-8 space-y-12">
              {/* Detailed Description */}
              <div className="space-y-4">
                <h2 className="font-heading text-2xl font-bold uppercase text-navy-900 border-b border-gray-200 pb-2">
                  Description Complète de la Prestation
                </h2>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              {/* À qui il s'adresse */}
              <div className="space-y-4 p-6 bg-gray-50 border border-gray-200 rounded-[2px]">
                <div className="flex items-center gap-2 text-navy-900 font-heading text-lg uppercase">
                  <Target className="w-5 h-5 text-blue-accent" />
                  À Qui S&apos;adresse ce Service ?
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-700">
                  {service.targetAudience.map((target, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-accent shrink-0 mt-0.5" />
                      <span>{target}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Déroulement type d'une mission */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-navy-900 font-heading text-xl uppercase border-b border-gray-200 pb-2">
                  <Workflow className="w-5 h-5 text-blue-accent" />
                  Déroulement Type d&apos;une Mission
                </div>
                <div className="space-y-3">
                  {service.missionWorkflow.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-4 bg-white border border-gray-200 rounded-[2px] flex items-start gap-4 shadow-xs"
                    >
                      <span className="w-8 h-8 bg-navy-800 text-blue-accent font-heading font-bold text-sm rounded-[2px] flex items-center justify-center shrink-0">
                        0{idx + 1}
                      </span>
                      <p className="text-xs sm:text-sm text-gray-700 leading-relaxed pt-1">
                        {step}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bénéfices Concrets */}
              <div className="space-y-4 p-6 bg-navy-900 text-white rounded-[2px] border-l-4 border-blue-accent shadow-md">
                <div className="flex items-center gap-2 font-heading text-xl uppercase text-white">
                  <Award className="w-5 h-5 text-blue-accent" />
                  Bénéfices Concrets pour Votre Organisation
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-gray-300">
                  {service.concreteBenefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-blue-accent rounded-full shrink-0 mt-2" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Sidebar: Pre-filled Devis Form & Contact */}
            <div className="lg:col-span-4 space-y-8">
              {/* Visual image */}
              <div className="relative w-full aspect-4/3 clip-corner-cut overflow-hidden border-2 border-navy-700 shadow-md">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 30vw"
                  className="object-cover"
                />
              </div>

              {/* Pre-filled Devis Form Component */}
              <div id="devis">
                <DevisForm preselectedService={service.id} />
              </div>

              {/* Urgent Call Box */}
              <div className="p-5 bg-navy-800 text-white border border-navy-700 rounded-[2px] text-center space-y-2">
                <span className="text-xs font-heading uppercase tracking-wider text-blue-accent block">
                  Besoin d&apos;une réponse immédiate ?
                </span>
                <a
                  href={`tel:${SITE_CONFIG.contact.phonePrimaryRaw}`}
                  className="text-lg font-bold text-white hover:text-blue-accent flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-blue-accent" />
                  {SITE_CONFIG.contact.phonePrimary}
                </a>
                <p className="text-[11px] text-gray-400">
                  Poste de commandement ATHENA 24h/24
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
