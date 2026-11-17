import usePageMeta from '../components/usePageMeta.js';
import Reveal from '../components/Reveal.jsx';
import { PageHero, SectionHead, CTASection, ButtonLink, Checklist } from '../components/Blocks.jsx';
import { poshServices, leadMagnets } from '../data/content.js';
import { heroes, photos } from '../data/images.js';

// Copy follows PoSH_Page_Review_and_Premium_Copy.docx (30 September 2026).
// TODO: have a PoSH-qualified lawyer review the legal statements before publishing,
// especially SHe-Box registration, the "protect men" answer and the ICC composition note.

const CONSULT = { to: '/contact?enquiry=posh', label: 'Book a PoSH consultation' };

const faqs = [
  {
    q: 'Who needs to comply?',
    a: 'Every organisation in India with 10 or more employees must constitute an Internal Committee and meet the requirements of the Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013.',
  },
  {
    q: 'Why do we need an external member?',
    a: 'The Act requires one for independence. They bring outside expertise and make the committee’s findings more credible.',
  },
  {
    q: 'How often should training be held?',
    a: 'The Act asks for regular awareness programmes without fixing a frequency. Best practice is at least once a year, plus induction for new joiners and refreshers for ICC members.',
  },
  {
    q: 'Who is covered, only permanent employees?',
    a: 'No. Permanent, contract, temporary, ad hoc, interns and trainees, and visitors to your premises.',
  },
  {
    q: 'What if we have fewer than 10 employees?',
    a: 'No ICC is required. Complaints go to the district-level Local Committee. We still recommend a written policy.',
  },
  {
    q: 'Does the Act protect men as well?',
    a: 'The statute protects women. Many organisations adopt gender-neutral policies so every employee has a fair route.',
  },
  {
    q: 'Is the complaint kept confidential?',
    a: 'Yes. The Act prohibits disclosing the complaint, the parties’ identities and the inquiry proceedings.',
  },
  {
    q: 'Can PoSH training be conducted online?',
    a: 'Yes, the Act does not prescribe a format. For ICC members we recommend live or hybrid mock inquiries.',
  },
];

// What counts as sexual harassment under Sections 2(n) and 3(2) of the Act, and where it can happen.
const behaviours = [
  'Physical contact and advances',
  'A demand or request for sexual favours',
  'Sexually coloured remarks',
  'Showing pornography',
  'Any other unwelcome physical, verbal or non-verbal conduct of a sexual nature',
];
const circumstances = [
  'An implied or explicit promise of preferential treatment at work',
  'An implied or explicit threat of detrimental treatment',
  'A threat about present or future employment status',
  'Interference with work, or creating an intimidating, offensive or hostile environment',
  'Humiliating treatment likely to affect health or safety',
];
const places = [
  'Offices and branches',
  'Client sites and off-sites',
  'Employer-provided transport',
  'WhatsApp groups and video calls',
  'Work-from-home setups',
];

// Employer duties, grouped so they scan faster.
const duties = [
  {
    title: 'Build',
    items: [
      'A written anti-harassment policy',
      'An Internal Committee at every office or branch',
      'An external member on the committee',
    ],
  },
  {
    title: 'Communicate',
    items: [
      'Display the penal consequences and committee details',
      'Run regular awareness programmes',
      'Orient ICC members',
    ],
  },
  {
    title: 'Report',
    items: [
      'Treat harassment as misconduct and act on recommendations',
      'Include PoSH details in the annual report',
      'File with the District Officer',
      'Update SHe-Box where applicable',
    ],
  },
];

// Statutory timelines for handling a complaint, and how we help at each stage.
const process = [
  { title: 'Complaint', time: 'Within 3 months (extendable by 3)', text: 'Written complaint to the ICC from the date of the incident.', help: 'Clear complaint channels and an intake form.' },
  { title: 'Conciliation', time: 'Optional', text: 'At the complainant’s request, the ICC may try to settle the matter. No monetary settlement is allowed.', help: 'Guidance on when conciliation is appropriate.' },
  { title: 'Inquiry', time: 'Within 90 days', text: 'A fair inquiry following natural justice: both parties heard, evidence recorded.', help: 'Inquiry planning, hearing protocols and documentation templates.' },
  { title: 'Report', time: 'Within 10 days', text: 'Findings and recommendations shared with the employer and both parties once the inquiry ends.', help: 'Report-writing support so findings are reasoned and clear.' },
  { title: 'Action', time: 'Within 60 days', text: 'The employer acts on the committee’s recommendations.', help: 'Advice on proportionate, policy-aligned action.' },
  { title: 'Appeal', time: 'Within 90 days', text: 'Either party may appeal against the recommendations before the appellate authority.', help: 'Records that hold up on appeal.' },
];

