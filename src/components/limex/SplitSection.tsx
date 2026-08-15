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
    <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6 sm:py-16 lg:py-24">
      <div className="grid items-stretch gap-3 sm:gap-4 lg:grid-cols-12">
        <div
          className={`tile p-6 sm:p-8 lg:p-12 lg:col-span-7 flex flex-col justify-center ${
            imageSide === 'left' ? 'lg:order-2' : ''
          }`}
        >
          {(index || eyebrow) && (
            <span className="chip w-fit">
              {index && <span className="text-[#94A3B8]">{index}</span>}
              {eyebrow}
            </span>
          )}
          <h2 className="mt-5 font-display text-[26px] sm:mt-6 sm:text-[30px] md:text-[40px] font-semibold tracking-[-0.03em] leading-[1.1] text-[#0F1B3D]">
            {title}
          </h2>
          {body && (
            <div className="mt-4 space-y-4 text-[16px] leading-relaxed text-[#64748B] sm:mt-5 sm:text-[17px]">{body}</div>
          )}
          {bullets && (
            <ul className="mt-6 grid gap-2.5 sm:mt-8 sm:gap-3 sm:grid-cols-2">
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
              className="mt-6 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#0F1B3D] px-6 text-sm font-medium text-white transition-colors hover:bg-[#1D4ED8] sm:mt-8 sm:h-11 sm:w-fit"
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
            className="aspect-[16/10] h-full w-full select-none object-cover lg:aspect-auto lg:min-h-[280px]"
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