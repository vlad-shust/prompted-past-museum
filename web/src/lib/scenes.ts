import { plainDashes } from './format';
import { createClient } from '@supabase/supabase-js';

import { pickHeroSlug } from '@shared/content/hero-queue';
import { MOCK_SCENES } from '@shared/content/scenes';
import { toEraId, toIsoDate, toMonthDay, toSceneId } from '@shared/types/common.types';
import type { IsoDate } from '@shared/types/common.types';
import type { Scene } from '@shared/types/domain.types';
import type { SceneRow } from '@shared/data/supabase-data-source.types';
import { webEnv } from './env';

/**
 * The web's single data seam: Supabase when env is present, the bundled
 * demo scenes otherwise (mock-first extends to the gallery). Audio never
 * reaches the open web — that lives in the app.
 */

function isoFromDate(date: Date): IsoDate {
  return toIsoDate(date.toISOString().slice(0, 10));
}

export function todayIso(): IsoDate {
  return isoFromDate(new Date());
}

export function isoDaysAgo(days: number): IsoDate {
  const date = new Date();
  date.setDate(date.getDate() - days);
  return isoFromDate(date);
}

function mapRow(row: SceneRow): Scene {
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

function materializeMockScenes(): Scene[] {
  return MOCK_SCENES.map((def, index) => ({
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
    onThisDay: false,
    commissionedBy: def.commissionedBy,
    details: def.details.map((detail) => ({
      id: detail.id,
      focus: { x: detail.x, y: detail.y, scale: detail.scale },
      caption: detail.caption,
    })),
  }));
}

function getClient() {
  return createClient(webEnv.supabaseUrl, webEnv.supabaseAnonKey, {
    auth: { persistSession: false },
  });
}

export async function getScenes(): Promise<Scene[]> {
  if (!webEnv.hasSupabase) return plainDashes(materializeMockScenes());
  const { data, error } = await getClient()
    .from('scenes')
    .select('*')
    .eq('status', 'published')
    .lte('scheduled_for', todayIso())
    .order('scheduled_for', { ascending: false });
  if (error) throw new Error(`getScenes: ${error.message}`);
  return plainDashes((data as SceneRow[]).map(mapRow));
}

export async function getSceneBySlug(slug: string): Promise<Scene | null> {
  if (!webEnv.hasSupabase) {
    return plainDashes(materializeMockScenes().find((scene) => scene.slug === slug) ?? null);
  }
  const { data, error } = await getClient()
    .from('scenes')
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .lte('scheduled_for', todayIso())
    .maybeSingle();
  if (error) throw new Error(`getSceneBySlug: ${error.message}`);
  return data ? plainDashes(mapRow(data as SceneRow)) : null;
}

export function getHeroScene(scenes: Scene[], now?: Date): Scene | undefined {
  if (scenes.length === 0) return undefined;
  const slug = pickHeroSlug(now);
  return scenes.find((scene) => scene.slug === slug) ?? scenes[0];
}
