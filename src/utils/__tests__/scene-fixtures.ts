import { toIsoDate, toSceneId } from '@/types/common.types';
import type { EraId, SceneId } from '@/types/common.types';
import type { Scene } from '@/types/domain.types';

/**
 * A minimal Scene for walk/lesson tests. Bundled-style by default: the id
 * *is* the slug (`<era>-<n>`), like materializeBundledScenes. Pass `id` to
 * model a published row, whose id is a UUID while the slug stays the same.
 */
export function scene(
  eraId: EraId,
  n: number,
  opts: { year?: number; id?: string; slug?: string } = {},
): Scene {
  const slug = opts.slug ?? `${eraId}-${n}`;
  return {
    id: toSceneId(opts.id ?? slug),
    slug,
    title: slug,
    dek: '',
    story: '',
    eraId,
    historicalDateLabel: '',
    historicalYear: opts.year ?? n,
    historicalMonthDay: null,
    publishedOn: toIsoDate('2024-01-01'),
    imageUrl: '',
    thumbUrl: '',
    onThisDay: false,
  };
}

/** `count` scenes for an era, walking order = index order. */
export function scenes(eraId: EraId, count: number): Scene[] {
  return Array.from({ length: count }, (_, n) => scene(eraId, n));
}

/** Ids of the first `count` scenes of an era, as completeDay would record them. */
export function walkedIds(eraId: EraId | string, count: number): SceneId[] {
  return Array.from({ length: count }, (_, n) => toSceneId(`${eraId}-${n}`));
}
