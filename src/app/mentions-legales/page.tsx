import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions l\u00e9gales | Formations And Co",
};

export default function MentionsLegales() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-accent mb-10">
          Mentions l&eacute;gales
        </h1>

        <div className="space-y-8 text-foreground/70 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-accent mb-3">&Eacute;diteur du site</h2>
            <p>
              <strong>Formations And Co</strong><br />
              Christine Allanic &mdash; Formatrice ind&eacute;pendante (micro-entreprise)<br />
              SIRET : 33022175700051<br />
              Num&eacute;ro de d&eacute;claration d&rsquo;activit&eacute; (NDA) : 24450457945<br />
              Email : <a href="mailto:formationsetco@gmail.com" className="text-primary hover:underline">formationsetco@gmail.com</a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-accent mb-3">H&eacute;bergement</h2>
            <p>
              Ce site est h&eacute;berg&eacute; par <strong>Vercel Inc.</strong><br />
              440 N Barranca Ave #4133, Covina, CA 91723, &Eacute;tats-Unis
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-accent mb-3">Certification Qualiopi</h2>
            <p>
              La certification qualit&eacute; Qualiopi a &eacute;t&eacute; d&eacute;livr&eacute;e &agrave; Formations And Co
              au titre des cat&eacute;gories d&rsquo;actions suivantes :
            </p>
            <ul className="list-disc list-inside mt-2">
              <li>Actions de formation</li>
              <li>Bilans de comp&eacute;tences</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-accent mb-3">Propri&eacute;t&eacute; intellectuelle</h2>
            <p>
              L&rsquo;ensemble du contenu de ce site (textes, images, logo) est la
              propri&eacute;t&eacute; exclusive de Formations And Co &mdash; Christine Allanic,
              sauf mention contraire. Toute reproduction est interdite sans
              autorisation pr&eacute;alable.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-accent mb-3">Donn&eacute;es personnelles</h2>
            <p>
              Les informations recueillies via le formulaire de contact sont
              destin&eacute;es exclusivement &agrave; Christine Allanic pour le traitement de
              votre demande. Conform&eacute;ment au RGPD, vous disposez d&rsquo;un droit
              d&rsquo;acc&egrave;s, de rectification et de suppression de vos donn&eacute;es.
              Pour exercer ces droits, contactez : <a href="mailto:formationsetco@gmail.com" className="text-primary hover:underline">formationsetco@gmail.com</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
