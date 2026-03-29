import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden watercolor-bg">
        <div className="watercolor-blob w-96 h-96 bg-primary top-[-100px] right-[-100px]" />
        <div className="watercolor-blob w-72 h-72 bg-accent-light bottom-[-50px] left-[-80px]" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Certifi&eacute; Qualiopi
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent leading-tight mb-6">
              Formations<br />
              <span className="text-primary">And Co</span>
            </h1>

            <p className="text-lg md:text-xl text-foreground/70 mb-8 leading-relaxed">
              Consultante en bilan de comp&eacute;tences certifi&eacute;e.
              Accompagnement personnalis&eacute; pour r&eacute;v&eacute;ler votre potentiel
              et construire votre avenir professionnel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/bilan-de-competences"
                className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors text-center"
              >
                D&eacute;couvrir le Bilan de Comp&eacute;tences
              </Link>
              <Link
                href="/contact"
                className="border-2 border-accent text-accent px-6 py-3 rounded-lg font-semibold hover:bg-accent hover:text-white transition-colors text-center"
              >
                Prendre rendez-vous
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Qualiopi Banner */}
      <section className="bg-accent text-white py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left">
          <div className="bg-white rounded-lg px-4 py-2 flex items-center gap-2">
            <span className="text-accent font-bold text-sm">QUALIOPI</span>
            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-sm text-white/80">
            La certification qualit&eacute; a &eacute;t&eacute; d&eacute;livr&eacute;e au titre des cat&eacute;gories d&rsquo;actions suivantes :
            <strong className="text-white"> Actions de formation &amp; Bilans de comp&eacute;tences</strong>
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-accent mb-4">
            Mes prestations
          </h2>
          <p className="text-center text-foreground/60 mb-12 max-w-2xl mx-auto">
            Un accompagnement sur-mesure pour chaque &eacute;tape de votre parcours professionnel.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Bilan de Comp&eacute;tences */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-accent mb-3">Bilan de Comp&eacute;tences</h3>
              <p className="text-foreground/60 mb-6 leading-relaxed">
                Faites le point sur vos comp&eacute;tences, aptitudes et motivations.
                Un accompagnement personnalis&eacute; pour d&eacute;finir un projet professionnel
                coh&eacute;rent et r&eacute;aliste.
              </p>
              <ul className="space-y-2 mb-6">
                {["24h d\u2019accompagnement sur 12 semaines", "\u00c9ligible CPF", "En pr\u00e9sentiel ou \u00e0 distance"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground/70">
                    <svg className="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/bilan-de-competences"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                En savoir plus
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Formation SST */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
              <div className="w-14 h-14 bg-coral/10 rounded-xl flex items-center justify-center mb-6">
                <svg className="w-7 h-7 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-accent mb-3">Formation SST</h3>
              <p className="text-foreground/60 mb-6 leading-relaxed">
                Formation Sauveteur Secouriste du Travail. Apprenez les gestes
                qui sauvent et devenez acteur de la pr&eacute;vention dans votre entreprise.
              </p>
              <ul className="space-y-2 mb-6">
                {["Formation initiale & recyclage (MAC SST)", "14h de formation en pr\u00e9sentiel", "Certificat INRS"].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground/70">
                    <svg className="w-4 h-4 text-coral flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/formation-sst"
                className="inline-flex items-center gap-2 text-coral font-semibold hover:gap-3 transition-all"
              >
                En savoir plus
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose me */}
      <section className="py-16 md:py-24 watercolor-bg">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-accent mb-12">
            Pourquoi me choisir ?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Certifi\u00e9e Qualiopi", desc: "Garantie de qualit\u00e9 reconnue par l\u2019\u00c9tat" },
              { icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z", title: "Suivi personnalis\u00e9", desc: "Un accompagnement adapt\u00e9 \u00e0 vos besoins" },
              { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", title: "Flexibilit\u00e9", desc: "Horaires adapt\u00e9s, pr\u00e9sentiel ou distanciel" },
              { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", title: "Accessibilit\u00e9 PSH", desc: "Formations accessibles aux personnes en situation de handicap" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-6 text-center shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-accent mb-2">{item.title}</h3>
                <p className="text-sm text-foreground/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6">
            Pr&ecirc;t(e) &agrave; donner un nouvel &eacute;lan &agrave; votre carri&egrave;re ?
          </h2>
          <p className="text-lg text-foreground/60 mb-8">
            Contactez-moi pour un premier &eacute;change gratuit et sans engagement.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-dark transition-colors"
          >
            Prendre rendez-vous
          </Link>
        </div>
      </section>
    </>
  );
}
