import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Formation Service en salle de restaurant \u2014 Flash 2 jours | Formations And Co",
  description:
    "Formation flash de 2 jours pour serveurs occasionnels : posture, accueil, techniques de service, vente additionnelle. Sur-mesure, dans votre restaurant. Certifi\u00e9 Qualiopi, financement OPCO possible.",
  keywords: [
    "formation service en salle",
    "formation serveur",
    "service restaurant",
    "formation extra serveur",
    "OPCO",
    "Qualiopi",
    "formation sur-mesure",
  ],
};

export default function FormationServiceSalle() {
  return (
    <>
      {/* Hero */}
      <section className="watercolor-bg py-16 md:py-24 relative overflow-hidden">
        <div className="watercolor-blob w-80 h-80 bg-coral top-[-60px] right-[-60px]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="mb-6">
            <Link href="/formation" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Toutes les formations
            </Link>
          </div>
          <div className="inline-flex items-center gap-2 bg-coral/10 text-coral px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            Formation Flash 2 jours &mdash; Qualiopi &amp; OPCO
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-6">
            Service en salle &mdash; Serveurs occasionnels
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            Renforcez vos &eacute;quipes instantan&eacute;ment avec du personnel
            occasionnel op&eacute;rationnel et professionnel. Une formation
            intensive de 2 jours, directement dans votre &eacute;tablissement.
          </p>
        </div>
      </section>

      {/* Photo + accroche */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/service-salle-2.png"
                alt="Formation service en salle de restaurant"
                width={720}
                height={960}
                className="rounded-3xl shadow-xl object-cover w-full"
              />
            </div>
            <div>
              <p className="text-sm font-mono text-coral font-semibold tracking-widest uppercase mb-4">
                Le besoin
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 leading-tight">
                Une qualit&eacute; de service constante, m&ecirc;me en pic d&rsquo;activit&eacute;
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  La gestion des pics d&rsquo;activit&eacute;, des extras et du personnel saisonnier
                  est un d&eacute;fi quotidien. Comment garantir une qualit&eacute; de service constante,
                  m&ecirc;me avec des collaborateurs occasionnels ?
                </p>
                <p>
                  Je vous propose une <strong>solution concr&egrave;te</strong> : transformer
                  vos recrues en serveurs efficaces et autonomes en seulement 48&nbsp;heures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B\u00e9n\u00e9fices */}
      <section className="py-16 watercolor-bg">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-mono text-coral font-semibold tracking-widest uppercase text-center mb-4">
            Vos b&eacute;n&eacute;fices
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-10 text-center">
            Pourquoi choisir cette formation ?
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "Op\u00e9rationnalit\u00e9 imm\u00e9diate", desc: "En seulement 48 heures, vos collaborateurs acqui\u00e8rent les bases fondamentales pour assurer un service fluide." },
              { title: "Qualit\u00e9 et posture", desc: "Ils apprennent les codes de l\u2019accueil, la posture professionnelle et les techniques de vente additionnelle." },
              { title: "Formation sur-mesure", desc: "Je m\u2019adapte \u00e0 votre carte, \u00e0 votre flux de travail et \u00e0 l\u2019identit\u00e9 de votre restaurant." },
              { title: "Z\u00e9ro logistique", desc: "Je me d\u00e9place directement sur les lieux, aux dates qui vous conviennent (selon disponibilit\u00e9s)." },
            ].map((b) => (
              <div key={b.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-accent text-lg mb-2">{b.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-mono text-coral font-semibold tracking-widest uppercase text-center mb-4">
            Le programme
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-3 text-center">
            2 jours pour ma&icirc;triser les fondamentaux
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Approche ultra-pratique, bas&eacute;e sur des mises en situation r&eacute;elles
            et des travaux en bin&ocirc;mes pour une assimilation rapide.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Posture & Accueil", desc: "Les cl\u00e9s pour faire une excellente premi\u00e8re impression." },
              { title: "Techniques de service", desc: "Ma\u00eetriser le port d\u2019assiettes, le service des boissons, le d\u00e9barrassage efficace." },
              { title: "Organisation & Efficacit\u00e9", desc: "G\u00e9rer son rang, anticiper les besoins, communiquer avec la cuisine." },
              { title: "Vente & Recommandation", desc: "Savoir pr\u00e9senter la carte et booster le ticket moyen." },
            ].map((m) => (
              <div key={m.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-accent text-lg mb-2">{m.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formatrice */}
      <section className="py-16 watercolor-bg">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <Image
                src="/images/service-salle.jpg"
                alt="Christine Allanic, formatrice service en salle"
                width={500}
                height={680}
                className="rounded-2xl shadow-xl object-cover w-full"
              />
            </div>
            <div className="md:col-span-2">
              <p className="text-sm font-mono text-coral font-semibold tracking-widest uppercase mb-4">
                Votre formatrice
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 leading-tight">
                L&rsquo;exigence du terrain au service de votre &eacute;quipe
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Forte de <strong>15 ann&eacute;es d&rsquo;exp&eacute;rience</strong> en tant que
                Responsable de Salle dans des &eacute;tablissements distingu&eacute;s par
                les guides les plus prestigieux, je transmets non seulement des
                techniques, mais aussi une exigence et une passion pour le service
                d&rsquo;excellence. Chaque parcours est personnalis&eacute; pour s&rsquo;aligner
                parfaitement avec vos attentes et votre contexte professionnel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modalit\u00e9s */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-3">
            Financement &amp; Modalit&eacute;s pratiques
          </h2>
          <p className="text-gray-600 mb-8">La garantie d&rsquo;un parcours financ&eacute; et certifi&eacute;.</p>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { label: "Garantie Qualiopi", value: "Pour vos collaborateurs professionnels, votre OPCO peut prendre en charge le financement. Je vous accompagne dans la constitution du dossier." },
              { label: "Tarif", value: "Sur devis, adapt\u00e9 en fonction du budget de votre OPCO. Financement personnel \u00e9galement possible." },
              { label: "Participants", value: "Minimum 4 personnes (pour le travail en bin\u00f4mes), maximum 8 personnes." },
              { label: "Lieu", value: "Formation dispens\u00e9e directement au sein de votre restaurant." },
              { label: "Dur\u00e9e", value: "2 jours intensifs (th\u00e9orie et pratique adapt\u00e9es \u00e0 votre contexte)." },
              { label: "Dates", value: "\u00c0 d\u00e9finir ensemble, selon vos besoins et mes disponibilit\u00e9s." },
            ].map((info) => (
              <div key={info.label} className="bg-cyan-50 rounded-xl p-5">
                <p className="text-sm font-semibold text-coral mb-1">{info.label}</p>
                <p className="text-gray-600">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 watercolor-bg">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">
            Envie d&rsquo;optimiser la qualit&eacute; de votre service ?
          </h2>
          <p className="text-gray-500 mb-8">
            Contactez-moi pour discuter de votre besoin. Nous d&eacute;finirons ensemble les dates
            et je vous accompagnerai dans les d&eacute;marches aupr&egrave;s de votre OPCO.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-coral text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-sm"
          >
            Me contacter
          </Link>
        </div>
      </section>
    </>
  );
}
