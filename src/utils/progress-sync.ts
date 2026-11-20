import type { EraProgress } from '@/stores/progress.store.types';
import type { IsoDate } from '@/types/common.types';
import type { ProgressReconciliation, ProgressSnapshot } from './progress-sync.types';

/**
 * Merging a device's progress with the visitor's server copy.
 *
 * The server applies the same rules in sync_visitor_progress()
 * (supabase/migrations/20261125000100_visitor_progress_sync.sql); keep the
 * two in step. Each rule gives the same answer whatever order copies are
 * merged in and however often, so two devices, retries and offline edits
 * all converge:
 *
 *  - completedSceneIds, visitDays: union. Completions keep the server's
 *    order (oldest first) with anything new appended in device order.
 *  - dayScenes: union; where both name a painting for the same day, the
 *    server's (first recorded) one stands.
 *  - eraProgress: per era, the greater daysDone and the later lastCompletedOn.
 *  - activeEraId, eraInterests: last write wins by set-at time; ties go to
 *    the server. An empty value is "no opinion", never a reason to clear the
 *    other side: picking no eras at onboarding on a new phone must not wipe
 *    picks made on the old one.
 *
 * Pure and free of React Native imports, so it runs under the unit tests.
 */

/** Same cap as progress.store: the Profile calendar's year of visits. */
export const MAX_VISIT_DAYS = 366;

interface Register<T> {
  value: T;
  atMs: number | null;
}

function mergeRegister<T>(
  local: Register<T>,
  remote: Register<T>,
  isEmpty: (value: T) => boolean,
  same: (a: T, b: T) => boolean,
): Register<T> {
  if (isEmpty(local.value)) return remote;
  if (isEmpty(remote.value)) return local;
  // Same value: take the server's stamp (it may have clamped a skewed clock),
  // so a matching value never reads as a pending change.
  if (same(local.value, remote.value)) return remote;
  return (local.atMs ?? 0) > (remote.atMs ?? 0) ? local : remote;
}

function sameList<T>(a: readonly T[], b: readonly T[]): boolean {
  return a.length === b.length && a.every((value, index) => value === b[index]);
}

function unionInOrder<T>(first: readonly T[], then: readonly T[]): T[] {
  const seen = new Set<T>();
  const out: T[] = [];
  for (const value of [...first, ...then]) {
    if (seen.has(value)) continue;
    seen.add(value);
    out.push(value);
  }
  return out;
}

function laterDay(a: IsoDate | null, b: IsoDate | null): IsoDate | null {
  if (!a) return b;
  if (!b) return a;
  return a >= b ? a : b;
}

function mergeEraProgress(
  local: Readonly<Record<string, EraProgress>>,
  remote: Readonly<Record<string, EraProgress>>,
): Record<string, EraProgress> {
  const merged: Record<string, EraProgress> = { ...remote };
  for (const [eraId, mine] of Object.entries(local)) {
    const theirs = merged[eraId];
    merged[eraId] = theirs
      ? {
          daysDone: Math.max(theirs.daysDone, mine.daysDone),
          lastCompletedOn: laterDay(theirs.lastCompletedOn, mine.lastCompletedOn),
        }
      : mine;
  }
  return merged;
}

export function mergeProgress(local: ProgressSnapshot, remote: ProgressSnapshot): ProgressSnapshot {
  const activeEra = mergeRegister(
    { value: local.activeEraId, atMs: local.activeEraSetAtMs },
    { value: remote.activeEraId, atMs: remote.activeEraSetAtMs },
    (value) => value === null,
    (a, b) => a === b,
  );
  const interests = mergeRegister(
    { value: local.eraInterests, atMs: local.eraInterestsSetAtMs },
    { value: remote.eraInterests, atMs: remote.eraInterestsSetAtMs },
    (value) => value.length === 0,
    sameList,
  );
  return {
    activeEraId: activeEra.value,
    activeEraSetAtMs: activeEra.atMs,
    eraInterests: interests.value,
    eraInterestsSetAtMs: interests.atMs,
    eraProgress: mergeEraProgress(local.eraProgress, remote.eraProgress),
    completedSceneIds: unionInOrder(remote.completedSceneIds, local.completedSceneIds),
    dayScenes: { ...local.dayScenes, ...remote.dayScenes },
    visitDays: unionInOrder(remote.visitDays, local.visitDays).sort().slice(-MAX_VISIT_DAYS),
  };
}

function sameRecord<V>(
  a: Readonly<Record<string, V>>,
  b: Readonly<Record<string, V>>,
  same: (x: V, y: V) => boolean,
): boolean {
  const keys = Object.keys(a);
  if (keys.length !== Object.keys(b).length) return false;
  return keys.every((key) => key in b && same(a[key]!, b[key]!));
}

type FieldEquality = { [K in keyof ProgressSnapshot]: (a: ProgressSnapshot[K], b: ProgressSnapshot[K]) => boolean };

const FIELD_EQUALITY: FieldEquality = {
  activeEraId: (a, b) => a === b,
  activeEraSetAtMs: (a, b) => a === b,
  eraInterests: sameList,
  eraInterestsSetAtMs: (a, b) => a === b,
  eraProgress: (a, b) =>
    sameRecord(a, b, (x, y) => x.daysDone === y.daysDone && x.lastCompletedOn === y.lastCompletedOn),
  completedSceneIds: sameList,
  dayScenes: (a, b) => sameRecord(a, b, (x, y) => x === y),
  visitDays: sameList,
};

const FIELDS = Object.keys(FIELD_EQUALITY) as (keyof ProgressSnapshot)[];

/** The fields whose values differ between two snapshots. */
export function changedProgressFields(
  a: ProgressSnapshot,
  b: ProgressSnapshot,
): (keyof ProgressSnapshot)[] {
  return FIELDS.filter((field) => {
    const same = FIELD_EQUALITY[field] as (x: unknown, y: unknown) => boolean;
    return !same(a[field], b[field]);
  });
}

export function sameProgress(a: ProgressSnapshot, b: ProgressSnapshot): boolean {
  return changedProgressFields(a, b).length === 0;
}

/**
 * Folds the server's answer into what the device holds *now*. Not a plain
 * replace: the visitor may have finished a lesson while the request was in
 * flight, and that must neither be lost nor left unsent.
 */
export function reconcileProgress(
  local: ProgressSnapshot,
  remote: ProgressSnapshot,
): ProgressReconciliation {
  const merged = mergeProgress(local, remote);
  return { merged, localAhead: !sameProgress(merged, remote) };
}
