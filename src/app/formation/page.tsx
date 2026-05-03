import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nos formations \u2014 SST, Bien-\u00eatre, Service en salle | Formations And Co",
  description:
    "D\u00e9couvrez nos formations certifi\u00e9es Qualiopi : SST (Sauveteur Secouriste du Travail), Modelages Bien-\u00eatre (CIDESCO) et Service en salle de restaurant. Financement OPCO possible.",
  keywords: [
    "formation",
    "formation SST",
    "formation bien-\u00eatre",
    "formation service en salle",
    "Qualiopi",
    "OPCO",
    "Christine Allanic",
  ],
};

const formations = [
  {
    slug: "sst",
    title: "Formation SST",
    subtitle: "Sauveteur Secouriste du Travail",
    desc: "Initiale 14h ou recyclage MAC SST 7h pour ma\u00eetriser les gestes de premiers secours et devenir acteur de la pr\u00e9vention des risques. Certificat INRS d\u00e9livr\u00e9 \u00e0 l\u2019issue.",
    bullets: ["Initiale (14h, 2 jours)", "MAC SST recyclage (7h)", "Groupe de 4 \u00e0 10 personnes", "Intra-entreprise possible"],
    color: "coral",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    slug: "bien-etre",
    title: "Modelages Bien-\u00eatre",
    subtitle: "Formations massages pour professionnels",
    desc: "Formations d\u2019une journ\u00e9e directement dans votre institut. Certification CIDESCO et accr\u00e9ditation Qualiopi : prise en charge OPCO possible. Protocoles signatures (Drainage Lymphatique, Mandalas, R\u00e9flexologie, Amma, M\u00e9thode des Points de Knap).",
    bullets: ["1 journ\u00e9e intensive", "Groupe de 4 \u00e0 8 personnes", "Mobilit\u00e9 dans votre institut", "Protocoles signatures uniques"],
    color: "primary",
    icon: "M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z",
  },
  {
    slug: "service-salle",
    title: "Service en salle de restaurant",
    subtitle: "Formation flash 2 jours pour serveurs occasionnels",
    desc: "Formation intensive de 2 jours pour transformer vos recrues en serveurs op\u00e9rationnels et autonomes. Adapt\u00e9e \u00e0 votre carte et \u00e0 votre identit\u00e9. Financement OPCO possible.",
    bullets: ["2 jours intensifs", "Min. 4 \u2014 max. 8 personnes", "Dans votre restaurant", "15 ans d\u2019exp\u00e9rience terrain"],
    color: "coral",
    icon: "M3 10h18M3 14h18M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z",
  },
] as const;

export default function FormationHub() {
  return (
    <>
      {/* Hero */}
      <section className="watercolor-bg py-16 md:py-24 relative overflow-hidden">
        <div className="watercolor-blob w-80 h-80 bg-primary top-[-60px] right-[-60px]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            Certification Qualiopi &mdash; Financement OPCO
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-6">
            Nos formations
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Trois domaines d&rsquo;expertise pour faire monter en comp&eacute;tences vos &eacute;quipes
            ou d&eacute;velopper votre savoir-faire professionnel. Formations dispens&eacute;es
            directement dans vos locaux, sur-mesure et finan&ccedil;ables par votre OPCO.
          </p>
        </div>
      </section>

      {/* Cards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {formations.map((f) => {
              const accent = f.color === "coral" ? "text-coral" : "text-primary";
              const bg = f.color === "coral" ? "bg-coral" : "bg-primary";
              const bgHover = f.color === "coral" ? "hover:opacity-90" : "hover:bg-primary-dark";
              return (
                <div key={f.slug} className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 overflow-hidden flex flex-col">
                  <div className={`${bg} p-6`}>
                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={f.icon} />
                      </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-1">{f.title}</h2>
                    <p className="text-white/80 text-sm">{f.subtitle}</p>
                  </div>
                  <div className="p-7 flex-1 flex flex-col">
                    <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">{f.desc}</p>
                    <ul className="space-y-2 mb-6">
                      {f.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-gray-600">
                          <svg className={`w-4 h-4 ${accent} flex-shrink-0 mt-0.5`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {b}
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/formation/${f.slug}`}
                      className={`block text-center ${bg} text-white px-6 py-3 rounded-xl font-semibold ${bgHover} transition-all`}
                    >
                      D&eacute;couvrir
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="py-16 watercolor-bg">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm font-mono text-primary font-semibold tracking-widest uppercase mb-4">
            Pourquoi nous choisir
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-10">
            La garantie d&rsquo;un parcours certifi&eacute; et finan&ccedil;able
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { title: "Qualiopi", desc: "Organisme de formation certifi\u00e9, garantissant la qualit\u00e9 des actions de formation." },
              { title: "OPCO", desc: "Vos formations peuvent \u00eatre int\u00e9gralement prises en charge par votre OPCO (EP, AKTO, etc.)." },
              { title: "Sur-mesure", desc: "Nous nous d\u00e9pla\u00e7ons dans vos locaux et adaptons le programme \u00e0 votre contexte." },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-bold text-accent text-lg mb-2">{v.title}</h3>
                <p className="text-sm text-gray-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">
            Un projet de formation ?
          </h2>
          <p className="text-gray-500 mb-8">
            Contactez-moi pour discuter de votre besoin et &eacute;tudier ensemble les possibilit&eacute;s de financement.
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
