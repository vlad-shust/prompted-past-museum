import type { Scene } from '@/types/domain.types';

export interface StepIntoArtProps {
  scene: Scene;
  /** Width over height of the painting, null until the still has been read. */
  aspect: number | null;
  /** Fired when the visitor steps in; Today uses it to complete the day. */
  onSteppedIn?: () => void;
}
