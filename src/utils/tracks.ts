import { ERAS } from '@/content/eras';
import type { EraId } from '@/types/common.types';
import type { Scene } from '@/types/domain.types';
import type { EraTrack } from './tracks.types';

/**
 * Tracks are the eras themselves, one lesson per day, ordered the way time
 * ran. Day count is simply how many scenes exist for the era, so depth
 * reads honestly: "Explore in N days" is a promise the catalogue can keep.
 */
export function buildTracks(scenes: Scene[]): EraTrack[] {
  return ERAS.map((era) => {
    const eraScenes = scenes
      .filter((scene) => scene.eraId === era.id)
      .sort((a, b) => a.historicalYear - b.historicalYear);
    return { era, scenes: eraScenes, dayCount: eraScenes.length };
  }).filter((track) => track.dayCount > 0);
}

export function trackForEra(tracks: EraTrack[], eraId: EraId): EraTrack | null {
  return tracks.find((track) => track.era.id === eraId) ?? null;
}

// The "what's next" suggestion itself — `continuationFor` and
// `firstTrackSuggestion` — lives in `@/utils/recommend`, which needs the
// visitor's progress and onboarding picks alongside the tracks built here.
