import type { Metadata } from 'next';
import Link from 'next/link';

import { SiteFooter } from '@/components/site-footer';
import { SiteNav } from '@/components/site-nav';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms for using prompted.past on the web and in the iOS app.',
};

export default function TermsPage() {
  return (
    <>
      <SiteNav />
      <main className="room" style={{ paddingBlock: 'clamp(48px, 8vw, 96px)', maxWidth: 720 }}>
        <p style={{ letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: 12, opacity: 0.7 }}>Legal</p>
        <h1 className="display" style={{ marginTop: 12, marginBottom: 24 }}>
          Terms of Use
        </h1>
        <p style={{ opacity: 0.75, marginBottom: 40 }}>Last updated: 19 September 2026</p>

        <div className="legal-prose" style={{ display: 'grid', gap: 28, lineHeight: 1.65, fontSize: 17 }}>
          <section>
            <h2 style={{ fontSize: 22, marginBottom: 10 }}>Agreement</h2>
            <p>
              By using prompted.past (the website and the iOS app), you agree to these Terms. If you do not
              agree, do not use the service. The product is operated by Prompted Past.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 22, marginBottom: 10 }}>The service</h2>
            <p>
              prompted.past offers curated historical scenes, optional membership access, and optional
              studio commissions that animate paintings. Features may change as the product evolves.
              Demo and mock content may appear when live services are unavailable.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 22, marginBottom: 10 }}>Accounts</h2>
            <p>
              The app may create an anonymous device account. You are responsible for activity on that
              device. Do not attempt to disrupt, scrape, or overload the service.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 22, marginBottom: 10 }}>Purchases</h2>
            <p>
              Memberships and commission packs are sold as Apple In-App Purchases. Pricing is shown in the
              app and charged by Apple. Manage or cancel auto-renewing subscriptions in your Apple ID
              settings. Refunds are handled by Apple under their policies. Commission credits are
              consumable and spent when you run a studio commission.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 22, marginBottom: 10 }}>Your content</h2>
            <p>
              If you upload an image to the studio, you must have the rights to use it. You grant us a
              limited license to store and process that image to deliver the studio feature to you. Do not
              upload illegal, infringing, or abusive material.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 22, marginBottom: 10 }}>Artwork and stories</h2>
            <p>
              Historical images are typically public-domain works credited in-app. Stories are editorial
              content. Do not redistribute our narrations, generated studio outputs, or site copy as your
              own product without permission.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 22, marginBottom: 10 }}>Disclaimer</h2>
            <p>
              The service is provided “as is.” Historical commentary aims to be careful, but it may
              contain errors. We are not liable for indirect or consequential damages to the extent
              allowed by law.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 22, marginBottom: 10 }}>Contact</h2>
            <p>
              Questions: <Link href="/support#contact">
                write to us through the contact form
              </Link>. See also our <Link href="/privacy">Privacy</Link> page.
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
