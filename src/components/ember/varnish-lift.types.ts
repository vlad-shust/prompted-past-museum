import type { SkImage } from '@shopify/react-native-skia';

/** A point on the painting itself, 0-1 from its top-left. Same frame as DetailFocus. */
export interface WakePoint {
  x: number;
  y: number;
}

export interface VarnishLiftProps {
  /** The decoded still. The caller owns loading so it can fall back when Skia stalls. */
  image: SkImage;
  width: number;
  height: number;
  /** How the still is fitted, mirroring the clip underneath. */
  fit: 'cover' | 'contain';
  /** Where the cleaning starts. Defaults to the middle of the canvas. */
  focus?: WakePoint;
  /** The long pass on a first wake, the short one on a re-open. */
  ceremony: boolean;
  /** Run the choreography. False holds the untouched still. */
  active: boolean;
  /** The cloth has reached the surface: the caller starts the clip here. */
  onSweepStart?: () => void;
  /** The canvas is fully transparent and can be unmounted. */
  onLiftComplete?: () => void;
}
