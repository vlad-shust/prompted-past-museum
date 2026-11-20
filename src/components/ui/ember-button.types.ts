import type { StyleProp, ViewStyle } from 'react-native';

export type EmberButtonVariant = 'ember' | 'outline' | 'ghost';

export interface EmberButtonProps {
  label: string;
  onPress: () => void;
  variant?: EmberButtonVariant;
  loading?: boolean;
  disabled?: boolean;
  /** Compact height for inline placements. */
  small?: boolean;
  style?: StyleProp<ViewStyle>;
}
