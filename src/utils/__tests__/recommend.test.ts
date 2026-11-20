import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { ERAS } from '@/content/eras';
import { toEraId, toIsoDate } from '@/types/common.types';
import type { EraId, IsoDate } from '@/types/common.types';
import type { Era, EraRegion, EraTheme } from '@/types/domain.types';
import type { EraProgress } from '@/stores/progress.store.types';
import { continuationFor, firstTrackSuggestion, rankEras } from '@/utils/recommend';
import type { RecommendationContext } from '@/utils/recommend.types';
import type { EraTrack } from '@/utils/tracks.types';
import { scene, scenes, walkedIds } from './scene-fixtures';

const TODAY = toIsoDate('2024-06-01');

/**
 * A deliberately tiny, synthetic museum so most of these tests don't ride
 * on the real content's exact tag choices — only the fixtures below that
 * say so lean on the real `ERAS`.
 */
function era(id: string, sort: number, region: EraRegion, themes: EraTheme[]): Era {
  return {
    id: toEraId(id),
    name: id,
    shortName: id,
    startYear: sort,
    endYear: sort,
    mood: '',
    intro: '',
    sort,
    region,
    themes,
  };
}

function track(e: Era, dayCount = 10): EraTrack {
  return { era: e, scenes: scenes(e.id, dayCount), dayCount };
}

const ALPHA = era('alpha', 1, 'mediterranean-world', ['monarchy', 'religion']);
const BETA = era('beta', 2, 'mediterranean-world', ['trade', 'warfare']);
const GAMMA = era('gamma', 3, 'western-europe', ['feudalism', 'religion']);
const DELTA = era('delta', 4, 'east-asia', ['feudalism', 'warfare']);
const EPSILON = era('epsilon', 5, 'global', ['industry']);

const TRACKS = [ALPHA, BETA, GAMMA, DELTA, EPSILON].map((e) => track(e));

/**
 * `progress(n, date)` reads as "walked this era's first n paintings, last on
 * `date`". Unless a test passes `completedSceneIds` itself, ctx() derives
 * them from it, the way completeDay records them.
 */
function ctx(partial: Partial<RecommendationContext>): RecommendationContext {
  const eraProgress = partial.eraProgress ?? {};
  const completedSceneIds =
    partial.completedSceneIds ??
    Object.entries(eraProgress).flatMap(([eraId, p]) => walkedIds(eraId, p.daysDone));
  return { eraInterests: [], today: TODAY, ...partial, eraProgress, completedSceneIds };
}

function progress(daysDone: number, lastCompletedOn: IsoDate | null): EraProgress {
  return { daysDone, lastCompletedOn };
}

describe('rankEras — cold start', () => {
  it('falls back to curated order with zero signal', () => {
    const ranked = rankEras(TRACKS, ctx({}));
    assert.deepEqual(
      ranked.map((r) => r.eraId),
      TRACKS.map((t) => t.era.id),
    );
    assert.ok(ranked.every((r) => r.reasons.includes('default-order')));
  });

  it('surfaces an onboarding pick above everything else, still tagged as a pick', () => {
    const ranked = rankEras(TRACKS, ctx({ eraInterests: [DELTA.id] }));
    assert.equal(ranked[0]!.eraId, DELTA.id);
    assert.ok(ranked[0]!.reasons.includes('onboarding-interest'));
  });

  it('firstTrackSuggestion hands back the museum opener when nothing else is known', () => {
    const suggestion = firstTrackSuggestion(TRACKS, ctx({}));
    assert.equal(suggestion?.era.id, ALPHA.id);
  });
});

describe('rankEras — resuming beats everything', () => {
  it('a half-walked era outranks a perfectly-matched fresh one', () => {
    const c = ctx({
      eraProgress: {
        [ALPHA.id]: progress(10, TODAY), // fully walked, excluded from candidates
        [BETA.id]: progress(3, null), // started, not finished — should resume
      },
    });
    const ranked = rankEras(TRACKS, c);
    assert.equal(ranked[0]!.eraId, BETA.id);
    assert.ok(ranked[0]!.reasons.includes('resume'));
    // The fully-walked era never reappears as a candidate.
    assert.ok(!ranked.some((r) => r.eraId === ALPHA.id));
  });
});

