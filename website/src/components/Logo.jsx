import { brand } from '../data/images.js';
import { site } from '../data/site.js';

// Official 16Dimensions logo with the slogan underneath.
// `light` swaps in the white-text version for dark backgrounds.
export default function Logo({ light = false }) {
  return (
    <span className={`logo-lockup ${light ? 'logo-lockup--light' : ''}`}>
      <img
        className="logo"
        src={light ? brand.logoLight : brand.logo}
        alt="16Dimensions"
        width="203"
        height="44"
      />
      <span className="logo-lockup__slogan">{site.slogan}</span>
    </span>
  );
}
