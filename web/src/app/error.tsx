'use client'; // Error boundaries must be Client Components

import { useEffect } from 'react';

import { SiteNav } from '@/components/site-nav';

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <SiteNav />
      <main className="container">
        <section className="notfound">
          <p className="epigraph">The lights flickered</p>
          <h1 className="hero-title">This gallery went dark</h1>
          <p className="dek">
            Something came loose while we were hanging the scene. The rest of the museum is
            untouched: try this wall again, or step back through the doorway.
          </p>
          <button type="button" onClick={() => unstable_retry()} className="cta-link notfound-cta">
            Relight the room
          </button>
        </section>
      </main>
    </>
  );
}
