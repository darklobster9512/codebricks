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
  <section className="bg-white">
    <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 lg:pt-24 lg:pb-28">
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
      {eyebrow && (
        <p className="text-[11px] font-mono uppercase tracking-widest text-[#3B82F6] mb-5">
          {eyebrow}
        </p>
      )}
      <h1 className="max-w-4xl text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.05] text-[#0F1B3D]">
        {title}
      </h1>
      {intro && (
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#64748B]">{intro}</p>
      )}
    </div>
  </section>
);

export default PageHero;
