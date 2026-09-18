export interface Guarantee {
  name: string;
  description: string;
  included: boolean;
  optional?: boolean;
}

export interface Formula {
  id: string;
  name: string;
  tagline: string;
  price?: number;
  guarantees: Guarantee[];
  popular?: boolean;
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  icon: string;
  formulas: Formula[];
  guaranteesExplainer: { name: string; description: string; icon: string }[];
}

export interface NavItem {
  label: string;
  href: string;
  isAccent?: boolean;
}
