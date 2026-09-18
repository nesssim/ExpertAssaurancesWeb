import type { Metadata } from "next";
import { autoProduct } from "@/data/auto";
import { ProductHero } from "@/components/products/ProductHero";
import { GuaranteeTable } from "@/components/products/GuaranteeTable";
import { GuaranteeExplainer } from "@/components/products/GuaranteeExplainer";
import { ProductCTA } from "@/components/products/ProductCTA";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Assurance Auto",
  description:
    "Assurance auto : 3 formules pour tous les budgets. Devis gratuit en 2 minutes. Responsabilité civile, tous risques, assistance 24h/24.",
};

export default function AutoPage() {
  return (
    <>
      <ProductHero
        name={autoProduct.name}
        tagline={autoProduct.tagline}
        description={autoProduct.description}
        image="/images/heroes/hero-auto.jpg"
      />

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Comparez nos formules"
            subtitle="Choisissez la couverture qui correspond à vos besoins et à votre budget."
          />
          <GuaranteeTable formulas={autoProduct.formulas} productSlug="auto" />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Comprendre nos garanties"
            subtitle="Chaque garantie est expliquée simplement, sans jargon."
          />
          <GuaranteeExplainer items={autoProduct.guaranteesExplainer} />
        </div>
      </section>

      <ProductCTA productName="assurance auto" href="/devis-auto" />
    </>
  );
}
