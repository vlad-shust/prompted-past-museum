import { Platform } from 'react-native';
import Purchases, {
  INTRO_ELIGIBILITY_STATUS,
  LOG_LEVEL,
  PURCHASES_ERROR_CODE,
} from 'react-native-purchases';
import type { CustomerInfo, PurchasesError, PurchasesPackage } from 'react-native-purchases';

import { COMMISSION_PACKS, MEMBERSHIP, commissionPack } from '@/content/membership';
import type { CommissionPackId } from '@/content/membership.types';
import { useMembershipStore } from '@/stores/membership.store';
import type { Membership } from '@/types/domain.types';
import { env } from './env';
import { canGrantMockMembership, resolveOfferingPackage } from './purchases-policy';
import type { CommissionPurchaseOutcome, MembershipPlan, OfferingPrices } from './purchases.types';
import { ensureSession } from './supabase';

/**
 * RevenueCat wiring. Without an API key the module degrades to mock mode
 * only when dataMode is not live: the paywall "purchases" by flipping the
 * membership store. Live builds fail closed instead of granting a fake trial.
 */
export function purchasesAvailable(): boolean {
  return Platform.OS === 'ios' && env.revenueCatIosKey.length > 0;
}

function mapCustomerInfo(info: CustomerInfo): Membership {
  const entitlement = info.entitlements.active[MEMBERSHIP.entitlementId];
  if (!entitlement) return { kind: 'free' };
  const expiresAtMs = entitlement.expirationDate ? Date.parse(entitlement.expirationDate) : null;
  if (entitlement.periodType === 'TRIAL') {
    return { kind: 'trial', expiresAtMs: expiresAtMs ?? Date.now() };
  }
  return { kind: 'member', expiresAtMs, willRenew: entitlement.willRenew };
}

let initialized = false;

/** Serializes RC logIn so purchase waits for identity when a session exists. */
let identityReady: Promise<void> = Promise.resolve();
let identityUserId: string | null = null;

export function initPurchases(appUserId: string | null = null): void {
  if (!purchasesAvailable() || initialized) return;
  initialized = true;
  Purchases.setLogLevel(__DEV__ ? LOG_LEVEL.DEBUG : LOG_LEVEL.INFO);
  Purchases.configure({ apiKey: env.revenueCatIosKey, appUserID: appUserId });
  Purchases.addCustomerInfoUpdateListener((info) => {
    useMembershipStore.getState().setMembership(mapCustomerInfo(info), 'revenuecat');
  });
  // Cold start: sync entitlement state even before the first purchase/listener.
  void syncPurchasesCustomerInfo();
}

/** Pull the latest CustomerInfo into the membership store. */
export async function syncPurchasesCustomerInfo(): Promise<void> {
  if (!purchasesAvailable() || !initialized) return;
  try {
    const info = await Purchases.getCustomerInfo();
    useMembershipStore.getState().setMembership(mapCustomerInfo(info), 'revenuecat');
  } catch (error) {
    console.warn('[purchases] getCustomerInfo failed:', error instanceof Error ? error.message : error);
  }
}

/** Live mode: key RevenueCat to the Supabase user so webhook events map to a uuid. */
export async function logInPurchases(appUserId: string): Promise<void> {
  if (!purchasesAvailable() || !initialized) return;
  if (identityUserId === appUserId) return;

  identityReady = identityReady.then(async () => {
    if (identityUserId === appUserId) return;
    try {
      const { customerInfo } = await Purchases.logIn(appUserId);
      useMembershipStore.getState().setMembership(mapCustomerInfo(customerInfo), 'revenuecat');
      identityUserId = appUserId;
    } catch (error) {
      console.warn('[purchases] logIn failed:', error instanceof Error ? error.message : error);
    }
  });
  await identityReady;
}

/**
 * Wait for any in-flight RC logIn; if live and still anonymous to RC, log in
 * against the Supabase session before StoreKit charges.
 */
async function awaitPurchasesIdentity(): Promise<boolean> {
  if (!purchasesAvailable() || !initialized) return true;
  await identityReady;
  if (identityUserId !== null) return true;
  if (env.dataMode !== 'live') return true;
  try {
    const session = await ensureSession();
    await logInPurchases(session.user.id);
  } catch (error) {
    console.warn(
      '[purchases] identity before purchase failed:',
      error instanceof Error ? error.message : error,
    );
  }
  return identityUserId !== null;
}

async function packageForPlan(plan: MembershipPlan): Promise<PurchasesPackage | null> {
  const offerings = await Purchases.getOfferings();
  const current = offerings.current;
  if (!current) return null;
  return resolveOfferingPackage(plan, current.monthly, current.annual);
}

/** Localized store prices and real trial eligibility. Mock mode (no store)
 * uses the display fallbacks; a live store miss yields no price and no trial. */
