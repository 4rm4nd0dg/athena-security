export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  targetAudience: string[];
  missionWorkflow: string[];
  concreteBenefits: string[];
  keyPoints: string[];
  iconName: string;
  image: string;
  badgeText?: string;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "gardiennage",
    slug: "gardiennage",
    title: "Gardiennage & Protection des Installations",
    shortDescription: "Avec nos agents compétents, nous assurons la protection de vos biens et de vos installations, à tout moment.",
    fullDescription: "Le service de gardiennage d'ATHENA SECURITY SARL repose sur la présence physique permanente d'agents de sécurité rigoureusement formés, disciplinés et contrôlés. Nous assurons le filtrage des accès, le contrôle des entrées/sorties, les rondes de surveillance et le maintien de l'ordre sur vos sites industriels, tertiaires, bancaires ou résidentiels. Nos agents sont distingués par leur discrétion, leur tenue réglementaire irréprochable et la maitrise des consignes d'intervention écrites.",
    targetAudience: [
      "Sièges d'entreprises, institutions et organismes internationaux",
      "Établissements bancaires et microfinances",
      "Sites industriels, entrepôts et chantiers de construction",
      "Complexes résidentiels, ambassades et propriétés privées",
      "Hôtels, centres commerciaux et établissements recevant du public"
    ],
    missionWorkflow: [
      "Prise de poste avec contrôle de la main-courante et inspection du périmètre",
      "Filtrage des personnes et des véhicules (contrôle d'identité, registre, détection de métaux)",
      "Rondes de sécurité régulières et aléatoires de jour comme de nuit",
      "Gestion des incidents légers et alerte immédiate du PC opérationnel ATHENA",
      "Relève réglementaire et transmission des consignes spécifiques"
    ],
    concreteBenefits: [
      "Dissuasion efficace contre les tentatives de vol, d'intrusion ou de vandalisme",
      "Permanence de la sécurité 24h/24 et 7j/7 sans interruption",
      "Supervision quotidienne par nos inspecteurs de rondes",
      "Maintien de la sérénité du personnel et des usagers du site"
    ],
    keyPoints: [
      "Agents formés et enregistrés",
      "Contrôles de rondes inopinés",
      "Uniformes & équipements réglementaires",
      "Procédure d'intervention écrite"
    ],
    iconName: "Shield",
    image: "/images/brochure-gardiennage-protection.jpeg"
  },
  {
    id: "protection-rapprochee",
    slug: "protection-rapprochee",
    title: "Protection Rapprochée de Personnalités",
    shortDescription: "Assurez la protection et la sécurité des personnalités grâce à nos spécialistes en diverses situations.",
    fullDescription: "La protection rapprochée par ATHENA SECURITY SARL est confiée à des garde du corps et gardes rapprochés d'élite, spécialement entraînés pour l'accompagnement de VIP, dirigeants d'entreprises, diplomates et personnalités publiques. Formés aux techniques de défense, d'évacuation d'urgence et de gestion du risque routier, nos spécialistes opèrent avec une discrétion totale ou une présence dissuasive selon le niveau de menace évalué.",
    targetAudience: [
      "Cadres dirigeants et délégués d'organisations internationales",
      "Personnalités politiques, diplomates et délégués étrangers en mission au Burkina Faso",
      "Hommes d'affaires et investisseurs en déplacement dans la sous-région",
      "Artistes, personnalités publiques et invités de marque d'événements majeurs"
    ],
    missionWorkflow: [
      "Évaluation préalable des risques et reconnaissance des itinéraires et lieux de destination",
      "Mise en place d'un dispositif de protection individuel ou en équipe (escorte)",
      "Accompagnement physique lors de tous les déplacements professionnels et privés",
      "Coordination permanente avec les services de transport sécurisé et les forces locales",
      "Débriefing quotidien et ajustement dynamique du protocole de sécurité"
    ],
    concreteBenefits: [
      "Sûreté personnelle garantie lors de vos déplacements à Ouagadougou et en province",
      "Discrétion absolue préservant votre image et votre sérénité",
      "Agents experts maîtrisant la gestion du stress et l'évacuation tactique",
      "Flexibilité totale selon vos impératifs d'agenda"
    ],
    keyPoints: [
      "Gardes rapprochés d'élite",
      "Reconnaissance préalable du terrain",
      "Maîtrise de la conduite défensive",
      "Discrétion professionnelle totale"
    ],
    iconName: "UserCheck",
    image: "/images/brochure-qui-sommes-nous.jpeg"
  },
  {
    id: "surveillance-intervention",
    slug: "surveillance-intervention",
    title: "Surveillance & Intervention Rapide",
    shortDescription: "Systèmes de surveillance appropriés et réactivité rapide en cas d'urgence pour assurer une sécurité constante. Notre point fort.",
    fullDescription: "Point fort historique d'ATHENA SECURITY SARL, notre service de surveillance et d'intervention combine la télésurveillance 24h/24 et la capacité de projection immédiate d'unités mobiles de patrouille. Dès déclenchement d'un signal d'alarme ou appel d'urgence, nos patrouilleurs interviennent sur le site en un temps record pour lever le doute, neutraliser les incidents et sécuriser les accès en attente des forces de l'ordre.",
    targetAudience: [
      "Agences bancaires, distributeurs automatiques et coffres-forts",
      "Entrepôts de marchandises de valeur et zones logistiques",
      "Commerces, pharmacies et boutiques de nuit",
      "Résidences privées équipées d'alarme ou de caméras"
    ],
    missionWorkflow: [
      "Surveillance continue du signal alarme / caméra par le Centre de Contrôle Operational",
      "Validation de l'alerte et transmission immédiate des coordonnées GPS à l'équipe mobile de secteur",
      "Déploiement d'urgence du véhicule de patrouille ATHENA sirène/gyrophare",
      "Levée de doute sur place, inspection du périmètre et sécurisation du site",
      "Rédaction immédiate d'un compte-rendu d'intervention et information du client"
    ],
    concreteBenefits: [
      "Temps de réaction ultra-court (point fort d'ATHENA SECURITY)",
      "Rondes de patrouille dissuasives de nuit",
      "Lien direct avec le Poste de Commandement 24h/24",
      "Réduction majeure du préjudice en cas de tentative d'intrusion"
    ],
    keyPoints: [
      "Point fort reconnu de l'entreprise",
      "Intervention mobile 24h/24",
      "Équipes de patrouille géolocalisées",
      "Procédure de levée de doute stricte"
    ],
    iconName: "Zap",
    image: "/images/brochure-qui-sommes-nous.jpeg",
    badgeText: "Point fort ATHENA"
  },
  {
    id: "equipements-securite",
    slug: "equipements-securite",
    title: "Fourniture d'Équipements de Sécurité",
    shortDescription: "Dispositifs et matériels de sécurité de haute qualité, à la pointe du progrès technologique.",
    fullDescription: "ATHENA SECURITY SARL sélectionne, fournit et installe du matériel de sécurité physique et électronique certifié aux normes internationales. Que ce soit pour la détection d'armes (détecteurs de métaux portatifs Garrett, portiques de sécurité), le contrôle d'accès (pointeuses biométriques), la protection périmétrique (barbelés concertina, cônes) ou la sécurité incendie (extincteurs), nous fournissons des équipements fiables adaptés aux exigences du terrain burkinabè.",
    targetAudience: [
      "Entreprises publiques et privées souhaitant moderniser leur équipement de sécurité",
      "Hotels, aéroports et lieux de grands rassemblements",
      "Sociétés de gestion immobilière et chantiers",
      "Particuliers et professionnels soucieux d'équiper leurs bâtiments"
    ],
    missionWorkflow: [
      "Audit matériel préalable pour dimensionner le besoin exact",
      "Fourniture d'équipements sous garantie constructeur (Garrett, Energizer, etc.)",
      "Installation et paramétrage sur site par nos techniciens spécialisés",
      "Formation de vos équipes ou de nos agents à l'utilisation du matériel",
      "Maintenance préventive et service après-vente dédié"
    ],
    concreteBenefits: [
      "Matériels testés et résistants aux conditions climatiques locales",
      "Garantie de qualité sur l'ensemble de la gamme (Garrett, pointeuses, EPI)",
      "Support technique rapide et pièces de rechange disponibles",
      "Solution clé en main incluant conseil, livraison et installation"
    ],
    keyPoints: [
      "Détecteurs Garrett originaux",
      "Portiques & pointeuses biométriques",
      "Extincteurs & protections incendie",
      "Barbelés, cônes & lampes Energizer"
    ],
    iconName: "ShieldCheck",
    image: "/images/pexels-ethangorosti-38768056.jpg"
  },
  {
    id: "formation-securite",
    slug: "formation-securite",
    title: "Formation en Sécurité & Sûreté",
    shortDescription: "Programmes de formation destinés à éduquer et préparer tout individu face aux risques associés à la sécurité physique.",
    fullDescription: "Compte tenu des enjeux de sécurité contemporains dans la sous-région, ATHENA SECURITY SARL propose des modules de formation théoriques et pratiques à destination du personnel d'entreprise, des agents de sécurité et des particuliers. Nos formateurs, experts issus du secteur militaire et de la sécurité privée, inculquent les réflexes de prévention, la gestion de crise, l'incendie et les gestes de premiers secours.",
    targetAudience: [
      "Agents de sécurité interne en entreprise ou futurs agents professionnels",
      "Personnel administratif, d'accueil et de direction des entreprises",
      "Organisations non gouvernementales (ONG) et projets de développement",
      "Établissements scolaires et universitaires"
    ],
    missionWorkflow: [
      "Identification des besoins de formation et évaluation du niveau initial des apprenants",
      "Élaboration d'un programme sur mesure (sensibilisation aux risques, posture, gestes d'urgence)",
      "Session de formation alternant théorie (30%) et mises en situation pratiques (70%)",
      "Évaluation finale des compétences et délivrance d'attestation de réussite",
      "Suivi post-formation et recyclages périodiques recommandés"
    ],
    concreteBenefits: [
      "Diminution drastique des comportements à risque au sein de vos équipes",
      "Préparation mentale et réflexes adéquats face aux intrusions ou débuts d'incendie",
      "Conformité avec les exigences de sécurité au travail",
      "Formateurs de haut niveau expérimentés en milieu militaire et international"
    ],
    keyPoints: [
      "Modules théoriques et exercices pratiques",
      "Sensibilisation au risque terroriste & braquage",
      "Secourisme & lutte contre l'incendie",
      "Formateurs d'expérience militaire & bancaire"
    ],
    iconName: "GraduationCap",
    image: "/images/brochure-qui-sommes-nous.jpeg"
  },
  {
    id: "audit-securite",
    slug: "audit-securite",
    title: "Audits & Évaluations de Sécurité",
    shortDescription: "Évaluations exhaustives de la sécurité de vos équipements et locaux afin d'identifier les vulnérabilités.",
    fullDescription: "L'audit de sécurité d'ATHENA SECURITY SARL est une expertise méthodologique complète réalisée par notre Directeur Général et nos experts en sûreté. Il s'agit d'une analyse rigoureuse des vulnérabilités physiques, humaines et organisationnelles de votre site. À l'issue de l'inspection, nous vous remettons un rapport confidentiel assorti de recommandations hiérarchisées et de solutions sur mesure.",
    targetAudience: [
      "Institutions bancaires et infrastructures critiques",
      "Immeubles de bureaux et sièges d'entreprises",
      "Résidences de hauts fonctionnaires et expatriés",
      "Sites industriels et dépôts de carburant/marchandises"
    ],
    missionWorkflow: [
      "Entretien préalable confidentiel et cartographie du périmètre d'étude",
      "Inspection physique exhaustive (points d'accès, clôtures, contrôle des flux, éclairage)",
      "Analyse des procédures existantes et tests d'intrusion passifs",
      "Rédaction d'un rapport d'audit détaillé avec matrice de risques",
      "Restitution orale au comité de direction et propositions d'optimisation"
    ],
    concreteBenefits: [
      "Vision claire et objective des failles de sécurité de vos locaux",
      "Plan d'action hiérarchisé évitant les investissements inutiles",
      "Optimisation des coûts de gardiennage et des technologies déployées",
      "Sécurisation conforme aux standards internationaux"
    ],
    keyPoints: [
      "Rapport confidentiel d'expertise",
      "Cartographie précise des failles",
      "Recommandations réalistes & chiffrées",
      "Réalisé par des experts armée/banque"
    ],
    iconName: "FileCheck",
    image: "/images/brochure-catalogue-services.jpeg"
  }
];
