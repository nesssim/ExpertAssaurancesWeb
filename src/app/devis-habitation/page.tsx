import type { Metadata } from "next";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Devis Habitation",
  description: "Demandez votre devis assurance habitation gratuit en 2 minutes.",
};

export default function DevisHabitationPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-primary to-brand-primary-light text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Devis Assurance Habitation</h1>
          <p className="mt-4 text-white/70 max-w-lg">
            Protégez votre logement. Répondez à quelques questions pour recevoir votre devis.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <ContactForm />
          <p className="mt-6 text-sm text-brand-text-muted text-center">
            Nous vous recontacterons sous 24h pour vous présenter votre devis personnalisé.
          </p>
        </div>
      </section>
    </>
  );
}
