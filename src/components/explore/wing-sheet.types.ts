import type { TrackWalk } from '@/utils/lessons';
import type { EraTrack } from '@/utils/tracks.types';

/** What the visitor is deciding at the door. */
export type WingSheetMode =
  { kind: 'begin' } | { kind: 'return' } | { kind: 'change'; fromName: string };

export interface WingSheetProps {
  track: EraTrack | null;
  /** Walk state of `track`; null when the sheet is closed. */
  walk: TrackWalk | null;
  mode: WingSheetMode;
  onConfirm: () => void;
  onClose: () => void;
}
