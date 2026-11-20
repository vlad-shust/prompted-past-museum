import * as Notifications from 'expo-notifications';

let handlerSet = false;

function ensureHandler(): void {
  if (handlerSet) return;
  handlerSet = true;
  Notifications.setNotificationHandler({
    handleNotification: async () => ({
      shouldShowBanner: true,
      shouldShowList: true,
      shouldPlaySound: false,
      shouldSetBadge: false,
    }),
  });
}

// "Forged" is reserved for the user's own commissions; the museum paints and
// hangs the daily scene. Kept here so both schedule paths stay in step.
const DAILY_CONTENT = {
  title: 'Today’s scene is hung.',
  body: 'A new moment from history waits in the gallery.',
} as const;

async function scheduleDaily(hour: number, minute: number): Promise<void> {
  await Notifications.cancelAllScheduledNotificationsAsync();
  await Notifications.scheduleNotificationAsync({
    content: DAILY_CONTENT,
    trigger: {
      type: Notifications.SchedulableTriggerInputTypes.DAILY,
      hour,
      minute,
    },
  });
}

/**
 * The one daily notification. Local scheduling covers v1; server push via
 * Expo Push API is wired in supabase/functions/send-daily-push once keys exist.
 */
export async function enableDailySceneNotification(hour: number, minute = 0): Promise<boolean> {
  ensureHandler();
  const settings = await Notifications.requestPermissionsAsync({
    ios: { allowAlert: true, allowBadge: false, allowSound: false },
  });
  if (!settings.granted && settings.ios?.status !== Notifications.IosAuthorizationStatus.PROVISIONAL) {
    return false;
  }
  await scheduleDaily(hour, minute);
  return true;
}

export async function disableDailySceneNotification(): Promise<void> {
  await Notifications.cancelAllScheduledNotificationsAsync();
}

export async function rescheduleDailySceneNotification(hour: number, minute = 0): Promise<void> {
  ensureHandler();
  const settings = await Notifications.getPermissionsAsync();
  if (!settings.granted) return;
  await scheduleDaily(hour, minute);
}
