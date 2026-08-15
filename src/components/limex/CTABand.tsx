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
  <section className="border-t border-[#E8ECF1] bg-[#0F1B3D]">
    <div className="mx-auto max-w-7xl px-6 py-20 lg:py-24">
      <div className="grid gap-10 md:grid-cols-12 md:items-end">
        <div className="md:col-span-8">
          <p className="text-[11px] font-mono uppercase tracking-widest text-[#3B82F6]">Nächster Schritt</p>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight leading-[1.15] text-white">
            {title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-[#94A3B8]">{intro}</p>
        </div>
        <div className="md:col-span-4 flex flex-col md:items-end gap-3">
          <Link
            to={primaryTo}
            className="inline-flex h-11 items-center gap-2 rounded-xl bg-[#3B82F6] px-5 text-sm font-medium text-white hover:bg-[#1D4ED8] transition-colors"
          >
            {primaryLabel} <ArrowRight size={16} />
          </Link>
          <Link
            to={secondaryTo}
            className="inline-flex h-11 items-center gap-2 rounded-xl border border-white/15 px-5 text-sm font-medium text-white hover:bg-white/5 transition-colors"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default CTABand;
