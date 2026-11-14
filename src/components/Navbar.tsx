import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const NAV_ITEMS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Our Businesses', to: '/businesses' },
  { label: 'Our Approach', to: '/approach' },
  { label: 'Our Vision', to: '/vision' },
];

/** Top navigation bar matching the Group 77 desktop and mobile header designs. */
export function Navbar() {
  const [openPath, setOpenPath] = useState<string | null>(null);
  const { pathname } = useLocation();
  const menuOpen = openPath === pathname;

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="brand-logo" aria-label="Group 77 Home">
          GROUP <span className="brand-logo__accent">77</span>
        </Link>

        <nav className="navbar__right" aria-label="Primary navigation">
          <ul className="navbar__links">
            {NAV_ITEMS.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  className={({ isActive }) =>
                    `navbar__link${isActive ? ' is-active' : ''}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn-gold">
            Contact Us
          </Link>
        </nav>

        <button
          type="button"
          className="navbar__hamburger"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setOpenPath((prev) => (prev === pathname ? null : pathname))}
        >
          <span className="navbar__hamburger-bars" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      {menuOpen && (
        <nav className="navbar__mobile-drawer" aria-label="Mobile navigation">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `navbar__mobile-link${isActive ? ' is-active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn-gold" style={{ marginTop: 8 }}>
            Contact Us
          </Link>
        </nav>
      )}
    </header>
  );
}
