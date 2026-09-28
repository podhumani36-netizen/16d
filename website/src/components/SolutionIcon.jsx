// Line icons for the five solution families, keyed by slug in solutions.js.
const paths = {
  // person with a rising arrow: leadership
  'leadership-people-management': (
    <>
      <circle cx="9" cy="7" r="3" />
      <path d="M3 20v-1a6 6 0 0 1 9.5-4.9" />
      <path d="M15 20l6-6M17 14h4v4" />
    </>
  ),
  // two speech bubbles: communication
  'communication-collaboration': (
    <>
      <path d="M4 5h11a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H9l-4 3v-3H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
      <path d="M19 9h1a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-1v3l-4-3h-4" />
    </>
  ),
  // handshake-style heart: customer experience
  'customer-experience-sales': (
    <path d="M12 20s-7-4.4-9-9a4.8 4.8 0 0 1 9-3 4.8 4.8 0 0 1 9 3c-2 4.6-9 9-9 9z" />
  ),
  // target: workplace effectiveness
  'workplace-effectiveness': (
    <>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1" />
    </>
  ),
  // shield with tick: PoSH
  'posh-respectful-workplace': (
    <>
      <path d="M12 3l8 3v6c0 4.5-3.4 8-8 9-4.6-1-8-4.5-8-9V6l8-3z" />
      <path d="M8.5 12l2.5 2.5 4.5-5" />
    </>
  ),
};

export default function SolutionIcon({ slug, fallback }) {
  const p = paths[slug];
  if (!p) return fallback ?? null;
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.8"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {p}
    </svg>
  );
}
