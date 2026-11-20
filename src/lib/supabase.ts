import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient, isAuthRetryableFetchError, processLock } from '@supabase/supabase-js';
import type { SupabaseClient, Session } from '@supabase/supabase-js';
import { AppState } from 'react-native';

import { env } from './env';
import { mirrorSessionToKeychain, readRefreshToken } from './session-keychain';

let client: SupabaseClient | null = null;

/**
 * Lazily constructed so mock mode never touches Supabase.
 * Session storage is AsyncStorage (official RN quickstart pattern); the
 * refresh token is additionally mirrored to the Keychain so the account
 * outlives a reinstall (lib/session-keychain.ts). Hardening path if
 * accounts grow beyond anonymous: the LargeSecureStore AES pattern from the
 * Supabase docs.
 */
export function getSupabase(): SupabaseClient {
  if (client) return client;
  if (env.dataMode !== 'live') {
    throw new Error('Supabase client requested in mock mode — check env resolution');
  }
  client = createClient(env.supabaseUrl, env.supabaseAnonKey, {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
      lock: processLock,
    },
  });
  mirrorSessionToKeychain(client);
  AppState.addEventListener('change', (state) => {
    if (!client) return;
    if (state === 'active') void client.auth.startAutoRefresh();
    else void client.auth.stopAutoRefresh();
  });
  return client;
}

/**
 * After a reinstall AsyncStorage is empty but the Keychain may still hold
 * the old account's refresh token. Returns its session, or null when there
 * is nothing to recover. Throws when the server could not be reached: an
 * offline launch must not mint a second identity for a visitor who still
 * has one.
 */
async function recoverSession(supabase: SupabaseClient): Promise<Session | null> {
  const refreshToken = await readRefreshToken();
  if (!refreshToken) return null;
  const { data, error } = await supabase.auth.refreshSession({ refresh_token: refreshToken });
  if (error) {
    if (isAuthRetryableFetchError(error)) throw error;
    // Rejected outright (rotated past, revoked, account deleted): the client
    // has already dropped it from the Keychain via SIGNED_OUT.
    console.warn('[session] recovery rejected, starting fresh:', error.message);
    return null;
  }
  return data.session;
}

let signInPromise: Promise<Session> | null = null;

/**
 * The app has no sign-up flow in v1: every device gets an anonymous
 * Supabase user on first live-mode use (enable Anonymous Sign-ins in the
 * dashboard). RevenueCat is keyed to this user id via Purchases.logIn.
 *
 * Concurrent first-launch callers (bootstrap + saves/forges queries) would
 * each see no session and each sign in, minting several anonymous users.
 * The in-flight sign-in is memoized so they await one shared promise.
 *
 * Before signing in fresh, the Keychain is checked for a previous install's
 * refresh token (lib/session-keychain.ts), so a reinstall keeps its account.
 */
export async function ensureSession(): Promise<Session> {
  const supabase = getSupabase();
  const { data } = await supabase.auth.getSession();
  if (data.session) return data.session;
  signInPromise ??= (async () => {
    const recovered = await recoverSession(supabase);
    if (recovered) return recovered;
    const { data: anon, error } = await supabase.auth.signInAnonymously();
    if (error || !anon.session) {
      throw new Error(`Anonymous sign-in failed: ${error?.message ?? 'no session returned'}`);
    }
    return anon.session;
  })().finally(() => {
    signInPromise = null;
  });
  return signInPromise;
}
