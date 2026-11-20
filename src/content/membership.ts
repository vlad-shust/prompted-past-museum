import type { CommissionPack, CommissionPackId } from './membership.types';

/**
 * Display fallbacks when RevenueCat offerings haven't loaded (or in mock
 * mode). Live prices always come from the store via getOfferings.
 */
export const MEMBERSHIP = {
  entitlementId: 'member',
  trialDays: 7,
  monthlyPriceLabel: '$5.99/month',
  annualPriceLabel: '$39.99/year',
  /** Shown on the subscription paywall (App Review requires both to be reachable). */
  termsUrl: 'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/',
  privacyUrl: 'https://promptedpast.app/privacy',
} as const;

/**
 * The studio's pay-per-piece product, sold in 3 sizes so a returning visitor
 * buys once instead of at every painting. Live prices come from the store;
 * these are the display fallbacks.
 */
const PACKS_BY_ID = {
  single: { id: 'single', productId: 'commission', count: 1, priceLabel: '$1.99' },
  five: { id: 'five', productId: 'commission_5', count: 5, priceLabel: '$7.99' },
  fifteen: { id: 'fifteen', productId: 'commission_15', count: 15, priceLabel: '$19.99' },
} as const satisfies Record<CommissionPackId, CommissionPack>;

/** Display order, smallest first. The studio preselects the first. */
export const COMMISSION_PACKS = [PACKS_BY_ID.single, PACKS_BY_ID.five, PACKS_BY_ID.fifteen] as const;

/** One painting, one price: the default, and the only size a first buy needs. */
export const SINGLE_COMMISSION = PACKS_BY_ID.single;

export function commissionPack(id: CommissionPackId): CommissionPack {
  return PACKS_BY_ID[id];
}

export const COMMISSION = {
  /** Membership's included taste of the studio, granted on the 1st use each month. */
  monthlyGrant: 1,
} as const;
