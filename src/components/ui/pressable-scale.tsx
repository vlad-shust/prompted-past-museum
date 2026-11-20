import * as Haptics from 'expo-haptics';
import { Pressable } from 'react-native';
import type { GestureResponderEvent } from 'react-native';
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { PRESS_SCALE, timing } from '@/theme';
import type { PressableScaleProps } from './pressable-scale.types';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export function PressableScale({ haptic = true, onPress, style, ...rest }: PressableScaleProps) {
  const pressed = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: interpolate(pressed.value, [0, 1], [1, PRESS_SCALE]) }],
  }));

  const handlePress = (event: GestureResponderEvent) => {
    if (haptic) void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    onPress?.(event);
  };

  return (
    <AnimatedPressable
      {...rest}
      onPress={handlePress}
      onPressIn={(event) => {
        pressed.set(withTiming(1, timing.micro));
        rest.onPressIn?.(event);
      }}
      onPressOut={(event) => {
        pressed.set(withTiming(0, timing.standard));
        rest.onPressOut?.(event);
      }}
      style={[animatedStyle, style]}
    />
  );
}
