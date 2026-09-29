// Blueprint section 04 — Training Solution Architecture.
//
// Each solution page (/training-solutions/:slug) is built from these fields:
//   overview   — "why it matters" paragraphs
//   signs      — "signs your team needs this" checklist
//   programmes — each programme in the family, with a short description
//   industries — industry slugs (data/industries.js) this solution is most requested by
//   article    — a related article slug (data/articles.js), optional
//   faqs       — questions and answers for the page
//   keyword    — search phrase (blueprint section 10), used in the page description
// `topics` (the programme names) is derived from `programmes`.

const data = [
  {
    slug: 'leadership-people-management',
    keyword: 'Leadership and managerial skills training for managers in Chennai',
    title: 'Leadership & People Management',
    icon: '◆',
    summary:
      'Develop managers who lead with clarity, coach for performance and take full ownership of results.',
    overview: [
      'Most managers are promoted because they were good at their own job — not because anyone taught them how to lead people. The result is familiar: managers who do the work themselves instead of delegating, avoid difficult conversations, and pass problems upwards instead of solving them.',
      'Our leadership programmes focus on the everyday behaviours that make the difference: setting clear expectations, giving honest feedback, coaching instead of instructing, and holding people accountable with respect. Every programme is built around the real situations your managers face, so what they practise in the room is what they use on the job the next day.',
    ],
    signs: [
      'Managers are overloaded because they struggle to delegate',
      'Performance issues are left unaddressed until they become serious',
      'Too many decisions are escalated to senior leaders',
      'New managers are unsure how to lead former peers',
      'Teams follow instructions but rarely take ownership',
    ],
    programmes: [
      {
        title: 'Leadership mindset',
        text: 'The shift from doing the work to getting results through others — and the habits, priorities and self-awareness that shift requires.',
      },
      {
        title: 'First-time manager',
        text: 'A practical foundation for new managers: setting expectations, running team meetings, managing former peers and building credibility early.',
      },
      {
        title: 'Delegation',
        text: 'What to delegate, to whom and how — with clear briefs, the right level of follow-up and trust that grows over time.',
      },
      {
        title: 'Coaching for performance',
        text: 'Using questions and structured coaching conversations to build capability, instead of solving every problem for the team.',
      },
      {
        title: 'Emotional intelligence',
        text: 'Recognising and managing emotions — your own and others’ — to stay composed under pressure and build stronger working relationships.',
      },
      {
        title: 'Ownership & accountability',
        text: 'Creating a culture where people take responsibility for outcomes, follow through on commitments and raise problems early.',
      },
      {
        title: 'Change leadership',
        text: 'Helping teams understand, accept and adopt change — communicating the why, handling resistance and keeping performance steady.',
      },
      {
        title: 'Performance conversations',
        text: 'Preparing for and holding clear, fair and honest conversations about performance, from regular check-ins to difficult feedback.',
      },
    ],
    outcomes: [
      'Managers who hold clear, regular and honest performance conversations',
      'Confident delegation and fewer escalations to senior leaders',
      'Teams that understand what is expected of them — and own the outcome',
    ],
    audience: 'First-time managers, mid-level managers, team leads and high-potential employees.',
    industries: ['corporate', 'manufacturing', 'healthcare-services'],
    article: 'power-of-workplace-culture',
    faqs: [
      {
        q: 'Is this suitable for first-time managers?',
        a: 'Yes. First-time managers are one of the groups we work with most. We can run a dedicated programme for new managers, or combine them with experienced managers when the goal is a shared leadership standard.',
      },
      {
        q: 'Can the programme be built around our company’s situations?',
        a: 'Every programme is customised. We start by understanding your business, your managers and the challenges they face, and build role plays and case studies from real situations in your organisation.',
      },
      {
        q: 'How do you make sure the learning is used back at work?',
        a: 'Participants leave with clear action points to practise on the job, and we agree with you up front how progress will be reviewed — through feedback, assessments or the business indicators that matter to you.',
      },
    ],
    cta: 'Discuss a leadership programme',
  },
  {
    slug: 'communication-collaboration',
    keyword: 'Communication skills training for employees',
    title: 'Communication & Collaboration',
    icon: '●',
    summary:
      'Help teams communicate with clarity, resolve conflict constructively and collaborate across functions.',
    overview: [
      'Many workplace problems that look like process or performance issues are really communication issues: instructions that were not clear, feedback that was never given, conflicts that were avoided, and teams that work in silos instead of together.',
      'Our communication programmes build practical skills people can use immediately — structuring a message, listening properly, giving and receiving feedback, handling disagreement and presenting with confidence. The focus is on behaviour, not theory, so teams communicate more clearly and work together more smoothly.',
    ],
    signs: [
      'Work is repeated because instructions or expectations were unclear',
      'Conflicts are avoided, or become personal',
      'Departments work in silos and hand-offs break down',
      'Meetings and updates run long without clear outcomes',
      'Capable people struggle to present or influence confidently',
    ],
    programmes: [
      {
        title: 'Professional communication',
        text: 'Clear, concise and courteous communication — spoken, written and over email — that gets the right message across the first time.',
      },
      {
        title: 'Influencing skills',
        text: 'Building credibility and persuading colleagues, managers and stakeholders without relying on authority.',
      },
      {
        title: 'Conflict management',
        text: 'Recognising conflict early and resolving it constructively — separating the issue from the person and focusing on solutions.',
      },
      {
        title: 'Team synergy',
        text: 'Building trust, shared goals and working agreements so a group of individuals performs as a team.',
      },
      {
        title: 'Giving & receiving feedback',
        text: 'Simple, practical models for feedback that is specific, timely and respectful — and for receiving it without becoming defensive.',
      },
      {
        title: 'Presentation skills',
        text: 'Structuring content, managing nerves and delivering presentations and updates with clarity and confidence.',
      },
      {
        title: 'Stakeholder interaction',
        text: 'Understanding stakeholders’ needs, managing expectations and communicating across functions and levels.',
      },
    ],
    outcomes: [
      'Fewer misunderstandings, less rework and smoother hand-offs between teams',
      'Conflicts raised early and resolved with respect',
      'Confident, well-structured presentations and updates',
    ],
    audience: 'Cross-functional teams, client-facing staff, supervisors and managers.',
    industries: ['corporate', 'education', 'healthcare-services'],
    article: 'communication-skills-2025',
    faqs: [
      {
        q: 'Do you cover written and email communication as well?',
        a: 'Yes. Professional communication covers spoken, written and email communication, and we weight it towards what your teams use most.',
      },
      {
        q: 'Can this be run for a mixed group from different departments?',
        a: 'Mixed groups work very well for collaboration programmes, because people practise with the colleagues they actually need to work with. We can also run programmes for a single team.',
      },
      {
        q: 'How practical are the sessions?',
        a: 'Very. Participants learn by doing — role plays, discussion and live case studies based on real workplace situations — and leave with clear action points to practise on the job.',
      },
    ],
    cta: 'Plan a communication workshop',
  },
  {
    slug: 'customer-experience-sales',
    keyword: 'Customer service and sales training in Chennai',
    title: 'Customer Experience & Sales',
    icon: '▲',
    summary:
      'Deliver a consistent, confident customer experience that builds loyalty and drives sales.',
    overview: [
      'Customers remember how they were treated. A single frontline interaction — a warm greeting, a complaint handled well, a helpful suggestion — can decide whether a customer returns or goes elsewhere. Yet service standards often vary from one outlet, shift or team member to the next.',
      'Our customer experience and sales programmes give frontline and sales teams the behaviours that build loyalty and revenue: consistent service standards, calm complaint handling, and consultative selling that starts with understanding the customer’s needs. We tailor every programme to your brand, your customers and your service environment.',
    ],
    signs: [
      'Service quality varies between outlets, shifts or team members',
      'Complaints escalate instead of being resolved at the first point of contact',
      'Staff take orders but rarely suggest or upsell',
      'Customers do not come back as often as they should',
      'New frontline staff take too long to reach your service standard',
    ],
    programmes: [
      {
        title: 'Customer delight',
        text: 'Going beyond satisfaction: the small, consistent behaviours that make customers feel valued and want to return.',
      },
      {
        title: 'Consultative selling',
        text: 'Understanding the customer’s needs through questions and listening, then recommending the right solution with confidence.',
      },
      {
        title: 'Suggestive selling',
        text: 'Natural, helpful add-on and upgrade suggestions that increase the bill value without feeling pushy.',
      },
      {
        title: 'Service standards',
        text: 'Defining and practising your service standards so every customer gets the same experience, wherever and whenever they visit.',
      },
      {
        title: 'Complaint handling',
        text: 'Staying calm, listening, apologising well and resolving complaints in a way that restores the customer’s trust.',
      },
      {
        title: 'Customer retention',
        text: 'Building relationships that bring customers back — remembering preferences, following up and turning regulars into advocates.',
      },
      {
        title: 'Sales communication',
        text: 'Confident, clear and persuasive communication for sales conversations, from the first greeting to closing the sale.',
      },
    ],
    outcomes: [
      'Consistent service standards across stores, outlets and shifts',
      'Complaints resolved calmly, quickly and professionally',
      'Higher conversion through needs-based, consultative selling',
    ],
    audience: 'Frontline, retail, QSR, hospitality, sales and customer-service teams.',
    industries: ['retail-qsr', 'hospitality', 'healthcare-services'],
    article: 'why-soft-skills-matter',
    faqs: [
      {
        q: 'Can you train staff across several outlets to one standard?',
        a: 'Yes. Consistency across locations is one of the most common goals for retail, QSR and hospitality clients. We build the programme around your own service standards so every outlet works to the same benchmark.',
      },
      {
        q: 'Is the sales training suitable for frontline staff, not just sales teams?',
        a: 'Yes. Suggestive and consultative selling work just as well at a counter, reception desk or restaurant table as in a formal sales role, and we adapt the language and examples to each group.',
      },
      {
        q: 'How is the programme tailored to our brand?',
        a: 'We start by understanding your customers, your service environment and the gaps you see today, and build scenarios and role plays around real customer situations from your business.',
      },
    ],
    cta: 'Improve customer experience',
  },
  {
    slug: 'workplace-effectiveness',
    keyword: 'Corporate soft skills training in Chennai',
    title: 'Workplace Effectiveness',
    icon: '■',
    summary:
      'Build the everyday skills that make people productive, dependable and ready to grow.',
    overview: [
      'Technical skills get people hired; everyday effectiveness decides how well they perform. How people prioritise their time, think through problems, make decisions, handle pressure and conduct themselves at work affects the quality and reliability of everything they deliver.',
      'Our workplace effectiveness programmes build these core professional skills for employees at every level — from new joiners and graduate trainees learning what the workplace expects, to experienced staff who want to work smarter and take on more responsibility.',
    ],
    signs: [
      'Deadlines slip because work is not planned or prioritised',
      'Problems are passed on instead of being thought through',
      'People struggle under pressure or with change',
      'New joiners take a long time to adapt to workplace expectations',
      'Professional conduct is inconsistent across the team',
    ],
    programmes: [
      {
        title: 'Problem solving',
        text: 'A structured approach to identifying the real problem, finding its root cause and choosing a practical solution.',
      },
      {
        title: 'Decision making',
        text: 'Weighing options, managing risk and making timely decisions with the information available — and standing by them.',
      },
      {
        title: 'Time & self-management',
        text: 'Planning, prioritising and protecting time for important work, and managing energy, distractions and commitments.',
      },
      {
        title: 'Critical thinking',
        text: 'Questioning assumptions, evaluating information objectively and reaching sound, well-reasoned conclusions.',
      },
      {
        title: 'Goal setting',
        text: 'Setting clear, meaningful goals, breaking them into actions and tracking progress to follow through.',
      },
      {
        title: 'Resilience',
        text: 'Staying steady under pressure, recovering from setbacks and adapting positively to change.',
      },
      {
        title: 'Professional etiquette',
        text: 'Workplace conduct, grooming, meeting and email etiquette — the behaviours that build trust and represent your organisation well.',
      },
    ],
    outcomes: [
      'Sharper prioritisation and reliable, on-time delivery',
      'Clear, structured thinking when problems arise',
      'Professional conduct that represents your organisation at its best',
    ],
    audience: 'Employees at all levels, new joiners and graduate trainees.',
    industries: ['corporate', 'manufacturing', 'education'],
    article: 'why-soft-skills-matter',
    faqs: [
      {
        q: 'Is this suitable for new joiners and graduate trainees?',
        a: 'Yes. Workplace effectiveness is often part of induction for new joiners and graduate trainees, helping them understand what the workplace expects from day one. It works equally well for experienced employees.',
      },
      {
        q: 'Can we choose only some of the programmes?',
        a: 'Yes. Every programme is customised — we recommend the combination of topics that addresses the gaps you see, rather than running a fixed syllabus.',
      },
      {
        q: 'Do you also work with colleges and students?',
        a: 'Yes. We work with educational institutions on employability, communication and interview readiness — see our education page for details.',
      },
    ],
    cta: 'Build workplace effectiveness',
  },
  {
    slug: 'posh-respectful-workplace',
    title: 'PoSH & Respectful Workplace',
    icon: '✦',
    summary:
      'Build a safe, respectful workplace and meet your obligations under the PoSH Act with confidence.',
    programmes: [
      { title: 'Employee PoSH awareness' },
      { title: 'Manager sensitisation' },
      { title: 'ICC training' },
      { title: 'External ICC member support' },
      { title: 'Compliance enablement' },
    ],
    outcomes: [
      'Employees who know what is and is not acceptable — and how to raise a concern',
      'Managers who respond to complaints correctly and sensitively',
      'An Internal Committee that runs fair, compliant inquiries with confidence',
    ],
    audience: 'All employees, managers and supervisors, ICC members and HR teams.',
    cta: 'Speak to a PoSH consultant',
    // PoSH has its own full page.
    link: '/posh',
  },
];

export const solutions = data.map((s) => ({ ...s, topics: s.programmes.map((p) => p.title) }));

export const getSolution = (slug) => solutions.find((s) => s.slug === slug);