// What a 16Dimensions PoSH programme covers.
const includes = [
  { title: 'The Act in plain language', text: 'What the law says, who it covers and what it means for everyday behaviour at work.' },
  { title: 'Real workplace scenarios', text: 'Case discussions drawn from your industry, including online and remote conduct.' },
  { title: 'Speaking up safely', text: 'How to raise a concern, what happens next and how confidentiality is protected.' },
  { title: 'The bystander’s role', text: 'How colleagues and managers can step in, support and prevent escalation.' },
  { title: 'Mock inquiry for ICC', text: 'A hands-on walk-through from complaint to report, with documentation templates.' },
  { title: 'Records for compliance', text: 'Attendance and session details to support your annual PoSH reporting.' },
];

const facts = [
  { value: 'Since 2013', label: 'PoSH compliance is a legal duty for every employer' },
  { value: '10+ employees', label: 'Means a mandatory Internal Committee' },
  { value: 'Up to ₹50,000', label: 'Penalty for non-compliance, doubled for repeat offences' },
  { value: '90 days', label: 'The legal window to complete an inquiry' },
];

const audiences = [
  { title: 'Employees', text: 'Recognise harassment, know their rights and speak up without fear of retaliation.' },
  { title: 'Managers & supervisors', text: 'Spot warning signs early, respond the right way and set the tone for their teams.' },
  { title: 'ICC members', text: 'Run fair, legally sound inquiries with confidence, from the first complaint to the final report.' },
  { title: 'HR teams', text: 'Stay audit-ready all year with reporting, refreshers and clear communication.' },
  { title: 'Leadership', text: 'Set the tone, own the accountability and understand the exposure.' },
];

