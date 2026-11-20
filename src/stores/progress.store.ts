import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { MAX_VISIT_DAYS } from '@/utils/progress-sync';
import type { EraProgress, ProgressStoreState } from './progress.store.types';

const EMPTY_PROGRESS: EraProgress = { daysDone: 0, lastCompletedOn: null };

const FIRST_VISIT = {
  activeEraId: null,
  activeEraSetAtMs: null,
  eraProgress: {},
  completedSceneIds: [],
  visitDays: [],
  dayScenes: {},
} satisfies Partial<ProgressStoreState>;

export const useProgressStore = create<ProgressStoreState>()(
  persist(
    (set) => ({
      ...FIRST_VISIT,
      startTrack: (eraId) => set({ activeEraId: eraId, activeEraSetAtMs: Date.now() }),
      completeDay: (eraId, sceneId, day) =>
        set((state) => {
          const entry = state.eraProgress[eraId] ?? EMPTY_PROGRESS;
          return {
            eraProgress: {
              ...state.eraProgress,
              [eraId]: { daysDone: entry.daysDone + 1, lastCompletedOn: day },
            },
            completedSceneIds: state.completedSceneIds.includes(sceneId)
              ? state.completedSceneIds
              : [...state.completedSceneIds, sceneId],
            dayScenes: { ...state.dayScenes, [day]: sceneId },
          };
        }),
      recordVisit: (day) =>
        set((state) =>
          state.visitDays.includes(day)
            ? state
            : { visitDays: [...state.visitDays.slice(-(MAX_VISIT_DAYS - 1)), day] },
        ),
      resetProgress: () => set(FIRST_VISIT),
    }),
    { name: 'pp.progress.v1', storage: createJSONStorage(() => AsyncStorage) },
  ),
);
