import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Accompagnement PSE — Plan de sauvegarde de l’emploi | Formations And Co",
  description:
    "Accompagnement personnalisé des salariés en plan de sauvegarde de l’emploi (PSE) par Christine Allanic, consultante certifiée en bilan de compétences. Reclassement, reconversion, recherche d’emploi, orientation formation.",
  keywords: [
    "PSE",
    "plan de sauvegarde de l’emploi",
    "accompagnement salariés",
    "reclassement",
    "reconversion",
    "bilan de compétences",
    "cellule de reclassement",
    "transition professionnelle",
    "accompagnement RH",
    "Christine Allanic",
  ],
};

export default function FormationPSE() {
  return (
    <>
      {/* Hero */}
      <section className="watercolor-bg py-16 md:py-24 relative overflow-hidden">
        <div className="watercolor-blob w-80 h-80 bg-primary top-[-60px] right-[-60px]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="mb-6">
            <Link href="/formation" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Toutes les formations
            </Link>
          </div>
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            Accompagnement entreprises &amp; salariés
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-6">
            PSE &mdash; Plan de sauvegarde de l&rsquo;emploi
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            Un accompagnement personnalisé et structuré pour les salariés concernés
            par un PSE. Aider à y voir plus clair, se sécuriser et construire un projet
            professionnel réaliste &mdash; reclassement interne, reconversion, recherche
            d&rsquo;emploi externe ou orientation formation.
          </p>
        </div>
      </section>

      {/* Photo + intro */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/consultation.jpg"
                alt="Séance d&rsquo;accompagnement individuel"
                width={720}
                height={900}
                className="rounded-3xl shadow-xl object-cover w-full"
              />
            </div>
            <div>
              <p className="text-sm font-mono text-primary font-semibold tracking-widest uppercase mb-4">
                Une phase sensible, un accompagnement dédié
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 leading-tight">
                Sécuriser, clarifier, projeter
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  En tant que <strong className="text-accent">consultante certifiée
                  en bilan de compétences</strong>, j&rsquo;accompagne les salariés
                  concernés par un plan de sauvegarde de l&rsquo;emploi (PSE) dans
                  une phase souvent sensible et exigeante.
                </p>
                <p>
                  Mon rôle est de les aider à y voir plus clair, à se sécuriser et à
                  construire un projet professionnel réaliste, que ce soit un{" "}
                  <strong>reclassement interne</strong>, une <strong>reconversion</strong>,
                  une <strong>recherche d&rsquo;emploi externe</strong> ou une{" "}
                  <strong>orientation vers la formation</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mon approche */}
      <section className="py-16 watercolor-bg">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-mono text-primary font-semibold tracking-widest uppercase text-center mb-4">
            Mon approche
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-10 text-center">
            Un accompagnement personnalisé et structuré
          </h2>
          <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Mon accompagnement s&rsquo;appuie sur le bilan de compétences,
            l&rsquo;analyse du parcours, la clarification des atouts et des contraintes,
            ainsi que la préparation concrète à la suite.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Bilan de compétences",
                desc: "Faire le point sur le parcours, identifier les forces et les motivations pour orienter le projet.",
              },
              {
                title: "Analyse du parcours",
                desc: "Clarifier les atouts transférables et les contraintes personnelles ou familiales.",
              },
              {
                title: "Préparation concrète",
                desc: "CV, entretiens, stratégie de recherche — des outils opérationnels pour passer à l’action.",
              },
              {
                title: "Projet réaliste",
                desc: "Reclassement, reconversion, recherche externe ou formation : choisir une voie tenable.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-accent mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration RH */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-mono text-primary font-semibold tracking-widest uppercase mb-4">
                Pour les entreprises et services RH
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 leading-tight">
                Une intervention dans le respect du cadre PSE
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Je collabore avec les entreprises et les services RH dans le respect
                du cadre du PSE, en proposant un <strong className="text-accent">accompagnement
                individuel</strong> et des <strong className="text-accent">ateliers collectifs</strong>
                {" "}adaptés aux besoins des salariés concernés.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Format, durée et modalités sont définis ensemble selon votre contexte,
                le nombre de salariés à accompagner et le calendrier de votre PSE.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Format", value: "Individuel & ateliers collectifs" },
                { label: "Cadre", value: "Respect strict du cadre légal du PSE" },
                { label: "Public", value: "Salariés concernés par le PSE" },
                { label: "Sur-mesure", value: "Modalités définies avec les RH" },
              ].map((info) => (
                <div key={info.label} className="bg-cyan-50 rounded-xl p-5">
                  <p className="text-xs font-semibold text-primary mb-1 uppercase tracking-wider">
                    {info.label}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">{info.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 watercolor-bg">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">
            Un PSE en cours ou à venir ?
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Si vous souhaitez savoir comment je peux intervenir auprès de vos
            collaborateurs dans le cadre d&rsquo;un PSE, je vous invite à me contacter
            pour un échange sans engagement.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-dark transition-colors shadow-sm"
          >
            Me contacter
          </Link>
        </div>
      </section>
    </>
  );
}
