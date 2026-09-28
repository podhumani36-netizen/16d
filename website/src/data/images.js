// Every photo used on the site, in one place. Files live in /public/images/<group>/.
// To swap a picture, change the path here — no page code needs to change.

const t = (n) => `/images/training/training-${String(n).padStart(3, '0')}.jpg`;
const TRAINING_COUNT = 121;

export const brand = {
  logo: '/images/brand/logo.png',
  logoLight: '/images/brand/logo-light.png',
  mark: '/images/brand/logo-mark.png',
};

export const kavitha = {
  portrait: '/images/kavitha/kavitha-portrait.jpg',
  // Background removed from kavitha-standing.jpg for the home banner.
  cutout: '/images/kavitha/kavitha-cutout.webp',
  laptop: '/images/kavitha/kavitha-laptop.jpg',
  seated: '/images/kavitha/kavitha-seated.jpg',
  standing: '/images/kavitha/kavitha-pose-1.jpg',
};

export const photos = {
  heroSession: { src: t(21), alt: 'Kavitha Sasi facilitating a customer-service workshop' },
  aboutTeam: { src: t(106), alt: '16Dimensions programme participants with Kavitha Sasi' },
  homeGallery: [
    { src: t(51), alt: 'Workshop in progress in a hotel conference hall' },
    { src: t(87), alt: 'Participants in a role-play activity' },
    { src: t(56), alt: 'Team activity during a training session' },
    { src: t(32), alt: 'Group discussion in a corporate training room' },
    { src: t(29), alt: 'Leadership session with managers' },
    { src: t(105), alt: 'Frontline hospitality team after a training session' },
  ],
  founderGallery: [
    { src: t(57), alt: 'Kavitha facilitating a workshop on stage' },
    { src: t(66), alt: 'Kavitha speaking at a financial year welcome meet' },
    { src: t(114), alt: 'Kavitha with a programme participant' },
  ],
  successGallery: [
    { src: t(24), alt: 'Participants at a corporate training programme' },
    { src: t(94), alt: 'Team celebrating at the end of a programme' },
    { src: t(62), alt: 'Outdoor team-building activity' },
    { src: t(83), alt: 'Participant group photo' },
    { src: t(109), alt: 'Programme participants group photo' },
    { src: t(120), alt: 'Workshop session in a lounge setting' },
  ],
};

// Background photo for the banner at the top of each page.
export const heroes = {
  about: t(52),
  founder: t(65),
  solutions: t(40),
  solutionDetail: t(36),
  industries: t(61),
  posh: t(4),
  success: t(99),
  insights: t(49),
  contact: t(38),
  stats: t(46),
  cta: t(55),
};

// Photo for each solution family, keyed by the slug in solutions.js.
export const solutionPhotos = {
  'leadership-people-management': { src: t(29), alt: 'Leadership session with managers' },
  'communication-collaboration': { src: t(32), alt: 'Communication workshop in a corporate training room' },
  'customer-experience-sales': { src: t(21), alt: 'Kavitha Sasi facilitating a customer-service workshop' },
  'workplace-effectiveness': { src: t(56), alt: 'Team activity during a workplace effectiveness session' },
  'posh-respectful-workplace': { src: t(4), alt: 'Participants at a PoSH awareness programme' },
};

// Photo for each industry page, keyed by the industry slug in industries.js.
export const industryPhotos = {
  corporate: { src: t(29), alt: 'Corporate leadership training session' },
  manufacturing: { src: t(102), alt: 'Manufacturing team after a 16Dimensions programme' },
  'retail-qsr': { src: t(117), alt: 'Retail and QSR team in a training session' },
  hospitality: { src: t(105), alt: 'Hotel chefs and staff with Kavitha Sasi' },
  education: { src: t(45), alt: 'Students at a soft-skills session' },
  'healthcare-services': { src: t(53), alt: 'Service team training session' },
};

// All training photos, for the photo wall on the Success Stories page.
export const trainingPhotos = Array.from({ length: TRAINING_COUNT }, (_, i) => ({
  src: t(i + 1),
  alt: '16Dimensions training session',
}));

// Invitations and posters from talks and guest lectures.
export const events = [
  ['sairam-y20-panelist', 'Panelist, Y20 Talk Event — Sairam Engineering College'],
  ['loyola-guest-lecture', 'Guest lecture — Loyola College, Department of Sociology'],
  ['guru-nanak-elixir', 'Chief guest, Elixir — Guru Nanak College School of Management'],
  ['peri-crafting-me', 'Guest lecture "Crafting Me" — PERI Institute of Technology'],
  ['kumbakonam-college-soft-skills', 'Soft skills training programme — Govt. College for Women, Kumbakonam'],
  ['making-her-win', '#makingHERwin — MEASI Institute of Management'],
  ['velammal-effective-parenting', 'Effective Parenting — Velammal Vidyalaya'],
  ['chennai-national-college-orientation', 'Orientation programme — Chennai National Arts & Science College'],
  ['prelude-22', "Prelude '22 — College of Engineering, Guindy"],
  ['rotary-training-is-profit', 'Training = Profit — Rotary speaker meet'],
  ['financial-year-welcome-meet', 'Financial Year Welcome Meet — Saravanaa Electrical Agencies'],
  ['cee-dee-yes-workshop', 'Workshop — Cee Dee Yes Public School'],
  ['bvm-global-naari-shakthi', 'Naari Shakthi — BVM Global School'],
  ['guest-speaker-fashiyana', 'Guest speaker — Fashiyana'],
].map(([file, title]) => ({ src: `/images/events/${file}.jpg`, title }));
