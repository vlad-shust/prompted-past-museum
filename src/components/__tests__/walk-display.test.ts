import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { hallOpeningIndex, hallStops, wingMeta } from '@/components/explore/wing-progress';
import { wingBannerState } from '@/components/profile/wing-banner-model';
import { toEraId, toIsoDate } from '@/types/common.types';
import type { SceneId } from '@/types/common.types';
import type { Era, Scene } from '@/types/domain.types';
import { countWalkedTracks, todaysLesson, walkOf } from '@/utils/lessons';
import type { EraTrack } from '@/utils/tracks.types';
import { scene, scenes, walkedIds } from '@/utils/__tests__/scene-fixtures';

/**
 * The three places that used to read the `daysDone` counter as a position —
 * Explore's door label (wingMeta), Explore's era hall (hallStops), and the
 * Profile wing banner — plus the Profile "eras walked" count. Each scenario
 * below is one the counter got wrong once editorial adds paintings.
 */

const EGYPT = toEraId('ancient-egypt');

function trackOf(list: Scene[]): EraTrack {
  const sorted = [...list].sort((a, b) => a.historicalYear - b.historicalYear);
  return { era: { id: EGYPT } as Era, scenes: sorted, dayCount: sorted.length };
}

const walkedAllFive = walkedIds(EGYPT, 5); // egypt-0 … egypt-4, years 0 … 4

/** 5 walked, then a painting dated between egypt-2 and egypt-3 was added. */
const midEraAdded = scene(EGYPT, 99, { year: 2.5 });
const MID_ERA = trackOf([...scenes(EGYPT, 5), midEraAdded]);

/** 5 walked, then egypt-4 was removed and a new one added: still 5 works. */
const swappedIn = scene(EGYPT, 98, { year: 1.5 });
const SWAPPED = trackOf([...scenes(EGYPT, 4), swappedIn]);

/** egypt-1 walked as a bundled work; now published with a UUID id, same slug. */
const PUBLISHED = trackOf([
  scene(EGYPT, 0),
  scene(EGYPT, 1, { id: '6a3c1f0e-8b2d-4c7a-9e51-3d2b7f0a1c44' }),
  scene(EGYPT, 2),
]);

const slugsOf = (track: EraTrack, stops: string[], stop: string) =>
  track.scenes.filter((_, i) => stops[i] === stop).map((s) => s.slug);

describe('Explore door label — wingMeta from the walk', () => {
  it('a new mid-era painting reads as the next day, not "walked"', () => {
    assert.equal(wingMeta(MID_ERA.dayCount, walkOf(MID_ERA, walkedAllFive).walked), 'Day 6 of 6');
  });

  it('a swapped-in painting reopens the door (the counter said "Walked · 5 works")', () => {
    assert.equal(wingMeta(SWAPPED.dayCount, walkOf(SWAPPED, walkedAllFive).walked), 'Day 5 of 5');
  });

  it('a painting published under a new id still counts as walked', () => {
    assert.equal(wingMeta(3, walkOf(PUBLISHED, walkedIds(EGYPT, 3)).walked), 'Walked · 3 works');
  });

  it('keeps the fresh and in-progress labels', () => {
    const track = trackOf(scenes(EGYPT, 5));
    assert.equal(wingMeta(5, walkOf(track, []).walked), 'Explore in 5 days');
    assert.equal(wingMeta(5, walkOf(track, walkedIds(EGYPT, 2)).walked), 'Day 3 of 5');
    assert.equal(wingMeta(1, 0), 'Explore in 1 day');
  });
});

describe('Explore era hall — stops from the walk', () => {
  it('lights the new mid-era painting as next and keeps every seen one walked', () => {
    const stops = hallStops(MID_ERA.scenes, walkOf(MID_ERA, walkedAllFive));
    // Position-based: indexes 0-4 walked, index 5 (egypt-4, already seen) "next".
    assert.deepEqual(slugsOf(MID_ERA, stops, 'next'), [midEraAdded.slug]);
    assert.deepEqual(slugsOf(MID_ERA, stops, 'walked'), walkedAllFive);
    assert.deepEqual(slugsOf(MID_ERA, stops, 'ahead'), []);
    assert.equal(hallOpeningIndex(stops), 2, 'opens beside the new work at index 3');
  });

  it('a painting added before the visitor\'s position is next; the rest stay as they were', () => {
    const early = scene(EGYPT, 97, { year: -1 });
    const track = trackOf([...scenes(EGYPT, 5), early]);
    const stops = hallStops(track.scenes, walkOf(track, walkedIds(EGYPT, 3)));
    assert.deepEqual(stops, ['next', 'walked', 'walked', 'walked', 'ahead', 'ahead']);
    assert.equal(hallOpeningIndex(stops), 0);
  });

  it('a swapped-in painting is next, not a fully walked hall', () => {
    const stops = hallStops(SWAPPED.scenes, walkOf(SWAPPED, walkedAllFive));
    assert.deepEqual(slugsOf(SWAPPED, stops, 'next'), [swappedIn.slug]);
    assert.equal(stops.filter((s) => s === 'walked').length, 4);
  });

  it('a painting published under a new id stays walked', () => {
    const stops = hallStops(PUBLISHED.scenes, walkOf(PUBLISHED, walkedIds(EGYPT, 2)));
    assert.deepEqual(stops, ['walked', 'walked', 'next']);
  });

  it('fresh hall: first is next, opens at the start', () => {
    const track = trackOf(scenes(EGYPT, 4));
    const stops = hallStops(track.scenes, walkOf(track, []));
    assert.deepEqual(stops, ['next', 'ahead', 'ahead', 'ahead']);
    assert.equal(hallOpeningIndex(stops), 0);
  });

  it('fully walked hall: nothing lit, opens near the end (same as before)', () => {
    const track = trackOf(scenes(EGYPT, 5));
    const stops = hallStops(track.scenes, walkOf(track, walkedAllFive));
    assert.ok(stops.every((s) => s === 'walked'));
    assert.equal(hallOpeningIndex(stops), 3);
  });
});

