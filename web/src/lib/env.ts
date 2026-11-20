const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

export const webEnv = {
  supabaseUrl,
  supabaseAnonKey,
  /** Zero env = bundled demo content, mirroring the app's mock mode. */
  hasSupabase: supabaseUrl.length > 0 && supabaseAnonKey.length > 0,
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000').replace(/\/+$/, ''),
  appStoreUrl: process.env.NEXT_PUBLIC_APP_STORE_URL ?? '',
  playStoreUrl: process.env.NEXT_PUBLIC_PLAY_STORE_URL ?? '',
  /** Public media bucket serving the studio's woken clips; empty when not configured. */
  mediaBaseUrl: (
    process.env.NEXT_PUBLIC_MEDIA_BASE_URL ?? ''
  ).replace(/\/+$/, ''),
} as const;
