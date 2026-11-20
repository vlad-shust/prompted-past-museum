import type { DataMode } from '@/data/data-source.types';
import type { MembershipPlan } from './purchases.types';

/**
 * Mock trial grants are for demo / local only. Live builds must never
 * unlock membership without a real store purchase.
 */
export function canGrantMockMembership(dataMode: DataMode): boolean {
  return dataMode !== 'live';
}

/**
 * Pick the monthly or annual package from an offering. Missing package
 * means unavailable — never fall back to another product on the offering.
 */
export function resolveOfferingPackage<T>(
  plan: MembershipPlan,
  monthly: T | null | undefined,
  annual: T | null | undefined,
): T | null {
  const chosen = plan === 'annual' ? annual : monthly;
  return chosen ?? null;
}
