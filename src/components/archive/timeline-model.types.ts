import type { Era, Scene } from '@/types/domain.types';
import type { SceneAccess } from '@/utils/access';

/** One century of the river. Only centuries with scenes become bands. */
export interface TimelineBand {
  key: string;
  /** "15th century" / "3rd century BC" */
  label: string;
  /** Civilizations present in this century, in order of first appearance. */
  eras: Era[];
}

export type TimelineItem =
  | { kind: 'band'; band: TimelineBand }
  | {
      kind: 'scene';
      scene: Scene;
      access: SceneAccess;
      era: Era;
      /** The civilization changed mid-band — the row opens with a "Meanwhile" line. */
      crossover: boolean;
    };

export interface TimelineModel {
  items: TimelineItem[];
  /** Item index → band, for the scrubber's period lens. */
  bandAtIndex: TimelineBand[];
  lockedCount: number;
  totalCount: number;
}
