import { useEffect } from 'react';

// Sets the browser title and meta description for each page (blueprint section 10).
export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | 16Dimensions` : '16Dimensions | Behavioural Training & People Performance Solutions';
    if (description) {
      let tag = document.querySelector('meta[name="description"]');
      if (!tag) {
        tag = document.createElement('meta');
        tag.name = 'description';
        document.head.appendChild(tag);
      }
      tag.content = description;
    }
  }, [title, description]);
}
