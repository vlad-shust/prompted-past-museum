import { daysBetween } from '@/utils/dates';
import { walkOf } from '@/utils/lessons';
import type { TrackWalk } from '@/utils/lessons';
import type { EraId, IsoDate } from '@/types/common.types';
import type { Era } from '@/types/domain.types';
import type { EraTrack, TrackContinuation } from './tracks.types';
import type { RecommendationContext, RecommendationReason, ScoredEra } from './recommend.types';

/**
 * The recommendation engine, on-device.
 *
 * Why device-only: every signal worth having already lives in the two
 * persisted zustand stores (`progress.store`, `app.store`) — per-era walk
 * progress with a last-completed date, and the onboarding interest picks.
 * That's a full read of "what has this visitor actually done", which is
 * the only input a per-visitor recommender needs. Running it on-device
 * means it works offline, instantly, on day one, and never waits on a
 * round trip — there's no cohort model or cross-visitor data to justify a
 * backend here, and standing one up would be the overengineering this task
 * is explicitly trying to avoid.
 *
 * The *inputs* are not device-bound, though: lib/progress-sync.ts merges
 * those stores with the visitor's copy on the server (merge rules in
 * utils/progress-sync.ts), so every device signed in to the same account
 * ranks from the same history. The engine itself never waits on that.
 *
 * What it's made of:
 *  - a *content profile*: a weighted bag of region/theme tags built from
 *    every era the visitor has engaged with, recency- and depth-weighted,
 *    plus a small nudge for whatever they picked at onboarding;
 *  - a *timeline bonus*: the first still-unwalked era after (or, weaker,
 *    before) their most recently-touched one — fully walked eras in between
 *    are skipped — so "what came next" keeps working even for a visitor with
 *    a single data point;
 *  - a *resume tier*: a wing with something left to walk (started, or
 *    finished and since grown new paintings) outranks every fresh era,
 *    because finishing something beats starting something new. Inside the
 *    tier, wings are ordered by the same similarity/timeline score plus how
 *    close to done and how recently walked they are;
 *  - a stable tie-break on the museum's own curated order, so a visitor
 *    with zero signal gets exactly today's behaviour (Egypt first).
 *
 */

// ---- tunables -------------------------------------------------------------

/** A completion never fully fades; a year-old walk still counts for something. */
const RECENCY_FLOOR = 0.5;
/** Half of a completion's "freshness" decays every this-many days. */
const RECENCY_HALF_LIFE_DAYS = 30;

/**
 * Unfinished wings (started, or finished and since grown new paintings) form
 * their own tier above every fresh era — enforced by the sort, not just by
 * this number. The bonus keeps `score` readable in logs/analytics.
 */
const RESUME_BONUS = 10;
/**
 * Within the resume tier: a wing nearly done beats one barely started. Sized
 * so "18 of 20, walked yesterday" outranks "2 of 20, a year ago" even when
 * the latter is the timeline-next, most similar era.
 */
const RESUME_DEPTH_WEIGHT = 1;
/** Within the resume tier: a wing walked last week beats one left a year ago. */
const RESUME_RECENCY_WEIGHT = 0.5;
/** Flat nudge for an onboarding pick that hasn't been walked at all yet. */
const ONBOARDING_BONUS = 0.3;
/** Per shared theme tag between the candidate and the visitor's profile. */
const THEME_WEIGHT = 1;
/** Shared region is coarser than a shared theme, so it counts for less. */
const REGION_WEIGHT = 0.35;
/** Scales the raw tag-overlap sum into the same range as the other bonuses. */
const TAG_SCALE = 0.12;
/** The era right after the visitor's most recent one on the timeline. */
const TIMELINE_NEXT_BONUS = 0.45;
/** The era right before it — still "related", just a weaker pull forward. */
const TIMELINE_PREV_BONUS = 0.25;

// ---- tag profile ------------------------------------------------------------

type TagWeights = Map<string, number>;

/** Float noise floor when subtracting an era's own contribution back out. */
const EPSILON = 1e-9;

function eraTags(era: Era): TagWeights {
  const tags: TagWeights = new Map([[`region:${era.region}`, REGION_WEIGHT]]);
  for (const theme of era.themes) tags.set(`theme:${theme}`, THEME_WEIGHT);
  return tags;
}

function addWeighted(into: TagWeights, tags: TagWeights, weight: number): void {
  if (weight <= 0) return;
  for (const [tag, tagWeight] of tags) {
    into.set(tag, (into.get(tag) ?? 0) + tagWeight * weight);
  }
}

