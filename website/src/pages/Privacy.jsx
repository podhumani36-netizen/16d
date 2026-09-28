import usePageMeta from '../components/usePageMeta.js';
import { PageHero } from '../components/Blocks.jsx';
import { site } from '../data/site.js';

// TODO: have this reviewed and replaced with your final legal text before launch.
export default function Privacy() {
  usePageMeta('Privacy Policy');
  return (
    <>
      <PageHero title="Privacy Policy" />
      <section className="section">
        <div className="container narrow prose">
          <p><em>Draft — to be reviewed before launch.</em></p>
          <h2>What we collect</h2>
          <p>
            When you send an enquiry we collect the details you give us: name, organisation, designation, phone, email and
            information about your training requirement.
          </p>
          <h2>How we use it</h2>
          <p>We use these details only to respond to your enquiry and to provide the services you ask for. We do not sell your data.</p>
          <h2>Contact</h2>
          <p>
            For any questions about your data, email <a href={`mailto:${site.email}`}>{site.email}</a>.
          </p>
        </div>
      </section>
    </>
  );
}
