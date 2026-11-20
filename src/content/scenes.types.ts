import type { EraId, MonthDay } from '../types/common.types';

/** A close-look region as authored: normalized focus plus the label caption. */
export interface MockSceneDetailDef {
  id: string;
  x: number;
  y: number;
  scale: number;
  caption: string;
}

/**
 * A scene as authored in the bundled mock content: everything a Scene has
 * except identity/publication fields, which MockDataSource materializes
 * (publishedOn is computed relative to the device's "today").
 */
export interface MockSceneDef {
  slug: string;
  title: string;
  dek: string;
  story: string;
  eraId: EraId;
  historicalDateLabel: string;
  historicalYear: number;
  /** Exact-day anniversary, or null when the date label is fuzzy. */
  historicalMonthDay: MonthDay | null;
  commissionedBy?: string;
  artTitle?: string;
  artCredit: string;
  imageUrl: string;
  thumbUrl: string;
  details: readonly MockSceneDetailDef[];
}
