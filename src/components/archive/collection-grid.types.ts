import type { Forge, Scene } from '@/types/domain.types';

export type CollectionEntry =
  | { kind: 'scene'; scene: Scene; note: string; sortMs: number }
  | { kind: 'forge'; forge: Forge; imageUrl: string; sortMs: number };
