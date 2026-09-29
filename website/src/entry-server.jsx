// Build-time entry: renders each page to HTML (see scripts/prerender.mjs).
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App.jsx';
import { MetaContext } from './components/usePageMeta.js';
import { solutions } from './data/solutions.js';
import { industries } from './data/industries.js';
import { articles } from './data/articles.js';

export { SITE_URL, headTags, organizationJsonLd } from './seo.js';

// Every public page. Solutions with their own `link` (PoSH → /posh) are left out
// so the same content isn't published at two addresses.
export const routes = [
  '/',
  '/about',
  '/about/kavitha-sasi',
  '/training-solutions',
  ...solutions.filter((s) => !s.link).map((s) => `/training-solutions/${s.slug}`),
  '/industries',
  ...industries.map((i) => `/industries/${i.slug}`),
  '/posh',
  '/success-stories',
  '/insights',
  ...articles.map((a) => `/insights/${a.slug}`),
  '/contact',
  '/privacy-policy',
  '/terms',
];

// Last-modified dates for the sitemap, where we know them.
export const lastModified = Object.fromEntries(articles.map((a) => [`/insights/${a.slug}`, a.date]));

export function render(url) {
  const meta = {};
  const html = renderToString(
    <MetaContext.Provider value={meta}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </MetaContext.Provider>
  );
  return { html, meta };
}
