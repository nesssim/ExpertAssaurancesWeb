import type { Product } from "@/lib/types/product";

export const habitationProduct: Product = {
  id: "habitation",
  name: "Assurance Habitation",
  slug: "assurance-habitation",
  tagline: "Votre logement mérite la meilleure protection",
  description:
    "Protégez votre maison ou votre appartement contre les aléas du quotidien. Nos formules s'adaptent à votre statut : locataire, propriétaire ou étudiant.",
  icon: "home",
  formulas: [
    {
      id: "essentielle",
      name: "Essentielle",
      tagline: "Les garanties de base",
      price: 12,
      guarantees: [
        { name: "Responsabilité civile", description: "Couvre les dommages causés aux tiers", included: true },
        { name: "Incendie", description: "Dommages causés par un incendie ou une explosion", included: true },
        { name: "Dégâts des eaux", description: "Fuites, dégâts accidentels de vos installations", included: true },
        { name: "Vol", description: "Indemnisation en cas de vol avec effraction", included: false },
        { name: "Bris de vitre", description: "Réparation ou remplacement de vos vitres", included: false },
        { name: "Événements climatiques", description: "Tempête, neige, grêle, inondation", included: false },
      ],
    },
    {
      id: "confort",
      name: "Confort",
      tagline: "Une protection élargie",
      price: 22,
      popular: true,
      guarantees: [
        { name: "Responsabilité civile", description: "Couvre les dommages causés aux tiers", included: true },
        { name: "Incendie", description: "Dommages causés par un incendie ou une explosion", included: true },
        { name: "Dégâts des eaux", description: "Fuites, dégâts accidentels de vos installations", included: true },
        { name: "Vol", description: "Indemnisation en cas de vol avec effraction", included: true },
        { name: "Bris de vitre", description: "Réparation ou remplacement de vos vitres", included: true },
        { name: "Événements climatiques", description: "Tempête, neige, grêle, inondation", included: false },
      ],
    },
    {
      id: "confort-plus",
      name: "Confort Plus",
      tagline: "Tous risques, zéro souci",
      price: 35,
      guarantees: [
        { name: "Responsabilité civile", description: "Couvre les dommages causés aux tiers", included: true },
        { name: "Incendie", description: "Dommages causés par un incendie ou une explosion", included: true },
        { name: "Dégâts des eaux", description: "Fuites, dégâts accidentels de vos installations", included: true },
        { name: "Vol", description: "Indemnisation en cas de vol avec effraction", included: true },
        { name: "Bris de vitre", description: "Réparation ou remplacement de vos vitres", included: true },
        { name: "Événements climatiques", description: "Tempête, neige, grêle, inondation", included: true },
      ],
    },
  ],
  guaranteesExplainer: [
    { name: "Responsabilité civile", description: "Protège contre les dommages que vous pourriez causer à vos voisins ou aux tiers dans votre logement.", icon: "shield" },
    { name: "Incendie", description: "Couvre les dégâts matériels causés par un incendie, une explosion ou la fumée.", icon: "flame" },
    { name: "Dégâts des eaux", description: "Intervention en cas de fuite d'eau, dégâts accidentels aux installations ou dégâts causés par le gel.", icon: "droplets" },
    { name: "Vol", description: "Indemnisation en cas de vol ou de tentative de vol avec effraction ou escalade.", icon: "lock" },
    { name: "Bris de vitre", description: "Réparation ou remplacement de vos vitres, miroirs et éléments en verre.", icon: "glass" },
    { name: "Événements climatiques", description: "Protection contre les dommages causés par la tempête, la neige, la grêle ou l'inondation.", icon: "cloud" },
  ],
};