// Line icons for the seven services, in the same order as poshServices.
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
  // magnifier: compliance audit
  <>
    <circle cx="10.5" cy="10.5" r="6.5" />
    <path d="M15.5 15.5L21 21" />
    <path d="M7.8 10.6l1.8 1.8 3.4-3.6" />
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
    'PoSH training in Chennai and external ICC member support across Tamil Nadu — employee awareness, manager sensitisation, ICC capability building, inquiry guidance and PoSH compliance audits.'
  );
  const checklist = leadMagnets.find((l) => l.title.startsWith('PoSH'));
  const checklistLink = checklist?.file || '/contact?enquiry=checklist';
  const sidePhoto = photos.founderGallery[0];

  return (
    <>
      <PageHero image={heroes.posh}
        eyebrow="PoSH Training & ICC Support"
        title="PoSH compliance that stands up to scrutiny"
        intro="One mishandled complaint can cost you your people, your reputation and your licence to operate. We train your teams, strengthen your Internal Committee and keep you audit-ready, year after year."
      >
        <ButtonLink to={CONSULT.to}>{CONSULT.label}</ButtonLink>
        <ButtonLink to={checklistLink} variant="secondary">
          Take the 5-minute compliance check
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

      {/* Know the line */}
      <section className="section section--tint">
        <div className="container">
          <SectionHead
            eyebrow="Know the line"
            title="“It was only a joke” is not a defence."
            intro="The Act looks at whether conduct was unwelcome, not whether it was meant to hurt. Most complaints begin with behaviour someone thought was harmless."
          />
          <div className="grid grid--3">
            <Reveal className="card">
              <h3>Behaviour the Act treats as harassment</h3>
              <Checklist items={behaviours} />
            </Reveal>
            <Reveal className="card" delay={80}>
              <h3>Situations that make it harassment too</h3>
              <Checklist items={circumstances} />
            </Reveal>
            <Reveal className="card" delay={160}>
              <h3>Where it happens</h3>
              <Checklist items={places} />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Your legal duties */}
      <section className="section">
        <div className="container split split--top">
          <Reveal>
            <p className="eyebrow">Your legal duties</p>
            <h2>A committee on paper is not compliance.</h2>
            <p className="lead">
              The Act holds the employer accountable, not just the Internal Committee (ICC). Here is what you must do
              every year, and how we help you do each part.
            </p>
            <div className="posh-penalty">
              <h3>What non-compliance really costs</h3>
              <p>
                Up to <strong>₹50,000</strong> for the first offence, <strong>double the penalty</strong> for repeats,
                and possible cancellation of your business licence or registration. Add to that the damage to trust,
                talent and reputation.
              </p>
            </div>
            <div className="posh-note">
              <h3>What a valid ICC looks like</h3>
              <p>
                A presiding officer who is a senior woman employee, at least two employee members committed to the
                cause of women or with legal knowledge, and one external member. At least half the members must be
                women.
              </p>
            </div>
          </Reveal>
          <div className="posh-duties">
            {duties.map((d, i) => (
              <Reveal key={d.title} className="posh-duty" delay={i * 80}>
                <span className="posh-duty__n">{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{d.title}</h3>
                  <Checklist items={d.items} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Services: sticky intro on the left, services on the right */}
      <section className="section section--tint">
        <div className="container posh-services">
          <div className="posh-services__intro">
            <Reveal>
              <p className="eyebrow">Services</p>
              <h2>From the first session to the annual report. One partner.</h2>
              <p className="lead">
                A workplace where people feel safe to speak up, and a committee that knows exactly what to do when
                they do.
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

      {/* Complaint process and statutory timelines */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="When a complaint comes in"
            title="Six stages. Fixed deadlines. Every one defensible."
            intro="A missed deadline or a one-sided inquiry can be overturned on appeal. We prepare your committee to get every stage right: fairly, confidentially and on time."
            center
          />
          <ol className="method method--even">
            {process.map((p, i) => (
              <Reveal as="li" key={p.title} className="method__step" delay={i * 60}>
                <span className="method__num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{p.title}</h3>
                <p>
                  <span className="posh-time">{p.time}</span>
                  {p.text}
                  <span className="posh-help">
                    <strong>How we help:</strong> {p.help}
                  </span>
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Who we train */}
      <section className="section section--dark posh-audience">
        <div className="container">
          <SectionHead eyebrow="Who we work with" title="Respect is built by everyone, so we train everyone." center />
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

      {/* What a programme covers */}
      <section className="section">
        <div className="container">
          <SectionHead
            eyebrow="Inside our programmes"
            title="Training people remember, and put into practice."
            intro="No slide-reading, no legal jargon. Every session is sensitive, interactive and built around real situations from your workplace."
          />
          <div className="grid grid--3">
            {includes.map((item, i) => (
              <Reveal key={item.title} className="card" delay={(i % 3) * 80}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
          <Reveal as="p" className="posh-delivery">
            Delivered on-site or online, in English, Tamil or bilingual.
          </Reveal>
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
              <h2>Would your organisation pass a PoSH audit today?</h2>
              <p>
                Answer a short checklist and see exactly where your policy, committee and training stand, with a
                prioritised list of what to fix first.
              </p>
            </div>
            <ButtonLink to={checklistLink} variant="primary">Get the free checklist</ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* FAQs */}
      <section className="section section--tint">
        <div className="container faq-split">
          <Reveal className="faq-split__intro">
            <p className="eyebrow">FAQs</p>
            <h2>Straight answers for HR teams</h2>
            <p className="lead">Not sure what applies to your organisation? Ask us — you'll get a clear answer, not legal jargon.</p>
            <ButtonLink to={CONSULT.to} variant="secondary">{CONSULT.label}</ButtonLink>
          </Reveal>
          <div className="faq-split__list">
            {faqs.map((f, i) => (
              <details key={f.q} className="faq" open={i < 2}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
            <p className="posh-disclaimer">General information, not legal advice.</p>
          </div>
        </div>
      </section>

      <CTASection
        title="Don’t wait for a complaint to find the gaps."
        text="From awareness sessions to external ICC membership, we help you get it right: sensitively, confidentially and in full compliance."
        primary={{ to: CONSULT.to, label: 'Book a consultation' }}
        whatsappText="Hi 16Dimensions, I need PoSH support for our organisation."
        whatsappLabel="WhatsApp us"
      />
    </>
  );
}
