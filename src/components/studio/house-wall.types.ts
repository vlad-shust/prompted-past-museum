import type { ReactNode } from 'react';
import type { SharedValue } from 'react-native-reanimated';

import type { StudioSuggestionDef } from '@/content/studio-suggestions.types';

/** A frame's size on the wall, in points. */
export interface WallFrame {
  width: number;
  height: number;
}

/** The hanging height every work shares, and the width a wide work is capped at. */
export interface HangLimits {
  height: number;
  maxWidth: number;
}

/**
 * What hangs on the wall: the house works, then the empty frame kept for the
 * visitor's own. `spare` is the room a work leaves under the tallest; its
 * plaque may say more.
 */
export type WallItem =
  | { kind: 'work'; work: StudioSuggestionDef; frame: WallFrame; spare: number }
  | { kind: 'yours'; frame: WallFrame; spare: number };

export interface HouseWallProps {
  works: readonly StudioSuggestionDef[];
  /** Id of the work hanging mid-room when the wall opens. */
  openingId: string;
  /** The plaque's action line under a work, e.g. "Open the story · free". */
  hint: string;
  /** The lit work was tapped: open its article. */
  onOpen: (work: StudioSuggestionDef) => void;
  /** The empty frame at the end of the wall. */
  onCommission: () => void;
}

export interface WallRoomProps {
  items: readonly WallItem[];
  /** Scroll offsets at which each item hangs mid-room. */
  offsets: readonly number[];
  openingIndex: number;
  /** How many works hang, for "3 of 11". */
  count: number;
  hint: string;
  onOpen: (work: StudioSuggestionDef) => void;
  onCommission: () => void;
}

export interface WallWorkProps {
  item: WallItem;
  index: number;
  /** Scroll offsets at which each item hangs mid-room. */
  offsets: readonly number[];
  scrollX: SharedValue<number>;
  /** In front of the visitor: this one wakes. */
  lit: boolean;
  /** Next to the lit work: its clip is staged so it wakes the moment it is reached. */
  near: boolean;
  /** The plaque's action line under a work. */
  hint: string;
  /** "3 of 11". */
  count: string;
  onPress: () => void;
}

export interface EmptyFrameProps {
  /** Outer size, frame included. */
  width: number;
  height: number;
  onPress: () => void;
  accessibilityLabel: string;
}

export interface FrameProps extends EmptyFrameProps {
  children: ReactNode;
}
