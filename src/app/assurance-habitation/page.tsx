import type { Metadata } from "next";
import { habitationProduct } from "@/data/habitation";
import { ProductHero } from "@/components/products/ProductHero";
import { GuaranteeTable } from "@/components/products/GuaranteeTable";
import { GuaranteeExplainer } from "@/components/products/GuaranteeExplainer";
import { ProductCTA } from "@/components/products/ProductCTA";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Assurance Habitation",
  description:
    "Assurance habitation : protégez votre logement contre les incendies, dégâts des eaux, vol et catastrophes. Devis gratuit.",
};

export default function HabitationPage() {
  return (
    <>
      <ProductHero
        name={habitationProduct.name}
        tagline={habitationProduct.tagline}
        description={habitationProduct.description}
        image="/images/heroes/hero-habitation.jpg"
      />

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Comparez nos formules"
            subtitle="De l'essentiel à la protection complète, trouvez l'offre idéale."
          />
          <GuaranteeTable formulas={habitationProduct.formulas} productSlug="habitation" />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Comprendre nos garanties"
            subtitle="Protégez votre logement avec des garanties claires et complètes."
          />
          <GuaranteeExplainer items={habitationProduct.guaranteesExplainer} />
        </div>
      </section>

      <ProductCTA productName="assurance habitation" href="/devis-habitation" />
    </>
  );
}
