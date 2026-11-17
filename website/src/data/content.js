// Homepage and shared content, taken from the 16Dimensions Website Blueprint.
//
// IMPORTANT: items marked `sample: true` are layout examples, not real clients.
// They show a "Sample" badge on the site. Replace them with approved, real
// case studies / testimonials / logos before launch (blueprint section 07 & 13).

// Section 03 — Build the website around business problems.

import { articles } from './articles.js';
export const painPoints = [
  {
    title: 'Your managers are busy — but not leading',
    text: 'Develop managers who coach, set clear expectations, hold people accountable and lead their teams through change with emotional intelligence.',
    link: '/training-solutions/leadership-people-management',
  },
  {
    title: 'Nobody truly owns the outcome',
    text: 'Build an ownership mindset through role clarity, accountability, confident decision making and collaboration across functions.',
    link: '/training-solutions/communication-collaboration',
  },
  {
    title: 'Customer experience depends on who is on shift',
    text: 'Set one standard of service everywhere — with stronger selling skills, calm complaint handling and the frontline behaviours customers remember.',
    link: '/training-solutions/customer-experience-sales',
  },
  {
    title: 'Supervisors are technically strong, but struggle with people',
    text: 'Turn experts into people leaders who communicate clearly, resolve conflict, run sharp briefings and keep shifts coordinated.',
    link: '/training-solutions/workplace-effectiveness',
  },
  {
    title: 'Teams are working in silos',
    text: 'Improve how people communicate, give feedback, influence and resolve conflict — so teams stop working around each other and start working together.',
    link: '/training-solutions/workplace-effectiveness',
  },
  {
    title: 'PoSH compliance needs to be done right',
    text: 'Awareness for every employee, sensitisation for managers, a capable Internal Committee and a workplace culture built on respect.',
    link: '/posh',
  },
];

// Section 08 — Methodology.
export const methodology = [
  { step: '01', title: 'Understand', text: 'We start with your business need and the real challenges your people face.' },
  { step: '02', title: 'Assess', text: 'We map current behaviours, capabilities and the gaps that matter most.' },
  { step: '03', title: 'Customise', text: 'We design learning around your industry, roles and workplace scenarios.' },
  { step: '04', title: 'Engage', text: 'Participants learn by doing — role plays, discussion and live case studies.' },
  { step: '05', title: 'Apply', text: 'Everyone leaves with clear action points to practise back on the job.' },
  { step: '06', title: 'Measure', text: 'We review feedback, assessments and the business indicators agreed with you.' },
];

// Section 06 — PoSH as a standalone vertical.
export const poshServices = [
  {
    title: 'Employee awareness programmes',
    text: 'Every employee recognises harassment, knows their rights and speaks up without fear of retaliation.',
  },
  {
    title: 'Manager and supervisor sensitisation',
    text: 'Your first line of defence learns to spot early signs and handle a disclosure correctly.',
  },
  {
    title: 'ICC capability building',
    text: 'Hands-on training in the Act, inquiry procedure, natural justice and report writing, so every decision holds up.',
  },
  {
    title: 'External member support',
    text: 'An independent, experienced external member, as the Act requires and fairness demands.',
  },
  {
    title: 'Inquiry guidance and documentation',
    text: 'Expert support at every stage, so each inquiry is fair, on time and fully documented.',
  },
  {
    title: 'Annual compliance support',
    text: 'Policy review, refreshers, annual report drafting and portal updates.',
  },
  {
    title: 'PoSH compliance audit',
    text: 'A gap assessment of your policy, committee, records and training, with a prioritised fix list.',
  },
];

// Section 07 — Case study format: Challenge > Intervention > Audience > Approach > Outcome.
// TODO: `outcome` describes what each programme was designed to change. Replace it
// with the real, client-approved result before removing `sample: true`.
export const caseStudies = [
  {
    sample: true,
    industry: 'Manufacturing',
    title: 'Turning technical supervisors into people leaders',
    challenge: 'Shift supervisors were technically excellent but struggled with communication, conflict and ownership on the shop floor.',
    intervention: 'Supervisor Effectiveness programme',
    audience: 'Line and shift supervisors',
    approach: 'Role plays on briefing and debriefing, conflict scenarios drawn from the plant itself, and 30-day workplace action plans.',
    outcome: 'Designed to lift the quality of shift handovers and supervisor ownership, tracked through plant-head feedback.',
  },
  {
    sample: true,
    industry: 'Retail / QSR',
    title: 'One standard of service across every store',
    challenge: 'Customer experience varied from outlet to outlet, and staff were not converting walk-ins into sales.',
    intervention: 'Customer Experience & Suggestive Selling',
    audience: 'Store staff and store managers',
    approach: 'Service-standard walkthroughs, selling role plays and manager-led daily briefings to keep the behaviours alive.',
    outcome: 'Designed to deliver consistent service and higher conversion, tracked through mystery-shopper scores and store sales.',
  },
  {
    sample: true,
    industry: 'PoSH',
    title: 'Building a confident Internal Committee',
    challenge: 'A newly formed ICC was unsure how to handle a complaint fairly and within statutory timelines.',
    intervention: 'ICC Capability Building + External Member support',
    audience: 'ICC members and the HR team',
    approach: 'A walk-through of the Act, a mock inquiry, documentation templates and ongoing expert guidance.',
    outcome: 'Designed to help the committee run fair, well-documented inquiries within statutory timelines.',
  },
];