interface Engagement {
  /** Share of the era walked, 0-1. */
  depth: number;
  /** 1 today, fading towards RECENCY_FLOOR — history never "expires" outright. */
  freshness: number;
  /** depth × freshness: how much this era still counts towards the profile. */
  weight: number;
}

/**
 * How much a single completed/in-progress era still counts, today. Depth
 * (how much of it was walked) times freshness (how long ago the last
 * lesson there was finished).
 */
function engagementOf(
  walked: number,
  dayCount: number,
  lastCompletedOn: IsoDate | null,
  today: IsoDate,
): Engagement {
  if (dayCount <= 0 || walked <= 0) return { depth: 0, freshness: 0, weight: 0 };
  const depth = Math.min(1, walked / dayCount);
  const freshness = lastCompletedOn
    ? RECENCY_FLOOR +
      (1 - RECENCY_FLOOR) *
        Math.pow(0.5, daysBetween(lastCompletedOn, today) / RECENCY_HALF_LIFE_DAYS)
    : 1;
  return { depth, freshness, weight: depth * freshness };
}

interface EngagementSummary {
  /** Weighted region/theme tags across every era the visitor has touched. */
  profile: TagWeights;
  /** Per-era engagement, for eras with at least one day walked. */
  engagement: Map<EraId, Engagement>;
  /** Era most recently completed, for the timeline bonus; null if no history. */
  mostRecent: { eraId: EraId; sort: number } | null;
  /**
   * Tracks with some, but not all, paintings walked — including a wing walked
   * end to end that has since grown new paintings. They outrank every fresh era.
   */
  resumable: Set<EraId>;
  /** Walk state per track, from completedSceneIds. */
  walks: Map<EraId, TrackWalk>;
}

function summarizeEngagement(
  tracks: readonly EraTrack[],
  context: RecommendationContext,
): EngagementSummary {
  const profile: TagWeights = new Map();
  const engagement = new Map<EraId, Engagement>();
  const resumable = new Set<EraId>();
  const walks = new Map<EraId, TrackWalk>();
  let mostRecent: { eraId: EraId; sort: number; lastCompletedOn: IsoDate } | null = null;

  for (const track of tracks) {
    const entry = context.eraProgress[track.era.id];
    const walk = walkOf(track, context.completedSceneIds);
    walks.set(track.era.id, walk);

    const e = engagementOf(walk.walked, track.dayCount, entry?.lastCompletedOn ?? null, context.today);
    if (e.weight > 0) {
      engagement.set(track.era.id, e);
      addWeighted(profile, eraTags(track.era), e.weight);
    }

    if (walk.walked > 0 && !walk.done) resumable.add(track.era.id);

    if (entry?.lastCompletedOn && (!mostRecent || entry.lastCompletedOn > mostRecent.lastCompletedOn)) {
      mostRecent = { eraId: track.era.id, sort: track.era.sort, lastCompletedOn: entry.lastCompletedOn };
    }
  }

  for (const eraId of context.eraInterests) {
    const track = tracks.find((candidate) => candidate.era.id === eraId);
    if (track) addWeighted(profile, eraTags(track.era), ONBOARDING_BONUS);
  }

  return {
    profile,
    engagement,
    resumable,
    walks,
    mostRecent: mostRecent && { eraId: mostRecent.eraId, sort: mostRecent.sort },
  };
}

/**
 * Signed distance from the anchor era to `candidateSort`, counted in
 * *unwalked* eras only: +1 is the first era after the anchor that still has
 * something to walk, however many fully walked eras sit in between. So
 * "what came next" jumps over the chapters the visitor has already read.
 */
function unwalkedSteps(candidateSort: number, anchorSort: number, unwalkedSorts: number[]): number {
  if (candidateSort > anchorSort) {
    return unwalkedSorts.filter((s) => s > anchorSort && s <= candidateSort).length;
  }
  if (candidateSort < anchorSort) {
    return -unwalkedSorts.filter((s) => s < anchorSort && s >= candidateSort).length;
  }
  return 0;
}

function timelineBonus(distance: number): { bonus: number; reason: RecommendationReason | null } {
  if (distance === 1) return { bonus: TIMELINE_NEXT_BONUS, reason: 'timeline-next' };
  if (distance === -1) return { bonus: TIMELINE_PREV_BONUS, reason: 'timeline-prev' };
  if (distance === 0) return { bonus: 0, reason: null };
  // Further-out eras still get a faint pull, so the ranking never flattens
  // to "pure content similarity" for a visitor who has walked a lot.
  const sign = distance > 0 ? 1 : 0.6;
  return { bonus: (sign * 0.08) / Math.abs(distance), reason: null };
}

