import type { Metadata } from "next";
import { motoProduct } from "@/data/moto";
import { ProductHero } from "@/components/products/ProductHero";
import { GuaranteeTable } from "@/components/products/GuaranteeTable";
import { GuaranteeExplainer } from "@/components/products/GuaranteeExplainer";
import { ProductCTA } from "@/components/products/ProductCTA";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Assurance Moto",
  description:
    "Assurance moto : des formules pour tous les deux-roues. Assistance, bris de glace, vol, sécurité conducteur. Devis gratuit.",
};

export default function MotoPage() {
  return (
    <>
      <ProductHero
        name={motoProduct.name}
        tagline={motoProduct.tagline}
        description={motoProduct.description}
        image="/images/heroes/hero-moto.jpg"
      />

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Comparez nos formules"
            subtitle="Du strict nécessaire à la protection maximale, pour tous les budgets."
          />
          <GuaranteeTable formulas={motoProduct.formulas} productSlug="moto" />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Comprendre nos garanties"
            subtitle="Roulez serein avec des garanties adaptées à votre passion."
          />
          <GuaranteeExplainer items={motoProduct.guaranteesExplainer} />
        </div>
      </section>

      <ProductCTA productName="assurance moto" href="/devis-moto" />
    </>
  );
}
