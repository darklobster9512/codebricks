import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface Props {
  title?: string;
  intro?: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
}

const CTABand = ({
  title = 'Sehen Sie das Framework an Ihrer eigenen Fachdomäne.',
  intro = 'Eine 30-minütige Live-Demo, unverbindlich und ohne Verkaufsdruck. Wir modellieren einen Ausschnitt Ihres Fachbereichs und zeigen den generierten Code.',
  primaryLabel = 'Demo buchen',
  primaryTo = '/kontakt',
  secondaryLabel = 'Plattform ansehen',
  secondaryTo = '/plattform',
}: Props) => (
  <section className="bg-[#FAFBFC] pb-12 sm:pb-16 lg:pb-24">
    <div className="mx-auto max-w-6xl px-5 sm:px-6">
      <div className="tile-ink relative overflow-hidden p-6 sm:p-10 lg:p-16">
        <div aria-hidden className="dot-grid-ink pointer-events-none absolute inset-0 opacity-40" />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#3B82F6]/25 blur-3xl"
        />
        <div className="relative grid gap-7 sm:gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <span className="chip-ink">Nächster Schritt</span>
            <h2 className="mt-5 font-display text-[27px] sm:mt-6 sm:text-[32px] md:text-[44px] font-semibold tracking-[-0.03em] leading-[1.1] text-white">
              {title}
            </h2>
            <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-[#94A3B8] sm:mt-5 sm:text-[17px]">{intro}</p>
          </div>
          <div className="md:col-span-4 flex flex-col md:items-end gap-3">
            <Link
              to={primaryTo}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#3B82F6] px-6 text-sm font-medium text-white transition-colors hover:bg-white hover:text-[#0F1B3D] md:w-auto"
            >
              {primaryLabel} <ArrowRight size={16} />
            </Link>
            <Link
              to={secondaryTo}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/20 px-6 text-sm font-medium text-white transition-colors hover:bg-white/10 md:w-auto"
            >
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CTABand;
