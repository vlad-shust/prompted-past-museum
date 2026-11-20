/**
 * Keep this module import-free. src/content/scenes/painting-source.ts pulls
 * it in, and src/content is shared with scripts/ and web/, whose tsconfigs
 * do not (or only partly) know the app's `@/` alias. Anything this file
 * needs is defined here, not imported.
 */

/** Where app data comes from: bundled content, or Supabase. */
export type DataMode = 'mock' | 'live';

/** Empty by default; set EXPO_PUBLIC_MEDIA_BASE_URL to serve clips from a bucket. */
const MEDIA_BUCKET = '';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL ?? '';
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? '';
const requestedMode = process.env.EXPO_PUBLIC_DATA_MODE ?? 'auto';

const hasSupabaseConfig = supabaseUrl.length > 0 && supabaseAnonKey.length > 0;

function resolveDataMode(): DataMode {
  if (requestedMode === 'mock') return 'mock';
  if (requestedMode === 'live') {
    if (hasSupabaseConfig) return 'live';
    console.warn('[env] EXPO_PUBLIC_DATA_MODE=live but Supabase env is missing — falling back to mock');
    return 'mock';
  }
  return hasSupabaseConfig ? 'live' : 'mock';
}

export const env = {
  dataMode: resolveDataMode(),
  supabaseUrl,
  supabaseAnonKey,
  revenueCatIosKey: process.env.EXPO_PUBLIC_REVENUECAT_IOS_KEY ?? '',
  posthogKey: process.env.EXPO_PUBLIC_POSTHOG_KEY ?? '',
  posthogHost: process.env.EXPO_PUBLIC_POSTHOG_HOST ?? 'https://us.i.posthog.com',
  /** Public web gallery origin; empty until the web/ app is deployed. */
  webUrl: (process.env.EXPO_PUBLIC_WEB_URL ?? '').replace(/\/+$/, ''),
  /** Public media bucket (R2) serving pre-generated clips; env overrides the fallback. */
  mediaBaseUrl: (process.env.EXPO_PUBLIC_MEDIA_BASE_URL || MEDIA_BUCKET).replace(/\/+$/, ''),
  /** Public paintings bucket (R2) serving hi-res stills; empty = original sources. */
  paintingsBaseUrl: (process.env.EXPO_PUBLIC_PAINTINGS_BASE_URL ?? '').replace(/\/+$/, ''),
} as const;

/** Full URL for a file in the media bucket. */
export function mediaUrl(file: string): string {
  return `${env.mediaBaseUrl}/${file}`;
}

/**
 * R2-first with a public fallback: a clone with zero env still loads every
 * painting from its original source (mock-first stays intact).
 */
export function paintingUrl(file: string, fallback: string): string {
  return env.paintingsBaseUrl.length > 0 ? `${env.paintingsBaseUrl}/${file}` : fallback;
}
