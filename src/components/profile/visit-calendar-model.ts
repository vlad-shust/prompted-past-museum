import type { EraProgress } from '@/stores/progress.store.types';
import type { SceneId } from '@/types/common.types';
import type { Scene } from '@/types/domain.types';
import { sceneLookup } from '@/utils/lessons';
import type { EraTrack } from '@/utils/tracks.types';

/**
 * The painting stepped into on each visited day, for the Profile visit
 * calendar. Days recorded since the calendar learned to remember come
 * straight from dayScenes; for older days the only dated fact is each era's
 * lastCompletedOn, which names that era's most recently hung work. Earlier
 * days stay honest and unnamed.
 *
 * Recorded ids are matched by id *or* slug (see utils/lessons.ts): a work
 * walked as a bundled scene was recorded under its slug, and keeps being
 * found after editorial publishes it under a row UUID. The returned Scene
 * is the current one, so opening it uses the current id.
 *
 * Kept free of React Native imports so it runs under the unit tests.
 */
export function paintingsByDay(
  tracks: readonly EraTrack[],
  eraProgress: Readonly<Record<string, EraProgress>>,
  completedSceneIds: readonly SceneId[],
  dayScenes: Readonly<Record<string, SceneId>>,
): Map<string, Scene> {
  const everywhere = sceneLookup(tracks.flatMap((track) => track.scenes));
  const days = new Map<string, Scene>();
  for (const track of tracks) {
    const lastOn = eraProgress[track.era.id]?.lastCompletedOn;
    if (!lastOn) continue;
    const inEra = sceneLookup(track.scenes);
    const lastHung = completedSceneIds.findLast((id) => inEra.has(id));
    const scene = lastHung ? inEra.get(lastHung) : undefined;
    if (scene) days.set(lastOn, scene);
  }
  for (const [day, id] of Object.entries(dayScenes)) {
    const scene = everywhere.get(id);
    if (scene) days.set(day, scene);
  }
  return days;
}
