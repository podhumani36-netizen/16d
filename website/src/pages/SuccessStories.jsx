import usePageMeta from '../components/usePageMeta.js';
import Reveal from '../components/Reveal.jsx';
import { PageHero, SectionHead, CTASection, SampleBadge, PhotoSlot } from '../components/Blocks.jsx';
import { useState } from 'react';
import LogoMarquee from '../components/LogoMarquee.jsx';
import { caseStudies, testimonials, clientLogos } from '../data/content.js';
import { photos, trainingPhotos, heroes } from '../data/images.js';

// Blueprint case study format: CHALLENGE > INTERVENTION > AUDIENCE > APPROACH > OUTCOME.
const steps = [
  ['challenge', 'Challenge'],
  ['intervention', 'Intervention'],
  ['audience', 'Audience'],
  ['approach', 'Approach'],
  ['outcome', 'Outcome / observed change'],
];

const WALL_STEP = 12;

export default function SuccessStories() {
  const [wallCount, setWallCount] = useState(WALL_STEP);
  const featured = new Set(photos.successGallery.map((p) => p.src));
  const wall = trainingPhotos.filter((p) => !featured.has(p.src));
  usePageMeta('Success Stories', 'Case studies, client outcomes and testimonials from 16Dimensions training programmes.');

  return (
    <>
      <PageHero image={heroes.success}
        eyebrow="Success stories"
        title="Proof that behaviour really can change"
        intro="Real challenges, practical interventions and feedback from the organisations and people we have worked with."
      />

      <section className="section">
        <div className="container stack">
          {caseStudies.map((c, i) => (
            <Reveal key={c.title} as="article" className="case-full" delay={(i % 2) * 60}>
              <div className="case-card__top">
                <span className="badge">{c.industry}</span>
                {c.sample && <SampleBadge />}
              </div>
              <h2>{c.title}</h2>
              <ol className="case-flow">
                {steps.map(([k, label]) => (
                  <li key={k}>
                    <span>{label}</span>
                    <p>{c[k]}</p>
                  </li>
                ))}
              </ol>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHead eyebrow="Testimonials" title="What participants say" center />
          <div className="grid grid--3">
            {testimonials.map((t, i) => (
              <figure key={i} className="quote">
                {t.sample && <SampleBadge />}
                <blockquote>{t.quote}</blockquote>
                {/* <figcaption>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </figcaption> */}
              </figure>
            ))}
          </div>
        </div>
      </section>

      {clientLogos.length > 0 && (
        <section className="section section--tight">
          <LogoMarquee logos={clientLogos} />
        </section>
      )}

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Programme snapshots" title="From the training room" />
          <div className="gallery">
            {photos.successGallery.map((p) => (
              <PhotoSlot key={p.src} src={p.src} alt={p.alt} />
            ))}
          </div>
          <ul className="photo-wall">
            {wall.slice(0, wallCount).map((p) => (
              <li key={p.src}>
                <img src={p.src} alt={p.alt} loading="lazy" decoding="async" />
              </li>
            ))}
          </ul>
          {wallCount < wall.length && (
            <div className="center-row">
              <button type="button" className="btn btn--secondary" onClick={() => setWallCount((c) => c + WALL_STEP * 2)}>
                Show more photos ({wall.length - wallCount} more)
              </button>
            </div>
          )}
        </div>
      </section>

      <CTASection
        title="Want results like these for your team?"
        text="Tell us about your challenge and we'll design a programme around the change you want to see."
        primary={{ to: '/contact?enquiry=proposal', label: 'Request a customised proposal' }}
      />
    </>
  );
}
