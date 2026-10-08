export interface EquipmentItem {
  id: string;
  name: string;
  category: "detection" | "controle" | "agent" | "protection" | "surveillance";
  categoryLabel: string;
  description: string;
  features: string[];
  image: string;
}

export const EQUIPMENTS_DATA: EquipmentItem[] = [
  {
    id: "detecteur-garrett",
    name: "Détecteur de Métaux Manuel Garrett Super Scanner",
    category: "detection",
    categoryLabel: "Détection & Contrôle",
    description: "Le détecteur manuel de référence mondiale pour le filtrage rapide des personnes aux entrées d'établissements.",
    features: [
      "Détection haute sensibilité des armes et objets métalliques",
      "Signal sonore, visuel et mode vibreur discret",
      "Autonomie prolongée et boîtier antichoc renforcé",
      "Conforme aux standards de sécurité bancaire et aéroportuaire"
    ],
    image: "/images/brochure-equipements.jpeg"
  },
  {
    id: "portique-securite",
    name: "Portique de Détection Multi-Zones",
    category: "detection",
    categoryLabel: "Détection & Contrôle",
    description: "Portique de sécurité pour la détection systématique des masses métalliques et armes lors des accès à fort trafic.",
    features: [
      "Localisation précise de l'objet sur plusieurs zones verticales",
      "Comptage automatique des passages et des alarmes",
      "Immunité élevée contre les interférences environnementales",
      "Écran de contrôle et réglages de sensibilité programmables"
    ],
    image: "/images/brochure-equipements.jpeg"
  },
  {
    id: "pointeuse-biometrique",
    name: "Pointeuse Biométrique Empreinte & Badge",
    category: "controle",
    categoryLabel: "Contrôle d'Accès",
    description: "Terminal de gestion du temps et de contrôle d'accès sécurisé par empreinte digitale et carte de proximité.",
    features: [
      "Reconnaissance biométrique rapide (< 0,5 seconde)",
      "Mémoire de stockage importante (jusqu'à 3 000 empreintes)",
      "Extraction des données par réseau TCP/IP ou clé USB",
      "Historique infalsifiable des entrées/sorties du personnel"
    ],
    image: "/images/brochure-catalogue-services.jpeg"
  },
  {
    id: "lampe-energizer",
    name: "Lampe Tactique Professionnelle Energizer",
    category: "agent",
    categoryLabel: "Équipement d'Agent",
    description: "Lampe torche professionnelle étanche et ultra-lumineuse destinée aux rondes nocturnes et interventions d'urgence.",
    features: [
      "Faisceau LED puissant longue portée (jusqu'à 300 mètres)",
      "Corps renforcé en plastique technique antichoc",
      "Autonomie optimisée pour les postes de nuit de 12 heures",
      "Résistance aux intempéries et à la poussière"
    ],
    image: "/images/brochure-equipements.jpeg"
  },
  {
    id: "ceinturon-tactique",
    name: "Ceinturon de Sécurité & Holster d'Agent",
    category: "agent",
    categoryLabel: "Équipement d'Agent",
    description: "Ensemble ceinturon tactique renforcé avec étuis modulaires pour accessoires d'agent de sécurité.",
    features: [
      "Nylon haute densité 1000D résistant à l'usure",
      "Boucle de sécurité à double verrouillage",
      "Pochettes modulaires pour émetteur-récepteur, lampe et menottes",
      "Ergonomie étudiée pour le confort sur de longues gardes"
    ],
    image: "/images/brochure-equipements.jpeg"
  },
  {
    id: "barbele-concertina",
    name: "Barbelé de Haute Sécurité Concertina",
    category: "protection",
    categoryLabel: "Protection Périmétrique",
    description: "Lames de rasoir en acier galvanisé formant un réseau franchissable particulièrement dissuasif.",
    features: [
      "Acier inoxydable ou galvanisé à haute résistance à la coupe",
      "Installation sur murs d'enceinte, clôtures et portails",
      "Effet dissuasif physique et visuel maximal",
      "Traité contre la corrosion pour une longévité en milieu chaud"
    ],
    image: "/images/brochure-catalogue-services.jpeg"
  },
  {
    id: "cones-signalisation",
    name: "Cônes de Signalisation Reflex",
    category: "protection",
    categoryLabel: "Protection Périmétrique",
    description: "Cônes de balisage haute visibilité pour la canalisation du trafic et la délimitation des zones de contrôle.",
    features: [
      "Bandes réfléchissantes de classe 2 pour la nuit",
      "Base lourde incassable et stabilisée contre le vent",
      "Matériau PVC souple résistant aux chocs légers de véhicules",
      "Conformes aux normes de sécurité routière"
    ],
    image: "/images/brochure-catalogue-services.jpeg"
  },
  {
    id: "extincteur-securite",
    name: "Extincteurs Portatifs CO2 & Poudre ABC",
    category: "protection",
    categoryLabel: "Protection Incendie",
    description: "Matériel d'extinction d'urgence homologué pour la lutte contre les départs de feu dans les locaux.",
    features: [
      "Extincteurs à poudre polyvalente ABC et CO2 pour matériel électrique",
      "Manomètre de contrôle de pression intégré",
      "Support mural et signalétique incendie réglementaire inclus",
      "Maintenance annuelle et contrôle de validité assurés"
    ],
    image: "/images/brochure-catalogue-services.jpeg"
  },
  {
    id: "camera-surveillance",
    name: "Système de Caméras de Vidéosurveillance IP",
    category: "surveillance",
    categoryLabel: "Vidéosurveillance",
    description: "Caméras dômes et tubes avec vision nocturne infrarouge et enregistreur numérique NVR sécurisé.",
    features: [
      "Résolution Haute Définition avec vision nocturne 30m",
      "Boîtier étanche antivandale (norme IP67)",
      "Consultation à distance sécurisée sur smartphone / PC",
      "Enregistrement continu et détection de mouvement intelligente"
    ],
    image: "/images/brochure-catalogue-services.jpeg"
  }
];