/**
 * Ranks every era the visitor hasn't fully walked yet, best match first.
 * Safe to call with no history at all — see the module doc for how that
 * degrades to the museum's own curated order.
 */
export function rankEras(tracks: readonly EraTrack[], context: RecommendationContext): ScoredEra[] {
  const { profile, engagement, mostRecent, resumable, walks } = summarizeEngagement(tracks, context);

  const candidates = tracks.filter((track) => !walks.get(track.era.id)!.done);
  const unwalkedSorts = candidates.map((track) => track.era.sort);

  const scored = candidates.map((track): ScoredEra => {
    const reasons: RecommendationReason[] = [];
    const isResumable = resumable.has(track.era.id);
    if (isResumable) reasons.push('resume');

    let score = 0;

    // Similarity is measured against *other* eras only: a partly walked era
    // is in the profile itself, and matching its own tags would just reward
    // it for being started — that's what the resume terms below are for.
    const own = eraTags(track.era);
    const self = engagement.get(track.era.id);
    const othersWeight = (tag: string) =>
      (profile.get(tag) ?? 0) - (self?.weight ?? 0) * (own.get(tag) ?? 0);
    let overlap = 0;
    for (const [tag, weight] of own) overlap += Math.max(0, othersWeight(tag)) * weight;
    if (overlap > EPSILON) {
      score += overlap * TAG_SCALE;
      if (track.era.themes.some((theme) => othersWeight(`theme:${theme}`) > EPSILON)) {
        reasons.push('shared-theme');
      }
      if (othersWeight(`region:${track.era.region}`) > EPSILON) reasons.push('shared-region');
    }

    if (mostRecent && mostRecent.eraId !== track.era.id) {
      const steps = unwalkedSteps(track.era.sort, mostRecent.sort, unwalkedSorts);
      const { bonus, reason } = timelineBonus(steps);
      score += bonus;
      if (reason) reasons.push(reason);
    }

    if (context.eraInterests.includes(track.era.id)) {
      score += ONBOARDING_BONUS;
      reasons.push('onboarding-interest');
    }

    if (isResumable) {
      score += RESUME_BONUS;
      score += RESUME_DEPTH_WEIGHT * (self?.depth ?? 0);
      score += RESUME_RECENCY_WEIGHT * (self?.freshness ?? 0);
    }

    if (reasons.length === 0) reasons.push('default-order');

    return { eraId: track.era.id, score, reasons };
  });

  // Resume tier first, regardless of score; then highest score; ties fall
  // back to the museum's curated front-to-back order (era.sort), which is
  // also exactly what a visitor with zero signal sees — cold start and
  // "everything scored equal" are the same code path.
  const sortOf = new Map(tracks.map((track) => [track.era.id, track.era.sort]));
  const tier = (r: ScoredEra) => (r.reasons[0] === 'resume' ? 1 : 0);
  return scored.sort(
    (a, b) =>
      tier(b) - tier(a) ||
      b.score - a.score ||
      sortOf.get(a.eraId)! - sortOf.get(b.eraId)!,
  );
}

function trackOf(tracks: readonly EraTrack[], eraId: EraId): EraTrack | null {
  return tracks.find((track) => track.era.id === eraId) ?? null;
}

/**
 * The follow-on suggestion shown when a wing is walked end to end: the
 * best-matching era next, and a runner-up.
 */
export function continuationFor(
  tracks: readonly EraTrack[],
  context: RecommendationContext,
): TrackContinuation {
  const ranked = rankEras(tracks, context);
  const primary = ranked[0] ? trackOf(tracks, ranked[0].eraId) : null;
  const secondary = ranked[1] ? trackOf(tracks, ranked[1].eraId) : null;
  return { primary, secondary };
}

/**
 * The very first wing offered to a visitor with no active track yet. Same
 * engine as `continuationFor` — with no walk history the content profile
 * and timeline bonus are empty, so this reduces to "their onboarding pick,
 * else the museum's first era", which is exactly the old behaviour.
 */
export function firstTrackSuggestion(
  tracks: readonly EraTrack[],
  context: RecommendationContext,
): EraTrack | null {
  const ranked = rankEras(tracks, context);
  return ranked[0] ? trackOf(tracks, ranked[0].eraId) : null;
}
