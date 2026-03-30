import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de confidentialit\u00e9 RGPD | Formations And Co",
};

export default function PolitiqueDeConfidentialite() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-accent mb-10">
          Politique de confidentialit&eacute; &mdash; RGPD
        </h1>

        <div className="space-y-8 text-gray-600 leading-relaxed">
          <div>
            <h2 className="text-xl font-bold text-accent mb-3">1. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des donn&eacute;es personnelles collect&eacute;es sur ce site est :
            </p>
            <p className="mt-2">
              <strong>Formations And Co</strong><br />
              Christine Allanic<br />
              SIRET : 33822175700051<br />
              Email : <a href="mailto:formationsetco@gmail.com" className="text-primary hover:underline">formationsetco@gmail.com</a>
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-accent mb-3">2. Donn&eacute;es collect&eacute;es</h2>
            <p>
              Les donn&eacute;es personnelles collect&eacute;es via le formulaire de contact sont :
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Nom et pr&eacute;nom</li>
              <li>Adresse email</li>
              <li>Num&eacute;ro de t&eacute;l&eacute;phone (facultatif)</li>
              <li>Objet de la demande</li>
              <li>Contenu du message</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-accent mb-3">3. Finalit&eacute;s du traitement</h2>
            <p>
              Vos donn&eacute;es sont collect&eacute;es et trait&eacute;es pour les finalit&eacute;s suivantes :
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>R&eacute;pondre &agrave; votre demande de contact ou d&rsquo;information</li>
              <li>Vous recontacter dans le cadre d&rsquo;un entretien d&eacute;couverte</li>
              <li>Assurer le suivi administratif li&eacute; &agrave; une prestation de formation ou de bilan de comp&eacute;tences</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-accent mb-3">4. Base l&eacute;gale du traitement</h2>
            <p>
              Le traitement de vos donn&eacute;es repose sur :
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Votre consentement</strong> (article 6.1.a du RGPD) lorsque vous remplissez le formulaire de contact</li>
              <li><strong>L&rsquo;ex&eacute;cution d&rsquo;un contrat</strong> (article 6.1.b du RGPD) dans le cadre d&rsquo;une prestation de formation</li>
              <li><strong>Les obligations l&eacute;gales</strong> (article 6.1.c du RGPD) notamment les obligations li&eacute;es &agrave; la formation professionnelle</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-accent mb-3">5. Destinataires des donn&eacute;es</h2>
            <p>
              Vos donn&eacute;es personnelles sont destin&eacute;es exclusivement &agrave; Christine Allanic,
              responsable de Formations And Co. Elles ne sont en aucun cas c&eacute;d&eacute;es, vendues
              ou partag&eacute;es avec des tiers &agrave; des fins commerciales.
            </p>
            <p className="mt-2">
              Elles peuvent &ecirc;tre communiqu&eacute;es aux organismes financeurs (OPCO, Caisse des D&eacute;p&ocirc;ts
              dans le cadre du CPF) uniquement dans le cadre de l&rsquo;ex&eacute;cution de la prestation
              et des obligations r&eacute;glementaires li&eacute;es &agrave; la formation professionnelle.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-accent mb-3">6. Dur&eacute;e de conservation</h2>
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Donn&eacute;es de contact</strong> : 3 ans &agrave; compter du dernier contact</li>
              <li><strong>Donn&eacute;es li&eacute;es &agrave; une prestation</strong> : 5 ans apr&egrave;s la fin de la prestation (obligations l&eacute;gales li&eacute;es &agrave; la formation professionnelle)</li>
              <li><strong>Documents comptables</strong> : 10 ans (obligation fiscale)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold text-accent mb-3">7. Vos droits</h2>
            <p>
              Conform&eacute;ment au RGPD (articles 15 &agrave; 22) et &agrave; la loi Informatique et Libert&eacute;s,
              vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li><strong>Droit d&rsquo;acc&egrave;s</strong> : obtenir la confirmation que vos donn&eacute;es sont trait&eacute;es et en obtenir une copie</li>
              <li><strong>Droit de rectification</strong> : faire corriger des donn&eacute;es inexactes ou incompl&egrave;tes</li>
              <li><strong>Droit &agrave; l&rsquo;effacement</strong> : demander la suppression de vos donn&eacute;es, sous r&eacute;serve des obligations l&eacute;gales</li>
              <li><strong>Droit &agrave; la limitation</strong> : demander la limitation du traitement dans certains cas</li>
              <li><strong>Droit &agrave; la portabilit&eacute;</strong> : recevoir vos donn&eacute;es dans un format structur&eacute;</li>
              <li><strong>Droit d&rsquo;opposition</strong> : vous opposer au traitement de vos donn&eacute;es</li>
              <li><strong>Droit de retirer votre consentement</strong> &agrave; tout moment</li>
            </ul>
            <p className="mt-4">
              Pour exercer ces droits, contactez-nous &agrave; :{" "}
              <a href="mailto:formationsetco@gmail.com" className="text-primary hover:underline font-semibold">
                formationsetco@gmail.com
              </a>
            </p>
            <p className="mt-2">
              Nous nous engageons &agrave; r&eacute;pondre &agrave; votre demande dans un d&eacute;lai maximum de
              <strong> 30 jours</strong>.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-accent mb-3">8. S&eacute;curit&eacute; des donn&eacute;es</h2>
            <p>
              Formations And Co met en &oelig;uvre les mesures techniques et organisationnelles
              appropri&eacute;es pour garantir la s&eacute;curit&eacute; et la confidentialit&eacute; de vos donn&eacute;es
              personnelles, et notamment pour emp&ecirc;cher qu&rsquo;elles soient d&eacute;form&eacute;es,
              endommag&eacute;es ou que des tiers non autoris&eacute;s y aient acc&egrave;s.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-accent mb-3">9. Cookies</h2>
            <p>
              Ce site n&rsquo;utilise pas de cookies de tra&ccedil;age publicitaire. Seuls des cookies
              techniques strictement n&eacute;cessaires au fonctionnement du site peuvent &ecirc;tre d&eacute;pos&eacute;s.
              Ces cookies ne n&eacute;cessitent pas votre consentement pr&eacute;alable conform&eacute;ment aux
              recommandations de la CNIL.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-accent mb-3">10. R&eacute;clamation</h2>
            <p>
              Si vous estimez que le traitement de vos donn&eacute;es ne respecte pas la
              r&eacute;glementation, vous avez le droit d&rsquo;introduire une r&eacute;clamation aupr&egrave;s
              de la <strong>CNIL</strong> (Commission Nationale de l&rsquo;Informatique et des Libert&eacute;s) :
            </p>
            <p className="mt-2">
              CNIL &mdash; 3 Place de Fontenoy, TSA 80715, 75334 Paris Cedex 07<br />
              T&eacute;l&eacute;phone : 01 53 73 22 22<br />
              Site : www.cnil.fr
            </p>
          </div>

          <div className="bg-cyan-50 rounded-xl p-6 mt-8">
            <p className="text-sm text-gray-500">
              Derni&egrave;re mise &agrave; jour : mars 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
