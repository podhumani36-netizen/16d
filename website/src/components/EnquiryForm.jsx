import { useState } from 'react';
import { site } from '../data/site.js';

// Blueprint section 09 — Name, Organisation, Designation, Phone, Email,
// Requirement, Participants and Preferred Location.

export const enquiryTypes = {
  training: 'Request training',
  proposal: 'Customised training proposal',
  profile: 'Corporate profile / capability brochure',
  posh: 'PoSH / ICC support',
  checklist: 'Free checklist',
};

const empty = {
  name: '',
  organisation: '',
  designation: '',
  phone: '',
  email: '',
  requirement: '',
  participants: '',
  location: '',
};

export default function EnquiryForm({ type = 'training', defaultRequirement = '' }) {
  const [values, setValues] = useState({ ...empty, requirement: defaultRequirement });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | sent | mailto | error

  const set = (field) => (e) => setValues((v) => ({ ...v, [field]: e.target.value }));

  function validate() {
    const e = {};
    if (!values.name.trim()) e.name = 'Please enter your name.';
    if (!values.organisation.trim()) e.organisation = 'Please enter your organisation.';
    if (!values.email.trim() && !values.phone.trim()) {
      e.email = 'Please give an email or phone number so we can reply.';
    } else if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      e.email = 'Please enter a valid email address.';
    }
    if (values.phone && !/^[+\d][\d\s-]{6,}$/.test(values.phone)) e.phone = 'Please enter a valid phone number.';
    if (!values.requirement.trim()) e.requirement = 'Tell us briefly what you need.';
    return e;
  }

  async function onSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length) return;

    const payload = { enquiryType: enquiryTypes[type] || enquiryTypes.training, ...values };

    if (site.formEndpoint) {
      setStatus('sending');
      try {
        const res = await fetch(site.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        setStatus('sent');
        setValues(empty);
      } catch {
        setStatus('error');
      }
      return;
    }

    // No form service configured yet: open the visitor's email app with the details filled in.
    const body = [
      `Enquiry type: ${payload.enquiryType}`,
      `Name: ${values.name}`,
      `Organisation: ${values.organisation}`,
      `Designation: ${values.designation}`,
      `Phone: ${values.phone}`,
      `Email: ${values.email}`,
      `Participants: ${values.participants}`,
      `Preferred location: ${values.location}`,
      '',
      'Requirement:',
      values.requirement,
    ].join('\n');
    const subject = `${payload.enquiryType} — ${values.organisation}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('mailto');
  }

  if (status === 'sent') {
    return (
      <div className="form-done" role="status">
        <h3>Thank you — we have your enquiry.</h3>
        <p>Our team will get back to you within one working day.</p>
      </div>
    );
  }

  const field = (name, label, props = {}) => (
    <div className={`field ${errors[name] ? 'field--error' : ''}`}>
      <label htmlFor={`f-${name}`}>
        {label}
        {props.required && <span aria-hidden="true"> *</span>}
      </label>
      <input
        id={`f-${name}`}
        name={name}
        value={values[name]}
        onChange={set(name)}
        aria-invalid={!!errors[name]}
        aria-describedby={errors[name] ? `e-${name}` : undefined}
        {...props}
        required={undefined}
      />
      {errors[name] && (
        <p className="field__err" id={`e-${name}`}>
          {errors[name]}
        </p>
      )}
    </div>
  );

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form__grid">
        {field('name', 'Name', { required: true, autoComplete: 'name' })}
        {field('organisation', 'Organisation', { required: true, autoComplete: 'organization' })}
        {field('designation', 'Designation', { autoComplete: 'organization-title' })}
        {field('phone', 'Phone', { type: 'tel', autoComplete: 'tel', inputMode: 'tel' })}
        {field('email', 'Email', { type: 'email', autoComplete: 'email' })}
        {field('participants', 'No. of participants', { inputMode: 'numeric' })}
      </div>
      {field('location', 'Preferred location', { placeholder: 'e.g. Chennai, on-site, virtual' })}
      <div className={`field ${errors.requirement ? 'field--error' : ''}`}>
        <label htmlFor="f-requirement">
          Requirement<span aria-hidden="true"> *</span>
        </label>
        <textarea
          id="f-requirement"
          rows={4}
          value={values.requirement}
          onChange={set('requirement')}
          aria-invalid={!!errors.requirement}
          aria-describedby={errors.requirement ? 'e-requirement' : undefined}
          placeholder="What challenge would you like to solve? Who is the audience?"
        />
        {errors.requirement && (
          <p className="field__err" id="e-requirement">
            {errors.requirement}
          </p>
        )}
      </div>

      <button className="btn btn--primary btn--block" type="submit" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : 'Send enquiry'}
      </button>

      {status === 'mailto' && (
        <p className="form__note" role="status">
          Your email app should have opened with the details filled in — just press send. If it didn't, email us at{' '}
          <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      )}
      {status === 'error' && (
        <p className="form__note form__note--error" role="alert">
          Sorry, something went wrong. Please try again or email <a href={`mailto:${site.email}`}>{site.email}</a>.
        </p>
      )}
      <p className="form__small">We use your details only to respond to this enquiry.</p>
    </form>
  );
}