describe('rankEras — content + timeline blend', () => {
  it('prefers a thematically-linked, timeline-adjacent era over a merely-adjacent one', () => {
    // Finished GAMMA (feudalism/religion, western-europe). DELTA shares
    // `feudalism` and sits right next on the timeline; BETA is the other
    // timeline neighbour but shares nothing thematically.
    const c = ctx({ eraProgress: { [GAMMA.id]: progress(10, TODAY) } });
    const ranked = rankEras(TRACKS, c);
    const ids = ranked.map((r) => r.eraId);
    assert.equal(ids[0], DELTA.id);
    assert.ok(ranked[0]!.reasons.includes('shared-theme'));
    assert.ok(ranked[0]!.reasons.includes('timeline-next'));
  });

  it('still prefers the timeline neighbour when nothing shares a theme', () => {
    const c = ctx({ eraProgress: { [ALPHA.id]: progress(10, TODAY) } });
    const ranked = rankEras(TRACKS, c);
    // BETA shares region + is the timeline-next neighbour of ALPHA.
    assert.equal(ranked[0]!.eraId, BETA.id);
  });

  it('older history still counts, just for less, than a very recent one', () => {
    const fresh = rankEras(TRACKS, ctx({ eraProgress: { [GAMMA.id]: progress(10, TODAY) } }));
    const stale = rankEras(
      TRACKS,
      ctx({ eraProgress: { [GAMMA.id]: progress(10, toIsoDate('2023-01-01')) } }),
    );
    const freshScore = fresh.find((r) => r.eraId === DELTA.id)!.score;
    const staleScore = stale.find((r) => r.eraId === DELTA.id)!.score;
    assert.ok(staleScore > 0, 'a year-old completion should still count for something');
    assert.ok(staleScore < freshScore, 'but less than a completion from today');
  });
});

describe('continuationFor', () => {
  it('returns a primary and a distinct secondary', () => {
    const c = ctx({ eraProgress: { [GAMMA.id]: progress(10, TODAY) } });
    const { primary, secondary } = continuationFor(TRACKS, c);
    assert.equal(primary?.era.id, DELTA.id);
    assert.ok(secondary);
    assert.notEqual(secondary?.era.id, primary?.era.id);
  });

  it('returns nulls once every era is walked', () => {
    const eraProgress: Record<string, EraProgress> = {};
    for (const t of TRACKS) eraProgress[t.era.id] = progress(t.dayCount, TODAY);
    const { primary, secondary } = continuationFor(TRACKS, ctx({ eraProgress }));
    assert.equal(primary, null);
    assert.equal(secondary, null);
  });
});

describe('real content sanity', () => {
  // These lean on the shipped ERAS tags/ordering — if editorial ever
  // reshuffles the timeline or theme tags, these are a tripwire to
  // re-check the result still reads sensibly, not a contract to keep
  // the exact same answer forever.
  const realTracks: EraTrack[] = ERAS.map((e) => track(e, 5));

  function eraIdOf(id: string): EraId {
    return toEraId(id);
  }

  it('finishing Ancient Egypt points at Classical Greece next', () => {
    const c = ctx({
      eraProgress: { [eraIdOf('ancient-egypt')]: progress(5, TODAY) },
    });
    const { primary } = continuationFor(realTracks, c);
    assert.equal(primary?.era.id, eraIdOf('classical-greece'));
  });

  it('finishing Medieval Europe surfaces Feudal Japan over the naive next-on-timeline pick', () => {
    const c = ctx({
      eraProgress: { [eraIdOf('medieval-europe')]: progress(5, TODAY) },
    });
    const { primary } = continuationFor(realTracks, c);
    assert.equal(primary?.era.id, eraIdOf('feudal-japan'));
  });

  it('an onboarding pick of Feudal Japan wins the first-wing suggestion', () => {
    const suggestion = firstTrackSuggestion(realTracks, ctx({ eraInterests: [eraIdOf('feudal-japan')] }));
    assert.equal(suggestion?.era.id, eraIdOf('feudal-japan'));
  });

  it('with no signal at all, the first-wing suggestion is the museum opener', () => {
    const suggestion = firstTrackSuggestion(realTracks, ctx({}));
    assert.equal(suggestion?.era.id, eraIdOf('ancient-egypt'));
  });
});

