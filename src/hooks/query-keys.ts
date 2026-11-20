import type { ForgeId, SceneId, StudioPieceId } from '@/types/common.types';

export const queryKeys = {
  today: ['today'] as const,
  archive: ['archive'] as const,
  season: ['season'] as const,
  scene: (id: SceneId) => ['scene', id] as const,
  saves: ['saves'] as const,
  forges: ['forges'] as const,
  forge: (id: ForgeId) => ['forge', id] as const,
  forgeQuota: ['forgeQuota'] as const,
  studioPieces: ['studioPieces'] as const,
  studioPiece: (id: StudioPieceId) => ['studioPiece', id] as const,
  commissions: ['commissions'] as const,
  collectionWakes: ['collectionWakes'] as const,
};
