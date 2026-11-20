import type { HouseWork } from '@/lib/studio.types';

export interface StudioWallProps {
  works: readonly HouseWork[];
  /** Index of the work the wall opens in front of. */
  opening: number;
}

/** Width over height of a still, once its pixels have been read. */
export type AspectByWork = Readonly<Record<string, number>>;
