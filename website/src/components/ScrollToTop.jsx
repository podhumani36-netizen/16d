import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// On a new page, scroll to the top — or to the section named in the URL, e.g. /#business-problems.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    const target = hash && document.getElementById(decodeURIComponent(hash.slice(1)));
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}
