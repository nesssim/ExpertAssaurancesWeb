import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité et protection des données personnelles d'Expert Assurance.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="py-12 lg:py-16">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-brand-text mb-8">Politique de confidentialité</h1>

        <p className="text-brand-text-muted">
          Expert Assurance s&apos;engage à protéger la vie privée des utilisateurs de son site
          internet. La présente politique de confidentialité décrit comment nous collectons,
          utilisons et protégeons vos données personnelles.
        </p>

        <h2 className="text-xl font-semibold text-brand-text mt-8">Données collectées</h2>
        <p className="text-brand-text-muted">
          Nous collectons les données que vous nous fournissez directement : nom, prénom, adresse
          email, numéro de téléphone. Ces données sont nécessaires pour le traitement de vos
          demandes de devis et de contact.
        </p>

        <h2 className="text-xl font-semibold text-brand-text mt-8">Finalité du traitement</h2>
        <p className="text-brand-text-muted">
          Vos données sont utilisées uniquement pour : répondre à vos demandes de devis, vous
          recontacter dans le cadre de votre contrat, et vous envoyer des informations sur nos
          services (avec votre consentement).
        </p>

        <h2 className="text-xl font-semibold text-brand-text mt-8">Cookies</h2>
        <p className="text-brand-text-muted">
          Nous utilisons des cookies pour améliorer votre expérience de navigation et mesurer
          l&apos;audience de notre site. Vous pouvez gérer vos préférences via notre bandeau de
          consentement ou les paramètres de votre navigateur.
        </p>

        <h2 className="text-xl font-semibold text-brand-text mt-8">Vos droits</h2>
        <p className="text-brand-text-muted">
          Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification,
          d&apos;effacement et de portabilité de vos données. Pour exercer ces droits, contactez-nous
          à : privacy@expert-assurance.fr
        </p>

        <h2 className="text-xl font-semibold text-brand-text mt-8">Contact</h2>
        <p className="text-brand-text-muted">
          Pour toute question relative à la protection de vos données, contactez notre
          délégué à la protection des données : dpo@expert-assurance.fr
        </p>
      </div>
    </div>
  );
}
