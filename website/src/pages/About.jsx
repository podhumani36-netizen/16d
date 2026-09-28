import usePageMeta from '../components/usePageMeta.js';
import Reveal from '../components/Reveal.jsx';
import { PageHero, SectionHead, CTASection, PhotoSlot, ButtonLink } from '../components/Blocks.jsx';
import { photos, heroes } from '../data/images.js';
import { methodology } from '../data/content.js';
import { site } from '../data/site.js';

export default function About() {
  usePageMeta(
    'About 16Dimensions',
    'The story, philosophy and methodology behind 16Dimensions — a behavioural training and people-performance solutions company in Chennai.'
  );

  return (
    <>
      <PageHero image={heroes.about}
        eyebrow="About 16Dimensions"
        title="A people-performance partner, not just a training calendar"
        intro="16Dimensions helps organisations change the everyday behaviours that decide performance — how managers lead, how teams collaborate and how customers are served."
      />

      <section className="section">
        <div className="container split">
          <Reveal className="split__copy">
            <p className="eyebrow">Our story</p>
            <h2>Why 16Dimensions exists</h2>
            {/* TODO: replace with the approved company description (blueprint checklist). */}
            <p>
              Too much training is enjoyable on the day and forgotten by Monday. 16Dimensions was founded to close that gap —
              by designing every programme around a real business problem, and by measuring success in what people do
              differently back at work.
            </p>
            <p>
              Over {site.stats[0].value} years and {site.stats[1].value} participants, we have partnered
              with corporate teams, manufacturing plants, retail and QSR chains, hotels, educational institutions and service
              organisations — helping each one turn learning into lasting performance.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <PhotoSlot src={photos.aboutTeam.src} alt={photos.aboutTeam.alt} ratio="4 / 3" />
          </Reveal>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <SectionHead eyebrow="Our philosophy" title="We don't train people. We transform behaviour that drives performance." />
          <div className="grid grid--3">
            {[
              ['Business first', 'Every programme begins with a real performance challenge your organisation is facing.'],
              ['Behaviour over theory', 'Role plays, real scenarios and deliberate practice — so skills show up on the job, not just in the room.'],
              ['Measured change', 'We agree success indicators up front and follow up on what changed after the programme.'],
            ].map(([t, d], i) => (
              <Reveal key={t} className="numbered" delay={i * 80}>
                <span className="numbered__n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Methodology" title="Our transformation approach" />
          <ol className="method">
            {methodology.map((m, i) => (
              <Reveal as="li" key={m.step} className="method__step" delay={i * 60}>
                <span className="method__num">{m.step}</span>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
              </Reveal>
            ))}
          </ol>
          <div className="center-row">
            <ButtonLink to="/about/kavitha-sasi" variant="secondary">Meet the founder, Kavitha Sasi</ButtonLink>
          </div>
        </div>
      </section>

      <CTASection
        title="Let's talk about your people-performance goals"
        text="Share where your teams are today and where you need them to be. We'll design the path in between."
        primary={{ to: '/contact?enquiry=proposal', label: 'Request a customised proposal' }}
      />
    </>
  );
}
