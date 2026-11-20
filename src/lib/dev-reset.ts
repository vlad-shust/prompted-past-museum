import AsyncStorage from '@react-native-async-storage/async-storage';

import { env } from '@/lib/env';
import { disableDailySceneNotification } from '@/lib/notifications';
import { stopProgressSync } from '@/lib/progress-sync';
import { queryClient } from '@/lib/query-client';
import { forgetRefreshToken } from '@/lib/session-keychain';
import { getSupabase } from '@/lib/supabase';
import { DEFAULT_NOTIFICATION_HOUR, useAppStore } from '@/stores/app.store';
import { useMembershipStore } from '@/stores/membership.store';
import { useProgressStore } from '@/stores/progress.store';

/**
 * pp.* covers zustand persists + mock saves/forges; sb-* the Supabase
 * session. The Keychain copy of the refresh token is not in AsyncStorage
 * and is forgotten separately below.
 */
const RESET_KEY_PREFIXES = ['pp.', 'sb-'];

/**
 * Admin/dev: erase every trace of this visitor on this device — persisted
 * stores, mock saves and forges, the Supabase session, the scheduled daily
 * ember — and return the in-memory stores to first-launch defaults, so
 * onboarding runs again both immediately and after a restart.
 */
export async function resetToFirstVisit(): Promise<void> {
  // Progress now lives on the account too. Stop syncing first, and drop the
  // in-memory session along with the stored one below: otherwise the next
  // sync would pull the old walk straight back into the reset stores.
  stopProgressSync();
  if (env.dataMode === 'live') {
    try {
      await getSupabase().auth.signOut({ scope: 'local' });
    } catch (error) {
      console.warn('[reset] sign-out failed:', error instanceof Error ? error.message : error);
    }
  }
  // A first visit must not recover the old account on the next launch.
  await forgetRefreshToken();
  await disableDailySceneNotification();
  const keys = await AsyncStorage.getAllKeys();
  const doomed = keys.filter((key) => RESET_KEY_PREFIXES.some((prefix) => key.startsWith(prefix)));
  if (doomed.length > 0) await AsyncStorage.multiRemove(doomed);
  queryClient.clear();
  useAppStore.setState({
    hasOnboarded: false,
    notificationHour: DEFAULT_NOTIFICATION_HOUR,
    notificationMinute: 0,
    eraInterests: [],
    eraInterestsSetAtMs: null,
    revealedSceneIds: [],
  });
  useProgressStore.getState().resetProgress();
  useMembershipStore.setState({ membership: { kind: 'free' }, source: 'mock' });
}
