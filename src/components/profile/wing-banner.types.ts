import type { EraPalette } from '@/theme';
import type { TrackWalk } from '@/utils/lessons';
import type { EraTrack } from '@/utils/tracks.types';

export interface WingBannerProps {
  track: EraTrack;
  /** Which of the wing's paintings the visitor has stepped into. */
  walk: TrackWalk;
  palette: EraPalette;
  onContinue(): void;
  onChangeWing(): void;
}

export interface WingBannerEmptyProps {
  onChooseWing(): void;
}
