import { Link } from 'react-router-dom';
import { ArrowRight, Star, Boxes, LineChart, Building2 } from 'lucide-react';
import heroImage from '@/assets/photos/hero-office-meeting.jpg';

const HeroFull = () => {
  const noDrag: React.HTMLAttributes<HTMLImageElement> = {
    onContextMenu: (e) => e.preventDefault(),
    onDragStart: (e) => e.preventDefault(),
  };

  return (
    <section className="relative overflow-hidden bg-[#FAFBFC] pt-10 pb-4 lg:pt-14">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[860px] -translate-x-1/2 rounded-full bg-[#3B82F6]/10 blur-3xl"
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-4 md:grid-cols-6">
          {/* Claim-Tile */}
          <div className="tile md:col-span-4 p-8 lg:p-12">
            <span className="chip">Codebricks GmbH · Berlin</span>
            <h1 className="mt-7 font-display text-[40px] font-semibold leading-[1.02] tracking-[-0.035em] text-[#0F1B3D] sm:text-[52px] lg:text-[64px]">
              Wir bauen die Werkzeuge, die{' '}
              <span className="text-[#3B82F6]">Ihren Code schreiben</span>.
            </h1>
            <p className="mt-7 max-w-xl text-[17px] leading-relaxed text-[#64748B]">
              Modelle, eigene DSLs und Generatoren, aus denen produktionsreifer Code
              entsteht — als Plattform mit Lizenz, Einführung und Hersteller-Support
              aus Berlin.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/kontakt"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-[#0F1B3D] px-6 text-sm font-medium text-white transition-colors hover:bg-[#3B82F6]"
              >
                Live-Demo vereinbaren
                <ArrowRight size={16} />
              </Link>
              <Link
                to="/plattform"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-[#E8ECF1] bg-white px-6 text-sm font-medium text-[#0F1B3D] transition-colors hover:border-[#3B82F6] hover:text-[#3B82F6]"
              >
                Plattform ansehen
              </Link>
            </div>
          </div>

          {/* Bild-Tile */}
          <div className="tile md:col-span-2 min-h-[260px] overflow-hidden p-0">
            <img
              src={heroImage}
              alt="Entwicklungsteam von Codebricks im Berliner Büro"
              className="h-full w-full select-none object-cover"
              width={960}
              height={640}
              {...noDrag}
            />
          </div>

          {/* Kennzahlen */}
          <div className="tile tile-hover md:col-span-2 p-7">
            <Building2 size={22} className="text-[#3B82F6]" strokeWidth={1.75} />
            <p className="mt-5 font-display text-[28px] font-semibold tracking-[-0.02em] text-[#0F1B3D]">
              Berlin · DE
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
              Framework, Generatoren und Support kommen aus einer Hand — entwickelt und
              gepflegt am Leipziger Platz.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <span className="rounded-full bg-[#EFF6FF] px-3 py-1 text-[11px] font-medium text-[#1D4ED8]">
                Made in Germany
              </span>
              <span className="rounded-full bg-[#EFF6FF] px-3 py-1 text-[11px] font-medium text-[#1D4ED8]">
                Hersteller-Support
              </span>
            </div>
          </div>

          <div className="tile-ink md:col-span-2 p-7">
            <Boxes size={22} className="text-[#7DB0FB]" strokeWidth={1.75} />
            <p className="mt-5 font-display text-[28px] font-semibold tracking-[-0.02em] text-white">
              40+ Modelle
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#94A3B8]">
              Produktiv generierte Fachdomänen bei Kunden aus Industrie, Finanzwesen und
              öffentlicher Hand.
            </p>
            <div className="mt-5 flex items-center gap-2">
              <div className="flex gap-0.5">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} size={14} className="fill-[#7DB0FB] text-[#7DB0FB]" />
                ))}
              </div>
              <p className="text-sm font-medium text-white">4,8 / 5</p>
              <p className="text-sm text-[#94A3B8]">Support</p>
            </div>
          </div>

          <div className="tile tile-hover group md:col-span-2 p-7">
            <LineChart size={22} className="text-[#3B82F6]" strokeWidth={1.75} />
            <p className="mt-5 font-display text-[22px] font-semibold tracking-[-0.02em] text-[#0F1B3D]">
              Modell-Piloten
            </p>
            <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
              Wir modellieren eine Ihrer Fachdomänen und zeigen den generierten Code —
              unverbindlich, in zwei Wochen.
            </p>
            <Link
              to="/kontakt"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-[#3B82F6] hover:text-[#1D4ED8]"
            >
              Pilot anfragen
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroFull;
