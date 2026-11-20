import type { Era, Scene } from '@/types/domain.types';
import type { SceneAccess } from '@/utils/access';

export interface SceneRowProps {
  scene: Scene;
  access: SceneAccess;
  era: Era;
  /** Opens the row with "Meanwhile, in {era}" — the civilization just changed mid-century. */
  crossover: boolean;
}
