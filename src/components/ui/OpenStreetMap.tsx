"use client";

import React, { useState } from "react";
import { MapPin, ShieldCheck, ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { Button } from "@/components/ui/Button";

export const OpenStreetMap: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  const lat = SITE_CONFIG.contact.address.coordinates.lat;
  const lng = SITE_CONFIG.contact.address.coordinates.lng;

  // OpenStreetMap embed URL for Somgandé, Ouagadougou
  const mapUrl = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.02}%2C${lat - 0.02}%2C${lng + 0.02}%2C${lat + 0.02}&layer=mapnik&marker=${lat}%2C${lng}`;

  return (
    <div className="w-full bg-navy-900 border border-navy-700 rounded-[2px] overflow-hidden shadow-md">
      {!isLoaded ? (
        <div className="relative min-h-[340px] flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-navy-900 to-navy-800 border border-navy-700">
          <div className="w-16 h-16 bg-navy-800 border-2 border-blue-accent rounded-full flex items-center justify-center mb-4 text-blue-accent shadow-lg">
            <MapPin className="w-8 h-8" />
          </div>
          <h4 className="font-heading text-lg text-white uppercase tracking-wider mb-2">
            Localisation - Somgandé, Ouagadougou
          </h4>
          <p className="text-xs text-gray-300 max-w-md mb-6 leading-relaxed">
            Pour respecter votre vie privée et optimiser la vitesse d'affichage sur réseau mobile, la carte interactive s'affiche uniquement à votre demande.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Button
              onClick={() => setIsLoaded(true)}
              variant="accent"
              size="md"
              icon={<MapPin className="w-4 h-4" />}
            >
              Charger la carte interactive
            </Button>
            <a
              href={`https://www.openstreetmap.org/?mlat=${lat}&mlon=${lng}#map=15/${lat}/${lng}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-300 hover:text-white underline inline-flex items-center gap-1 py-2 px-3"
            >
              Ouvrir dans OpenStreetMap
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      ) : (
        <div className="relative w-full h-[400px]">
          <iframe
            title="Carte du Quartier Somgandé - ATHENA SECURITY"
            width="100%"
            height="100%"
            frameBorder="0"
            scrolling="no"
            marginHeight={0}
            marginWidth={0}
            src={mapUrl}
            className="w-full h-full border-0 filter grayscale contrast-125 opacity-90"
            loading="lazy"
          />
          <div className="absolute bottom-3 left-3 bg-navy-900/90 backdrop-blur-xs text-white text-xs px-3 py-1.5 border border-navy-700 rounded-[2px] flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-blue-accent" />
            <span>ATHENA SECURITY SARL • Somgandé, Ouagadougou</span>
          </div>
        </div>
      )}
    </div>
  );
};
