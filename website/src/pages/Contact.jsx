import { useSearchParams } from 'react-router-dom';
import usePageMeta from '../components/usePageMeta.js';
import EnquiryForm, { enquiryTypes } from '../components/EnquiryForm.jsx';
import { PageHero } from '../components/Blocks.jsx';
import { site, whatsappLink } from '../data/site.js';
import { heroes } from '../data/images.js';

const intros = {
  training: 'Tell us about your requirement and we\'ll get back to you within one working day.',
  proposal: 'Share a few details and we\'ll prepare a customised training proposal for your organisation.',
  profile: 'Leave your details and we\'ll send you the 16Dimensions corporate profile.',
  posh: 'Tell us what PoSH support you need — awareness, ICC training or external member support.',
  checklist: 'Tell us which checklist you would like and we\'ll email it to you.',
};

const defaults = {
  profile: 'Please send me the 16Dimensions corporate profile.',
  checklist: 'Please send me the checklist: ',
  posh: 'PoSH support needed for: ',
};

export default function Contact() {
  const [params] = useSearchParams();
  const raw = params.get('enquiry');
  const type = raw && enquiryTypes[raw] ? raw : 'training';
  usePageMeta('Contact', 'Request training, a customised proposal or PoSH support from 16Dimensions, Chennai.');
  const wa = whatsappLink();

  return (
    <>
      <PageHero image={heroes.contact} eyebrow="Contact" title={enquiryTypes[type]} intro={intros[type]} />
      <section className="section">
        <div className="container contact">
          <div className="contact__form card">
            {/* key resets the form when the enquiry type changes */}
            <EnquiryForm key={type} type={type} defaultRequirement={defaults[type] || ''} />
          </div>
          <aside className="contact__side">
            <h2 className="h-sm">Other ways to reach us</h2>
            <ul className="contact__list">
              {wa && (
                <li>
                  <span>WhatsApp</span>
                  <a href={wa} target="_blank" rel="noopener noreferrer">Quick enquiry for HR, L&amp;D and business owners</a>
                </li>
              )}
              {site.phone && (
                <li>
                  <span>Phone</span>
                  <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
                </li>
              )}
              {site.email && (
                <li>
                  <span>Email</span>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
              )}
              <li>
                <span>Service area</span>
                <p>{site.location}</p>
              </li>
            </ul>
            <div className="card card--accent">
              <h3>What happens next?</h3>
              <ol className="next-steps">
                <li>We call you to understand your business need.</li>
                <li>We recommend a programme outline and format.</li>
                <li>You receive a customised proposal — no obligation.</li>
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
