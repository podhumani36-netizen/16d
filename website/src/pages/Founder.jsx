import usePageMeta from '../components/usePageMeta.js';
import Reveal from '../components/Reveal.jsx';
import { PageHero, CTASection, PhotoSlot, Checklist, SectionHead } from '../components/Blocks.jsx';
import { photos, kavitha, events, heroes } from '../data/images.js';
import { site } from '../data/site.js';
import { industries } from '../data/industries.js';

// TODO: add Kavitha's certifications, qualifications and memberships once confirmed.
// The "Certifications" heading stays hidden while this list is empty.
const credentials = [];

// Taken from the event invitations and posters in public/images/events.
const speaking = [
  'Guest lectures at Loyola College, College of Engineering Guindy, PERI Institute of Technology and Chennai National Arts & Science College',
  'Panelist at the Y20 Talk event, Sairam Engineering College',
  'Chief guest at Elixir, Guru Nanak College School of Management',
  '#makingHERwin at MEASI Institute of Management and Naari Shakthi at BVM Global School',
  'Soft skills programme for the Govt. College for Women, Kumbakonam',
  '"Training = Profit" at a Rotary speaker meet',
  'Workshops for schools and parents at Velammal Vidyalaya and Cee Dee Yes Public School',
];

const linkedin = 'https://www.linkedin.com/in/kavithasasik/';

export default function Founder() {
  usePageMeta(
    'About Kavitha Sasi',
    `Kavitha Sasi, founder of 16Dimensions — corporate trainer with ${site.stats[0].value} years of experience and ${site.stats[1].value} people trained.`
  );

  return (
    <>
      <PageHero image={heroes.founder} eyebrow="Founder" title="Kavitha Sasi" intro="Founder, 16Dimensions · Corporate Trainer · PoSH Consultant" />

      <section className="section">
        <div className="container split split--top">
          <Reveal>
            <PhotoSlot src={kavitha.laptop} alt="Kavitha Sasi, founder of 16Dimensions" ratio="4 / 5" eager />
          </Reveal>
          <Reveal className="split__copy" delay={100}>
            <h2>Transforming how people work</h2>
            <p className="lead">
              {site.stats[0].value} years of training experience and {site.stats[1].value} people trained.
            </p>
            <p>
              {/* TODO: replace with Kavitha's approved biography. */}
              Kavitha founded 16Dimensions with a simple belief: training only matters if behaviour changes. Her sessions blend
              practical frameworks with role plays, open discussion and real workplace scenarios, so participants walk out with
              clear actions they can apply immediately.
            </p>

            <h3 className="h-sm">Industry exposure</h3>
            <p className="tags">{industries.map((i) => i.title).join(' · ')}</p>

            {credentials.length > 0 && (
              <>
                <h3 className="h-sm">Certifications</h3>
                <Checklist items={credentials} />
              </>
            )}

            <h3 className="h-sm">Speaking &amp; facilitation</h3>
            <Checklist items={speaking} />

            <p>
              <a href={linkedin} target="_blank" rel="noopener noreferrer">Connect with Kavitha on LinkedIn →</a>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container gallery">
          {photos.founderGallery.map((p, i) => (
            <Reveal key={p.src} delay={i * 60}>
              <PhotoSlot src={p.src} alt={p.alt} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionHead eyebrow="Speaking engagements" title="Guest lectures, panels and keynotes" />
          <ul className="posters">
            {events.map((e) => (
              <li key={e.src}>
                <img src={e.src} alt={e.title} loading="lazy" decoding="async" />
                <span>{e.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CTASection
        title="Invite Kavitha to work with your team"
        text="For training programmes, keynotes, guest lectures and facilitation — share your requirement and we'll get back to you promptly."
        primary={{ to: '/contact', label: 'Talk to us about training' }}
      />
    </>
  );
}
