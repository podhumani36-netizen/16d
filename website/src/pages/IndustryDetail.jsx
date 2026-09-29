import { Link, useParams } from 'react-router-dom';
import usePageMeta from '../components/usePageMeta.js';
import Reveal from '../components/Reveal.jsx';
import { PageHero, CTASection, ButtonLink, Checklist, PhotoSlot, SampleBadge, SectionHead } from '../components/Blocks.jsx';
import { getIndustry, industries } from '../data/industries.js';
import { getSolution } from '../data/solutions.js';
import { findArticle } from '../data/articles.js';
import { caseStudies, clientLogos, methodology } from '../data/content.js';
import { industryPhotos } from '../data/images.js';
import NotFound from './NotFound.jsx';

export default function IndustryDetail() {
  const { slug } = useParams();
  const ind = getIndustry(slug);
  usePageMeta(
    ind ? `${ind.title} Training` : 'Page not found',
    ind ? `${ind.keyword} — ${ind.focus.join(', ')}.` : undefined,
    { noindex: !ind, image: ind && industryPhotos[ind.slug]?.src }
  );

  if (!ind) return <NotFound />;

  const photo = industryPhotos[ind.slug];
  const cases = caseStudies.filter((c) => c.industry.toLowerCase().includes(ind.title.split(' ')[0].toLowerCase()));
  const solutions = (ind.solutions || []).map(getSolution).filter(Boolean);
  const clients = (ind.clients || []).map((name) => clientLogos.find((l) => l.name === name)).filter(Boolean);
  const article = ind.article && findArticle(ind.article);
  const others = industries.filter((o) => o.slug !== ind.slug);

  return (
    <>
      <PageHero image={photo?.src} eyebrow="Industry solutions" title={`${ind.title} training`} intro={ind.intro}>
        <ButtonLink to="/contact">Talk to us about {ind.title.toLowerCase()} training</ButtonLink>
        {ind.programmes && <ButtonLink to="#programmes" variant="secondary">See the programmes</ButtonLink>}
      </PageHero>

      {/* Why it matters + challenges */}
      <section className="section">
        <div className="container split split--top">
          <Reveal className="split__copy">
            <p className="eyebrow">Why it matters</p>
            <h2>People performance in {ind.title.toLowerCase()}</h2>
            {(ind.overview || []).map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </Reveal>
          <Reveal className="card card--accent" delay={100}>
            <h3>Challenges we often solve</h3>
            <Checklist items={ind.challenges} />
          </Reveal>
        </div>
      </section>

      {/* Programmes */}
      {ind.programmes && (
        <section className="section section--tint" id="programmes">
          <div className="container">
            <SectionHead
              eyebrow="Programmes"
              title={`Training programmes for ${ind.title.toLowerCase()} teams`}
              intro="Choose one, or combine several into a programme designed around your people and your goals."
            />
            <div className="grid grid--3">
              {ind.programmes.map((p, i) => (
                <Reveal key={p.title} className="card programme" delay={(i % 3) * 80}>
                  <span className="programme__num">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Who we train + focus */}
      <section className="section">
        <div className="container split split--top">
          <Reveal className="split__copy">
            {ind.roles && (
              <>
                <p className="eyebrow">Who we train</p>
                <h2>Built for every level of your team</h2>
                <ul className="pills pills--lg">
                  {ind.roles.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </>
            )}
            <h3 className="h-sm mt">Where we focus</h3>
            <ul className="pills">
              {ind.focus.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            {solutions.length > 0 && (
              <>
                <h3 className="h-sm mt">Related training solutions</h3>
                <ul className="related__list">
                  {solutions.map((s) => (
                    <li key={s.slug}>
                      <Link to={s.link || `/training-solutions/${s.slug}`}>
                        <strong>{s.title}</strong>
                        <span>{s.summary}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </Reveal>
          <Reveal delay={100}>
            <PhotoSlot label={`${ind.title} training photograph`} src={photo?.src} alt={photo?.alt} ratio="4 / 5" />
          </Reveal>
        </div>
      </section>

      {/* Clients */}
      {clients.length > 0 && (
        <section className="section section--tint section--tight">
          <div className="container">
            <p className="logos__title">Trusted by {ind.title.toLowerCase()} organisations including</p>
            <ul className="logos">
              {clients.map((c) => (
                <li key={c.src}>
                  <img src={c.src} alt={c.name} loading="lazy" />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {cases.length > 0 && (
        <section className="section">
          <div className="container">
            <h2>Success story</h2>
            {cases.map((c) => (
              <article key={c.title} className="case-full">
                <div className="case-card__top">
                  <h3>{c.title}</h3>
                  {c.sample && <SampleBadge />}
                </div>
                <p><strong>Challenge:</strong> {c.challenge}</p>
                <p><strong>Approach:</strong> {c.approach}</p>
                <p><strong>Outcome:</strong> {c.outcome}</p>
              </article>
            ))}
          </div>
        </section>
      )}

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
      {ind.faqs && (
        <section className="section">
          <div className="container faq-split">
            <Reveal className="faq-split__intro">
              <p className="eyebrow">FAQs</p>
              <h2>Questions about {ind.title.toLowerCase()} training</h2>
              <p className="lead">Something else you'd like to know? We're happy to talk it through.</p>
              <ButtonLink to="/contact" variant="secondary">Ask a question</ButtonLink>
            </Reveal>
            <div className="faq-split__list">
              {ind.faqs.map((f, i) => (
                <details key={f.q} className="faq" open={i === 0}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related reading and other industries */}
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
            <p className="eyebrow">Other industries</p>
            <ul className="related__list">
              {others.map((o) => (
                <li key={o.slug}>
                  <Link to={`/industries/${o.slug}`}>
                    <strong>{o.title}</strong>
                    <span>{o.intro}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CTASection
        title={`Build stronger ${ind.title.toLowerCase()} teams`}
        text="Share your challenge and we'll propose a programme designed around your people and your context."
        primary={{ to: '/contact?enquiry=proposal', label: 'Request a customised proposal' }}
        whatsappText={`Hi 16Dimensions, I'd like to discuss training for our ${ind.title} team.`}
      />
    </>
  );
}
