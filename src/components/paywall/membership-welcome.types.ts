export interface MembershipWelcomeProps {
  /** True right after a successful purchase; softens the free-week line in. */
  fromPurchase: boolean;
  onDismiss: () => void;
}
