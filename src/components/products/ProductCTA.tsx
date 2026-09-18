import Link from "next/link";
import { Button } from "@/components/ui/Button";

interface ProductCTAProps {
  productName: string;
  href: string;
}

export function ProductCTA({ productName, href }: ProductCTAProps) {
  return (
    <section className="py-16 bg-brand-primary text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold">Prêt pour votre {productName} ?</h2>
        <p className="mt-4 text-white/70 max-w-lg mx-auto">
          Demandez votre devis gratuit et personnalisé en quelques minutes.
        </p>
        <div className="mt-8">
          <Link href={href}>
            <Button variant="accent" size="lg">
              Demander mon devis gratuit
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
