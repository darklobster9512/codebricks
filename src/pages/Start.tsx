import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Code2, Network, ChevronRight, Quote } from 'lucide-react';
import Section from '@/components/limex/Section';
import CTABand from '@/components/limex/CTABand';
import HeroFull from '@/components/limex/HeroFull';
import SEO from '@/components/limex/SEO';

const services = [
  {
    icon: Compass,
    title: 'Beratung',
    body: 'IT-Strategie, Cloud-Roadmaps und Security-Assessments — mit klarem Fokus auf Wirtschaftlichkeit.',
    to: '/beratung',
  },
  {
    icon: Code2,
    title: 'Softwareentwicklung',
    body: 'Individuelle Web- und Mobile-Anwendungen, entwickelt in kurzen Iterationen und dokumentiert wie ein Ingenieurwerk.',
    to: '/softwareentwicklung',
  },
  {
    icon: Network,
    title: 'Systemintegration',
    body: 'SAP, Salesforce, Middleware, APIs — wir verbinden bestehende Systeme sauber und wartbar.',
    to: '/systemintegration',
  },
];

const principles = [
  ['01', 'Fachlich vor lautstark', 'Wir liefern Antworten, keine Slides. Jeder Vorschlag lässt sich mit Zahlen und Erfahrung begründen.'],
  ['02', 'Verbindlich in Zeit und Budget', 'Klare Meilensteine, wöchentliche Statusberichte, keine Überraschungen im Freitag-Deploy.'],
  ['03', 'Herstellerneutral', 'Wir verdienen kein Geld an Software-Lizenzen. Empfehlungen richten sich ausschließlich am Kundennutzen aus.'],
  ['04', 'Made in Berlin', 'Ein festes Team in Berlin — kein rotierendes Offshore, keine Ticket-Fabrik.'],
];

const cases = [
  ['Fertigungsindustrie · Mittelstand', 'SAP S/4-Integration eines E-Commerce-Kanals', '−38 % manueller Nacharbeit'],
  ['Finanzdienstleister', 'Modernisierung eines Kundenportals (React/Node)', '2,1 s → 0,6 s Ladezeit'],
  ['Gesundheitswesen', 'Datenmigration in eine neue Klinikinformationssoftware', '4 TB, 0 Datenverluste'],
];

const techs = ['AWS', 'Azure', 'Google Cloud', 'SAP', 'Salesforce', 'Microsoft 365', 'Kubernetes', 'PostgreSQL', 'TypeScript', 'Python'];

const Start = () => (
  <>
    <SEO
      title="LIMEX Solutions – IT-Beratung, Software & Systemintegration aus Berlin"
      description="Wir beraten, entwickeln und integrieren zuverlässige IT-Lösungen für den deutschen Mittelstand. Aus Berlin, mit festem Projektteam."
      path="/"
    />
    <HeroFull />


    {/* SERVICE TRIAD */}
    <Section
      index="01"
      eyebrow="Leistungen"
      title="Drei Disziplinen, ein Auftrag: dass Ihre IT liefert."
      intro="Alle drei Bereiche greifen ineinander. Sie können jede Disziplin einzeln beauftragen — meist entfaltet das Zusammenspiel den größten Effekt."
      className="!pt-48 md:!pt-44 lg:!pt-44"
    >
      <div className="grid gap-14 md:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="flex flex-col">
            <s.icon size={28} strokeWidth={1.5} className="text-[#2563EB]" />
            <h3 className="mt-6 text-xl font-semibold tracking-tight text-[#0B1220]">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#5B6B85]">{s.body}</p>
            <Link
              to={s.to}
              className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[#2563EB] hover:text-[#1E3A8A]"
            >
              Mehr erfahren <ArrowRight size={14} />
            </Link>
          </div>
        ))}
      </div>
    </Section>

    {/* PRINCIPLES */}
    <Section
      index="02"
      eyebrow="Warum LIMEX"
      title="Ein Haltung, an der Sie uns messen können."
      bg="muted"
    >
      <div className="divide-y divide-[#E6ECF5] border-y border-[#E6ECF5]">
        {principles.map(([n, t, d]) => (
          <div key={n} className="grid gap-6 md:grid-cols-12 py-8">
            <div className="md:col-span-2 font-mono text-sm text-[#2563EB]">{n}</div>
            <div className="md:col-span-4 text-lg font-medium text-[#0B1220]">{t}</div>
            <div className="md:col-span-6 text-sm leading-relaxed text-[#5B6B85]">{d}</div>
          </div>
        ))}
      </div>
    </Section>

    {/* TECH WALL */}
    <Section index="03" eyebrow="Technologien" title="Mit den Plattformen, die Ihr Unternehmen bereits einsetzt.">
      <div className="flex flex-wrap gap-x-10 gap-y-6">
        {techs.map((t) => (
          <span
            key={t}
            className="text-lg font-medium tracking-tight text-[#5B6B85] hover:text-[#0B1220] transition-colors"
          >
            {t}
          </span>
        ))}
      </div>
    </Section>

    {/* CASES */}
    <Section index="04" eyebrow="Referenzen" title="Ausgewählte Projekte." bg="muted">
      <div className="divide-y divide-[#E6ECF5] border-y border-[#E6ECF5]">
        {cases.map(([branche, projekt, ergebnis]) => (
          <div key={projekt} className="grid gap-6 md:grid-cols-12 py-8 items-center">
            <div className="md:col-span-3 text-[11px] font-mono uppercase tracking-widest text-[#5B6B85]">{branche}</div>
            <div className="md:col-span-6 text-lg text-[#0B1220]">{projekt}</div>
            <div className="md:col-span-2 font-mono text-sm text-[#2563EB]">{ergebnis}</div>
            <div className="md:col-span-1 md:text-right"><ChevronRight size={18} className="text-[#5B6B85] inline" /></div>
          </div>
        ))}
      </div>
    </Section>

    {/* TESTIMONIAL */}
    <Section index="05" eyebrow="Stimmen">
      <div className="grid gap-10 md:grid-cols-12 items-start">
        <div className="md:col-span-2">
          <div className="h-20 w-20 rounded-full bg-[#EFF4FF] flex items-center justify-center font-mono text-2xl text-[#2563EB]">
            MK
          </div>
        </div>
        <div className="md:col-span-10">
          <Quote size={28} className="text-[#2563EB]" strokeWidth={1.5} />
          <blockquote className="mt-4 text-2xl md:text-3xl leading-snug tracking-tight text-[#0B1220] font-medium">
            „LIMEX hat unser SAP-Portal in vier Monaten produktiv gebracht — ohne einen einzigen
            eskalierten Change. Die Kombination aus Beratung und Umsetzung aus einer Hand hat den
            Unterschied gemacht."
          </blockquote>
          <p className="mt-6 text-sm text-[#5B6B85]">
            <span className="text-[#0B1220] font-medium">Dr. Martin Köhler</span> · CIO, mittelständischer Maschinenbauer
          </p>
        </div>
      </div>
    </Section>

    <CTABand />
  </>
);

export default Start;
