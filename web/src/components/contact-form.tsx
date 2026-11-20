'use client';

import { useState, type FormEvent } from 'react';

const CONTACT_ENDPOINT = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? '';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const fieldStyle = {
  width: '100%',
  padding: '12px 14px',
  borderRadius: 12,
  border: '1px solid var(--stroke-hairline)',
  background: 'var(--bg-elevated)',
  color: 'var(--text-primary)',
  font: 'inherit',
  fontSize: 16,
} as const;

const labelStyle = { display: 'grid', gap: 6, fontSize: 15 } as const;

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus('sending');
    try {
      const response = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.get('name'),
          email: data.get('email'),
          message: data.get('message'),
          website: data.get('website'),
        }),
      });
      if (!response.ok) throw new Error('send_failed');
      form.reset();
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return <p>Thank you. Your message is on its way, and we will write back to the email you gave.</p>;
  }

  return (
    <form onSubmit={onSubmit} style={{ display: 'grid', gap: 16 }}>
      <label style={labelStyle}>
        <span>Name (optional)</span>
        <input name="name" type="text" autoComplete="name" maxLength={120} style={fieldStyle} />
      </label>
      <label style={labelStyle}>
        <span>Your email</span>
        <input name="email" type="email" autoComplete="email" required maxLength={254} style={fieldStyle} />
      </label>
      <label style={labelStyle}>
        <span>Message</span>
        <textarea name="message" required rows={6} maxLength={5000} style={{ ...fieldStyle, resize: 'vertical' }} />
      </label>
      <label aria-hidden="true" style={{ position: 'absolute', left: '-10000px', width: 1, height: 1, overflow: 'hidden' }}>
        Website
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>
      <div>
        <button type="submit" className="cta-link" disabled={status === 'sending'} style={{ margin: 0 }}>
          {status === 'sending' ? 'Sending' : 'Send'}
        </button>
      </div>
      {status === 'error' ? (
        <p style={{ opacity: 0.85 }}>The message did not go through. Please try again in a moment.</p>
      ) : null}
    </form>
  );
}
