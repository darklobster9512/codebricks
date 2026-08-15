import PageHero from '@/components/limex/PageHero';
import SEO from '@/components/limex/SEO';


const Impressum = () => (
  <>
    <SEO
      title="Impressum"
      description="Angaben gemäß § 5 TMG — Codebricks GmbH, Leipziger Platz 15, 10117 Berlin, HRB 258971 B."
      path="/impressum"
    />
    <PageHero title="Impressum" breadcrumb={[{ label: 'Start', href: '/' }, { label: 'Impressum' }]} />
    <section className="bg-[#FAFBFC] px-6 pb-16 lg:pb-24">
      <div className="tile mx-auto max-w-3xl p-8 lg:p-12 space-y-10 text-sm leading-relaxed text-[#0F1B3D]">
        <div>
          <h2 className="text-[11px] font-mono uppercase tracking-widest text-[#3B82F6]">Angaben gemäß § 5 TMG</h2>
          <p className="mt-3">
            Codebricks GmbH<br />
            Leipziger Platz 15<br />
            10117 Berlin<br />
            Deutschland
          </p>
        </div>
        <div>
          <h2 className="text-[11px] font-mono uppercase tracking-widest text-[#3B82F6]">Vertreten durch</h2>
          <p className="mt-3">Geschäftsführer: Erik Andreas Hübner</p>
        </div>
        <div>
          <h2 className="text-[11px] font-mono uppercase tracking-widest text-[#3B82F6]">Registereintrag</h2>
          <p className="mt-3">
            Registergericht: Amtsgericht Charlottenburg (Berlin)<br />
            Registernummer: HRB 258971 B
          </p>
        </div>
        <div>
          <h2 className="text-[11px] font-mono uppercase tracking-widest text-[#3B82F6]">Umsatzsteuer</h2>
          <p className="mt-3">Umsatzsteuer-Identifikationsnummer gem. § 27 a UStG: DE458097140</p>
        </div>
        <div>
          <h2 className="text-[11px] font-mono uppercase tracking-widest text-[#3B82F6]">Kontakt</h2>
          <p className="mt-3">
            Telefon: 030 123456789<br />
            E-Mail: <a href="mailto:kontakt@codebricks-gmbh.de" className="text-[#3B82F6] hover:underline">kontakt@codebricks-gmbh.de</a><br />
            Web: <a href="https://codebricks.gmbh" className="text-[#3B82F6] hover:underline">https://codebricks.gmbh</a>
          </p>
        </div>
        <div>
          <h2 className="text-[11px] font-mono uppercase tracking-widest text-[#3B82F6]">Verantwortlich für den Inhalt</h2>
          <p className="mt-3">Erik Andreas Hübner (Anschrift wie oben)</p>
        </div>
        <div>
          <h2 className="text-[11px] font-mono uppercase tracking-widest text-[#3B82F6]">Streitschlichtung</h2>
          <p className="mt-3">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
            <a href="https://ec.europa.eu/consumers/odr" className="text-[#3B82F6] hover:underline">https://ec.europa.eu/consumers/odr</a>. Wir sind
            nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
        <p className="text-xs text-[#64748B]">Dieser Impressumstext wurde als Vorlage erstellt und sollte vor Veröffentlichung anwaltlich geprüft werden.</p>
      </div>
    </section>
  </>
);

export default Impressum;
