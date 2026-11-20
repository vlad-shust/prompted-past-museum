import type { ForgeQuota } from '@/types/domain.types';

export interface QuotaCoalsProps {
  /** Undefined while the quota query is in flight. */
  quota: ForgeQuota | undefined;
}
