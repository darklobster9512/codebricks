import { Link } from 'react-router-dom';
import logo from '@/assets/logo-limex.png';

const Footer = () => (
  <footer className="border-t border-[#E6ECF5] bg-white">
    <div className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <img
            src={logo}
            alt="LIMEX Solutions"
            className="h-14 w-auto -my-2 -ml-[38px] select-none"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-[#5B6B85]">
            IT-Beratung, Softwareentwicklung und Systemintegration für den deutschen
            Mittelstand. Berlin, seit 2013.
          </p>
        </div>

        <div className="md:col-span-2">
          <p className="text-[11px] font-mono uppercase tracking-widest text-[#5B6B85]">Leistungen</p>
          <ul className="mt-4 space-y-3 text-sm text-[#0B1220]">
            <li><Link to="/beratung" className="hover:text-[#2563EB]">Beratung</Link></li>
            <li><Link to="/softwareentwicklung" className="hover:text-[#2563EB]">Softwareentwicklung</Link></li>
            <li><Link to="/systemintegration" className="hover:text-[#2563EB]">Systemintegration</Link></li>
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
            LIMEX Solutions GmbH<br />
            Blankenhainer Str. 5<br />
            12249 Berlin
          </address>
          <div className="mt-4 space-y-1 text-sm">
            <a href="mailto:kontakt@limex-solutions.net" className="block text-[#0B1220] hover:text-[#2563EB]">
              kontakt@limex-solutions.net
            </a>
            <a href="tel:+4930754387430" className="block text-[#0B1220] hover:text-[#2563EB]">
              030 754387430
            </a>
          </div>
        </div>
      </div>

      <div className="mt-14 flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-[#E6ECF5] pt-6 text-xs text-[#5B6B85]">
        <p>© {new Date().getFullYear()} LIMEX Solutions GmbH · HRB 68637 B · USt-ID DE190275864</p>
        <div className="flex gap-6">
          <Link to="/impressum" className="hover:text-[#0B1220]">Impressum</Link>
          <Link to="/datenschutz" className="hover:text-[#0B1220]">Datenschutz</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