/**
 * "I just finished an era — what if the obvious next/similar one is already
 * fully or partially walked?"
 *
 * Fixture recap (synthetic museum above, sort order = timeline order):
 *   ALPHA   1  mediterranean-world  monarchy, religion
 *   BETA    2  mediterranean-world  trade, warfare
 *   GAMMA   3  western-europe       feudalism, religion
 *   DELTA   4  east-asia            feudalism, warfare   ← GAMMA's timeline-next AND most similar
 *   EPSILON 5  global               industry             ← unrelated to everything
 */
const YESTERDAY = toIsoDate('2024-05-31');
const LAST_MONTH = toIsoDate('2024-05-01');
const LAST_YEAR = toIsoDate('2023-06-01');
const ids = (c: RecommendationContext, tracks: EraTrack[] = TRACKS) =>
  rankEras(tracks, c).map((r) => r.eraId);
const find = (c: RecommendationContext, eraId: EraId, tracks: EraTrack[] = TRACKS) =>
  rankEras(tracks, c).find((r) => r.eraId === eraId)!;

describe('after finishing an era — fully walked candidates', () => {
  it('never suggests the era that was just finished', () => {
    const c = ctx({ eraProgress: { [GAMMA.id]: progress(10, TODAY) } });
    assert.ok(!ids(c).includes(GAMMA.id));
  });

  it('skips a fully walked timeline-next / most-similar era entirely', () => {
    const c = ctx({
      eraProgress: {
        [GAMMA.id]: progress(10, TODAY), // just finished
        [DELTA.id]: progress(10, LAST_MONTH), // next + most similar, walked before
      },
    });
    assert.deepEqual(ids(c).sort(), [ALPHA.id, BETA.id, EPSILON.id].sort());
  });

  it('still lets a fully walked era shape the taste profile', () => {
    // DELTA (feudalism, warfare) being walked should pull BETA (warfare) up.
    const without = find(ctx({ eraProgress: { [GAMMA.id]: progress(10, TODAY) } }), BETA.id);
    const withDelta = find(
      ctx({ eraProgress: { [GAMMA.id]: progress(10, TODAY), [DELTA.id]: progress(10, YESTERDAY) } }),
      BETA.id,
    );
    assert.ok(withDelta.score > without.score);
  });

  it('treats daysDone above dayCount (content removed) as fully walked', () => {
    const c = ctx({ eraProgress: { [GAMMA.id]: progress(10, TODAY), [DELTA.id]: progress(14, YESTERDAY) } });
    assert.ok(!ids(c).includes(DELTA.id));
  });

  it('returns nothing at all once every other era is walked too', () => {
    const eraProgress: Record<string, EraProgress> = {};
    for (const t of TRACKS) eraProgress[t.era.id] = progress(t.dayCount, LAST_MONTH);
    eraProgress[GAMMA.id] = progress(10, TODAY);
    assert.deepEqual(ids(ctx({ eraProgress })), []);
  });
});

