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
    className={bg === 'muted' ? 'bg-[#F2F5F9]' : 'bg-[#FAFBFC]'}
  >
    <div className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
      <div className="grid items-stretch gap-4 lg:grid-cols-12">
        <div
          className={`tile p-8 lg:p-12 lg:col-span-7 flex flex-col justify-center ${
            imageSide === 'left' ? 'lg:order-2' : ''
          }`}
        >
          {(index || eyebrow) && (
            <span className="chip w-fit">
              {index && <span className="text-[#94A3B8]">{index}</span>}
              {eyebrow}
            </span>
          )}
          <h2 className="mt-6 font-display text-[30px] md:text-[40px] font-semibold tracking-[-0.03em] leading-[1.08] text-[#0F1B3D]">
            {title}
          </h2>
          {body && (
            <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-[#64748B]">{body}</div>
          )}
          {bullets && (
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {bullets.map((b) => (
                <li
                  key={b}
                  className="flex gap-3 rounded-xl bg-[#F2F5F9] px-4 py-3 text-sm leading-relaxed text-[#0F1B3D]"
                >
                  <Check size={16} className="mt-0.5 shrink-0 text-[#3B82F6]" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          )}
          {linkTo && linkLabel && (
            <Link
              to={linkTo}
              className="mt-8 inline-flex h-11 w-fit items-center gap-2 rounded-full bg-[#0F1B3D] px-6 text-sm font-medium text-white transition-colors hover:bg-[#1D4ED8]"
            >
              {linkLabel} <ArrowRight size={15} />
            </Link>
          )}
        </div>

        <div
          className={`tile overflow-hidden lg:col-span-5 ${
            imageSide === 'left' ? 'lg:order-1' : ''
          }`}
        >
          <img
            src={image}
            alt={imageAlt}
            loading="lazy"
            width={960}
            height={640}
            className="h-full min-h-[280px] w-full select-none object-cover"
            draggable={false}
            onContextMenu={(e) => e.preventDefault()}
            onDragStart={(e) => e.preventDefault()}
          />
        </div>
      </div>
    </div>
  </section>
);

export default SplitSection;