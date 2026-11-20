import type { Metadata } from 'next';
import Link from 'next/link';

import { SiteFooter } from '@/components/site-footer';
import { SiteNav } from '@/components/site-nav';

export const metadata: Metadata = {
  title: 'Privacy',
  description: 'How prompted.past handles data on the web and in the iOS app.',
};

export default function PrivacyPage() {
  return (
    <>
      <SiteNav />
      <main className="room" style={{ paddingBlock: 'clamp(48px, 8vw, 96px)', maxWidth: 720 }}>
        <p className="eyebrow" style={{ letterSpacing: '0.18em', textTransform: 'uppercase', fontSize: 12, opacity: 0.7 }}>
          Legal
        </p>
        <h1 className="display" style={{ marginTop: 12, marginBottom: 24 }}>
          Privacy
        </h1>
        <p style={{ opacity: 0.75, marginBottom: 40 }}>Last updated: 19 September 2026</p>

        <div className="privacy-prose legal-prose" style={{ display: 'grid', gap: 28, lineHeight: 1.65, fontSize: 17 }}>
          <section>
            <h2 style={{ fontSize: 22, marginBottom: 10 }}>Who we are</h2>
            <p>
              prompted.past (“we”) is a museum-style app and website operated by Prompted Past.
              Contact: <Link href="/support#contact">
                write to us through the contact form
              </Link>.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 22, marginBottom: 10 }}>What the product does</h2>
            <p>
              The iOS app delivers curated historical scenes (image, story, narration), a studio that can
              animate paintings you choose, optional membership, and optional one-off studio commissions.
              The website at promptedpast.app shows public stories and studio information.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 22, marginBottom: 10 }}>Data we process</h2>
            <ul style={{ paddingLeft: 22, display: 'grid', gap: 8 }}>
              <li>
                <strong>Anonymous account id.</strong> The app creates an anonymous signed-in device
                identity so membership, saves, and studio pieces stay on that device. We do not require a
                name or email to use the core experience.
              </li>
              <li>
                <strong>Purchases.</strong> Membership and commission packs are processed by Apple and
                RevenueCat. We receive entitlement status (for example, whether membership is active), not
                your full payment card details.
              </li>
              <li>
                <strong>Studio uploads.</strong> If you commission a painting, the image you provide is
                stored to run the animation and show it back to you.
              </li>
              <li>
                <strong>Push tokens.</strong> If you allow notifications, we store a device push token to
                deliver the daily scene reminder.
              </li>
              <li>
                <strong>Diagnostics / analytics.</strong> Optional product analytics may be enabled in some
                builds. Crash and performance signals may be collected by the platform (Apple / Expo) as
                part of normal app operation.
              </li>
              <li>
                <strong>Website.</strong> The marketing site may use Vercel Analytics (aggregated traffic).
                We do not sell personal information.
              </li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: 22, marginBottom: 10 }}>Processors</h2>
            <p>Depending on features you use, data may be processed by:</p>
            <ul style={{ paddingLeft: 22, display: 'grid', gap: 8, marginTop: 10 }}>
              <li>Apple (App Store, In-App Purchases, push delivery)</li>
              <li>RevenueCat (subscription entitlements)</li>
              <li>Supabase (database, auth, storage, edge functions)</li>
              <li>Expo (push infrastructure when configured)</li>
              <li>Cloudflare R2 (public media for scenes and clips)</li>
              <li>Vercel (website hosting and analytics)</li>
              <li>xAI / other generation providers (studio animation, when you use the studio)</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: 22, marginBottom: 10 }}>Retention</h2>
            <p>
              Account-linked studio pieces, saves, and entitlement records are kept while the anonymous
              account exists and the product needs them. You can delete the app; for a full data deletion
              request,{' '}
              <Link href="/support#contact">
                write to us through the contact form
              </Link>{' '}
              and we will remove server-side records we control
              within a reasonable time.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 22, marginBottom: 10 }}>Children</h2>
            <p>
              prompted.past is not directed at children under 13. We do not knowingly collect personal
              information from children under 13.
            </p>
          </section>

          <section>
            <h2 style={{ fontSize: 22, marginBottom: 10 }}>Your choices</h2>
            <ul style={{ paddingLeft: 22, display: 'grid', gap: 8 }}>
              <li>Manage or cancel membership in your Apple ID subscriptions settings.</li>
              <li>Disable notifications in iOS Settings.</li>
              <li>Email us to request deletion of server-side studio or account data we hold.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: 22, marginBottom: 10 }}>Changes</h2>
            <p>
              We may update this page as the product changes. The “Last updated” date above will change
              when we do.
            </p>
          </section>

          <p style={{ marginTop: 12 }}>
            <Link href="/">Back to prompted.past</Link>
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
