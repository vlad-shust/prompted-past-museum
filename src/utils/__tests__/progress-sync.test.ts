import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { toEraId, toIsoDate, toSceneId } from '@/types/common.types';
import type { EraId, IsoDate, SceneId } from '@/types/common.types';
import {
  changedProgressFields,
  MAX_VISIT_DAYS,
  mergeProgress,
  reconcileProgress,
  sameProgress,
} from '@/utils/progress-sync';
import type { ProgressSnapshot } from '@/utils/progress-sync.types';

const day = (raw: string): IsoDate => toIsoDate(raw);
const ids = (...raw: string[]): SceneId[] => raw.map(toSceneId);
const eras = (...raw: string[]): EraId[] => raw.map(toEraId);

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

describe('mergeProgress — sets', () => {
  it('unions completions, keeping the server order and appending new ones in device order', () => {
    const merged = mergeProgress(
      snapshot({ completedSceneIds: ids('c', 'a', 'd') }),
      snapshot({ completedSceneIds: ids('a', 'b', 'c') }),
    );
    assert.deepEqual(merged.completedSceneIds, ids('a', 'b', 'c', 'd'));
  });

  it('unions visit days, sorted, capped to the most recent year', () => {
    const merged = mergeProgress(
      snapshot({ visitDays: [day('2026-10-03'), day('2026-10-01')] }),
      snapshot({ visitDays: [day('2026-10-02'), day('2026-10-03')] }),
    );
    assert.deepEqual(merged.visitDays, ['2026-10-01', '2026-10-02', '2026-10-03']);

    const many = Array.from({ length: MAX_VISIT_DAYS + 10 }, (_, i) =>
      day(new Date(Date.UTC(2025, 0, 1 + i)).toISOString().slice(0, 10)),
    );
    const capped = mergeProgress(snapshot({ visitDays: many.slice(0, 200) }), snapshot({ visitDays: many.slice(150) }));
    assert.equal(capped.visitDays.length, MAX_VISIT_DAYS);
    assert.equal(capped.visitDays.at(-1), many.at(-1));
  });

  it("keeps the server's painting for a day both devices recorded, and adds the rest", () => {
    const merged = mergeProgress(
      snapshot({ dayScenes: { '2026-10-01': toSceneId('mine'), '2026-10-02': toSceneId('only-here') } }),
      snapshot({ dayScenes: { '2026-10-01': toSceneId('theirs') } }),
    );
    assert.deepEqual(merged.dayScenes, { '2026-10-01': 'theirs', '2026-10-02': 'only-here' });
  });

  it('takes the greater lesson count and the later date per era', () => {
    const merged = mergeProgress(
      snapshot({
        eraProgress: {
          egypt: { daysDone: 2, lastCompletedOn: day('2026-10-09') },
          rome: { daysDone: 1, lastCompletedOn: null },
        },
      }),
      snapshot({
        eraProgress: {
          egypt: { daysDone: 5, lastCompletedOn: day('2026-10-01') },
          greece: { daysDone: 1, lastCompletedOn: day('2026-09-01') },
        },
      }),
    );
    assert.deepEqual(merged.eraProgress, {
      egypt: { daysDone: 5, lastCompletedOn: '2026-10-09' },
      rome: { daysDone: 1, lastCompletedOn: null },
      greece: { daysDone: 1, lastCompletedOn: '2026-09-01' },
    });
  });
});

describe('mergeProgress — last write wins', () => {
  it('the later active-era choice wins, whichever side it is on', () => {
    const older = snapshot({ activeEraId: toEraId('egypt'), activeEraSetAtMs: 1_000 });
    const newer = snapshot({ activeEraId: toEraId('rome'), activeEraSetAtMs: 2_000 });
    assert.equal(mergeProgress(older, newer).activeEraId, 'rome');
    assert.equal(mergeProgress(newer, older).activeEraId, 'rome');
  });

  it('a tie goes to the server, as it does in SQL', () => {
    const local = snapshot({ activeEraId: toEraId('egypt'), activeEraSetAtMs: 1_000 });
    const remote = snapshot({ activeEraId: toEraId('rome'), activeEraSetAtMs: 1_000 });
    assert.equal(mergeProgress(local, remote).activeEraId, 'rome');
  });

  it('a choice from before sync (no stamp) seeds an empty server but loses to any stamped one', () => {
    const legacy = snapshot({ activeEraId: toEraId('egypt'), activeEraSetAtMs: null });
    assert.equal(mergeProgress(legacy, snapshot()).activeEraId, 'egypt');
    const stamped = snapshot({ activeEraId: toEraId('rome'), activeEraSetAtMs: 0 });
    assert.equal(mergeProgress(legacy, stamped).activeEraId, 'rome');
  });

  it("the same value adopts the server's stamp, so it never reads as a pending change", () => {
    const local = snapshot({ activeEraId: toEraId('rome'), activeEraSetAtMs: 9_999_999 });
    const remote = snapshot({ activeEraId: toEraId('rome'), activeEraSetAtMs: 5_000 });
    const { merged, localAhead } = reconcileProgress(local, remote);
    assert.equal(merged.activeEraSetAtMs, 5_000);
    assert.equal(localAhead, false);
  });

  it('empty interests are "no opinion": skipping the picks on a new phone keeps the old ones', () => {
    const newPhone = snapshot({ eraInterests: [], eraInterestsSetAtMs: 9_000 });
    const account = snapshot({ eraInterests: eras('japan', 'rome'), eraInterestsSetAtMs: 1_000 });
    assert.deepEqual(mergeProgress(newPhone, account).eraInterests, ['japan', 'rome']);
  });

  it('newer interests replace older ones wholesale', () => {
    const local = snapshot({ eraInterests: eras('sail'), eraInterestsSetAtMs: 2_000 });
    const remote = snapshot({ eraInterests: eras('japan', 'rome'), eraInterestsSetAtMs: 1_000 });
    const merged = mergeProgress(local, remote);
    assert.deepEqual(merged.eraInterests, ['sail']);
    assert.equal(merged.eraInterestsSetAtMs, 2_000);
  });
});

