/** A point on the painting itself, 0-1 from its top-left. Same frame as the app's WakePoint. */
export interface WakePoint {
  x: number;
  y: number;
}

/** The canvas in CSS pixels. */
export interface LiftFrame {
  width: number;
  height: number;
}

/** Where the cloth starts and how far it must travel, in canvas pixels. */
export interface LiftOrigin {
  x: number;
  y: number;
  span: number;
}

/** Roughness along the front: a smooth -1..1 value by angle and radius. */
export type Wander = (theta: number, radius: number) => number;
