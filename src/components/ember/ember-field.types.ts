export interface EmberFieldProps {
  /**
   * Glow strength, 1 is the forge waiting room. Welcome uses a touch more
   * so the mid-frame still reads as celebration, not empty black.
   */
  intensity?: number;
  /**
   * Draw only the sparks on a transparent canvas, so they can drift over a
   * room instead of filling the screen with their own dark hearth.
   */
  overlay?: boolean;
}
