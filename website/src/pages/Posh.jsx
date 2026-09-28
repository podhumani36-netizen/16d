import usePageMeta from '../components/usePageMeta.js';
import Reveal from '../components/Reveal.jsx';
import { PageHero, SectionHead, CTASection, ButtonLink } from '../components/Blocks.jsx';
import { poshServices, leadMagnets } from '../data/content.js';
import { heroes, photos } from '../data/images.js';

const faqs = [
  {
    q: 'Who needs to comply with the PoSH Act?',
    a: 'Every organisation in India with 10 or more employees must constitute an Internal Committee (IC/ICC) and meet the requirements of the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013.',
  },
  {
    q: 'Why do we need an external ICC member?',
    a: 'The Act requires one member of the Internal Committee to be from an NGO or association committed to women’s causes, or a person familiar with issues relating to sexual harassment. 16Dimensions can support you in this role.',
  },
  {
    q: 'How often should PoSH training be conducted?',
    a: 'Awareness programmes and ICC capability building should be conducted regularly, and details reported in the annual report. Many organisations run them yearly and at induction.',
  },
];

// Key requirements of the Act, summarised from the FAQs above.
const facts = [
  { value: '2013', label: 'Year the PoSH Act came into force' },
  { value: '10+', label: 'Employees — an Internal Committee is mandatory' },
  { value: '1', label: 'External member required on every ICC' },
  { value: 'Annual', label: 'Reporting of cases and awareness programmes' },
];

const audiences = [
  { title: 'Employees', text: 'Know what harassment is, their rights, and how to raise a concern safely.' },
  { title: 'Managers & supervisors', text: 'Spot issues early, respond correctly and model respectful behaviour.' },
  { title: 'ICC members', text: 'Run a fair, timely inquiry with confidence — from complaint to report.' },
  { title: 'HR teams', text: 'Stay compliant all year with reporting, refreshers and communication.' },
];

// Line icons for the six services, in the same order as poshServices.
const serviceIcons = [
  // group of people: employee awareness
  <>
    <circle cx="9" cy="8" r="3" />
    <path d="M3 20v-1a6 6 0 0 1 12 0v1" />
    <path d="M16 5.5a3 3 0 0 1 0 5.5M21 20v-1a6 6 0 0 0-3.5-5.4" />
  </>,
  // person with badge: manager sensitisation
  <>
    <circle cx="12" cy="7" r="4" />
    <path d="M4 21v-1a8 8 0 0 1 16 0v1" />
    <path d="M12 14l1.5 3-1.5 2-1.5-2z" />
  </>,
  // graduation cap: ICC capability building
  <>
    <path d="M2 9l10-5 10 5-10 5z" />
    <path d="M6 11v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5" />
    <path d="M22 9v6" />
  </>,
  // shield with person: external ICC member
  <>
    <path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6l8-3z" />
    <circle cx="12" cy="10" r="2.2" />
    <path d="M8.5 16a4 4 0 0 1 7 0" />
  </>,
  // document: inquiry process and documentation
  <>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z" />
    <path d="M14 3v5h5M9 13h6M9 17h4" />
  </>,
  // calendar with tick: periodic compliance
  <>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4M16 3v4" />
    <path d="M9 15.5l2 2 4-4" />
  </>,
];

function Icon({ children }) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {children}
    </svg>
  );
}

export default function Posh() {
  usePageMeta(
    'PoSH Training & ICC Support',
    'PoSH training company in Chennai — employee awareness, manager sensitisation, ICC capability building and external ICC member support.'
  );
  const checklist = leadMagnets.find((l) => l.title.startsWith('PoSH'));
  const checklistLink = checklist?.file || '/contact?enquiry=checklist';
  const sidePhoto = photos.founderGallery[0];

  return (
    <>
      <PageHero image={heroes.posh}
        eyebrow="PoSH & ICC Services"
        title="PoSH Training & ICC Support"
        intro="Build a safe, respectful workplace and meet every obligation under the PoSH Act — with practical training and experienced ICC support."
      >
        <ButtonLink to="/contact?enquiry=posh">Speak to a PoSH consultant</ButtonLink>
        <ButtonLink to={checklistLink} variant="secondary">
          Get the PoSH checklist
        </ButtonLink>
      </PageHero>

      {/* Key requirements of the Act */}
      <section className="posh-facts">
        <div className="container">
          <ul className="posh-facts__list">
            {facts.map((f, i) => (
              <Reveal as="li" key={f.label} delay={i * 80}>
                <strong>{f.value}</strong>
                <span>{f.label}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Services: sticky intro on the left, services on the right */}
      <section className="section">
        <div className="container posh-services">
          <div className="posh-services__intro">
            <Reveal>
              <p className="eyebrow">Services</p>
              <h2>End-to-end PoSH support</h2>
              <p className="lead">
                From the first awareness session to your annual report, we help you build a workplace where
                people feel safe to speak up — and a committee that knows exactly what to do.
              </p>
              {sidePhoto && <img className="posh-services__photo" src={sidePhoto.src} alt={sidePhoto.alt} loading="lazy" decoding="async" />}
            </Reveal>
          </div>
          <ol className="posh-services__list">
            {poshServices.map((s, i) => (
              <Reveal as="li" key={s.title} className="posh-service" delay={(i % 2) * 80}>
                <span className="posh-service__icon">
                  <Icon>{serviceIcons[i]}</Icon>
                </span>
                <div>
                  <span className="posh-service__n">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Who we train */}
      <section className="section section--dark posh-audience">
        <div className="container">
          <SectionHead eyebrow="Who we work with" title="Everyone plays a part in a respectful workplace" center />
          <div className="posh-audience__grid">
            {audiences.map((a, i) => (
              <Reveal key={a.title} className="posh-audience__item" delay={i * 80}>
                <span className="posh-audience__n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist lead magnet */}
      <section className="section section--tight">
        <div className="container">
          <Reveal className="posh-checklist">
            <div className="posh-checklist__icon" aria-hidden="true">
              <Icon>{serviceIcons[5]}</Icon>
            </div>
            <div className="posh-checklist__copy">
              <p className="eyebrow">Free resource</p>
              <h2>Is your organisation PoSH-ready?</h2>
              <p>Get our PoSH compliance checklist and see where your policy, committee and training stand today.</p>
            </div>
            <ButtonLink to={checklistLink} variant="primary">
              {checklist?.file ? 'Download the checklist' : 'Get the free checklist'}
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="section section--tint">
        <div className="container posh-faq">
          <Reveal className="posh-faq__intro">
            <p className="eyebrow">FAQs</p>
            <h2>Common questions from HR teams</h2>
            <p className="lead">Can't find your answer? Talk to us — we'll help you understand what applies to your organisation.</p>
            <ButtonLink to="/contact?enquiry=posh" variant="secondary">Ask a PoSH consultant</ButtonLink>
          </Reveal>
          <div className="posh-faq__list">
            {faqs.map((f, i) => (
              <details key={f.q} className="faq" open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Need PoSH support for your organisation?"
        text="From awareness sessions to external ICC membership, we help you get it right — sensitively, confidentially and in full compliance."
        primary={{ to: '/contact?enquiry=posh', label: 'Speak to a PoSH consultant' }}
        whatsappText="Hi 16Dimensions, I need PoSH support for our organisation."
      />
    </>
  );
}
