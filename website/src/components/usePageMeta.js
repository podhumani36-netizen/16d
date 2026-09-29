import { createContext, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { buildMeta, headTags } from '../seo.js';

// During the build-time prerender this holds an object that collects the page's meta,
// so it can be written into the static HTML. In the browser it is null.
export const MetaContext = createContext(null);

// Sets the title, description, canonical URL and link-preview tags for each page
// (blueprint section 10). `options`: { image, type, noindex, jsonLd }.
export default function usePageMeta(title, description, options) {
  const { pathname } = useLocation();
  const meta = buildMeta(pathname, title, description, options);

  const collector = useContext(MetaContext);
  if (collector) Object.assign(collector, meta);

  const key = JSON.stringify(meta);
  useEffect(() => {
    document.title = meta.title;
    for (const [tag, attrs] of headTags(meta)) {
      const [idAttr, valueAttr] = Object.keys(attrs);
      let el = document.head.querySelector(`${tag}[${idAttr}="${attrs[idAttr]}"]`);
      if (!el) {
        el = document.createElement(tag);
        el.setAttribute(idAttr, attrs[idAttr]);
        document.head.appendChild(el);
      }
      el.setAttribute(valueAttr, attrs[valueAttr]);
    }

    const existing = document.getElementById('page-jsonld');
    if (meta.jsonLd) {
      const script = existing || document.createElement('script');
      script.id = 'page-jsonld';
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(meta.jsonLd);
      if (!existing) document.head.appendChild(script);
    } else if (existing) {
      existing.remove();
    }
  }, [key]); // `key` captures every value in `meta`
}
