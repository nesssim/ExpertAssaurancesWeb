import { ContactForm } from "@/components/ui/ContactForm";

export default function DevisAutoPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-primary to-brand-primary-light text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Devis Assurance Auto</h1>
          <p className="mt-4 text-white/70 max-w-lg">
            Répondez à quelques questions et recevez votre devis personnalisé par email sous 24h.
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
