import { File } from 'expo-file-system';

import { commissionPack } from '@/content/membership';
import type { CommissionPackId } from '@/content/membership.types';
import { currentHouseStill } from '@/content/studio-suggestions';
import { decideStudioSubmitRoute } from '@/data/house-collection-open';
import { mediaUrl } from '@/lib/env';
import { purchaseCommissionPack } from '@/lib/purchases';
import { readJson, writeJson } from '@/lib/storage';
import { ensureSession, getSupabase } from '@/lib/supabase';
import { toEraId, toForgeId, toSceneId, toStudioPieceId } from '@/types/common.types';
import type { ForgeId, SceneId, StudioPieceId } from '@/types/common.types';
import { useMembershipStore } from '@/stores/membership.store';
import type {
  CommissionLedger,
  Forge,
  ForgeStatus,
  ForgeSubmission,
  Scene,
  Season,
  StudioPiece,
  StudioStatus,
  StudioSubmission,
} from '@/types/domain.types';
import { collectionWakeQuota, isMember } from '@/utils/access';
import { todayIso } from '@/utils/dates';
import type { ProgressSnapshot } from '@/utils/progress-sync.types';
import { materializeBundledScenes } from './bundled-scenes';
import type { DataSource } from './data-source.types';
import { parseSyncProgressResponse, toSyncProgressArgs } from './progress-sync-row';
import { mapSceneRow } from './scene-row';
import type { ForgeRow, SaveRow, SceneRow, SeasonRow, StudioRow } from './supabase-data-source.types';

/** Saves of bundled works (slug ids) live on device: the saves table keys on scene uuids. */
const BUNDLED_SAVES_KEY = 'pp.live.bundled-saves.v1';

const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

/** Scenes-table rows carry uuids; bundled works carry their slug. */
function isSceneRowId(id: string): boolean {
  return UUID_PATTERN.test(id);
}

function narrowStringArray(raw: unknown): string[] | null {
  return Array.isArray(raw) ? raw.filter((value): value is string => typeof value === 'string') : null;
}

/** Local ledger of house-collection wakes opened in live mode (pre-staged clips). */
const HOUSE_COLLECTION_KEY = 'pp.live.house-collection.v1';

interface StoredHousePiece {
  id: string;
  imageUri: string;
  videoUrl: string;
  createdAtMs: number;
  watermarked: boolean;
}

function isStoredHousePiece(raw: unknown): raw is StoredHousePiece {
  if (typeof raw !== 'object' || raw === null) return false;
  const candidate = raw as Record<string, unknown>;
  return (
    typeof candidate.id === 'string' &&
    typeof candidate.imageUri === 'string' &&
    typeof candidate.videoUrl === 'string' &&
    typeof candidate.createdAtMs === 'number' &&
    typeof candidate.watermarked === 'boolean'
  );
}

function narrowStoredHousePieces(raw: unknown): StoredHousePiece[] | null {
  return Array.isArray(raw) ? raw.filter(isStoredHousePiece) : null;
}

function mapHousePiece(stored: StoredHousePiece): StudioPiece {
  return {
    id: toStudioPieceId(stored.id),
    imageUri: currentHouseStill(stored.imageUri),
    createdAtMs: stored.createdAtMs,
    watermarked: stored.watermarked,
    status: {
      phase: 'complete',
      animation: { kind: 'video', url: stored.videoUrl },
      completedAtMs: stored.createdAtMs,
    },
  };
}

function mapForgeStatus(row: ForgeRow): ForgeStatus {
  switch (row.status) {
    case 'pending':
    case 'validating':
      return { phase: 'validating' };
    case 'generating':
      return { phase: 'generating' };
    case 'complete':
      if (!row.image_url) return { phase: 'failed', message: 'Forge completed without an image' };
      return {
        phase: 'complete',
        imageUrl: row.image_url,
        completedAtMs: row.completed_at ? Date.parse(row.completed_at) : Date.now(),
      };
    case 'rejected':
      return { phase: 'rejected', reason: row.rejection_reason ?? 'The forge only shapes the past.' };
    case 'failed':
      return { phase: 'failed', message: row.error ?? 'The forge went cold. Try again.' };
    default: {
      const exhaustive: never = row.status;
      throw new Error(`Unhandled forge status: ${JSON.stringify(exhaustive)}`);
    }
  }
}

function mapForge(row: ForgeRow): Forge {
  return {
    id: toForgeId(row.id),
    eraId: toEraId(row.era_id),
    description: row.description,
    title: row.title,
    createdAtMs: Date.parse(row.created_at),
    status: mapForgeStatus(row),
  };
}

