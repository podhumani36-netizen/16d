import { Link } from 'react-router-dom';
import Reveal from './Reveal.jsx';
import { whatsappLink } from '../data/site.js';
import { heroes } from '../data/images.js';

// Small shared building blocks used across pages.

export function ButtonLink({ to, children, variant = 'primary', className = '' }) {
  const cls = `btn btn--${variant} ${className}`;
  if (/^(https?:|mailto:|tel:|#)/.test(to) || to.endsWith('.pdf')) {
    const external = to.startsWith('http');
    return (
      <a className={cls} href={to} {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}>
        {children}
      </a>
    );
  }
  return (
    <Link className={cls} to={to}>
      {children}
    </Link>
  );
}

export function SectionHead({ eyebrow, title, intro, center = false }) {
  return (
    <Reveal className={`section-head ${center ? 'section-head--center' : ''}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {intro && <p className="lead">{intro}</p>}
    </Reveal>
  );
}

// With `image`, the hero shows that photo on the right, fading into white.
// `imagePosition` is a CSS background-position, for photos whose subject isn't centred.
export function PageHero({ eyebrow, title, intro, image, imagePosition, children }) {
  return (
    <section
      className={`page-hero ${image ? 'page-hero--photo' : ''}`}
      style={image ? { '--hero-img': `url("${image}")`, '--hero-pos': imagePosition } : undefined}
    >
      <div className="container">
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        {intro && <p className="lead">{intro}</p>}
        {children && <div className="btn-row">{children}</div>}
      </div>
    </section>
  );
}

// Context-specific call to action (blueprint: every page ends with one).
export function CTASection({
  title = 'Ready to transform behaviour in your teams?',
  text = 'Tell us about your people-performance challenge. We\'ll suggest a practical programme designed around your teams.',
  primary = { to: '/contact', label: 'Talk to us about training' },
  whatsappText,
}) {
  const wa = whatsappLink(whatsappText);
  return (
    <section className="cta-band" style={{ '--bg-img': `url("${heroes.cta}")` }}>
      <Reveal className="container cta-band__inner">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="btn-row">
          <ButtonLink to={primary.to} variant="primary">{primary.label}</ButtonLink>
          {wa ? (
            <ButtonLink to={wa} variant="secondary">WhatsApp enquiry</ButtonLink>
          ) : (
            <ButtonLink to="/contact?enquiry=proposal" variant="secondary">Request a proposal</ButtonLink>
          )}
        </div>
      </Reveal>
    </section>
  );
}

// Visible placeholder where a real photograph should go (blueprint: real photos, minimal stock).
export function PhotoSlot({ label = 'Training photograph', ratio = '4 / 3', src, alt = '', eager = false }) {
  if (src) {
    return (
      <img className="photo" src={src} alt={alt} style={{ aspectRatio: ratio }} loading={eager ? 'eager' : 'lazy'} decoding="async" />
    );
  }
  return (
    <div className="photo-slot" style={{ aspectRatio: ratio }} role="img" aria-label={`${label} (placeholder)`}>
      <svg viewBox="0 0 24 24" width="32" height="32" aria-hidden="true">
        <path fill="currentColor" d="M4 5h3l2-2h6l2 2h3a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm8 3.5A4.5 4.5 0 1 0 12 17.5 4.5 4.5 0 0 0 12 8.5zm0 2A2.5 2.5 0 1 1 12 15.5 2.5 2.5 0 0 1 12 10.5z" />
      </svg>
      <span>{label}</span>
    </div>
  );
}

export function SampleBadge() {
  return (
    <span className="badge badge--sample" title="Placeholder content — replace before launch">
      Sample
    </span>
  );
}

export function Checklist({ items }) {
  return (
    <ul className="checklist">
      {items.map((t) => (
        <li key={t}>{t}</li>
      ))}
    </ul>
  );
}
