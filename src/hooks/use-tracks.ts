import { useMemo } from 'react';

import { useProgressStore } from '@/stores/progress.store';
import { buildTracks, trackForEra } from '@/utils/tracks';
import type { EraTrack } from '@/utils/tracks.types';
import { useArchive } from './use-scenes';

export function useTracks() {
  const archive = useArchive();
  const tracks = useMemo(() => buildTracks(archive.data ?? []), [archive.data]);
  return { ...archive, tracks };
}

/** The track being walked, or null before the visitor has chosen one. */
export function useActiveTrack(): { track: EraTrack | null; isPending: boolean } {
  const { tracks, isPending } = useTracks();
  const activeEraId = useProgressStore((state) => state.activeEraId);
  const track = activeEraId ? trackForEra(tracks, activeEraId) : null;
  return { track, isPending };
}
