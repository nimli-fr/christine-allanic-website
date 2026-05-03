import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Formation Modelages Bien-\u00eatre \u2014 CIDESCO & Qualiopi | Formations And Co",
  description:
    "Formations massages bien-\u00eatre sur-mesure pour professionnels de l\u2019esth\u00e9tique : Drainage Lymphatique, Mandalas, R\u00e9flexologie, Amma, M\u00e9thode des Points de Knap. Certification CIDESCO, financement OPCO possible.",
  keywords: [
    "formation modelages",
    "formation bien-\u00eatre",
    "massage",
    "CIDESCO",
    "drainage lymphatique",
    "r\u00e9flexologie plantaire",
    "Amma",
    "points de Knap",
    "OPCO",
    "Qualiopi",
  ],
};

const protocoles = [
  {
    title: "Drainage Lymphatique \u00c9nerg\u00e9tique Visage",
    desc: "Allier technicit\u00e9 et \u00e9clat pour un effet liftant et d\u00e9toxifiant imm\u00e9diat.",
  },
  {
    title: "Massage des Mandalas",
    desc: "Une exp\u00e9rience sensorielle profonde pour une relaxation absolue du corps et de l\u2019esprit.",
  },
  {
    title: "R\u00e9flexologie Plantaire Bien-\u00eatre",
    desc: "Ma\u00eetrisez les points r\u00e9flexes pour lib\u00e9rer les tensions et r\u00e9\u00e9quilibrer les \u00e9nergies.",
  },
  {
    title: "Amma (Massage assis)",
    desc: "Le soin id\u00e9al pour le dos, rapide et efficace, parfait pour une client\u00e8le press\u00e9e ou des \u00e9v\u00e9nements ext\u00e9rieurs.",
  },
];