describe('fix 1 — the timeline boost skips fully walked eras', () => {
  it('passes timeline-next to the first unwalked era after a walked neighbour', () => {
    // GAMMA just finished, DELTA (its neighbour) walked → EPSILON is "next".
    const c = ctx({
      eraProgress: { [GAMMA.id]: progress(10, TODAY), [DELTA.id]: progress(10, LAST_MONTH) },
    });
    assert.ok(find(c, EPSILON.id).reasons.includes('timeline-next'));
    assert.ok(!find(c, BETA.id).reasons.includes('timeline-next'));
  });

  it('jumps over several walked eras in a row', () => {
    // ALPHA just finished; BETA and GAMMA both walked → DELTA is "next".
    const c = ctx({
      eraProgress: {
        [ALPHA.id]: progress(10, TODAY),
        [BETA.id]: progress(10, LAST_MONTH),
        [GAMMA.id]: progress(10, LAST_MONTH),
      },
    });
    const ranked = rankEras(TRACKS, c);
    assert.equal(ranked[0]!.eraId, DELTA.id);
    assert.ok(ranked[0]!.reasons.includes('timeline-next'));
    assert.equal(ranked.filter((r) => r.reasons.includes('timeline-next')).length, 1);
  });

  it('passes timeline-prev backwards over walked eras too', () => {
    // DELTA just finished, GAMMA walked → BETA is "previous".
    const c = ctx({
      eraProgress: { [DELTA.id]: progress(10, TODAY), [GAMMA.id]: progress(10, LAST_MONTH) },
    });
    assert.ok(find(c, BETA.id).reasons.includes('timeline-prev'));
    assert.ok(!find(c, ALPHA.id).reasons.includes('timeline-prev'));
  });

  it('marks the skipped-to era timeline-next exactly like a direct neighbour', () => {
    // EPSILON as the direct neighbour of DELTA vs. as GAMMA's next-after-walked-DELTA.
    const direct = find(ctx({ eraProgress: { [DELTA.id]: progress(10, TODAY) } }), EPSILON.id);
    const skipped = find(
      ctx({ eraProgress: { [GAMMA.id]: progress(10, TODAY), [DELTA.id]: progress(10, YESTERDAY) } }),
      EPSILON.id,
    );
    assert.ok(direct.reasons.includes('timeline-next'));
    assert.ok(skipped.reasons.includes('timeline-next'));
  });

  it('counts a partly walked era as unwalked — it can be the timeline neighbour', () => {
    const c = ctx({
      eraProgress: { [GAMMA.id]: progress(10, TODAY), [DELTA.id]: progress(3, YESTERDAY) },
    });
    assert.ok(find(c, DELTA.id).reasons.includes('timeline-next'));
    assert.ok(!find(c, EPSILON.id).reasons.includes('timeline-next'));
  });

  it('gives nobody timeline-next when everything after the anchor is walked', () => {
    const c = ctx({
      eraProgress: {
        [GAMMA.id]: progress(10, TODAY),
        [DELTA.id]: progress(10, LAST_MONTH),
        [EPSILON.id]: progress(10, LAST_MONTH),
      },
    });
    assert.ok(rankEras(TRACKS, c).every((r) => !r.reasons.includes('timeline-next')));
    assert.ok(find(c, BETA.id).reasons.includes('timeline-prev'));
  });
});

describe('partially walked candidates — the resume tier', () => {
  it('puts a partially walked era first, even when unrelated and far away on the timeline', () => {
    const c = ctx({
      eraProgress: {
        [ALPHA.id]: progress(10, TODAY), // just finished; BETA is next + same region
        [EPSILON.id]: progress(1, LAST_YEAR), // 1 day in, a year ago, shares nothing
      },
    });
    const { primary, secondary } = continuationFor(TRACKS, c);
    assert.equal(primary?.era.id, EPSILON.id);
    assert.equal(secondary?.era.id, BETA.id, 'the best fresh era drops to secondary');
  });

  it('keeps every partial above every fresh era, however strong the fresh one is', () => {
    // BETA: timeline-next of ALPHA, same region, AND an onboarding pick.
    // EPSILON: 1 of 10 a year ago, unrelated. Resume tier still wins.
    const c = ctx({
      eraInterests: [BETA.id],
      eraProgress: { [ALPHA.id]: progress(10, TODAY), [EPSILON.id]: progress(1, LAST_YEAR) },
    });
    const ranked = rankEras(TRACKS, c);
    assert.equal(ranked[0]!.eraId, EPSILON.id);
    assert.equal(ranked[1]!.eraId, BETA.id);
  });

  it('reports the other reasons alongside "resume"', () => {
    const c = ctx({
      eraProgress: { [GAMMA.id]: progress(10, TODAY), [DELTA.id]: progress(3, YESTERDAY) },
    });
    const top = rankEras(TRACKS, c)[0]!;
    assert.equal(top.eraId, DELTA.id);
    assert.equal(top.reasons[0], 'resume');
    assert.ok(top.reasons.includes('timeline-next'));
    assert.ok(top.reasons.includes('shared-theme'));
  });

  it('does not count a partial era\'s own progress as "similarity" to itself', () => {
    // EPSILON shares nothing with GAMMA; its own 9 walked days must not make
    // it look similar to the visitor's taste.
    const c = ctx({
      eraProgress: { [GAMMA.id]: progress(10, TODAY), [EPSILON.id]: progress(9, YESTERDAY) },
    });
    const epsilon = find(c, EPSILON.id);
    assert.ok(!epsilon.reasons.includes('shared-theme'));
    assert.ok(!epsilon.reasons.includes('shared-region'));
  });

  it('fills both slots with partially walked eras when there are two', () => {
    const c = ctx({
      eraProgress: {
        [GAMMA.id]: progress(10, TODAY),
        [ALPHA.id]: progress(2, LAST_MONTH),
        [EPSILON.id]: progress(2, LAST_MONTH),
      },
    });
    const { primary, secondary } = continuationFor(TRACKS, c);
    assert.deepEqual([primary?.era.id, secondary?.era.id].sort(), [ALPHA.id, EPSILON.id].sort());
  });
});