describe('reconcileProgress', () => {
  it('nothing new on the device: adopts the server copy, no follow-up', () => {
    const remote = snapshot({
      completedSceneIds: ids('a', 'b'),
      eraProgress: { egypt: { daysDone: 2, lastCompletedOn: day('2026-10-02') } },
      visitDays: [day('2026-10-01'), day('2026-10-02')],
    });
    const local = snapshot({ completedSceneIds: ids('a'), visitDays: [day('2026-10-01')] });
    const { merged, localAhead } = reconcileProgress(local, remote);
    assert.ok(sameProgress(merged, remote));
    assert.equal(localAhead, false);
  });

  it('a lesson finished while the request was in flight is kept and flagged for another sync', () => {
    const remote = snapshot({ completedSceneIds: ids('a') });
    const local = snapshot({
      completedSceneIds: ids('a', 'b'),
      dayScenes: { '2026-10-02': toSceneId('b') },
    });
    const { merged, localAhead } = reconcileProgress(local, remote);
    assert.deepEqual(merged.completedSceneIds, ids('a', 'b'));
    assert.equal(merged.dayScenes['2026-10-02'], 'b');
    assert.equal(localAhead, true);
  });
});

describe('changedProgressFields', () => {
  it('names only the fields whose values differ, ignoring key order', () => {
    const a = snapshot({
      dayScenes: { '2026-10-01': toSceneId('x'), '2026-10-02': toSceneId('y') },
      completedSceneIds: ids('x', 'y'),
    });
    const b = snapshot({
      dayScenes: { '2026-10-02': toSceneId('y'), '2026-10-01': toSceneId('x') },
      completedSceneIds: ids('x', 'y', 'z'),
    });
    assert.deepEqual(changedProgressFields(a, b), ['completedSceneIds']);
  });
});

describe('convergence across devices', () => {
  /** Deterministic PRNG so a failure reproduces. */
  function rng(seed: number): () => number {
    let state = seed >>> 0;
    return () => {
      state = (state * 1_664_525 + 1_013_904_223) >>> 0;
      return state / 2 ** 32;
    };
  }

  /** The server applies the same rules with its stored copy as the "remote" side. */
  function serverSync(stored: ProgressSnapshot, incoming: ProgressSnapshot): ProgressSnapshot {
    return mergeProgress(incoming, stored);
  }

  it('any interleaving of offline edits and syncs settles every device on the same state', () => {
    for (let seed = 1; seed <= 200; seed += 1) {
      const random = rng(seed);
      const pick = <T>(values: readonly T[]): T => values[Math.floor(random() * values.length)]!;
      let server = snapshot();
      const devices = [snapshot(), snapshot(), snapshot()];
      const everCompleted = new Set<string>();
      let clock = 1_000;

      for (let step = 0; step < 40; step += 1) {
        const index = Math.floor(random() * devices.length);
        const device = devices[index]!;
        const roll = random();
        clock += 1 + Math.floor(random() * 5);
        const today = day(`2026-10-${String(1 + Math.floor(random() * 28)).padStart(2, '0')}`);
        if (roll < 0.35) {
          const era = pick(['egypt', 'rome', 'japan']);
          const scene = toSceneId(`${era}-${Math.floor(random() * 6)}`);
          everCompleted.add(scene);
          const entry = device.eraProgress[era] ?? { daysDone: 0, lastCompletedOn: null };
          devices[index] = {
            ...device,
            eraProgress: { ...device.eraProgress, [era]: { daysDone: entry.daysDone + 1, lastCompletedOn: today } },
            completedSceneIds: device.completedSceneIds.includes(scene)
              ? device.completedSceneIds
              : [...device.completedSceneIds, scene],
            dayScenes: { ...device.dayScenes, [today]: scene },
          };
        } else if (roll < 0.5) {
          devices[index] = { ...device, activeEraId: toEraId(pick(['egypt', 'rome', 'japan'])), activeEraSetAtMs: clock };
        } else if (roll < 0.6) {
          const interests = random() < 0.3 ? [] : eras(pick(['egypt', 'rome']), pick(['japan', 'sail']));
          devices[index] = { ...device, eraInterests: interests, eraInterestsSetAtMs: clock };
        } else if (roll < 0.7) {
          devices[index] = device.visitDays.includes(today)
            ? device
            : { ...device, visitDays: [...device.visitDays, today] };
        } else {
          server = serverSync(server, device);
          devices[index] = reconcileProgress(devices[index]!, server).merged;
        }
      }

      // Everyone comes online: two rounds reach a fixed point.
      for (let round = 0; round < 2; round += 1) {
        for (let i = 0; i < devices.length; i += 1) {
          server = serverSync(server, devices[i]!);
          devices[i] = reconcileProgress(devices[i]!, server).merged;
        }
      }

      for (const device of devices) {
        assert.ok(sameProgress(device, server), `seed ${seed}: device diverged from server`);
        assert.equal(reconcileProgress(device, server).localAhead, false, `seed ${seed}: still ahead`);
      }
      assert.deepEqual(
        new Set(server.completedSceneIds),
        everCompleted,
        `seed ${seed}: a completion was lost`,
      );
    }
  });
});
