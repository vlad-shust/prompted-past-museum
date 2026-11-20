import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { getDataSource } from '@/data';
import type { SceneId } from '@/types/common.types';
import { queryKeys } from './query-keys';

export function useSavedSceneIds() {
  return useQuery({
    queryKey: queryKeys.saves,
    queryFn: () => getDataSource().getSavedSceneIds(),
  });
}

export function useToggleSave() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: queryKeys.saves,
    mutationFn: ({ sceneId, saved }: { sceneId: SceneId; saved: boolean }) =>
      getDataSource().setSceneSaved(sceneId, saved),
    onMutate: async ({ sceneId, saved }) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.saves });
      const previous = queryClient.getQueryData<SceneId[]>(queryKeys.saves);
      queryClient.setQueryData<SceneId[]>(queryKeys.saves, (current = []) => {
        const without = current.filter((existing) => existing !== sceneId);
        return saved ? [sceneId, ...without] : without;
      });
      return { previous };
    },
    onError: (_error, _input, context) => {
      if (context?.previous) queryClient.setQueryData(queryKeys.saves, context.previous);
    },
    onSettled: () => {
      // Only refetch once the last in-flight toggle settles; a mid-flight
      // invalidation would resolve with server state that predates a still
      // pending optimistic update and flip the heart back.
      if (queryClient.isMutating({ mutationKey: queryKeys.saves }) === 1) {
        void queryClient.invalidateQueries({ queryKey: queryKeys.saves });
      }
    },
  });
}
