import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { AppStoreState } from './app.store.types';

export const DEFAULT_NOTIFICATION_HOUR = 8;

export const useAppStore = create<AppStoreState>()(
  persist(
    (set) => ({
      hasOnboarded: false,
      notificationHour: DEFAULT_NOTIFICATION_HOUR,
      notificationMinute: 0,
      eraInterests: [],
      eraInterestsSetAtMs: null,
      revealedSceneIds: [],
      // Default false; curator key turns this on when opening a work (see admin.tsx).
      adminMode: false,
      completeOnboarding: (notificationHour, notificationMinute, eraInterests) =>
        set({
          hasOnboarded: true,
          notificationHour,
          notificationMinute,
          eraInterests,
          eraInterestsSetAtMs: Date.now(),
        }),
      setNotificationTime: (notificationHour, notificationMinute) =>
        set({ notificationHour, notificationMinute }),
      markSceneRevealed: (sceneId) =>
        set((state) =>
          state.revealedSceneIds.includes(sceneId)
            ? state
            : { revealedSceneIds: [...state.revealedSceneIds.slice(-30), sceneId] },
        ),
      setAdminMode: (adminMode) => set({ adminMode }),
    }),
    { name: 'pp.app.v1', storage: createJSONStorage(() => AsyncStorage) },
  ),
);
