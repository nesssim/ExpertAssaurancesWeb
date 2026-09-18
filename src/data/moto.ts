import type { Product } from "@/lib/types/product";

export const motoProduct: Product = {
  id: "moto",
  name: "Assurance Moto",
  slug: "assurance-moto",
  tagline: "Roulez l'esprit tranquille",
  description:
    "Assurance moto sur-mesure pour tous les deux-roues. Du scooter au trail, choisissez la formule qui vous correspond.",
  icon: "bike",
  formulas: [
    {
      id: "tiers",
      name: "Tiers",
      tagline: "L'essentiel pour rouler",
      price: 19,
      guarantees: [
        { name: "Responsabilité civile", description: "Obligatoire, couvre les dommages causés aux tiers", included: true },
        { name: "Assistance 24h/24", description: "Dépannage en cas de panne ou accident", included: true },
        { name: "Bris de glace", description: "Protection de votre pare-brise", included: false },
        { name: "Vol", description: "Indemnisation en cas de vol", included: false },
        { name: "Sécurité conducteur", description: "Protection du conducteur en cas d'accident", included: false },
      ],
    },
    {
      id: "tous-risques",
      name: "Tous Risques",
      tagline: "Protection complète",
      price: 39,
      popular: true,
      guarantees: [
        { name: "Responsabilité civile", description: "Obligatoire, couvre les dommages causés aux tiers", included: true },
        { name: "Assistance 24h/24", description: "Dépannage en cas de panne ou accident", included: true },
        { name: "Bris de glace", description: "Protection de votre pare-brise", included: true },
        { name: "Vol", description: "Indemnisation en cas de vol", included: true },
        { name: "Sécurité conducteur", description: "Protection du conducteur en cas d'accident", included: false },
      ],
    },
    {
      id: "tous-risques-etendu",
      name: "Tous Risques Étendu",
      tagline: "La totale, pour les passionnés",
      price: 55,
      guarantees: [
        { name: "Responsabilité civile", description: "Obligatoire, couvre les dommages causés aux tiers", included: true },
        { name: "Assistance 24h/24", description: "Dépannage en cas de panne ou accident", included: true },
        { name: "Bris de glace", description: "Protection de votre pare-brise", included: true },
        { name: "Vol", description: "Indemnisation en cas de vol", included: true },
        { name: "Sécurité conducteur", description: "Protection du conducteur en cas d'accident", included: true },
      ],
    },
  ],
  guaranteesExplainer: [
    { name: "Responsabilité civile", description: "Obligatoire. Couvre les dommages que vous causez à d'autres conducteurs, piétons ou passagers.", icon: "shield" },
    { name: "Assistance 24h/24", description: "Dépannage et remorquage en cas de panne mécanique ou d'accident, où que vous soyez.", icon: "headphones" },
    { name: "Bris de glace", description: "Réparation ou remplacement de votre pare-brise et écrans en cas de bris.", icon: "glass" },
    { name: "Vol", description: "Indemnisation en cas de vol ou de tentative de vol de votre deux-roues.", icon: "lock" },
    { name: "Sécurité conducteur", description: "Protection financière en cas d'accident : indemnisation forfaitaire ou capital.", icon: "heart" },
  ],
};
