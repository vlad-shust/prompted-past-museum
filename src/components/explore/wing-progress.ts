import type { Scene } from '@/types/domain.types';
import type { TrackWalk } from '@/utils/lessons';
import type { HallStop } from './era-hall.types';

/**
 * Door and hall labels for how far the visitor is through a wing. Kept free
 * of React Native imports so it runs under the plain-Node unit tests.
 *
 * Everything here reads a TrackWalk (utils/lessons.ts): which paintings were
 * actually stepped into. Never a position derived from the `daysDone`
 * counter — once editorial adds a painting mid-era, position N is no longer
 * "the Nth painting walked".
 */

/** "Explore in 20 days" · "Day 4 of 20" · "Walked · 20 works". */
export function wingMeta(dayCount: number, walked: number): string {
  if (walked >= dayCount) return `Walked · ${dayCount} ${dayCount === 1 ? 'work' : 'works'}`;
  if (walked > 0) return `Day ${walked + 1} of ${dayCount}`;
  return `Explore in ${dayCount} ${dayCount === 1 ? 'day' : 'days'}`;
}

/**
 * Each work's stop, in walking order: walked if stepped into, `next` for the
 * first one not yet walked (the painting Today will show), `ahead` otherwise.
 */
export function hallStops(scenes: readonly Scene[], walk: TrackWalk): HallStop[] {
  const left = new Set(walk.remaining.map((scene) => scene.id));
  const nextId = walk.remaining[0]?.id;
  return scenes.map((scene) => {
    if (scene.id === nextId) return 'next';
    return left.has(scene.id) ? 'ahead' : 'walked';
  });
}

/** Index the hall opens on: one before the lit work, or near the end once walked. */
export function hallOpeningIndex(stops: readonly HallStop[]): number {
  const next = stops.indexOf('next');
  const focus = next === -1 ? stops.length - 1 : next;
  return Math.max(0, focus - 1);
}
