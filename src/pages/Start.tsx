import { Link } from 'react-router-dom';
import { ArrowRight, Boxes, Workflow, LifeBuoy, ChevronRight, Quote } from 'lucide-react';
import Section from '@/components/limex/Section';
import SplitSection from '@/components/limex/SplitSection';
import CTABand from '@/components/limex/CTABand';
import HeroFull from '@/components/limex/HeroFull';
import SEO from '@/components/limex/SEO';
import modelingWorkshop from '@/assets/photos/modeling-workshop.jpg';
import generatedCode from '@/assets/photos/generated-code.jpg';
import teamDesk from '@/assets/photos/team-desk.jpg';

const services = [
  {
    icon: Boxes,
    title: 'Plattform',
    body: 'Das Codebricks-Framework: Metamodell, Modell-Editor, Generatoren und Laufzeitbibliotheken — offen dokumentiert und ohne Lock-in.',
    to: '/plattform',
  },
  {
    icon: Workflow,
    title: 'Modellgetriebene Entwicklung',
    body: 'Domänenmodelle, eigene DSLs und Codegenerierung: Fachlichkeit wird modelliert, der repetitive Teil entsteht automatisch.',
    to: '/modellgetriebene-entwicklung',
  },
  {
    icon: LifeBuoy,
    title: 'Services & Lizenzen',
    body: 'Einführung, Generator-Anpassung, Schulung, Migration und Herstellersupport mit vereinbarten Reaktionszeiten.',
    to: '/services',
  },
];

const principles = [
  ['01', 'Lesbarer Code als Maßstab', 'Generierter Code muss ohne Framework-Wissen verständlich sein. Keine Magie, keine Blackbox zur Laufzeit.'],
  ['02', 'Kein Vendor-Lock-in', 'Offene Modellformate, offene Templates. Auch ohne uns bleibt Ihre Software lauffähig und weiterentwickelbar.'],
  ['03', 'Fachbereich am Modell', 'Ein Modell, das nur Entwickler verstehen, ist ein Diagramm. Wir bauen Sprachen, die beide Seiten lesen.'],
  ['04', 'Hersteller, nicht Vermittler', 'Framework, Generatoren und Support kommen aus einem Berliner Team — mit benanntem Ansprechpartner.'],
];

const cases = [
  ['Finanzdienstleister', 'Antragsstrecke mit eigener Regel-DSL generiert', '3 Wochen → 2 Tage'],
  ['Industrie · Anlagenbau', 'Produktkonfigurator aus einem Domänenmodell', '40 Varianten, 1 Modell'],
  ['Öffentliche Hand', 'Modellbasierte Ablösung eines Fachverfahrens', '0 Big-Bang-Migration'],
];

const techs = ['Java', '.NET', 'TypeScript', 'PostgreSQL', 'Xtext', 'EMF', 'OpenAPI', 'Kubernetes', 'GitLab CI', 'Gradle'];

