import Link from 'next/link';

import { SiteNav } from '@/components/site-nav';

export default function NotFound() {
  return (
    <>
      <SiteNav />
      <main className="container">
        <section className="notfound">
          <p className="epigraph">Gallery 404</p>
          <h1 className="hero-title">This wall is bare</h1>
          <p className="dek">
            The scene you came for has been taken down, moved, or was never hung here at all. Every
            other room is still open through the doorway.
          </p>
          <Link href="/" className="cta-link notfound-cta">
            Return to the gallery
          </Link>
        </section>
      </main>
    </>
  );
}
