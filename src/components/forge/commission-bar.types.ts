/** What the pinned bar narrates — exactly one form state at a time. */
export type CommissionNarration =
  | { kind: 'need-era' }
  | { kind: 'need-moment' }
  | { kind: 'ready'; line: string }
  | { kind: 'exhausted'; member: boolean };

export interface CommissionBarProps {
  narration: CommissionNarration;
  /** A failed submit; shown in place of the narration until the next attempt. */
  errorMessage: string | null;
  submitting: boolean;
  onForge: () => void;
  onJoin: () => void;
}
