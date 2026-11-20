import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { MOCK_SCENES } from '@/content/scenes';
import { toEraId, toIsoDate, toSceneId } from '@/types/common.types';
import type { SceneId } from '@/types/common.types';
import type { Scene } from '@/types/domain.types';
import { todaysLesson, walkOf } from '@/utils/lessons';
import type { TodaysLessonInput } from '@/utils/lessons';
import { buildTracks } from '@/utils/tracks';
import type { EraTrack } from '@/utils/tracks.types';
import { scene, scenes, walkedIds } from './scene-fixtures';

const TODAY = toIsoDate('2026-10-01');
const EGYPT = toEraId('ancient-egypt');
const ROME = toEraId('roman-empire');

function trackOf(list: Scene[]): EraTrack {
  const sorted = [...list].sort((a, b) => a.historicalYear - b.historicalYear);
  return { era: { id: sorted[0]!.eraId } as EraTrack['era'], scenes: sorted, dayCount: sorted.length };
}

function input(partial: Partial<TodaysLessonInput>): TodaysLessonInput {
  return { completedSceneIds: [], dayScenes: {}, completedToday: false, today: TODAY, ...partial };
}

/**
 * Plays the Today screen day after day: take today's lesson, step into it
 * (as completeDay records it), until the track reports done. Returns the
 * slugs in the order they were shown.
 */
function walkToTheEnd(track: EraTrack, completed: SceneId[] = []): string[] {
  const shown: string[] = [];
  const ids = [...completed];
  for (let guard = 0; guard < track.dayCount + 5; guard += 1) {
    const lesson = todaysLesson(track, input({ completedSceneIds: ids }));
    if (lesson.trackDone) return shown;
    shown.push(lesson.scene!.slug);
    ids.push(lesson.scene!.id);
  }
  throw new Error('walk never finished');
}

describe('todaysLesson — normal walk', () => {
  const track = trackOf(scenes(EGYPT, 5));

  it('starts a fresh track at its first painting, day 1', () => {
    const lesson = todaysLesson(track, input({}));
    assert.equal(lesson.scene?.slug, `${EGYPT}-0`);
    assert.equal(lesson.dayNumber, 1);
    assert.equal(lesson.trackDone, false);
  });

  it('continues at the first painting not yet walked', () => {
    const lesson = todaysLesson(track, input({ completedSceneIds: walkedIds(EGYPT, 3) }));
    assert.equal(lesson.scene?.slug, `${EGYPT}-3`);
    assert.equal(lesson.dayNumber, 4);
    assert.equal(lesson.upNext?.slug, `${EGYPT}-4`);
  });

  it('ignores paintings walked in other eras', () => {
    const lesson = todaysLesson(
      track,
      input({ completedSceneIds: [...walkedIds(ROME, 4), ...walkedIds(EGYPT, 1)] }),
    );
    assert.equal(lesson.scene?.slug, `${EGYPT}-1`);
    assert.equal(lesson.dayNumber, 2);
  });

  it('reports the track done once every painting is walked', () => {
    const lesson = todaysLesson(track, input({ completedSceneIds: walkedIds(EGYPT, 5) }));
    assert.equal(lesson.trackDone, true);
    assert.equal(lesson.scene, null);
  });

  it('shows every painting exactly once, in walking order', () => {
    assert.deepEqual(
      walkToTheEnd(track),
      track.scenes.map((s) => s.slug),
    );
  });
});

describe('todaysLesson — after today\'s lesson is done', () => {
  const track = trackOf(scenes(EGYPT, 5));

  it('keeps showing the painting stepped into today, with tomorrow\'s as up next', () => {
    const lesson = todaysLesson(
      track,
      input({
        completedSceneIds: walkedIds(EGYPT, 3),
        dayScenes: { [TODAY]: toSceneId(`${EGYPT}-2`) },
        completedToday: true,
      }),
    );
    assert.equal(lesson.scene?.slug, `${EGYPT}-2`);
    assert.equal(lesson.dayNumber, 3);
    assert.equal(lesson.upNext?.slug, `${EGYPT}-3`);
  });

  it('falls back to the last painting completed in this track when dayScenes has no entry', () => {
    // dayScenes is only recorded from 2026-09-26 on; completion order still is.
    const lesson = todaysLesson(
      track,
      input({
        completedSceneIds: [...walkedIds(EGYPT, 2), toSceneId(`${ROME}-0`)],
        completedToday: true,
      }),
    );
    assert.equal(lesson.scene?.slug, `${EGYPT}-1`);
  });

  it('goes straight to done when today\'s painting was the last one', () => {
    const lesson = todaysLesson(
      track,
      input({
        completedSceneIds: walkedIds(EGYPT, 5),
        dayScenes: { [TODAY]: toSceneId(`${EGYPT}-4`) },
        completedToday: true,
      }),
    );
    assert.equal(lesson.trackDone, true);
  });
});

