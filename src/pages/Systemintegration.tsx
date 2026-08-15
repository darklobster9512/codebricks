import PageHero from '@/components/limex/PageHero';
import Section from '@/components/limex/Section';
import CTABand from '@/components/limex/CTABand';
import SEO from '@/components/limex/SEO';
import architecture from '@/assets/limex-architecture.jpg';

const domains = [
  ['ERP', 'SAP S/4HANA, Microsoft Dynamics 365, Sage — Stammdaten, Belege, Finanzflüsse.'],
  ['CRM', 'Salesforce, HubSpot, Microsoft Dynamics CRM — Leads, Opportunities, Service-Prozesse.'],
  ['E-Commerce', 'Shopware, Shopify, SAP Commerce — Katalog, Preise, Bestellungen, Retouren.'],
  ['Datenplattformen', 'Snowflake, BigQuery, Databricks — Ingestion, Modellierung, Governance.'],
  ['Middleware & iPaaS', 'MuleSoft, workato, Azure Integration Services, Kafka — als Rückgrat oder als Klebstoff.'],
  ['Identity & Access', 'Okta, Entra ID, Keycloak — SSO, SCIM, Rollen- und Rechtekonzepte.'],
];

const patterns = [
  ['REST & GraphQL', 'Für synchrone Anfragen, Portale und Frontends. Versioniert, dokumentiert, überwacht.'],
  ['Event-Streaming', 'Kafka, EventBridge, Azure Event Grid — für lose gekoppelte, skalierbare Fachdomänen.'],
  ['ETL / ELT', 'Airflow, Fivetran, dbt — für Batch-Verarbeitung großer Datenmengen und Reporting-Strecken.'],
  ['File-basiert & EDI', 'Wenn der Partner nur SFTP oder EDIFACT spricht — mit sauberer Fehlerbehandlung und Wiederanlauf.'],
];

const Systemintegration = () => (
  <>
    <SEO
      title="Systemintegration | LIMEX Solutions"
      description="Bestehende Systeme sauber verbinden: ERP, CRM, Legacy, Cloud — zuverlässige Schnittstellen, saubere Datenflüsse und stabile Prozesse."
      path="/systemintegration"
    />
    <PageHero
      eyebrow="Leistung · Systemintegration"
      title={<>Systeme, die <span className="text-[#2563EB]">miteinander sprechen</span>.</>}
      intro="Zwischen ERP, CRM, Shop und Warenwirtschaft entsteht der eigentliche Wert. Wir integrieren Ihre Systemlandschaft so, dass Daten fließen, Prozesse laufen und Sie wieder mit Statistiken statt mit Excel arbeiten."
      breadcrumb={[{ label: 'Start', href: '/' }, { label: 'Systemintegration' }]}
    />

    <Section index="01" eyebrow="Domänen" title="Sechs Bereiche, in denen wir Systeme sauber verheiraten.">
      <div className="grid gap-x-14 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
        {domains.map(([t, d]) => (
          <div key={t}>
            <h3 className="text-lg font-semibold text-[#0B1220]">{t}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#5B6B85]">{d}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section index="02" eyebrow="Architektur" title="Wie eine typische Integrationslandschaft aussieht." bg="muted">
      <div className="grid gap-10 md:grid-cols-12 items-center">
        <div className="md:col-span-7 border border-[#E6ECF5] bg-white p-4">
          <img src={architecture} alt="Systemarchitektur" className="w-full h-auto" loading="lazy" width={1200} height={900} />
        </div>
        <div className="md:col-span-5 space-y-4 text-sm leading-relaxed text-[#5B6B85]">
          <p>
            Zentraler Integrations-Layer entkoppelt Quellsysteme (ERP, CRM, Legacy) von Kanälen (Portal, App, Marktplatz).
            Änderungen an einer Seite betreffen die andere nicht.
          </p>
          <p>
            Jeder Datenfluss ist beobachtbar: Traces, Fehler-Queues, Wiederanlauf. Ausfälle werden bemerkt, bevor der Kunde
            anruft.
          </p>
        </div>
      </div>
    </Section>

    <Section index="03" eyebrow="Integrationsmuster" title="Für jedes Problem das passende Muster.">
      <div className="divide-y divide-[#E6ECF5] border-y border-[#E6ECF5]">
        {patterns.map(([t, d]) => (
          <div key={t} className="grid gap-6 md:grid-cols-12 py-8">
            <div className="md:col-span-4 text-lg font-medium text-[#0B1220]">{t}</div>
            <div className="md:col-span-8 text-sm leading-relaxed text-[#5B6B85]">{d}</div>
          </div>
        ))}
      </div>
    </Section>

    <Section index="04" eyebrow="Betrieb" title="Nach dem Go-Live beginnt die eigentliche Arbeit." bg="muted">
      <div className="grid gap-8 md:grid-cols-3">
        {[
          ['Monitoring', 'End-to-End-Traces über alle Systeme. Alerts an die Verantwortlichen — nicht an alle.'],
          ['SLA & Support', '9×5 Regelbetrieb bis 24×7 mit Rufbereitschaft. Übergaben mit Runbook, nicht per Wiki-Link.'],
          ['Weiterentwicklung', 'Quartalsweise Review, kontinuierliche kleine Änderungen, jährliches Architektur-Health-Check.'],
        ].map(([t, d]) => (
          <div key={t} className="border border-[#E6ECF5] bg-white p-6">
            <h3 className="text-base font-semibold text-[#0B1220]">{t}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#5B6B85]">{d}</p>
          </div>
        ))}
      </div>
    </Section>

    <CTABand
      title="Datenchaos in Ihrer Systemlandschaft?"
      intro="Wir liefern ein Integrations-Audit in 3 Wochen — mit priorisierten Empfehlungen und einer Aufwandsschätzung."
      primaryLabel="Audit anfragen"
      secondaryLabel="Beratung ansehen"
      secondaryTo="/beratung"
    />
  </>
);

export default Systemintegration;
