import PageHero from '@/components/limex/PageHero';
import Section from '@/components/limex/Section';
import SplitSection from '@/components/limex/SplitSection';
import CTABand from '@/components/limex/CTABand';
import SEO from '@/components/limex/SEO';
import { ChevronRight } from 'lucide-react';
import codeLaptop from '@/assets/photos/code-laptop.jpg';
import generatedCode from '@/assets/photos/generated-code.jpg';

const bausteine = [
  ['Modell-Editor', 'Fachliche Modelle in einer grafischen und textuellen Oberfläche erfassen — versionierbar, reviewfähig, im Git-Repository abgelegt.'],
  ['Metamodell-Kern', 'Ein erweiterbares Metamodell beschreibt Entitäten, Regeln, Zustände und Berechtigungen Ihrer Domäne — herstellerunabhängig und offen dokumentiert.'],
  ['Generatoren', 'Aus dem Modell entstehen Datenbankschema, API, Validierungen, Testgerüste und Oberflächen. Templates sind offen und anpassbar.'],
  ['Laufzeitbibliotheken', 'Schlanke Runtime für Java, .NET und TypeScript: Persistenz, Regelauswertung, Auditing — nur das, was generierter Code wirklich braucht.'],
  ['Roundtrip & Migration', 'Modelländerungen erzeugen versionierte Migrationen. Handgeschriebene Erweiterungen bleiben bei jedem Regenerieren erhalten.'],
];

const faqs = [
  ['Erzeugt Codebricks Code, den man lesen kann?', 'Ja. Der generierte Code folgt den gleichen Konventionen wie handgeschriebener Code, ist formatiert, kommentiert und kann ohne unser Framework weiterentwickelt werden.'],
  ['Was passiert mit unserem eigenen Code?', 'Erweiterungspunkte und geschützte Bereiche bleiben bei jeder Regenerierung unverändert. Es gibt kein Überschreiben ohne Vorwarnung.'],
  ['Gibt es ein Vendor-Lock-in?', 'Nein. Modelle liegen in einem offenen, dokumentierten Format vor, die Templates gehören Ihnen. Auch nach Vertragsende bleibt der generierte Code lauffähig.'],
  ['Wie wird lizenziert?', 'Pro Entwicklerplatz und Jahr, mit optionalem Wartungs- und Supportvertrag. Für Evaluierungen gibt es eine kostenfreie 60-Tage-Lizenz.'],
];

const Plattform = () => (
  <>
    <SEO
      title="Plattform | Codebricks GmbH"
      description="Das Codebricks-Framework: Metamodell, Modell-Editor, Generatoren und Laufzeitbibliotheken für die modellgetriebene Softwareentwicklung."
      path="/plattform"
    />
    <PageHero
      eyebrow="Produkt · Plattform"
      title={<>Ein Framework, das aus Modellen <span className="text-[#3B82F6]">lesbaren Code</span> macht.</>}
      intro="Codebricks ist kein Baukasten für Klickstrecken, sondern eine Werkzeugkette für Entwicklungsteams: Modell, Generator, Laufzeit — offen, versionierbar und ohne Lock-in."
      breadcrumb={[{ label: 'Start', href: '/' }, { label: 'Plattform' }]}
    />

    <Section index="01" eyebrow="Bausteine" title="Fünf Komponenten, eine durchgängige Werkzeugkette.">
      <div className="divide-y divide-[#E8ECF1] rounded-[1.25rem] border border-[#E8ECF1] bg-white px-6">
        {bausteine.map(([t, d]) => (
          <div key={t} className="grid gap-6 md:grid-cols-12 py-8">
            <div className="md:col-span-4 text-lg font-medium text-[#0F1B3D]">{t}</div>
            <div className="md:col-span-8 text-sm leading-relaxed text-[#64748B]">{d}</div>
          </div>
        ))}
      </div>
    </Section>

    <SplitSection
      index="02"
      eyebrow="Architektur"
      title="Vom Metamodell bis zum lauffähigen Service."
      body={
        <>
          <p>
            Das Metamodell beschreibt Ihre Fachlichkeit einmal. Aus dieser einen Quelle
            erzeugen die Generatoren Datenmodell, Schnittstellen, Validierungen und
            Testgerüste — konsistent über alle Zielplattformen hinweg.
          </p>
          <p>
            Änderungen werden im Modell gemacht, nicht an fünf Stellen im Code. Der
            Generator übernimmt den Rest und protokolliert jede Anpassung nachvollziehbar.
          </p>
        </>
      }
      bullets={[
        'Eine Quelle der Wahrheit für Fachlichkeit und Struktur',
        'Zielplattformen: Java, .NET, TypeScript, PostgreSQL',
        'Generierte Migrationen statt manueller SQL-Skripte',
      ]}
      image={codeLaptop}
      imageAlt="Laptop mit generiertem Quellcode auf einem Entwicklerarbeitsplatz"
      bg="muted"
    />

    <SplitSection
      index="03"
      eyebrow="Codequalität"
      title="Generierter Code, den Ihr Team ohne uns weiterpflegen kann."
      body={
        <p>
          Wir messen die Qualität unserer Generatoren daran, ob ein Entwickler ohne
          Framework-Kenntnisse den erzeugten Code versteht. Keine Reflection-Magie, keine
          undurchsichtigen Laufzeitcontainer, keine generierten Dateien ohne Struktur.
        </p>
      }
      bullets={[
        'Formatierung nach Ihren Team-Konventionen',
        'Statische Analyse und Tests laufen auf generiertem Code',
        'Offene Templates — anpassbar in Ihrem eigenen Repository',
      ]}
      image={generatedCode}
      imageAlt="Bildschirm mit strukturiertem, farblich hervorgehobenem Quellcode"
      imageSide="left"
    />

    <Section index="04" eyebrow="Häufige Fragen" title="Was Entwicklungsleitungen vor der Evaluierung fragen.">
      <div className="divide-y divide-[#E8ECF1] rounded-[1.25rem] border border-[#E8ECF1] bg-white px-6">
        {faqs.map(([q, a]) => (
          <details key={q} className="group py-6">
            <summary className="flex cursor-pointer items-center justify-between text-base font-medium text-[#0F1B3D]">
              {q}
              <ChevronRight size={18} className="text-[#64748B] transition-transform group-open:rotate-90" />
            </summary>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#64748B]">{a}</p>
          </details>
        ))}
      </div>
    </Section>

    <CTABand
      title="Testen Sie Codebricks 60 Tage kostenfrei."
      intro="Wir richten die Evaluierungslizenz ein, modellieren gemeinsam eine erste Domäne und begleiten Sie durch den ersten Generatorlauf."
      primaryLabel="Evaluierung starten"
      secondaryLabel="Modellgetriebene Entwicklung"
      secondaryTo="/modellgetriebene-entwicklung"
    />
  </>
);

export default Plattform;
