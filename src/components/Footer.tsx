import { Link } from 'react-router-dom';
import { assetUrl } from '../utils/assetUrl';

const FOOTER_PILLARS = [
  { name: 'Business Solutions', status: 'Now trading' },
  { name: 'Infrastructure', status: 'Being Established' },
  { name: 'Asset Management', status: 'Awaiting Licensing' },
];

/** Global dark navy footer with smooth Go-to-Top action and route links. */
export function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__shell">
        <div className="footer__vertical-rail" aria-hidden="true" />

        <div className="footer__top-bar">
          <button
            type="button"
            className="footer__go-top"
            onClick={handleScrollTop}
          >
            Go to Top ^
          </button>
        </div>

        <div className="footer__main">
          <div className="footer__brand-col">
            <Link to="/" className="brand-logo brand-logo--lg">
              GROUP <span className="brand-logo__accent">77</span>
            </Link>
            <p className="footer__tagline">Values Today. Legacy Tomorrow</p>

            <div className="footer__pillars">
              {FOOTER_PILLARS.map((pillar) => (
                <div key={pillar.name}>
                  <p className="footer__pillar-title">{pillar.name}</p>
                  <p className="footer__pillar-status">{pillar.status}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="footer__contact-col">
            <div className="footer__group">
              <p className="footer__group-title">Address</p>
              <p className="footer__group-item">Johannesburg, South Africa</p>
            </div>
            <div className="footer__group" style={{ marginBottom: 0 }}>
              <p className="footer__group-title">Contact</p>
              <a href="tel:+27000000000" className="footer__group-item">
                +27 00 000 0000
              </a>
              <a href="mailto:admin@group77.co.za" className="footer__group-item">
                admin@group77.co.za
              </a>
            </div>
          </div>

          <div className="footer__about-col">
            <p className="footer__group-title">About Group 77</p>
            <Link to="/about" className="footer__group-item">
              About Us
            </Link>
            <Link to="/vision" className="footer__group-item">
              Our Vision for Africa
            </Link>
            <Link to="/approach" className="footer__group-item">
              Our Approach
            </Link>
          </div>

          <div className="footer__support-col">
            <p className="footer__group-title">Support &amp; Resources</p>
            <Link to="/contact" className="footer__group-item">
              Contact Us
            </Link>
            <Link to="/approach" className="footer__group-item">
              FAQS
            </Link>
            <Link to="/businesses" className="footer__group-item">
              Regulatory status
            </Link>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            Copyright &copy; 2026 Group 77 (Pty) Ltd. — Reg. No. 2026/136377/07. All Rights Reserved.
          </p>

          <div className="footer__legal-social">
            <div className="footer__legal">
              <Link to="/approach">Privacy</Link>
              <Link to="/approach">Terms</Link>
            </div>

            <div className="footer__social">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
                aria-label="Group 77 on LinkedIn"
              >
                <img
                  src={assetUrl('/assets/icon-linkedin.svg')}
                  alt="LinkedIn"
                  width={28}
                  height={28}
                />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="footer__social-link"
                aria-label="Group 77 on X"
              >
                <img
                  src={assetUrl('/assets/icon-x.svg')}
                  alt="X"
                  width={29}
                  height={26}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
