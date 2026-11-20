import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getDataSource } from '@/data';
import { useMembershipStore } from '@/stores/membership.store';
import type { ForgeId } from '@/types/common.types';
import type { Forge, ForgeQuota, ForgeSubmission } from '@/types/domain.types';
import { forgeDailyLimit } from '@/utils/access';
import { queryKeys } from './query-keys';

function forgePollInterval(forge: Forge | null | undefined): number | false {
  if (!forge) return false;
  switch (forge.status.phase) {
    case 'validating':
      return 700;
    case 'generating':
      return 1_800;
    case 'complete':
    case 'rejected':
    case 'failed':
      return false;
    default: {
      const exhaustive: never = forge.status;
      throw new Error(`Unhandled forge phase: ${JSON.stringify(exhaustive)}`);
    }
  }
}

export function useForge(id: ForgeId | null) {
  return useQuery({
    queryKey: id ? queryKeys.forge(id) : ['forge', 'none'],
    queryFn: () => {
      if (!id) return null;
      return getDataSource().getForge(id);
    },
    enabled: id !== null,
    refetchInterval: (query) => forgePollInterval(query.state.data),
  });
}

export function useForges() {
  return useQuery({
    queryKey: queryKeys.forges,
    queryFn: () => getDataSource().listForges(),
  });
}

export function useForgeQuota() {
  const membership = useMembershipStore((state) => state.membership);
  const dailyLimit = forgeDailyLimit(membership);
  return useQuery({
    queryKey: [...queryKeys.forgeQuota, dailyLimit],
    queryFn: async (): Promise<ForgeQuota> => {
      const usedToday = await getDataSource().countForgesUsedToday();
      return { usedToday, dailyLimit };
    },
  });
}

export function useSubmitForge() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: ForgeSubmission) => getDataSource().submitForge(input),
    onSuccess: (forge) => {
      queryClient.setQueryData(queryKeys.forge(forge.id), forge);
      void queryClient.invalidateQueries({ queryKey: queryKeys.forges });
      void queryClient.invalidateQueries({ queryKey: queryKeys.forgeQuota });
    },
  });
}
