import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

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
            Transmettre, c&rsquo;est ma nature
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
              <Image
                src="/images/christine-bureau.png"
                alt="Christine Allanic"
                width={400}
                height={500}
                className="rounded-2xl shadow-lg object-cover w-full"
              />
            </div>
            <div className="md:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6">
                Christine Allanic
              </h2>
              <div className="space-y-4 text-foreground/70 leading-relaxed">
                <p>
                  Mon parcours n&rsquo;est pas une ligne droite, c&rsquo;est une succession
                  de d&eacute;fis relev&eacute;s et d&rsquo;apprentissages riches. Ce qui a toujours &eacute;t&eacute;
                  le fil rouge de ma vie ? <strong>La transmission.</strong>
                </p>
                <p>
                  Bien avant d&rsquo;en faire mon m&eacute;tier, j&rsquo;ai naturellement accompagn&eacute;,
                  guid&eacute; et r&eacute;v&eacute;l&eacute; le potentiel de ceux qui croisaient ma route,
                  soutenu ceux qui cherchaient leur voie.
                </p>
                <p>
                  Aujourd&rsquo;hui, j&rsquo;ai choisi de mettre cette exp&eacute;rience et ma vision
                  holistique de l&rsquo;individu &agrave; votre service. Mon r&ocirc;le n&rsquo;est pas de vous
                  dire quoi faire, mais de vous aider &agrave; &eacute;couter ce que votre
                  exp&eacute;rience crie d&eacute;j&agrave; tout bas.
                </p>
                <p className="italic text-primary font-medium">
                  &laquo;&nbsp;Avec moi, pas de cases pr&eacute;-remplies, mais un &eacute;change authentique
                  d&rsquo;humain &agrave; humain.&nbsp;&raquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mon approche */}
      <section className="py-16 watercolor-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4 text-center">
            Mon approche
          </h2>
          <p className="text-center text-foreground/60 mb-10 max-w-2xl mx-auto italic">
            &laquo;&nbsp;Le bilan de comp&eacute;tences n&rsquo;est pas un inventaire, c&rsquo;est une rencontre avec soi-m&ecirc;me.&nbsp;&raquo;
          </p>
          <p className="text-foreground/70 leading-relaxed mb-10 text-center max-w-3xl mx-auto">
            Dans un monde qui va trop vite, je vous propose une parenth&egrave;se
            n&eacute;cessaire. Mon approche repose sur une conviction profonde :
            l&rsquo;introspection ne s&rsquo;impose pas, elle s&rsquo;accompagne.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: "Neutralit\u00e9 totale",
                desc: "Mon seul int\u00e9r\u00eat, c\u2019est vous. Pas votre entreprise, pas les tendances du march\u00e9, mais votre \u00e9panouissement.",
                icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3",
              },
              {
                title: "\u00c9thique absolue",
                desc: "Une relation de confiance bas\u00e9e sur l\u2019honn\u00eatet\u00e9 et le respect de votre rythme.",
                icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
              },
              {
                title: "\u00c9coute active",
                desc: "Pour vous aider \u00e0 clarifier vos id\u00e9es et faire \u00e9merger vos ressources cach\u00e9es.",
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
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

      {/* Qualiopi */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Image
            src="/images/qualiopi.png"
            alt="Certification Qualiopi"
            width={280}
            height={170}
            className="mx-auto mb-6 rounded-lg"
          />
          <p className="text-foreground/60 max-w-xl mx-auto">
            La certification qualit&eacute; Qualiopi a &eacute;t&eacute; d&eacute;livr&eacute;e &agrave; Formations And Co
            au titre des actions de formation et bilans de comp&eacute;tences.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 watercolor-bg">
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
