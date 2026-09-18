import type { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "À propos",
  description: "Découvrez Expert Assurance, votre assureur en ligne depuis 2015.",
};

const values = [
  {
    title: "Simplicité",
    description: "Nous croyons que l'assurance doit être compréhensible pour tous. Pas de jargon, pas de surprises.",
  },
  {
    title: "Transparence",
    description: "Nos tarifs sont clairs, nos garanties explicites. Vous savez exactement ce que vous payez.",
  },
  {
    title: "Réactivité",
    description: "Un sinistre ? Nous traitons votre dossier sous 24h. Un devis ? Réponse en quelques minutes.",
  },
];

const timeline = [
  { year: "2015", event: "Création d'Expert Assurance avec la volonté de démocratiser l'assurance en ligne." },
  { year: "2017", event: "Lancement de l'assurance auto et habitation, premiers 10 000 clients." },
  { year: "2019", event: "Extension aux assurances moto et complémentaire santé." },
  { year: "2021", event: "Atteinte des 30 000 clients et ouverture d'un second bureau." },
  { year: "2024", event: "50 000 clients satisfaits et lancement de notre espace client simplifié." },
];

export default function AProposPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[350px] lg:min-h-[420px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/about/office.jpg"
            alt="Bureau Expert Assurance"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/90 to-brand-primary/70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">À propos d&apos;Expert Assurance</h1>
          <p className="mt-4 text-white/70 max-w-lg">
            Une assurance pensée pour vous, avec des valeurs humaines.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-brand-text mb-4">Notre mission</h2>
              <p className="text-brand-text-muted leading-relaxed">
                Expert Assurance est née d&apos;une conviction : l&apos;assurance peut être à la fois
                abordable, claire et efficace. Nous avons créé une entreprise qui met le client au
                centre de chaque décision, avec des formules transparentes et un service réactif.
              </p>
              <p className="text-brand-text-muted leading-relaxed mt-4">
                Aujourd&apos;hui, plus de 50 000 clients nous font confiance pour protéger
                leurs biens et leur santé. Notre mission reste la même : simplifier l&apos;assurance
                pour que chacun puisse y accéder.
              </p>
            </div>
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden">
              <Image
                src="/images/about/handshake.jpg"
                alt="Partenariat Expert Assurance"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Nos valeurs" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <h3 className="text-lg font-semibold text-brand-text mb-2">{value.title}</h3>
                <p className="text-sm text-brand-text-muted">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/about/team.jpg"
                alt="L'équipe Expert Assurance"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl font-bold text-brand-text mb-4">Notre équipe</h2>
              <p className="text-brand-text-muted leading-relaxed">
                Derrière Expert Assurance, il y a une équipe passionnée de plus de 30 personnes.
                Conseillers, techniciens, experts : nous travaillons tous ensemble pour vous
                offrir le meilleur service possible.
              </p>
              <p className="text-brand-text-muted leading-relaxed mt-4">
                Notre équipe est disponible du lundi au vendredi de 9h à 18h pour répondre
                à toutes vos questions et vous accompagner dans vos démarches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Notre histoire" />
          <div className="max-w-2xl mx-auto">
            {timeline.map((item) => (
              <div key={item.year} className="flex gap-6 mb-8 last:mb-0">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-primary text-white font-bold text-sm">
                  {item.year}
                </div>
                <p className="text-brand-text-muted pt-3">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
