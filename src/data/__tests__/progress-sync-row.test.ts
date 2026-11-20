import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { describe, it } from 'node:test';

import { isIsoDay, parseSyncProgressResponse, toSyncProgressArgs } from '@/data/progress-sync-row';
import type { SyncProgressArgs } from '@/data/supabase-data-source.types';
import { toEraId, toIsoDate, toSceneId } from '@/types/common.types';
import type { IsoDate, SceneId } from '@/types/common.types';
import type { ProgressSnapshot } from '@/utils/progress-sync.types';

function snapshot(partial: Partial<ProgressSnapshot> = {}): ProgressSnapshot {
  return {
    activeEraId: null,
    activeEraSetAtMs: null,
    eraInterests: [],
    eraInterestsSetAtMs: null,
    eraProgress: {},
    completedSceneIds: [],
    dayScenes: {},
    visitDays: [],
    ...partial,
  };
}

/** Persisted stores are plain JSON; these model entries a corrupt store could hold. */
const corruptDay = (raw: string) => raw as IsoDate;
const corruptScene = (raw: string) => raw as SceneId;

describe('isIsoDay', () => {
  it('accepts real calendar days only', () => {
    assert.ok(isIsoDay('2024-02-29'));
    assert.ok(!isIsoDay('2023-02-29'));
    assert.ok(!isIsoDay('2024-02-30'));
    assert.ok(!isIsoDay('2024-13-01'));
    assert.ok(!isIsoDay('2024-1-01'));
    assert.ok(!isIsoDay(20240101));
    assert.ok(!isIsoDay(null));
  });
});

describe('toSyncProgressArgs', () => {
  it('maps a real visitor onto the RPC arguments', () => {
    const args = toSyncProgressArgs(
      snapshot({
        activeEraId: toEraId('roman-empire'),
        activeEraSetAtMs: 1_790_000_000_000,
        eraInterests: [toEraId('feudal-japan')],
        eraInterestsSetAtMs: 1_780_000_000_000,
        eraProgress: { 'roman-empire': { daysDone: 2, lastCompletedOn: toIsoDate('2026-10-02') } },
        completedSceneIds: [toSceneId('rome-a'), toSceneId('rome-b')],
        dayScenes: { '2026-10-02': toSceneId('rome-b') },
        visitDays: [toIsoDate('2026-10-01'), toIsoDate('2026-10-02')],
      }),
    );
    assert.deepEqual(args, {
      p_active_era_id: 'roman-empire',
      p_active_era_set_at_ms: 1_790_000_000_000,
      p_era_interests: ['feudal-japan'],
      p_era_interests_set_at_ms: 1_780_000_000_000,
      p_era_progress: { 'roman-empire': { daysDone: 2, lastCompletedOn: '2026-10-02' } },
      p_completed_scene_ids: ['rome-a', 'rome-b'],
      p_day_scenes: { '2026-10-02': 'rome-b' },
      p_visit_days: ['2026-10-01', '2026-10-02'],
    } satisfies SyncProgressArgs);
  });

  it('stamps pre-sync choices with epoch 0 so they lose to any stamped choice', () => {
    const args = toSyncProgressArgs(
      snapshot({ activeEraId: toEraId('rome'), eraInterests: [toEraId('japan')] }),
    );
    assert.equal(args.p_active_era_set_at_ms, 0);
    assert.equal(args.p_era_interests_set_at_ms, 0);
  });

  it('sends empty picks and no active era as null ("no opinion")', () => {
    const args = toSyncProgressArgs(snapshot({ eraInterestsSetAtMs: 5 }));
    assert.equal(args.p_era_interests, null);
    assert.equal(args.p_era_interests_set_at_ms, null);
    assert.equal(args.p_active_era_id, null);
    assert.equal(args.p_active_era_set_at_ms, null);
  });

  it('drops corrupt entries instead of failing the sync', () => {
    const args = toSyncProgressArgs(
      snapshot({
        eraProgress: {
          egypt: { daysDone: Number.NaN, lastCompletedOn: corruptDay('yesterday') },
          '': { daysDone: 1, lastCompletedOn: null },
        },
        completedSceneIds: [toSceneId('a'), corruptScene(''), toSceneId('a'), corruptScene('x'.repeat(201))],
        dayScenes: { 'not-a-day': toSceneId('a'), '2026-10-01': corruptScene('') },
        visitDays: [corruptDay('2024-02-30'), toIsoDate('2026-10-01'), toIsoDate('2026-10-01')],
      }),
    );
    assert.deepEqual(args.p_era_progress, { egypt: { daysDone: 0, lastCompletedOn: null } });
    assert.deepEqual(args.p_completed_scene_ids, ['a']);
    assert.deepEqual(args.p_day_scenes, {});
    assert.deepEqual(args.p_visit_days, ['2026-10-01']);
  });
});

