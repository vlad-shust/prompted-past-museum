/** One choice in a Forge treatment row; the value travels with the submission. */
export interface ForgeTweakOption<V extends string> {
  value: V;
  label: string;
  /** Short poetic fragment; chosen whispers compose the director's line. */
  whisper: string;
}
