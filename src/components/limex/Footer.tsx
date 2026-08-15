import { Link } from 'react-router-dom';
import logo from '@/assets/logo-codebricks.png';

const Footer = () => (
  <footer className="border-t border-[#E6ECF5] bg-white">
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <img
            src={logo}
            alt="Codebricks GmbH"
            className="h-9 w-auto select-none"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#5B6B85]">
            Frameworks und Werkzeuge für die modellgetriebene Softwareentwicklung —
            entwickelt, lizenziert und begleitet aus Berlin.
          </p>
        </div>

        <div className="md:col-span-2">
          <p className="text-[11px] font-mono uppercase tracking-widest text-[#5B6B85]">Produkt</p>
          <ul className="mt-4 space-y-3 text-sm text-[#0B1220]">
            <li><Link to="/plattform" className="hover:text-[#2563EB]">Plattform</Link></li>
            <li><Link to="/modellgetriebene-entwicklung" className="hover:text-[#2563EB]">Modellgetriebene Entwicklung</Link></li>
            <li><Link to="/services" className="hover:text-[#2563EB]">Services &amp; Lizenzen</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="text-[11px] font-mono uppercase tracking-widest text-[#5B6B85]">Unternehmen</p>
          <ul className="mt-4 space-y-3 text-sm text-[#0B1220]">
            <li><Link to="/team" className="hover:text-[#2563EB]">Team</Link></li>
            <li><Link to="/karriere" className="hover:text-[#2563EB]">Karriere</Link></li>
            <li><Link to="/kontakt" className="hover:text-[#2563EB]">Kontakt</Link></li>
            <li><Link to="/impressum" className="hover:text-[#2563EB]">Impressum</Link></li>
            <li><Link to="/datenschutz" className="hover:text-[#2563EB]">Datenschutz</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-[11px] font-mono uppercase tracking-widest text-[#5B6B85]">Kontakt</p>
          <address className="mt-4 not-italic text-sm leading-relaxed text-[#0B1220]">
            Codebricks GmbH<br />
            Leipziger Platz 15<br />
            10117 Berlin
          </address>
          <div className="mt-4 space-y-1 text-sm">
            <a href="mailto:kontakt@codebricks-gmbh.de" className="block text-[#0B1220] hover:text-[#2563EB]">
              kontakt@codebricks-gmbh.de
            </a>
            <a href="tel:+4930123456789" className="block text-[#0B1220] hover:text-[#2563EB]">
              030 123456789
            </a>
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-[#E6ECF5] pt-6 text-xs text-[#5B6B85]">
        <p>© {new Date().getFullYear()} Codebricks GmbH · HRB 258971 B · USt-ID DE458097140</p>
        <div className="flex gap-6">
          <Link to="/impressum" className="hover:text-[#0B1220]">Impressum</Link>
          <Link to="/datenschutz" className="hover:text-[#0B1220]">Datenschutz</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
