import type { Product } from "@/lib/types/product";

export const santeProduct: Product = {
  id: "sante",
  name: "Complémentaire Santé",
  slug: "assurance-sante",
  tagline: "Soins de qualité à prix maîtrisé",
  description:
    "Complémentaire santé flexible qui s'adapte à vos besoins. Réseau de soins conventionné, prise en charge rapide et tarifs négociés.",
  icon: "heart",
  formulas: [
    {
      id: "essentielle",
      name: "Essentielle",
      tagline: "Les bases pour votre santé",
      price: 35,
      guarantees: [
        { name: "Consultations", description: "Prise en charge des consultations généralistes et spécialistes", included: true },
        { name: "Pharmacie", description: "Remboursement des médicaments sur ordonnance", included: true },
        { name: "Optique", description: "Aide aux frais d'optique et de lentilles", included: false },
        { name: "Dentaire", description: "Soins dentaires courants et prothèses", included: false },
        { name: "Hospitalisation", description: "Chambre particulière et extras en cas d'hospitalisation", included: false },
      ],
    },
    {
      id: "confort",
      name: "Confort",
      tagline: "Une couverture étendue",
      price: 55,
      popular: true,
      guarantees: [
        { name: "Consultations", description: "Prise en charge des consultations généralistes et spécialistes", included: true },
        { name: "Pharmacie", description: "Remboursement des médicaments sur ordonnance", included: true },
        { name: "Optique", description: "Aide aux frais d'optique et de lentilles", included: true },
        { name: "Dentaire", description: "Soins dentaires courants et prothèses", included: true },
        { name: "Hospitalisation", description: "Chambre particulière et extras en cas d'hospitalisation", included: false },
      ],
    },
    {
      id: "premium",
      name: "Premium",
      tagline: "La sérénité totale",
      price: 85,
      guarantees: [
        { name: "Consultations", description: "Prise en charge des consultations généralistes et spécialistes", included: true },
        { name: "Pharmacie", description: "Remboursement des médicaments sur ordonnance", included: true },
        { name: "Optique", description: "Aide aux frais d'optique et de lentilles", included: true },
        { name: "Dentaire", description: "Soins dentaires courants et prothèses", included: true },
        { name: "Hospitalisation", description: "Chambre particulière et extras en cas d'hospitalisation", included: true },
      ],
    },
  ],
  guaranteesExplainer: [
    { name: "Consultations", description: "Remboursement des consultations médicales, spécialistes et examens de dépistage.", icon: "stethoscope" },
    { name: "Pharmacie", description: "Aide aux frais de médicaments sur ordonnance. Zéro avance de frais dans notre réseau.", icon: "pill" },
    { name: "Optique", description: "Prise en charge des verres, montures et lentilles. Forfait adapté à vos besoins.", icon: "glasses" },
    { name: "Dentaire", description: "Couverture des soins dentaires courants, couronnes et prothèses à tarifs négociés.", icon: "tooth" },
    { name: "Hospitalisation", description: "Chambre particulière, repas et accompagnant. Zéro reste à charge sur l'hospitalisation.", icon: "bed" },
  ],
};
