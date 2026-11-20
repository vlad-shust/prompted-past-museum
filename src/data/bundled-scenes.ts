import { MOCK_SCENES } from '@/content/scenes';
import { toSceneId } from '@/types/common.types';
import type { Scene } from '@/types/domain.types';
import { isoDaysAgo, todayIso, todayMonthDay } from '@/utils/dates';

/**
 * The bundled catalogue (src/content/scenes) as app scenes. Mock mode serves
 * it whole; live mode hangs it beside the Supabase editorial rows so every
 * era keeps its full set of works while the scenes table is still sparse.
 * Ids are slugs, which never collide with the scenes table's uuids.
 */
export function materializeBundledScenes(): Scene[] {
  const monthDay = todayMonthDay();
  return MOCK_SCENES.map((def, index) => {
    return {
      id: toSceneId(def.slug),
      slug: def.slug,
      title: def.title,
      dek: def.dek,
      story: def.story,
      eraId: def.eraId,
      historicalDateLabel: def.historicalDateLabel,
      historicalYear: def.historicalYear,
      historicalMonthDay: def.historicalMonthDay,
      publishedOn: index === 0 ? todayIso() : isoDaysAgo(index),
      imageUrl: def.imageUrl,
      thumbUrl: def.thumbUrl,
      artTitle: def.artTitle,
      artCredit: def.artCredit,
      onThisDay: def.historicalMonthDay !== null && def.historicalMonthDay === monthDay,
      commissionedBy: def.commissionedBy,
      details: def.details.map((detail) => ({
        id: detail.id,
        focus: { x: detail.x, y: detail.y, scale: detail.scale },
        caption: detail.caption,
      })),
      // Bundled works animate client-side; live editorial scenes carry Grok Imagine clips.
      animation: { kind: 'living-still' },
    } satisfies Scene;
  });
}
