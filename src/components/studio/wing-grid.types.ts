import type { StudioPiece } from '@/types/domain.types';

/** A finished piece on the wall with its label: house works carry their record, uploads their date. */
export interface HungPiece {
  piece: StudioPiece;
  title: string;
  caption: string;
}
