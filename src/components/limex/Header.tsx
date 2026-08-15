import { Link, NavLink, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo-limex.png';

const nav = [
  { to: '/beratung', label: 'Beratung' },
  { to: '/softwareentwicklung', label: 'Softwareentwicklung' },
  { to: '/systemintegration', label: 'Systemintegration' },
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
    <header className="sticky top-0 z-50 w-full border-b border-[#E6ECF5] bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 overflow-visible">
        <Link to="/" className="flex items-center" aria-label="LIMEX Solutions Startseite">
          <img
            src={logo}
            alt="LIMEX Solutions"
            className="h-14 w-auto -my-2 select-none"
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
                  isActive ? 'text-[#0B1220]' : 'text-[#5B6B85] hover:text-[#0B1220]'
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
            className="inline-flex h-9 items-center rounded-md bg-[#2563EB] px-4 text-[13px] font-medium text-white hover:bg-[#1E3A8A] transition-colors"
          >
            Termin buchen
          </Link>
        </div>

        <button
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#E6ECF5] text-[#0B1220]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Menü"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-[#E6ECF5] bg-white">
          <div className="mx-auto max-w-7xl px-6 py-6 flex flex-col gap-4">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `text-base font-medium ${isActive ? 'text-[#2563EB]' : 'text-[#0B1220]'}`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/kontakt"
              className="mt-2 inline-flex h-11 items-center justify-center rounded-md bg-[#2563EB] px-5 text-sm font-medium text-white"
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