describe('parseSyncProgressResponse', () => {
  it('reads the RPC answer into a snapshot', () => {
    const parsed = parseSyncProgressResponse({
      activeEraId: 'viking-age',
      activeEraSetAtMs: 1_790_000_000_000,
      eraInterests: ['feudal-japan', 'renaissance'],
      eraInterestsSetAtMs: 0,
      eraProgress: { 'viking-age': { daysDone: 1, lastCompletedOn: '2026-10-10' } },
      completedSceneIds: ['viking-a', 'egypt-a'],
      dayScenes: { '2026-10-10': 'viking-a' },
      visitDays: ['2026-10-10', '2026-10-09'],
    });
    assert.deepEqual(parsed, {
      activeEraId: 'viking-age',
      activeEraSetAtMs: 1_790_000_000_000,
      eraInterests: ['feudal-japan', 'renaissance'],
      eraInterestsSetAtMs: 0,
      eraProgress: { 'viking-age': { daysDone: 1, lastCompletedOn: '2026-10-10' } },
      completedSceneIds: ['viking-a', 'egypt-a'],
      dayScenes: { '2026-10-10': 'viking-a' },
      visitDays: ['2026-10-09', '2026-10-10'],
    });
  });

  it('a fresh account reads as an empty walk', () => {
    const parsed = parseSyncProgressResponse({
      activeEraId: null,
      activeEraSetAtMs: null,
      eraInterests: [],
      eraInterestsSetAtMs: null,
      eraProgress: {},
      completedSceneIds: [],
      dayScenes: {},
      visitDays: [],
    });
    assert.deepEqual(parsed, snapshot());
  });

  it('skips malformed entries and rejects a non-object answer', () => {
    const parsed = parseSyncProgressResponse({
      activeEraId: 42,
      eraInterests: 'rome',
      eraProgress: { egypt: 'lots', rome: { daysDone: -1, lastCompletedOn: 'soon' } },
      completedSceneIds: ['a', 7, null, 'a'],
      dayScenes: { nope: 'a', '2026-10-01': 3 },
      visitDays: ['2026-10-01', 'x'],
    });
    assert.equal(parsed.activeEraId, null);
    assert.deepEqual(parsed.eraInterests, []);
    assert.deepEqual(parsed.eraProgress, { rome: { daysDone: 0, lastCompletedOn: null } });
    assert.deepEqual(parsed.completedSceneIds, ['a']);
    assert.deepEqual(parsed.dayScenes, {});
    assert.deepEqual(parsed.visitDays, ['2026-10-01']);
    assert.throws(() => parseSyncProgressResponse(null));
    assert.throws(() => parseSyncProgressResponse([]));
  });
});

describe('RPC contract', () => {
  const REPO_ROOT = resolve(__dirname, '..', '..', '..');
  const MIGRATION = join(REPO_ROOT, 'supabase', 'migrations', '20261125000100_visitor_progress_sync.sql');

  it('every argument the app sends is a parameter of sync_visitor_progress', () => {
    assert.ok(existsSync(MIGRATION), 'sync migration is missing');
    const sql = readFileSync(MIGRATION, 'utf8');
    const signature = /create or replace function public\.sync_visitor_progress\(([\s\S]*?)\)\s*returns/.exec(sql);
    assert.ok(signature, 'sync_visitor_progress signature not found');
    const params = new Set([...signature[1]!.matchAll(/\b(p_[a-z_]+)\b/g)].map((m) => m[1]));
    for (const key of Object.keys(toSyncProgressArgs(snapshot()))) {
      assert.ok(params.has(key), `${key} is not a parameter of sync_visitor_progress`);
    }
  });
});
