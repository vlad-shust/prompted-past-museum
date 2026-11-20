import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { paintingsByDay } from '@/components/profile/visit-calendar-model';
import type { EraProgress } from '@/stores/progress.store.types';
import { toEraId, toIsoDate, toSceneId } from '@/types/common.types';
import type { EraId, IsoDate, SceneId } from '@/types/common.types';
import type { Era, Scene } from '@/types/domain.types';
import type { EraTrack } from '@/utils/tracks.types';
import { scene, scenes, walkedIds } from '@/utils/__tests__/scene-fixtures';

const EGYPT = toEraId('ancient-egypt');
const ROME = toEraId('roman-empire');
const UUID = '6a3c1f0e-8b2d-4c7a-9e51-3d2b7f0a1c44';

const MON = toIsoDate('2026-09-28');
const TUE = toIsoDate('2026-09-29');
const WED = toIsoDate('2026-09-30');

function trackOf(eraId: EraId, list: Scene[]): EraTrack {
  return { era: { id: eraId } as Era, scenes: list, dayCount: list.length };
}

function lastOn(day: IsoDate): EraProgress {
  return { daysDone: 1, lastCompletedOn: day };
}

/** egypt-1 was walked as a bundled work (id = slug); it's now a published row. */
const published = scene(EGYPT, 1, { id: UUID });
const EGYPT_PUBLISHED = trackOf(EGYPT, [scene(EGYPT, 0), published, scene(EGYPT, 2)]);
const ROME_TRACK = trackOf(ROME, scenes(ROME, 3));

describe('visit calendar — paintings published under a new id', () => {
  it('names a day recorded under the slug, with the published scene', () => {
    const days = paintingsByDay([EGYPT_PUBLISHED], {}, walkedIds(EGYPT, 2), {
      [TUE]: toSceneId(`${EGYPT}-1`),
    });
    assert.equal(days.get(TUE)?.slug, `${EGYPT}-1`);
    assert.equal(days.get(TUE)?.id, UUID, 'opening the day uses the current id');
  });

  it('names an older day (no dayScenes) from lastCompletedOn when the work was since published', () => {
    const days = paintingsByDay([EGYPT_PUBLISHED], { [EGYPT]: lastOn(MON) }, walkedIds(EGYPT, 2), {});
    assert.equal(days.get(MON)?.id, UUID);
  });

  it('still names a day recorded under the UUID (walked after publishing)', () => {
    const days = paintingsByDay([EGYPT_PUBLISHED], { [EGYPT]: lastOn(MON) }, [toSceneId(UUID)], {
      [TUE]: toSceneId(UUID),
    });
    assert.equal(days.get(MON)?.id, UUID);
    assert.equal(days.get(TUE)?.id, UUID);
  });
});

describe('visit calendar — unchanged behaviour', () => {
  it('names days from dayScenes by id', () => {
    const days = paintingsByDay([ROME_TRACK], {}, walkedIds(ROME, 2), {
      [MON]: toSceneId(`${ROME}-0`),
      [TUE]: toSceneId(`${ROME}-1`),
    });
    assert.deepEqual(
      [days.get(MON)?.slug, days.get(TUE)?.slug],
      [`${ROME}-0`, `${ROME}-1`],
    );
  });

  it('prefers dayScenes over the lastCompletedOn fallback for the same day', () => {
    const days = paintingsByDay([ROME_TRACK], { [ROME]: lastOn(TUE) }, walkedIds(ROME, 3), {
      [TUE]: toSceneId(`${ROME}-0`),
    });
    assert.equal(days.get(TUE)?.slug, `${ROME}-0`);
  });

  it('the fallback names the era\'s most recent work, ignoring later completions elsewhere', () => {
    const completed: SceneId[] = [...walkedIds(EGYPT, 1), ...walkedIds(ROME, 2), toSceneId(`${EGYPT}-2`)];
    const days = paintingsByDay([EGYPT_PUBLISHED, ROME_TRACK], { [ROME]: lastOn(WED) }, completed, {});
    assert.equal(days.get(WED)?.slug, `${ROME}-1`);
  });

  it('leaves a day unnamed when its painting is no longer in the catalogue', () => {
    const days = paintingsByDay([ROME_TRACK], {}, [], { [MON]: toSceneId('retired-painting') });
    assert.equal(days.has(MON), false);
  });

  it('leaves an era\'s days unnamed when it has no lastCompletedOn and no dayScenes', () => {
    const days = paintingsByDay([ROME_TRACK], {}, walkedIds(ROME, 2), {});
    assert.equal(days.size, 0);
  });
});
