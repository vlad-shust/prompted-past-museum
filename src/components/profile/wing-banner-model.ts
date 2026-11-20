import type { Scene } from '@/types/domain.types';
import type { TrackWalk } from '@/utils/lessons';
import type { EraTrack } from '@/utils/tracks.types';

export interface WingBannerState {
  /** Every painting in the wing stepped into. */
  walked: boolean;
  /** "DAY 4 OF 20" or "WALKED". */
  label: string;
  /** Progress rail fill, 0-1. */
  fraction: number;
  /** The painting behind the banner: the next one to walk, or the last once walked. */
  standingIn: Scene | null;
}

/**
 * What the Profile wing banner shows, from a TrackWalk rather than the
 * `daysDone` counter, so it names the same painting the Today screen will
 * show next. Kept free of React Native imports for the unit tests.
 */
export function wingBannerState(track: EraTrack, walk: TrackWalk): WingBannerState {
  return {
    walked: walk.done,
    label: walk.done ? 'WALKED' : `DAY ${walk.walked + 1} OF ${track.dayCount}`,
    fraction: track.dayCount === 0 ? 0 : Math.min(walk.walked / track.dayCount, 1),
    standingIn: walk.remaining[0] ?? track.scenes.at(-1) ?? null,
  };
}
