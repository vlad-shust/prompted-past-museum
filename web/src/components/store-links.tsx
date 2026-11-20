import { webEnv } from '@/lib/env';

export function StoreLinks() {
  return (
    <div className="stores">
      {webEnv.appStoreUrl ? (
        <a className="btn" href={webEnv.appStoreUrl}>
          Download on the App Store
        </a>
      ) : (
        <span className="btn-soon">Coming to the App Store</span>
      )}
      {webEnv.playStoreUrl ? (
        <a className="btn btn-ghost" href={webEnv.playStoreUrl}>
          Get it on Google Play
        </a>
      ) : (
        <span className="btn-soon">Coming to Google Play</span>
      )}
    </div>
  );
}
