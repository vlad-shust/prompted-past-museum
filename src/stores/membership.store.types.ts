import type { Membership } from '@/types/domain.types';

export type MembershipSource = 'mock' | 'revenuecat';

export interface MembershipStoreState {
  membership: Membership;
  source: MembershipSource;
  /** Live path: RevenueCat customer-info listener pushes updates here. */
  setMembership(membership: Membership, source: MembershipSource): void;
  /** Mock/dev path: flip membership to demo gated features without keys. */
  devToggleMembership(): void;
}
