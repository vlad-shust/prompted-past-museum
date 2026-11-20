import type { WakePoint } from './varnish-lift.types';

/** How far a woken hall has come: the still, the film loading under the varnish, the film playing. */
export type WakePhase = 'still' | 'waking' | 'living';

export interface WakingPictureProps {
  posterUrl: string;
  videoUrl: string;
  alt: string;
  /** Where the cleaning starts on the painting. Defaults to its middle. */
  focus?: WakePoint;
  /** Wake shortly after mount instead of waiting for the frame to scroll into view. */
  eager?: boolean;
  /** When given, the wake waits for this to turn true instead of watching the viewport. */
  armed?: boolean;
  /** Holds the film still once alive; it plays again when released. */
  paused?: boolean;
  /** Passed through to the still's next/image sizes attribute. */
  sizes?: string;
  /** Extra classes for the underlying still (entrance animation etc.). */
  stillClassName?: string;
}
