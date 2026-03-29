import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Formation SST | Formations And Co",
  description:
    "Formation Sauveteur Secouriste du Travail (SST) certifi\u00e9e. Formation initiale et recyclage MAC SST. Certificat INRS.",
};

export default function FormationSST() {
  return (
    <>
      {/* Hero */}
      <section className="watercolor-bg py-16 md:py-24 relative overflow-hidden">
        <div className="watercolor-blob w-80 h-80 bg-coral top-[-60px] right-[-60px]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 bg-coral/10 text-coral px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            Certificat INRS
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-6">
            Formation SST
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl leading-relaxed">
            Sauveteur Secouriste du Travail &mdash; Apprenez les gestes de premiers
            secours et devenez acteur de la pr&eacute;vention des risques dans votre entreprise.
          </p>
        </div>
      </section>

      {/* Objectifs */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-8">
            Objectifs de la formation
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              "Ma\u00eetriser la conduite \u00e0 tenir et les gestes de premiers secours",
              "Savoir alerter dans l\u2019entreprise ou \u00e0 d\u00e9faut les secours",
              "Participer \u00e0 la mise en \u0153uvre d\u2019actions de pr\u00e9vention",
              "Conna\u00eetre les risques sp\u00e9cifiques de votre activit\u00e9",
              "Prot\u00e9ger, examiner, faire alerter, secourir",
              "Obtenir le certificat SST d\u00e9livr\u00e9 par l\u2019INRS",
            ].map((obj) => (
              <div key={obj} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                <svg className="w-5 h-5 text-coral flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-foreground/70 text-sm">{obj}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme */}
      <section className="py-16 watercolor-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-10 text-center">
            Programme
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-accent mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-coral rounded-full text-white flex items-center justify-center text-sm">1</span>
                Formation initiale SST
              </h3>
              <ul className="space-y-3 text-sm text-foreground/70">
                <li>Dur&eacute;e : <strong>14 heures</strong> (2 jours)</li>
                <li>Le r&ocirc;le du SST dans l&rsquo;entreprise</li>
                <li>Le cadre juridique de l&rsquo;intervention</li>
                <li>La pr&eacute;vention des risques professionnels</li>
                <li>Les gestes de premiers secours</li>
                <li>Mises en situation pratiques</li>
                <li>&Eacute;valuation certificative</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-accent mb-4 flex items-center gap-2">
                <span className="w-8 h-8 bg-primary rounded-full text-white flex items-center justify-center text-sm">2</span>
                MAC SST (Recyclage)
              </h3>
              <ul className="space-y-3 text-sm text-foreground/70">
                <li>Dur&eacute;e : <strong>7 heures</strong> (1 jour)</li>
                <li>Tous les 24 mois</li>
                <li>Retour d&rsquo;exp&eacute;rience</li>
                <li>Actualisation des comp&eacute;tences</li>
                <li>Mises en situation pratiques</li>
                <li>&Eacute;valuation certificative</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Infos pratiques */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-8">
            Informations pratiques
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { label: "Dur\u00e9e", value: "14h (initiale) ou 7h (recyclage)" },
              { label: "Modalit\u00e9", value: "Pr\u00e9sentiel uniquement (pratique obligatoire)" },
              { label: "Groupe", value: "4 \u00e0 10 participants" },
              { label: "Mat\u00e9riel", value: "Mannequins, d\u00e9fibrillateur de formation, plan d\u2019intervention" },
              { label: "Certification", value: "Certificat SST d\u00e9livr\u00e9 par l\u2019INRS (validit\u00e9 24 mois)" },
              { label: "Accessibilit\u00e9", value: "Accessible aux personnes en situation de handicap" },
            ].map((info) => (
              <div key={info.label} className="bg-gray-50 rounded-lg p-5">
                <p className="text-sm font-semibold text-coral mb-1">{info.label}</p>
                <p className="text-foreground/70">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 watercolor-bg">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">
            Vous souhaitez former vos &eacute;quipes ?
          </h2>
          <p className="text-foreground/60 mb-8">
            Contactez-moi pour organiser une session SST dans vos locaux ou obtenir un devis personnalis&eacute;.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-coral text-white px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Demander un devis
          </Link>
        </div>
      </section>
    </>
  );
}
