import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import Logo from './Logo.jsx';

// Blueprint menu: HOME | ABOUT | TRAINING SOLUTIONS | INDUSTRIES | PoSH |
// SUCCESS STORIES | INSIGHTS | CONTACT + REQUEST TRAINING button.
const nav = [
  { to: '/', label: 'Home', end: true },
  {
    to: '/about',
    label: 'About',
    children: [
      { to: '/about', label: 'About 16Dimensions' },
      { to: '/about/kavitha-sasi', label: 'About Kavitha Sasi' },
    ],
  },
  { to: '/training-solutions', label: 'Training Solutions' },
  { to: '/industries', label: 'Industries' },
  { to: '/posh', label: 'PoSH' },
  { to: '/success-stories', label: 'Success Stories' },
  { to: '/insights', label: 'Insights' },
  { to: '/contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <Link to="/" className="header__logo" aria-label="16Dimensions home">
          <Logo />
        </Link>

        <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Main">
          <ul className="nav__list">
            {nav.map((item) => (
              <li key={item.label} className={item.children ? 'nav__item has-sub' : 'nav__item'}>
                <NavLink to={item.to} end={item.end} className="nav__link">
                  {item.label}
                </NavLink>
                {item.children && (
                  <ul className="nav__sub">
                    {item.children.map((c) => (
                      <li key={c.to}>
                        <NavLink to={c.to} end className="nav__sublink">
                          {c.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Link to="/contact" className="btn btn--primary nav__cta">
            Request Training
          </Link>
        </nav>

        <button
          className={`burger ${open ? 'burger--open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
