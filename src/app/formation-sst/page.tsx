import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Formations SST | Formations And Co",
  description:
    "Formation Sauveteur Secouriste du Travail (SST) : initiale 14h et recyclage MAC SST 7h. Certificat INRS. Organisme certifi\u00e9 Qualiopi.",
};

export default function FormationSST() {
  return (
    <>
      {/* Hero */}
      <section className="watercolor-bg py-16 md:py-24 relative overflow-hidden">
        <div className="watercolor-blob w-80 h-80 bg-coral top-[-60px] right-[-60px]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="inline-flex items-center gap-2 bg-coral/10 text-coral px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            Certificat INRS
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-accent mb-6">
            Formations SST
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
            Sauveteur Secouriste du Travail &mdash; Apprenez les gestes de premiers
            secours et devenez acteur de la pr&eacute;vention des risques dans votre entreprise.
          </p>
        </div>
      </section>

      {/* Deux formations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-mono text-primary font-semibold tracking-widest uppercase text-center mb-4">
            Deux formations
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-10 text-center">
            Choisissez la formation adapt&eacute;e &agrave; votre besoin
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Formation initiale */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-coral to-primary p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Formation initiale SST</h3>
                <p className="text-white/80">Devenez Sauveteur Secouriste du Travail</p>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-cyan-50 rounded-xl px-4 py-2 text-center">
                    <p className="text-2xl font-bold text-primary">14h</p>
                    <p className="text-xs text-gray-500">2 jours</p>
                  </div>
                  <div className="bg-cyan-50 rounded-xl px-4 py-2 text-center">
                    <p className="text-2xl font-bold text-primary">4-10</p>
                    <p className="text-xs text-gray-500">participants</p>
                  </div>
                  <div className="bg-cyan-50 rounded-xl px-4 py-2 text-center">
                    <p className="text-2xl font-bold text-primary">INRS</p>
                    <p className="text-xs text-gray-500">certificat</p>
                  </div>
                </div>

                <h4 className="font-semibold text-accent mb-3">Programme</h4>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  {[
                    "Le r\u00f4le du SST dans l\u2019entreprise",
                    "Le cadre juridique de l\u2019intervention",
                    "La pr\u00e9vention des risques professionnels",
                    "Les gestes de premiers secours",
                    "Prot\u00e9ger, examiner, faire alerter, secourir",
                    "Mises en situation pratiques",
                    "\u00c9valuation certificative",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-coral flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="block text-center bg-coral text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
                >
                  Demander un devis
                </Link>
              </div>
            </div>

            {/* Recyclage MAC SST */}
            <div className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-primary to-primary-dark p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Recyclage MAC SST</h3>
                <p className="text-white/80">Maintenez et actualisez vos comp&eacute;tences</p>
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-cyan-50 rounded-xl px-4 py-2 text-center">
                    <p className="text-2xl font-bold text-primary">7h</p>
                    <p className="text-xs text-gray-500">1 jour</p>
                  </div>
                  <div className="bg-cyan-50 rounded-xl px-4 py-2 text-center">
                    <p className="text-2xl font-bold text-primary">24</p>
                    <p className="text-xs text-gray-500">mois max</p>
                  </div>
                  <div className="bg-cyan-50 rounded-xl px-4 py-2 text-center">
                    <p className="text-2xl font-bold text-primary">INRS</p>
                    <p className="text-xs text-gray-500">renouvellement</p>
                  </div>
                </div>

                <h4 className="font-semibold text-accent mb-3">Programme</h4>
                <ul className="space-y-2 text-sm text-gray-600 mb-6">
                  {[
                    "Retour d\u2019exp\u00e9rience sur les situations rencontr\u00e9es",
                    "Actualisation des comp\u00e9tences SST",
                    "Rappel des gestes de premiers secours",
                    "\u00c9volutions r\u00e9glementaires et techniques",
                    "Mises en situation pratiques",
                    "\u00c9valuation certificative",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <svg className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="block text-center bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors"
                >
                  Demander un devis
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Infos pratiques communes */}
      <section className="py-16 watercolor-bg">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-accent mb-8">
            Informations communes
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { label: "Modalit\u00e9", value: "Pr\u00e9sentiel uniquement (pratique obligatoire)" },
              { label: "Groupe", value: "4 \u00e0 10 participants" },
              { label: "Mat\u00e9riel", value: "Mannequins, d\u00e9fibrillateur de formation, plan d\u2019intervention" },
              { label: "Certification", value: "Certificat SST d\u00e9livr\u00e9 par l\u2019INRS (validit\u00e9 24 mois)" },
              { label: "Lieu", value: "Formation possible dans vos locaux (intra-entreprise)" },
              { label: "Accessibilit\u00e9", value: "Accessible aux personnes en situation de handicap" },
            ].map((info) => (
              <div key={info.label} className="bg-white rounded-xl p-5 shadow-sm">
                <p className="text-sm font-semibold text-coral mb-1">{info.label}</p>
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
            Vous souhaitez former vos &eacute;quipes ?
          </h2>
          <p className="text-gray-500 mb-8">
            Contactez-moi pour organiser une session SST dans vos locaux ou obtenir un devis personnalis&eacute;.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-coral text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity shadow-sm"
          >
            Demander un devis
          </Link>
        </div>
      </section>
    </>
  );
}
