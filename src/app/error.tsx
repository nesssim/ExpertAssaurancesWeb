"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  void error;
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl font-bold text-brand-text">Une erreur est survenue</h1>
        <p className="mt-3 text-brand-text-muted max-w-md mx-auto">
          Nous nous excusons pour ce désagrément. Veuillez réessayer ou contactez-nous si le problème persiste.
        </p>
        <button
          onClick={reset}
          className="mt-6 rounded-lg bg-brand-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-primary-light transition-colors"
        >
          Réessayer
        </button>
      </div>
    </section>
  );
}