describe('fix 2 — partially walked eras are ordered by relevance, not timeline position', () => {
  it('prefers the nearly-done, recent, related partial over an earlier-sorted stale one', () => {
    // Before the fix, ALPHA won on era.sort alone.
    const c = ctx({
      eraProgress: {
        [GAMMA.id]: progress(10, TODAY),
        [ALPHA.id]: progress(1, LAST_YEAR),
        [DELTA.id]: progress(9, YESTERDAY),
      },
    });
    const ranked = rankEras(TRACKS, c);
    assert.deepEqual([ranked[0]!.eraId, ranked[1]!.eraId], [DELTA.id, ALPHA.id]);
    assert.ok(ranked[0]!.score > ranked[1]!.score, 'no longer a tie');
  });

  it('depth: closer to done wins, all else equal', () => {
    const shallow = find(
      ctx({ eraProgress: { [GAMMA.id]: progress(10, TODAY), [EPSILON.id]: progress(2, YESTERDAY) } }),
      EPSILON.id,
    );
    const deep = find(
      ctx({ eraProgress: { [GAMMA.id]: progress(10, TODAY), [EPSILON.id]: progress(8, YESTERDAY) } }),
      EPSILON.id,
    );
    assert.ok(deep.score > shallow.score);
  });

  it('recency: walked recently wins, all else equal', () => {
    const stale = find(
      ctx({ eraProgress: { [GAMMA.id]: progress(10, TODAY), [EPSILON.id]: progress(5, LAST_YEAR) } }),
      EPSILON.id,
    );
    const fresh = find(
      ctx({ eraProgress: { [GAMMA.id]: progress(10, TODAY), [EPSILON.id]: progress(5, YESTERDAY) } }),
      EPSILON.id,
    );
    assert.ok(fresh.score > stale.score);
  });

  it('similarity + timeline decide when depth and recency are equal — not era.sort', () => {
    // ALPHA (sort 1, shares only `religion`) vs DELTA (sort 4, next + shares
    // `feudalism`): equal progress, DELTA must win despite sorting later.
    const c = ctx({
      eraProgress: {
        [GAMMA.id]: progress(10, TODAY),
        [ALPHA.id]: progress(5, YESTERDAY),
        [DELTA.id]: progress(5, YESTERDAY),
      },
    });
    assert.deepEqual(ids(c).slice(0, 2), [DELTA.id, ALPHA.id]);
  });

  it('a nearly-done unrelated partial beats a barely-started related one', () => {
    const c = ctx({
      eraProgress: {
        [GAMMA.id]: progress(10, TODAY),
        [DELTA.id]: progress(1, LAST_YEAR), // next + most similar, barely started
        [EPSILON.id]: progress(9, YESTERDAY), // unrelated, nearly done
      },
    });
    assert.equal(ids(c)[0], EPSILON.id);
  });
});

