import { useState, type FormEvent } from 'react';
import { PageHero } from '../components/PageHero';
import { assetUrl } from '../utils/assetUrl';

interface ContactFormState {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  confirmEmail: string;
  service: string;
  describe: string;
  consent: boolean;
}

const INITIAL_FORM: ContactFormState = {
  firstName: '',
  lastName: '',
  email: '',
  company: '',
  confirmEmail: '',
  service: '',
  describe: '',
  consent: false,
};

/** Contact Us page matching Figma frame "Group 77 - Contact Us Page" (119:361). */
export function ContactUsPage() {
  const [form, setForm] = useState<ContactFormState>(INITIAL_FORM);
  const [feedback, setFeedback] = useState<{ type: 'success' | 'error'; text: string } | null>(
    null,
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.firstName.trim() || !form.lastName.trim() || !form.email.trim()) {
      setFeedback({
        type: 'error',
        text: 'Please complete your first name, last name, and email address.',
      });
      return;
    }

    if (!form.consent) {
      setFeedback({
        type: 'error',
        text: 'Please agree to the processing of personal data before submitting.',
      });
      return;
    }

    setFeedback({
      type: 'success',
      text: `Thank you, ${form.firstName.trim()}. Your inquiry has been received by Group 77.`,
    });
    setForm(INITIAL_FORM);
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        description="For general inquiries and partnership discussions, please submit your details below."
        imageSrc="/assets/contact-hero.png"
        imageAlt="Aerial view of city district"
        compact
      />

      <section className="container-1440">
        <div className="contact-section">
          <div>
            <p className="contact-section__eyebrow">Get In Touch</p>
            <h2 className="contact-section__title">Let us know how we can help</h2>

            <div className="contact-section__photo-wrap">
              <img
                src={assetUrl('/assets/contact-baobab.png')}
                alt="Baobab avenue"
                className="contact-section__photo"
              />
              <div className="blue-tint-overlay" />
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-form__row-2">
              <div className="contact-field">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name*"
                  aria-label="First name"
                  required
                  className="contact-field__input"
                  value={form.firstName}
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                />
                <img
                  src={assetUrl('/assets/line-18.svg')}
                  alt=""
                  width={280}
                  height={1}
                  className="contact-field__line"
                />
              </div>

              <div className="contact-field">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name*"
                  aria-label="Last name"
                  required
                  className="contact-field__input"
                  value={form.lastName}
                  onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                />
                <img
                  src={assetUrl('/assets/line-18.svg')}
                  alt=""
                  width={280}
                  height={1}
                  className="contact-field__line"
                />
              </div>
            </div>

            <div className="contact-form__row-2">
              <div className="contact-field">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address*"
                  aria-label="Email Address"
                  required
                  className="contact-field__input"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <img
                  src={assetUrl('/assets/line-18.svg')}
                  alt=""
                  width={280}
                  height={1}
                  className="contact-field__line"
                />
              </div>

              <div className="contact-field">
                <input
                  type="text"
                  name="company"
                  placeholder="Company (optional)"
                  aria-label="Company (optional)"
                  className="contact-field__input"
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                />
                <img
                  src={assetUrl('/assets/line-18.svg')}
                  alt=""
                  width={280}
                  height={1}
                  className="contact-field__line"
                />
              </div>
            </div>

            <div className="contact-field">
              <input
                type="email"
                name="confirmEmail"
                placeholder="Email Address*"
                aria-label="Secondary Email Address"
                className="contact-field__input"
                value={form.confirmEmail}
                onChange={(e) => setForm({ ...form, confirmEmail: e.target.value })}
              />
              <img
                src={assetUrl('/assets/line-22.svg')}
                alt=""
                width={597}
                height={1}
                className="contact-field__line"
              />
            </div>

            <div className="contact-field">
              <select
                name="service"
                aria-label="What service are you interested in?"
                className={`contact-field__select${form.service ? ' has-value' : ''}`}
                value={form.service}
                onChange={(e) => setForm({ ...form, service: e.target.value })}
              >
                <option value="">What service are you interested in?</option>
                <option value="Business Solutions">Business Solutions</option>
                <option value="Infrastructure">Infrastructure</option>
                <option value="Asset Management">Asset Management</option>
                <option value="General Inquiry">General Inquiry</option>
              </select>
              <svg
                className="contact-field__chevron"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M4 6L8 10L12 6"
                  stroke="#1E1E1E"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <img
                src={assetUrl('/assets/line-22.svg')}
                alt=""
                width={597}
                height={1}
                className="contact-field__line"
              />
            </div>

            <div className="contact-field">
              <textarea
                name="describe"
                placeholder="Describe"
                aria-label="Describe your inquiry"
                className="contact-field__textarea"
                value={form.describe}
                onChange={(e) => setForm({ ...form, describe: e.target.value })}
              />
              <img
                src={assetUrl('/assets/line-22.svg')}
                alt=""
                width={597}
                height={1}
                className="contact-field__line"
              />
            </div>

            <label className="contact-consent">
              <input
                type="checkbox"
                className="contact-consent__checkbox"
                checked={form.consent}
                onChange={(e) => setForm({ ...form, consent: e.target.checked })}
              />
              <span>
                By clicking submit you agree to the{' '}
                <strong>processing of personal data</strong>
              </span>
            </label>

            <div className="contact-form__submit-wrap">
              <button type="submit" className="btn-gold">
                Submit
              </button>
            </div>

            {feedback && (
              <p
                role="status"
                className={`contact-form__feedback${
                  feedback.type === 'error' ? ' contact-form__feedback--error' : ''
                }`}
              >
                {feedback.text}
              </p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
