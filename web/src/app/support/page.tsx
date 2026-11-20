import type { Metadata } from 'next';
import Link from 'next/link';

import { ContactForm } from '@/components/contact-form';
import { SiteFooter } from '@/components/site-footer';
import { SiteNav } from '@/components/site-nav';

export const metadata: Metadata = {
  title: 'Support',
  description: 'Help and contact for prompted.past.',
};

export default function SupportPage() {
  return (
    <>
      <SiteNav />
      <main className="room" style={{ paddingBlock: 'clamp(48px, 8vw, 96px)', maxWidth: 720 }}>
        <p style={{ letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: 12, opacity: 0.7 }}>Help</p>
        <h1 className="display" style={{ marginTop: 12, marginBottom: 24 }}>
          Support
        </h1>
        <p style={{ opacity: 0.85, marginBottom: 40, lineHeight: 1.65, fontSize: 17 }}>
          Need a hand with prompted.past? Write to us below and we will get back to you as soon as we can.
        </p>

        <div className="legal-prose" style={{ display: 'grid', gap: 28, lineHeight: 1.65, fontSize: 17 }}>
          <section id="contact">
            <h2 style={{ fontSize: 22, marginBottom: 10 }}>Contact</h2>
            <ContactForm />
          </section>

          <section>
            <h2 style={{ fontSize: 22, marginBottom: 10 }}>Subscriptions</h2>
            <p>
              Memberships renew through Apple. To cancel or change billing, open iPhone Settings, then Apple
              ID, then Subscriptions, then prompted.past.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 22, marginBottom: 10 }}>Studio commissions</h2>
            <p>
              Commission packs are one-time purchases of credits used when you bring a painting to life.
              If a purchase succeeded but credits did not appear, include your Apple receipt date in the
              message.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 22, marginBottom: 10 }}>Policies</h2>
            <p>
              <Link href="/privacy">Privacy</Link>
              {' · '}
              <Link href="/terms">Terms of Use</Link>
            </p>
          </section>

          <p>
            <Link href="/">Back to prompted.past</Link>
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
