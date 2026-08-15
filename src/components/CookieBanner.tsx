import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('cookies-accepted')) {
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);

  const handle = (accepted: boolean) => {
    localStorage.setItem('cookies-accepted', accepted ? 'true' : 'false');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="tile fixed inset-x-3 bottom-3 z-50 mx-auto max-w-xl animate-[slide-up_0.4s_ease-out] p-4 sm:inset-x-4 sm:bottom-5 sm:p-5"
      style={{ marginBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[13px] leading-relaxed text-[#64748B] sm:text-sm">
          Wir verwenden Cookies, um Ihnen die beste Erfahrung zu bieten.{' '}
          <Link to="/datenschutz" className="font-medium text-[#3B82F6] hover:underline">
            Mehr erfahren
          </Link>
        </p>
        <div className="flex shrink-0 items-center gap-2">
          <button
            onClick={() => handle(false)}
            className="inline-flex h-11 flex-1 items-center justify-center rounded-full border border-[#E8ECF1] bg-white px-5 text-sm font-medium text-[#0F1B3D] transition-colors hover:border-[#3B82F6] hover:text-[#3B82F6] sm:h-10 sm:flex-none"
          >
            Ablehnen
          </button>
          <button
            onClick={() => handle(true)}
            className="inline-flex h-11 flex-1 items-center justify-center rounded-full bg-[#0F1B3D] px-5 text-sm font-medium text-white transition-colors hover:bg-[#3B82F6] sm:h-10 sm:flex-none"
          >
            Akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
