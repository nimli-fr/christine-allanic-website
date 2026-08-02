import Link from "next/link";
import Image from "next/image";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";

export default function Home() {
  return (
    <>
      {/* Hero - full screen avec photo plage */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <Image
          src="/images/hero-plage.jpg"
          alt="Nouveau d\u00e9part - Vue sur l'oc\u00e9an"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/75 via-accent-light/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 relative z-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-white/20">
              <span className="w-2 h-2 bg-primary-light rounded-full animate-pulse" />
              Bilan de comp&eacute;tences &mdash; Certification Qualiopi
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Et si votre parcours devenait votre plus grande{" "}
              <span className="text-primary-light">opportunit&eacute;&nbsp;?</span>
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-4 leading-relaxed max-w-xl">
              Un accompagnement profond et sur-mesure pour transformer votre
              parcours en un nouveau projet de vie.{" "}
              <strong className="text-white">20&nbsp;heures pour vous r&eacute;v&eacute;ler</strong>, &eacute;ligible au financement CPF
              <sup>*</sup>.
            </p>
            <p className="text-xs text-white/60 mb-10 max-w-xl">
              <sup>*</sup> Prise en charge &agrave; 100&nbsp;% pour les personnes inscrites &agrave; France Travail. Financement OPCO &eacute;galement possible pour les salari&eacute;s.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/bilan-de-competences"
                className="bg-primary text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-primary-dark transition-colors text-center shadow-lg"
              >
                D&eacute;couvrir le Bilan de comp&eacute;tences
              </Link>
              <Link
                href="/contact"
                className="bg-white/10 backdrop-blur-sm text-white border border-white/20 px-7 py-3.5 rounded-xl font-semibold hover:bg-white/20 transition-colors text-center"
              >
                Demander un entretien d&eacute;couverte
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-14 max-w-md">
              {[
                { number: "20h", label: "d\u2019accompagnement" },
                { number: "CPF", label: "& OPCO \u00e9ligibles" },
                { number: "1", label: "seul objectif : vous" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-2xl md:text-3xl font-bold text-primary-light">{stat.number}</p>
                  <p className="text-xs text-white/60 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Qualiopi Banner */}
      <section className="bg-white py-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
          <Image
            src="/images/qualiopi.png"
            alt="Certification Qualiopi - R\u00e9publique Fran\u00e7aise"
            width={200}
            height={120}
            className="rounded-lg"
          />
          <p className="text-sm text-gray-600">
            La certification qualit&eacute; a &eacute;t&eacute; d&eacute;livr&eacute;e au titre de la cat&eacute;gorie d&rsquo;action suivante :
            <br />
            <strong className="text-accent">Actions de formation &amp; Bilans de comp&eacute;tences</strong>
          </p>
        </div>
      </section>

      {/* A propos - 2 colonnes */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <Image
                src="/images/christine-bureau.jpg"
                alt="Christine Allanic en consultation"
                width={500}
                height={625}
                className="rounded-3xl shadow-xl object-cover w-full"
              />
              {/* Floating quote card */}
              <div className="absolute -bottom-6 -right-6 bg-primary text-white rounded-2xl p-6 shadow-xl max-w-[260px] hidden md:block">
                <p className="text-sm font-medium italic leading-relaxed">
                  &laquo;&nbsp;Le bilan de comp&eacute;tences n&rsquo;est pas un inventaire, c&rsquo;est une rencontre avec soi-m&ecirc;me.&nbsp;&raquo;
                </p>
              </div>
            </div>

            <div>
              <p className="text-sm font-mono text-primary font-semibold tracking-widest uppercase mb-4">
                &Agrave; propos de Christine A.
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6 leading-tight">
                Transmettre, c&rsquo;est ma nature
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Mon parcours n&rsquo;est pas une ligne droite. Ce qui a toujours &eacute;t&eacute;
                  le fil rouge de ma vie ? <strong className="text-accent">La transmission.</strong>
                </p>
                <p>
                  Aujourd&rsquo;hui, j&rsquo;ai choisi de mettre cette exp&eacute;rience et ma vision
                  holistique &agrave; votre service. Mon r&ocirc;le n&rsquo;est pas de vous
                  dire quoi faire, mais de vous aider &agrave; &eacute;couter ce que votre
                  exp&eacute;rience murmure d&eacute;j&agrave;.
                </p>
              </div>

              {/* Values cards */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Neutralit\u00e9" },
                  { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", title: "\u00c9thique" },
                  { icon: "M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m-2.828-9.9a9 9 0 012.828-2.828", title: "\u00c9coute" },
                ].map((v) => (
                  <div key={v.title} className="bg-cyan-50 rounded-xl p-4 text-center">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={v.icon} />
                      </svg>
                    </div>
                    <p className="text-xs font-semibold text-accent">{v.title}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/a-propos"
                className="inline-flex items-center gap-2 text-primary font-semibold mt-8 hover:gap-3 transition-all"
              >
                En savoir plus sur mon parcours
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 md:py-28 watercolor-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-mono text-primary font-semibold tracking-widest uppercase text-center mb-4">
            Mes prestations
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-accent mb-4">
            Un accompagnement sur-mesure
          </h2>
          <p className="text-center text-gray-500 mb-14 max-w-2xl mx-auto">
            Pour chaque &eacute;tape de votre parcours professionnel.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Bilan de Comp&eacute;tences */}
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all p-7 border border-gray-100 flex flex-col">
              <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-accent mb-3">Bilan de Comp&eacute;tences</h3>
              <p className="text-gray-500 mb-6 leading-relaxed text-sm flex-1">
                20h d&rsquo;accompagnement personnalis&eacute; pour transformer vos
                interrogations en un projet concret. &Eacute;ligible CPF
                <sup>*</sup> et OPCO.
              </p>
              <Link
                href="/bilan-de-competences"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
              >
                D&eacute;couvrir
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Formation SST */}
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all p-7 border border-gray-100 flex flex-col">
              <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-accent mb-3">Formation SST</h3>
              <p className="text-gray-500 mb-6 leading-relaxed text-sm flex-1">
                Initiale (14h) ou recyclage MAC SST (7h) pour ma&icirc;triser les
                gestes de premiers secours. Certificat INRS, financement OPCO.
              </p>
              <Link
                href="/formation/sst"
                className="inline-flex items-center gap-2 text-coral font-semibold text-sm hover:gap-3 transition-all"
              >
                D&eacute;couvrir
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Formation Bien-&ecirc;tre */}
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all p-7 border border-gray-100 flex flex-col">
              <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-accent mb-3">Modelages Bien-&ecirc;tre</h3>
              <p className="text-gray-500 mb-6 leading-relaxed text-sm flex-1">
                Formations massages bien-&ecirc;tre sur-mesure pour
                professionnels. Certification CIDESCO, financement OPCO possible.
              </p>
              <Link
                href="/formation/bien-etre"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
              >
                D&eacute;couvrir
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Service en salle */}
            <div className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all p-7 border border-gray-100 flex flex-col">
              <div className="w-14 h-14 bg-cyan-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <svg className="w-7 h-7 text-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M3 14h18M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-accent mb-3">Service en salle</h3>
              <p className="text-gray-500 mb-6 leading-relaxed text-sm flex-1">
                Formation flash 2 jours pour serveurs occasionnels.
                Op&eacute;rationnels imm&eacute;diatement, dans votre restaurant. OPCO.
              </p>
              <Link
                href="/formation/service-salle"
                className="inline-flex items-center gap-2 text-coral font-semibold text-sm hover:gap-3 transition-all"
              >
                D&eacute;couvrir
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>

          <p className="text-xs text-gray-500 mt-8 text-center max-w-2xl mx-auto">
            <sup>*</sup> Bilan de comp&eacute;tences pris en charge &agrave; 100&nbsp;% par le CPF pour les personnes inscrites &agrave; France Travail.
          </p>
        </div>
      </section>

      {/* Investissez sur vous */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-mono text-primary font-semibold tracking-widest uppercase mb-4">
                CPF &amp; OPCO &agrave; votre service
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6 leading-tight">
                Investissez sur vous
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Il est rare de pouvoir s&rsquo;offrir un luxe aussi pr&eacute;cieux que le temps
                  pour soi. Ce bilan de comp&eacute;tences est une parenth&egrave;se de 20&nbsp;heures
                  qui peut changer les prochaines ann&eacute;es de votre vie
                  professionnelle.
                </p>
                <p>
                  <strong className="text-accent">La bonne nouvelle ?</strong>{" "}
                  Ce parcours est <strong>&eacute;ligible au financement CPF</strong> (Compte Personnel de Formation)
                  et peut &eacute;galement &ecirc;tre pris en charge par votre <strong>OPCO</strong>.
                  Je vous accompagne personnellement dans les d&eacute;marches
                  pour que votre seule pr&eacute;occupation soit votre
                  &eacute;panouissement.
                </p>
                <p className="text-xs text-gray-500">
                  <sup>*</sup> Prise en charge &agrave; 100&nbsp;% par le CPF r&eacute;serv&eacute;e aux personnes inscrites &agrave; France Travail.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link
                  href="/contact"
                  className="bg-primary text-white px-7 py-3.5 rounded-xl font-semibold hover:bg-primary-dark transition-colors text-center shadow-sm"
                >
                  Je me lance
                </Link>
                <a
                  href="https://www.moncompteformation.gouv.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-primary text-primary px-7 py-3.5 rounded-xl font-semibold hover:bg-primary hover:text-white transition-colors text-center"
                >
                  Acc&eacute;der &agrave; Mon Compte CPF
                </a>
              </div>
            </div>

            <Image
              src="/images/consultation.jpg"
              alt="S&eacute;ance d'accompagnement"
              width={500}
              height={625}
              className="rounded-3xl shadow-xl object-cover mx-auto w-full"
            />
          </div>
        </div>
      </section>

      {/* Pourquoi moi */}
      <section className="py-20 md:py-28 watercolor-bg">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-mono text-primary font-semibold tracking-widest uppercase text-center mb-4">
            Pourquoi me choisir
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-accent mb-14 max-w-2xl mx-auto leading-tight">
            Un accompagnement fond&eacute; sur la bienveillance et l&rsquo;authenticit&eacute;
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Neutralit\u00e9 totale", desc: "Mon seul int\u00e9r\u00eat, c\u2019est vous et votre \u00e9panouissement" },
              { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", title: "\u00c9thique absolue", desc: "Une relation de confiance, d\u2019honn\u00eatet\u00e9 et de respect de votre rythme" },
              { icon: "M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15.536a5 5 0 001.414 1.414m-2.828-9.9a9 9 0 012.828-2.828", title: "\u00c9coute active", desc: "Pour faire \u00e9merger vos ressources et clarifier vos id\u00e9es" },
              { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", title: "Accessibilit\u00e9", desc: "Formations adapt\u00e9es aux personnes en situation de handicap" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                </div>
                <h3 className="font-bold text-accent mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* T&eacute;moignages */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-sm font-mono text-primary font-semibold tracking-widest uppercase text-center mb-4">
            T&eacute;moignages
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center text-accent mb-14 max-w-2xl mx-auto leading-tight">
            Ce qu&rsquo;en disent mes b&eacute;n&eacute;ficiaires
          </h2>

          <TestimonialsCarousel
            testimonials={[
              {
                quote:
                  "J’ai été agréablement surprise par la qualité de ce bilan de compétences, qui s’est déroulé tout en douceur. Christine s’est montrée extrêmement à l’écoute et disponible tout au long de mon parcours. Le résultat va bien au-delà de mes attentes initiales. Je suis pleinement satisfaite de cette expérience et je vous recommande vivement son accompagnement !",
                author: "Sandra F.",
                context: "Bilan de compétences",
                date: "Juin 2026",
              },
              {
                quote:
                  "Grâce à l’accompagnement de Christine, cela m’a aidé à franchir un cap pour dépasser mes appréhensions, surmonter mes peurs liées à ma transition professionnelle et renforcer ma détermination à réussir ma reconversion. Son soutien m'a permis de confirmer ma conviction de réussir et de démarrer concrètement mon projet. L'ajustement des points techniques et administratifs, ainsi que la création d'un plan de secours, m'ont donné toutes les clés pour me lancer sereinement !",
                author: "Alexis M.",
                context: "Bénéficiaire du bilan de compétences",
                date: "Juillet 2026",
              },
            ]}
          />
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-accent mb-6 leading-tight">
            C&rsquo;est le moment id&eacute;al pour transformer votre capital exp&eacute;rience en un futur &eacute;panouissant
          </h2>
          <p className="text-lg text-gray-500 mb-10">
            Contactez-moi pour un premier &eacute;change sans engagement.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-primary-dark transition-colors shadow-lg"
          >
            Demander un entretien d&eacute;couverte
          </Link>
        </div>
      </section>
    </>
  );
}
