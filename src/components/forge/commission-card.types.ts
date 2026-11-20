import type { EraId } from '@/types/common.types';

export type CommissionStep = 'era' | 'moment' | 'forge';

export interface QuestStep {
  key: CommissionStep;
  label: string;
  done: boolean;
  /** The final step arms (pulses) instead of completing — striking it submits. */
  armed?: boolean;
}

export interface CommissionCardProps {
  eraId: EraId | null;
  momentDone: boolean;
  /** Everything required is set; the forge step pulses, ready to strike. */
  ready: boolean;
  exhausted: boolean;
  /** 1-based number of the would-be commission; null while the count loads. */
  commissionNumber: number | null;
  onStepPress: (step: CommissionStep) => void;
}
