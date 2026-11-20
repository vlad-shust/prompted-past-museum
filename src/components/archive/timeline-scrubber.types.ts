import type { SharedValue } from 'react-native-reanimated';

import type { TimelineBand } from './timeline-model.types';

export interface TimelineScrubberProps {
  /** Item index → band, for the period lens and its haptic ticks. */
  bandAtIndex: TimelineBand[];
  /** 0..1 list scroll progress. The list writes it; the thumb drives it while dragging. */
  progress: SharedValue<number>;
  /** True while the thumb is held — the list must not write progress back. */
  scrubbing: SharedValue<boolean>;
  onScrubToRatio: (ratio: number) => void;
}
