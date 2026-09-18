import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales du site Expert Assurance.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="py-12 lg:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-brand">
        <h1 className="text-3xl font-bold text-brand-text mb-8">Mentions légales</h1>

        <h2 className="text-xl font-semibold text-brand-text mt-8">Éditeur du site</h2>
        <p className="text-brand-text-muted">
          Expert Assurance SAS<br />
          Capital social : 1 000 000 €<br />
          Siège social : 123 Avenue des Champs, 75008 Paris<br />
          RCS Paris : 123 456 789<br />
          ORIAS : 19 006 123
        </p>

        <h2 className="text-xl font-semibold text-brand-text mt-8">Directeur de la publication</h2>
        <p className="text-brand-text-muted">M. Jean Dupont, Président</p>

        <h2 className="text-xl font-semibold text-brand-text mt-8">Hébergeur</h2>
        <p className="text-brand-text-muted">
          Vercel Inc.<br />
          340 S Lemon Ave #4133<br />
          Walnut, CA 91789<br />
          États-Unis
        </p>

        <h2 className="text-xl font-semibold text-brand-text mt-8">Propriété intellectuelle</h2>
        <p className="text-brand-text-muted">
          L&apos;ensemble du contenu de ce site (textes, images, vidéos, logos) est la propriété
          exclusive d&apos;Expert Assurance ou de ses partenaires. Toute reproduction, même partielle,
          est interdite sans autorisation préalable.
        </p>

        <h2 className="text-xl font-semibold text-brand-text mt-8">Données personnelles</h2>
        <p className="text-brand-text-muted">
          Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi
          Informatique et Libertés, vous disposez de droits sur vos données personnelles.
          Consultez notre politique de confidentialité pour en savoir plus.
        </p>
      </div>
    </div>
  );
}
