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
    <header className="sticky top-0 z-50 w-full px-4 pt-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full border border-[#E8ECF1] bg-white/85 py-2.5 pl-5 pr-2.5 shadow-[0_2px_6px_rgba(15,27,61,0.05),0_20px_40px_-28px_rgba(15,27,61,0.35)] backdrop-blur-xl">
        <Link to="/" className="flex items-center" aria-label="Codebricks Startseite">
          <img
            src={logo}
            alt="Codebricks GmbH"
            className="h-11 w-auto select-none"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-full px-3.5 py-2 text-[13px] font-medium tracking-tight transition-colors ${
                  isActive
                    ? 'bg-[#EFF6FF] text-[#1D4ED8]'
                    : 'text-[#64748B] hover:bg-[#F2F5F9] hover:text-[#0F1B3D]'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center">
          <Link
            to="/kontakt"
            className="inline-flex h-10 items-center rounded-full bg-[#0F1B3D] px-5 text-[13px] font-medium text-white transition-colors hover:bg-[#3B82F6]"
          >
            Termin buchen
          </Link>
        </div>

        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#E8ECF1] text-[#0F1B3D]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menü"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden mx-auto mt-3 max-w-6xl rounded-3xl border border-[#E8ECF1] bg-white p-5 shadow-[0_24px_48px_-24px_rgba(15,27,61,0.3)]">
          <div className="flex flex-col gap-1">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `rounded-2xl px-4 py-3 text-base font-medium ${
                    isActive ? 'bg-[#EFF6FF] text-[#1D4ED8]' : 'text-[#0F1B3D]'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/kontakt"
              className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-[#0F1B3D] px-5 text-sm font-medium text-white"
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
