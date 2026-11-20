import { forgePlaceholderImage } from '@/content/forge-placeholders';
import { COMMISSION, commissionPack } from '@/content/membership';
import type { CommissionPackId } from '@/content/membership.types';
import { mockSeasonFor } from '@/content/seasons';
import { currentHouseStill, houseWorkFor } from '@/content/studio-suggestions';
import { mediaUrl } from '@/lib/env';
import { readJson, writeJson } from '@/lib/storage';
import { useMembershipStore } from '@/stores/membership.store';
import { toEraId, toForgeId, toSceneId, toStudioPieceId } from '@/types/common.types';
import type { ForgeId, SceneId, StudioPieceId } from '@/types/common.types';
import type {
  AnimationSource,
  CommissionLedger,
  Forge,
  ForgeStatus,
  ForgeSubmission,
  Scene,
  Season,
  StudioPiece,
  StudioStatus,
  StudioSubmission,
} from '@/types/domain.types';
import { collectionWakeQuota, forgeDailyLimit, isMember } from '@/utils/access';
import type { ProgressSnapshot } from '@/utils/progress-sync.types';
import { materializeBundledScenes } from './bundled-scenes';
import type { DataSource } from './data-source.types';
import type { StoredCommissionLedger, StoredForge, StoredStudioPiece } from './mock-data-source.types';

const SAVES_KEY = 'pp.mock.saves.v1';
const FORGES_KEY = 'pp.mock.forges.v1';
const STUDIO_KEY = 'pp.mock.studio.v1';
const LEDGER_KEY = 'pp.mock.commissions.v1';

const VALIDATING_MS = 2_200;
const GENERATING_MS = 26_000;
const REJECT_AT_MS = 1_600;

const INSPECTING_MS = 2_400;
const ANIMATING_MS = 16_000;

/** Words the mock validator treats the way Claude will treat anachronisms. */
const MODERN_WORDS = /\b(phone|iphone|computer|laptop|internet|robot|spaceship|rocket|car|television|tv|drone|selfie|neon|cyber|astronaut)\b/i;

export const FORGE_REJECTION_MESSAGE =
  'The forge only shapes the past. Choose a moment history could have witnessed.';

export const STUDIO_REJECTION_MESSAGE =
  'The studio hangs only artworks. Choose a painting or a drawing, not a photograph of a person.';

function titleFromDescription(description: string): string {
  const small = new Set(['a', 'an', 'and', 'at', 'by', 'in', 'of', 'on', 'or', 'the', 'to']);
  const words = description.trim().replace(/[.!?]+$/, '').split(/\s+/).slice(0, 6);
  const cased = words.map((word, index) => {
    const lower = word.toLowerCase();
    if (index > 0 && small.has(lower)) return lower;
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  });
  return cased.join(' ');
}

function isStoredForge(raw: unknown): raw is StoredForge {
  if (typeof raw !== 'object' || raw === null) return false;
  const candidate = raw as Record<string, unknown>;
  return (
    typeof candidate.id === 'string' &&
    typeof candidate.eraId === 'string' &&
    typeof candidate.description === 'string' &&
    typeof candidate.createdAtMs === 'number' &&
    typeof candidate.rejected === 'boolean'
  );
}

// Filter, don't reject: one malformed/legacy entry must not wipe the whole
// persisted array (the next write would then overwrite the store with just
// its new item, destroying the user's history irreversibly).
function narrowStoredForges(raw: unknown): StoredForge[] | null {
  return Array.isArray(raw) ? raw.filter(isStoredForge) : null;
}

function isStoredStudioPiece(raw: unknown): raw is StoredStudioPiece {
  if (typeof raw !== 'object' || raw === null) return false;
  const candidate = raw as Record<string, unknown>;
  return (
    typeof candidate.id === 'string' &&
    typeof candidate.imageUri === 'string' &&
    typeof candidate.createdAtMs === 'number' &&
    typeof candidate.watermarked === 'boolean' &&
    typeof candidate.rejected === 'boolean' &&
    (candidate.origin === undefined || typeof candidate.origin === 'string')
  );
}

function narrowStoredStudioPieces(raw: unknown): StoredStudioPiece[] | null {
  return Array.isArray(raw) ? raw.filter(isStoredStudioPiece) : null;
}

function isStoredCommissionLedger(raw: unknown): raw is StoredCommissionLedger {
  if (typeof raw !== 'object' || raw === null) return false;
  const candidate = raw as Record<string, unknown>;
  return (
    typeof candidate.available === 'number' &&
    (candidate.lastGrantMonth === null || typeof candidate.lastGrantMonth === 'string')
  );
}

function narrowStoredCommissionLedger(raw: unknown): StoredCommissionLedger | null {
  return isStoredCommissionLedger(raw) ? raw : null;
}

