import { useSyncExternalStore } from 'react';

interface PersistApi {
  hasHydrated(): boolean;
  onFinishHydration(listener: () => void): () => void;
}

/**
 * Zustand persist rehydrates from AsyncStorage asynchronously; anything
 * that routes on persisted state (hasOnboarded, membership) must wait or
 * it decides from defaults. The splash screen covers the gap.
 */
export function useStoreHydration(persist: PersistApi): boolean {
  return useSyncExternalStore(
    (onChange) => persist.onFinishHydration(onChange),
    () => persist.hasHydrated(),
  );
}
