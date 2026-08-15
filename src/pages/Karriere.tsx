import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHero from '@/components/limex/PageHero';
import Section from '@/components/limex/Section';
import CTABand from '@/components/limex/CTABand';
import SEO from '@/components/limex/SEO';
import { stellen } from '@/data/karriereStellen';

const Karriere = () => (
  <>
    <SEO
      title="Karriere bei Codebricks"
      description="Aktuelle Stellen bei Codebricks: Framework- und Generator-Entwicklung, Sprachdesign, Consulting und Support — remote und in Berlin."
      path="/karriere"
    />
    <PageHero
      eyebrow="Karriere · bei Codebricks"
      title={<>Arbeiten Sie an Software, die <span className="text-[#2563EB]">tatsächlich benutzt</span> wird.</>}
      intro="Wir sind ein festes Team in Berlin. Kein Wachstum um jeden Preis, kein Hire-and-Fire, keine anonymen Sprint-Reviews. Wenn Sie handwerkliches Können und Verantwortung schätzen, sollten wir sprechen."
      breadcrumb={[{ label: 'Start', href: '/' }, { label: 'Karriere' }]}
    />

    <Section index="01" eyebrow="Offene Stellen" title="Aktuell suchen wir.">
      <div className="divide-y divide-[#E6ECF5] border-y border-[#E6ECF5]">
        {stellen.map((s) => (
          <Link
            key={s.slug}
            to={`/karriere/${s.slug}`}
            className="grid gap-4 md:grid-cols-12 py-6 items-center group hover:bg-[#F7F9FC] -mx-4 px-4 transition-colors"
          >
            <div className="md:col-span-6">
              <h3 className="text-lg font-medium text-[#0B1220] group-hover:text-[#2563EB]">{s.titel}</h3>
            </div>
            <div className="md:col-span-2 text-sm text-[#5B6B85]">{s.bereich}</div>
            <div className="md:col-span-3 text-sm text-[#5B6B85]">{s.standort}</div>
            <div className="md:col-span-1 md:text-right">
              <ArrowRight size={16} className="inline text-[#5B6B85] group-hover:text-[#2563EB] group-hover:translate-x-1 transition-all" />
            </div>
          </Link>
        ))}
      </div>
    </Section>

    <CTABand
      title="Ihre Rolle ist nicht dabei?"
      intro="Wir freuen uns über Initiativbewerbungen von Engineers, Consultants und Integrationsspezialist:innen. Kurze Mail genügt."
      primaryLabel="Initiativ bewerben"
      primaryTo="/karriere/bewerbung"
      secondaryLabel="Team & Kultur"
      secondaryTo="/"
    />
  </>
);

export default Karriere;
