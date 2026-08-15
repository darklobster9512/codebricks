import { Link } from 'react-router-dom';
import logo from '@/assets/logo-codebricks.png';

const Footer = () => (
  <footer className="bg-[#FAFBFC] px-3 pb-3 sm:px-4 sm:pb-4">
    <div className="mx-auto max-w-6xl overflow-hidden rounded-[1.5rem] bg-[#0F1B3D] text-white sm:rounded-[2rem]">
      <div className="px-6 py-10 sm:px-8 sm:py-14 lg:px-14">
        <p className="max-w-3xl font-display text-[26px] sm:text-[30px] md:text-[42px] font-semibold leading-[1.1] tracking-[-0.03em]">
          Modelle statt Copy-Paste — <span className="text-[#7DB0FB]">Software, die mitwächst.</span>
        </p>
        <Link
          to="/kontakt"
          className="mt-8 inline-flex h-12 items-center rounded-full bg-white px-6 text-sm font-medium text-[#0F1B3D] transition-colors hover:bg-[#3B82F6] hover:text-white"
        >
          Gespräch vereinbaren
        </Link>

        <div className="mt-10 grid gap-8 border-t border-white/10 pt-8 sm:mt-14 sm:gap-10 sm:pt-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <img
              src={logo}
              alt="Codebricks GmbH"
              className="h-11 w-auto select-none brightness-0 invert"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#94A3B8]">
              Frameworks und Werkzeuge für die modellgetriebene Softwareentwicklung —
              entwickelt, lizenziert und begleitet aus Berlin.
            </p>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] font-display font-semibold uppercase tracking-[0.14em] text-[#7DB0FB]">Produkt</p>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              <li><Link to="/plattform" className="hover:text-white">Plattform</Link></li>
              <li><Link to="/modellgetriebene-entwicklung" className="hover:text-white">Modellgetriebene Entwicklung</Link></li>
              <li><Link to="/services" className="hover:text-white">Services &amp; Lizenzen</Link></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="text-[11px] font-display font-semibold uppercase tracking-[0.14em] text-[#7DB0FB]">Unternehmen</p>
            <ul className="mt-4 space-y-3 text-sm text-white/85">
              <li><Link to="/team" className="hover:text-white">Team</Link></li>
              <li><Link to="/karriere" className="hover:text-white">Karriere</Link></li>
              <li><Link to="/kontakt" className="hover:text-white">Kontakt</Link></li>
              <li><Link to="/impressum" className="hover:text-white">Impressum</Link></li>
              <li><Link to="/datenschutz" className="hover:text-white">Datenschutz</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="text-[11px] font-display font-semibold uppercase tracking-[0.14em] text-[#7DB0FB]">Kontakt</p>
            <address className="mt-4 not-italic text-sm leading-relaxed text-white/85">
              Codebricks GmbH<br />
              Leipziger Platz 15<br />
              10117 Berlin
            </address>
            <div className="mt-4 space-y-1 text-sm">
              <a href="mailto:kontakt@codebricks-gmbh.de" className="block text-white/85 hover:text-white">
                kontakt@codebricks-gmbh.de
              </a>
              <a href="tel:+4930692096720" className="block text-white/85 hover:text-white">
                030 692096720
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 text-[11px] leading-relaxed text-[#94A3B8] sm:mt-12 sm:text-xs md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Codebricks GmbH · HRB 258971 B · USt-ID DE458097140</p>
          <div className="flex gap-6">
            <Link to="/impressum" className="hover:text-white">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-white">Datenschutz</Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
