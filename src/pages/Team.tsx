import PageHero from '@/components/limex/PageHero';
import Section from '@/components/limex/Section';
import CTABand from '@/components/limex/CTABand';
import SEO from '@/components/limex/SEO';

interface Person {
  name: string;
  role: string;
  focus: string;
  text: string;
}

interface Bereich {
  index: string;
  eyebrow: string;
  title: string;
  intro: string;
  bg?: 'white' | 'muted';
  people: Person[];
}

const bereiche: Bereich[] = [
  {
    index: '01',
    eyebrow: 'Geschäftsführung',
    title: 'Eine Person, die jedes Projekt kennt.',
    intro:
      'Die Geschäftsführung arbeitet nicht über den Projekten, sondern in ihnen — bei Architekturentscheidungen, Eskalationen und Budgetfragen.',
    people: [
      {
        name: 'Erik Andreas Hübner',
        role: 'Geschäftsführer',
        focus: 'Strategie, Plattform & Finanzen',
        text: 'Verantwortet die Produktstrategie von Codebricks, prüft Metamodelle und Architekturentwürfe vor dem Start und führt Finanzen, Verträge und Organisation.',
      },
    ],
  },
  {
    index: '02',
    eyebrow: 'Betrieb & Finanzen',
    title: 'Der Bereich, der Projekte kalkulierbar hält.',
    intro:
      'Controlling, Einkauf, Verträge und interne Prozesse — unsichtbar, wenn alles läuft, und genau darum wichtig.',
    bg: 'muted',
    people: [
      {
        name: 'Sandra Küpper',
        role: 'Leiterin Finanzen & Lizenzmodelle',
        focus: 'Budgets, Lizenzen, Reporting',
        text: 'Kalkuliert Projekt- und Lizenzmodelle, überwacht Budgetverläufe und liefert Kunden monatlich nachvollziehbare Abrechnungen statt Sammelrechnungen.',
      },
      {
        name: 'Daniel Ohlert',
        role: 'Operations Manager',
        focus: 'Prozesse, Partner, Tooling',
        text: 'Verantwortet interne Abläufe, Toolchain-Lizenzen und Partnerverträge und stellt sicher, dass Teams am ersten Projekttag arbeitsfähig sind.',
      },
    ],
  },
  {
    index: '03',
    eyebrow: 'People & Community',
    title: 'Menschen finden, halten und weiterbringen.',
    intro:
      'Ein Beratungshaus ist nur so gut wie die Leute, die morgens beim Kunden sitzen. Dieser Bereich kümmert sich um genau die.',
    people: [
      {
        name: 'Tobias Lindner',
        role: 'Leiter People & Culture',
        focus: 'Entwicklung, Feedback, Weiterbildung',
        text: 'Verantwortet Entwicklungspfade, Feedbackzyklen und das Weiterbildungsbudget jedes Teammitglieds — vom Werkstudenten bis zur Bereichsleitung.',
      },
      {
        name: 'Jonas Wiegand',
        role: 'Recruiting & Employer Branding',
        focus: 'Hiring, Onboarding, Community',
        text: 'Führt Bewerbungsgespräche, begleitet das Onboarding der ersten 90 Tage und organisiert unsere internen MDD-Sessions.',
      },
    ],
  },
  {
    index: '04',
    eyebrow: 'Technologie',
    title: 'Architektur, Plattform und Code-Qualität.',
    intro:
      'Hier entstehen die technischen Leitplanken: Referenzarchitekturen, Sicherheitsstandards und die Plattform, auf der unsere Lösungen laufen.',
    bg: 'muted',
    people: [
      {
        name: 'Dr. Henning Aschoff',
        role: 'Lead Plattform-Architektur',
        focus: 'Metamodelle & Referenzarchitektur',
        text: 'Setzt die Standards für Metamodelle und DSLs, reviewt Architekturentscheidungen und verantwortet die Qualität unserer Plattform-Releases.',
      },
      {
        name: 'Roman Sedlacek',
        role: 'Lead Generator-Engineering',
        focus: 'Codegeneratoren, CI/CD, Betrieb',
        text: 'Entwickelt unsere Codegeneratoren weiter, automatisiert Build- und Deployment-Pipelines und richtet Monitoring ein, bevor es der Kunde vermisst.',
      },
    ],
  },
  {
    index: '05',
    eyebrow: 'Qualitätssicherung & Testing',
    title: 'Fehler finden, bevor der Nutzer sie findet.',
    intro:
      'Testkonzepte, Automatisierung und strukturierte Prüfprozesse für Anwendungen, Schnittstellen und Onlineprozesse.',
    people: [
      {
        name: 'Miriam Falkenstein',
        role: 'Leiterin Qualitätssicherung',
        focus: 'Teststrategie & Abnahmen',
        text: 'Definiert Testkonzepte pro Projekt, koordiniert Abnahmen mit den Fachbereichen und verantwortet unsere Freigabekriterien.',
      },
      {
        name: 'Pawel Grabowski',
        role: 'Lead Testautomatisierung',
        focus: 'Generierte Systeme & Regressionstests',
        text: 'Baut automatisierte Test-Suites für generierte Anwendungen und Schnittstellen und betreut das Team unserer Onlineprozess-Tester:innen.',
      },
    ],
  },
  {
    index: '06',
    eyebrow: 'Kunden & Beratung',
    title: 'Die Schnittstelle zwischen Fachbereich und Technik.',
    intro:
      'Anforderungen aufnehmen, übersetzen, priorisieren — und über die gesamte Projektlaufzeit ansprechbar bleiben.',
    bg: 'muted',
    people: [
      {
        name: 'Andreas Löffler',
        role: 'Leiter Beratung & Einführung',
        focus: 'Kundenprojekte & Roadmaps',
        text: 'Begleitet Kunden von der ersten Analyse über die Plattform-Einführung bis zur Roadmap und bleibt während der Umsetzung fester Ansprechpartner.',
      },
      {
        name: 'Nora Steinbach',
        role: 'Senior Business Analystin',
        focus: 'Fachmodelle & Prozesse',
        text: 'Nimmt Fachanforderungen auf, überführt sie in Fachmodelle und sorgt dafür, dass Entwicklung und Fachbereich dieselbe Sprache sprechen.',
      },
    ],
  },
];

