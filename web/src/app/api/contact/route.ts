import { NextResponse } from 'next/server';

const MAX_NAME = 120;
const MAX_EMAIL = 254;
const MAX_MESSAGE = 5000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface ContactBody {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown;
}

function text(value: unknown): string {
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(request: Request) {
  let body: ContactBody;
  try {
    body = (await request.json()) as ContactBody;
  } catch {
    return NextResponse.json({ error: 'invalid_request' }, { status: 400 });
  }

  // Honeypot: people never see this field, so anything in it is a bot. Pretend all is well.
  if (text(body.website)) return NextResponse.json({ ok: true });

  const name = text(body.name).slice(0, MAX_NAME);
  const email = text(body.email);
  const message = text(body.message);
  if (!EMAIL_PATTERN.test(email) || email.length > MAX_EMAIL) {
    return NextResponse.json({ error: 'invalid_email' }, { status: 400 });
  }
  if (!message || message.length > MAX_MESSAGE) {
    return NextResponse.json({ error: 'invalid_message' }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !to) {
    return NextResponse.json({ error: 'not_configured' }, { status: 500 });
  }

  const from = name ? `${name} <${email}>` : email;
  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: 'Prompted Past <onboarding@resend.dev>',
      to: [to],
      reply_to: email,
      subject: `prompted.past message from ${name || email}`,
      text: `From: ${from}\n\n${message}`,
    }),
  });
  if (!response.ok) {
    return NextResponse.json({ error: 'send_failed' }, { status: 502 });
  }
  const sent = (await response.json()) as { id?: string };
  return NextResponse.json({ ok: true, id: sent.id ?? null });
}
