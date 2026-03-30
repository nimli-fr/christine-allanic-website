import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Bilan de Comp\u00e9tences | Formations And Co",
  description:
    "R\u00e9alisez votre bilan de comp\u00e9tences avec Christine Allanic. 20h d\u2019accompagnement personnalis\u00e9, certifi\u00e9 Qualiopi, \u00e9ligible CPF.",
};

export default function BilanDeCompetences() {
  return (
    <>
      {/* Hero */}
      <section className="watercolor-bg py-16 md:py-24 relative overflow-hidden">
        <div className="watercolor-blob w-80 h-80 bg-primary top-[-60px] right-[-60px]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            &Eacute;ligible CPF &mdash; Prise en charge &agrave; 100%
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-6">
            Bilan de Comp&eacute;tences
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Faites le point sur votre parcours, identifiez vos forces et
            construisez un projet professionnel qui vous ressemble. Un
            accompagnement bienveillant et structur&eacute; pour avancer avec confiance.
          </p>
        </div>
      </section>

      {/* C'est quoi */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6">
            Qu&rsquo;est-ce qu&rsquo;un bilan de comp&eacute;tences ?
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Le bilan de comp&eacute;tences est un dispositif encadr&eacute; par le Code du travail
            (articles L.6313-1 et R.6313-4). Il permet &agrave; toute personne active d&rsquo;analyser
            ses comp&eacute;tences professionnelles et personnelles, ses aptitudes et ses motivations,
            afin de d&eacute;finir un projet professionnel ou de formation.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Il se d&eacute;roule en <strong>3 phases</strong> sur une dur&eacute;e de <strong>20 heures</strong> r&eacute;parties
            sur <strong>plusieurs semaines</strong>.
          </p>
        </div>
      </section>

      {/* Les 3 phases */}
      <section className="py-16 watercolor-bg">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-mono text-primary font-semibold tracking-widest uppercase text-center mb-4">
            Le programme
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-10 text-center">
            Les 3 phases du bilan
          </h2>

          <div className="space-y-6">
            {[
              {
                step: "1",
                title: "Phase pr\u00e9liminaire",
                desc: "Analyse de votre demande, d\u00e9finition conjointe de vos besoins, pr\u00e9sentation du d\u00e9roulement et des m\u00e9thodes.",
                color: "bg-primary",
              },
              {
                step: "2",
                title: "Phase d\u2019investigation",
                desc: "Exploration de vos comp\u00e9tences, valeurs, int\u00e9r\u00eats et motivations. Analyse de la faisabilit\u00e9 de votre projet au regard du march\u00e9 et de votre profil.",
                color: "bg-accent",
              },
              {
                step: "3",
                title: "Phase de conclusion",
                desc: "Remise d\u2019un document de synth\u00e8se confidentiel. D\u00e9finition d\u2019un plan d\u2019action concret pour la mise en \u0153uvre de votre projet.",
                color: "bg-coral",
              },
            ].map((phase) => (
              <div key={phase.step} className="flex gap-6 items-start bg-white rounded-2xl p-6 shadow-sm">
                <div className={`${phase.color} text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0`}>
                  {phase.step}
                </div>
                <div>
                  <h3 className="font-bold text-accent text-lg mb-2">{phase.title}</h3>
                  <p className="text-gray-500 leading-relaxed">{phase.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Infos pratiques */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-8">
            Informations pratiques
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { label: "Dur\u00e9e", value: "20 heures r\u00e9parties sur plusieurs semaines" },
              { label: "Modalit\u00e9s", value: "Pr\u00e9sentiel ou distanciel (visio)" },
              { label: "Financement", value: "CPF (prise en charge \u00e0 100%), plan de d\u00e9veloppement des comp\u00e9tences, autofinancement" },
              { label: "Public", value: "Salari\u00e9es, demandeuses d\u2019emploi, ind\u00e9pendantes" },
              { label: "Pr\u00e9requis", value: "Aucun pr\u00e9requis n\u00e9cessaire" },
              { label: "Accessibilit\u00e9", value: "Accessible aux personnes en situation de handicap (PSH)" },
            ].map((info) => (
              <div key={info.label} className="bg-cyan-50 rounded-xl p-5">
                <p className="text-sm font-semibold text-primary mb-1">{info.label}</p>
                <p className="text-gray-600">{info.value}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://www.moncompteformation.gouv.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Acc&eacute;der &agrave; Mon Compte Formation (CPF)
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 watercolor-bg">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <Image
            src="/images/qualiopi.png"
            alt="Certification Qualiopi"
            width={180}
            height={108}
            className="mx-auto mb-8 rounded-lg"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">
            Int&eacute;ress&eacute;e par un bilan de comp&eacute;tences ?
          </h2>
          <p className="text-gray-500 mb-8">
            B&eacute;n&eacute;ficiez d&rsquo;un entretien sans engagement pour &eacute;changer sur vos besoins.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-dark transition-colors shadow-sm"
          >
            Demander un entretien d&eacute;couverte
          </Link>
        </div>
      </section>
    </>
  );
}
