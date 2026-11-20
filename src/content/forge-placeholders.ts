import { toEraId } from '../types/common.types';
import { bucketPainting } from './scenes/painting-source';
import type { EraId } from '../types/common.types';

/**
 * Mock forge results: one era-appropriate public-domain painting per era.
 * The live pipeline replaces these with FLUX-generated house-style images.
 */
const PLACEHOLDER_BY_ERA: ReadonlyMap<EraId, string> = new Map([
  [
    toEraId('ancient-egypt'),
    bucketPainting('forge/ancient-egypt.jpg'),
  ],
  [
    toEraId('classical-greece'),
    bucketPainting('forge/classical-greece.jpg'),
  ],
  [
    toEraId('roman-empire'),
    bucketPainting('forge/roman-empire.jpg'),
  ],
  [
    toEraId('viking-age'),
    bucketPainting('forge/viking-age.jpg'),
  ],
  [
    toEraId('medieval-europe'),
    bucketPainting('forge/medieval-europe.jpg'),
  ],
  [
    toEraId('feudal-japan'),
    bucketPainting('forge/feudal-japan.jpg'),
  ],
  [
    toEraId('renaissance'),
    bucketPainting('forge/renaissance.jpg'),
  ],
  [
    toEraId('age-of-sail'),
    bucketPainting('forge/age-of-sail.jpg'),
  ],
  [
    toEraId('revolutionary-age'),
    bucketPainting('forge/revolutionary-age.jpg'),
  ],
  [
    toEraId('machine-age'),
    bucketPainting('forge/machine-age.jpg'),
  ],
]);

const FALLBACK_PLACEHOLDER = bucketPainting('forge/fallback.jpg');

export function forgePlaceholderImage(eraId: EraId): string {
  return PLACEHOLDER_BY_ERA.get(eraId) ?? FALLBACK_PLACEHOLDER;
}
