import type { EraId, IsoDate, SceneId } from '@/types/common.types';
import type { EraProgress } from '@/stores/progress.store.types';

/**
 * Everything about a visitor's walk that follows them between devices: the
 * synced slice of the progress store plus the onboarding era picks from the
 * app store. It is exactly what the recommender reads (see
 * recommend.types.ts), plus what the Today and Profile screens need to agree
 * with it.
 */
export interface ProgressSnapshot {
  activeEraId: EraId | null;
  /** When activeEraId was last chosen (device clock, epoch ms); null on installs that predate sync. */
  activeEraSetAtMs: number | null;
  eraInterests: EraId[];
  /** When eraInterests were picked (device clock, epoch ms); null on installs that predate sync. */
  eraInterestsSetAtMs: number | null;
  eraProgress: Record<string, EraProgress>;
  /** Oldest first, the order the store records them in. */
  completedSceneIds: SceneId[];
  dayScenes: Record<string, SceneId>;
  /** Ascending, at most MAX_VISIT_DAYS. */
  visitDays: IsoDate[];
}

export interface ProgressReconciliation {
  /** What the device should hold now: the server's copy plus anything it hasn't seen yet. */
  merged: ProgressSnapshot;
  /**
   * The device holds something the server's copy lacks (it changed while the
   * sync was in flight), so another sync should follow.
   */
  localAhead: boolean;
}
