import type { IsoDate, SceneId } from '@/types/common.types';
import type { Scene } from '@/types/domain.types';
import type { EraTrack } from './tracks.types';

/**
 * Which of a track's paintings the visitor has walked, and which lesson
 * comes next — the single answer the Today screen and the recommender share.
 *
 * Progress is read from `completedSceneIds` (the set of paintings actually
 * stepped into), not from the per-era `daysDone` counter. The counter can't
 * say *which* paintings were seen, so once editorial adds a painting to an
 * era — anywhere in its timeline, not only at the end — "resume at index
 * daysDone" shows an already-seen work and skips the new one for good.
 *
 * A scene counts as walked if either its id or its slug was recorded: a
 * bundled work's id *is* its slug, and when editorial publishes it to the
 * scenes table it gets a row UUID instead. Matching both keeps a visitor's
 * history intact across that switch.
 */

export function isSceneWalked(scene: Scene, completed: ReadonlySet<string>): boolean {
  return completed.has(scene.id) || completed.has(scene.slug);
}

/**
 * Finds a scene by any key progress may have recorded for it — its current
 * id or its slug — so ids saved before a work was published still resolve.
 */
export function sceneLookup(scenes: Iterable<Scene>): Map<string, Scene> {
  const byKey = new Map<string, Scene>();
  for (const scene of scenes) {
    byKey.set(scene.slug, scene);
    byKey.set(scene.id, scene);
  }
  return byKey;
}

export interface TrackWalk {
  /** Paintings in this track the visitor has stepped into. */
  walked: number;
  /** Paintings still to walk, in walking order (oldest moment first). */
  remaining: Scene[];
  /** Nothing left to walk. */
  done: boolean;
}

export function walkOf(track: EraTrack, completedSceneIds: readonly SceneId[]): TrackWalk {
  const completed = new Set<string>(completedSceneIds);
  const remaining = track.scenes.filter((scene) => !isSceneWalked(scene, completed));
  return {
    walked: track.scenes.length - remaining.length,
    remaining,
    done: remaining.length === 0,
  };
}

/** How many wings have every painting stepped into — the Profile "eras walked" count. */
export function countWalkedTracks(
  tracks: readonly EraTrack[],
  completedSceneIds: readonly SceneId[],
): number {
  return tracks.filter((track) => walkOf(track, completedSceneIds).done).length;
}

export interface TodaysLessonInput {
  completedSceneIds: readonly SceneId[];
  /** Painting stepped into on each day, keyed YYYY-MM-DD. */
  dayScenes: Readonly<Record<string, SceneId>>;
  /** A lesson in this track was already finished today. */
  completedToday: boolean;
  today: IsoDate;
}

export interface TodaysLesson {
  /** The painting to show today; null once the track is walked end to end. */
  scene: Scene | null;
  /** 1-based "Day N of dayCount" for `scene`. */
  dayNumber: number;
  /** The painting after today's, for the "Tomorrow · …" footer. */
  upNext: Scene | null;
  trackDone: boolean;
}

/**
 * Today's lesson in a track: the first painting, in walking order, the
 * visitor hasn't stepped into yet. Once today's lesson is done, it's the
 * painting they stepped into today, so the Today screen keeps showing it
 * until midnight.
 */
export function todaysLesson(track: EraTrack, input: TodaysLessonInput): TodaysLesson {
  const walk = walkOf(track, input.completedSceneIds);
  if (walk.done) return { scene: null, dayNumber: walk.walked, upNext: null, trackDone: true };

  if (input.completedToday) {
    const scene = todaysWalkedScene(track, input) ?? walk.remaining[0]!;
    return {
      scene,
      dayNumber: walk.walked,
      upNext: walk.remaining.find((candidate) => candidate !== scene) ?? null,
      trackDone: false,
    };
  }

  return {
    scene: walk.remaining[0]!,
    dayNumber: walk.walked + 1,
    upNext: walk.remaining[1] ?? null,
    trackDone: false,
  };
}

/**
 * The painting stepped into today in this track: from `dayScenes` when it
 * was recorded (2026-09-26 on), otherwise the most recently completed
 * painting that belongs to this track.
 */
function todaysWalkedScene(track: EraTrack, input: TodaysLessonInput): Scene | null {
  const byKey = sceneLookup(track.scenes);
  const recorded = input.dayScenes[input.today];
  if (recorded && byKey.has(recorded)) return byKey.get(recorded)!;
  for (let i = input.completedSceneIds.length - 1; i >= 0; i -= 1) {
    const scene = byKey.get(input.completedSceneIds[i]!);
    if (scene) return scene;
  }
  return null;
}
