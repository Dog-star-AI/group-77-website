import { Link } from 'react-router-dom';
import { CornerBlocks } from '../components/CornerBlocks';
import { PageHero } from '../components/PageHero';
import { assetUrl } from '../utils/assetUrl';

interface BusinessSectionItem {
  eyebrow: string;
  heading: string;
  description: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  reversed?: boolean;
  cornerVariant: 'photo-bottom-right-l' | 'photo-top-left-l' | 'photo-bottom-left';
  showWatermark: boolean;
}

const BUSINESS_SECTIONS: BusinessSectionItem[] = [
  {
    eyebrow: 'BUSINESS SOLUTIONS',
    heading: 'Building for generations, not just for today.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra tempor lectus nec consequat. Curabitur dignissim orci vel aliquam posuere. Nulla id ex quis justo tempus malesuada sed non tortor. In quis elit enim. Vestibulum semper metus quis pharetra commodo. Ut tincidunt eu enim sed elementum',
    image: '/assets/businesses-solutions.png',
    imageAlt: 'Business solutions executive on call',
    imagePosition: 'center 18%',
    reversed: false,
    cornerVariant: 'photo-bottom-right-l',
    showWatermark: true,
  },
  {
    eyebrow: 'INFRASTRUCTURE',
    heading: 'Building for generations, not just for today.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra tempor lectus nec consequat. Curabitur dignissim orci vel aliquam posuere. Nulla id ex quis justo tempus malesuada sed non tortor. In quis elit enim. Vestibulum semper metus quis pharetra commodo. Ut tincidunt eu enim sed elementum',
    image: '/assets/businesses-infrastructure.png',
    imageAlt: 'Infrastructure engineering crew on site',
    reversed: true,
    cornerVariant: 'photo-top-left-l',
    showWatermark: true,
  },
  {
    eyebrow: 'ASSET MANAGEMENT',
    heading: 'Building for generations, not just for today.',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra tempor lectus nec consequat. Curabitur dignissim orci vel aliquam posuere. Nulla id ex quis justo tempus malesuada sed non tortor. In quis elit enim. Vestibulum semper metus quis pharetra commodo. Ut tincidunt eu enim sed elementum',
    image: '/assets/businesses-asset-mgmt.png',
    imageAlt: 'Asset management team reviewing strategy',
    reversed: false,
    cornerVariant: 'photo-bottom-left',
    showWatermark: false,
  },
];

/** Our Businesses page matching Figma frame "Group 77 - Our Businesses" (108:124). */
export function OurBusinessesPage() {
  return (
    <>
      <PageHero
        title={'THE PILLARS\nBEHIND GROUP 77'}
        eyebrow="OUR BUSINESSES"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat sodales tortor eu rutrum. Vivamus a finibus ipsum, eu sodales nulla. Cras in facilisis magna."
        imageSrc="/assets/businesses-hero.png"
        imageAlt="Modern commercial towers"
        wideTitle
      />

      <section className="container-1440">
        <div className="businesses-list">
          {BUSINESS_SECTIONS.map((biz) => {
            const mediaBlock = (
              <div className="business-feature__media">
                <img
                  src={assetUrl(biz.image)}
                  alt={biz.imageAlt}
                  className="business-feature__img"
                  style={biz.imagePosition ? { objectPosition: biz.imagePosition } : undefined}
                />
                {biz.showWatermark && <span className="watermark-77">77</span>}
                <CornerBlocks variant={biz.cornerVariant} tone="white" />
              </div>
            );

            const contentBlock = (
              <div className="business-feature__content">
                <p className="business-feature__eyebrow">{biz.eyebrow}</p>
                <h2 className="business-feature__title">{biz.heading}</h2>
                <p className="business-feature__text">{biz.description}</p>
                <Link to="/contact" className="btn-gold">
                  Get In Touch
                </Link>
              </div>
            );

            return (
              <article
                key={biz.eyebrow}
                className={`business-feature${biz.reversed ? ' business-feature--reversed' : ''}`}
              >
                {biz.reversed ? (
                  <>
                    {contentBlock}
                    {mediaBlock}
                  </>
                ) : (
                  <>
                    {mediaBlock}
                    {contentBlock}
                  </>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
