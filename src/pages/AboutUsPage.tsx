import { Link } from 'react-router-dom';
import { CornerBlocks } from '../components/CornerBlocks';
import { PageHero } from '../components/PageHero';
import { assetUrl } from '../utils/assetUrl';

const SHOWCASE_PILLARS = [
  {
    title: 'Business Solutions',
    status: 'Now Trading',
    image: '/assets/about-biz-1.png',
    alt: 'Business Solutions team collaboration',
    topLeftCorner: true,
    bottomRightCorner: false,
  },
  {
    title: 'Infrastructure',
    status: 'Being Established',
    image: '/assets/about-biz-2.png',
    alt: 'Infrastructure engineering construction site',
    topLeftCorner: false,
    bottomRightCorner: false,
  },
  {
    title: 'Asset Management',
    status: 'Awaiting Licensing',
    image: '/assets/about-biz-3.png',
    alt: 'Asset Management investment advisory team',
    topLeftCorner: false,
    bottomRightCorner: true,
  },
];

/** About Us page matching Figma frame "Group 77 - About Us Page" (60:13). */
export function AboutUsPage() {
  return (
    <>
      <PageHero
        title={'WHERE WE\nSTARTED'}
        eyebrow="ABOUT US"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat sodales tortor eu rutrum. Vivamus a finibus ipsum, eu sodales nulla. Cras in facilisis magna."
        imageSrc="/assets/about-hero.png"
        imageAlt="Johannesburg cityscape"
      />

      <section className="container-1440">
        <div className="about-story">
          <div>
            <h2 className="about-story__lead">
              Our Story.{' '}
              <span className="text-muted-grey">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </span>
            </h2>
            <p className="about-story__body">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat sodales
              tortor eu rutrum. Vivamus a finibus ipsum, eu sodales nulla. Cras in facilisis
              magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat
              sodales tortor eu rutrum. Vivamus a finibus ipsum, eu sodales nulla. Cras in
              facilisis magna.
            </p>
          </div>

          <div className="about-story__media">
            <img
              src={assetUrl('/assets/about-story-building.png')}
              alt="Modern architectural building"
              className="about-story__img"
            />
            <div className="blue-tint-overlay" />
            <span className="watermark-77">77</span>
            <CornerBlocks variant="photo-bottom-right-l" tone="light" />
          </div>
        </div>

        <div className="about-businesses-intro">
          <p className="section-label">OUR BUSINESSES</p>
          <p className="about-businesses-intro__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat sodales
            tortor eu rutrum. Vivamus a finibus ipsum, eu sodales nulla. Cras in facilisis
            magna. Lorem
          </p>
        </div>
      </section>

      <section className="about-showcase">
        <div className="about-showcase__grid">
          {SHOWCASE_PILLARS.map((card) => (
            <article key={card.title} className="about-showcase__card">
              <img src={assetUrl(card.image)} alt={card.alt} className="about-showcase__img" />
              <div className="blue-tint-overlay" />
              <div className="dark-overlay-84" />

              {card.topLeftCorner && (
                <CornerBlocks variant="showcase-top-left" tone="white" />
              )}
              {card.bottomRightCorner && (
                <CornerBlocks variant="showcase-bottom-right" tone="light" />
              )}

              <div className="about-showcase__inner">
                <span className="watermark-77">77</span>
                <h3 className="about-showcase__title">{card.title}</h3>
                <p className="about-showcase__status">{card.status}</p>
                <Link to="/businesses" className="btn-white">
                  Explore More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
