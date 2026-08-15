import { ReactNode } from 'react';

interface SectionProps {
  eyebrow?: string;
  index?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  bg?: 'white' | 'muted';
  id?: string;
  className?: string;
}

const Section = ({ eyebrow, index, title, intro, children, bg = 'white', id, className }: SectionProps) => (
  <section
    id={id}
    className={bg === 'muted' ? 'bg-[#F2F5F9]' : 'bg-[#FAFBFC]'}
  >
    <div className={`mx-auto max-w-6xl px-6 py-16 lg:py-24 ${className || ''}`}>
      {(eyebrow || index || title || intro) && (
        <div className="mb-12 max-w-3xl">
          {(index || eyebrow) && (
            <span className="chip">
              {index && <span className="text-[#94A3B8]">{index}</span>}
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="mt-6 font-display text-[32px] md:text-[44px] font-semibold tracking-[-0.03em] text-[#0F1B3D] leading-[1.08]">
              {title}
            </h2>
          )}
          {intro && (
            <p className="mt-5 max-w-2xl text-[17px] leading-relaxed text-[#64748B]">{intro}</p>
          )}
        </div>
      )}
      {children}
    </div>
  </section>
);

export default Section;
