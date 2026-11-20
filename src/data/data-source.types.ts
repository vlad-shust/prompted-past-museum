import type { CommissionPackId } from '@/content/membership.types';
import type { ForgeId, SceneId, StudioPieceId } from '@/types/common.types';
import type {
  CommissionLedger,
  Forge,
  ForgeSubmission,
  Scene,
  Season,
  StudioPiece,
  StudioSubmission,
} from '@/types/domain.types';
import type { DataMode } from '@/lib/env';
import type { ProgressSnapshot } from '@/utils/progress-sync.types';

// Defined in lib/env so that module stays import-free (see the note there).
export type { DataMode };

/**
 * Every piece of remote IO in the app flows through this interface.
 * MockDataSource keeps the app fully functional with zero keys;
 * SupabaseDataSource is the production implementation.
 */
export interface DataSource {
  readonly mode: DataMode;

  /** Today's daily scene. Always available — the heart of the app. */
  getTodayScene(): Promise<Scene>;

  /** Every published scene, newest publication first (today included). */
  getArchive(): Promise<Scene[]>;

  getScene(id: SceneId): Promise<Scene | null>;

  /** This month's era focus, or null when no season is scheduled. */
  getCurrentSeason(): Promise<Season | null>;

  /**
   * Submit a forge. Resolves with the pending Forge immediately;
   * progress is observed by polling getForge.
   */
  submitForge(input: ForgeSubmission): Promise<Forge>;

  getForge(id: ForgeId): Promise<Forge | null>;

  /** All of this user's forges, newest first. */
  listForges(): Promise<Forge[]>;

  /** Forges that count against today's quota (rejected ones don't). */
  countForgesUsedToday(): Promise<number>;

  /**
   * Submit a painting to the studio. Resolves with the pending piece
   * immediately; progress is observed by polling getStudioPiece.
   */
  submitStudioPiece(input: StudioSubmission): Promise<StudioPiece>;

  getStudioPiece(id: StudioPieceId): Promise<StudioPiece | null>;

  /** All of this visitor's studio pieces, newest first. */
  listStudioPieces(): Promise<StudioPiece[]>;

  /** Commissions on hand: purchases plus the member's monthly included one. */
  getCommissionLedger(): Promise<CommissionLedger>;

  /** Buy a pack of commissions. Mock grants instantly; live wraps the store purchase. */
  purchaseCommission(pack: CommissionPackId): Promise<CommissionLedger>;

  /** House-collection wakes ever taken; meters the visitor's one free wake. */
  countCollectionWakes(): Promise<number>;

  getSavedSceneIds(): Promise<SceneId[]>;
  setSceneSaved(id: SceneId, saved: boolean): Promise<void>;

  /**
   * Merge this device's walk and era picks into the visitor's stored copy
   * and return the merged whole, so every device (and the recommender on
   * it) reads the same history. Idempotent: send the full local state every
   * time. Merge rules: utils/progress-sync.ts. Driven by lib/progress-sync.ts.
   */
  syncProgress(local: ProgressSnapshot): Promise<ProgressSnapshot>;
}
