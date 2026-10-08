"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { CheckCircle2, AlertCircle, Send, Shield, Lock } from "lucide-react";
import { SERVICES_DATA } from "@/data/servicesData";
import { Button } from "@/components/ui/Button";

interface DevisFormProps {
  preselectedService?: string;
  className?: string;
}

function DevisFormContent({ preselectedService = "", className = "" }: DevisFormProps) {
  const searchParams = useSearchParams();
  const serviceFromQuery = searchParams.get("service") || preselectedService;

  const [formData, setFormData] = useState({
    fullName: "",
    organization: "",
    phone: "",
    email: "",
    service: serviceFromQuery || SERVICES_DATA[0].id,
    siteType: "Siège d'entreprise / Bureaux",
    city: "Ouagadougou",
    message: "",
    websiteHoneypot: "", // Anti-spam Honeypot field
  });

  useEffect(() => {
    if (serviceFromQuery) {
      setFormData((prev) => ({ ...prev, service: serviceFromQuery }));
    }
  }, [serviceFromQuery]);

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    if (formData.websiteHoneypot) {
      setStatus("success");
      return;
    }

    try {
      const response = await fetch("/api/devis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Une erreur est survenue lors de l'envoi de votre demande.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Impossible de contacter le serveur. Veuillez vérifier votre connexion ou nous contacter par téléphone.");
    }
  };

  if (status === "success") {
    return (
      <div className={`bg-navy-900 border border-navy-700 text-white p-8 rounded-[2px] shadow-lg text-center space-y-4 ${className}`}>
        <div className="w-16 h-16 bg-emerald-900/60 border border-emerald-500 rounded-full flex items-center justify-center mx-auto text-emerald-400">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h3 className="font-heading text-2xl uppercase tracking-wider text-white">
          Demande de Devis Transmise !
        </h3>
        <p className="text-sm text-gray-300 max-w-lg mx-auto leading-relaxed">
          Merci <strong className="text-white">{formData.fullName}</strong>. Votre demande de cotation pour le service <strong className="text-blue-accent">{SERVICES_DATA.find(s => s.id === formData.service)?.title || formData.service}</strong> a bien été enregistrée par le service commercial ATHENA SECURITY.
        </p>
        <div className="p-4 bg-navy-800 border border-navy-700 rounded-[2px] text-xs text-gray-300 max-w-md mx-auto">
          Un responsable opérationnel vous recontactera sous <strong>24 heures ouvrées</strong> aux coordonnées indiquées (<strong className="text-white">{formData.phone}</strong> / <strong className="text-white">{formData.email}</strong>).
        </div>
        <div className="pt-4">
          <Button
            onClick={() => {
              setStatus("idle");
              setFormData({
                fullName: "",
                organization: "",
                phone: "",
                email: "",
                service: SERVICES_DATA[0].id,
                siteType: "Siège d'entreprise / Bureaux",
                city: "Ouagadougou",
                message: "",
                websiteHoneypot: "",
              });
            }}
            variant="outline"
            size="sm"
          >
            Soumettre une autre demande
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`bg-white border border-gray-200 p-6 sm:p-8 rounded-[2px] shadow-sm space-y-5 ${className}`}>
      <div className="border-b border-gray-100 pb-4">
        <h3 className="font-heading text-xl uppercase tracking-wider text-navy-900 flex items-center gap-2">
          <Shield className="w-5 h-5 text-blue-accent" />
          Demande de Devis de Sûreté Gratuit
        </h3>
        <p className="text-xs text-gray-600 mt-1">
          Remplissez ce formulaire pour recevoir une étude de faisabilité et une cotation financière sur mesure sous 24h.
        </p>
      </div>

      {status === "error" && (
        <div className="p-4 bg-red-50 border-l-4 border-red-600 text-red-800 text-xs flex items-start gap-3 rounded-[2px]">
          <AlertCircle className="w-5 h-5 shrink-0 text-red-600 mt-0.5" />
          <div>
            <strong className="block font-semibold">Erreur de transmission :</strong>
            <span>{errorMessage}</span>
          </div>
        </div>
      )}

      {/* Spam Honeypot Field (hidden) */}
      <div className="hidden" aria-hidden="true">
        <input
          type="text"
          name="websiteHoneypot"
          value={formData.websiteHoneypot}
          onChange={handleChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-xs font-heading uppercase text-navy-900 mb-1">
            Nom et Prénom <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Ex: Paul OUÉDRAOGO"
            className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[2px] focus:bg-white focus:border-blue-accent focus:outline-hidden transition-colors"
          />
        </div>

        {/* Organization */}
        <div>
          <label htmlFor="organization" className="block text-xs font-heading uppercase text-navy-900 mb-1">
            Entreprise / Institution / Organisme
          </label>
          <input
            type="text"
            id="organization"
            name="organization"
            value={formData.organization}
            onChange={handleChange}
            placeholder="Ex: Société X / Particulier"
            className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[2px] focus:bg-white focus:border-blue-accent focus:outline-hidden transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-xs font-heading uppercase text-navy-900 mb-1">
            Téléphone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="Ex: +226 70 00 00 00"
            className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[2px] focus:bg-white focus:border-blue-accent focus:outline-hidden transition-colors"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-xs font-heading uppercase text-navy-900 mb-1">
            Adresse E-mail <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="Ex: direction@entreprise.bf"
            className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[2px] focus:bg-white focus:border-blue-accent focus:outline-hidden transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Service Dropdown */}
        <div className="sm:col-span-2">
          <label htmlFor="service" className="block text-xs font-heading uppercase text-navy-900 mb-1">
            Service Souhaité <span className="text-red-500">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[2px] focus:bg-white focus:border-blue-accent focus:outline-hidden transition-colors"
          >
            {SERVICES_DATA.map((service) => (
              <option key={service.id} value={service.id}>
                {service.title}
              </option>
            ))}
          </select>
        </div>

        {/* City */}
        <div>
          <label htmlFor="city" className="block text-xs font-heading uppercase text-navy-900 mb-1">
            Ville / Localité <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="city"
            name="city"
            required
            value={formData.city}
            onChange={handleChange}
            placeholder="Ex: Ouagadougou"
            className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[2px] focus:bg-white focus:border-blue-accent focus:outline-hidden transition-colors"
          />
        </div>
      </div>

      {/* Site Type */}
      <div>
        <label htmlFor="siteType" className="block text-xs font-heading uppercase text-navy-900 mb-1">
          Type de Site à Sécuriser
        </label>
        <select
          id="siteType"
          name="siteType"
          value={formData.siteType}
          onChange={handleChange}
          className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[2px] focus:bg-white focus:border-blue-accent focus:outline-hidden transition-colors"
        >
          <option value="Siège d'entreprise / Bureaux">Siège d'entreprise / Bureaux</option>
          <option value="Banque / Agence financière">Banque / Établissement financier</option>
          <option value="Site industriel / Entrepôt">Site industriel / Entrepôt</option>
          <option value="Résidence privée / Ambassade">Résidence privée / Villa / Ambassade</option>
          <option value="Chantier de construction">Chantier de construction</option>
          <option value="Événementiel / Rassemblement">Événement / Rassemblement public</option>
          <option value="Autre type de site">Autre installation</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-xs font-heading uppercase text-navy-900 mb-1">
          Détails de votre demande <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Décrivez brièvement le nombre de postes d'agents souhaité, la plage horaire (jour/nuit), ou les équipements nécessaires..."
          className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[2px] focus:bg-white focus:border-blue-accent focus:outline-hidden transition-colors"
        />
      </div>

      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 text-xs text-gray-500">
          <Lock className="w-3.5 h-3.5 text-blue-accent" />
          <span>Données traitées en toute confidentialité.</span>
        </div>

        <Button
          type="submit"
          variant="accent"
          size="lg"
          disabled={status === "submitting"}
          icon={<Send className="w-4 h-4" />}
          iconPosition="right"
          className="w-full sm:w-auto"
        >
          {status === "submitting" ? "Transmission..." : "Envoyer ma demande de devis"}
        </Button>
      </div>
    </form>
  );
}

export const DevisForm: React.FC<DevisFormProps> = (props) => {
  return (
    <Suspense fallback={<div className="p-8 text-center bg-white border border-gray-200 rounded-[2px]">Chargement du formulaire...</div>}>
      <DevisFormContent {...props} />
    </Suspense>
  );
};
