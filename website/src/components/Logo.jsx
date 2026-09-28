import { brand } from '../data/images.js';

// Official 16Dimensions logo. `light` swaps in the white-text version for dark backgrounds.
export default function Logo({ light = false }) {
  return (
    <img
      className="logo"
      src={light ? brand.logoLight : brand.logo}
      alt="16Dimensions"
      width="203"
      height="44"
    />
  );
}