function mapStudioStatus(row: StudioRow): StudioStatus {
  switch (row.status) {
    case 'pending':
    case 'inspecting':
      return { phase: 'inspecting' };
    case 'animating':
      return { phase: 'animating' };
    case 'complete':
      if (!row.video_url) return { phase: 'failed', message: 'The piece completed without a clip' };
      return {
        phase: 'complete',
        animation: { kind: 'video', url: row.video_url },
        completedAtMs: row.completed_at ? Date.parse(row.completed_at) : Date.now(),
      };
    case 'rejected':
      return { phase: 'rejected', reason: row.rejection_reason ?? 'The studio hangs only artworks.' };
    case 'failed':
      return { phase: 'failed', message: row.error ?? 'The studio went dark. Try again.' };
    default: {
      const exhaustive: never = row.status;
      throw new Error(`Unhandled studio status: ${JSON.stringify(exhaustive)}`);
    }
  }
}

function mapStudioPiece(row: StudioRow): StudioPiece {
  return {
    id: toStudioPieceId(row.id),
    imageUri: row.image_url,
    createdAtMs: Date.parse(row.created_at),
    watermarked: row.watermarked,
    status: mapStudioStatus(row),
  };
}

const STUDIO_SIGNED_TTL_SEC = 60 * 60 * 24 * 7;

/** Mint fresh signed URLs from stored bucket paths so clips outlive xAI links. */
async function refreshStudioRows(rows: StudioRow[]): Promise<StudioRow[]> {
  if (rows.length === 0) return rows;
  const supabase = getSupabase();
  const paths: string[] = [];
  for (const row of rows) {
    if (row.image_path) paths.push(row.image_path);
    if (row.video_path) paths.push(row.video_path);
    else if (row.status === 'complete' && row.user_id) {
      paths.push(`${row.user_id}/${row.id}.mp4`);
    }
  }
  if (paths.length === 0) return rows;
  try {
    const { data, error } = await supabase.storage
      .from('studio')
      .createSignedUrls(paths, STUDIO_SIGNED_TTL_SEC);
    if (error || !data) return rows;
    const urlByPath = new Map<string, string>();
    for (const signed of data) {
      if (signed.path && signed.signedUrl) urlByPath.set(signed.path, signed.signedUrl);
    }
    return rows.map((row) => {
      const next = { ...row };
      if (row.image_path) {
        const imageUrl = urlByPath.get(row.image_path);
        if (imageUrl) next.image_url = imageUrl;
      }
      const videoPath = row.video_path ?? `${row.user_id}/${row.id}.mp4`;
      const videoUrl = urlByPath.get(videoPath);
      if (videoUrl) next.video_url = videoUrl;
      return next;
    });
  } catch {
    return rows;
  }
}

/**
 * supabase-js flattens any non-2xx into a generic message, so a 429 quota
 * response reads the same as a real failure. Read the body to preserve the
 * distinction the UI relies on ("quota" → spent, retryless).
 */
async function rethrowFunctionError(error: { message: string; context?: unknown }, label: string): Promise<never> {
  const context: unknown = error.context;
  if (context instanceof Response) {
    const body: unknown = await context
      .clone()
      .json()
      .catch(() => null);
    if (
      typeof body === 'object' &&
      body !== null &&
      'error' in body &&
      (body as { error?: unknown }).error === 'quota_exhausted'
    ) {
      throw new Error('quota_exhausted');
    }
  }
  throw new Error(`${label}: ${error.message}`);
}

export class SupabaseDataSource implements DataSource {
  readonly mode = 'live' as const;

  async getTodayScene(): Promise<Scene> {
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('scenes')
      .select('*')
      .eq('status', 'published')
      .lte('scheduled_for', todayIso())
      .order('scheduled_for', { ascending: false })
      .limit(1)
      .single();
    if (error) throw new Error(`getTodayScene: ${error.message}`);
    return mapSceneRow(data as SceneRow);
  }

  async getArchive(): Promise<Scene[]> {
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('scenes')
      .select('*')
      .eq('status', 'published')
      .lte('scheduled_for', todayIso())
      .order('scheduled_for', { ascending: false });
    if (error) throw new Error(`getArchive: ${error.message}`);
    const editorial = (data as SceneRow[]).map(mapSceneRow);
    // The scenes table holds only the editorial rows published so far; the
    // bundled catalogue fills every era out to its full set. A published row
    // wins over the bundled work with the same slug so saved ids stay stable.
    const published = new Set(editorial.map((scene) => scene.slug));
    const bundled = materializeBundledScenes().filter((scene) => !published.has(scene.slug));
    return [...editorial, ...bundled];
  }

