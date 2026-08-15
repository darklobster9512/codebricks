import PageHero from '@/components/limex/PageHero';
import Section from '@/components/limex/Section';
import SplitSection from '@/components/limex/SplitSection';
import CTABand from '@/components/limex/CTABand';
import SEO from '@/components/limex/SEO';
import training from '@/assets/photos/training-presentation.jpg';
import support from '@/assets/photos/workshop-group.jpg';

const leistungen = [
  ['Einführung', 'Installation, Anbindung an Ihre Build-Pipeline und der erste produktive Generatorlauf — begleitet in zwei bis vier Wochen.'],
  ['Generator-Anpassung', 'Templates werden auf Ihre Architektur, Frameworks und Namenskonventionen zugeschnitten.'],
  ['Schulung & Zertifizierung', 'Dreitägige Grundlagenschulung für Entwicklungsteams, Aufbaukurs für Generator- und DSL-Bau.'],
  ['Migration', 'Überführung bestehender Fachlogik in Modelle — Domäne für Domäne, ohne Betriebsunterbrechung.'],
  ['Wartung & Support', 'Versionspflege, Sicherheitsupdates und ein benannter Ansprechpartner mit vereinbarten Reaktionszeiten.'],
  ['Managed Modelling', 'Auf Wunsch pflegen wir Modelle und Generatoren dauerhaft für Sie — als verlängerte Werkbank Ihres Teams.'],
];

const lizenzen = [
  ['Evaluierung', 'Vollständiger Funktionsumfang für 60 Tage, inklusive Einführungstermin.', 'Kostenfrei'],
  ['Team', 'Named-User-Lizenz pro Entwicklerplatz, jährlich abgerechnet, inklusive Updates.', 'Ab 5 Arbeitsplätzen'],
  ['Enterprise', 'Unternehmensweite Lizenz mit Quellcode-Zugang zu den Templates und priorisiertem Support.', 'Individuelles Angebot'],
];

const sla = [
  ['Reaktionszeit', '4 Stunden', 'für betriebsverhindernde Störungen, werktags 08–18 Uhr'],
  ['Release-Zyklus', '6 Wochen', 'planbare Minor-Releases, LTS-Linie über 24 Monate'],
  ['Update-Support', '24 Monate', 'Rückwärtskompatibilität für Modelle und Templates'],
];

const Services = () => (
  <>
    <SEO
      title="Services & Lizenzen | Codebricks GmbH"
      description="Einführung, Generator-Anpassung, Schulung, Migration und Support rund um das Codebricks-Framework — inklusive Lizenzmodelle und SLA."
      path="/services"
    />
    <PageHero
      eyebrow="Angebot · Services"
      title={<>Vertrieb, Einführung und <span className="text-[#3B82F6]">Support</span> aus einer Hand.</>}
      intro="Ein Framework entfaltet seinen Nutzen erst, wenn es im Team ankommt. Deshalb liefern wir nicht nur Lizenzen, sondern Einführung, Schulung und verlässlichen Herstellersupport."
      breadcrumb={[{ label: 'Start', href: '/' }, { label: 'Services' }]}
    />

    <Section index="01" eyebrow="Leistungen" title="Sechs Bausteine rund um das Framework.">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {leistungen.map(([t, d]) => (
          <div key={t} className="tile tile-hover p-7">
            <h3 className="text-lg font-semibold text-[#0F1B3D]">{t}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#64748B]">{d}</p>
          </div>
        ))}
      </div>
    </Section>

    <SplitSection
      index="02"
      eyebrow="Schulung"
      title="Ihr Team modelliert nach drei Tagen selbstständig."
      body={
        <>
          <p>
            Unsere Schulungen finden bei Ihnen vor Ort oder remote statt — mit Ihren
            eigenen Fachdomänen als Übungsmaterial statt mit einem Beispielshop.
          </p>
          <p>
            Nach dem Grundlagenkurs kann Ihr Team Modelle erstellen, validieren und
            generieren. Der Aufbaukurs geht in Template- und DSL-Entwicklung.
          </p>
        </>
      }
      bullets={[
        'Grundlagenkurs: 3 Tage, max. 8 Teilnehmende',
        'Aufbaukurs Generatoren & DSLs: 2 Tage',
        'Übungen auf Ihrer echten Fachlichkeit',
      ]}
      image={training}
      imageAlt="Trainer erklärt einer Gruppe die Arbeit mit Fachmodellen"
      bg="muted"
    />

    <Section index="03" eyebrow="Lizenzmodelle" title="Drei Modelle, transparent kalkulierbar.">
      <div className="grid gap-4 md:grid-cols-3">
        {lizenzen.map(([t, d, hinweis]) => (
          <div key={t} className="tile tile-hover flex flex-col p-8">
            <h3 className="text-xl font-semibold text-[#0F1B3D]">{t}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-[#64748B]">{d}</p>
            <p className="mt-6 border-t border-[#E8ECF1] pt-4 font-mono text-xs text-[#3B82F6]">{hinweis}</p>
          </div>
        ))}
      </div>
    </Section>

    <SplitSection
      index="04"
      eyebrow="Support"
      title="Nach dem Rollout beginnt die eigentliche Arbeit."
      body={
        <p>
          Modelle wachsen, Zielplattformen ändern sich, Teams wechseln. Unser Support
          begleitet diese Bewegung: mit benannten Ansprechpartnern, planbaren Releases
          und einer LTS-Linie, auf die Sie sich verlassen können.
        </p>
      }
      bullets={[
        'Benannter Ansprechpartner statt Ticket-Warteschlange',
        'Migrationshilfen bei jedem Major-Release',
        'Optionale Sprechstunde alle zwei Wochen',
      ]}
      image={support}
      imageAlt="Support-Mitarbeiter mit Headset betreut Kundenanfragen"
      imageSide="left"
    />

    <Section index="05" eyebrow="Service-Level" title="Was wir vertraglich zusagen." bg="muted">
      <div className="grid gap-4 md:grid-cols-3">
        {sla.map(([label, wert, detail]) => (
          <div key={label} className="tile tile-hover p-6">
            <p className="text-[11px] font-mono uppercase tracking-widest text-[#64748B]">{label}</p>
            <p className="mt-4 font-mono text-2xl text-[#0F1B3D]">{wert}</p>
            <p className="mt-2 text-sm leading-relaxed text-[#64748B]">{detail}</p>
          </div>
        ))}
      </div>
    </Section>

    <CTABand
      title="Angebot für Lizenzen und Einführung?"
      intro="Sagen Sie uns Teamgröße, Zielplattform und Zeitrahmen — Sie erhalten binnen zwei Werktagen ein konkretes Angebot."
      primaryLabel="Angebot anfordern"
      secondaryLabel="Plattform ansehen"
      secondaryTo="/plattform"
    />
  </>
);

export default Services;
