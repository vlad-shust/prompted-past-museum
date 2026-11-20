export type PurchaseOutcome = 'purchased' | 'cancelled' | 'failed' | 'unavailable';

export type MembershipPlan = 'monthly' | 'annual';

export interface OfferingPrices {
  monthlyLabel: string | null;
  annualLabel: string | null;
  /** Whether the store will actually give this visitor the free trial. */
  monthlyTrial: boolean;
  annualTrial: boolean;
}

/** identity_failed: RevenueCat could not be tied to the Supabase user, so a
 * charge would never reach the ledger; nothing was bought. */
export type CommissionPurchaseOutcome = PurchaseOutcome | 'identity_failed';
