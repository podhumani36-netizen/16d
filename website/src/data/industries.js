// Blueprint section 05 — Industry-Specific Landing Pages.

export const industries = [
  {
    slug: 'corporate',
    title: 'Corporate',
    intro:
      'For IT, BFSI, consulting and shared-services organisations that need managers who truly lead and teams that work as one.',
    focus: [
      'Manager effectiveness',
      'Leadership',
      'Communication',
      'Collaboration',
      'Emotional intelligence',
      'Performance conversations',
    ],
    challenges: [
      'Promoted experts who struggle to lead people',
      'Silos and slow decision making across functions',
      'Performance reviews that avoid the honest conversations',
    ],
    keyword: 'Corporate training company in Chennai',
  },
  {
    slug: 'manufacturing',
    title: 'Manufacturing',
    intro:
      'For plants and factories where supervisors are the vital link between management goals and shop-floor reality.',
    focus: [
      'Supervisor effectiveness',
      'Communication',
      'Ownership',
      'Conflict handling',
      'Respectful workplace / PoSH',
    ],
    challenges: [
      'Supervisors promoted for technical skill, not people skills',
      'Shift handovers and briefings that miss key information',
      'Low ownership and blame between departments',
    ],
    keyword: 'Supervisor training for manufacturing',
  },
  {
    slug: 'retail-qsr',
    title: 'Retail / QSR',
    intro:
      'For retail chains and quick-service restaurants where every store, every shift and every customer deserves the same great experience.',
    focus: [
      'Customer experience',
      'Selling skills',
      'Store leadership',
      'Grooming',
      'Service standards',
      'Briefing / debriefing',
    ],
    challenges: [
      'Service quality that varies from store to store',
      'Staff who serve, but do not sell',
      'Store managers who manage tasks but not people',
    ],
    keyword: 'Retail staff training Chennai',
  },
  {
    slug: 'hospitality',
    title: 'Hospitality',
    intro:
      'For hotels, resorts and restaurants where every guest experience is shaped by how each team member behaves.',
    focus: [
      'Guest service excellence',
      'Professional communication',
      'Grooming',
      'Complaint handling',
      'Team coordination',
      'Leadership',
    ],
    challenges: [
      'Guest complaints about attitude rather than facilities',
      'Friction between front-of-house and back-of-house teams',
      'High turnover that resets service standards',
    ],
    keyword: 'Hospitality training Chennai',
  },
  {
    slug: 'education',
    title: 'Education',
    intro:
      'For colleges and institutions preparing students for the workplace — and faculty for the modern classroom.',
    focus: [
      'Employability',
      'Communication',
      'Interview readiness',
      'Group dynamics',
      'Faculty development',
      'Workplace readiness',
    ],
    challenges: [
      'Graduates with knowledge but low workplace confidence',
      'Students unprepared for group discussions and interviews',
      'Faculty looking for more engaging teaching methods',
    ],
    keyword: 'Employability skills training',
  },
  {
    slug: 'healthcare-services',
    title: 'Healthcare / Services',
    intro:
      'For hospitals, clinics and service businesses where empathy and teamwork shape every patient and customer experience.',
    focus: [
      'Customer / patient interaction',
      'Service culture',
      'Professional communication',
      'Team coordination',
      'Respectful workplace',
    ],
    challenges: [
      'Patient or customer complaints about communication',
      'Stress and friction in high-pressure teams',
      'Inconsistent service culture across departments',
    ],
    keyword: 'Customer service training Chennai',
  },
];

export const getIndustry = (slug) => industries.find((i) => i.slug === slug);
