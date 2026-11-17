import { brand } from '../data/images.js';

// Official 16Dimensions logo — the slogan is part of the image.
export default function Logo() {
  return (
    <span className="logo-lockup">
      <img className="logo" src="/images/brand/logo-stacked.png" alt="16Dimensions" width="638" height="400" />
      <span className="logo-lockup__slogan">Shaping Leaders, Building Future</span>
    </span>
  );
}
