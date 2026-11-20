import type { ForgeEye, ForgeLight, ForgeMood } from '../types/domain.types';
import type { ForgeTweakOption } from './forge-tweaks.types';

// Labels and whispers only — the matching prompt fragments live server-side
// in supabase/functions/forge-submit, so the vocabulary can be retuned
// without a client release.

export const LIGHT_OPTIONS: readonly ForgeTweakOption<ForgeLight>[] = [
  { value: 'dawn', label: 'First light', whisper: 'in the first pale light' },
  { value: 'golden-hour', label: 'Golden hour', whisper: 'in low golden sun' },
  { value: 'candlelight', label: 'Candlelight', whisper: 'by candle flame' },
  { value: 'moonlight', label: 'Moonlight', whisper: 'under a cold moon' },
  { value: 'storm-light', label: 'Storm-light', whisper: 'under a bruised sky' },
  { value: 'fog', label: 'Fog', whisper: 'wrapped in fog' },
];

export const MOOD_OPTIONS: readonly ForgeTweakOption<ForgeMood>[] = [
  { value: 'serene', label: 'Serene', whisper: 'a held breath' },
  { value: 'ominous', label: 'Ominous', whisper: 'storm in the air' },
  { value: 'triumphant', label: 'Triumphant', whisper: 'banners high' },
  { value: 'melancholy', label: 'Melancholy', whisper: 'beauty tinged with loss' },
  { value: 'wondrous', label: 'Wondrous', whisper: 'eyes wide with wonder' },
  { value: 'tense', label: 'Tense', whisper: 'the instant before' },
];

export const EYE_OPTIONS: readonly ForgeTweakOption<ForgeEye>[] = [
  { value: 'up-close', label: 'Up close', whisper: 'faces close' },
  { value: 'wide-vista', label: 'Wide vista', whisper: 'the world laid wide' },
  { value: 'from-above', label: 'From above', whisper: 'seen from the heavens' },
  { value: 'from-the-ground', label: 'From the ground', whisper: 'towering overhead' },
];
