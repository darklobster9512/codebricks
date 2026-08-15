import PageHero from '@/components/limex/PageHero';
import Section from '@/components/limex/Section';
import CTABand from '@/components/limex/CTABand';
import SEO from '@/components/limex/SEO';
import { ChevronRight } from 'lucide-react';

const bausteine = [
  ['IT-Strategie', 'Zielbild, Governance, Sourcing- und Plattform-Entscheidungen im Kontext Ihrer Unternehmensstrategie.'],
  ['Cloud-Transformation', 'Bewertung, Migrationspfade und Betriebsmodelle für AWS, Azure und Google Cloud — inklusive FinOps.'],
  ['Security & Compliance', 'Reifegradanalysen nach BSI-Grundschutz und ISO 27001-Vorbereitung, DSGVO-Auditierung, IAM-Konzepte.'],
  ['Prozessdigitalisierung', 'Aufnahme, Modellierung und Automatisierung von Kernprozessen — von Angebot bis Abrechnung.'],
  ['IT-Due-Diligence', 'Technische Prüfungen bei M&A-Vorhaben, Post-Merger-Integration und Carve-outs.'],
];

const phasen = [
  ['01', 'Discovery', 'Interviews, Sichtung Ihrer IT-Landschaft und ein 360°-Bild in 2 Wochen.'],
  ['02', 'Analyse', 'Bewertung nach Nutzen, Risiko und Aufwand. Handlungsfelder werden priorisiert.'],
  ['03', 'Zielbild', 'Referenzarchitektur, Roadmap und Business Case — belastbar für Vorstand und CFO.'],
  ['04', 'Umsetzung', 'Wir begleiten oder liefern — je nach Modell mit unseren Engineers oder mit Ihrem Team.'],
  ['05', 'Betrieb', 'Übergabe an den Regelbetrieb inklusive Runbooks, KPIs und einer klaren Eskalationskette.'],
];

const faqs = [
  ['Ab welcher Größe lohnt sich eine Beratung?', 'Wir arbeiten mit Kunden ab ~50 Mitarbeitenden. Kleinere Unternehmen beraten wir punktuell auf Tagessatzbasis.'],
  ['Wie schnell können Sie starten?', 'Ein Discovery-Slot ist üblicherweise binnen 2–3 Wochen verfügbar. Notfall-Assessments kürzer.'],
  ['Sind Sie herstellerunabhängig?', 'Ja. Wir haben keine Reseller-Provisionen und keine bevorzugten Software-Partner.'],
  ['Wie rechnen Sie ab?', 'Festpreis für definierte Ergebnisse, Time & Material für offene Discovery-Phasen. Jede Rechnung ist projekt- und stundenbasiert nachvollziehbar.'],
];

const Beratung = () => (
  <>
    <SEO
      title="IT-Beratung | LIMEX Solutions"
      description="Strategische IT-Beratung: Architektur, Prozesse, Cloud und Digitalisierung — herstellerneutral und umsetzungsstark aus Berlin."
      path="/beratung"
    />
    <PageHero
      eyebrow="Leistung · Beratung"
      title={<>IT-Beratung mit <span className="text-[#2563EB]">betriebswirtschaftlichem</span> Blick.</>}
      intro="Wir beraten Geschäftsführungen und IT-Verantwortliche im deutschen Mittelstand. Der Anspruch: jede Empfehlung muss sich in Euro, Stunden oder Risiko messen lassen."
      breadcrumb={[{ label: 'Start', href: '/' }, { label: 'Beratung' }]}
    />

    <Section index="01" eyebrow="Bausteine" title="Fünf Bereiche, in denen wir tief zu Hause sind.">
      <div className="divide-y divide-[#E6ECF5] border-y border-[#E6ECF5]">
        {bausteine.map(([t, d]) => (
          <div key={t} className="grid gap-6 md:grid-cols-12 py-8">
            <div className="md:col-span-4 text-lg font-medium text-[#0B1220]">{t}</div>
            <div className="md:col-span-8 text-sm leading-relaxed text-[#5B6B85]">{d}</div>
          </div>
        ))}
      </div>
    </Section>

    <Section index="02" eyebrow="Vorgehen" title="Fünf Phasen, ein roter Faden." bg="muted">
      <div className="grid gap-6 md:grid-cols-5">
        {phasen.map(([n, t, d]) => (
          <div key={n} className="border border-[#E6ECF5] bg-white p-6">
            <p className="font-mono text-xs text-[#2563EB]">{n}</p>
            <h3 className="mt-4 text-base font-semibold text-[#0B1220]">{t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#5B6B85]">{d}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section index="03" eyebrow="Häufige Fragen" title="Was Kunden vor dem ersten Termin fragen.">
      <div className="divide-y divide-[#E6ECF5] border-y border-[#E6ECF5]">
        {faqs.map(([q, a]) => (
          <details key={q} className="group py-6">
            <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-[#0B1220]">
              {q}
              <ChevronRight size={18} className="text-[#5B6B85] transition-transform group-open:rotate-90" />
            </summary>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#5B6B85]">{a}</p>
          </details>
        ))}
      </div>
    </Section>

    <CTABand
      title="Bereit für ein ehrliches Discovery?"
      intro="Zwei Wochen, drei Interviews, ein belastbares Zielbild. Anschließend entscheiden Sie in Ruhe."
      primaryLabel="Discovery anfragen"
      secondaryLabel="Softwareentwicklung"
      secondaryTo="/softwareentwicklung"
    />
  </>
);

export default Beratung;
