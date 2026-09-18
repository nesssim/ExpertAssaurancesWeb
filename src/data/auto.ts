import type { Product } from "@/lib/types/product";

export const autoProduct: Product = {
  id: "auto",
  name: "Assurance Auto",
  slug: "assurance-auto",
  tagline: "Protégez votre véhicule avec une couverture adaptée",
  description:
    "Trouvez l'assurance auto idéale parmi nos 3 formules. De la responsabilité civile à la couverture tous risques, nous avons la solution qu'il vous faut.",
  icon: "car",
  formulas: [
    {
      id: "tiers",
      name: "Tiers",
      tagline: "L'essentiel à prix doux",
      price: 29,
      guarantees: [
        { name: "Responsabilité civile", description: "Obligatoire, couvre les dommages causés aux tiers", included: true },
        { name: "Assistance 24h/24", description: "Dépannage et remorquage en panne ou accident", included: true },
        { name: "Bris de glace", description: "Réparation ou remplacement de vos vitres", included: false },
        { name: "Vol", description: "Indemnisation en cas de vol ou tentative de vol", included: false },
        { name: "Incendie", description: "Couverture des dommages par incendie", included: false },
        { name: "Gardiennage", description: "Protection du véhicule stationné", included: false },
      ],
    },
    {
      id: "tous-risques",
      name: "Tous Risques",
      tagline: "Une protection complète",
      price: 49,
      popular: true,
      guarantees: [
        { name: "Responsabilité civile", description: "Obligatoire, couvre les dommages causés aux tiers", included: true },
        { name: "Assistance 24h/24", description: "Dépannage et remorquage en panne ou accident", included: true },
        { name: "Bris de glace", description: "Réparation ou remplacement de vos vitres", included: true },
        { name: "Vol", description: "Indemnisation en cas de vol ou tentative de vol", included: true },
        { name: "Incendie", description: "Couverture des dommages par incendie", included: true },
        { name: "Gardiennage", description: "Protection du véhicule stationné", included: false },
      ],
    },
    {
      id: "tous-risques-maxi",
      name: "Tous Risques Maxi",
      tagline: "La sérénité absolue",
      price: 69,
      guarantees: [
        { name: "Responsabilité civile", description: "Obligatoire, couvre les dommages causés aux tiers", included: true },
        { name: "Assistance 24h/24", description: "Dépannage et remorquage en panne ou accident", included: true },
        { name: "Bris de glace", description: "Réparation ou remplacement de vos vitres", included: true },
        { name: "Vol", description: "Indemnisation en cas de vol ou tentative de vol", included: true },
        { name: "Incendie", description: "Couverture des dommages par incendie", included: true },
        { name: "Gardiennage", description: "Protection du véhicule stationné", included: true },
      ],
    },
  ],
  guaranteesExplainer: [
    { name: "Responsabilité civile", description: "Obligatoire par la loi. Elle couvre les dommages que vous causez aux autres conducteurs, passagers ou piétons. C'est la base de toute assurance auto.", icon: "shield" },
    { name: "Assistance 24h/24", description: "En cas de panne ou d'accident, vous êtes dépanné et remorqué. Assistance disponible 24h/24 et 7j/7 sur tout le territoire.", icon: "headphones" },
    { name: "Bris de glace", description: "Réparation ou remplacement de vos pare-brise, vitres et lunettes arrière. Couverture sans franchise dans la plupart des cas.", icon: "glass" },
    { name: "Vol", description: "En cas de vol ou de tentative de vol, vous êtes indemnisé selon la valeur de votre véhicule. Franchise réduite avec nos formules premium.", icon: "lock" },
    { name: "Incendie", description: "Protection en cas d'incendie de votre véhicule, qu'il soit stationné ou en déplacement. Couvre les dommages matériels.", icon: "flame" },
    { name: "Gardiennage", description: "Protection de votre véhicule lorsqu'il est stationné dans un lieu public ou privé. Couvre les tentatives de vol et les dégradations.", icon: "eye" },
  ],
};
