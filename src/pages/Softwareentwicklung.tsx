import PageHero from '@/components/limex/PageHero';
import Section from '@/components/limex/Section';
import CTABand from '@/components/limex/CTABand';
import SEO from '@/components/limex/SEO';

const angebote = [
  ['Web-Anwendungen', 'React, Next.js, TypeScript. Von internen Tools bis zu kundenorientierten Portalen mit hoher Last.'],
  ['Mobile Apps', 'React Native und native iOS/Android für den Fall, dass Performance und Hardware-Zugriff zählen.'],
  ['APIs & Backends', 'Node.js, Python, .NET — API-first entworfen, dokumentiert mit OpenAPI und Tests.'],
  ['Legacy-Modernisierung', 'Sanfte Ablösung monolithischer Systeme durch Strangler-Muster ohne Big-Bang-Risiko.'],
  ['MVP-Engineering', 'Vom Whiteboard zum Live-Produkt in 8–12 Wochen. Ideal für neue Geschäftsmodelle und Innovationsteams.'],
];

const stackGruppen = [
  ['Frontend', ['TypeScript', 'React', 'Next.js', 'Vue', 'Tailwind', 'Storybook']],
  ['Backend', ['Node.js', 'NestJS', 'Python', 'FastAPI', '.NET 8', 'Go']],
  ['Cloud & DevOps', ['AWS', 'Azure', 'GCP', 'Kubernetes', 'Terraform', 'GitHub Actions']],
  ['Daten', ['PostgreSQL', 'MongoDB', 'Redis', 'Snowflake', 'Kafka', 'dbt']],
];

const modelle = [
  ['Festpreis', 'Klare Ergebnisse, klarer Preis. Ideal für abgrenzbare Vorhaben mit definiertem Umfang.', 'Empfehlung ab 6 Wochen'],
  ['Time & Material', 'Wöchentliche Abrechnung nach tatsächlichem Aufwand. Ideal für explorative Phasen und laufende Weiterentwicklung.', 'Ab 3 Personentagen / Woche'],
  ['Dediziertes Team', 'Ein festes Team ausschließlich für Sie. Kapazität von 3 bis 8 Engineers.', 'Ab 6 Monate Laufzeit'],
];

const Softwareentwicklung = () => (
  <>
    <SEO
      title="Softwareentwicklung | LIMEX Solutions"
      description="Individuelle Softwareentwicklung: Webplattformen, APIs, mobile Apps und interne Tools — sauber, wartbar, langfristig tragfähig."
      path="/softwareentwicklung"
    />
    <PageHero
      eyebrow="Leistung · Softwareentwicklung"
      title={<>Individualsoftware, die <span className="text-[#2563EB]">genau passt</span>.</>}
      intro="Standardsoftware hat ihre Grenzen. Dort, wo Ihr Wettbewerbsvorteil sitzt, sollten Sie eigenständige Software besitzen — sauber gebaut, dokumentiert und übergabefähig."
      breadcrumb={[{ label: 'Start', href: '/' }, { label: 'Softwareentwicklung' }]}
    />

    <Section index="01" eyebrow="Angebote" title="Von der API bis zur nutzerorientierten Oberfläche.">
      <div className="grid gap-x-14 gap-y-12 md:grid-cols-2">
        {angebote.map(([t, d]) => (
          <div key={t}>
            <h3 className="text-xl font-semibold text-[#0B1220]">{t}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#5B6B85]">{d}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section index="02" eyebrow="Tech-Stack" title="Werkzeuge, mit denen wir seit Jahren produktiv liefern." bg="muted">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {stackGruppen.map(([gruppe, items]) => (
          <div key={gruppe as string} className="border border-[#E6ECF5] bg-white p-6">
            <p className="text-[11px] font-mono uppercase tracking-widest text-[#2563EB]">{gruppe as string}</p>
            <ul className="mt-4 space-y-2">
              {(items as string[]).map((i) => (
                <li key={i} className="text-sm text-[#0B1220]">{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>

    <Section index="03" eyebrow="Delivery-Modelle" title="Drei Modelle, ein transparenter Rahmen.">
      <div className="grid gap-6 md:grid-cols-3">
        {modelle.map(([t, d, hinweis]) => (
          <div key={t} className="flex flex-col border border-[#E6ECF5] p-8 bg-white">
            <h3 className="text-xl font-semibold text-[#0B1220]">{t}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-[#5B6B85]">{d}</p>
            <p className="mt-6 border-t border-[#E6ECF5] pt-4 font-mono text-xs text-[#2563EB]">{hinweis}</p>
          </div>
        ))}
      </div>
    </Section>

    <Section index="04" eyebrow="Fallbeispiel" title="Modernisierung eines ERP-Portals im Finanzsektor." bg="muted">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-8 space-y-4 text-base leading-relaxed text-[#5B6B85]">
          <p>
            Ein Bestandskunde betrieb ein 14 Jahre altes Kundenportal auf einer .NET-Framework-Basis. Kernprobleme: Ladezeiten
            über 2 Sekunden, keine mobile Nutzung, ein SAP-Adapter, der nur nachts synchronisierte.
          </p>
          <p>
            Wir haben das Portal in einem Strangler-Ansatz auf React und .NET 8 migriert, die SAP-Anbindung auf Event-basierte
            Deltas umgestellt und ein Design-System eingeführt. Live-Gang nach 5 Monaten, ohne Betriebsstillstand.
          </p>
        </div>
        <div className="md:col-span-4 grid gap-4">
          {[
            ['0,6 s', 'Median-Ladezeit'],
            ['−72 %', 'Support-Tickets'],
            ['5 Monate', 'Time-to-Production'],
          ].map(([n, l]) => (
            <div key={l} className="border border-[#E6ECF5] bg-white p-5">
              <p className="font-mono text-2xl text-[#0B1220]">{n}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-[#5B6B85]">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>

    <CTABand
      title="Sie haben ein Softwareprojekt im Kopf?"
      intro="Wir prüfen technische Machbarkeit, Aufwand und Alternativen in einem 60-minütigen Assessment."
      primaryLabel="Assessment anfragen"
      secondaryLabel="Systemintegration"
      secondaryTo="/systemintegration"
    />
  </>
);

export default Softwareentwicklung;
