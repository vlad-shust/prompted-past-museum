import {
  CormorantGaramond_300Light,
  CormorantGaramond_400Regular,
  CormorantGaramond_400Regular_Italic,
  CormorantGaramond_500Medium,
  CormorantGaramond_500Medium_Italic,
} from '@expo-google-fonts/cormorant-garamond';
import { HankenGrotesk_400Regular, HankenGrotesk_500Medium, HankenGrotesk_600SemiBold } from '@expo-google-fonts/hanken-grotesk';
import { Newsreader_500Medium, Newsreader_500Medium_Italic, Newsreader_600SemiBold } from '@expo-google-fonts/newsreader';
import { QueryClientProvider } from '@tanstack/react-query';
import { useFonts } from 'expo-font';
import * as Notifications from 'expo-notifications';
import { DarkTheme, router, Stack, ThemeProvider } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef } from 'react';
import { AppState } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { queryKeys } from '@/hooks/query-keys';
import { useStoreHydration } from '@/hooks/use-store-hydration';
import { initPurchases, syncPurchasesCustomerInfo } from '@/lib/purchases';
import { queryClient } from '@/lib/query-client';
import { useAppStore } from '@/stores/app.store';
import { useMembershipStore } from '@/stores/membership.store';
import { colors } from '@/theme';
import { todayIso } from '@/utils/dates';

SplashScreen.preventAutoHideAsync();

const moltenTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: colors.bgBase,
    card: colors.bgElevated,
    text: colors.textPrimary,
    primary: colors.emberCore,
    border: colors.strokeHairline,
    notification: colors.emberCore,
  },
};

export default function RootLayout() {
  const [fontsLoaded, fontsError] = useFonts({
    CormorantGaramond_300Light,
    CormorantGaramond_400Regular,
    CormorantGaramond_400Regular_Italic,
    CormorantGaramond_500Medium,
    CormorantGaramond_500Medium_Italic,
    Newsreader_500Medium,
    Newsreader_500Medium_Italic,
    Newsreader_600SemiBold,
    HankenGrotesk_400Regular,
    HankenGrotesk_500Medium,
    HankenGrotesk_600SemiBold,
  });

  // Persisted stores rehydrate asynchronously; routing on their defaults
  // would bounce returning users into onboarding and replay reveals.
  const appStoreHydrated = useStoreHydration(useAppStore.persist);
  const membershipHydrated = useStoreHydration(useMembershipStore.persist);
  const ready = (fontsLoaded || fontsError !== null) && appStoreHydrated && membershipHydrated;

  useEffect(() => {
    if (ready) void SplashScreen.hideAsync();
  }, [ready]);

  useEffect(() => {
    initPurchases();
  }, []);

  // Day-dependent queries are keyed only by name, so a rollover past midnight
  // keeps serving yesterday's scene/archive/season/quota for the life of the
  // process. focusManager (query-client) revalidates stale queries on resume;
  // this additionally forces the day-scoped keys when the local date advanced.
  const lastActiveDateRef = useRef<string>(todayIso());
  useEffect(() => {
    const subscription = AppState.addEventListener('change', (status) => {
      if (status !== 'active') return;
      void syncPurchasesCustomerInfo();
      const current = todayIso();
      if (current === lastActiveDateRef.current) return;
      lastActiveDateRef.current = current;
      void queryClient.invalidateQueries({ queryKey: queryKeys.today });
      void queryClient.invalidateQueries({ queryKey: queryKeys.archive });
      void queryClient.invalidateQueries({ queryKey: queryKeys.season });
      void queryClient.invalidateQueries({ queryKey: queryKeys.forgeQuota });
    });
    return () => subscription.remove();
  }, []);

  // The daily notification opens the scene it announced. The hook covers
  // cold starts too (a plain response listener mounts too late for those);
  // the ref dedupes, since the same response can re-deliver on remounts.
  const notificationResponse = Notifications.useLastNotificationResponse();
  const handledNotificationRef = useRef<string | null>(null);
  useEffect(() => {
    // Cold-start taps deliver before the Stack mounts; navigating while
    // ready === false trips expo-router's assertIsReady(). Wait for mount.
    if (!ready || !notificationResponse) return;
    const identifier = notificationResponse.notification.request.identifier;
    if (handledNotificationRef.current === identifier) return;
    handledNotificationRef.current = identifier;
    const sceneId: unknown = notificationResponse.notification.request.content.data?.sceneId;
    if (typeof sceneId === 'string' && sceneId.length > 0) {
      router.push({ pathname: '/scene/[id]', params: { id: sceneId } });
    }
  }, [ready, notificationResponse]);

  if (!ready) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider value={moltenTheme}>
          <StatusBar style="light" />
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: colors.bgBase },
            }}
          >
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="onboarding" options={{ animation: 'fade', gestureEnabled: false }} />
            <Stack.Screen name="paywall" options={{ presentation: 'modal' }} />
            <Stack.Screen name="settings" options={{ presentation: 'modal' }} />
            <Stack.Screen name="profile" options={{ presentation: 'modal' }} />
            <Stack.Screen name="commission" options={{ presentation: 'modal' }} />
            <Stack.Screen name="admin" options={{ presentation: 'modal' }} />
            <Stack.Screen name="scene/[id]" options={{ animation: 'fade' }} />
            <Stack.Screen name="studio-piece/[id]" options={{ animation: 'fade' }} />
          </Stack>
        </ThemeProvider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}
