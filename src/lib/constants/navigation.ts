import type { NavItem } from "@/lib/types/product";

export const navigation: NavItem[] = [
  { label: "Auto", href: "/assurance-auto" },
  { label: "Habitation", href: "/assurance-habitation" },
  { label: "Moto", href: "/assurance-moto" },
  { label: "Santé", href: "/assurance-sante" },
];

export const utilityLinks: NavItem[] = [
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
  { label: "Sinistre", href: "/sinistre", isAccent: true },
];
