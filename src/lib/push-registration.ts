import Constants from 'expo-constants';
import * as Notifications from 'expo-notifications';
import { Platform } from 'react-native';

import { env } from './env';
import { ensureSession, getSupabase } from './supabase';

let registered = false;

/**
 * Live mode only: store this device's Expo push token on the profile so
 * supabase/functions/send-daily-push can reach it. Requires an EAS
 * projectId (added by `eas init`) — silently skips until then.
 */
export async function registerPushTokenIfLive(): Promise<void> {
  if (registered || env.dataMode !== 'live' || Platform.OS !== 'ios') return;
  try {
    const permissions = await Notifications.getPermissionsAsync();
    if (!permissions.granted) return;

    const projectId: unknown =
      Constants.expoConfig?.extra?.eas?.projectId ?? Constants.easConfig?.projectId;
    if (typeof projectId !== 'string' || projectId.length === 0) return;

    const token = await Notifications.getExpoPushTokenAsync({ projectId });
    const session = await ensureSession();
    const { error } = await getSupabase()
      .from('profiles')
      .update({ expo_push_token: token.data })
      .eq('id', session.user.id);
    if (!error) registered = true;
  } catch (error) {
    console.warn('[push] registration skipped:', error instanceof Error ? error.message : error);
  }
}
