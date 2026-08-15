import { ReactNode } from 'react';

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export const BentoGrid = ({ children, className }: BentoGridProps) => (
  <div className={`grid grid-cols-1 gap-4 md:grid-cols-6 ${className || ''}`}>{children}</div>
);

type Span = 2 | 3 | 4 | 6;

interface BentoTileProps {
  children: ReactNode;
  /** Spaltenbreite im 6er-Raster */
  span?: Span;
  variant?: 'default' | 'quiet' | 'ink' | 'bare';
  className?: string;
  padded?: boolean;
}

const spanClass: Record<Span, string> = {
  2: 'md:col-span-2',
  3: 'md:col-span-3',
  4: 'md:col-span-4',
  6: 'md:col-span-6',
};

const variantClass = {
  default: 'tile tile-hover',
  quiet: 'tile-quiet',
  ink: 'tile-ink',
  bare: '',
};

export const BentoTile = ({
  children,
  span = 2,
  variant = 'default',
  className,
  padded = true,
}: BentoTileProps) => (
  <div
    className={`${spanClass[span]} ${variantClass[variant]} overflow-hidden ${
      padded ? 'p-7' : ''
    } ${className || ''}`}
  >
    {children}
  </div>
);

interface TileLabelProps {
  children: ReactNode;
  tone?: 'light' | 'ink';
}

export const TileLabel = ({ children, tone = 'light' }: TileLabelProps) => (
  <span className={tone === 'ink' ? 'chip-ink' : 'chip'}>{children}</span>
);

export default BentoGrid;