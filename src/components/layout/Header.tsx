"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, Mail, MapPin, Menu, X, ShieldAlert, ChevronDown } from "lucide-react";
import { SITE_CONFIG } from "@/data/siteConfig";
import { SERVICES_DATA } from "@/data/servicesData";
import { Button } from "@/components/ui/Button";

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/a-propos" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Équipements", href: "/equipements" },
    { name: "Formation", href: "/formation" },
    { name: "Contact & Devis", href: "/contact" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 bg-white border-b border-gray-200 shadow-xs">
      {/* Skip to Content Link for Keyboard Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-accent focus:text-white focus:font-medium focus:rounded-[2px]"
      >
        Aller au contenu principal
      </a>

      {/* Top Permanent Emergency Banner - 24/7 Infoline */}
      <div className="bg-navy-900 text-white text-xs py-2 px-4 border-b border-navy-700">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-red-600/90 text-white font-heading font-medium tracking-wider text-[11px] rounded-[2px]">
              <ShieldAlert className="w-3 h-3 animate-pulse" />
              URGENCE 24H/24
            </span>
            <span className="text-gray-300 hidden sm:inline">|</span>
            <a
              href={`tel:${SITE_CONFIG.contact.phonePrimaryRaw}`}
              className="hover:text-blue-accent transition-colors flex items-center gap-1 font-semibold text-white"
            >
              <Phone className="w-3.5 h-3.5 text-blue-accent" />
              {SITE_CONFIG.contact.phonePrimary}
            </a>
            <span className="text-gray-400">/</span>
            <a
              href={`tel:${SITE_CONFIG.contact.phoneSecondaryRaw}`}
              className="hover:text-blue-accent transition-colors font-semibold text-white"
            >
              {SITE_CONFIG.contact.phoneSecondary}
            </a>
          </div>

          <div className="hidden md:flex items-center gap-4 text-gray-300 text-xs">
            <a
              href={`mailto:${SITE_CONFIG.contact.email}`}
              className="hover:text-blue-accent transition-colors flex items-center gap-1"
            >
              <Mail className="w-3.5 h-3.5 text-blue-accent" />
              {SITE_CONFIG.contact.email}
            </a>
            <span className="text-navy-700">•</span>
            <span className="flex items-center gap-1 text-gray-300">
              <MapPin className="w-3.5 h-3.5 text-blue-accent" />
              {SITE_CONFIG.contact.address.full}
            </span>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Accueil ATHENA SECURITY SARL">
            <div className="relative w-12 h-14 shrink-0 transition-transform group-hover:scale-105">
              <Image
                src="/images/logo-athena-transparent.png"
                alt="Logo Écusson ATHENA SECURITY"
                fill
                sizes="48px"
                className="object-contain drop-shadow-xs"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-navy-900 leading-none">
                ATHENA <span className="text-blue-accent">SECURITY</span>
              </span>
              <span className="text-[10px] font-semibold tracking-widest text-gray-500 uppercase mt-0.5">
                SARL • Ouagadougou
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              if (link.hasDropdown) {
                return (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1 font-heading text-sm uppercase tracking-wider py-2 transition-colors ${
                        pathname.startsWith("/services")
                          ? "text-blue-accent font-bold border-b-2 border-blue-accent"
                          : "text-navy-900 hover:text-blue-accent"
                      }`}
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-blue-accent transition-transform group-hover:rotate-180" />
                    </Link>

                    {/* Services Sub-Menu Dropdown */}
                    <div className="absolute top-full left-0 w-80 bg-white border border-gray-200 shadow-xl rounded-[2px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 py-2">
                      <div className="px-4 py-2 border-b border-gray-100 bg-gray-50">
                        <span className="text-xs font-heading uppercase text-navy-800 tracking-wider">
                          Nos 6 Prestations de Sûreté
                        </span>
                      </div>
                      {SERVICES_DATA.map((service) => (
                        <Link
                          key={service.id}
                          href={`/services/${service.slug}`}
                          className="block px-4 py-2.5 text-xs font-medium text-gray-800 hover:bg-navy-800 hover:text-white transition-colors"
                        >
                          {service.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-heading text-sm uppercase tracking-wider py-2 transition-colors relative ${
                    isActive
                      ? "text-blue-accent font-bold border-b-2 border-blue-accent"
                      : "text-navy-900 hover:text-blue-accent"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button href="/contact" variant="accent" size="sm">
              Demander un Devis
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={`tel:${SITE_CONFIG.contact.phonePrimaryRaw}`}
              className="p-2 bg-blue-accent text-white rounded-[2px] text-xs font-bold flex items-center gap-1"
              aria-label="Appeler d'urgence ATHENA SECURITY"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-navy-900 hover:bg-gray-100 focus:outline-hidden rounded-[2px]"
              aria-expanded={mobileMenuOpen}
              aria-label="Ouvrir le menu principal"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-navy-900 text-white border-t border-navy-700 px-4 pt-4 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`font-heading text-base uppercase tracking-wider py-2 px-3 rounded-[2px] transition-colors ${
                    isActive
                      ? "bg-blue-accent text-white font-bold"
                      : "text-gray-200 hover:bg-navy-800 hover:text-white"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          <div className="border-t border-navy-700 pt-3 space-y-2 text-xs text-gray-300">
            <div className="font-heading uppercase text-blue-accent text-xs tracking-wider">
              Services Directs :
            </div>
            <div className="grid grid-cols-1 gap-1 pl-2">
              {SERVICES_DATA.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="py-1 text-gray-300 hover:text-white text-xs"
                >
                  • {service.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-2 flex flex-col gap-2">
            <Button href="/contact" variant="accent" size="md" className="w-full">
              Demander un devis gratuit
            </Button>
            <a
              href={`tel:${SITE_CONFIG.contact.phonePrimaryRaw}`}
              className="w-full py-2.5 px-4 bg-navy-800 text-center text-xs font-heading uppercase tracking-wider text-white border border-navy-700 rounded-[2px] flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-blue-accent" />
              Appeler Infoline 24h/24
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
