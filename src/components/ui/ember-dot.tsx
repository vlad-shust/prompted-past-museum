import { useEffect } from 'react';
import type { StyleProp, ViewStyle } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';

import { colors, withAlpha } from '@/theme';

/**
 * A living ember: warm dot with a soft glow and a slow breath.
 * intensity 0..1 dims it (locked archive scenes are faint sparks).
 */
export function EmberDot({
  size = 8,
  intensity = 1,
  breathe = true,
  color = colors.emberBright,
  style,
}: {
  size?: number;
  intensity?: number;
  breathe?: boolean;
  color?: string;
  style?: StyleProp<ViewStyle>;
}) {
  const breath = useSharedValue(1);

  useEffect(() => {
    if (!breathe) return;
    breath.value = withRepeat(
      withTiming(0.62, { duration: 2_600 + Math.random() * 2_400, easing: Easing.inOut(Easing.sin) }),
      -1,
      true,
    );
  }, [breathe, breath]);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: intensity * (breathe ? breath.value : 1),
  }));

  return (
    <Animated.View
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: color,
          shadowColor: colors.glowHalo,
          shadowOpacity: 0.9,
          shadowRadius: size * 0.9,
          shadowOffset: { width: 0, height: 0 },
          borderWidth: size >= 10 ? 1 : 0,
          borderColor: withAlpha(colors.glowHalo, 0.5),
        },
        animatedStyle,
        style,
      ]}
    />
  );
}
