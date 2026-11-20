/** Finger travel on the screen, expressed in the frame of a stage turned 90° clockwise. */
export function onStage(turned: boolean, dx: number, dy: number): [number, number] {
  'worklet';
  return turned ? [dy, -dx] : [dx, dy];
}
