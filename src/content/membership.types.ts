/** The sizes a commission is sold in; the store carries one consumable per size. */
export type CommissionPackId = 'single' | 'five' | 'fifteen';

export interface CommissionPack {
  id: CommissionPackId;
  /** Consumable product id in the store. */
  productId: string;
  count: number;
  /** Display fallback; the live price comes from the store. */
  priceLabel: string;
}
