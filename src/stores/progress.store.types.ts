import type { EraId, IsoDate, SceneId } from '@/types/common.types';

export interface EraProgress {
  /**
   * Lessons finished in this era's track. Kept for existing installs, but
   * not read for progress: it can't say *which* paintings were seen, so it
   * drifts once editorial adds or moves paintings. What's walked, what's
   * next and whether an era is done all come from `completedSceneIds`
   * via utils/lessons.ts.
   */
  daysDone: number;
  /** Calendar day the last lesson was finished; gates one lesson per day. */
  lastCompletedOn: IsoDate | null;
}

export interface ProgressStoreState {
  /** The one track being walked right now; switching is lossless. */
  activeEraId: EraId | null;
  /**
   * When activeEraId was last chosen (device clock, epoch ms): across
   * devices the latest choice wins (utils/progress-sync.ts). Null on installs
   * that chose before this was recorded.
   */
  activeEraSetAtMs: number | null;
  eraProgress: Record<string, EraProgress>;
  /** Every artwork whose lesson was finished; the Gallery collection. */
  completedSceneIds: SceneId[];
  /** Calendar days the museum was opened. The quiet Profile record. */
  visitDays: IsoDate[];
  /** The painting stepped into on each day, keyed YYYY-MM-DD. Recorded from 2026-09-26 on. */
  dayScenes: Record<string, SceneId>;
  startTrack(eraId: EraId): void;
  completeDay(eraId: EraId, sceneId: SceneId, day: IsoDate): void;
  recordVisit(day: IsoDate): void;
  /** Back to a first visit: nothing walked, no track chosen. */
  resetProgress(): void;
}
