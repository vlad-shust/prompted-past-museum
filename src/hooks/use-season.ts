import { useQuery } from '@tanstack/react-query';

import { getDataSource } from '@/data';
import { queryKeys } from './query-keys';

const ONE_HOUR_MS = 3_600_000;

export function useCurrentSeason() {
  return useQuery({
    queryKey: queryKeys.season,
    queryFn: () => getDataSource().getCurrentSeason(),
    staleTime: ONE_HOUR_MS,
  });
}
