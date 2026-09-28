import usePageMeta from '../components/usePageMeta.js';
import Reveal from '../components/Reveal.jsx';
import { PageHero, SectionHead, CTASection, ButtonLink } from '../components/Blocks.jsx';
import { insights, leadMagnets } from '../data/content.js';
import { heroes } from '../data/images.js';

export default function Insights() {
  usePageMeta(
    'Insights',
    'Short articles, videos and practical tools on leadership, communication, customer service and respectful workplaces.'
  );

  return (
    <>
      <PageHero image={heroes.insights}
        eyebrow="Insights"
        title="Practical ideas for managers, HR and L&D"
        intro="Short articles, videos, tools and checklists you can put to work with your teams straight away."
      />

      <section className="section">
        <div className="container grid grid--3">
          {insights.map((a, i) => (
            <Reveal key={a.title} as="article" className="post" delay={(i % 3) * 80}>
              {a.image && <img className="post__img" src={a.image} alt="" loading="lazy" />}
              <div className="case-card__top">
                <span className="badge">{a.category}</span>
                {!a.image && <span className="badge badge--muted">Coming soon</span>}
              </div>
              <h3>{a.title}</h3>
              <p>{a.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHead eyebrow="Free tools" title="Download a practical checklist" />
          <div className="grid grid--3">
            {leadMagnets.map((l) => (
              <div key={l.title} className="card card--download">
                <h3>{l.title}</h3>
                <ButtonLink to={l.file || '/contact?enquiry=checklist'} variant="secondary">
                  {l.file ? 'Download' : 'Request a copy'}
                </ButtonLink>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
