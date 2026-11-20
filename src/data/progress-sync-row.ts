import type { EraProgress } from '@/stores/progress.store.types';
import { toEraId, toIsoDate, toSceneId } from '@/types/common.types';
import type { EraId, IsoDate, SceneId } from '@/types/common.types';
import type { ProgressSnapshot } from '@/utils/progress-sync.types';
import type { SyncProgressArgs } from './supabase-data-source.types';

/**
 * ProgressSnapshot <-> the sync_visitor_progress RPC. Kept free of Expo /
 * React Native imports so unit tests can exercise it under plain Node.
 *
 * Both directions drop what the other side would reject instead of failing
 * the sync: a single corrupt entry in a persisted store (or a malformed row)
 * must not stop the rest of a visitor's walk from syncing.
 */

const ISO_DAY = /^(\d{4})-(\d{2})-(\d{2})$/;

/** A real calendar day in YYYY-MM-DD form (rejects e.g. 2024-02-30). */
export function isIsoDay(value: unknown): value is IsoDate {
  if (typeof value !== 'string') return false;
  const match = ISO_DAY.exec(value);
  if (!match) return false;
  const [year, month, day] = [Number(match[1]), Number(match[2]), Number(match[3])];
  const date = new Date(Date.UTC(year, month - 1, day));
  return (
    date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 && date.getUTCDate() === day
  );
}

/** Mirrors the length checks on the server's id columns. */
const MAX_ERA_ID = 100;
const MAX_SCENE_ID = 200;

function isId(value: unknown, max: number): value is string {
  return typeof value === 'string' && value.length > 0 && value.length <= max;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isTimestampMs(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value) && value >= 0;
}

function dedupe<T>(values: readonly T[]): T[] {
  return [...new Set(values)];
}

export function toSyncProgressArgs(local: ProgressSnapshot): SyncProgressArgs {
  const eraProgress: SyncProgressArgs['p_era_progress'] = {};
  for (const [eraId, entry] of Object.entries(local.eraProgress)) {
    if (!isId(eraId, MAX_ERA_ID)) continue;
    eraProgress[eraId] = {
      daysDone: Number.isFinite(entry.daysDone) ? Math.max(0, Math.floor(entry.daysDone)) : 0,
      lastCompletedOn: isIsoDay(entry.lastCompletedOn) ? entry.lastCompletedOn : null,
    };
  }

  const dayScenes: Record<string, string> = {};
  for (const [day, sceneId] of Object.entries(local.dayScenes)) {
    if (isIsoDay(day) && isId(sceneId, MAX_SCENE_ID)) dayScenes[day] = sceneId;
  }

  const interests = dedupe(local.eraInterests.filter((id) => isId(id, MAX_ERA_ID)));
  const activeEraId = isId(local.activeEraId, MAX_ERA_ID) ? local.activeEraId : null;
  // Installs from before sync never stamped their choices; epoch 0 lets them
  // seed an empty server copy while losing to any stamped choice.
  const stamp = (atMs: number | null) => (isTimestampMs(atMs) ? Math.round(atMs) : 0);

  return {
    p_active_era_id: activeEraId,
    p_active_era_set_at_ms: activeEraId ? stamp(local.activeEraSetAtMs) : null,
    // Empty picks are "no opinion" (see utils/progress-sync.ts).
    p_era_interests: interests.length > 0 ? interests : null,
    p_era_interests_set_at_ms: interests.length > 0 ? stamp(local.eraInterestsSetAtMs) : null,
    p_era_progress: eraProgress,
    p_completed_scene_ids: dedupe(local.completedSceneIds.filter((id) => isId(id, MAX_SCENE_ID))),
    p_day_scenes: dayScenes,
    p_visit_days: dedupe(local.visitDays.filter(isIsoDay)),
  };
}

function narrowEraProgress(raw: unknown): Record<string, EraProgress> {
  const out: Record<string, EraProgress> = {};
  if (!isRecord(raw)) return out;
  for (const [eraId, entry] of Object.entries(raw)) {
    if (!isId(eraId, MAX_ERA_ID) || !isRecord(entry)) continue;
    const daysDone = typeof entry.daysDone === 'number' && entry.daysDone >= 0 ? entry.daysDone : 0;
    const lastCompletedOn = isIsoDay(entry.lastCompletedOn) ? toIsoDate(entry.lastCompletedOn) : null;
    out[eraId] = { daysDone, lastCompletedOn };
  }
  return out;
}

function narrowIds<T>(raw: unknown, max: number, brand: (value: string) => T): T[] {
  if (!Array.isArray(raw)) return [];
  return dedupe(raw.filter((value): value is string => isId(value, max))).map(brand);
}

function narrowDayScenes(raw: unknown): Record<string, SceneId> {
  const out: Record<string, SceneId> = {};
  if (!isRecord(raw)) return out;
  for (const [day, sceneId] of Object.entries(raw)) {
    if (isIsoDay(day) && isId(sceneId, MAX_SCENE_ID)) out[day] = toSceneId(sceneId);
  }
  return out;
}

/**
 * The RPC's jsonb answer as a ProgressSnapshot. Throws only when the answer
 * isn't an object at all — that's a broken server, not a bad entry.
 */
export function parseSyncProgressResponse(raw: unknown): ProgressSnapshot {
  if (!isRecord(raw)) throw new Error('syncProgress: unexpected response shape');
  const activeEraId: EraId | null = isId(raw.activeEraId, MAX_ERA_ID) ? toEraId(raw.activeEraId) : null;
  return {
    activeEraId,
    activeEraSetAtMs: activeEraId && isTimestampMs(raw.activeEraSetAtMs) ? raw.activeEraSetAtMs : null,
    eraInterests: narrowIds(raw.eraInterests, MAX_ERA_ID, toEraId),
    eraInterestsSetAtMs: isTimestampMs(raw.eraInterestsSetAtMs) ? raw.eraInterestsSetAtMs : null,
    eraProgress: narrowEraProgress(raw.eraProgress),
    completedSceneIds: narrowIds(raw.completedSceneIds, MAX_SCENE_ID, toSceneId),
    dayScenes: narrowDayScenes(raw.dayScenes),
    visitDays: Array.isArray(raw.visitDays) ? dedupe(raw.visitDays.filter(isIsoDay)).sort() : [],
  };
}
