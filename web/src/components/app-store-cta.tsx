import { StoreLinks } from './store-links';

export function AppStoreCta() {
  return (
    <aside className="cta">
      <p className="cta-title">The full archive lives in the app</p>
      <p className="cta-copy">Every scene so far, sorted by era.</p>
      <StoreLinks />
    </aside>
  );
}
