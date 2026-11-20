import { getEra } from '@/content/eras';
import type { SceneId } from '@/types/common.types';
import type { Membership, Scene } from '@/types/domain.types';
import { sceneAccess } from '@/utils/access';
import type { TimelineBand, TimelineItem, TimelineModel } from './timeline-model.types';

function ordinal(n: number): string {
  const rem10 = n % 10;
  const rem100 = n % 100;
  if (rem10 === 1 && rem100 !== 11) return `${n}st`;
  if (rem10 === 2 && rem100 !== 12) return `${n}nd`;
  if (rem10 === 3 && rem100 !== 13) return `${n}rd`;
  return `${n}th`;
}

function centuryOf(year: number): Pick<TimelineBand, 'key' | 'label'> {
  if (year < 0) {
    const n = Math.floor((-year - 1) / 100) + 1;
    return { key: `bc-${n}`, label: `${ordinal(n)} century BC` };
  }
  const n = Math.floor((Math.max(1, year) - 1) / 100) + 1;
  return { key: `ad-${n}`, label: `${ordinal(n)} century` };
}

/**
 * One chronological river, antiquity at the top: every scene sorted by
 * its historical year and grouped under century bands. Civilizations
 * mingle inside a band — the header names each one present, and a row
 * whose civilization differs from the one above it opens with a
 * "Meanwhile" line. Empty centuries are omitted; the river grows as
 * the museum does.
 */
export function buildTimelineModel(
  scenes: Scene[],
  membership: Membership,
  completedSceneIds: readonly SceneId[],
): TimelineModel {
  const items: TimelineItem[] = [];
  const bandAtIndex: TimelineBand[] = [];
  let lockedCount = 0;

  const sorted = [...scenes].sort((a, b) => a.historicalYear - b.historicalYear);
  let band: TimelineBand | null = null;
  let prevEraId: Scene['eraId'] | null = null;

  for (const scene of sorted) {
    const era = getEra(scene.eraId);
    const century = centuryOf(scene.historicalYear);

    if (!band || band.key !== century.key) {
      band = { key: century.key, label: century.label, eras: [era] };
      prevEraId = null;
      items.push({ kind: 'band', band });
      bandAtIndex.push(band);
    } else if (!band.eras.some((present) => present.id === era.id)) {
      band.eras.push(era);
    }

    const access = sceneAccess(scene, membership, completedSceneIds);
    if (access === 'locked') lockedCount += 1;
    items.push({
      kind: 'scene',
      scene,
      access,
      era,
      crossover: prevEraId !== null && prevEraId !== era.id,
    });
    bandAtIndex.push(band);
    prevEraId = era.id;
  }

  return { items, bandAtIndex, lockedCount, totalCount: scenes.length };
}
