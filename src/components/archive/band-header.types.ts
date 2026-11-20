import type { EraId } from '@/types/common.types';
import type { TimelineBand } from './timeline-model.types';

export interface BandHeaderProps {
  band: TimelineBand;
  /** This month's season era — its name burns gold in the civilization list. */
  seasonEraId: EraId | null;
}
