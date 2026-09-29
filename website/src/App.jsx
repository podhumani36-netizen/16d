import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Founder from './pages/Founder.jsx';
import Solutions from './pages/Solutions.jsx';
import SolutionDetail from './pages/SolutionDetail.jsx';
import Industries from './pages/Industries.jsx';
import IndustryDetail from './pages/IndustryDetail.jsx';
import Posh from './pages/Posh.jsx';
import SuccessStories from './pages/SuccessStories.jsx';
import Insights from './pages/Insights.jsx';
import Article from './pages/Article.jsx';
import Contact from './pages/Contact.jsx';
import Privacy from './pages/Privacy.jsx';
import Terms from './pages/Terms.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <a className="skip-link" href="#main">Skip to content</a>
      <Header />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/kavitha-sasi" element={<Founder />} />
          <Route path="/training-solutions" element={<Solutions />} />
          <Route path="/training-solutions/:slug" element={<SolutionDetail />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:slug" element={<IndustryDetail />} />
          <Route path="/posh" element={<Posh />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/insights" element={<Insights />} />
          <Route path="/insights/:slug" element={<Article />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
