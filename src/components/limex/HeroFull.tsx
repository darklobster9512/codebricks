import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, LineChart, Building2 } from 'lucide-react';
import heroImage from '@/assets/hero-limex-team.jpg';

const HeroFull = () => {
  const noDrag: React.HTMLAttributes<HTMLImageElement> = {
    onContextMenu: (e) => e.preventDefault(),
    onDragStart: (e) => e.preventDefault(),
  };

  return (
    <section className="relative z-10 isolate overflow-visible bg-[#0B1220]">
      <div className="absolute inset-0 overflow-hidden">
        {/* Background image */}
        <img
          src={heroImage}
          alt="Das LIMEX Solutions Team im Berliner Büro bei der Arbeit an einer Systemarchitektur"
          className="absolute inset-0 h-full w-full object-cover object-center select-none"
          width={1920}
          height={1280}
          {...noDrag}
        />

        {/* Blue gradient overlay */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-b from-[#2563EB]/70 via-[#1E3A8A]/80 to-[#0B1220]/90"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-[#0B1220]/70 via-[#0B1220]/20 to-transparent"
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex min-h-[720px] max-w-7xl flex-col justify-center px-6 pt-28 pb-40 lg:min-h-[820px] lg:pt-32 lg:pb-48">
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/80">
          LIMEX Solutions <span className="mx-2 text-white/40">·</span> Berlin
        </p>

        <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[80px]">
          IT-Beratung, die Ihre
          <br />
          Systeme wieder{' '}
          <span className="italic font-light">liefern</span> lässt.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/85 md:text-xl">
          Individuelle Software, saubere Integration und strategische Beratung
          für den deutschen Mittelstand — aus Berlin, mit festen Ansprechpartnern
          und ohne PowerPoint-Nebel.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            to="/kontakt"
            className="inline-flex h-12 items-center gap-2 rounded-md bg-[#2563EB] px-6 text-sm font-medium text-white transition-colors hover:bg-[#1E3A8A]"
          >
            Erstgespräch vereinbaren
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/beratung"
            className="inline-flex h-12 items-center gap-2 rounded-md border border-white/40 bg-white/0 px-6 text-sm font-medium text-white backdrop-blur-sm transition-colors hover:bg-white hover:text-[#0B1220]"
          >
            Leistungen ansehen
          </Link>
        </div>
      </div>

      {/* Trust cards — mittig auf der Hero/Body-Kante */}
      <div className="absolute inset-x-0 bottom-0 z-30 mx-auto max-w-7xl translate-y-1/4 md:translate-y-1/2 px-6">
        <div className="grid gap-4 md:grid-cols-3">
          {/* Festes Projektteam */}
          <div className="rounded-md border border-[#E6ECF5] bg-white p-6 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#2563EB]">
              Festes Projektteam
            </p>
            <div className="mt-5 flex items-center gap-3">
              <Building2 size={22} className="text-[#0B1220]" strokeWidth={1.75} />
              <p className="text-2xl font-semibold text-[#0B1220]">Berlin · DE</p>
            </div>
            <p className="mt-2 text-sm text-[#5B6B85]">
              Ein erfahrenes Team in Berlin begleitet Ihr Projekt von Anfang an. Kein rotierendes Personal, keine anonymen Tickets.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-sm bg-[#EFF4FF] px-2 py-1 text-[11px] font-medium text-[#1E3A8A]">
                Inhabergeführt
              </span>
              <span className="rounded-sm bg-[#EFF4FF] px-2 py-1 text-[11px] font-medium text-[#1E3A8A]">
                Fester Ansprechpartner
              </span>
            </div>
          </div>

          {/* Referenzen */}
          <div className="rounded-md border border-[#E6ECF5] bg-white p-6 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#2563EB]">
              Referenzen
            </p>
            <div className="mt-5 flex items-center gap-3">
              <Users size={22} className="text-[#0B1220]" strokeWidth={1.75} />
              <p className="text-2xl font-semibold text-[#0B1220]">120+ Projekte</p>
            </div>
            <p className="mt-2 text-sm text-[#5B6B85]">
              Seit 2013 für Mittelstand, Industrie und öffentliche Hand.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <div className="flex gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} size={14} className="fill-[#2563EB] text-[#2563EB]" />
                ))}
              </div>
              <p className="text-sm font-medium text-[#0B1220]">4,8 / 5</p>
              <p className="text-sm text-[#5B6B85]">Kundenzufriedenheit</p>
            </div>
          </div>

          {/* Erstanalyse */}
          <div className="group rounded-md border border-[#E6ECF5] bg-white p-6 shadow-sm">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-[#2563EB]">
              Kostenlose Erstanalyse
            </p>
            <div className="mt-5 flex items-center gap-3">
              <LineChart size={22} className="text-[#0B1220]" strokeWidth={1.75} />
              <p className="text-lg font-semibold text-[#0B1220]">IT-Bestandsaufnahme</p>
            </div>
            <p className="mt-2 text-sm text-[#5B6B85]">
              Wir prüfen Ihre Systemlandschaft und zeigen Ihnen den nächsten sinnvollen Schritt — unverbindlich.
            </p>
            <Link
              to="/kontakt"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#2563EB] hover:text-[#1E3A8A]"
            >
              Analyse anfragen
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroFull;
