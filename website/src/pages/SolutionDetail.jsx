import { Link, useParams } from 'react-router-dom';
import usePageMeta from '../components/usePageMeta.js';
import Reveal from '../components/Reveal.jsx';
import { PageHero, CTASection, ButtonLink, Checklist, SectionHead } from '../components/Blocks.jsx';
import { getSolution, solutions } from '../data/solutions.js';
import { getIndustry } from '../data/industries.js';
import { findArticle } from '../data/articles.js';
import { methodology } from '../data/content.js';
import NotFound from './NotFound.jsx';
import { heroes } from '../data/images.js';

export default function SolutionDetail() {
  const { slug } = useParams();
  const s = getSolution(slug);
  usePageMeta(
    s ? `${s.title} Training` : 'Page not found',
    s ? `${s.keyword ? `${s.keyword}. ` : ''}${s.summary} Programmes: ${s.topics.join(', ')}.` : undefined,
    { noindex: !s }
  );

  if (!s) return <NotFound />;

  const industries = (s.industries || []).map(getIndustry).filter(Boolean);
  const article = s.article && findArticle(s.article);
  const others = solutions.filter((o) => o.slug !== s.slug);

  return (
    <>
      <PageHero image={heroes.solutionDetail} eyebrow="Training solution" title={s.title} intro={s.summary}>
        <ButtonLink to="/contact">{s.cta}</ButtonLink>
        <ButtonLink to="#programmes" variant="secondary">See the programmes</ButtonLink>
      </PageHero>

      {/* Why it matters */}
      {s.overview && (
        <section className="section">
          <div className="container split split--top">
            <Reveal className="split__copy">
              <p className="eyebrow">Why it matters</p>
              <h2>The behaviours behind {s.title.toLowerCase()}</h2>
              {s.overview.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </Reveal>
            {s.signs && (
              <Reveal className="card card--accent" delay={100}>
                <h3>Signs your team needs this</h3>
                <Checklist items={s.signs} />
              </Reveal>
            )}
          </div>
        </section>
      )}

      {/* Programmes */}
      <section className="section section--tint" id="programmes">
        <div className="container">
          <SectionHead
            eyebrow="Programmes"
            title={`${s.programmes.length} programmes in this family`}
            intro="Choose one, or combine several into a programme designed around your people and your goals."
          />
          <div className="grid grid--3">
            {s.programmes.map((p, i) => (
              <Reveal key={p.title} className="card programme" delay={(i % 3) * 80}>
                <span className="programme__num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.title}</h3>
                {p.text && <p>{p.text}</p>}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Audience and outcomes */}
      <section className="section">
        <div className="container split split--top">
          <Reveal className="split__copy">
            <p className="eyebrow">Who it is for</p>
            <h2>Built for your people</h2>
            <p className="lead">{s.audience}</p>
            {industries.length > 0 && (
              <>
                <h3 className="h-sm">Most requested by</h3>
                <ul className="inline-links">
                  {industries.map((ind) => (
                    <li key={ind.slug}>
                      <Link to={`/industries/${ind.slug}`}>{ind.title} training</Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </Reveal>
          <Reveal className="card card--accent" delay={100}>
            <h3>What changes after the programme</h3>
            <Checklist items={s.outcomes} />
          </Reveal>
        </div>
      </section>

      {/* Method */}
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

      {/* FAQs */}
      {s.faqs && (
        <section className="section">
          <div className="container faq-split">
            <Reveal className="faq-split__intro">
              <p className="eyebrow">FAQs</p>
              <h2>Questions about {s.title.toLowerCase()} training</h2>
              <p className="lead">Something else you'd like to know? We're happy to talk it through.</p>
              <ButtonLink to="/contact" variant="secondary">Ask a question</ButtonLink>
            </Reveal>
            <div className="faq-split__list">
              {s.faqs.map((f, i) => (
                <details key={f.q} className="faq" open={i === 0}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related reading and other solutions */}
      <section className="section section--tint">
        <div className="container related">
          {article && (
            <Reveal>
              <p className="eyebrow">Related reading</p>
              <Link to={`/insights/${article.slug}`} className="post">
                <img className="post__img" src={article.image} alt="" loading="lazy" />
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <span className="post__more">Read article →</span>
              </Link>
            </Reveal>
          )}
          <Reveal delay={100}>
            <p className="eyebrow">Other training solutions</p>
            <ul className="related__list">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link to={o.link || `/training-solutions/${o.slug}`}>
                    <strong>{o.title}</strong>
                    <span>{o.summary}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CTASection
        title={s.cta}
        text={`Tell us about your team and the change you want to see. We'll design a ${s.title.toLowerCase()} programme around it.`}
        whatsappText={`Hi 16Dimensions, I'd like to know more about ${s.title} training.`}
      />
    </>
  );
}
