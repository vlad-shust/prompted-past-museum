import { ERAS } from '@/content/eras';
import { MOCK_SCENES } from '@/content/scenes';
import { useProgressStore } from '@/stores/progress.store';
import { toSceneId } from '@/types/common.types';
import { isoDaysAgo } from '@/utils/dates';
import type { MockSceneDef } from '@/content/scenes.types';
import type { EraId } from '@/types/common.types';

const SEEDED_ERAS = 3;
const LESSONS_PER_ERA = 2;

/**
 * Admin/dev: hang a demo collection — the first rooms of a few wings are
 * marked walked, dated yesterday, so the Gallery has works on its walls
 * while today's room stays open. Wings that already hold progress are
 * left untouched, so seeding never regresses a real visit.
 */
export function hangMockCollection(): void {
  const byEra = new Map<EraId, MockSceneDef[]>();
  for (const def of MOCK_SCENES) {
    const defs = byEra.get(def.eraId) ?? [];
    defs.push(def);
    byEra.set(def.eraId, defs);
  }

  const yesterday = isoDaysAgo(1);
  useProgressStore.setState((state) => {
    const eraProgress = { ...state.eraProgress };
    const completedSceneIds = [...state.completedSceneIds];
    let seeded = 0;
    for (const era of ERAS) {
      if (seeded === SEEDED_ERAS) break;
      if (eraProgress[era.id]) continue;
      const lessons = (byEra.get(era.id) ?? [])
        .slice()
        .sort((a, b) => a.historicalYear - b.historicalYear)
        .slice(0, LESSONS_PER_ERA);
      if (lessons.length === 0) continue;
      eraProgress[era.id] = { daysDone: lessons.length, lastCompletedOn: yesterday };
      for (const def of lessons) {
        const id = toSceneId(def.slug);
        if (!completedSceneIds.includes(id)) completedSceneIds.push(id);
      }
      seeded += 1;
    }
    return { eraProgress, completedSceneIds };
  });
}
