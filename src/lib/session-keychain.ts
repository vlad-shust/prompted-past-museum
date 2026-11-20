import * as SecureStore from 'expo-secure-store';
import type { AuthChangeEvent, Session, SupabaseClient } from '@supabase/supabase-js';

/**
 * Keeps the visitor's Supabase refresh token in the iOS Keychain so the
 * anonymous account survives a reinstall on the same iPhone.
 *
 * The session itself lives in AsyncStorage (lib/supabase.ts), which iOS
 * wipes with the app. Keychain items outlive the app (long-standing,
 * undocumented Apple behaviour), so on a cold start with no session,
 * ensureSession() tries this token before minting a new anonymous user —
 * and the synced walk (lib/progress-sync.ts) comes back with it.
 *
 * Only the refresh token is kept: it is tiny (the Keychain caps values at
 * 2 KB; an access-token JWT would not fit) and it is all a recovery needs.
 * Supabase rotates it on every refresh, so the copy is rewritten on every
 * auth event that carries a session — including INITIAL_SESSION on launch,
 * which heals a copy left one rotation behind by a kill mid-refresh.
 *
 * What this does not do: reach another device. expo-secure-store cannot
 * mark items for iCloud Keychain, so a phone set up from scratch starts
 * from nothing; that needs a real sign-in. See the delete-account and reset
 * flows for the places that must forget the token on purpose.
 */

const KEY = 'pp.session.refresh-token.v1';

const OPTIONS: SecureStore.SecureStoreOptions = {
  // Readable after the first unlock following a boot (an in-app refresh can
  // land while the phone is locked in a pocket), and — unlike the
  // *_THIS_DEVICE_ONLY classes — migrated by encrypted backups and
  // device-to-device transfer, so a new iPhone set up from the old one keeps
  // the account.
  keychainAccessible: SecureStore.AFTER_FIRST_UNLOCK,
};

/** Last value written (or read) this process, to skip redundant Keychain writes. */
let known: string | null | undefined;
/** Keychain writes are serialized so two quick rotations can't land out of order. */
let queue: Promise<void> = Promise.resolve();

function warn(action: string, error: unknown): void {
  console.warn(`[session-keychain] ${action} failed:`, error instanceof Error ? error.message : error);
}

function enqueue(action: string, task: () => Promise<void>): Promise<void> {
  queue = queue.then(task).catch((error) => warn(action, error));
  return queue;
}

export async function readRefreshToken(): Promise<string | null> {
  await queue;
  try {
    if (!(await SecureStore.isAvailableAsync())) return null;
    const token = await SecureStore.getItemAsync(KEY, OPTIONS);
    known = token;
    return token && token.length > 0 ? token : null;
  } catch (error) {
    warn('read', error);
    return null;
  }
}

export function rememberRefreshToken(token: string): Promise<void> {
  if (token.length === 0 || token === known) return queue;
  known = token;
  return enqueue('write', () => SecureStore.setItemAsync(KEY, token, OPTIONS));
}

/**
 * Drop the token so the next launch starts as a new visitor. Part of account
 * deletion and the dev reset; the SIGNED_OUT event covers the rest.
 */
export function forgetRefreshToken(): Promise<void> {
  known = null;
  return enqueue('delete', () => SecureStore.deleteItemAsync(KEY, OPTIONS));
}

/**
 * Keep the Keychain copy in step with the client's session for the life of
 * the process. Called once, right after the client is created.
 */
export function mirrorSessionToKeychain(client: SupabaseClient): void {
  client.auth.onAuthStateChange((event: AuthChangeEvent, session: Session | null) => {
    // Not awaited: the client awaits its listeners, and Keychain IO must
    // not sit inside its auth lock. The queue keeps writes ordered.
    if (event === 'SIGNED_OUT') {
      // Explicit sign-out, or the client discarding a session whose refresh
      // token the server rejected — dead either way.
      void forgetRefreshToken();
    } else if (session?.refresh_token) {
      void rememberRefreshToken(session.refresh_token);
    }
  });
}
