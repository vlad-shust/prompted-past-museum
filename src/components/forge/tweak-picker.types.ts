import type { ForgeTweakOption } from '@/content/forge-tweaks.types';

export interface TweakPickerProps<V extends string> {
  label: string;
  options: readonly ForgeTweakOption<V>[];
  value: V | null;
  /** Called with null when the active chip is tapped again — the forge decides. */
  onChange: (value: V | null) => void;
}
