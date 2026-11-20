import type { Era, Scene } from '@/types/domain.types';

/** An era's walk through its paintings, derived from how much is written for it. */
export interface EraTrack {
  era: Era;
  /** Lessons in walking order: oldest moment first. */
  scenes: Scene[];
  dayCount: number;
}

/** Where the story goes when this track ends; framed as narrative, not algorithm. */
export interface TrackContinuation {
  primary: EraTrack | null;
  secondary: EraTrack | null;
}
