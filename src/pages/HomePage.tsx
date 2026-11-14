import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { CornerBlocks } from '../components/CornerBlocks';
import { assetUrl } from '../utils/assetUrl';

const GROUP_PILLARS = [
  {
    num: '01',
    title: 'Business Solutions',
    status: 'Now Trading',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat sodales tortor eu rutrum. Vivamus a finibus ipsum, eu sodales nulla. Cras in facilisis magna.',
  },
  {
    num: '02',
    title: 'Infrastructure',
    status: 'Being Established',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat sodales tortor eu rutrum. Vivamus a finibus ipsum, eu sodales nulla. Cras in facilisis magna.',
  },
  {
    num: '03',
    title: 'Asset management',
    status: 'Awaiting Licensing',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat sodales tortor eu rutrum. Vivamus a finibus ipsum, eu sodales nulla. Cras in facilisis magna.',
  },
];

const PHILOSOPHY_ITEMS = [
  {
    title: 'Peace',
    icon: '/assets/philosophy-1.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat sodales.',
  },
  {
    title: 'Integrity',
    icon: '/assets/philosophy-3.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat sodales.',
  },
  {
    title: 'Commitment',
    icon: '/assets/philosophy-4.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat sodales.',
  },
  {
    title: 'Responsibility',
    icon: '/assets/philosophy-2.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat sodales.',
  },
  {
    title: 'Conviction',
    icon: '/assets/philosophy-5.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat sodales.',
  },
  {
    title: 'Gratitude',
    icon: '/assets/philosophy-6.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat sodales.',
  },
  {
    title: 'Building Things That Last',
    icon: '/assets/philosophy-7.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec placerat sodales.',
  },
];

