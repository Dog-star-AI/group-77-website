import { CornerBlocks } from './CornerBlocks';
import { assetUrl } from '../utils/assetUrl';

interface PageHeroProps {
  title: string;
  eyebrow?: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  compact?: boolean;
  wideTitle?: boolean;
}

/** Shared full-bleed blue-tinted hero section for Group 77 inner pages. */
export function PageHero({
  title,
  eyebrow,
  description,
  imageSrc,
  imageAlt,
  compact = false,
  wideTitle = false,
}: PageHeroProps) {
  return (
    <section className={`page-hero${compact ? ' page-hero--compact' : ''}`}>
      <div className="page-hero__shell">
        <div className="page-hero__bg">
          <img src={assetUrl(imageSrc)} alt={imageAlt} className="page-hero__img" />
          <div className="blue-tint-overlay" />
        </div>

        <CornerBlocks variant="hero-top-right" tone="gold" />

        <div className="page-hero__content">
          <h1
            className={`page-hero__title${wideTitle ? ' page-hero__title--wide' : ''}`}
          >
            {title}
          </h1>

          <div className="page-hero__side">
            {eyebrow && <p className="page-hero__eyebrow">{eyebrow}</p>}
            <p className="page-hero__desc">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
