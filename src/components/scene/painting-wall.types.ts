import type { ReactNode } from 'react';
import type { EdgeInsets } from 'react-native-safe-area-context';

/** The stage a painting hangs on: the screen upright, or the screen on its side for a wide canvas. */
export interface WallStage {
  turned: boolean;
  width: number;
  height: number;
  /** Safe-area insets expressed in the stage's own frame. */
  insets: EdgeInsets;
  /** Where the painting itself hangs: inside the safe area, above the footer. */
  frame: { x: number; y: number; width: number; height: number };
}

/** Height of whatever sits under the painting, in each orientation of the stage. */
export interface WallFooter {
  upright: number;
  turned: number;
}

export interface PaintingWallProps {
  stage: WallStage;
  children: ReactNode;
}
