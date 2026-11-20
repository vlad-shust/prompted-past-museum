import type { TrackWalk } from '@/utils/lessons';
import type { EraTrack } from '@/utils/tracks.types';

export interface WingDoorProps {
  track: EraTrack;
  /** Which of the wing's paintings the visitor has stepped into. */
  walk: TrackWalk;
  /** This wing is the one being walked. */
  active: boolean;
  /** Tile width; the arch radius and height derive from it. */
  width: number;
  onPress: () => void;
}
