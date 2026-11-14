export type CornerBlocksVariant =
  | 'hero-top-right'
  | 'home-hero-bottom-left'
  | 'photo-bottom-left'
  | 'photo-top-left-wide'
  | 'photo-bottom-right-tall'
  | 'photo-bottom-right-l'
  | 'photo-top-left-l'
  | 'showcase-top-left'
  | 'showcase-bottom-right';

interface CornerBlocksProps {
  variant: CornerBlocksVariant;
  tone?: 'gold' | 'white' | 'light';
}

const BLOCK_COUNT: Record<CornerBlocksVariant, number> = {
  'hero-top-right': 2,
  'home-hero-bottom-left': 5,
  'photo-bottom-left': 3,
  'photo-top-left-wide': 3,
  'photo-bottom-right-tall': 2,
  'photo-bottom-right-l': 3,
  'photo-top-left-l': 3,
  'showcase-top-left': 2,
  'showcase-bottom-right': 3,
};

/** Renders the signature stepped geometric corner block motif from the Group 77 design system. */
export function CornerBlocks({ variant, tone = 'white' }: CornerBlocksProps) {
  const count = BLOCK_COUNT[variant];

  return (
    <div aria-hidden="true" className={`corner-blocks corner-blocks--${variant}`}>
      {Array.from({ length: count }, (_, idx) => (
        <span key={idx} className={`corner-block corner-block--${tone} b${idx + 1}`} />
      ))}
    </div>
  );
}
