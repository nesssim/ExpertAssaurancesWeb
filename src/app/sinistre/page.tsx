import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Déclarer un sinistre",
  description: "Comment déclarer un sinistre chez Expert Assurance. Étapes simples et contact rapide.",
};

const steps = [
  {
    number: 1,
    title: "Contactez-nous",
    description: "Appelez-nous au 01 23 45 67 89 ou envoyez-nous un email avec les détails du sinistre.",
  },
  {
    number: 2,
    title: "Remplissez le formulaire",
    description: "Nous vous enverrons un formulaire de déclaration à compléter avec toutes les informations nécessaires.",
  },
  {
    number: 3,
    title: "Traitement rapide",
    description: "Notre équipe traite votre dossier sous 48h et vous accompagne dans les démarches.",
  },
];

export default function SinistrePage() {
  return (
    <>
      <section className="bg-brand-accent text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Déclarer un sinistre</h1>
          <p className="mt-4 text-white/70 max-w-lg">
            En cas de sinistre, nous sommes là pour vous aider. Voici les étapes à suivre.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-8">
            {steps.map((step) => (
              <Card key={step.number} className="flex items-start gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white font-bold text-lg">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-brand-text">{step.title}</h3>
                  <p className="mt-2 text-brand-text-muted">{step.description}</p>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-brand-text mb-4">Besoin d&apos;aide immédiate ?</h2>
            <p className="text-brand-text-muted mb-6">
              Notre équipe est disponible pour vous accompagner.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="tel:0123456789"
                className="inline-flex items-center gap-2 rounded-lg bg-brand-primary px-6 py-3 text-sm font-semibold text-white hover:bg-brand-primary-light transition-colors"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                01 23 45 67 89
              </a>
              <a
                href="mailto:sinistre@expert-assurance.fr"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-brand-primary px-6 py-3 text-sm font-semibold text-brand-primary hover:bg-brand-primary hover:text-white transition-colors"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                sinistre@expert-assurance.fr
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
