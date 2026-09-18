# Implementation Plan: Expert Assurance — Simplified Insurance Website

## Overview

Build a clean, professional French-language insurance website for "Expert Assurance" — a
**small-to-mid sized company** inspired by the Direct Assurance model. Pure front-office,
no login/backoffice. Simple pages, clear information, contact-based lead generation.

**Tech Stack:** Next.js 14+ (App Router) | TypeScript | Tailwind CSS
**Target:** 40–55 hours total

---

## Scope — Front-Office Only

- ❌ No login, backoffice, or client accounts
- ❌ No multi-step simulator (use contact/devis forms instead)
- ❌ No blog (add later if needed)
- ❌ No mobile app pages
- All CTAs → contact forms or phone calls

---

## Brand Identity

| Token | Value | Usage |
|-------|-------|-------|
| `--brand-primary` | `#0D2E5C` (Deep Navy) | Headers, CTAs, nav |
| `--brand-secondary` | `#00B4A6` (Teal) | Accents, highlights |
| `--brand-accent` | `#FF6B35` (Warm Orange) | Sinistre, urgency |
| `--brand-surface` | `#F7F9FC` (Cool Gray) | Backgrounds |
| Font: **Inter** | Weights 400/500/600/700 | Clean sans-serif |

---

## Pages (10 total)

| Page | Route | Description |
|------|-------|-------------|
| Homepage | `/` | Hero, products, stats, CTA |
| Assurance Auto | `/assurance-auto` | Formules + garanties |
| Assurance Habitation | `/assurance-habitation` | Formules + garanties |
| Assurance Moto | `/assurance-moto` | Formules + garanties |
| Assurance Santé | `/assurance-sante` | Formules + garanties |
| Devis Auto | `/devis-auto` | Simple contact form |
| Devis Habitation | `/devis-habitation` | Simple contact form |
| Sinistre | `/sinistre` | Claim declaration info |
| À propos | `/a-propos` | Company info |
| Contact | `/contact` | Contact form + info |
| Mentions légales | `/mentions-legales` | Legal |
| Politique de confidentialité | `/politique-confidentialite` | Privacy |

---

## Architecture

```
ExpertAssaurancesWeb/
├── public/
│   ├── images/
│   │   ├── icons/          # SVG icons
│   │   ├── logos/          # Logo files
│   │   └── heroes/         # Hero images
│   └── robots.txt
├── src/
│   ├── app/
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Homepage
│   │   ├── globals.css     # Global styles
│   │   ├── assurance-auto/
│   │   │   └── page.tsx
│   │   ├── assurance-habitation/
│   │   │   └── page.tsx
│   │   ├── assurance-moto/
│   │   │   └── page.tsx
│   │   ├── assurance-sante/
│   │   │   └── page.tsx
│   │   ├── devis-auto/
│   │   │   └── page.tsx
│   │   ├── devis-habitation/
│   │   │   └── page.tsx
│   │   ├── sinistre/
│   │   │   └── page.tsx
│   │   ├── a-propos/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── mentions-legales/
│   │   │   └── page.tsx
│   │   └── politique-confidentialite/
│   │       └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileNav.tsx
│   │   │   └── CookieConsent.tsx
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── ProductCards.tsx
│   │   │   ├── StatsSection.tsx
│   │   │   └── CTASection.tsx
│   │   ├── products/
│   │   │   ├── ProductHero.tsx
│   │   │   ├── GuaranteeTable.tsx
│   │   │   ├── GuaranteeExplainer.tsx
│   │   │   └── ProductCTA.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Accordion.tsx
│   │       ├── Badge.tsx
│   │       ├── SectionHeading.tsx
│   │       └── ContactForm.tsx
│   ├── lib/
│   │   ├── types/
│   │   │   └── product.ts
│   │   ├── constants/
│   │   │   ├── products.ts
│   │   │   └── navigation.ts
│   │   └── utils/
│   │       ├── cn.ts
│   │       └── format.ts
│   ├── hooks/
│   │   └── useCookieConsent.ts
│   └── data/
│       ├── auto.ts
│       ├── habitation.ts
│       ├── moto.ts
│       └── sante.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── next.config.ts
```

---

## Implementation Phases

---

### PHASE 1: Project Setup (3–4h)

**Goal:** Runnable Next.js app with Tailwind, fonts, base components.

#### Step 1.1 — Initialize Project
```bash
npx create-next-app@latest . \
  --typescript --tailwind --eslint \
  --app --src-dir --import-alias "@/*" \
  --use-npm
```

#### Step 1.2 — Install Dependencies
```bash
npm install clsx tailwind-merge lucide-react
npm install -D prettier
```

#### Step 1.3 — Configure Tailwind
```typescript
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#0D2E5C",
          "primary-light": "#1A4A8A",
          secondary: "#00B4A6",
          accent: "#FF6B35",
          surface: "#F7F9FC",
          "surface-alt": "#EEF2F7",
          text: "#1A1A2E",
          "text-muted": "#6B7280",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
```

#### Step 1.4 — cn() Utility
```typescript
// src/lib/utils/cn.ts
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

#### Step 1.5 — Base UI Components
Create minimal set: `Button`, `Card`, `Accordion`, `Badge`, `SectionHeading`, `ContactForm`.

---

### PHASE 2: Layout (6–8h)

**Goal:** Header, footer, mobile nav, cookie consent on all pages.

#### Step 2.1 — Navigation Data
```typescript
// src/lib/constants/navigation.ts
export const navigation = [
  { label: "Auto", href: "/assurance-auto" },
  { label: "Habitation", href: "/assurance-habitation" },
  { label: "Moto", href: "/assurance-moto" },
  { label: "Santé", href: "/assurance-sante" },
];