  async getScene(id: SceneId): Promise<Scene | null> {
    if (!isSceneRowId(id)) {
      return materializeBundledScenes().find((scene) => scene.id === id) ?? null;
    }
    const supabase = getSupabase();
    const { data, error } = await supabase.from('scenes').select('*').eq('id', id).maybeSingle();
    if (error) throw new Error(`getScene: ${error.message}`);
    return data ? mapSceneRow(data as SceneRow) : null;
  }

  async getCurrentSeason(): Promise<Season | null> {
    const now = new Date();
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('seasons')
      .select('*')
      .eq('year', now.getFullYear())
      .eq('month', now.getMonth() + 1)
      .maybeSingle();
    if (error) throw new Error(`getCurrentSeason: ${error.message}`);
    if (!data) return null;
    const row = data as SeasonRow;
    return { year: row.year, month: row.month, eraId: toEraId(row.era_id), title: row.title };
  }

  async submitForge(input: ForgeSubmission): Promise<Forge> {
    await ensureSession();
    const supabase = getSupabase();
    const { data, error } = await supabase.functions.invoke('forge-submit', {
      body: {
        era_id: input.eraId,
        description: input.description,
        light: input.light,
        mood: input.mood,
        eye: input.eye,
      },
    });
    if (error) return rethrowFunctionError(error, 'submitForge');
    const payload = data as { forge: ForgeRow };
    return mapForge(payload.forge);
  }

  async getForge(id: ForgeId): Promise<Forge | null> {
    await ensureSession();
    const supabase = getSupabase();
    const { data, error } = await supabase.from('forges').select('*').eq('id', id).maybeSingle();
    if (error) throw new Error(`getForge: ${error.message}`);
    return data ? mapForge(data as ForgeRow) : null;
  }

  async listForges(): Promise<Forge[]> {
    await ensureSession();
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('forges')
      .select('*')
      .order('created_at', { ascending: false });
    if (error) throw new Error(`listForges: ${error.message}`);
    return (data as ForgeRow[]).map(mapForge);
  }

  async countForgesUsedToday(): Promise<number> {
    await ensureSession();
    const supabase = getSupabase();
    const { data, error } = await supabase.rpc('count_forges_used_today');
    if (error) throw new Error(`countForgesUsedToday: ${error.message}`);
    return typeof data === 'number' ? data : 0;
  }

  /**
   * House-collection stills already have clips in the media bucket. Opening
   * one must not download the painting, re-upload it, or call studio-animate /
   * Grok Imagine: that path needs a local file URI and fails for every remote
   * house URL on Expo Go. Persist the wake locally and serve the pre-staged clip.
   */
  private async openHouseCollectionPiece(imageUri: string, videoFile: string): Promise<StudioPiece> {
    const membership = useMembershipStore.getState().membership;
    const wakes = collectionWakeQuota(membership);
    if (wakes.kind === 'metered' && (await this.countCollectionWakes()) >= wakes.limit) {
      throw new Error('quota_exhausted');
    }
    const stored: StoredHousePiece = {
      id: `house_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`,
      imageUri,
      videoUrl: mediaUrl(videoFile),
      createdAtMs: Date.now(),
      watermarked: !isMember(membership),
    };
    const all = await readJson(HOUSE_COLLECTION_KEY, narrowStoredHousePieces, []);
    await writeJson(HOUSE_COLLECTION_KEY, [stored, ...all]);
    return mapHousePiece(stored);
  }

  private async listHouseCollectionPieces(): Promise<StudioPiece[]> {
    const all = await readJson(HOUSE_COLLECTION_KEY, narrowStoredHousePieces, []);
    return all.map(mapHousePiece);
  }

  async submitStudioPiece(input: StudioSubmission): Promise<StudioPiece> {
    // Route through the shared guard so house stills never hit File().base64 /
    // studio-animate (see house-collection-open.ts + its regression test).
    const route = decideStudioSubmitRoute(input);
    if (route.action === 'serve-pre-staged') {
      return this.openHouseCollectionPiece(input.imageUri, route.videoFile);
    }

    await ensureSession();
    const supabase = getSupabase();
    // Visitor uploads: the edge function stores the still, runs the artwork
    // gate, and calls Grok Imagine. imageUri must be a local file path.
    const imageBase64 = await new File(input.imageUri).base64();
    const { data, error } = await supabase.functions.invoke('studio-animate', {
      body: { image_base64: imageBase64, origin: input.origin },
    });
    if (error) return rethrowFunctionError(error, 'submitStudioPiece');
    const payload = data as { piece: StudioRow };
    const [piece] = await refreshStudioRows([payload.piece]);
    return mapStudioPiece(piece);
  }