const Start = () => (
  <>
    <SEO
      title="Codebricks – modellgetriebene Softwareentwicklung"
      description="Frameworks für modellgetriebene Softwareentwicklung aus Berlin: Modellierung, Codegenerierung, Einführung, Schulung und Support."
      brand={false}
      path="/"
    />
    <HeroFull />

    {/* SERVICE TRIAD */}
    <Section
      index="01"
      eyebrow="Angebot"
      title="Framework, Methode und Begleitung — aus einer Hand."
      intro="Wir entwickeln das Werkzeug, vertreiben die Lizenzen und bringen beides in Ihrem Team zum Laufen. Jeder Bereich ist einzeln buchbar."
    >
      <div className="grid gap-4 md:grid-cols-6">
        {services.map((s) => (
          <div key={s.title} className="tile tile-hover md:col-span-2 flex flex-col p-7">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EFF6FF]">
              <s.icon size={22} strokeWidth={1.6} className="text-[#3B82F6]" />
            </div>
            <h3 className="mt-6 font-display text-xl font-semibold tracking-[-0.02em] text-[#0F1B3D]">{s.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-[#64748B]">{s.body}</p>
            <Link
              to={s.to}
              className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[#3B82F6] hover:text-[#1D4ED8]"
            >
              Mehr erfahren <ArrowRight size={14} />
            </Link>
          </div>
        ))}
      </div>
    </Section>

    <SplitSection
      index="02"
      eyebrow="Prinzip"
      title="Ein Modell, aus dem alles Weitere folgt."
      body={
        <>
          <p>
            Fachbereich und Entwicklung beschreiben Begriffe, Regeln und Zustände in einem
            gemeinsamen Modell. Es ist versioniert, reviewbar und die einzige Quelle der Wahrheit.
          </p>
          <p>
            Alles Repetitive — Datenbankschema, Schnittstellen, Validierung, Testgerüste —
            erzeugt der Generator daraus bei jedem Build neu.
          </p>
        </>
      }
      bullets={[
        'Fachliche Regeln nachweisbar im Modell hinterlegt',
        'Keine Abweichung mehr zwischen Doku und Implementierung',
        'Änderungen reviewbar wie Code, inklusive Diff',
      ]}
      linkTo="/modellgetriebene-entwicklung"
      linkLabel="Methode ansehen"
      image={modelingWorkshop}
      imageAlt="Entwicklerin skizziert ein Fachmodell an einem Whiteboard"
      bg="muted"
    />

    <SplitSection
      index="03"
      eyebrow="Ergebnis"
      title="Code, den Ihr Team auch ohne uns weiterpflegt."
      body={
        <p>
          Unsere Generatoren erzeugen Quellcode in Ihren Konventionen: formatiert, getestet,
          statisch analysierbar. Erweiterungspunkte bleiben bei jeder Regenerierung erhalten,
          und die Templates liegen in Ihrem Repository.
        </p>
      }
      bullets={[
        'Zielplattformen: Java, .NET, TypeScript, PostgreSQL',
        'Generierte Migrationen statt handgeschriebener SQL-Skripte',
        'Offene, anpassbare Templates ohne Lizenzfalle',
      ]}
      linkTo="/plattform"
      linkLabel="Plattform ansehen"
      image={generatedCode}
      imageAlt="Bildschirm mit strukturiertem, generiertem Quellcode"
      imageSide="left"
    />

    {/* PRINCIPLES */}
    <Section index="04" eyebrow="Haltung" title="Vier Grundsätze, an denen Sie uns messen können." bg="muted">
      <div className="grid gap-4 md:grid-cols-4">
        {principles.map(([n, t, d]) => (
          <div key={n} className="tile tile-hover p-7">
            <span className="font-display text-sm font-semibold text-[#94A3B8]">{n}</span>
            <p className="mt-4 font-display text-lg font-semibold tracking-[-0.02em] text-[#0F1B3D]">{t}</p>
            <p className="mt-3 text-sm leading-relaxed text-[#64748B]">{d}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* TECH WALL */}
    <Section index="05" eyebrow="Zielplattformen" title="Generiert wird in die Technologien, die Sie bereits betreiben.">
      <div className="flex flex-wrap gap-3">
        {techs.map((t) => (
          <span
            key={t}
            className="rounded-full border border-[#E8ECF1] bg-white px-5 py-2.5 font-display text-sm font-medium text-[#0F1B3D] shadow-[0_1px_2px_rgba(15,27,61,0.04)] transition-colors hover:border-[#3B82F6] hover:text-[#3B82F6]"
          >
            {t}
          </span>
        ))}
      </div>
    </Section>

    <SplitSection
      index="06"
      eyebrow="Team"
      title="Ein Produktteam in Berlin, kein Wiederverkäufer."
      body={
        <p>
          Am Leipziger Platz arbeiten Sprachdesign, Generatorentwicklung und Support in einem
          Raum. Wer Ihnen im Support antwortet, kennt den Code, der Ihr Problem verursacht.
        </p>
      }
      bullets={[
        'Framework-Entwicklung und Support im selben Team',
        'Planbare Releases alle sechs Wochen, LTS über 24 Monate',
        'Benannter Ansprechpartner statt Ticket-Warteschlange',
      ]}
      image={teamDesk}
      imageAlt="Zwei Entwickler arbeiten gemeinsam an Modellen am Bildschirm"
      bg="muted"
    />

    {/* CASES */}
    <Section index="07" eyebrow="Einsatzbeispiele" title="Wo Modelle bereits produktiv Code erzeugen.">
      <div className="grid gap-4 md:grid-cols-3">
        {cases.map(([branche, projekt, ergebnis]) => (
          <div key={projekt} className="tile tile-hover flex flex-col p-7">
            <span className="chip w-fit">{branche}</span>
            <p className="mt-5 flex-1 text-[17px] leading-snug text-[#0F1B3D]">{projekt}</p>
            <div className="mt-6 flex items-center justify-between border-t border-[#E8ECF1] pt-4">
              <span className="font-display text-sm font-semibold text-[#3B82F6]">{ergebnis}</span>
              <ChevronRight size={18} className="text-[#94A3B8]" />
            </div>
          </div>
        ))}
      </div>
    </Section>

    {/* TESTIMONIAL */}
    <Section index="08" eyebrow="Stimmen" bg="muted">
      <div className="tile grid items-start gap-10 p-8 md:grid-cols-12 lg:p-12">
        <div className="md:col-span-2">
          <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-[#EFF6FF] font-display text-2xl font-semibold text-[#3B82F6]">
            MK
          </div>
        </div>
        <div className="md:col-span-10">
          <Quote size={28} className="text-[#3B82F6]" strokeWidth={1.5} />
          <blockquote className="mt-4 font-display text-2xl font-medium leading-snug tracking-[-0.02em] text-[#0F1B3D] md:text-3xl">
            „Nach dem Umstieg auf Codebricks entstehen neue Antragsvarianten in Tagen statt in
            Wochen — und zum ersten Mal stimmt die Fachdoku mit dem laufenden System überein."
          </blockquote>
          <p className="mt-6 text-sm text-[#64748B]">
            <span className="font-medium text-[#0F1B3D]">Dr. Martin Köhler</span> · Leiter Anwendungsentwicklung, Finanzdienstleister
          </p>
        </div>
      </div>
    </Section>

    <CTABand />
  </>
);

export default Start;
