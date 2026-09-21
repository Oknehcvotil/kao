import { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';

import Reveal from './Reveal';
import { site } from '../config/site';

export default function QuoteSection({ language, text }) {
  const [status, setStatus] = useState('idle');

  const submitQuote = async (event) => {
    event.preventDefault();
    setStatus('sending');

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    try {
      const apiBase = (import.meta.env.VITE_API_URL || '').replace(/\/$/, '');
      const response = await fetch(`${apiBase}/api/quote`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, language }),
      });

      if (!response.ok) {
        throw new Error('Request failed');
      }

      form.reset();
      setStatus('success');
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="quote-section" id="quote">
      <div className="section quote-grid">
        <Reveal className="quote-intro">
          <h2>{text.title}</h2>
          <p>{text.text}</p>

          <div className="direct-links">
            <a href={site.phoneHref}>
              <Phone size={17} />
              {site.phone}
            </a>
            <a href={site.emailHref}>
              <Mail size={17} />
              {site.email}
            </a>
          </div>
        </Reveal>

        <Reveal>
          <form className="quote-form" onSubmit={submitQuote}>
            <input
              className="honeypot"
              type="text"
              name="website"
              tabIndex="-1"
              autoComplete="off"
            />

            <div className="form-row">
              <label>
                <span>{text.name}</span>
                <input name="name" required autoComplete="name" />
              </label>

              <label>
                <span>{text.phone}</span>
                <input name="phone" type="tel" required autoComplete="tel" />
              </label>
            </div>

            <label>
              <span>{text.email}</span>
              <input name="email" type="email" required autoComplete="email" />
            </label>

            <label>
              <span>{text.details}</span>
              <textarea name="details" rows="4" required />
            </label>

            <fieldset>
              <legend>{text.reply}</legend>

              <label>
                <input
                  type="radio"
                  name="replyVia"
                  value="phone"
                  defaultChecked
                />
                {text.phoneReply}
              </label>

              <label>
                <input type="radio" name="replyVia" value="email" />
                {text.emailReply}
              </label>

              <label>
                <input type="radio" name="replyVia" value="messenger" />
                {text.messenger}
              </label>
            </fieldset>

            <button
              className="form-button"
              type="submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? text.sending : text.submit}
              <Send size={17} />
            </button>

            {status === 'success' && (
              <p className="form-status success">{text.success}</p>
            )}

            {status === 'error' && (
              <p className="form-status error">{text.error}</p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