/**
 * Collection pieces complete with their pre-staged clip from the media
 * bucket (matched by image URL, the one field both sides share). The
 * visitor's own still animates client-side; live mode returns Grok clips.
 */
function completedAnimation(stored: StoredStudioPiece): AnimationSource {
  if (stored.origin === 'collection') {
    const suggestion = houseWorkFor(stored.imageUri);
    const url = suggestion?.videoFile ? mediaUrl(suggestion.videoFile) : null;
    if (url) return { kind: 'video', url };
  }
  return { kind: 'living-still' };
}

function narrowStringArray(raw: unknown): string[] | null {
  return Array.isArray(raw) ? raw.filter((item): item is string => typeof item === 'string') : null;
}

function jitter(baseMs: number): Promise<void> {
  const ms = baseMs + Math.random() * 180;
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Fully offline implementation. Forge progress is derived from elapsed
 * wall-clock time rather than timers, so an in-flight forge survives
 * app reloads exactly the way a server-backed one would.
 */
export class MockDataSource implements DataSource {
  readonly mode = 'mock' as const;

  private readonly now: () => number;

  constructor(now: () => number = Date.now) {
    this.now = now;
  }

  private materializeScenes(): Scene[] {
    return materializeBundledScenes();
  }

  async getTodayScene(): Promise<Scene> {
    await jitter(200);
    return this.materializeScenes()[0];
  }

  async getArchive(): Promise<Scene[]> {
    await jitter(320);
    return this.materializeScenes();
  }

  async getScene(id: SceneId): Promise<Scene | null> {
    await jitter(150);
    return this.materializeScenes().find((scene) => scene.id === id) ?? null;
  }

  async getCurrentSeason(): Promise<Season | null> {
    await jitter(120);
    return mockSeasonFor(new Date());
  }

  private deriveStatus(stored: StoredForge): ForgeStatus {
    const elapsed = this.now() - stored.createdAtMs;
    if (stored.rejected) {
      return elapsed < REJECT_AT_MS
        ? { phase: 'validating' }
        : { phase: 'rejected', reason: FORGE_REJECTION_MESSAGE };
    }
    if (elapsed < VALIDATING_MS) return { phase: 'validating' };
    if (elapsed < GENERATING_MS) return { phase: 'generating' };
    return {
      phase: 'complete',
      imageUrl: forgePlaceholderImage(toEraId(stored.eraId)),
      completedAtMs: stored.createdAtMs + GENERATING_MS,
    };
  }

  private toForge(stored: StoredForge): Forge {
    const status = this.deriveStatus(stored);
    return {
      id: toForgeId(stored.id),
      eraId: toEraId(stored.eraId),
      description: stored.description,
      title: status.phase === 'complete' ? titleFromDescription(stored.description) : null,
      createdAtMs: stored.createdAtMs,
      status,
    };
  }

  private async readForges(): Promise<StoredForge[]> {
    return readJson(FORGES_KEY, narrowStoredForges, []);
  }

  async submitForge(input: ForgeSubmission): Promise<Forge> {
    await jitter(250);
    // Mirror the server: quota is enforced at submission, not just in the UI.
    // (Live mode derives the limit from entitlements; the mock reads the store.)
    const used = await this.countForgesUsedToday();
    const limit = forgeDailyLimit(useMembershipStore.getState().membership);
    if (used >= limit) throw new Error('quota_exhausted');
    const stored: StoredForge = {
      id: `forge_${this.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`,
      eraId: input.eraId,
      description: input.description.trim(),
      createdAtMs: this.now(),
      rejected: MODERN_WORDS.test(input.description),
    };
    const all = await this.readForges();
    await writeJson(FORGES_KEY, [stored, ...all]);
    return this.toForge(stored);
  }

  async getForge(id: ForgeId): Promise<Forge | null> {
    const all = await this.readForges();
    const found = all.find((stored) => stored.id === id);
    return found ? this.toForge(found) : null;
  }

  async listForges(): Promise<Forge[]> {
    await jitter(200);
    const all = await this.readForges();
    return all.map((stored) => this.toForge(stored));
  }

  async countForgesUsedToday(): Promise<number> {
    const startOfDay = new Date();
    startOfDay.setHours(0, 0, 0, 0);
    const all = await this.readForges();
    return all.filter((stored) => !stored.rejected && stored.createdAtMs >= startOfDay.getTime()).length;
  }

  private deriveStudioStatus(stored: StoredStudioPiece): StudioStatus {
    const elapsed = this.now() - stored.createdAtMs;
    if (stored.rejected) {
      return elapsed < REJECT_AT_MS
        ? { phase: 'inspecting' }
        : { phase: 'rejected', reason: STUDIO_REJECTION_MESSAGE };
    }
    // A house painting arrives already woken: the clip is pre-staged, so there
    // is nothing to inspect and nothing to generate.
    if (stored.origin === 'collection') {
      return {
        phase: 'complete',
        animation: completedAnimation(stored),
        completedAtMs: stored.createdAtMs,
      };
    }
    if (elapsed < INSPECTING_MS) return { phase: 'inspecting' };
    if (elapsed < INSPECTING_MS + ANIMATING_MS) return { phase: 'animating' };
    return {
      phase: 'complete',
      animation: completedAnimation(stored),
      completedAtMs: stored.createdAtMs + INSPECTING_MS + ANIMATING_MS,
    };
  }

  private toStudioPiece(stored: StoredStudioPiece): StudioPiece {
    return {
      id: toStudioPieceId(stored.id),
      imageUri: currentHouseStill(stored.imageUri),
      createdAtMs: stored.createdAtMs,
      watermarked: stored.watermarked,
      status: this.deriveStudioStatus(stored),
    };
  }

  private async readStudioPieces(): Promise<StoredStudioPiece[]> {
    return readJson(STUDIO_KEY, narrowStoredStudioPieces, []);
  }

  async submitStudioPiece(input: StudioSubmission): Promise<StudioPiece> {
    await jitter(250);
    // Mirror the server: spending is enforced at submission, not just in the UI.
    // Uploads spend a commission; collection wakes burn the visitor's
    // single free taste (members wake the collection without limit).
    const membership = useMembershipStore.getState().membership;
    if (input.origin === 'upload') {
      // The mock cannot reject, so spending here is consume-on-success.
      const { available } = await this.getCommissionLedger();
      if (available === 0) throw new Error('commission_required');
      const ledger = await this.readLedger();
      await writeJson(LEDGER_KEY, { ...ledger, available: ledger.available - 1 });
    } else {
      const wakes = collectionWakeQuota(membership);
      if (wakes.kind === 'metered' && (await this.countCollectionWakes()) >= wakes.limit) {
        throw new Error('quota_exhausted');
      }
    }
    const stored: StoredStudioPiece = {
      id: `studio_${this.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`,
      imageUri: input.imageUri,
      origin: input.origin,
      createdAtMs: this.now(),
      watermarked: !isMember(membership),
      // The live artwork classifier can reject; the mock inspection always passes.
      rejected: false,
    };
    const all = await this.readStudioPieces();
    await writeJson(STUDIO_KEY, [stored, ...all]);
    return this.toStudioPiece(stored);
  }

  async getStudioPiece(id: StudioPieceId): Promise<StudioPiece | null> {
    const all = await this.readStudioPieces();
    const found = all.find((stored) => stored.id === id);
    return found ? this.toStudioPiece(found) : null;
  }

  async listStudioPieces(): Promise<StudioPiece[]> {
    await jitter(200);
    const all = await this.readStudioPieces();
    return all.map((stored) => this.toStudioPiece(stored));
  }

  private async readLedger(): Promise<StoredCommissionLedger> {
    return readJson(LEDGER_KEY, narrowStoredCommissionLedger, { available: 0, lastGrantMonth: null });
  }

  async getCommissionLedger(): Promise<CommissionLedger> {
    const ledger = await this.readLedger();
    const month = new Date(this.now()).toISOString().slice(0, 7);
    if (isMember(useMembershipStore.getState().membership) && ledger.lastGrantMonth !== month) {
      ledger.available += COMMISSION.monthlyGrant;
      ledger.lastGrantMonth = month;
      await writeJson(LEDGER_KEY, ledger);
    }
    return { available: ledger.available };
  }

  async purchaseCommission(packId: CommissionPackId): Promise<CommissionLedger> {
    await jitter(400);
    const ledger = await this.readLedger();
    ledger.available += commissionPack(packId).count;
    await writeJson(LEDGER_KEY, ledger);
    return { available: ledger.available };
  }

  async countCollectionWakes(): Promise<number> {
    const all = await this.readStudioPieces();
    return all.filter((stored) => stored.origin === 'collection' && !stored.rejected).length;
  }

  async getSavedSceneIds(): Promise<SceneId[]> {
    const raw = await readJson(SAVES_KEY, narrowStringArray, []);
    return raw.map(toSceneId);
  }

  async setSceneSaved(id: SceneId, saved: boolean): Promise<void> {
    const current = await readJson(SAVES_KEY, narrowStringArray, []);
    const without = current.filter((existing) => existing !== id);
    await writeJson(SAVES_KEY, saved ? [id, ...without] : without);
  }

  /** No server copy in mock mode: the device's own state is the whole of it. */
  async syncProgress(local: ProgressSnapshot): Promise<ProgressSnapshot> {
    return local;
  }
}
