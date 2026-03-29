import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "\u00c0 propos | Formations And Co - Christine Allanic",
  description:
    "D\u00e9couvrez le parcours de Christine Allanic, formatrice ind\u00e9pendante certifi\u00e9e Qualiopi, sp\u00e9cialis\u00e9e en bilan de comp\u00e9tences et formations SST.",
};

export default function APropos() {
  return (
    <>
      {/* Hero */}
      <section className="watercolor-bg py-16 md:py-24 relative overflow-hidden">
        <div className="watercolor-blob w-80 h-80 bg-primary top-[-60px] left-[-60px]" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-6">
            &Agrave; propos
          </h1>
          <p className="text-lg text-foreground/70 max-w-2xl leading-relaxed">
            Formatrice ind&eacute;pendante passionn&eacute;e par l&rsquo;accompagnement
            et le d&eacute;veloppement des comp&eacute;tences.
          </p>
        </div>
      </section>

      {/* Qui suis-je */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-1">
              <div className="w-48 h-48 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
                <span className="text-6xl font-bold text-primary/40">CA</span>
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6">
                Christine Allanic
              </h2>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  Consultante en bilan de comp&eacute;tences et formatrice SST, j&rsquo;ai cr&eacute;&eacute;
                  <strong> Formations And Co</strong> avec la conviction que chaque personne
                  poss&egrave;de des ressources insoup&ccedil;onn&eacute;es qui ne demandent qu&rsquo;&agrave; &ecirc;tre
                  r&eacute;v&eacute;l&eacute;es.
                </p>
                <p>
                  Mon approche est centr&eacute;e sur l&rsquo;&eacute;coute, la bienveillance et la
                  rigueur. Je m&rsquo;engage &agrave; offrir un accompagnement de qualit&eacute;,
                  certifi&eacute; Qualiopi, qui r&eacute;pond aux exigences du R&eacute;f&eacute;rentiel National Qualit&eacute;.
                </p>
                <p>
                  Que vous soyez en qu&ecirc;te de sens dans votre vie professionnelle ou
                  que vous souhaitiez former vos &eacute;quipes aux gestes de premiers secours,
                  je suis l&agrave; pour vous accompagner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-16 watercolor-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-10 text-center">
            Mes valeurs
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: "Bienveillance",
                desc: "Un espace d\u2019\u00e9coute et de confiance pour vous permettre de vous exprimer librement.",
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
              },
              {
                title: "Professionnalisme",
                desc: "Des m\u00e9thodes \u00e9prouv\u00e9es, une d\u00e9marche qualit\u00e9 certifi\u00e9e et un engagement de r\u00e9sultat.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
              {
                title: "Accessibilit\u00e9",
                desc: "Des formations ouvertes \u00e0 tous, adapt\u00e9es \u00e0 chaque situation, y compris les personnes en situation de handicap.",
                icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
              },
            ].map((v) => (
              <div key={v.title} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={v.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-accent mb-2">{v.title}</h3>
                <p className="text-sm text-foreground/60">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">
            Envie d&rsquo;&eacute;changer ?
          </h2>
          <p className="text-foreground/60 mb-8">
            N&rsquo;h&eacute;sitez pas &agrave; me contacter pour discuter de votre projet.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            Me contacter
          </Link>
        </div>
      </section>
    </>
  );
}
