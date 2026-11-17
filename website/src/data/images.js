// Every photo used on the site, in one place. Files live in /public/images/<group>/.
// To swap a picture, change the path here — no page code needs to change.

const t = (n) => `/images/training/training-${String(n).padStart(3, '0')}.jpg`;
const TRAINING_COUNT = 121;

export const brand = {
  logo: '/images/brand/logo-16d.png',
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
  aboutTeam: { src: t(23), alt: 'Kavitha Sasi addressing employees during a training session' },
  homeGallery: [
    { src: t(87), alt: 'Participants in a role-play activity' },
    { src: t(81), title: 'Hospitality Team Listening Session', alt: 'Hospitality team members listening during a facilitated discussion' },
    { src: t(80), title: 'Collaborative Rope Team Building Activity', alt: 'Participants working together in a rope-based team building exercise' },
    { src: t(56), alt: 'Team activity during a training session' },
    { src: t(32), alt: 'Group discussion in a corporate training room' },
    { src: t(29), alt: 'Leadership session with managers' },
    { src: t(105), alt: 'Frontline hospitality team after a training session' },
    { src: '/images/training/corporate-workshop-presentation.jpg', title: 'Corporate Workshop Presentation', alt: 'Trainer presenting to a small group during a corporate workshop' },
    { src: '/images/training/corporate-training-conference-room.jpg', title: 'Conference Room Training Session', alt: 'Employees seated in a conference room for a training presentation' },
    { src: '/images/training/post-training-participant-group.jpg', title: 'Training Programme Group Photo', alt: 'Participants and trainer gathered for a group photo after training' },
    { src: '/images/training/facilitated-team-discussion.jpg', title: 'Facilitated Team Discussion', alt: 'Colleagues taking part in a facilitated discussion around a meeting table' },
    { src: '/images/training/boardroom-team-activity.jpg', title: 'Collaborative Boardroom Activity', alt: 'Team members standing around a boardroom table during a group activity' },
    { src: '/images/training/classroom-soft-skills-session.jpg', title: 'Classroom Soft Skills Session', alt: 'Students seated in a classroom during a soft skills session' },
    { src: '/images/training/standing-team-building-activity.jpg', title: 'Standing Team Building Activity', alt: 'Participants working together in a standing team building activity' },
    { src: '/images/training/women-participants-training-group.jpg', title: 'Women Participants Training Group', alt: 'Women participants posing together after a training programme' },
  ],
  founderGallery: [
    { src: t(57), alt: 'Kavitha facilitating a workshop on stage' },
    {
      src: '/images/training/hospitality-procurement-connect-stage.jpg',
      alt: 'Kavitha Sasi speaking on stage at the South India Hospitality Procurement Connect',
    },
    { src: t(114), alt: 'Kavitha with a programme participant' },
  ],
  successGallery: [
    { src: t(24), alt: 'Participants at a corporate training programme' },
    { src: t(94), alt: 'Team celebrating at the end of a programme' },
    { src: t(62), alt: 'Outdoor team-building activity' },
    { src: t(83), alt: 'Participant group photo' },
    { src: t(109), alt: 'Programme participants group photo' },
    { src: '/images/training/women-participants-training-group.jpg', alt: 'Women participants posing after a Saravana Stores training programme' },
  ],
};

// Background photo for the banner at the top of each page.
export const heroes = {
  about: t(52),
  founder: t(65),
  solutions: t(40),
  solutionDetail: t(36),
  industries: t(61),
  posh: t(35),
  success: t(99),
  insights: t(49),
  contact: t(31),
  stats: t(46),
  cta: t(55),
};

// Photo for each solution family, keyed by the slug in solutions.js.
export const solutionPhotos = {
  'leadership-people-management': { src: t(31), alt: 'Managers in a leadership training session around a boardroom table' },
  'communication-collaboration': { src: t(73), alt: 'Participants in an interactive communication activity' },
  'customer-experience-sales': { src: t(38), alt: 'Trainer leading a customer-experience workshop for hospitality professionals' },
  'workplace-effectiveness': { src: t(23), alt: 'Trainer addressing employees during a workplace training session' },
  'posh-respectful-workplace': { src: t(35), alt: 'Employees attending a PoSH awareness session in a boardroom' },
};

// Additional training photos for the Training Solutions page.
export const solutionTrainingPhotos = Array.from({ length: 8 }, (_, i) => ({
  src: t(i + 124),
  alt: 'Participants taking part in a 16Dimensions training programme',
}));

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
const newTrainingPhotos = [
  { src: '/images/training/corporate-workshop-presentation.jpg', title: 'Corporate Workshop Presentation', alt: 'Trainer presenting to a small group during a corporate workshop' },
  { src: '/images/training/corporate-training-conference-room.jpg', title: 'Conference Room Training Session', alt: 'Employees seated in a conference room for a training presentation' },
  { src: '/images/training/post-training-participant-group.jpg', title: 'Training Programme Group Photo', alt: 'Participants and trainer gathered for a group photo after training' },
  { src: '/images/training/facilitated-team-discussion.jpg', title: 'Facilitated Team Discussion', alt: 'Colleagues taking part in a facilitated discussion around a meeting table' },
  { src: '/images/training/boardroom-team-activity.jpg', title: 'Collaborative Boardroom Activity', alt: 'Team members standing around a boardroom table during a group activity' },
  { src: '/images/training/classroom-soft-skills-session.jpg', title: 'Classroom Soft Skills Session', alt: 'Students seated in a classroom during a soft skills session' },
  { src: '/images/training/standing-team-building-activity.jpg', title: 'Standing Team Building Activity', alt: 'Participants working together in a standing team building activity' },
  { src: '/images/training/women-participants-training-group.jpg', title: 'Women Participants Training Group', alt: 'Women participants posing together after a training programme' },
];

export const trainingPhotos = [...Array.from({ length: TRAINING_COUNT }, (_, i) => ({
  src: t(i + 1),
  title: '16Dimensions Training Session',
  alt: 'Participants taking part in a 16Dimensions training session',
})), ...newTrainingPhotos];

export const successStoryPhotoReplacements = {
  [t(66)]: {
    src: '/images/training/hospitality-procurement-connect-stage.jpg',
    title: 'Hospitality Procurement Connect Stage Presentation',
    alt: 'Kavitha Sasi speaking on stage at the South India Hospitality Procurement Connect',
  },
  [t(70)]: {
    src: '/images/training/hospitality-procurement-connect-podium.jpg',
    title: 'Hospitality Procurement Connect Podium Address',
    alt: 'Kavitha Sasi addressing attendees from the event podium',
  },
};

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
