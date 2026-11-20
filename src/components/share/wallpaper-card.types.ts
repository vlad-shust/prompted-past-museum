import type { PhotoSaveOutcome } from '@/lib/hd-download.types';

export interface WallpaperPayload {
  imageUrl: string;
  title: string;
  /** "Ancient Rome · 24 August, AD 79". */
  epigraph: string;
  /** Painter credit, when the scene carries one. */
  credit?: string;
}

export interface WallpaperCardProps {
  payload: WallpaperPayload;
  /** Screen size in points; the capture is this at native pixel scale. */
  screen: { width: number; height: number };
  /** Called with the captured file URI, or null when capture failed. */
  onCaptured: (uri: string | null) => void;
}

export type WallpaperState = 'idle' | 'rendering' | PhotoSaveOutcome;
