import usePageMeta from '../components/usePageMeta.js';
import { PageHero, ButtonLink } from '../components/Blocks.jsx';

export default function NotFound() {
  usePageMeta('Page not found');
  return (
    <PageHero title="Page not found" intro="Sorry — the page you are looking for doesn't exist or has moved.">
      <ButtonLink to="/">Go to homepage</ButtonLink>
      <ButtonLink to="/contact" variant="secondary">Contact us</ButtonLink>
    </PageHero>
  );
}
