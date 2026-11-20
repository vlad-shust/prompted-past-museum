import { houseWorkFor } from '@/content/studio-suggestions';
import type { StudioPieceOrigin, StudioSubmission } from '@/types/domain.types';

import type { StudioSubmitRoute } from './house-collection-open.types';

/**
 * House clips are pre-staged in the media bucket. Never call
 * `File(remoteUrl).base64()` or invoke `studio-animate` for them: that path
 * only accepts local file URIs and fails for every HTTPS house painting on
 * live Expo opens.
 */
export function resolveHouseCollectionClip(
  imageUri: string,
): { suggestionId: string; videoFile: string } | null {
  const suggestion = houseWorkFor(imageUri);
  if (!suggestion?.videoFile) return null;
  return { suggestionId: suggestion.id, videoFile: suggestion.videoFile };
}

/** True when the submit came from a house-wall tap (pre-staged clip path). */
export function isHouseCollectionOpen(origin: StudioPieceOrigin): boolean {
  return origin === 'collection';
}

/**
 * Single source of truth for live studio submit routing.
 * Collection opens always take the pre-staged path when a clip exists;
 * visitor uploads keep the `studio-animate` edge-function path.
 */
export function decideStudioSubmitRoute(
  input: Pick<StudioSubmission, 'origin' | 'imageUri'>,
): StudioSubmitRoute {
  if (isHouseCollectionOpen(input.origin)) {
    const clip = resolveHouseCollectionClip(input.imageUri);
    if (!clip) {
      throw new Error('That painting is not ready to wake yet.');
    }
    return {
      action: 'serve-pre-staged',
      suggestionId: clip.suggestionId,
      videoFile: clip.videoFile,
    };
  }

  // Lasting guard: a known house still must never reach File().base64 even if
  // origin is mis-tagged as upload.
  if (resolveHouseCollectionClip(input.imageUri) !== null) {
    throw new Error('House-collection paintings use pre-staged clips; do not re-upload them.');
  }

  return { action: 'invoke-studio-animate' };
}
