import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-accent text-white mt-auto">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Qualiopi */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">F</span>
              </div>
              <span className="font-bold text-lg">Formations And Co</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Organisme de formation certifi&eacute; Qualiopi.<br />
              Bilans de Comp&eacute;tences &amp; Formations SST.
            </p>
            <Image
              src="/images/qualiopi.png"
              alt="Certification Qualiopi"
              width={160}
              height={96}
              className="rounded-lg bg-white/10 p-2"
            />
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/bilan-de-competences" className="hover:text-primary-light transition-colors">Bilan de Comp&eacute;tences</Link></li>
              <li><Link href="/formation-sst" className="hover:text-primary-light transition-colors">Formation SST initiale</Link></li>
              <li><Link href="/formation-sst" className="hover:text-primary-light transition-colors">Recyclage MAC SST</Link></li>
              <li><Link href="/a-propos" className="hover:text-primary-light transition-colors">&Agrave; propos</Link></li>
              <li><Link href="/contact" className="hover:text-primary-light transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Informations l&eacute;gales */}
          <div>
            <h3 className="font-semibold mb-4">Informations</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/mentions-legales" className="hover:text-primary-light transition-colors">Mentions l&eacute;gales</Link></li>
              <li><Link href="/politique-de-confidentialite" className="hover:text-primary-light transition-colors">Politique de confidentialit&eacute; RGPD</Link></li>
              <li>
                <a href="https://www.moncompteformation.gouv.fr" target="_blank" rel="noopener noreferrer" className="hover:text-primary-light transition-colors">
                  Mon Compte Formation (CPF)
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="mailto:formationsetco@gmail.com" className="hover:text-primary-light transition-colors">
                  formationsetco@gmail.com
                </a>
              </li>
              <li>Christine Allanic</li>
              <li>SIRET : 33822175700051</li>
              <li>NDA : 24450457945</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Formations And Co &mdash; Christine Allanic. Tous droits r&eacute;serv&eacute;s.
          </p>
          <div className="flex gap-4 text-xs text-white/50">
            <Link href="/mentions-legales" className="hover:text-white/80 transition-colors">Mentions l&eacute;gales</Link>
            <Link href="/politique-de-confidentialite" className="hover:text-white/80 transition-colors">Politique de confidentialit&eacute;</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
