import type { EraId, IsoDate, SceneId } from '@/types/common.types';
import type { EraProgress } from '@/stores/progress.store.types';

/**
 * Everything the recommender reads, already unpacked from the device
 * stores. The ranking never calls a server (see recommend.ts); the stores
 * themselves are kept in step with the visitor's account by
 * lib/progress-sync.ts, so this context is the same on every device.
 */
export interface RecommendationContext {
  /** Per-era last-walked date, keyed by EraId — the persisted (and synced) progress store. */
  eraProgress: Record<string, EraProgress>;
  /**
   * Every painting stepped into. The source of truth for what's walked and
   * what's left in each era (see utils/lessons.ts), shared with the Today
   * screen so the two can never disagree about whether an era is finished.
   */
  completedSceneIds: readonly SceneId[];
  /** Up to 3 eras picked at onboarding, before there was any real signal. */
  eraInterests: readonly EraId[];
  /** Device-local calendar day, for recency decay. */
  today: IsoDate;
}

export interface ScoredEra {
  eraId: EraId;
  score: number;
  /** Short, stable reason codes — useful for debugging/analytics, not UI copy. */
  reasons: readonly RecommendationReason[];
}

export type RecommendationReason =
  | 'resume' // already walked at least one day here and hasn't finished
  | 'shared-theme' // overlaps what the visitor has engaged with thematically
  | 'shared-region' // same rough part of the world/time as what they've walked
  | 'timeline-next' // the era that opens where their most recent one closes
  | 'timeline-prev' // the era that closes where their most recent one opens
  | 'onboarding-interest' // picked at onboarding, not yet walked
  | 'default-order'; // no signal at all — the museum's own front-to-back order