describe('reopened eras — walked end to end, then new paintings were added', () => {
  // ALPHA was walked 10/10; editorial then shipped more paintings for it.
  const grownAlpha = (dayCount: number) =>
    TRACKS.map((t) => (t.era.id === ALPHA.id ? track(ALPHA, dayCount) : t));

  it('is not reopened while dayCount still equals daysDone', () => {
    const c = ctx({
      eraProgress: { [ALPHA.id]: progress(10, LAST_YEAR), [GAMMA.id]: progress(10, TODAY) },
    });
    assert.ok(!ids(c, grownAlpha(10)).includes(ALPHA.id));
  });

  it('reopens with top priority as soon as a single painting is added', () => {
    const c = ctx({
      eraProgress: { [ALPHA.id]: progress(10, LAST_YEAR), [GAMMA.id]: progress(10, TODAY) },
    });
    const top = rankEras(grownAlpha(11), c)[0]!;
    assert.equal(top.eraId, ALPHA.id);
    assert.equal(top.reasons[0], 'resume');
  });

  it('outranks the strongest fresh era: timeline-next, most similar and an onboarding pick', () => {
    // GAMMA just finished; DELTA is next + most similar + picked at onboarding.
    // ALPHA was finished a year ago and has 1 new painting out of 11.
    const c = ctx({
      eraInterests: [DELTA.id],
      eraProgress: { [ALPHA.id]: progress(10, LAST_YEAR), [GAMMA.id]: progress(10, TODAY) },
    });
    const { primary, secondary } = continuationFor(grownAlpha(11), c);
    assert.equal(primary?.era.id, ALPHA.id);
    assert.equal(secondary?.era.id, DELTA.id);
  });

  it('is offered from the Choose-your-first-era screen too (no active track)', () => {
    const c = ctx({ eraProgress: { [ALPHA.id]: progress(10, LAST_YEAR) }, eraInterests: [DELTA.id] });
    assert.equal(firstTrackSuggestion(grownAlpha(12), c)?.era.id, ALPHA.id);
  });

  it('shares the resume tier with other partials and is ordered by the same rules', () => {
    // Reopened ALPHA (10/15, a year ago) vs partial DELTA (9/10, yesterday,
    // next + similar to the just-finished GAMMA): DELTA is more relevant.
    const c = ctx({
      eraProgress: {
        [ALPHA.id]: progress(10, LAST_YEAR),
        [GAMMA.id]: progress(10, TODAY),
        [DELTA.id]: progress(9, YESTERDAY),
      },
    });
    const ranked = rankEras(grownAlpha(15), c);
    assert.deepEqual(
      ranked.slice(0, 2).map((r) => r.eraId),
      [DELTA.id, ALPHA.id],
    );
    assert.ok(ranked.slice(0, 2).every((r) => r.reasons[0] === 'resume'));
  });
});

describe('walk state comes from completed paintings, not the daysDone counter', () => {
  // Same walk state the Today screen uses (utils/lessons.ts), so the
  // recommender and Today can never disagree about whether an era is done.

  it('reopens an era when a painting is swapped in, even though daysDone still equals dayCount', () => {
    // ALPHA: 10/10 walked. Editorial then removed alpha-9 and added a new
    // painting dated mid-era. Counter says 10 of 10; a new painting is unseen.
    const swapped: EraTrack = {
      era: ALPHA,
      scenes: [...scenes(ALPHA.id, 9), scene(ALPHA.id, 99, { year: 4.5 })].sort(
        (a, b) => a.historicalYear - b.historicalYear,
      ),
      dayCount: 10,
    };
    const tracks = TRACKS.map((t) => (t.era.id === ALPHA.id ? swapped : t));
    const c = ctx({
      eraProgress: { [ALPHA.id]: progress(10, LAST_YEAR), [GAMMA.id]: progress(10, TODAY) },
    });
    const top = rankEras(tracks, c)[0]!;
    assert.equal(top.eraId, ALPHA.id);
    assert.equal(top.reasons[0], 'resume');
  });

  it('does not offer an era whose every painting is walked, even if daysDone lags behind', () => {
    // A painting can move eras in editorial; the counter then undercounts.
    // Offering GAMMA here would bounce the visitor straight back to the
    // era-finished screen for GAMMA.
    const c = ctx({
      eraProgress: { [GAMMA.id]: progress(6, LAST_MONTH), [ALPHA.id]: progress(10, TODAY) },
      completedSceneIds: [...walkedIds(GAMMA.id, 10), ...walkedIds(ALPHA.id, 10)],
    });
    assert.ok(!ids(c).includes(GAMMA.id));
  });

  it('still counts a painting as walked after editorial publishes it under a new id', () => {
    // alpha-0 was walked as a bundled work (id = slug); it is now a published
    // row with a UUID id and the same slug. ALPHA must stay fully walked.
    const published: EraTrack = {
      era: ALPHA,
      scenes: [
        scene(ALPHA.id, 0, { id: '0b7d8f4e-1c2a-4e5b-9a3d-2f6e8c1b4a90' }),
        ...scenes(ALPHA.id, 10).slice(1),
      ],
      dayCount: 10,
    };
    const tracks = TRACKS.map((t) => (t.era.id === ALPHA.id ? published : t));
    const c = ctx({
      eraProgress: { [ALPHA.id]: progress(10, LAST_MONTH), [GAMMA.id]: progress(10, TODAY) },
    });
    assert.ok(!ids(c, tracks).includes(ALPHA.id));
  });
});

