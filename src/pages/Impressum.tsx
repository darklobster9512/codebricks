import PageHero from '@/components/limex/PageHero';
import SEO from '@/components/limex/SEO';


const Impressum = () => (
  <>
    <SEO
      title="Impressum | Codebricks"
      description="Angaben gemäß § 5 TMG — Codebricks GmbH, Leipziger Platz 15, 10117 Berlin."
      path="/impressum"
    />
    <PageHero title="Impressum" breadcrumb={[{ label: 'Start', href: '/' }, { label: 'Impressum' }]} />
    <section className="border-t border-[#E6ECF5] bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16 space-y-10 text-sm leading-relaxed text-[#0B1220]">
        <div>
          <h2 className="text-[11px] font-mono uppercase tracking-widest text-[#2563EB]">Angaben gemäß § 5 TMG</h2>
          <p className="mt-3">
            Codebricks GmbH<br />
            Leipziger Platz 15<br />
            10117 Berlin<br />
            Deutschland
          </p>
        </div>
        <div>
          <h2 className="text-[11px] font-mono uppercase tracking-widest text-[#2563EB]">Vertreten durch</h2>
          <p className="mt-3">Geschäftsführer: Ivan Kulinstev, Alla Lehnert</p>
        </div>
        <div>
          <h2 className="text-[11px] font-mono uppercase tracking-widest text-[#2563EB]">Registereintrag</h2>
          <p className="mt-3">
            Registergericht: Amtsgericht Charlottenburg (Berlin)<br />
            Registernummer: HRB 258971 B
          </p>
        </div>
        <div>
          <h2 className="text-[11px] font-mono uppercase tracking-widest text-[#2563EB]">Umsatzsteuer</h2>
          <p className="mt-3">Umsatzsteuer-Identifikationsnummer gem. § 27 a UStG: DE458097140</p>
        </div>
        <div>
          <h2 className="text-[11px] font-mono uppercase tracking-widest text-[#2563EB]">Kontakt</h2>
          <p className="mt-3">
            Telefon: 030 123456789<br />
            E-Mail: <a href="mailto:kontakt@codebricks-gmbh.de" className="text-[#2563EB] hover:underline">kontakt@codebricks-gmbh.de</a><br />
            Web: <a href="https://codebricks.gmbh" className="text-[#2563EB] hover:underline">https://codebricks.gmbh</a>
          </p>
        </div>
        <div>
          <h2 className="text-[11px] font-mono uppercase tracking-widest text-[#2563EB]">Verantwortlich für den Inhalt</h2>
          <p className="mt-3">Ivan Kulinstev (Anschrift wie oben)</p>
        </div>
        <div>
          <h2 className="text-[11px] font-mono uppercase tracking-widest text-[#2563EB]">Streitschlichtung</h2>
          <p className="mt-3">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
            <a href="https://ec.europa.eu/consumers/odr" className="text-[#2563EB] hover:underline">https://ec.europa.eu/consumers/odr</a>. Wir sind
            nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
        <p className="text-xs text-[#5B6B85]">Dieser Impressumstext wurde als Vorlage erstellt und sollte vor Veröffentlichung anwaltlich geprüft werden.</p>
      </div>
    </section>
  </>
);

export default Impressum;
