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
    <div className={`mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:py-24 ${className || ''}`}>
      {(eyebrow || index || title || intro) && (
        <div className="mb-8 max-w-3xl sm:mb-12">
          {(index || eyebrow) && (
            <span className="chip">
              {index && <span className="text-[#94A3B8]">{index}</span>}
              {eyebrow}
            </span>
          )}
          {title && (
            <h2 className="mt-5 font-display text-[27px] sm:mt-6 sm:text-[32px] md:text-[44px] font-semibold tracking-[-0.03em] text-[#0F1B3D] leading-[1.08]">
              {title}
            </h2>
          )}
          {intro && (
            <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-[#64748B] sm:mt-5 sm:text-[17px]">{intro}</p>
          )}
        </div>
      )}
      {children}
    </div>
  </section>
);

export default Section;