export const testimonials = [
  {
    sample: true,
    quote: 'The training session was conducted in a highly professional, clear, and engaging manner. The concepts were explained in a simple and practical way, making them easy to understand. Active participation was encouraged, and all queries were addressed patiently and effectively. The training was highly informative and will be valuable in enhancing our knowledge and skills.',
    name: 'M. C. Kuloththungan',
    role: 'NLCIL, Neyveli',
  },
  {
    sample: true,
    quote: 'I had the opportunity to attend a communication training session at our Head Office in Ambattur. The program was highly engaging, creative, and focused on practical communication skills that can be applied in day-to-day work. One of the key highlights for me was the topic “React vs Respond,” which provided valuable insight into handling situations with better clarity and control. The interactive approach made the session easy to understand and enjoyable throughout. Overall, this training was very impactful and has helped me improve my confidence and communication effectiveness.',
    name: 'Ramesh R',
    role: 'Kolathur KTM Khivraj',
  },
  {
    sample: true,
    quote: 'Had very good session on team building and well covered all areas with theoretical and practicals.',
    name: 'Balakrishnan',
    role: 'Dart Global Logistics',
  },
];

// Client logos — add only where permission / brand policy allows.
// Files live in /public/images/clients/. The first 12 are shown on the home page.
export const clientLogos = [
  ['Shell', 'shell'],
  ['DLF', 'dlf'],
  ['Novotel', 'novotel'],
  ['Nidec', 'nidec'],
  ['Royal Sundaram', 'royal-sundaram'],
  ['The Park Chennai', 'the-park-chennai'],
  ['Saravana Stores', 'saravana-stores'],
  ['Loyola College', 'loyola-college'],
  ['Grand Chennai by GRT Hotels', 'grand-chennai-by-grt-hotels'],
  ['The Raintree Hotels', 'the-raintree-hotels'],
  ['The Residency Towers', 'the-residency-towers'],
  ['Heritage Hotels & Resorts', 'heritage-hotels-resorts'],
  ['The Park Bangalore', 'the-park-bangalore'],
  ['Greenpark', 'greenpark'],
  ['Usha Fire', 'usha-fire'],
  ['YCH', 'ych'],
  ['Fairways Logistics', 'fairways-logistics'],
  ['PAPL', 'papl'],
  ['Baashyaam', 'baashyaam'],
  ['Khivraj', 'khivraj'],
  ['Camu', 'camu'],
  ['Keenstack', 'keenstack'],
  ['BioRevive', 'biorevive'],
  ['Cookie Man', 'cookie-man'],
  ['Burgerman', 'burgerman'],
  ['Stella Maris College', 'stella-maris-college'],
  ['Ethiraj College for Women', 'ethiraj-college-for-women'],
  ['IHM Chennai', 'ihm-chennai'],
  ['Madras School of Social Work', 'madras-school-of-social-work'],
  ['PERI Institute of Technology', 'peri-institute-of-technology'],
  ['Anand Institute of Higher Technology', 'anand-institute-of-higher-technology'],
  ['Sriram Engineering College', 'sriram-engineering-college'],
  // TODO: name these two clients (logos without readable names).
  ['Client institution', 'client-crest'],
].map(([name, file]) => ({
  name,
  src: file === 'burgerman'
    ? '/images/clients/burgerman-logo.jpg'
    : `/images/clients/${file}.png`,
})).concat([
  { name: 'Creating Wealth for Wellbeing', src: '/images/clients/wealth-for-wellbeing-emblem.jpg' },
  { name: 'Pallavaa Group', src: '/images/clients/pallavaa-group-logo.jpg' },
  { name: 'Value Ingredients', src: '/images/clients/value-ingredients-logo.jpg' },
  { name: 'The Living Room Signature', src: '/images/clients/living-room-signature-logo.jpg' },
  { name: 'Pushkar Properties', src: '/images/clients/pushkar-properties-logo.jpg' },
  { name: 'LKS Gold House', src: '/images/clients/lks-gold-house-logo.jpg' },
  { name: 'Repco Home Finance', src: '/images/clients/repco-home-finance-logo.jpg' },
  { name: 'Pothys', src: '/images/clients/pothys-logo.jpg' },
]);

// Section 10 — Content themes for monthly publishing.
// Published articles (with a `slug`) come from data/articles.js; the rest are upcoming topics.
export const insights = [
  ...articles.map((a) => ({
    category: 'Article',
    title: a.title,
    text: a.excerpt,
    image: a.image,
    slug: a.slug,
  })),
  {
    category: 'Video',
    title: '60-second leadership habits for busy managers',
    text: 'Bite-sized leadership and communication lessons you can share with your team today.',
  },
  {
    category: 'Article',
    title: 'Manager effectiveness in the AI workplace',
    text: 'What changes for people managers when AI takes over routine work — and what matters more than ever.',
  },
  {
    category: 'Article',
    title: 'Common customer-service mistakes in retail and hospitality',
    text: 'The small frontline habits that quietly cost you repeat customers — and how to fix them.',
  },
  {
    category: 'Article',
    title: 'Supervisor effectiveness in manufacturing',
    text: 'Why great technicians often struggle as supervisors, and how to close the gap.',
  },
  {
    category: 'Explainer',
    title: 'PoSH explained for HR and managers',
    text: 'Plain-language guidance on respectful workplace practice and your legal responsibilities.',
  },
  {
    category: 'Case study',
    title: 'Before vs after: behaviour change in practice',
    text: 'Real stories of what changed on the job after a 16Dimensions programme.',
  },
];

// Lead magnets (section 09). Put the PDFs in /public/downloads/ and set `file`.
// While `file` is empty, the button asks for it through the enquiry form.
export const leadMagnets = [
  { title: 'PoSH Compliance Checklist', file: '' },
  { title: 'Manager Communication Checklist', file: '' },
  { title: 'Retail Customer Service Checklist', file: '' },
];
