import AsyncStorage from '@react-native-async-storage/async-storage';

import { resetToFirstVisit } from '@/lib/dev-reset';
import { startProgressSync, stopProgressSync } from '@/lib/progress-sync';
import { forgetRefreshToken } from '@/lib/session-keychain';
import { ensureSession, getSupabase } from '@/lib/supabase';

const PHOTO_CONSENT_KEY = 'studio.photoConsent.v1';

/**
 * Guideline 5.1.1(v): every account the app creates, including the
 * anonymous guest minted on first launch, must be deletable in-app.
 * The edge function removes storage objects and the auth user; related
 * rows (synced progress included) cascade. Local stores then return to a
 * first visit.
 *
 * Deletion has to be final on the device too: the Keychain keeps the
 * account's refresh token across reinstalls (lib/session-keychain.ts), so it
 * is dropped here the moment the server confirms. Should that be missed
 * (a crash right after), the server has already revoked every session of
 * the deleted user, so a later recovery attempt is rejected and the app
 * starts fresh anyway — the Keychain step keeps no dead credential around
 * and avoids that one failing request.
 */
export async function deleteCurrentAccount(): Promise<void> {
  // A sync firing mid-deletion would re-create rows for the doomed user or,
  // once signed out, mint a new anonymous user and upload the old walk.
  stopProgressSync();
  try {
    await ensureSession();
    const { data, error } = await getSupabase().functions.invoke('delete-account', {
      method: 'POST',
      body: {},
    });
    if (error) {
      throw new Error(error.message || 'The account could not be deleted.');
    }
    if (data && typeof data === 'object' && 'error' in data && data.error) {
      throw new Error('The account could not be deleted.');
    }
  } catch (error) {
    // The account is still here (and so is the visitor): keep it in sync.
    startProgressSync();
    throw error;
  }

  // Confirmed gone server-side. Forget the reinstall anchor first; the
  // sign-out's SIGNED_OUT event repeats it, which is fine.
  await forgetRefreshToken();
  await getSupabase().auth.signOut();
  await AsyncStorage.removeItem(PHOTO_CONSENT_KEY);
  await resetToFirstVisit();
}
