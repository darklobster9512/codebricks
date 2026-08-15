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
    className={`border-t border-[#E6ECF5] ${bg === 'muted' ? 'bg-[#F7F9FC]' : 'bg-white'}`}
  >
    <div className={`mx-auto max-w-7xl px-6 py-20 lg:py-28 ${className || ''}`}>
      {(eyebrow || index || title || intro) && (
        <div className="grid gap-8 md:grid-cols-12 mb-14">
          <div className="md:col-span-4">
            {(index || eyebrow) && (
              <p className="text-[11px] font-mono uppercase tracking-widest text-[#5B6B85]">
                {index && <span className="text-[#2563EB]">{index}</span>}
                {index && eyebrow && <span className="mx-2">—</span>}
                {eyebrow}
              </p>
            )}
          </div>
          <div className="md:col-span-8">
            {title && (
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0B1220] leading-[1.15]">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#5B6B85]">{intro}</p>
            )}
          </div>
        </div>
      )}
      {children}
    </div>
  </section>
);

export default Section;
