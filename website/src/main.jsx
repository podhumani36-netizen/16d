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
