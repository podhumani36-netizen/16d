// Central settings for the whole site. Fill in the TODO values before going live.
// Anything left empty ('') is hidden on the site instead of showing a broken link.

export const site = {
  name: '16Dimensions',
  tagline: 'Behavioural Training & People Performance Solutions',
  message: "We Don't Train People. We Transform Behaviour That Drives Performance.",
  domain: 'www.16dimensions.com',

  email: 'kavitha@16dimensions.com',
  phone: '+91 99629 32007',
  // WhatsApp number in international format, digits only.
  whatsapp: '919962932007',
  location: 'Chennai, Tamil Nadu — training delivered across India',

  // TODO: upload the corporate profile PDF to /public/downloads/ and set the path,
  // e.g. '/downloads/16Dimensions-Corporate-Profile.pdf'. While empty, the
  // "Download corporate profile" button opens the contact form instead.
  corporateProfileUrl: '',

  // Optional: a form service URL (Formspree, Getform, your own API) that accepts
  // a JSON POST. While empty, the enquiry form opens the visitor's email app.
  formEndpoint: '',

  // TODO: add real profile URLs. Empty ones are hidden.
  social: {
    linkedin: '',
    instagram: '',
    youtube: '',
    facebook: '',
  },

  // Keep these figures current (blueprint section 07).
  stats: [
    { value: '15+', label: 'Years of training experience' },
    { value: '130,000+', label: 'People trained' },
    { value: '6', label: 'Industries served' },
    { value: '5', label: 'Solution families' },
  ],
};

export function whatsappLink(text = 'Hi 16Dimensions, I would like to enquire about training.') {
  if (!site.whatsapp) return '';
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function profileLink() {
  return site.corporateProfileUrl || '/contact?enquiry=profile';
}
