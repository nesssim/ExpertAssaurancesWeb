import type { Metadata } from "next";
import { santeProduct } from "@/data/sante";
import { ProductHero } from "@/components/products/ProductHero";
import { GuaranteeTable } from "@/components/products/GuaranteeTable";
import { GuaranteeExplainer } from "@/components/products/GuaranteeExplainer";
import { ProductCTA } from "@/components/products/ProductCTA";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Complémentaire Santé",
  description:
    "Complémentaire santé : consultations, pharmacie, optique, dentaire, hospitalisation. Devis gratuit en 2 minutes.",
};

export default function SantePage() {
  return (
    <>
      <ProductHero
        name={santeProduct.name}
        tagline={santeProduct.tagline}
        description={santeProduct.description}
        image="/images/heroes/hero-sante.jpg"
      />

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Comparez nos formules"
            subtitle="Des soins de qualité à prix maîtrisé, pour toute la famille."
          />
          <GuaranteeTable formulas={santeProduct.formulas} productSlug="sante" />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Comprendre nos garanties"
            subtitle="Votre santé mérite des explications claires."
          />
          <GuaranteeExplainer items={santeProduct.guaranteesExplainer} />
        </div>
      </section>

      <ProductCTA productName="complémentaire santé" href="/devis-sante" />
    </>
  );
}
