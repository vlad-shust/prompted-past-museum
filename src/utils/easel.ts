import type { StudioPiece } from '@/types/domain.types';

/** Failures linger a day so a retry has a home, then leave the easel. */
const EASEL_FAILURE_WINDOW_MS = 24 * 60 * 60 * 1000;

/** Work still in the studio's hands, or just fallen out of them. */
export function onEasel(piece: StudioPiece, now: number): boolean {
  switch (piece.status.phase) {
    case 'inspecting':
    case 'animating':
      return true;
    case 'rejected':
    case 'failed':
      return now - piece.createdAtMs < EASEL_FAILURE_WINDOW_MS;
    case 'complete':
      return false;
    default: {
      const exhaustive: never = piece.status;
      throw new Error(`Unhandled studio phase: ${JSON.stringify(exhaustive)}`);
    }
  }
}
