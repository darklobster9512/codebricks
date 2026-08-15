import { Link } from 'react-router-dom';
import logo from '@/assets/logo-codebricks.png';

const Footer = () => (
  <footer className="border-t border-[#E8ECF1] bg-white">
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
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#64748B]">
            Frameworks und Werkzeuge für die modellgetriebene Softwareentwicklung —
            entwickelt, lizenziert und begleitet aus Berlin.
          </p>
        </div>

        <div className="md:col-span-2">
          <p className="text-[11px] font-mono uppercase tracking-widest text-[#64748B]">Produkt</p>
          <ul className="mt-4 space-y-3 text-sm text-[#0F1B3D]">
            <li><Link to="/plattform" className="hover:text-[#3B82F6]">Plattform</Link></li>
            <li><Link to="/modellgetriebene-entwicklung" className="hover:text-[#3B82F6]">Modellgetriebene Entwicklung</Link></li>
            <li><Link to="/services" className="hover:text-[#3B82F6]">Services &amp; Lizenzen</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="text-[11px] font-mono uppercase tracking-widest text-[#64748B]">Unternehmen</p>
          <ul className="mt-4 space-y-3 text-sm text-[#0F1B3D]">
            <li><Link to="/team" className="hover:text-[#3B82F6]">Team</Link></li>
            <li><Link to="/karriere" className="hover:text-[#3B82F6]">Karriere</Link></li>
            <li><Link to="/kontakt" className="hover:text-[#3B82F6]">Kontakt</Link></li>
            <li><Link to="/impressum" className="hover:text-[#3B82F6]">Impressum</Link></li>
            <li><Link to="/datenschutz" className="hover:text-[#3B82F6]">Datenschutz</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="text-[11px] font-mono uppercase tracking-widest text-[#64748B]">Kontakt</p>
          <address className="mt-4 not-italic text-sm leading-relaxed text-[#0F1B3D]">
            Codebricks GmbH<br />
            Leipziger Platz 15<br />
            10117 Berlin
          </address>
          <div className="mt-4 space-y-1 text-sm">
            <a href="mailto:kontakt@codebricks-gmbh.de" className="block text-[#0F1B3D] hover:text-[#3B82F6]">
              kontakt@codebricks-gmbh.de
            </a>
            <a href="tel:+4930123456789" className="block text-[#0F1B3D] hover:text-[#3B82F6]">
              030 123456789
            </a>
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-[#E8ECF1] pt-6 text-xs text-[#64748B]">
        <p>© {new Date().getFullYear()} Codebricks GmbH · HRB 258971 B · USt-ID DE458097140</p>
        <div className="flex gap-6">
          <Link to="/impressum" className="hover:text-[#0F1B3D]">Impressum</Link>
          <Link to="/datenschutz" className="hover:text-[#0F1B3D]">Datenschutz</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