/** Homepage matching Figma frame "Group 77 - Homepage V4 Sketch" (1:2). */
export function HomePage() {
  const [partnerEmail, setPartnerEmail] = useState('');
  const [partnerStatus, setPartnerStatus] = useState('');

  const handlePartnerSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmed = partnerEmail.trim();
    if (!trimmed) {
      setPartnerStatus('Please enter your email address.');
      return;
    }
    setPartnerStatus(`Thank you — we will be in touch with ${trimmed}.`);
    setPartnerEmail('');
  };

  return (
    <>
      {/* Hero */}
      <section className="home-hero">
        <div className="home-hero__shell">
          <div className="home-hero__bg">
            <img
              src={assetUrl('/assets/home-hero.png')}
              alt="Johannesburg city skyline"
              className="home-hero__img"
            />
            <div className="blue-tint-overlay" />
          </div>

          <CornerBlocks variant="hero-top-right" tone="gold" />
          <CornerBlocks variant="home-hero-bottom-left" tone="gold" />

          <div className="home-hero__content">
            <h1 className="home-hero__title">
              BEYOND MARKETS.
              <br />
              BUILDING LEGACIES
            </h1>

            <div className="home-hero__bottom">
              <p className="home-hero__subtitle">
                A Johannesburg-based infrastructure and asset management group: three
                businesses, one disciplined engine.
              </p>
              <Link to="/contact" className="btn-white">
                Talk to Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Group Structure */}
      <section className="group-structure">
        <div className="container-1440">
          <div className="group-structure__top">
            <p className="section-label">OUR GROUP STRUCTURE</p>
            <h2 className="group-structure__lead">
              <span className="text-deep-gold">One Group.</span>
              {' 3 Distinct Business Pillars. '}
              <span className="text-muted-grey">
                A shared Vision For Long-Term Value Across Africa.
              </span>
            </h2>
          </div>

          <div className="group-structure__body">
            <div className="group-structure__photo-wrap">
              <img
                src={assetUrl('/assets/home-baobab.png')}
                alt="Baobab avenue representing deep African roots"
                className="group-structure__photo"
              />
              <div className="blue-tint-overlay" />
              <span className="watermark-77">77</span>
              <CornerBlocks variant="photo-bottom-left" tone="light" />
            </div>

            <div className="pillar-rows">
              {GROUP_PILLARS.map((pillar) => (
                <article key={pillar.num} className="pillar-row">
                  <span className="pillar-row__num">{pillar.num}</span>

                  <div className="pillar-row__title-col">
                    <h3 className="pillar-row__title">{pillar.title}</h3>
                    <p className="pillar-row__status">{pillar.status}</p>
                  </div>

                  <div className="pillar-row__desc-col">
                    <p className="pillar-row__desc">{pillar.description}</p>
                    <Link to="/businesses" className="btn-outline">
                      Explore&nbsp;&nbsp;&nbsp;&rarr;
                    </Link>
                  </div>

                  <img
                    src={assetUrl('/assets/line-1.svg')}
                    alt=""
                    width={829}
                    height={1}
                    className="pillar-row__divider"
                  />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Group 77 Banner */}
      <section className="home-about-banner">
        <div className="home-about-banner__shell">
          <div className="home-about-banner__photo-wrap">
            <img
              src={assetUrl('/assets/home-about-city.png')}
              alt="Aerial urban infrastructure"
              className="home-about-banner__photo"
            />
            <div className="blue-tint-overlay" />
            <span className="watermark-77">77</span>
            <CornerBlocks variant="photo-bottom-right-tall" tone="white" />
          </div>

          <div className="home-about-banner__gradient">
            <CornerBlocks variant="photo-top-left-wide" tone="white" />

            <p className="home-about-banner__eyebrow">ABOUT GROUP 77</p>
            <h2 className="home-about-banner__title">
              {'African-built,\nready for the world.'}
            </h2>
            <p className="home-about-banner__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra tempor
              lectus nec consequat. Curabitur dignissim orci vel aliquam posuere. Nulla id ex
              quis justo tempus malesuada sed non tortor. In quis elit enim. Vestibulum semper
              metus quis pharetra commodo. Ut tincidunt eu enim sed elementum
            </p>
            <Link to="/about" className="btn-gold">
              Learn More &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Our Vision for Africa */}
      <section className="home-vision">
        <div className="container-1440">
          <p className="home-vision__eyebrow">OUR VISION FOR AFRICA</p>

          <div className="home-vision__header">
            <h2 className="home-vision__title">
              Building for generations, not just for today.
            </h2>
            <p className="home-vision__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pharetra tempor
              lectus nec consequat. Curabitur dignissim orci vel aliquam posuere. Nulla id ex
              quis justo tempus malesuada sed non tortor. In quis elit enim. Vestibulum semper
              metus quis pharetra commodo. Ut tincidunt eu enim sed elementum
            </p>
          </div>

          <div className="home-vision__media">
            <img
              src={assetUrl('/assets/home-vision-seeds.png')}
              alt="Seeds held carefully in open palm"
              className="home-vision__img"
            />
            <div className="dark-overlay-20" />
            <span className="watermark-77">77</span>
            <CornerBlocks variant="photo-top-left-wide" tone="white" />
            <CornerBlocks variant="photo-bottom-right-tall" tone="white" />
          </div>
        </div>
      </section>

      {/* Our Philosophy */}
      <section className="home-philosophy">
        <div className="container-1440">
          <div className="home-philosophy__grid">
            <div>
              <p className="section-label">OUR PHILOSOPHY</p>
            </div>

            {PHILOSOPHY_ITEMS.map((item) => (
              <article key={item.title} className="philosophy-card">
                <div className="philosophy-card__icon-wrap">
                  <img
                    src={assetUrl(item.icon)}
                    alt={`${item.title} geometric emblem`}
                    className="philosophy-card__icon"
                  />
                </div>
                <h3 className="philosophy-card__title">{item.title}</h3>
                <p className="philosophy-card__desc">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Partner with Us */}
      <section className="partner-banner">
        <div className="partner-banner__shell">
          <div className="partner-banner__bg">
            <img
              src={assetUrl('/assets/home-partner-pipes.png')}
              alt="Industrial infrastructure piping"
              className="partner-banner__img"
            />
            <div className="blue-tint-overlay" />
            <div className="dark-overlay-70" />
          </div>

          <span className="watermark-77">77</span>

          <div className="partner-banner__content">
            <h2 className="partner-banner__title">Partner with Us</h2>
            <p className="partner-banner__subtitle">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris dignissim
              bibendum nisl, vel imperdiet eros elementum et.
            </p>

            <form className="partner-form" onSubmit={handlePartnerSubmit}>
              <input
                type="email"
                className="partner-form__input"
                placeholder="Your email address"
                aria-label="Your email address"
                value={partnerEmail}
                onChange={(e) => setPartnerEmail(e.target.value)}
              />
              <button type="submit" className="partner-form__btn">
                Get Started
              </button>
            </form>

            {partnerStatus && (
              <p className="partner-form__status" role="status">
                {partnerStatus}
              </p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
