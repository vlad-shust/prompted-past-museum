import { Redirect, Tabs } from 'expo-router';
import { useEffect } from 'react';

import { MoltenTabBar } from '@/components/ui/molten-tab-bar';
import { env } from '@/lib/env';
import { startProgressSync, stopProgressSync } from '@/lib/progress-sync';
import { logInPurchases } from '@/lib/purchases';
import { registerPushTokenIfLive } from '@/lib/push-registration';
import { ensureSession } from '@/lib/supabase';
import { useAppStore } from '@/stores/app.store';

export default function TabsLayout() {
  const hasOnboarded = useAppStore((state) => state.hasOnboarded);

  useEffect(() => {
    if (!hasOnboarded || env.dataMode !== 'live') return;
    void (async () => {
      try {
        const session = await ensureSession();
        await logInPurchases(session.user.id);
        await registerPushTokenIfLive();
      } catch (error) {
        console.warn('[session] live bootstrap failed:', error instanceof Error ? error.message : error);
      }
    })();
  }, [hasOnboarded]);

  // Walk progress and era picks follow the account across devices, so the
  // recommender reads the same history everywhere. Starts after onboarding,
  // like the session itself; mock mode syncs against the device alone.
  useEffect(() => {
    if (!hasOnboarded) return;
    startProgressSync();
    return stopProgressSync;
  }, [hasOnboarded]);

  if (!hasOnboarded) return <Redirect href="/onboarding" />;

  return (
    <Tabs
      tabBar={(props) => <MoltenTabBar state={props.state} navigation={props.navigation} />}
      screenOptions={{ headerShown: false }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="explore" />
      <Tabs.Screen name="studio" />
      <Tabs.Screen name="gallery" />
    </Tabs>
  );
}
