/** Persisted shape for mock forges; status is derived from elapsed time. */
export interface StoredForge {
  id: string;
  eraId: string;
  description: string;
  createdAtMs: number;
  rejected: boolean;
}

/** Persisted shape for mock studio pieces; status is derived from elapsed time. */
export interface StoredStudioPiece {
  id: string;
  imageUri: string;
  createdAtMs: number;
  watermarked: boolean;
  rejected: boolean;
  /** Absent on pieces stored before the house-collection split; those are uploads. */
  origin?: string;
}

/** Persisted commission ledger; the member grant stamps the month it landed. */
export interface StoredCommissionLedger {
  available: number;
  lastGrantMonth: string | null;
}
