import { LinearGradient } from 'expo-linear-gradient';
import type { StyleProp, ViewStyle } from 'react-native';

import { colors, withAlpha } from '@/theme';

/**
 * Image-edge gradient so type always sits on a legible surface.
 * direction 'up' darkens the bottom (title over painting), 'down' the top.
 */
export function Scrim({
  direction = 'up',
  color = colors.bgViewer,
  strength = 0.92,
  style,
}: {
  direction?: 'up' | 'down';
  color?: string;
  strength?: number;
  style?: StyleProp<ViewStyle>;
}) {
  const stops: [string, string, string] = [
    withAlpha(color, 0),
    withAlpha(color, strength * 0.55),
    withAlpha(color, strength),
  ];
  return (
    <LinearGradient
      pointerEvents="none"
      colors={stops}
      locations={[0, 0.55, 1]}
      start={{ x: 0.5, y: direction === 'up' ? 0 : 1 }}
      end={{ x: 0.5, y: direction === 'up' ? 1 : 0 }}
      style={style}
    />
  );
}
