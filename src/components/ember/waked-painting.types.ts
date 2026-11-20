import type { AnimationSource } from '@/types/domain.types';
import type { WakePoint } from './varnish-lift.types';

export interface WakedPaintingProps {
  animation: AnimationSource;
  /** The still behind every treatment: under a loading clip, and for the living still. */
  imageUrl: string;
  width: number;
  height: number;
  /** Motion plays only while true; false pauses/renders the still. */
  active: boolean;
  /** First wake: the long varnish lift for a clip, the ember burn for a still. */
  ceremony?: boolean;
  /** cover crops into the frame (default); contain shows the whole painting. */
  fit?: 'cover' | 'contain';
  /** Let the visitor pinch into the living still. */
  zoomable?: boolean;
  /** The frame hangs sideways on a turned stage. */
  turned?: boolean;
  /** Where the wake starts, normally the curator's first close-look. */
  focus?: WakePoint;
  /** No WAKING notice while the clip loads: for frames that are not the whole screen. */
  quiet?: boolean;
}

export interface WakedClipProps extends Omit<WakedPaintingProps, 'animation' | 'zoomable' | 'turned'> {
  url: string;
}

/** How far the clip has come out from under the painting. */
export type WakeStage = 'still' | 'lifting' | 'fading' | 'alive';
