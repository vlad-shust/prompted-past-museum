import type { PressableProps, StyleProp, ViewStyle } from 'react-native';

export interface PressableScaleProps extends Omit<PressableProps, 'style'> {
  /** Fire a light impact haptic on press. Default true. */
  haptic?: boolean;
  /** Plain style only — the state-callback form isn't supported here. */
  style?: StyleProp<ViewStyle>;
}
