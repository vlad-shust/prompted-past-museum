import type { ForgeEye, ForgeLight, ForgeMood } from '@/types/domain.types';

export interface DirectionPanelProps {
  light: ForgeLight | null;
  mood: ForgeMood | null;
  eye: ForgeEye | null;
  onLightChange: (value: ForgeLight | null) => void;
  onMoodChange: (value: ForgeMood | null) => void;
  onEyeChange: (value: ForgeEye | null) => void;
  /** Composed whispers of the current choices; null when nothing is chosen. */
  whisperLine: string | null;
}
