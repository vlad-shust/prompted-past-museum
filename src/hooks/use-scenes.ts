import { useQuery } from '@tanstack/react-query';

import { getDataSource } from '@/data';
import type { SceneId } from '@/types/common.types';
import { queryKeys } from './query-keys';

const ONE_MINUTE_MS = 60_000;

export function useTodayScene() {
  return useQuery({
    queryKey: queryKeys.today,
    queryFn: () => getDataSource().getTodayScene(),
    staleTime: 5 * ONE_MINUTE_MS,
  });
}

export function useArchive() {
  return useQuery({
    queryKey: queryKeys.archive,
    queryFn: () => getDataSource().getArchive(),
    staleTime: 5 * ONE_MINUTE_MS,
  });
}

export function useScene(id: SceneId | null) {
  return useQuery({
    queryKey: id ? queryKeys.scene(id) : ['scene', 'none'],
    queryFn: () => {
      if (!id) return null;
      return getDataSource().getScene(id);
    },
    enabled: id !== null,
  });
}