  async getStudioPiece(id: StudioPieceId): Promise<StudioPiece | null> {
    const local = (await this.listHouseCollectionPieces()).find((piece) => piece.id === id);
    if (local) return local;

    await ensureSession();
    const supabase = getSupabase();
    const { data, error } = await supabase.from('studio_pieces').select('*').eq('id', id).maybeSingle();
    if (error) throw new Error(`getStudioPiece: ${error.message}`);
    if (!data) return null;
    const [piece] = await refreshStudioRows([data as StudioRow]);
    return mapStudioPiece(piece);
  }

  async listStudioPieces(): Promise<StudioPiece[]> {
    const local = await this.listHouseCollectionPieces();
    try {
      await ensureSession();
      const supabase = getSupabase();
      const { data, error } = await supabase
        .from('studio_pieces')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw new Error(`listStudioPieces: ${error.message}`);
      const refreshed = await refreshStudioRows((data as StudioRow[]) ?? []);
      const remote = refreshed.map(mapStudioPiece);
      return [...local, ...remote].sort((a, b) => b.createdAtMs - a.createdAtMs);
    } catch (error) {
      // House opens must still work when anon auth or the network is down.
      if (local.length > 0) return local;
      throw error;
    }
  }

  async countCollectionWakes(): Promise<number> {
    // studio_pieces has no origin column yet, so live metering is the local
    // house-collection ledger (the only path that opens pre-staged wakes).
    return (await this.listHouseCollectionPieces()).length;
  }

  async getCommissionLedger(): Promise<CommissionLedger> {
    await ensureSession();
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('commission_ledgers')
      .select('available, last_grant_month')
      .maybeSingle();
    if (error) throw new Error(`getCommissionLedger: ${error.message}`);
    // The monthly grant lands server-side when spent (studio-animate); mirror
    // it here so a member sees the included commission before first use.
    const month = new Date().toISOString().slice(0, 7);
    const member = isMember(useMembershipStore.getState().membership);
    const pendingGrant = member && data?.last_grant_month !== month ? 1 : 0;
    return { available: (data?.available ?? 0) + pendingGrant };
  }

  async purchaseCommission(packId: CommissionPackId): Promise<CommissionLedger> {
    const before = await this.getCommissionLedger();
    const outcome = await purchaseCommissionPack(packId);
    if (outcome === 'cancelled') throw new Error('commission_purchase_cancelled');
    if (outcome === 'unavailable') throw new Error('commission_purchase_unavailable');
    if (outcome === 'identity_failed') throw new Error('commission_identity_failed');
    if (outcome !== 'purchased') throw new Error('commission_purchase_failed');

    // Credits are granted by the RevenueCat webhook. Poll briefly so the
    // commission screen can proceed into the studio without a second tap.
    const need = before.available + commissionPack(packId).count;
    for (let attempt = 0; attempt < 12; attempt += 1) {
      await new Promise((resolve) => setTimeout(resolve, 500));
      const ledger = await this.getCommissionLedger();
      if (ledger.available >= need) return ledger;
    }
    // Apple charged; webhook has not credited yet. Do not imply the purchase failed.
    throw new Error('commission_credits_pending');
  }

  async getSavedSceneIds(): Promise<SceneId[]> {
    await ensureSession();
    const supabase = getSupabase();
    const { data, error } = await supabase
      .from('saves')
      .select('scene_id')
      .order('created_at', { ascending: false });
    if (error) throw new Error(`getSavedSceneIds: ${error.message}`);
    const bundled = await readJson(BUNDLED_SAVES_KEY, narrowStringArray, []);
    return [
      ...bundled.map(toSceneId),
      ...(data as Pick<SaveRow, 'scene_id'>[]).map((row) => toSceneId(row.scene_id)),
    ];
  }

  async setSceneSaved(id: SceneId, saved: boolean): Promise<void> {
    if (!isSceneRowId(id)) {
      const current = await readJson(BUNDLED_SAVES_KEY, narrowStringArray, []);
      const without = current.filter((existing) => existing !== id);
      await writeJson(BUNDLED_SAVES_KEY, saved ? [id, ...without] : without);
      return;
    }
    const session = await ensureSession();
    const supabase = getSupabase();
    if (saved) {
      const { error } = await supabase
        .from('saves')
        .upsert({ user_id: session.user.id, scene_id: id });
      if (error) throw new Error(`setSceneSaved: ${error.message}`);
      return;
    }
    const { error } = await supabase.from('saves').delete().eq('scene_id', id);
    if (error) throw new Error(`setSceneSaved: ${error.message}`);
  }

  async syncProgress(local: ProgressSnapshot): Promise<ProgressSnapshot> {
    await ensureSession();
    const supabase = getSupabase();
    const { data, error } = await supabase.rpc('sync_visitor_progress', toSyncProgressArgs(local));
    if (error) throw new Error(`syncProgress: ${error.message}`);
    return parseSyncProgressResponse(data);
  }
}