describe('todaysLesson — reopened eras (new paintings added after the walk)', () => {
  it('shows a new painting added at the end of the era', () => {
    const track = trackOf([...scenes(EGYPT, 5), scene(EGYPT, 5)]);
    const lesson = todaysLesson(track, input({ completedSceneIds: walkedIds(EGYPT, 5) }));
    assert.equal(lesson.scene?.slug, `${EGYPT}-5`);
    assert.equal(lesson.dayNumber, 6);
  });

  it('shows a new painting dated mid-era, not the already-seen painting at index daysDone', () => {
    const added = scene(EGYPT, 99, { year: 2.5 }); // sorts between egypt-2 and egypt-3
    const track = trackOf([...scenes(EGYPT, 5), added]);
    const oldIndexPick = track.scenes[5]!; // what `scenes[daysDone]` used to show
    const lesson = todaysLesson(track, input({ completedSceneIds: walkedIds(EGYPT, 5) }));

    assert.equal(oldIndexPick.slug, `${EGYPT}-4`, 'the old logic would repeat a seen painting');
    assert.equal(lesson.scene?.slug, added.slug);
    assert.equal(lesson.dayNumber, 6);
    assert.equal(lesson.upNext, null);
  });

  it('shows several new paintings in walking order, then finishes', () => {
    const early = scene(EGYPT, 90, { year: 0.5 });
    const late = scene(EGYPT, 91, { year: 3.5 });
    const track = trackOf([...scenes(EGYPT, 5), late, early]);
    assert.deepEqual(walkToTheEnd(track, walkedIds(EGYPT, 5)), [early.slug, late.slug]);
  });

  it('shows only the new painting when one was swapped in (daysDone would say "done")', () => {
    // 5 walked; editorial removed egypt-4 and added one — dayCount is still 5.
    const added = scene(EGYPT, 99, { year: 1.5 });
    const track = trackOf([...scenes(EGYPT, 4), added]);
    assert.deepEqual(walkToTheEnd(track, walkedIds(EGYPT, 5)), [added.slug]);
  });

  it('a partly walked era picks up new paintings it gains before the visitor\'s position', () => {
    // 3 of 5 walked; a painting is added before them. It comes first.
    const added = scene(EGYPT, 99, { year: -1 });
    const track = trackOf([...scenes(EGYPT, 5), added]);
    assert.deepEqual(walkToTheEnd(track, walkedIds(EGYPT, 3)), [
      added.slug,
      `${EGYPT}-3`,
      `${EGYPT}-4`,
    ]);
  });
});

describe('todaysLesson — paintings published under a new id', () => {
  it('does not repeat a painting walked as a bundled work and since published with a UUID id', () => {
    const published = scene(EGYPT, 1, { id: '6a3c1f0e-8b2d-4c7a-9e51-3d2b7f0a1c44' });
    const track = trackOf([scene(EGYPT, 0), published, scene(EGYPT, 2)]);
    // Walked egypt-0 and egypt-1 back when egypt-1's id was its slug.
    const lesson = todaysLesson(track, input({ completedSceneIds: walkedIds(EGYPT, 2) }));
    assert.equal(lesson.scene?.slug, `${EGYPT}-2`);
    assert.equal(lesson.dayNumber, 3);
    assert.equal(walkOf(track, walkedIds(EGYPT, 2)).walked, 2);
  });

  it('recognises today\'s painting through dayScenes by slug after it was published', () => {
    const published = scene(EGYPT, 1, { id: '6a3c1f0e-8b2d-4c7a-9e51-3d2b7f0a1c44' });
    const track = trackOf([scene(EGYPT, 0), published, scene(EGYPT, 2)]);
    const lesson = todaysLesson(
      track,
      input({
        completedSceneIds: walkedIds(EGYPT, 2),
        dayScenes: { [TODAY]: toSceneId(`${EGYPT}-1`) },
        completedToday: true,
      }),
    );
    assert.equal(lesson.scene?.id, published.id);
  });
});

describe('todaysLesson — real Ancient Egypt catalogue', () => {
  const toScene = (def: (typeof MOCK_SCENES)[number]): Scene => ({
    ...def,
    details: [],
    id: toSceneId(def.slug),
    publishedOn: toIsoDate('2024-01-01'),
    onThisDay: false,
  });
  const egyptDefs = MOCK_SCENES.filter((def) => def.eraId === EGYPT);
  const before = buildTracks(egyptDefs.map(toScene))[0]!;
  const walkedAll = before.scenes.map((s) => s.id);

  it('shows the newly added 1500 BC painting after the whole wing was walked', () => {
    const added = { ...egyptDefs[0]!, slug: 'new-mid-era-painting', historicalYear: -1500 };
    const after = buildTracks([...egyptDefs, added].map(toScene))[0]!;
    const lesson = todaysLesson(after, input({ completedSceneIds: walkedAll }));

    assert.equal(after.dayCount, before.dayCount + 1);
    assert.ok(walkedAll.includes(after.scenes[before.dayCount]!.id), 'old pick was a seen painting');
    assert.equal(lesson.scene?.slug, 'new-mid-era-painting');
    assert.equal(lesson.dayNumber, after.dayCount);
  });
});