export default function FormationBienEtre() {
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
            CIDESCO &mdash; Certification Qualiopi &mdash; Financement OPCO
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-6">
            Formation Modelages Bien-&Ecirc;tre
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
            Devenez l&rsquo;expert de demain. Des formations sur-mesure d&rsquo;une journ&eacute;e,
            directement dans votre institut, pour monter en comp&eacute;tences,
            fid&eacute;liser votre client&egrave;le ou redynamiser votre carte de soins.
          </p>
        </div>
      </section>

      {/* Photo + accroche */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <Image
                src="/images/formation-massage.png"
                alt="Christine Allanic enseignant les techniques de modelages bien-&ecirc;tre"
                width={720}
                height={800}
                className="rounded-3xl shadow-xl object-cover w-full"
              />
            </div>
            <div>
              <p className="text-sm font-mono text-primary font-semibold tracking-widest uppercase mb-4">
                Une expertise reconnue mondialement
              </p>
              <h2 className="text-2xl md:text-3xl font-bold text-accent mb-6 leading-tight">
                Devenez l&rsquo;expert de demain
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Forte de ma certification <strong>CIDESCO</strong> &mdash; r&eacute;f&eacute;rence
                mondiale de l&rsquo;excellence en esth&eacute;tique (standard d&rsquo;excellence international) &mdash;
                et de mon accr&eacute;ditation <strong>Qualiopi</strong>, je vous propose des formations
                d&rsquo;une journ&eacute;e directement au sein de votre &eacute;tablissement, en petit comit&eacute;
                (4 &agrave; 8 personnes) pour garantir une pratique fluide en bin&ocirc;mes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pourquoi */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-mono text-primary font-semibold tracking-widest uppercase text-center mb-4">
            Pourquoi choisir mes formations
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-10 text-center">
            Quatre engagements pour votre mont&eacute;e en comp&eacute;tences
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Z\u00e9ro reste \u00e0 charge", desc: "Gr\u00e2ce \u00e0 Qualiopi, vos formations peuvent \u00eatre int\u00e9gralement prises en charge par votre OPCO (EP, AKTO, etc.)." },
              { title: "Sur-mesure & Mobilit\u00e9", desc: "Je me d\u00e9place dans votre institut pour former vos \u00e9quipes dans leur environnement quotidien." },
              { title: "Apprentissage immersif", desc: "Sessions en petit comit\u00e9 (4 \u00e0 8 personnes) pour une pratique fluide en bin\u00f4mes et un suivi personnalis\u00e9." },
              { title: "Flexibilit\u00e9 totale", desc: "Nous fixons la date ensemble selon vos disponibilit\u00e9s et votre planning de r\u00e9servation." },
            ].map((item) => (
              <div key={item.title} className="bg-cyan-50 rounded-2xl p-6">
                <h3 className="font-bold text-accent mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Knap */}
      <section className="py-16 watercolor-bg">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-mono text-primary font-semibold tracking-widest uppercase text-center mb-4">
            Focus &mdash; Protocole signature
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-3 text-center">
            La M&eacute;thode des Points de Knap
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto italic">
            Soulagement cibl&eacute; et revitalisation intense.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <p className="text-gray-600 leading-relaxed mb-6">
              Apprenez &agrave; ma&icirc;triser les <strong>18 points de pression fondamentaux</strong>
              {" "}d&eacute;couverts par Georgia Knap. Cette technique experte permet de :
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Lib\u00e9rer les tensions", desc: "\u00c9liminer les toxines accumul\u00e9es aux points d\u2019\u00e9mergence nerveux." },
                { title: "Action imm\u00e9diate", desc: "Soulager les contractures musculaires et les douleurs articulaires." },
                { title: "Approche globale", desc: "Relancer l\u2019\u00e9nergie vitale et am\u00e9liorer la circulation sanguine." },
              ].map((b) => (
                <div key={b.title} className="border-l-4 border-primary pl-4">
                  <h4 className="font-bold text-accent mb-1">{b.title}</h4>
                  <p className="text-sm text-gray-600">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mes protocoles */}
      <section className="py-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-mono text-primary font-semibold tracking-widest uppercase text-center mb-4">
            Catalogue
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-3 text-center">
            Mes Protocoles Signatures
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Apportez une valeur ajout&eacute;e unique &agrave; vos prestations avec des techniques ma&icirc;tris&eacute;es.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {protocoles.map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                <h3 className="font-bold text-accent text-lg mb-2">{p.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modalit\u00e9s */}
      <section className="py-16 watercolor-bg">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-8">
            Modalit&eacute;s pratiques &amp; Financement
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { label: "Tarification", value: "Adapt\u00e9e aux bar\u00e8mes de prise en charge de votre OPCO. Devis personnalis\u00e9 sur demande." },
              { label: "Dur\u00e9e", value: "1 journ\u00e9e intensive (th\u00e9orie et pratique)." },
              { label: "Lieu", value: "Directement chez vous (d\u00e9placement inclus selon zone g\u00e9ographique)." },
              { label: "Public", value: "Professionnels de l\u2019esth\u00e9tique et du bien-\u00eatre, ou \u00e0 titre personnel." },
              { label: "Groupe", value: "4 \u00e0 8 personnes pour garantir la qualit\u00e9 d\u2019apprentissage." },
              { label: "Accessibilit\u00e9", value: "Accessible aux personnes en situation de handicap." },
            ].map((info) => (
              <div key={info.label} className="bg-white rounded-xl p-5 shadow-sm">
                <p className="text-sm font-semibold text-primary mb-1">{info.label}</p>
                <p className="text-gray-600">{info.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-4">
            Pr&ecirc;t &agrave; transformer votre savoir-faire ?
          </h2>
          <p className="text-gray-500 mb-8">
            Ne laissez pas le budget freiner votre &eacute;volution. Ensemble, montons votre dossier de financement
            et planifions votre prochaine mont&eacute;e en comp&eacute;tences.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-dark transition-colors shadow-sm"
          >
            Demander mon rendez-vous
          </Link>
        </div>
      </section>
    </>
  );
}
