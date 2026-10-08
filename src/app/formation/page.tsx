import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GraduationCap, CheckCircle2, Shield, UserCheck, BookOpen, Award } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";

export const metadata = {
  title: "Formation en Sécurité & Sûreté Physique | ATHENA SECURITY SARL",
  description:
    "Programmes d'éducation et de préparation aux risques de sécurité physique, secourisme, gestion de crise et lutte contre l'incendie à Ouagadougou.",
};

export default function FormationPage() {
  const trainingModules = [
    {
      title: "Module 1 : Sensibilisation aux Risques & Réflexes de Sûreté",
      description: "Apprendre à identifier les menaces d'intrusion, le repérage suspect et adopter la posture de vigilance au quotidien.",
      audience: "Personnel d'accueil, cadres d'entreprises, ONG et particuliers.",
      duration: "1 à 2 jours",
    },
    {
      title: "Module 2 : Formation Initiale & Recyclage d'Agent de Sécurité",
      description: "Maîtrise des consignes de gardiennage, filtrage, déontologie, gestion des conflits et rédaction de main-courante.",
      audience: "Agents de sécurité interne et candidats aux métiers de la sûreté.",
      duration: "5 à 10 jours",
    },
    {
      title: "Module 3 : Gestion de Crise & Évacuation d'Urgence",
      description: "Procédures de confinement, réactions face au risque d'attentat ou de braquage, et conduite des évacuations.",
      audience: "Comités de direction, responsables HSE et chargés de sécurité.",
      duration: "2 jours",
    },
    {
      title: "Module 4 : Premiers Secours & Lutte Contre l'Incendie",
      description: "Manipulation des extincteurs, extinction de départs de feu, gestes d'urgence et secourisme du travail.",
      audience: "Équipes de sécurité et salariés désignés secouristes.",
      duration: "2 à 3 jours",
    },
  ];

  return (
    <div className="space-y-0">
      {/* Header Banner */}
      <section className="bg-navy-900 text-white py-16 border-b border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-navy-800 text-blue-accent text-xs font-heading tracking-widest uppercase rounded-[2px]">
              <GraduationCap className="w-3.5 h-3.5" />
              Pôle Formation Professionnelle
            </div>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold uppercase tracking-tight text-white">
              Formation en Sécurité & Sûreté
            </h1>
            <p className="text-base text-gray-300 leading-relaxed">
              Participes à nos programmes de formation destinés à éduquer et préparer tout individu ou équipe face aux risques associés à la sécurité physique.
            </p>
          </div>
        </div>
      </section>

      {/* Main Philosophy */}
      <section className="bg-white py-16 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h2 className="font-heading text-3xl font-bold uppercase text-navy-900">
                Des Formations Dispensées par des Experts du Terrain
              </h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Le pôle formation d&apos;ATHENA SECURITY SARL est encadré par notre Fondateur et des instructeurs expérimentés issus des forces armées et du secteur bancaire. Notre approche pédagogique associe <strong>30% d&apos;apports théoriques</strong> et <strong>70% de mises en situation réelles</strong>.
              </p>
              <div className="p-4 bg-gray-50 border-l-4 border-blue-accent text-xs sm:text-sm text-gray-800 font-medium">
                « Éduquer et préparer pour transformer la vigilance en réflexe naturel face à la menace. »
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-6 bg-navy-900 text-white border border-navy-700 rounded-[2px] space-y-4">
                <h3 className="font-heading text-lg uppercase text-blue-accent">
                  Informations Pratiques
                </h3>
                <ul className="space-y-3 text-xs text-gray-300">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-accent shrink-0" />
                    Sessions intra-entreprise dans vos locaux ou en centre de formation à Ouagadougou.
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-accent shrink-0" />
                    Attestation de stage délivrée à chaque participant en fin de module.
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-accent shrink-0" />
                    Programmes personnalisés selon votre secteur d&apos;activité.
                  </li>
                </ul>
                <div className="pt-2">
                  <Button href="/contact?service=formation-securite" variant="accent" size="md" className="w-full">
                    Demander un catalogue de formation
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modules List */}
      <section className="bg-gray-50 py-16 sm:py-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-heading uppercase tracking-widest text-blue-accent">
              Modules Disponibles
            </span>
            <h2 className="font-heading text-3xl font-bold uppercase text-navy-900">
              Nos Modules de Formation de Sécurité
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trainingModules.map((module, idx) => (
              <div
                key={idx}
                className="bg-white p-7 border border-gray-200 rounded-[2px] space-y-4 shadow-xs flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="text-xs font-heading uppercase text-blue-accent font-bold">
                    Durée indicative : {module.duration}
                  </span>
                  <h3 className="font-heading text-xl uppercase text-navy-900 border-b border-gray-100 pb-2">
                    {module.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    {module.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 space-y-3">
                  <div className="text-xs text-gray-600">
                    <strong className="text-navy-900">Public cible :</strong> {module.audience}
                  </div>
                  <Button href={`/contact?service=formation-securite&module=${encodeURIComponent(module.title)}`} variant="secondary" size="sm" className="w-full">
                    Inscrire une équipe
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
