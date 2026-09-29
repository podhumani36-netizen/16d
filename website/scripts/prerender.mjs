// Runs after `vite build`: writes a static HTML file for every page (content, title,
// description, canonical and link-preview tags already in place), plus sitemap.xml and robots.txt.
//
// Output (served by public/.htaccess):
//   dist/index.html              the home page
//   dist/_pages/<route>.html     every other page, e.g. _pages/insights/communication-skills-2025.html
//   dist/spa.html                empty app shell for any other URL (the app shows "Page not found")
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const ssrDir = path.join(root, '.ssr');

const { render, routes, lastModified, headTags, organizationJsonLd, SITE_URL } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
);

const template = fs.readFileSync(path.join(dist, 'index.html'), 'utf8');

const escapeAttr = (value) =>
  String(value).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const jsonLdScript = (data, id) =>
  `<script type="application/ld+json"${id ? ` id="${id}"` : ''}>${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;

function renderPage(meta, appHtml) {
  const tags = headTags(meta).map(
    ([tag, attrs]) => `<${tag} ${Object.entries(attrs).map(([k, v]) => `${k}="${escapeAttr(v)}"`).join(' ')} />`
  );
  const head = [
    ...tags,
    jsonLdScript(organizationJsonLd),
    // same id usePageMeta uses, so the browser updates it rather than adding a second one
    meta.jsonLd && jsonLdScript(meta.jsonLd, 'page-jsonld'),
  ].filter(Boolean);

  return template
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeAttr(meta.title)}</title>`)
    .replace(/\s*<meta\s+name="description"[\s\S]*?\/>/, '')
    .replace('<!--app-head-->', head.join('\n    '))
    .replace('<!--app-html-->', appHtml);
}

function write(file, content) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content);
}

// App shell for URLs that aren't pre-rendered: default title and description, company details only.
write(path.join(dist, 'spa.html'), template.replace('<!--app-head-->', jsonLdScript(organizationJsonLd)).replace('<!--app-html-->', ''));

for (const route of routes) {
  const { html, meta } = render(route);
  if (!meta.title) throw new Error(`${route} did not call usePageMeta`);
  if (meta.noindex) throw new Error(`${route} rendered "Page not found" — check the routes list`);
  const file = route === '/' ? path.join(dist, 'index.html') : path.join(dist, '_pages', `${route.slice(1)}.html`);
  write(file, renderPage(meta, html));
}

write(
  path.join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map((r) => `  <url><loc>${SITE_URL}${r}</loc>${lastModified[r] ? `<lastmod>${lastModified[r]}</lastmod>` : ''}</url>`)
  .join('\n')}
</urlset>
`
);

write(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);

fs.rmSync(ssrDir, { recursive: true, force: true });
console.log(`Pre-rendered ${routes.length} pages, sitemap.xml and robots.txt`);
