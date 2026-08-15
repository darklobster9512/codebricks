import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

interface Crumb { label: string; href?: string }

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  intro?: ReactNode;
  breadcrumb?: Crumb[];
}

const PageHero = ({ eyebrow, title, intro, breadcrumb }: PageHeroProps) => (
  <section className="relative overflow-hidden bg-[#FAFBFC]">
    <div
      aria-hidden
      className="pointer-events-none absolute -top-40 right-[-10%] h-[420px] w-[420px] rounded-full bg-[#3B82F6]/10 blur-3xl"
    />
    <div className="relative mx-auto max-w-6xl px-6 pt-14 pb-16 lg:pt-20 lg:pb-20">
      {breadcrumb && (
        <nav className="mb-8 text-[12px] text-[#64748B]">
          {breadcrumb.map((c, i) => (
            <span key={i}>
              {c.href ? (
                <Link to={c.href} className="hover:text-[#0F1B3D]">{c.label}</Link>
              ) : (
                <span className="text-[#0F1B3D]">{c.label}</span>
              )}
              {i < breadcrumb.length - 1 && <span className="mx-2 text-[#E8ECF1]">/</span>}
            </span>
          ))}
        </nav>
      )}
      <div className="tile p-8 lg:p-14">
        {eyebrow && <span className="chip">{eyebrow}</span>}
        <h1 className="mt-6 max-w-3xl font-display text-[38px] md:text-[54px] lg:text-[62px] font-semibold tracking-[-0.035em] leading-[1.02] text-[#0F1B3D]">
          {title}
        </h1>
        {intro && (
          <p className="mt-7 max-w-2xl text-[17px] leading-relaxed text-[#64748B]">{intro}</p>
        )}
      </div>
    </div>
  </section>
);

export default PageHero;
