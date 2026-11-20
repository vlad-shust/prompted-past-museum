import { toEraId, toIsoDate, toMonthDay, toSceneId } from '@/types/common.types';
import type { Scene } from '@/types/domain.types';
import type { SceneRow } from './supabase-data-source.types';

/**
 * A scenes-table row as an app Scene. Kept free of Expo / React Native
 * imports so unit tests can exercise it under plain Node.
 *
 * Copy columns one by one, never spread the row: scenes are read with
 * `select('*')`, and a row can carry columns the app must not surface
 * (columns of the removed feature live on in any database that has not yet
 * run migration 20261120000100). Guarded by
 * src/data/__tests__/night-feature-removed.test.ts.
 */
export function mapSceneRow(row: SceneRow): Scene {
  return {
    id: toSceneId(row.id),
    slug: row.slug,
    title: row.title,
    dek: row.dek,
    story: row.story,
    eraId: toEraId(row.era_id),
    historicalDateLabel: row.historical_date_label,
    historicalYear: row.historical_year,
    historicalMonthDay: row.historical_month_day ? toMonthDay(row.historical_month_day) : null,
    publishedOn: toIsoDate(row.scheduled_for),
    imageUrl: row.image_url,
    thumbUrl: row.thumb_url,
    artTitle: row.art_title ?? undefined,
    artCredit: row.art_credit ?? undefined,
    blurhash: row.blurhash ?? undefined,
    onThisDay: row.on_this_day,
    commissionedBy: row.commissioned_by ?? undefined,
  };
}
