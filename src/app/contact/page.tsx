import type { Metadata } from "next";
import Image from "next/image";
import { ContactForm } from "@/components/ui/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez Expert Assurance. Par téléphone, email ou en agence.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[300px] lg:min-h-[360px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/team/contact-person.jpg"
            alt="Contact Expert Assurance"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/70 to-brand-primary/50" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">Contactez-nous</h1>
          <p className="mt-4 text-white/70 max-w-lg">
            Une question, un devis, un sinistre ? Notre équipe est à votre écoute.
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold text-brand-text mb-6">Envoyez-nous un message</h2>
              <ContactForm />
            </div>

            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-brand-text mb-6">Nos coordonnées</h2>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <svg className="h-5 w-5 text-brand-primary mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-brand-text">Téléphone</h3>
                    <p className="text-brand-text-muted">01 23 45 67 89</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="h-5 w-5 text-brand-primary mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-brand-text">Email</h3>
                    <p className="text-brand-text-muted">contact@expert-assurance.fr</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <svg className="h-5 w-5 text-brand-primary mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-brand-text">Horaires</h3>
                    <p className="text-brand-text-muted">Lundi - Vendredi : 9h - 18h</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="relative h-64 rounded-xl overflow-hidden bg-brand-surface-alt">
                <Image
                  src="/images/about/office.jpg"
                  alt="Localisation Expert Assurance"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="rounded-lg bg-white/90 px-4 py-2 text-sm font-medium text-brand-text">
                    123 Avenue des Champs, 75008 Paris
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
