import { Link } from 'react-router-dom';
import Logo from './Logo.jsx';
import { site, whatsappLink } from '../data/site.js';
import { solutions } from '../data/solutions.js';
import { industries } from '../data/industries.js';

export default function Footer() {
  const wa = whatsappLink();
  const socials = Object.entries(site.social).filter(([, url]) => url);

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <Logo light />
          <p className="footer__tag">{site.tagline}</p>
          <p className="footer__msg">{site.message}</p>
        </div>

        <div>
          <h3 className="footer__h">Training Solutions</h3>
          <ul className="footer__list">
            {solutions.map((s) => (
              <li key={s.slug}>
                <Link to={s.link || `/training-solutions/${s.slug}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer__h">Industries</h3>
          <ul className="footer__list">
            {industries.map((i) => (
              <li key={i.slug}>
                <Link to={`/industries/${i.slug}`}>{i.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="footer__h">Get in touch</h3>
          <ul className="footer__list">
            {site.email && (
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            )}
            {site.phone && (
              <li>
                <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
              </li>
            )}
            {wa && (
              <li>
                <a href={wa} target="_blank" rel="noopener noreferrer">WhatsApp us</a>
              </li>
            )}
            <li className="footer__muted">{site.location}</li>
          </ul>
          {socials.length > 0 && (
            <ul className="footer__social">
              {socials.map(([name, url]) => (
                <li key={name}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {name[0].toUpperCase() + name.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="container footer__bottom">
        <p>Copyright © {new Date().getFullYear()} 16Dimensions. All rights reserved.</p>
        <p>
          <Link to="/privacy-policy">Privacy Policy</Link>
          <span aria-hidden="true"> · </span>
          <Link to="/contact">Contact</Link>
        </p>
      </div>
    </footer>
  );
}
