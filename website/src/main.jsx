import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './styles.css';
import './polish.css';

const root = document.getElementById('root');
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// Pre-rendered pages already contain the markup: attach to it instead of re-rendering.
// Pages were rendered without a query string, so a URL with one (e.g. /contact?enquiry=proposal)
// can differ from the static HTML; render those fresh.
if (root.firstElementChild && !window.location.search) {
  ReactDOM.hydrateRoot(root, app);
} else {
  root.textContent = '';
  ReactDOM.createRoot(root).render(app);
}

// Fade out the loading screen from index.html once the page has loaded,
// keeping it up briefly so the logo animation reads rather than flashes.
const preloader = document.getElementById('preloader');
if (preloader) {
  let done = false;
  const hide = () => {
    if (done) return;
    done = true;
    // performance.now() counts from navigation start, i.e. from when the loader first painted
    const wait = Math.max(0, 900 - performance.now());
    setTimeout(() => {
      preloader.classList.add('is-done');
      setTimeout(() => preloader.remove(), 650); // after the 0.55s fade
    }, wait);
  };
  if (document.readyState === 'complete') hide();
  else window.addEventListener('load', hide, { once: true });
  setTimeout(hide, 2500); // a slow image or font shouldn't hold the page back
}
