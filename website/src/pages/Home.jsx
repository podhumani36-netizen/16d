import { Link } from 'react-router-dom';
import usePageMeta from '../components/usePageMeta.js';
import Reveal from '../components/Reveal.jsx';
import { ButtonLink, SectionHead, CTASection, PhotoSlot, SampleBadge } from '../components/Blocks.jsx';
import { site, profileLink } from '../data/site.js';
import { solutions } from '../data/solutions.js';
import { industries } from '../data/industries.js';
import { painPoints, methodology, caseStudies, testimonials, clientLogos, insights } from '../data/content.js';
import { photos, kavitha, brand, heroes, industryPhotos } from '../data/images.js';
import LogoMarquee from '../components/LogoMarquee.jsx';
import CountUp from '../components/CountUp.jsx';
import SolutionIcon from '../components/SolutionIcon.jsx';

export default function Home() {
  usePageMeta(
    null,
    '16Dimensions — corporate training company in Chennai. Leadership, communication, customer experience, retail & hospitality training and PoSH & ICC services.'
  );

  return (
    <>
      {/* 1. Hero */}
      <section className="hero">
        <img className="hero__swirl" src={brand.mark} alt="" aria-hidden="true" />
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="hero__eyebrow">
              <span className="hero__dot" aria-hidden="true" />
              {site.tagline}
            </p>
            <h1 className="hero__title">
              We don't just train people. <span className="hero__accent">We transform behaviour</span> that drives performance.
            </h1>
            <p className="hero__lead">
              Practical, customised programmes that help managers lead, teams collaborate and frontline staff deliver
              — for organisations across India.
            </p>
            <ul className="hero__chips">
              <li>Corporate Training</li>
              <li>Leadership Development</li>
              <li>Retail &amp; Hospitality</li>
              <li>PoSH &amp; ICC Services</li>
            </ul>
            <div className="btn-row">
              <ButtonLink to="/contact">Discuss your training needs</ButtonLink>
              <ButtonLink to={profileLink()} variant="ghost-light">Download corporate profile</ButtonLink>
            </div>
            <dl className="hero__stats">
              <div>
                <dt>Years of experience</dt>
                <dd><CountUp value={site.stats[0].value} /></dd>
              </div>
              <div>
                <dt>People trained</dt>
                <dd><CountUp value={site.stats[1].value} /></dd>
              </div>
              <div>
                <dt>Organisations served</dt>
                <dd><CountUp value="40+" /></dd>
              </div>
            </dl>
          </div>

          <div className="hero__visual">
            <span className="hero__ring" aria-hidden="true" />
            <img
              className="hero__person"
              src={kavitha.cutout}
              alt="Kavitha Sasi, founder of 16Dimensions"
              width="720"
              height="1187"
              fetchpriority="high"
            />
            {/* <figure className="hero__card hero__card--session">
              <img src={photos.heroSession.src} alt={photos.heroSession.alt} />
              <figcaption>Live, interactive workshops</figcaption>
            </figure> */}
            {/* <div className="hero__card hero__card--name">
              <strong>Kavitha Sasi</strong>
              <span>Founder &amp; Lead Trainer</span>
            </div> */}
          </div>
        </div>
      </section>

      {/* Client logos */}
      <section className="trust">
        <div className="container">
          <p className="trust__title">
            Trusted by <strong>40+ organisations</strong> across corporate, manufacturing, retail,
            hospitality and education
          </p>
        </div>
        <LogoMarquee logos={clientLogos} />
      </section>

      {/* 2. When should you call 16Dimensions? */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Business problems we solve"
            title="Sound familiar? That's where we come in."
            intro="We don't start with a catalogue of topics. We start with the performance problem holding your business back."
          />
          <ol className="problems">
            {painPoints.map((p, i) => (
              <Reveal as="li" key={p.title} delay={(i % 2) * 80}>
                <Link to={p.link} className="problem">
                  <span className="problem__num" aria-hidden="true">{String(i + 1).padStart(2, '0')}</span>
                  <div className="problem__body">
                    <h3>{p.title}</h3>
                    <p>{p.text}</p>
                  </div>
                  <span className="problem__arrow" aria-hidden="true">→</span>
                </Link>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* 3. Training solution categories */}
      <section className="section section--tint">
        <div className="container">
          <SectionHead
            eyebrow="Training solutions"
            title="Five solution families. Every programme customised."
            intro="Programmes grouped by the outcome they deliver — and every one tailored to your industry, your people and your goals."
          />
          <div className="bento">
            {solutions.map((s, i) => (
              <Reveal key={s.slug} className="bento__cell" delay={(i % 3) * 80}>
                <Link to={s.link || `/training-solutions/${s.slug}`} className="tile">
                  <span className="tile__icon" aria-hidden="true">
                    <SolutionIcon slug={s.slug} fallback={s.icon} />
                  </span>
                  <h3>{s.title}</h3>
                  <p>{s.summary}</p>
                  {i === 0 && (
                    <ul className="tile__topics">
                      {s.topics.slice(0, 4).map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  )}
                  <span className="tile__go" aria-hidden="true">→</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Industry solutions */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Industry solutions"
            title="Specialised for the way your industry works"
            intro="A shop floor, a hotel lobby and a boardroom call for different conversations. Our programmes speak the language of yours."
          />
          <div className="grid grid--3">
            {industries.map((ind, i) => (
              <Reveal key={ind.slug} delay={(i % 3) * 80}>
                <Link to={`/industries/${ind.slug}`} className="photo-card">
                  <img src={industryPhotos[ind.slug]?.src} alt="" loading="lazy" decoding="async" />
                  <div className="photo-card__body">
                    <h3>{ind.title}</h3>
                    <p>{ind.focus.slice(0, 3).join(' · ')}</p>
                    <span className="photo-card__more">Explore →</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Why 16Dimensions / credibility metrics */}
      <section className="section section--dark section--photo" style={{ '--bg-img': `url("${heroes.stats}")` }}>
        <div className="container">
          <SectionHead eyebrow="Why 16Dimensions" title="Experience you can see on the job" center />
          <div className="stats">
            {site.stats.map((s, i) => (
              <Reveal key={s.label} className="stat" delay={i * 80}>
                <strong>
                  <CountUp value={s.value} />
                </strong>
                <span>{s.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Methodology */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Our methodology"
            title="How we turn learning into behaviour change"
            intro="A proven six-step approach — from understanding your business need to measuring what actually changed."
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

      {/* 8. Featured case studies */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Success stories" title="Real challenges. Observable change." />
          <div className="grid grid--3">
            {caseStudies.slice(0, 3).map((c, i) => (
              <Reveal key={c.title} delay={i * 80}>
                <article className="case-card">
                  <div className="case-card__top">
                    <span className="badge">{c.industry}</span>
                    {c.sample && <SampleBadge />}
                  </div>
                  <h3>{c.title}</h3>
                  <p><strong>Challenge:</strong> {c.challenge}</p>
                  <p><strong>Outcome:</strong> {c.outcome}</p>
                </article>
              </Reveal>
            ))}
          </div>
          <div className="center-row">
            <ButtonLink to="/success-stories" variant="secondary">View all success stories</ButtonLink>
          </div>
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className="section section--tint">
        <div className="container">
          <SectionHead eyebrow="Testimonials" title="In their own words" center />
          <div className="grid grid--3">
            {testimonials.map((t, i) => (
              <Reveal key={i} delay={i * 80}>
                <figure className="quote">
                  {t.sample && <SampleBadge />}
                  <blockquote>{t.quote}</blockquote>
                  <figcaption>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Real training photographs */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="In the room"
            title="Real training, real people"
            intro="No stock photos — just moments from our programmes with teams across India."
          />
          <div className="gallery">
            {photos.homeGallery.map((p, i) => (
              <Reveal key={p.src} delay={(i % 3) * 60}>
                <PhotoSlot src={p.src} alt={p.alt} ratio={i === 0 ? '16 / 10' : '4 / 3'} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Meet the founder */}
      <section className="section section--tint">
        <div className="container split">
          <Reveal>
            <PhotoSlot src={kavitha.portrait} alt="Kavitha Sasi, founder of 16Dimensions" ratio="1 / 1" />
          </Reveal>
          <Reveal className="split__copy" delay={100}>
            <p className="eyebrow">Meet the founder</p>
            <h2>Kavitha Sasi</h2>
            <p className="lead">
              Founder of 16Dimensions and a corporate trainer with {site.stats[0].value} years of experience and{' '}
              {site.stats[1].value} people trained across corporate, manufacturing, retail, hospitality and education.
            </p>
            <p>
              Kavitha's programmes are practical, high-energy and grounded in the real situations people face at work — so participants leave with skills they can use the very next day.
            </p>
            <ButtonLink to="/about/kavitha-sasi" variant="secondary">Read Kavitha's profile</ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* 12. Latest insights */}
      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Insights" title="Practical ideas for people leaders" intro="Short, useful reads on leadership, communication, service and workplace culture." />
          <div className="grid grid--3">
            {insights.slice(0, 3).map((a, i) => (
              <Reveal key={a.title} delay={i * 80}>
                <Link to="/insights" className="post">
                  {a.image && <img className="post__img" src={a.image} alt="" loading="lazy" />}
                  <span className="badge">{a.category}</span>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Final enquiry CTA */}
      <CTASection
        title="Let's solve your people-performance challenge."
        text="Tell us what's holding your teams back. We'll come back with a practical, customised plan — usually within one working day."
      />
    </>
  );
}
