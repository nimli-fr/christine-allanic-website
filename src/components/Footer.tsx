import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-accent text-white mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & description */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">F</span>
              </div>
              <span className="font-bold text-lg">Formations And Co</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Organisme de formation certifi&eacute; Qualiopi.<br />
              Bilans de Comp&eacute;tences &amp; Formations SST.
            </p>
            <div className="mt-4 inline-block bg-white/10 rounded-lg px-3 py-2">
              <p className="text-xs text-white/60">Certifi&eacute;</p>
              <p className="font-bold text-primary-light text-sm">QUALIOPI</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/bilan-de-competences" className="hover:text-primary-light transition-colors">Bilan de Comp&eacute;tences</Link></li>
              <li><Link href="/formation-sst" className="hover:text-primary-light transition-colors">Formation SST</Link></li>
              <li><Link href="/a-propos" className="hover:text-primary-light transition-colors">&Agrave; propos</Link></li>
              <li><Link href="/contact" className="hover:text-primary-light transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="mailto:callanic989@gmail.com" className="hover:text-primary-light transition-colors">
                  callanic989@gmail.com
                </a>
              </li>
              <li>Christine Allanic</li>
              <li>Formatrice ind&eacute;pendante</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} Formations And Co &mdash; Christine Allanic. Tous droits r&eacute;serv&eacute;s.
          </p>
          <div className="flex gap-4 text-xs text-white/50">
            <Link href="/mentions-legales" className="hover:text-white/80 transition-colors">Mentions l&eacute;gales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