describe('Profile wing banner — from the walk', () => {
  it('shows the new mid-era painting, not the already-seen one at index daysDone', () => {
    const state = wingBannerState(MID_ERA, walkOf(MID_ERA, walkedAllFive));
    assert.equal(state.standingIn?.slug, midEraAdded.slug);
    assert.notEqual(state.standingIn?.slug, MID_ERA.scenes[5]!.slug); // egypt-4, seen
    assert.equal(state.label, 'DAY 6 OF 6');
    assert.equal(state.walked, false);
    assert.equal(state.fraction, 5 / 6);
  });

  it('a swapped-in painting: not "WALKED", and the rail is not full', () => {
    const state = wingBannerState(SWAPPED, walkOf(SWAPPED, walkedAllFive));
    assert.equal(state.walked, false);
    assert.equal(state.label, 'DAY 5 OF 5');
    assert.equal(state.fraction, 4 / 5);
    assert.equal(state.standingIn?.slug, swappedIn.slug);
  });

  it('a painting published under a new id: still walked end to end', () => {
    const state = wingBannerState(PUBLISHED, walkOf(PUBLISHED, walkedIds(EGYPT, 3)));
    assert.equal(state.walked, true);
    assert.equal(state.label, 'WALKED');
    assert.equal(state.fraction, 1);
  });

  it('fully walked: "WALKED", full rail, the last painting behind it', () => {
    const track = trackOf(scenes(EGYPT, 5));
    const state = wingBannerState(track, walkOf(track, walkedAllFive));
    assert.equal(state.label, 'WALKED');
    assert.equal(state.fraction, 1);
    assert.equal(state.standingIn?.slug, `${EGYPT}-4`);
  });

  it('fresh: day 1, empty rail, the first painting behind it', () => {
    const track = trackOf(scenes(EGYPT, 5));
    const state = wingBannerState(track, walkOf(track, []));
    assert.equal(state.label, 'DAY 1 OF 5');
    assert.equal(state.fraction, 0);
    assert.equal(state.standingIn?.slug, `${EGYPT}-0`);
  });
});

describe('Profile "eras walked" count', () => {
  const ROME = toEraId('roman-empire');
  const romeDone: EraTrack = { era: { id: ROME } as Era, scenes: scenes(ROME, 3), dayCount: 3 };
  const romeWalked = walkedIds(ROME, 3);

  it('does not count an era that gained a painting (mid-era or swapped in)', () => {
    assert.equal(countWalkedTracks([romeDone, MID_ERA], [...romeWalked, ...walkedAllFive]), 1);
    assert.equal(countWalkedTracks([romeDone, SWAPPED], [...romeWalked, ...walkedAllFive]), 1);
  });

  it('counts an era whose painting was published under a new id', () => {
    assert.equal(countWalkedTracks([romeDone, PUBLISHED], [...romeWalked, ...walkedIds(EGYPT, 3)]), 2);
  });
});

describe('every screen points at the same next painting as Today', () => {
  const cases: [string, EraTrack, SceneId[]][] = [
    ['fresh', trackOf(scenes(EGYPT, 5)), []],
    ['partway', trackOf(scenes(EGYPT, 5)), walkedIds(EGYPT, 2)],
    ['new painting mid-era', MID_ERA, walkedAllFive],
    ['swapped-in painting', SWAPPED, walkedAllFive],
    ['published under a new id', PUBLISHED, walkedIds(EGYPT, 2)],
  ];

  for (const [label, track, completed] of cases) {
    it(label, () => {
      const walk = walkOf(track, completed);
      const today = todaysLesson(track, {
        completedSceneIds: completed,
        dayScenes: {},
        completedToday: false,
        today: toIsoDate('2026-10-01'),
      });
      const stops = hallStops(track.scenes, walk);
      const hallNext = track.scenes[stops.indexOf('next')];
      const banner = wingBannerState(track, walk);

      assert.equal(hallNext?.id, today.scene?.id, 'hall "next" = Today');
      assert.equal(banner.standingIn?.id, today.scene?.id, 'banner = Today');
      assert.equal(banner.label, `DAY ${today.dayNumber} OF ${track.dayCount}`, 'banner day = Today');
      assert.equal(
        wingMeta(track.dayCount, walk.walked),
        walk.walked === 0 ? `Explore in ${track.dayCount} days` : `Day ${today.dayNumber} of ${track.dayCount}`,
        'door label day = Today',
      );
    });
  }
});
