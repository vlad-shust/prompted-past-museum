import type { SceneDetail } from '@shared/types/domain.types';

export interface DetailLensProps {
  imageUrl: string;
  details: readonly SceneDetail[];
}
