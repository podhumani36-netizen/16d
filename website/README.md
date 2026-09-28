# 16Dimensions Website (React)

Built from `16Dimensions_Website_Blueprint_Print_Ready.pdf` with React + Vite + React Router.

## Run it

```bash
npm install
npm run dev        # local preview at http://localhost:5173
npm run build      # production files go into dist/
```

## Where to edit content

Almost all text lives in `src/data/`, so you rarely need to touch page code.

| File | What it holds |
|---|---|
| `src/data/site.js` | Email, phone, WhatsApp, social links, stats, corporate-profile PDF, form endpoint |
| `src/data/solutions.js` | The 5 training solution families |
| `src/data/industries.js` | The 6 industry landing pages |
| `src/data/content.js` | Pain points, methodology, PoSH services, case studies, testimonials, client logos, insights, checklists |

## Before launch (blueprint checklist)

- [ ] `site.js`: confirm `email`, and add `phone`, `whatsapp` and `social` links. Empty values stay hidden, and the WhatsApp button appears once a number is set.
- [ ] Logo: replace the text logo in `src/components/Logo.jsx` with the official file.
- [ ] Photos: every striped "photo" box is a `<PhotoSlot>`. Put images in `public/images/` and pass `src="/images/…"` and `alt="…"`.
- [ ] Case studies and testimonials in `content.js` are **samples** (they show a yellow "Sample" badge). Replace them with approved real ones and set `sample: false`.
- [ ] Client logos: add files to `public/logos/` and list them in `clientLogos` (only with permission).
- [ ] Corporate profile: put the PDF in `public/downloads/` and set `corporateProfileUrl`.
- [ ] Checklists: put the PDFs in `public/downloads/` and set `file` in `leadMagnets`.
- [ ] Kavitha's profile: replace the `[bracketed]` items in `src/pages/Founder.jsx`.
- [ ] Company description: `src/pages/About.jsx`.
- [ ] Privacy Policy: `src/pages/Privacy.jsx` is a draft; have it reviewed.
- [ ] Enquiry form: by default it opens the visitor's email app. To receive submissions directly, create a free form at formspree.io (or similar) and paste its URL into `formEndpoint`.

## Deploy to Hostinger

1. `npm run build`
2. Upload **the contents of `dist/`** into `public_html/`. Include the hidden `.htaccess` file, which makes page URLs like `/posh` work on refresh.
3. Before uploading, remove the old WordPress install from `public_html/`. It contained backdoors (see the security review), so don't leave any of those files behind.
