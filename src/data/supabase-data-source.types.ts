/**
 * Hand-written row shapes matching supabase/migrations. Once the project
 * is provisioned, replace with `supabase gen types typescript` output.
 */
export interface SceneRow {
  id: string;
  slug: string;
  title: string;
  dek: string;
  story: string;
  era_id: string;
  historical_date_label: string;
  historical_year: number;
  scheduled_for: string;
  image_url: string;
  thumb_url: string;
  art_title: string | null;
  art_credit: string | null;
  blurhash: string | null;
  on_this_day: boolean;
  historical_month_day: string | null;
  commissioned_by: string | null;
  status: 'draft' | 'scheduled' | 'published';
}

export interface SeasonRow {
  year: number;
  month: number;
  era_id: string;
  title: string;
}

export type ForgeRowStatus =
  | 'pending'
  | 'validating'
  | 'generating'
  | 'complete'
  | 'rejected'
  | 'failed';

export interface ForgeRow {
  id: string;
  user_id: string;
  era_id: string;
  description: string;
  title: string | null;
  status: ForgeRowStatus;
  rejection_reason: string | null;
  image_url: string | null;
  error: string | null;
  created_at: string;
  completed_at: string | null;
}

export interface SaveRow {
  user_id: string;
  scene_id: string;
  created_at: string;
}

export type StudioRowStatus =
  | 'pending'
  | 'inspecting'
  | 'animating'
  | 'complete'
  | 'rejected'
  | 'failed';

export interface StudioRow {
  id: string;
  user_id: string;
  /** Path of the uploaded still in the private studio bucket. */
  image_path: string;
  /** Signed URL of the uploaded still; refreshed on read from image_path. */
  image_url: string;
  status: StudioRowStatus;
  rejection_reason: string | null;
  /** Path of the persisted clip in the private studio bucket. */
  video_path: string | null;
  /** Signed URL of the clip; refreshed on read from video_path. */
  video_url: string | null;
  error: string | null;
  watermarked: boolean;
  created_at: string;
  completed_at: string | null;
}

/** Named arguments of the sync_visitor_progress RPC (migration 20261125000100). */
export interface SyncProgressArgs {
  p_active_era_id: string | null;
  p_active_era_set_at_ms: number | null;
  p_era_interests: string[] | null;
  p_era_interests_set_at_ms: number | null;
  p_era_progress: Record<string, { daysDone: number; lastCompletedOn: string | null }>;
  p_completed_scene_ids: string[];
  p_day_scenes: Record<string, string>;
  p_visit_days: string[];
}
