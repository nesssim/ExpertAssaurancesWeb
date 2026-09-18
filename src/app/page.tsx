import Link from "next/link";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { ReviewsSection } from "@/components/home/ReviewsSection";

const products = [
  {
    name: "Assurance Auto",
    href: "/assurance-auto",
    description: "Protégez votre véhicule avec une couverture adaptée à vos besoins.",
    image: "/images/products/auto-car.jpg",
  },
  {
    name: "Assurance Habitation",
    href: "/assurance-habitation",
    description: "Protégez votre logement contre les aléas du quotidien.",
    image: "/images/products/habitation-house.jpg",
  },
  {
    name: "Assurance Moto",
    href: "/assurance-moto",
    description: "Roulez l'esprit tranquille avec notre assurance moto.",
    image: "/images/products/moto-bike.jpg",
  },
  {
    name: "Complémentaire Santé",
    href: "/assurance-sante",
    description: "Soins de qualité à prix maîtrisé avec notre complémentaire.",
    image: "/images/products/sante-health.jpg",
  },
];

const stats = [
  { number: "50 000+", label: "Clients satisfaits" },
  { number: "98%", label: "Taux de satisfaction" },
  { number: "24h", label: "Délai d'indemnisation" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/images/heroes/hero-home.jpg"
            alt=""
            fill
            className="object-cover"
            priority
            loading="eager"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/90 to-brand-primary/70" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-white">
              L&apos;assurance simple et transparente
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-lg">
              Expert Assurance vous accompagne dans la protection de vos biens et de votre santé.
              Des formules claires, des tarifs justes, un service réactif.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/devis-auto"
                className="inline-flex items-center rounded-lg bg-brand-accent px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-primary"
              >
                Demander un devis gratuit
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-lg border-2 border-white/30 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-primary"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Nos assurances"
            subtitle="Des solutions adaptées à chaque besoin, avec des garanties claires et des tarifs transparents."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link key={product.href} href={product.href}>
                <Card hover className="h-full overflow-hidden">
                  <div className="relative h-40 -mx-6 -mt-6 mb-4 overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <h3 className="text-lg font-semibold text-brand-text mb-2">{product.name}</h3>
                  <p className="text-sm text-brand-text-muted">{product.description}</p>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-4xl font-bold text-brand-primary">{stat.number}</div>
                <div className="mt-2 text-sm text-brand-text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us with image */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading title="Pourquoi Expert Assurance ?" subtitle="Une approche moderne de l'assurance, pensée pour vous." centered={false} />
              <div className="space-y-6 mt-8">
                {[
                  { title: "Simplicité", description: "Des formules claires, sans surprises. Vous savez exactement ce que vous payez." },
                  { title: "Réactivité", description: "Déclaration de sinistre en ligne, traitement rapide, indemnisation sous 24h." },
                  { title: "Proximité", description: "Une équipe à votre écoute par téléphone, email ou en agence." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-secondary/10" aria-hidden="true">
                      <svg className="h-5 w-5 text-brand-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-brand-text">{item.title}</h3>
                      <p className="text-sm text-brand-text-muted mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden" aria-hidden="true">
              <Image
                src="/images/about/team.jpg"
                alt=""
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/images/about/office.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-brand-primary/85" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl font-bold lg:text-4xl">Besoin d&apos;un devis ?</h2>
          <p className="mt-4 text-white/70 max-w-lg mx-auto">
            Répondez à quelques questions et recevez une estimation personnalisée en quelques minutes.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/devis-auto"
              className="inline-flex items-center rounded-lg bg-brand-accent px-6 py-3 text-sm font-semibold text-white hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-primary"
            >
              Devis Auto
            </Link>
            <Link
              href="/devis-habitation"
              className="inline-flex items-center rounded-lg bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-primary"
            >
              Devis Habitation
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <ReviewsSection />
    </>
  );
}