describe('the same scenarios on the real eras', () => {
  const realTracks: EraTrack[] = ERAS.map((e) => track(e, 20));
  const id = (raw: string) => toEraId(raw);

  it('Egypt finished, Greece fully walked → Rome, now as timeline-next', () => {
    const c = ctx({
      eraProgress: {
        [id('ancient-egypt')]: progress(20, TODAY),
        [id('classical-greece')]: progress(20, YESTERDAY),
      },
    });
    const top = rankEras(realTracks, c)[0]!;
    assert.equal(top.eraId, id('roman-empire'));
    assert.ok(top.reasons.includes('timeline-next'));
  });

  it('Medieval finished, Feudal Japan fully walked → Renaissance (was Viking Age before fix 1)', () => {
    const c = ctx({
      eraProgress: {
        [id('medieval-europe')]: progress(20, TODAY),
        [id('feudal-japan')]: progress(20, YESTERDAY),
      },
    });
    const { primary, secondary } = continuationFor(realTracks, c);
    assert.equal(primary?.era.id, id('renaissance'));
    assert.equal(secondary?.era.id, id('viking-age'));
  });

  it('Egypt finished, Machine Age 2/20 → Machine Age first, Greece second', () => {
    const c = ctx({
      eraProgress: {
        [id('ancient-egypt')]: progress(20, TODAY),
        [id('machine-age')]: progress(2, YESTERDAY),
      },
    });
    const { primary, secondary } = continuationFor(realTracks, c);
    assert.equal(primary?.era.id, id('machine-age'));
    assert.equal(secondary?.era.id, id('classical-greece'));
  });

  it('Medieval finished: Renaissance 18/20 yesterday beats Feudal Japan 2/20 a year ago', () => {
    const c = ctx({
      eraProgress: {
        [id('medieval-europe')]: progress(20, TODAY),
        [id('renaissance')]: progress(18, YESTERDAY),
        [id('feudal-japan')]: progress(2, LAST_YEAR),
      },
    });
    assert.deepEqual(ids(c, realTracks).slice(0, 2), [id('renaissance'), id('feudal-japan')]);
  });

  it('Medieval finished: equal progress → Feudal Japan (next + feudal) over Renaissance', () => {
    const c = ctx({
      eraProgress: {
        [id('medieval-europe')]: progress(20, TODAY),
        [id('renaissance')]: progress(10, YESTERDAY),
        [id('feudal-japan')]: progress(10, YESTERDAY),
      },
    });
    assert.deepEqual(ids(c, realTracks).slice(0, 2), [id('feudal-japan'), id('renaissance')]);
  });

  it('Greece finished, Egypt walked a year ago then grew 20 → 25 → Egypt first', () => {
    const grown = ERAS.map((e) => track(e, e.id === id('ancient-egypt') ? 25 : 20));
    const c = ctx({
      eraProgress: {
        [id('classical-greece')]: progress(20, TODAY),
        [id('ancient-egypt')]: progress(20, LAST_YEAR),
      },
    });
    const { primary, secondary } = continuationFor(grown, c);
    assert.equal(primary?.era.id, id('ancient-egypt'));
    assert.equal(secondary?.era.id, id('roman-empire'));
  });
});
