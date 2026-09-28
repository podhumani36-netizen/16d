import { Link, useParams } from 'react-router-dom';
import usePageMeta from '../components/usePageMeta.js';
import Reveal from '../components/Reveal.jsx';
import { PageHero, CTASection, ButtonLink, Checklist, SectionHead } from '../components/Blocks.jsx';
import { getSolution, solutions } from '../data/solutions.js';
import { methodology } from '../data/content.js';
import NotFound from './NotFound.jsx';
import { heroes } from '../data/images.js';

export default function SolutionDetail() {
  const { slug } = useParams();
  const s = getSolution(slug);
  usePageMeta(s?.title, s ? `${s.title} training by 16Dimensions: ${s.topics.join(', ')}.` : undefined);

  if (!s) return <NotFound />;

  return (
    <>
      <PageHero image={heroes.solutionDetail} eyebrow="Training solution" title={s.title} intro={s.summary}>
        <ButtonLink to="/contact">{s.cta}</ButtonLink>
      </PageHero>

      <section className="section">
        <div className="container split split--top">
          <Reveal className="split__copy">
            <h2>Programmes in this family</h2>
            <ul className="pills pills--lg">
              {s.topics.map((t) => (
                <li key={t}>{t}</li>
              ))}
            </ul>
            <h3 className="h-sm">Who it is for</h3>
            <p>{s.audience}</p>
          </Reveal>
          <Reveal className="card card--accent" delay={100}>
            <h3>What changes after the programme</h3>
            <Checklist items={s.outcomes} />
          </Reveal>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHead title="How we deliver it" intro="Every programme follows the proven 16Dimensions six-step methodology." />
          <ol className="method method--compact">
            {methodology.map((m) => (
              <li key={m.step} className="method__step">
                <span className="method__num">{m.step}</span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <p className="eyebrow">Other solutions</p>
          <ul className="inline-links">
            {solutions
              .filter((o) => o.slug !== s.slug)
              .map((o) => (
                <li key={o.slug}>
                  <Link to={o.link || `/training-solutions/${o.slug}`}>{o.title}</Link>
                </li>
              ))}
          </ul>
        </div>
      </section>

      <CTASection
        title={`${s.cta}`}
        text={`Tell us about your team and the change you want to see. We'll design a ${s.title.toLowerCase()} programme around it.`}
        whatsappText={`Hi 16Dimensions, I'd like to know more about ${s.title} training.`}
      />
    </>
  );
}
