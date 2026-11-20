import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import type { MembershipStoreState } from './membership.store.types';

export const useMembershipStore = create<MembershipStoreState>()(
  persist(
    (set) => ({
      membership: { kind: 'free' },
      source: 'mock',
      setMembership: (membership, source) => set({ membership, source }),
      devToggleMembership: () =>
        set((state) =>
          state.membership.kind === 'free'
            ? { membership: { kind: 'member', expiresAtMs: null, willRenew: true }, source: 'mock' }
            : { membership: { kind: 'free' }, source: 'mock' },
        ),
    }),
    { name: 'pp.membership.v1', storage: createJSONStorage(() => AsyncStorage) },
  ),
);
