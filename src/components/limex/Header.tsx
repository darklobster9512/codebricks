import { Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo-codebricks.png';

const nav = [
  { to: '/plattform', label: 'Plattform' },
  { to: '/modellgetriebene-entwicklung', label: 'Modellgetriebene Entwicklung' },
  { to: '/services', label: 'Services' },
  { to: '/team', label: 'Team' },
  { to: '/karriere', label: 'Karriere' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E8ECF1] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 overflow-visible">
        <Link to="/" className="flex items-center" aria-label="Codebricks Startseite">
          <img
            src={logo}
            alt="Codebricks GmbH"
            className="h-9 w-auto select-none"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-[13px] font-medium tracking-tight transition-colors ${
                  isActive ? 'text-[#0F1B3D]' : 'text-[#64748B] hover:text-[#0F1B3D]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/kontakt"
            className="inline-flex h-9 items-center rounded-xl bg-[#3B82F6] px-4 text-[13px] font-medium text-white hover:bg-[#1D4ED8] transition-colors"
          >
            Termin buchen
          </Link>
        </div>

        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#E8ECF1] text-[#0F1B3D]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menü"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[#E8ECF1] bg-white">
          <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-4">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-base font-medium ${isActive ? 'text-[#3B82F6]' : 'text-[#0F1B3D]'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/kontakt"
              className="mt-2 inline-flex h-11 items-center justify-center rounded-xl bg-[#3B82F6] px-5 text-sm font-medium text-white"
            >
              Termin buchen
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
