import { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

interface SplitSectionProps {
  index?: string;
  eyebrow?: string;
  title: ReactNode;
  body?: ReactNode;
  bullets?: string[];
  linkTo?: string;
  linkLabel?: string;
  image: string;
  imageAlt: string;
  /** Bildseite — Standard: rechts */
  imageSide?: 'left' | 'right';
  bg?: 'white' | 'muted';
  id?: string;
}

const SplitSection = ({
  index,
  eyebrow,
  title,
  body,
  bullets,
  linkTo,
  linkLabel,
  image,
  imageAlt,
  imageSide = 'right',
  bg = 'white',
  id,
}: SplitSectionProps) => (
  <section
    id={id}
    className={`border-t border-[#E6ECF5] ${bg === 'muted' ? 'bg-[#F7F9FC]' : 'bg-white'}`}
  >
    <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className={imageSide === 'left' ? 'lg:order-2' : ''}>
          {(index || eyebrow) && (
            <p className="text-[11px] font-mono uppercase tracking-widest text-[#5B6B85]">
              {index && <span className="text-[#2563EB]">{index}</span>}
              {index && eyebrow && <span className="mx-2">—</span>}
              {eyebrow}
            </p>
          )}
          <h2 className="mt-5 text-3xl md:text-4xl font-semibold tracking-tight leading-[1.15] text-[#0B1220]">
            {title}
          </h2>
          {body && (
            <div className="mt-5 space-y-4 text-base leading-relaxed text-[#5B6B85]">{body}</div>
          )}
          {bullets && (
            <ul className="mt-7 space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex gap-3 text-sm leading-relaxed text-[#0B1220]">
                  <Check size={16} className="mt-0.5 shrink-0 text-[#2563EB]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
          {linkTo && linkLabel && (
            <Link
              to={linkTo}
              className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-[#2563EB] hover:text-[#1E3A8A]"
            >
              {linkLabel} <ArrowRight size={14} />
            </Link>
          )}
        </div>

        <div className={imageSide === 'left' ? 'lg:order-1' : ''}>
          <div className="border border-[#E6ECF5] bg-white p-2">
            <img
              src={image}
              alt={imageAlt}
              loading="lazy"
              width={960}
              height={640}
              className="aspect-[3/2] w-full select-none object-cover"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SplitSection;