export const utilityLinks = [
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
  { label: "Sinistre", href: "/sinistre", isAccent: true },
];
```

#### Step 2.2 — Header
- Sticky header with logo, nav links, mobile hamburger
- Simple dropdown on mobile (no mega-menu)
- "Devis gratuit" CTA button

#### Step 2.3 — Footer
- 3 columns: Company info, Products, Contact
- Social links, legal links
- Copyright

#### Step 2.4 — Mobile Nav
- Slide-in panel from right
- Product links + utility links
- CTA button at bottom

#### Step 2.5 — Cookie Consent
- Simple banner: "Accepter" / "Refuser"
- Persist in localStorage

---

### PHASE 3: Homepage (6–8h)

**Goal:** Clean marketing homepage.

#### Sections:
1. **Hero** — Headline + subtitle + 2 CTA buttons
2. **Product Cards** — 4 cards (Auto, Habitation, Moto, Santé) with icons
3. **Stats** — 3 key numbers (animated counters)
4. **Why Choose Us** — 3 feature cards with icons
5. **CTA Section** — "Demandez votre devis" with contact form or phone

---

### PHASE 4: Product Pages (12–16h)

**Goal:** One page per product with clear guarantee tables and explanations.

#### Shared Components:
1. **ProductHero** — Product name, tagline, CTA
2. **GuaranteeTable** — Simple comparison table (3–4 formulas)
3. **GuaranteeExplainer** — Each guarantee with icon + clear explanation
4. **ProductCTA** — "Demandez votre devis" at bottom

#### Per Product:

**Auto (`/assurance-auto`):**
- 3 formulas: Tiers, Tous Risques, Tous Risques Maxi
- Guarantees: RC, Assistance, Bris de glace, Vol, Incendie, GPC
- Simple comparison table
- Each guarantee has a clear 2-line explanation

**Habitation (`/assurance-habitation`):**
- 3 formulas: Essentielle, Confort, Confort Plus
- Guarantees: RC, Incendie, Dégâts des eaux, Vol, Bris de vitre
- Tab for Locataire vs Propriétaire

**Moto (`/assurance-moto`):**
- 3 formulas: Tiers, Tous Risques, Tous Risques Étendu
- Guarantees: RC, Assistance, Bris de glace, Vol, Sécurité conducteur

**Santé (`/assurance-sante`):**
- 3 formulas: Essentielle, Confort, Premium
- Coverage cards: Optique, Dentaire, Hospitalisation, Audiology
- Simpler layout with icons instead of table

---

### PHASE 5: Devis & Contact Forms (6–8h)

**Goal:** Simple contact forms for quotes and general inquiries.

#### Devis Forms (`/devis-auto`, `/devis-habitation`):
- Name, email, phone
- Product-specific fields (simple dropdowns)
- "Nous vous recontacterons sous 24h" message
- Submit → success message (no backend for MVP)

#### Contact Form (`/contact`):
- Name, email, subject, message
- Phone number displayed
- Office hours
- Social links

#### Sinistre Page (`/sinistre`):
- "Comment déclarer un sinistre" with 3 steps
- Phone number for urgent claims
- Product cards linking to contact form

---

### PHASE 6: Content Pages (4–6h)

**Goal:** About, legal, privacy pages.

#### À propos (`/a-propos`):
- Company mission and values
- Key dates (simple timeline)
- Team photos (placeholders)

#### Mentions légales & Politique de confidentialité:
- Standard legal text
- RGPD compliance info

---

### PHASE 7: SEO & Polish (4–5h)

**Goal:** Meta tags, structured data, performance.

- Meta titles/descriptions for all pages
- Open Graph tags
- Structured data (Organization, FAQ)
- Sitemap generation
- robots.txt
- Image optimization (next/image)
- Responsive testing
- Lighthouse audit

---

## Summary

| Phase | Description | Effort |
|-------|-------------|--------|
| 1 | Project Setup | 3–4h |
| 2 | Layout Shell | 6–8h |
| 3 | Homepage | 6–8h |
| 4 | Product Pages | 12–16h |
| 5 | Forms & Contact | 6–8h |
| 6 | Content Pages | 4–6h |
| 7 | SEO & Polish | 4–5h |
| **Total** | | **41–55h** |

---

## Key Differences from Direct Assurance

| Feature | Direct Assurance | Expert Assurance (Simplified) |
|---------|------------------|-------------------------------|
| Navigation | Mega-menu | Simple nav with mobile hamburger |
| Simulator | 4-step multi-page form | Contact form |
| Product pages | 4–5 formulas each | 3 formulas each |
| Charts | 7 chart components | Simple comparison tables |
| Pages | 30+ pages | 12 pages |
| Blog | Full blog | None (add later) |
| Services | Multiple service pages | Sinistre + Contact only |
| Login | Member area | None |

---

## Success Criteria

- [ ] Homepage loads in < 2s
- [ ] All 4 product pages with guarantee tables
- [ ] Contact forms work (client-side)
- [ ] Mobile responsive (320px–1440px)
- [ ] Cookie consent RGPD compliant
- [ ] Lighthouse Performance > 90
- [ ] All text in French
- [ ] No login/backoffice features
- [ ] Deploys on Vercel
