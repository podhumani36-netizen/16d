// SEO helpers shared by the browser (usePageMeta) and the build-time prerender.
import { site } from './data/site.js';

export const SITE_URL = `https://${site.domain}`;

const DEFAULT_TITLE = '16Dimensions | Behavioural Training & People Performance Solutions';
const DEFAULT_DESCRIPTION =
  '16Dimensions is a corporate training company in Chennai offering leadership, communication, customer experience, retail and hospitality training, and PoSH & ICC services.';
// Used for link previews (WhatsApp, LinkedIn, etc.) when a page has no image of its own.
const DEFAULT_IMAGE = '/images/training/training-052.jpg';

export const absoluteUrl = (path) => (/^https?:/.test(path) ? path : SITE_URL + path);

// Everything a page's <head> needs, from the values a page passes to usePageMeta.
export function buildMeta(pathname, title, description, { image, type, noindex, jsonLd } = {}) {
  const path = pathname === '/' ? '/' : pathname.replace(/\/+$/, '');
  return {
    title: title ? `${title} | 16Dimensions` : DEFAULT_TITLE,
    description: description || DEFAULT_DESCRIPTION,
    url: SITE_URL + path,
    image: absoluteUrl(image || DEFAULT_IMAGE),
    type: type || 'website',
    noindex: Boolean(noindex),
    jsonLd: jsonLd || null,
  };
}

// The <head> tags for a page, as [tagName, attributes]. The first attribute identifies the tag.
export function headTags(m) {
  return [
    ['meta', { name: 'description', content: m.description }],
    ['meta', { name: 'robots', content: m.noindex ? 'noindex, follow' : 'index, follow' }],
    ['link', { rel: 'canonical', href: m.url }],
    ['meta', { property: 'og:type', content: m.type }],
    ['meta', { property: 'og:site_name', content: site.name }],
    ['meta', { property: 'og:locale', content: 'en_IN' }],
    ['meta', { property: 'og:title', content: m.title }],
    ['meta', { property: 'og:description', content: m.description }],
    ['meta', { property: 'og:url', content: m.url }],
    ['meta', { property: 'og:image', content: m.image }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: m.title }],
    ['meta', { name: 'twitter:description', content: m.description }],
    ['meta', { name: 'twitter:image', content: m.image }],
  ];
}

// Company details for search engines, included on every page.
export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: site.name,
  description: DEFAULT_DESCRIPTION,
  url: `${SITE_URL}/`,
  logo: `${SITE_URL}/images/brand/logo.png`,
  image: absoluteUrl(DEFAULT_IMAGE),
  email: site.email,
  telephone: site.phone,
  founder: { '@type': 'Person', name: 'Kavitha Sasi' },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'IN',
  },
  areaServed: 'IN',
  sameAs: Object.values(site.social).filter(Boolean),
};
