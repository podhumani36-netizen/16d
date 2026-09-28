// Blueprint section 04 — Training Solution Architecture.

export const solutions = [
  {
    slug: 'leadership-people-management',
    title: 'Leadership & People Management',
    icon: '◆',
    summary:
      'Develop managers who lead with clarity, coach for performance and take full ownership of results.',
    topics: [
      'Leadership mindset',
      'First-time manager',
      'Delegation',
      'Coaching for performance',
      'Emotional intelligence',
      'Ownership & accountability',
      'Change leadership',
      'Performance conversations',
    ],
    outcomes: [
      'Managers who hold clear, regular and honest performance conversations',
      'Confident delegation and fewer escalations to senior leaders',
      'Teams that understand what is expected of them — and own the outcome',
    ],
    audience: 'First-time managers, mid-level managers, team leads and high-potential employees.',
    cta: 'Discuss a leadership programme',
  },
  {
    slug: 'communication-collaboration',
    title: 'Communication & Collaboration',
    icon: '●',
    summary:
      'Help teams communicate with clarity, resolve conflict constructively and collaborate across functions.',
    topics: [
      'Professional communication',
      'Influencing skills',
      'Conflict management',
      'Team synergy',
      'Giving & receiving feedback',
      'Presentation skills',
      'Stakeholder interaction',
    ],
    outcomes: [
      'Fewer misunderstandings, less rework and smoother hand-offs between teams',
      'Conflicts raised early and resolved with respect',
      'Confident, well-structured presentations and updates',
    ],
    audience: 'Cross-functional teams, client-facing staff, supervisors and managers.',
    cta: 'Plan a communication workshop',
  },
  {
    slug: 'customer-experience-sales',
    title: 'Customer Experience & Sales',
    icon: '▲',
    summary:
      'Deliver a consistent, confident customer experience that builds loyalty and drives sales.',
    topics: [
      'Customer delight',
      'Consultative selling',
      'Suggestive selling',
      'Service standards',
      'Complaint handling',
      'Customer retention',
      'Sales communication',
    ],
    outcomes: [
      'Consistent service standards across stores, outlets and shifts',
      'Complaints resolved calmly, quickly and professionally',
      'Higher conversion through needs-based, consultative selling',
    ],
    audience: 'Frontline, retail, QSR, hospitality, sales and customer-service teams.',
    cta: 'Improve customer experience',
  },
  {
    slug: 'workplace-effectiveness',
    title: 'Workplace Effectiveness',
    icon: '■',
    summary:
      'Build the everyday skills that make people productive, dependable and ready to grow.',
    topics: [
      'Problem solving',
      'Decision making',
      'Time & self-management',
      'Critical thinking',
      'Goal setting',
      'Resilience',
      'Professional etiquette',
    ],
    outcomes: [
      'Sharper prioritisation and reliable, on-time delivery',
      'Clear, structured thinking when problems arise',
      'Professional conduct that represents your organisation at its best',
    ],
    audience: 'Employees at all levels, new joiners and graduate trainees.',
    cta: 'Build workplace effectiveness',
  },
  {
    slug: 'posh-respectful-workplace',
    title: 'PoSH & Respectful Workplace',
    icon: '✦',
    summary:
      'Build a safe, respectful workplace and meet your obligations under the PoSH Act with confidence.',
    topics: [
      'Employee PoSH awareness',
      'Manager sensitisation',
      'ICC training',
      'External ICC member support',
      'Compliance enablement',
    ],
    outcomes: [
      'Employees who know what is and is not acceptable — and how to raise a concern',
      'Managers who respond to complaints correctly and sensitively',
      'An Internal Committee that runs fair, compliant inquiries with confidence',
    ],
    audience: 'All employees, managers and supervisors, ICC members and HR teams.',
    cta: 'Speak to a PoSH consultant',
    link: '/posh',
  },
];

export const getSolution = (slug) => solutions.find((s) => s.slug === slug);
