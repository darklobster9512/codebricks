import PageHero from '@/components/limex/PageHero';
import SEO from '@/components/limex/SEO';

const H2 = ({ children }: { children: string }) => (
  <h2 className="text-[11px] font-mono uppercase tracking-widest text-[#2563EB] mt-10">{children}</h2>
);

const Datenschutz = () => (
  <>
    <SEO
      title="Datenschutz | Codebricks"
      description="Datenschutzerklärung der Codebricks GmbH gemäß DSGVO."
      path="/datenschutz"
    />
    <PageHero title="Datenschutzerklärung" breadcrumb={[{ label: 'Start', href: '/' }, { label: 'Datenschutz' }]} />
    <section className="border-t border-[#E6ECF5] bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16 text-sm leading-relaxed text-[#0B1220] space-y-4">
        <p>
          Wir freuen uns über Ihr Interesse an der Codebricks GmbH. Der Schutz Ihrer personenbezogenen Daten ist uns ein
          zentrales Anliegen. Nachfolgend informieren wir Sie über die Verarbeitung Ihrer Daten beim Besuch dieser Website.
        </p>

        <H2>1. Verantwortlicher</H2>
        <p>
          Codebricks GmbH, Leipziger Platz 15, 10117 Berlin, vertreten durch die Geschäftsführer Ivan Kulinstev und
          Alla Lehnert. Kontakt: <a href="mailto:kontakt@codebricks-gmbh.de" className="text-[#2563EB] hover:underline">kontakt@codebricks-gmbh.de</a>.
        </p>

        <H2>2. Erhebung beim Besuch der Website</H2>
        <p>
          Beim informatorischen Besuch werden automatisch Informationen (Server-Logfiles) erhoben: IP-Adresse in gekürzter Form,
          Datum und Uhrzeit, aufgerufene Seite, verwendeter Browser. Rechtsgrundlage ist unser berechtigtes Interesse an der
          technischen Bereitstellung der Website (Art. 6 Abs. 1 lit. f DSGVO). Die Logdaten werden nach 14 Tagen gelöscht.
        </p>

        <H2>3. Kontaktformular und Bewerbungen</H2>
        <p>
          Wenn Sie uns über das Kontakt- oder Bewerbungsformular kontaktieren, verarbeiten wir die von Ihnen angegebenen Daten
          (Name, E-Mail, Telefon, Nachricht) zur Bearbeitung Ihrer Anfrage. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b bzw.
          lit. f DSGVO. Die Daten werden gelöscht, sobald der Zweck der Verarbeitung entfallen ist, spätestens jedoch nach
          gesetzlichen Aufbewahrungsfristen.
        </p>

        <H2>4. Auftragsverarbeiter und Hosting</H2>
        <p>
          Diese Website wird auf Servern innerhalb der Europäischen Union gehostet. Für die technische Bereitstellung und für
          die Verarbeitung von Formularen setzen wir sorgfältig ausgewählte Dienstleister ein, mit denen jeweils ein Vertrag
          zur Auftragsverarbeitung nach Art. 28 DSGVO besteht.
        </p>

        <H2>5. Cookies</H2>
        <p>
          Wir verwenden ausschließlich technisch notwendige Cookies. Für optionale Cookies (z. B. Analyse) holen wir Ihre
          ausdrückliche Einwilligung über unseren Cookie-Banner ein. Diese Einwilligung können Sie jederzeit widerrufen.
        </p>

        <H2>6. Ihre Rechte</H2>
        <p>
          Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16), Löschung (Art. 17), Einschränkung
          (Art. 18), Datenübertragbarkeit (Art. 20) sowie Widerspruch (Art. 21). Zudem können Sie sich bei einer
          Aufsichtsbehörde beschweren; zuständig ist die Berliner Beauftragte für Datenschutz und Informationsfreiheit.
        </p>

        <H2>7. Änderungen</H2>
        <p>
          Wir passen diese Datenschutzerklärung an, sobald sich rechtliche oder technische Rahmenbedingungen ändern. Stand:
          {' '}{new Date().toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}.
        </p>

        <p className="text-xs text-[#5B6B85] mt-8">
          Dieser Text ist eine allgemeine Vorlage und ersetzt keine individuelle Rechtsberatung. Vor Veröffentlichung sollte
          eine anwaltliche Prüfung erfolgen.
        </p>
      </div>
    </section>
  </>
);

export default Datenschutz;
