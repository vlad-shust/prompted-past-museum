import type { ReactNode } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import type { Edge } from 'react-native-safe-area-context';

export interface ScreenProps {
  children: ReactNode;
  /** Standard horizontal screen padding. Default true. */
  padded?: boolean;
  /** Wrap children in a ScrollView. Default false. */
  scroll?: boolean;
  /** Film grain + vignette overlay. Default true. */
  atmosphere?: boolean;
  /** Safe-area edges to inset. Default ['top']. */
  edges?: readonly Edge[];
  backgroundColor?: string;
  style?: StyleProp<ViewStyle>;
  contentStyle?: StyleProp<ViewStyle>;
}
