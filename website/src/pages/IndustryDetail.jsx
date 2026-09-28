import { Link, useParams } from 'react-router-dom';
import usePageMeta from '../components/usePageMeta.js';
import Reveal from '../components/Reveal.jsx';
import { PageHero, CTASection, ButtonLink, Checklist, PhotoSlot, SampleBadge } from '../components/Blocks.jsx';
import { getIndustry, industries } from '../data/industries.js';
import { caseStudies } from '../data/content.js';
import { industryPhotos } from '../data/images.js';
import NotFound from './NotFound.jsx';

export default function IndustryDetail() {
  const { slug } = useParams();
  const ind = getIndustry(slug);
  usePageMeta(ind && `${ind.title} Training`, ind ? `${ind.keyword} — ${ind.focus.join(', ')}.` : undefined);

  if (!ind) return <NotFound />;

  const photo = industryPhotos[ind.slug];
  const cases = caseStudies.filter((c) => c.industry.toLowerCase().includes(ind.title.split(' ')[0].toLowerCase()));

  return (
    <>
      <PageHero image={photo?.src} eyebrow="Industry solutions" title={`${ind.title} training`} intro={ind.intro}>
        <ButtonLink to="/contact">Talk to us about {ind.title.toLowerCase()} training</ButtonLink>
      </PageHero>

      <section className="section">
        <div className="container split split--top">
          <Reveal className="split__copy">
            <h2>Challenges we often solve</h2>
            <Checklist items={ind.challenges} />
            <h2 className="mt">Where we focus</h2>
            <ul className="pills pills--lg">
              {ind.focus.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={100}>
            <PhotoSlot label={`${ind.title} training photograph`} src={photo?.src} alt={photo?.alt} ratio="4 / 5" />
          </Reveal>
        </div>
      </section>

      {cases.length > 0 && (
        <section className="section section--tint">
          <div className="container">
            <h2>Success story</h2>
            {cases.map((c) => (
              <article key={c.title} className="case-full">
                <div className="case-card__top">
                  <h3>{c.title}</h3>
                  {c.sample && <SampleBadge />}
                </div>
                <p><strong>Challenge:</strong> {c.challenge}</p>
                <p><strong>Outcome:</strong> {c.outcome}</p>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="section section--tight">
        <div className="container">
          <p className="eyebrow">Other industries</p>
          <ul className="inline-links">
            {industries
              .filter((o) => o.slug !== ind.slug)
              .map((o) => (
                <li key={o.slug}>
                  <Link to={`/industries/${o.slug}`}>{o.title}</Link>
                </li>
              ))}
          </ul>
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
