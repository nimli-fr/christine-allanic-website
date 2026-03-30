import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mentions l\u00e9gales | Formations And Co",
};

export default function MentionsLegales() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-accent mb-10">
          Mentions l&eacute;gales
        </h1>

        <div className="space-y-8 text-gray-600 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-accent mb-3">&Eacute;diteur du site</h2>
            <p>
              <strong>Formations And Co</strong><br />
              Christine Allanic &mdash; Formatrice ind&eacute;pendante (micro-entreprise)<br />
              SIRET : 33822175700051<br />
              Num&eacute;ro de d&eacute;claration d&rsquo;activit&eacute; (NDA) : 24450457945<br />
              Email : <a href="mailto:formationsetco@gmail.com" className="text-primary hover:underline">formationsetco@gmail.com</a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-accent mb-3">Certification Qualiopi</h2>
            <Image
              src="/images/qualiopi.png"
              alt="Certification Qualiopi"
              width={200}
              height={120}
              className="rounded-lg mb-4"
            />
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
            <h2 className="text-xl font-bold text-accent mb-3">Protection des donn&eacute;es personnelles</h2>
            <p>
              Formations And Co s&rsquo;engage &agrave; prot&eacute;ger vos donn&eacute;es personnelles conform&eacute;ment
              au R&egrave;glement G&eacute;n&eacute;ral sur la Protection des Donn&eacute;es (RGPD) et &agrave; la loi
              Informatique et Libert&eacute;s modifi&eacute;e.
            </p>
            <p className="mt-2">
              Pour en savoir plus, consultez notre{" "}
              <Link href="/politique-de-confidentialite" className="text-primary hover:underline font-semibold">
                Politique de confidentialit&eacute; RGPD
              </Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