const PeopleRows = ({ people }: { people: Person[] }) => (
  <div className="divide-y divide-[#E8ECF1] rounded-[1.25rem] border border-[#E8ECF1] bg-white px-5 sm:px-6">
    {people.map((p) => (
      <div key={p.name} className="grid gap-6 md:grid-cols-12 py-10">
        <div className="md:col-span-4">
          <h3 className="text-xl font-semibold tracking-tight text-[#0F1B3D]">{p.name}</h3>
          <p className="mt-2 text-sm text-[#3B82F6]">{p.role}</p>
        </div>
        <div className="md:col-span-3">
          <p className="text-[11px] font-mono uppercase tracking-widest text-[#64748B]">{p.focus}</p>
        </div>
        <div className="md:col-span-5">
          <p className="text-sm leading-relaxed text-[#64748B]">{p.text}</p>
        </div>
      </div>
    ))}
  </div>
);

const Team = () => (
  <>
    <SEO
      title="Team – die Menschen hinter Codebricks"
      description="Geschäftsführung, Framework-Entwicklung, Sprachdesign, Qualitätssicherung und Beratung: das Team der Codebricks GmbH in Berlin."
      brand={false}
      path="/team"
    />
    <PageHero
      eyebrow="Unternehmen · Team"
      title={<>Die Menschen hinter <span className="text-[#3B82F6]">Codebricks</span>.</>}
      intro="Wir entwickeln in Berlin Frameworks und Werkzeuge für die modellgetriebene Softwareentwicklung. Sechs Bereiche, klare Zuständigkeiten — und immer ein Name statt einer Ticketnummer."
      breadcrumb={[{ label: 'Start', href: '/' }, { label: 'Team' }]}
    />

    {bereiche.map((b) => (
      <Section key={b.index} index={b.index} eyebrow={b.eyebrow} title={b.title} intro={b.intro} bg={b.bg}>
        <PeopleRows people={b.people} />
      </Section>
    ))}

    <CTABand
      title="Wir suchen Verstärkung in allen Bereichen."
      intro="Ob Entwicklung, Testing oder Beratung — wenn Sie sauber arbeiten und Verantwortung übernehmen wollen, sprechen wir gern."
      primaryLabel="Offene Stellen"
      primaryTo="/karriere"
      secondaryLabel="Kontakt aufnehmen"
      secondaryTo="/kontakt"
    />
  </>
);

export default Team;
