import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/data/siteConfig";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} | Gardiennage, Sûreté et Sécurité Privée - Ouagadougou`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description:
    "Société de sûreté et de sécurité privée à vocation sous-régionale basée à Somgandé, Ouagadougou. Gardiennage, protection rapprochée, surveillance & intervention 24h/24, fourniture d'équipements, audits et formations.",
  keywords: [
    "société de gardiennage Ouagadougou",
    "protection rapprochée Burkina Faso",
    "agent de sécurité Ouagadougou",
    "audit de sécurité Burkina",
    "formation sécurité Ouagadougou",
    "ATHENA SECURITY SARL",
    "sûreté privée Somgandé",
    "détecteur de métaux Garrett Burkina",
    "télésurveillance 24h 24 Ouagadougou",
  ],
  authors: [{ name: SITE_CONFIG.legalName }],
  creator: SITE_CONFIG.legalName,
  publisher: SITE_CONFIG.legalName,
  metadataBase: new URL("https://athenasecurity.bf"), // [À COMPLÉTER PAR LE CLIENT si domaine définitif différant]
  openGraph: {
    title: `${SITE_CONFIG.name} | Sûreté et Sécurité Privée Ouagadougou`,
    description: SITE_CONFIG.slogans.primary,
    url: "https://athenasecurity.bf",
    siteName: SITE_CONFIG.name,
    locale: "fr_BF",
    type: "website",
    images: [
      {
        url: "/images/logo-athena.jpeg",
        width: 600,
        height: 600,
        alt: "Logo Écusson ATHENA SECURITY SARL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.slogans.primary,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org LocalBusiness / SecurityService JSON-LD for Local SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SecurityService",
    "name": SITE_CONFIG.name,
    "legalName": SITE_CONFIG.legalName,
    "image": "https://athenasecurity.bf/images/logo-athena.jpeg",
    "description": SITE_CONFIG.slogans.primary,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Somgandé",
      "addressLocality": "Ouagadougou",
      "addressCountry": "BF"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": SITE_CONFIG.contact.address.coordinates.lat,
      "longitude": SITE_CONFIG.contact.address.coordinates.lng
    },
    "telephone": [SITE_CONFIG.contact.phonePrimary, SITE_CONFIG.contact.phoneSecondary],
    "email": SITE_CONFIG.contact.email,
    "openingHours": "Mo-Su 00:00-24:00",
    "priceRange": "$$"
  };

  return (
    <html
      lang="fr"
      className={`${inter.variable} ${oswald.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-gray-50 text-gray-900">
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
