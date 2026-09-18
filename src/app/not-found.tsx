import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-6xl font-bold text-brand-secondary">404</p>
        <h1 className="mt-4 text-3xl font-bold text-brand-text">Page introuvable</h1>
        <p className="mt-3 text-brand-text-muted max-w-md mx-auto">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block rounded-lg bg-brand-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-primary-light transition-colors"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </section>
  );
}
