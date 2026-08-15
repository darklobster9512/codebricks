import { useParams, Link, Navigate } from 'react-router-dom';
import { MapPin, Clock, Euro, ArrowRight, Briefcase } from 'lucide-react';
import PageHero from '@/components/limex/PageHero';
import CTABand from '@/components/limex/CTABand';
import SEO from '@/components/limex/SEO';
import { stellen } from '@/data/karriereStellen';

const KarriereDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const stelle = stellen.find((s) => s.slug === slug);
  if (!stelle) return <Navigate to="/karriere" replace />;

  const sections = [
    { title: 'Ihre Aufgaben', items: stelle.aufgaben },
    { title: 'Ihr Profil', items: stelle.voraussetzungen },
    { title: 'Was wir bieten', items: stelle.benefits },
  ];

  return (
    <>
      <SEO
        title={`${stelle.titel} | Karriere | Codebricks`}
        description={stelle.kurzbeschreibung}
        path={`/karriere/${stelle.slug}`}
      />
      <PageHero
        eyebrow={`Karriere · ${stelle.bereich}`}
        title={stelle.titel}
        intro={stelle.kurzbeschreibung}
        breadcrumb={[
          { label: 'Start', href: '/' },
          { label: 'Karriere', href: '/karriere' },
          { label: stelle.titel },
        ]}
      />

      <section className="bg-[#FAFBFC]">
        <div className="mx-auto max-w-6xl px-6 pb-16 lg:pb-24">
          <div className="grid gap-4 lg:grid-cols-12">
            <div className="tile lg:col-span-8 space-y-10 p-8 lg:p-10">
              <div>
                <p className="text-[11px] font-mono uppercase tracking-widest text-[#3B82F6]">Über die Position</p>
                <p className="mt-4 text-base leading-relaxed text-[#64748B]">{stelle.beschreibung}</p>
              </div>
              {sections.map((s, i) => (
                <div key={s.title} className="border-t border-[#E8ECF1] pt-8">
                  <p className="text-[11px] font-mono uppercase tracking-widest text-[#3B82F6]">{`0${i + 1}`}</p>
                  <h2 className="mt-3 text-2xl font-semibold text-[#0F1B3D]">{s.title}</h2>
                  <ul className="mt-6 space-y-3">
                    {s.items.map((it, j) => (
                      <li key={j} className="flex gap-4 text-sm leading-relaxed text-[#64748B]">
                        <span className="font-mono text-[11px] text-[#3B82F6] pt-1">— {String(j + 1).padStart(2, '0')}</span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <aside className="lg:col-span-4">
              <div className="tile lg:sticky lg:top-28 p-7 space-y-5">
                <p className="text-[11px] font-mono uppercase tracking-widest text-[#3B82F6]">Eckdaten</p>
                <ul className="space-y-4 text-sm">
                  <li className="flex gap-3 items-start"><MapPin size={16} className="text-[#64748B] mt-0.5" /><span><span className="block text-[11px] uppercase tracking-widest text-[#64748B]">Standort</span><span className="text-[#0F1B3D]">{stelle.standort}</span></span></li>
                  <li className="flex gap-3 items-start"><Briefcase size={16} className="text-[#64748B] mt-0.5" /><span><span className="block text-[11px] uppercase tracking-widest text-[#64748B]">Modell</span><span className="text-[#0F1B3D]">{stelle.modell}</span></span></li>
                  {stelle.arbeitszeit && <li className="flex gap-3 items-start"><Clock size={16} className="text-[#64748B] mt-0.5" /><span><span className="block text-[11px] uppercase tracking-widest text-[#64748B]">Arbeitszeit</span><span className="text-[#0F1B3D]">{stelle.arbeitszeit}</span></span></li>}
                  {stelle.gehalt && <li className="flex gap-3 items-start"><Euro size={16} className="text-[#64748B] mt-0.5" /><span><span className="block text-[11px] uppercase tracking-widest text-[#64748B]">Gehalt</span><span className="text-[#0F1B3D]">{stelle.gehalt}</span></span></li>}
                </ul>
                <Link
                  to={`/karriere/bewerbung?stelle=${encodeURIComponent(stelle.titel)}`}
                  className="mt-4 inline-flex w-full h-11 items-center justify-center gap-2 rounded-xl bg-[#3B82F6] px-5 text-sm font-medium text-white hover:bg-[#1D4ED8]"
                >
                  Jetzt bewerben <ArrowRight size={16} />
                </Link>
                <p className="text-xs text-[#64748B]">Direkter Ansprechpartner: <a href="mailto:kontakt@codebricks-gmbh.de" className="text-[#3B82F6] hover:underline">kontakt@codebricks-gmbh.de</a></p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <CTABand
        title="Noch Fragen zur Rolle?"
        intro="Schreiben Sie uns direkt, wir antworten innerhalb von 48 Stunden."
        primaryLabel="Jetzt bewerben"
        primaryTo={`/karriere/bewerbung?stelle=${encodeURIComponent(stelle.titel)}`}
        secondaryLabel="Andere Stellen"
        secondaryTo="/karriere"
      />
    </>
  );
};

export default KarriereDetail;
