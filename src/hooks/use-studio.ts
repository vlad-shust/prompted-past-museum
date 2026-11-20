import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import type { CommissionPackId } from '@/content/membership.types';
import { getDataSource } from '@/data';
import { fetchCommissionPrices } from '@/lib/purchases';
import { useMembershipStore } from '@/stores/membership.store';
import type { StudioPieceId } from '@/types/common.types';
import type { CollectionWakeState, StudioPiece, StudioSubmission } from '@/types/domain.types';
import { collectionWakeQuota, isMember } from '@/utils/access';
import { queryKeys } from './query-keys';

function studioPollInterval(piece: StudioPiece | null | undefined): number | false {
  if (!piece) return false;
  switch (piece.status.phase) {
    case 'inspecting':
      return 700;
    case 'animating':
      return 1_800;
    case 'complete':
    case 'rejected':
    case 'failed':
      return false;
    default: {
      const exhaustive: never = piece.status;
      throw new Error(`Unhandled studio phase: ${JSON.stringify(exhaustive)}`);
    }
  }
}

export function useStudioPiece(id: StudioPieceId | null) {
  return useQuery({
    queryKey: id ? queryKeys.studioPiece(id) : ['studioPiece', 'none'],
    queryFn: () => {
      if (!id) return null;
      return getDataSource().getStudioPiece(id);
    },
    enabled: id !== null,
    refetchInterval: (query) => studioPollInterval(query.state.data),
  });
}

export function useStudioPieces() {
  return useQuery({
    queryKey: queryKeys.studioPieces,
    queryFn: () => getDataSource().listStudioPieces(),
  });
}

export function useCommissions() {
  const membership = useMembershipStore((state) => state.membership);
  const member = isMember(membership);
  return useQuery({
    queryKey: [...queryKeys.commissions, member],
    queryFn: () => getDataSource().getCommissionLedger(),
  });
}

/** Localized store prices for the packs; empty while loading or unavailable. */
export function useCommissionPrices() {
  return useQuery({
    queryKey: [...queryKeys.commissions, 'prices'],
    queryFn: fetchCommissionPrices,
    staleTime: 60 * 60 * 1000,
  });
}

export function usePurchaseCommission() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (pack: CommissionPackId) => getDataSource().purchaseCommission(pack),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: queryKeys.commissions });
    },
  });
}

export function useCollectionWakes() {
  const membership = useMembershipStore((state) => state.membership);
  const quota = collectionWakeQuota(membership);
  return useQuery({
    queryKey: [...queryKeys.collectionWakes, quota.kind],
    queryFn: async (): Promise<CollectionWakeState> => {
      const used = await getDataSource().countCollectionWakes();
      return { used, quota };
    },
  });
}

export function useSubmitStudioPiece() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: StudioSubmission) => getDataSource().submitStudioPiece(input),
    onSuccess: (piece) => {
      queryClient.setQueryData(queryKeys.studioPiece(piece.id), piece);
      void queryClient.invalidateQueries({ queryKey: queryKeys.studioPieces });
      void queryClient.invalidateQueries({ queryKey: queryKeys.commissions });
      void queryClient.invalidateQueries({ queryKey: queryKeys.collectionWakes });
    },
  });
}
