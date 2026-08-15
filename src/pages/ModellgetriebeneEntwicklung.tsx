import PageHero from '@/components/limex/PageHero';
import Section from '@/components/limex/Section';
import SplitSection from '@/components/limex/SplitSection';
import CTABand from '@/components/limex/CTABand';
import SEO from '@/components/limex/SEO';
import sketching from '@/assets/photos/sketching-model.jpg';
import workshop from '@/assets/photos/modeling-workshop.jpg';

const bausteine = [
  ['Domänenmodellierung', 'Fachbegriffe, Regeln und Zustände werden gemeinsam mit dem Fachbereich erfasst — in einer Sprache, die beide Seiten lesen können.'],
  ['Domänenspezifische Sprachen', 'Wo ein generisches Modell nicht reicht, entsteht eine eigene DSL: knapp, präzise, auf Ihren Fachbereich zugeschnitten.'],
  ['Codegenerierung', 'Aus Modell und Templates entstehen Persistenz, Services, Schnittstellen und Oberflächen — reproduzierbar bei jedem Build.'],
  ['Modell-Validierung', 'Regelverstöße, Lücken und Widersprüche fallen im Modell auf, nicht erst im Integrationstest.'],
  ['Legacy-Ablösung', 'Bestehende Systeme werden Domäne für Domäne abgelöst — modellbasiert, ohne Big Bang.'],
];

const phasen = [
  ['01', 'Domänenschnitt', 'Wir schneiden Ihre Fachlichkeit in Domänen und wählen den ersten Kandidaten mit hohem Nutzen und geringem Risiko.'],
  ['02', 'Modellierung', 'Fachbereich und Entwicklung modellieren gemeinsam. Ergebnis ist ein validiertes, versioniertes Fachmodell.'],
  ['03', 'Generatorbau', 'Templates werden an Ihre Architektur, Namenskonventionen und Zielplattform angepasst.'],
  ['04', 'Erster Durchstich', 'Generierter Code läuft in Ihrer Pipeline — mit Tests, Migration und Deployment.'],
  ['05', 'Skalierung', 'Weitere Domänen folgen. Das Team übernimmt Modellpflege und Generatoren eigenständig.'],
];

const ModellgetriebeneEntwicklung = () => (
  <>
    <SEO
      title="Modellgetriebene Entwicklung | Codebricks GmbH"
      description="Modellgetriebene Softwareentwicklung in der Praxis: Domänenmodelle, eigene DSLs, Codegenerierung und die schrittweise Ablösung von Altsystemen."
      path="/modellgetriebene-entwicklung"
    />
    <PageHero
      eyebrow="Methode · MDD"
      title={<>Fachlichkeit modellieren statt <span className="text-[#3B82F6]">Code kopieren</span>.</>}
      intro="Modellgetriebene Entwicklung verlagert die Arbeit dorthin, wo sie hingehört: in die Fachlichkeit. Der repetitive Teil — Schema, Schnittstellen, Validierung, Gerüste — entsteht automatisch."
      breadcrumb={[{ label: 'Start', href: '/' }, { label: 'Modellgetriebene Entwicklung' }]}
    />

    <Section index="01" eyebrow="Bausteine" title="Fünf Disziplinen, die MDD im Alltag tragfähig machen.">
      <div className="grid gap-x-14 gap-y-12 md:grid-cols-2">
        {bausteine.map(([t, d]) => (
          <div key={t}>
            <h3 className="text-xl font-semibold text-[#0F1B3D]">{t}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#64748B]">{d}</p>
          </div>
        ))}
      </div>
    </Section>

    <SplitSection
      index="02"
      eyebrow="Zusammenarbeit"
      title="Fachbereich und Entwicklung an einem Modell."
      body={
        <>
          <p>
            Das Fachmodell ist die gemeinsame Sprache. Es ersetzt die Anforderungstabelle,
            die niemand pflegt, und das Architekturbild, das nach drei Sprints veraltet ist.
          </p>
          <p>
            In moderierten Modellierungssitzungen entstehen Begriffe, Regeln und Zustände —
            direkt maschinenlesbar erfasst, nicht als Protokoll im Anhang.
          </p>
        </>
      }
      bullets={[
        'Workshops mit Fachbereich, Architektur und Entwicklung',
        'Jede Regel ist im Modell nachweisbar hinterlegt',
        'Änderungen sind reviewbar wie Code — inklusive Diff',
      ]}
      image={workshop}
      imageAlt="Modellierungsworkshop: Domänenmodell entsteht am Whiteboard"
      bg="muted"
    />

    <Section index="03" eyebrow="Vorgehen" title="Fünf Phasen bis zum produktiven Durchstich.">
      <div className="grid gap-6 md:grid-cols-5">
        {phasen.map(([n, t, d]) => (
          <div key={n} className="border border-[#E8ECF1] bg-white p-6">
            <p className="font-mono text-xs text-[#3B82F6]">{n}</p>
            <h3 className="mt-4 text-base font-semibold text-[#0F1B3D]">{t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#64748B]">{d}</p>
          </div>
        ))}
      </div>
    </Section>

    <SplitSection
      index="04"
      eyebrow="Fallbeispiel"
      title="Antragsstrecke eines Finanzdienstleisters."
      body={
        <>
          <p>
            Ein Bestandskunde pflegte 40 Antragsvarianten in handgeschriebenem Code —
            jede Regeländerung berührte Formular, Validierung, Persistenz und Reporting.
          </p>
          <p>
            Mit einer eigenen DSL für Antragsregeln werden alle vier Ebenen aus einem
            Modell erzeugt. Eine neue Variante entsteht heute in Stunden statt in Wochen.
          </p>
        </>
      }
      bullets={[
        '40 Antragsvarianten aus einem Modell generiert',
        'Regeländerung: von 3 Wochen auf 2 Tage',
        'Keine Abweichung mehr zwischen Formular und Prüfung',
      ]}
      image={sketching}
      imageAlt="Entwickler skizziert ein Datenmodell auf Papier neben einem Laptop"
      imageSide="left"
    />

    <CTABand
      title="Passt MDD zu Ihrer Domäne?"
      intro="In einem 60-minütigen Assessment schauen wir uns Ihre Fachlichkeit an und sagen ehrlich, wo Modellierung trägt — und wo nicht."
      primaryLabel="Assessment anfragen"
      secondaryLabel="Services & Lizenzen"
      secondaryTo="/services"
    />
  </>
);

export default ModellgetriebeneEntwicklung;
