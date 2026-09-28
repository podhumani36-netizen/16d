import { useEffect, useState } from 'react';
import usePageMeta from '../components/usePageMeta.js';
import Reveal from '../components/Reveal.jsx';
import { PageHero, CTASection, ButtonLink, Checklist, SectionHead } from '../components/Blocks.jsx';
import { solutions } from '../data/solutions.js';
import { methodology } from '../data/content.js';
import { heroes, solutionPhotos } from '../data/images.js';
import SolutionIcon from '../components/SolutionIcon.jsx';

// Highlights the family currently in the middle of the screen in the sticky nav.
function useActiveFamily() {
  const [active, setActive] = useState(solutions[0].slug);
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    solutions.forEach((s) => {
      const el = document.getElementById(s.slug);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);
  return active;
}

export default function Solutions() {
  usePageMeta(
    'Training Solutions',
    'Leadership training for managers, communication skills training for employees, customer service and sales training, workplace effectiveness and PoSH training.'
  );
  const active = useActiveFamily();
  const programmeCount = solutions.reduce((n, s) => n + s.topics.length, 0);

  return (
    <>
      <PageHero image={heroes.solutions}
        eyebrow="Training solutions"
        title="Programmes built around the outcomes you need"
        intro="Explore our five solution families and the programmes inside each one. Every programme is tailored to your industry, your audience and your business goals."
      >
        <ButtonLink to="/contact?enquiry=proposal">Request a customised proposal</ButtonLink>
        <ButtonLink to={`#${solutions[0].slug}`} variant="secondary">Explore the families</ButtonLink>
      </PageHero>

      <div className="family-summary">
        <div className="container family-summary__inner">
          <p>
            <strong>{solutions.length}</strong> solution families
          </p>
          <p>
            <strong>{programmeCount}</strong> programmes
          </p>
          <p>
            <strong>100%</strong> customised to your context
          </p>
        </div>
      </div>

      <nav className="family-nav" aria-label="Solution families">
        <div className="container">
          <ul>
            {solutions.map((s) => (
              <li key={s.slug}>
                <a href={`#${s.slug}`} className={active === s.slug ? 'is-active' : undefined}>
                  <SolutionIcon slug={s.slug} fallback={s.icon} />
                  <span>{s.title.split(' & ')[0]}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {solutions.map((s, i) => {
        const photo = solutionPhotos[s.slug];
        const detail = s.link || `/training-solutions/${s.slug}`;
        const num = String(i + 1).padStart(2, '0');
        return (
          <section key={s.slug} id={s.slug} className={`family ${i % 2 ? 'family--flip' : ''}`}>
            <div className="container family__grid">
              <Reveal className="family__media">
                {photo && <img src={photo.src} alt={photo.alt} loading={i === 0 ? 'eager' : 'lazy'} decoding="async" />}
                <span className="family__num" aria-hidden="true">{num}</span>
                <div className="family__badge">
                  <strong>{s.topics.length}</strong>
                  <span>programmes</span>
                </div>
              </Reveal>

              <Reveal className="family__copy" delay={100}>
                <p className="eyebrow">Solution family {num}</p>
                <div className="family__title">
                  <span className="family__icon" aria-hidden="true">
                    <SolutionIcon slug={s.slug} fallback={s.icon} />
                  </span>
                  <h2>{s.title}</h2>
                </div>
                <p className="lead">{s.summary}</p>

                <h3 className="family__label">Programmes inside</h3>
                <ul className="pills family__pills">
                  {s.topics.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>

                <div className="family__outcomes">
                  <h3 className="family__label">What changes after the programme</h3>
                  <Checklist items={s.outcomes} />
                </div>

                <p className="family__for">
                  <span>Who it's for</span>
                  {s.audience}
                </p>

                <div className="btn-row">
                  <ButtonLink to={detail}>View programme details</ButtonLink>
                  <ButtonLink to="/contact" variant="secondary">{s.cta}</ButtonLink>
                </div>
              </Reveal>
            </div>
          </section>
        );
      })}

      <section className="section section--tint">
        <div className="container">
          <SectionHead
            eyebrow="How we deliver"
            title="Every programme follows the same six steps"
            intro="Whichever family you choose, we start from your business need and finish by measuring what changed."
          />
          <ol className="method">
            {methodology.map((m, i) => (
              <Reveal as="li" key={m.step} className="method__step" delay={i * 60}>
                <span className="method__num">{m.step}</span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <CTASection
        title="Not sure which programme fits?"
        text="Describe the challenge you are facing and we'll recommend the right mix of programmes for your team."
        primary={{ to: '/contact?enquiry=proposal', label: 'Request a customised proposal' }}
      />
    </>
  );
}
