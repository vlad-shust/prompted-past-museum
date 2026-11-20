import type { Scene } from '@/types/domain.types';
import type { TrackWalk } from '@/utils/lessons';

/** Where a work stands on the visitor's walk through the era. */
export type HallStop = 'walked' | 'next' | 'ahead';

export interface EraHallProps {
  /** Works in walking order. */
  scenes: Scene[];
  /** Which of these works the visitor has stepped into. */
  walk: TrackWalk;
}
