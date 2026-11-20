import type { EraId } from '@/types/common.types';

export interface EraRailProps {
  value: EraId | null;
  onChange: (eraId: EraId) => void;
}
