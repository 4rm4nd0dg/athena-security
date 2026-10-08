# ATHENA SECURITY SARL - Site Vitrine Institutionnel

Site web officiel d'**ATHENA SECURITY SARL**, société de sûreté et de sécurité privée basée à Somgandé, Ouagadougou (Burkina Faso).

Conçu et développé par un directeur artistique et lead développeur front-end avec **Next.js 14 (App Router)**, **TypeScript** et **Tailwind CSS** personnalisés sur mesure.

---

## 🛡️ IDENTITÉ ET DONNÉES DE L'ENTREPRISE

- **Nom légal** : ATHENA SECURITY SARL
- **Slogan principal** : « La vigilance au service de votre sécurité »
- **Slogan secondaire** : « ATHENA, le garant de votre quiétude et de votre tranquillité »
- **Infoline 24h/24** : +226 76 00 65 03 / +226 70 69 46 55
- **Email officiel** : `athenasecurit@gmail.com`
- **Siège social** : Somgandé, Ouagadougou, Burkina Faso

---

## 🚀 INSTALLATION ET DÉMARRAGE LOCAL

### 1. Prérequis
- Node.js version 18.17+ ou 20+
- npm (v10 ou v11)

### 2. Installation des dépendances
```bash
npm install
```

### 3. Lancement du serveur de développement
```bash
npm run dev
```
Ouvrez votre navigateur sur [http://localhost:3000](http://localhost:3000).

### 4. Build de Production & Test SSG
```bash
npm run build
npm start
```

---

## 🛠️ ARCHITECTURE DU CODE ET MODIFICATION DES CONTENUS

Le projet est conçu de manière modulaire, séparant le code des données métier :

```
ATHENA SECURITY/
├── public/
│   └── images/                       # Logotypes et visuels officiels des brochures
├── src/
│   ├── app/
│   │   ├── page.tsx                  # Page d'accueil (6 sections ordonnées)
│   │   ├── a-propos/page.tsx         # Présentation, fondateur et valeurs
│   │   ├── services/                 # Vue d'ensemble & sous-pages dynamiques
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx       # Fiche individuelle pour chacun des 6 services
│   │   ├── equipements/page.tsx      # Catalogue du matériel (Garrett, Energizer, etc.)
│   │   ├── formation/page.tsx        # Programmes de formation physique & sûreté
│   │   ├── contact/page.tsx          # Canaux directs, DevisForm & carte Somgandé
│   │   ├── mentions-legales/         # Mentions légales et réglementation
│   │   ├── politique-de-confidentialite/ # Confidentialité et RGPD
│   │   ├── not-found.tsx             # Page 404 sur mesure
│   │   ├── sitemap.ts                # Génération dynamique du sitemap SEO
│   │   └── robots.ts                 # Directives robots.txt
│   ├── components/
│   │   ├── forms/DevisForm.tsx       # Formulaire de devis avec Honeypot anti-spam
│   │   ├── layout/Header.tsx         # Banner permanent 24h/24 & menu mobile
│   │   ├── layout/Footer.tsx         # Pied de page institutionnel
│   │   └── ui/                       # Composants réutilisables (Button, OpenStreetMap, etc.)
│   └── data/
│       ├── siteConfig.ts             # Coordonnées, slogans, fondateur, étapes
│       ├── servicesData.ts           # Fiches complètes des 6 services
│       └── equipmentsData.ts         # Fiches matériel et spécifications
└── .env.example                      # Modèle des variables d'environnement
```

### Comment modifier les textes et coordonnées ?
- **Coordonnées, téléphones, emails, slogans, fondateur** : Éditez [src/data/siteConfig.ts](file:///c:/Users/pc/Desktop/PROJETS/ATHENA%20SECURITY/src/data/siteConfig.ts).
- **Services (descriptions, workflows, bénéfices)** : Éditez [src/data/servicesData.ts](file:///c:/Users/pc/Desktop/PROJETS/ATHENA%20SECURITY/src/data/servicesData.ts).
- **Catalogue des équipements** : Éditez [src/data/equipmentsData.ts](file:///c:/Users/pc/Desktop/PROJETS/ATHENA%20SECURITY/src/data/equipmentsData.ts).

---

## 🌐 DÉPLOIEMENT SUR VERCEL OU NETLIFY

### Option 1 : Déploiement Vercel (Recommandé)
1. Installez Vercel CLI ou connectez votre dépôt GitHub à Vercel.
2. Exécutez `vercel` ou validez l'importation.
3. Renseignez les variables d'environnement listées dans `.env.example`.

### Option 2 : Déploiement Netlify
1. Créez un nouveau site depuis le dépôt Git.
2. Commande de build : `npm run build`
3. Répertoire de publication : `.next` (ou export HTML statique si désiré).

---

## 📑 LISTE DES MARQUEURS `[À COMPLÉTER PAR LE CLIENT]`

Conformément à la charte de rigueur professionnelle, aucune donnée non vérifiée n'a été inventée. Les éléments ci-dessous contiennent un marqueur dans le code et les fiches :

1. **Numéro d'Agrément Ministériel** (`[À COMPLÉTER PAR LE CLIENT]`) - *Mentions légales, Page À propos & Bloc Réassurance*
2. **Année exacte de création** (`[À COMPLÉTER PAR LE CLIENT]`) - *Mentions légales & Page À propos*
3. **Effectif exact d'agents de sécurité** (`[À COMPLÉTER PAR LE CLIENT]`) - *Bloc Réassurance Accueil*
4. **Numéro d'immatriculation RCCM & IFU** (`[À COMPLÉTER PAR LE CLIENT]`) - *Mentions légales*
5. **URL exacte de la page Facebook officielle** (`[À COMPLÉTER PAR LE CLIENT]`) - *Fichier `siteConfig.ts` & Footer*
