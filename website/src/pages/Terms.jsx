import { Link } from 'react-router-dom';
import usePageMeta from '../components/usePageMeta.js';
import { PageHero } from '../components/Blocks.jsx';
import { site } from '../data/site.js';

// TODO: have this reviewed and replaced with your final legal text before launch.
export default function Terms() {
  usePageMeta('Terms of Use', `Terms for using the ${site.name} website.`);
  return (
    <>
      <PageHero title="Terms of Use" />
      <section className="section">
        <div className="container narrow prose">
          <p><em>Draft — to be reviewed before launch.</em></p>
          <h2>About this website</h2>
          <p>
            This website is run by {site.name}, {site.location}. By using it you agree to these terms. If you do not agree,
            please do not use the site.
          </p>
          <h2>Information on this site</h2>
          <p>
            The content on this site is general information about our training and PoSH services. It is not legal advice.
            Programme details, formats and fees are confirmed in a written proposal for each engagement.
          </p>
          <h2>Intellectual property</h2>
          <p>
            The text, photographs, logos and materials on this site belong to {site.name} or are used with permission. You may
            share links to our pages, but please do not copy or reuse our content without written permission. Client names
            and logos belong to their owners.
          </p>
          <h2>Links to other websites</h2>
          <p>We are not responsible for the content of websites we link to, such as social media pages.</p>
          <h2>Your information</h2>
          <p>
            How we handle the details you send us is explained in our <Link to="/privacy-policy">Privacy Policy</Link>.
          </p>
          <h2>Contact</h2>
          <p>
            Questions about these terms? Email <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
