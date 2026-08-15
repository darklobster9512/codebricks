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
    title: 'Zwei Personen, die jedes Projekt kennen.',
    intro:
      'Die Geschäftsführung arbeitet nicht über den Projekten, sondern in ihnen — bei Architekturentscheidungen, Eskalationen und Budgetfragen.',
    people: [
      {
        name: 'Ivan Kulinstev',
        role: 'Geschäftsführer',
        focus: 'Strategie & Technologie',
        text: 'Verantwortet die technische Ausrichtung von Codebricks, prüft Architekturentwürfe vor dem Start und begleitet kritische Migrationen persönlich.',
      },
      {
        name: 'Alla Lehnert',
        role: 'Geschäftsführerin',
        focus: 'Finanzen & Organisation',
        text: 'Führt Finanzen, Verträge und Organisation. Sorgt dafür, dass Angebote realistisch kalkuliert sind und Projekte im vereinbarten Rahmen bleiben.',
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
        name: 'Katharina Meinhardt',
        role: 'Leiterin Finanzen & Controlling',
        focus: 'Budgets, Forecasts, Reporting',
        text: 'Baut die Projektkalkulationen, überwacht Budgetverläufe und liefert Kunden monatlich nachvollziehbare Abrechnungen statt Sammelrechnungen.',
      },
      {
        name: 'Tobias Reinhard',
        role: 'Operations Manager',
        focus: 'Prozesse, Lieferanten, Tooling',
        text: 'Verantwortet interne Abläufe, Lizenzen und Partnerverträge und stellt sicher, dass Teams am ersten Projekttag arbeitsfähig sind.',
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
        name: 'Markus Brenner',
        role: 'Leiter People & Culture',
        focus: 'Entwicklung, Feedback, Weiterbildung',
        text: 'Verantwortet Entwicklungspfade, Feedbackzyklen und das Weiterbildungsbudget jedes Teammitglieds — vom Werkstudenten bis zur Bereichsleitung.',
      },
      {
        name: 'Julian Vollmer',
        role: 'Recruiting & Employer Branding',
        focus: 'Hiring, Onboarding, Community',
        text: 'Führt Bewerbungsgespräche, begleitet das Onboarding der ersten 90 Tage und organisiert unsere internen Tech-Sessions.',
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
        name: 'Dr. Matthias Ehrenberg',
        role: 'Leiter Engineering',
        focus: 'Architektur & Software-Delivery',
        text: 'Setzt technische Standards über alle Projekte hinweg, reviewt Architekturentscheidungen und verantwortet unsere Delivery-Qualität.',
      },
      {
        name: 'Sebastian Kleinert',
        role: 'Lead Cloud & Platform Architect',
        focus: 'Cloud, CI/CD, Betrieb',
        text: 'Entwirft Cloud-Landschaften auf Azure und AWS, automatisiert Deployments und richtet Monitoring ein, bevor es der Kunde vermisst.',
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
        name: 'Franziska Neuhaus',
        role: 'Leiterin Qualitätssicherung',
        focus: 'Teststrategie & Abnahmen',
        text: 'Definiert Testkonzepte pro Projekt, koordiniert Abnahmen mit den Fachbereichen und verantwortet unsere Freigabekriterien.',
      },
      {
        name: 'Marek Ostrowski',
        role: 'Lead Testautomatisierung',
        focus: 'Automatisierung & Regressionstests',
        text: 'Baut automatisierte Test-Suites für Web-Anwendungen und Schnittstellen und betreut das Team unserer Onlineprozess-Tester:innen.',
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
        name: 'Christoph Wendland',
        role: 'Leiter Beratung',
        focus: 'Kundenprojekte & Roadmaps',
        text: 'Begleitet Kunden von der ersten Analyse bis zur Roadmap und bleibt während der Umsetzung fester Ansprechpartner.',
      },
      {
        name: 'Lena Brinkmeier',
        role: 'Senior Business Analystin',
        focus: 'Anforderungen & Prozesse',
        text: 'Nimmt Fachanforderungen auf, modelliert Prozesse und sorgt dafür, dass Entwicklung und Fachbereich dieselbe Sprache sprechen.',
      },
    ],
  },
];

const PeopleRows = ({ people }: { people: Person[] }) => (
  <div className="divide-y divide-[#E8ECF1] rounded-[1.25rem] border border-[#E8ECF1] bg-white px-6">
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
      title="Team | Codebricks GmbH"
      description="Die Menschen hinter Codebricks: Geschäftsführung, Betrieb & Finanzen, People & Community, Technologie, Qualitätssicherung und Beratung."
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