export async function fetchOfferingPrices(): Promise<OfferingPrices> {
  if (!purchasesAvailable()) {
    return {
      monthlyLabel: MEMBERSHIP.monthlyPriceLabel,
      annualLabel: MEMBERSHIP.annualPriceLabel,
      monthlyTrial: true,
      annualTrial: true,
    };
  }
  try {
    const offerings = await Purchases.getOfferings();
    const monthly = offerings.current?.monthly?.product ?? null;
    const annual = offerings.current?.annual?.product ?? null;
    const ids = [monthly?.identifier, annual?.identifier].filter((id): id is string => !!id);
    const eligibility = ids.length > 0 ? await Purchases.checkTrialOrIntroductoryPriceEligibility(ids) : {};
    const trialFor = (product: typeof monthly): boolean => {
      if (!product?.introPrice) return false;
      const status = eligibility[product.identifier]?.status;
      return (
        status !== INTRO_ELIGIBILITY_STATUS.INTRO_ELIGIBILITY_STATUS_INELIGIBLE &&
        status !== INTRO_ELIGIBILITY_STATUS.INTRO_ELIGIBILITY_STATUS_NO_INTRO_OFFER_EXISTS
      );
    };
    return {
      monthlyLabel: monthly?.priceString ?? null,
      annualLabel: annual?.priceString ?? null,
      monthlyTrial: trialFor(monthly),
      annualTrial: trialFor(annual),
    };
  } catch {
    return { monthlyLabel: null, annualLabel: null, monthlyTrial: false, annualTrial: false };
  }
}

/** Localized store prices for the commission packs, keyed by pack id. Mock
 * mode (no store) uses the display fallbacks; a live store miss yields none. */
export async function fetchCommissionPrices(): Promise<Partial<Record<CommissionPackId, string>>> {
  if (!purchasesAvailable()) {
    return Object.fromEntries(COMMISSION_PACKS.map((pack) => [pack.id, pack.priceLabel]));
  }
  const products = await Purchases.getProducts(COMMISSION_PACKS.map((pack) => pack.productId));
  const prices: Partial<Record<CommissionPackId, string>> = {};
  for (const pack of COMMISSION_PACKS) {
    const product = products.find((candidate) => candidate.identifier === pack.productId);
    if (product) prices[pack.id] = product.priceString;
  }
  return prices;
}

const MOCK_PURCHASE_DELAY_MS = 900;

export async function purchaseMembership(
  plan: MembershipPlan = 'monthly',
): Promise<'purchased' | 'cancelled' | 'failed' | 'unavailable'> {
  if (!purchasesAvailable()) {
    if (!canGrantMockMembership(env.dataMode)) return 'unavailable';
    await new Promise((resolve) => setTimeout(resolve, MOCK_PURCHASE_DELAY_MS));
    useMembershipStore.getState().setMembership(
      { kind: 'trial', expiresAtMs: Date.now() + MEMBERSHIP.trialDays * 24 * 60 * 60 * 1_000 },
      'mock',
    );
    return 'purchased';
  }
  try {
    await awaitPurchasesIdentity();
    const pkg = await packageForPlan(plan);
    if (!pkg) return 'unavailable';
    const { customerInfo } = await Purchases.purchasePackage(pkg);
    useMembershipStore.getState().setMembership(mapCustomerInfo(customerInfo), 'revenuecat');
    return 'purchased';
  } catch (error: unknown) {
    const purchasesError = error as PurchasesError;
    if (purchasesError.code === PURCHASES_ERROR_CODE.PURCHASE_CANCELLED_ERROR) return 'cancelled';
    return 'failed';
  }
}

export async function restoreMembership(): Promise<boolean> {
  if (!purchasesAvailable()) return false;
  try {
    const info = await Purchases.restorePurchases();
    const membership = mapCustomerInfo(info);
    useMembershipStore.getState().setMembership(membership, 'revenuecat');
    return membership.kind !== 'free';
  } catch {
    return false;
  }
}

/** Buy a consumable commission pack. Credits land via the RevenueCat webhook. */
export async function purchaseCommissionPack(
  packId: CommissionPackId,
): Promise<CommissionPurchaseOutcome> {
  if (!purchasesAvailable()) return 'unavailable';
  const pack = commissionPack(packId);
  try {
    // Credits land by user id via the webhook: never charge an anonymous
    // RevenueCat customer, or the purchase could never be credited.
    if (!(await awaitPurchasesIdentity())) return 'identity_failed';
    const products = await Purchases.getProducts([pack.productId]);
    const product = products[0];
    if (!product) return 'unavailable';
    await Purchases.purchaseStoreProduct(product);
    return 'purchased';
  } catch (error: unknown) {
    const purchasesError = error as PurchasesError;
    if (purchasesError.code === PURCHASES_ERROR_CODE.PURCHASE_CANCELLED_ERROR) return 'cancelled';
    return 'failed';
  }
}
