import { Link } from 'react-router-dom';
import usePageMeta from '../components/usePageMeta.js';
import Reveal from '../components/Reveal.jsx';
import { PageHero, CTASection } from '../components/Blocks.jsx';
import { industries } from '../data/industries.js';
import { heroes, industryPhotos } from '../data/images.js';

export default function Industries() {
  usePageMeta(
    'Industry Solutions',
    'Training for corporate, manufacturing, retail / QSR, hospitality, education and healthcare / services organisations in Chennai and across India.'
  );

  return (
    <>
      <PageHero image={heroes.industries}
        eyebrow="Industry solutions"
        title="Training built for how your industry works"
        intro="The challenges on a shop floor are very different from those in a hotel lobby or a boardroom. Every programme we deliver is designed around your context."
      />
      <section className="section">
        <div className="container grid grid--2">
          {industries.map((ind, i) => (
            <Reveal key={ind.slug} delay={(i % 2) * 80}>
              <Link to={`/industries/${ind.slug}`} className="post post--lg">
                {industryPhotos[ind.slug] && (
                  <img className="post__img" src={industryPhotos[ind.slug].src} alt="" loading="lazy" decoding="async" />
                )}
                <h2>{ind.title}</h2>
                <p>{ind.intro}</p>
                <ul className="pills">
                  {ind.focus.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <span className="post__more">View {ind.title} solutions →</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <CTASection
        title="Don't see your industry?"
        text="We design customised programmes for many other sectors too. Tell us about your organisation and we'll show you how we can help."
      />
    </>
  );
}
