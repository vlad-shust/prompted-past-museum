import { Image } from 'expo-image';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  cancelAnimation,
  interpolate,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withDelay,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

import { colors, easings, springs } from '@/theme';
import { onStage } from '@/utils/stage';
import type { LivingArtProps } from './living-art.types';

const BREATH_MS = 16_000;
/** Long enough to read as a camera move rather than a transition. */
const PULL_BACK_MS = 9_000;
/** Matches the free-pinch ceiling in components/scene/art-viewer.tsx. */
const MAX_ZOOM = 5;

// cover already crops, so the drift can swell freely; contain has to rest on
// the whole canvas, or the frame eats the edges of the painting.
const MOTION = {
  cover: { open: 1.9, rest: 1.04, swell: 1.1 },
  contain: { open: 1.5, rest: 1, swell: 1.03 },
} as const;

/**
 * The painting breathes: a slow drift and swell, composition untouched. It
 * opens close on the center of the canvas and pulls back to the whole of it,
 * landing on the breath's first frame so the handoff has no seam. Pinching
 * stops the drift where it stands, so the painting never moves under the
 * fingers. This is the offline "step into the art" and the reduced-motion
 * fallback; live scenes will swap in a pre-rendered Grok Imagine clip.
 */
export function LivingArt({
  imageUrl,
  width,
  height,
  active,
  zoomable = false,
  fit = 'cover',
  turned = false,
}: LivingArtProps) {
  const { open: openScale, rest: restingScale, swell: swellScale } = MOTION[fit];
  const reduceMotion = useReducedMotion();
  const intro = useSharedValue(1);
  const breath = useSharedValue(0);
  const zoom = useSharedValue(1);
  const savedZoom = useSharedValue(1);
  const panX = useSharedValue(0);
  const panY = useSharedValue(0);
  const savedX = useSharedValue(0);
  const savedY = useSharedValue(0);
  const playing = active && !reduceMotion;

  useEffect(() => {
    if (!playing) return;
    intro.value = 0;
    intro.value = withTiming(1, { duration: PULL_BACK_MS, easing: easings.inOut });
    breath.value = withDelay(
      PULL_BACK_MS,
      withRepeat(withTiming(1, { duration: BREATH_MS, easing: easings.inOut }), -1, true),
    );
    return () => {
      cancelAnimation(intro);
      cancelAnimation(breath);
      intro.value = 1;
      breath.value = 0;
    };
  }, [playing, intro, breath]);

  const takeOver = () => {
    'worklet';
    cancelAnimation(intro);
    cancelAnimation(breath);
  };

  const pinch = Gesture.Pinch()
    .onBegin(takeOver)
    .onUpdate((event) => {
      zoom.value = Math.min(Math.max(savedZoom.value * event.scale, 1), MAX_ZOOM);
    })
    .onEnd(() => {
      savedZoom.value = zoom.value;
    });

  const pan = Gesture.Pan()
    .onBegin(takeOver)
    .onUpdate((event) => {
      const room = zoom.value - 1;
      const limitX = (width * room) / 2;
      const limitY = (height * room) / 2;
      const [dx, dy] = onStage(turned, event.translationX, event.translationY);
      panX.value = Math.min(Math.max(savedX.value + dx, -limitX), limitX);
      panY.value = Math.min(Math.max(savedY.value + dy, -limitY), limitY);
    })
    .onEnd(() => {
      savedX.value = panX.value;
      savedY.value = panY.value;
    });

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onEnd(() => {
      zoom.value = withSpring(1, springs.settle);
      savedZoom.value = 1;
      panX.value = withSpring(0, springs.settle);
      panY.value = withSpring(0, springs.settle);
      savedX.value = 0;
      savedY.value = 0;
    });

  const drift = useAnimatedStyle(() => {
    const restScale = interpolate(breath.value, [0, 1], [restingScale, swellScale]);
    const restX = interpolate(breath.value, [0, 1], [width * 0.008, -width * 0.008]);
    const restY = interpolate(breath.value, [0, 1], [height * 0.006, -height * 0.01]);
    return {
      transform: [
        { scale: interpolate(intro.value, [0, 1], [openScale, restScale]) },
        { translateX: interpolate(intro.value, [0, 1], [0, restX]) },
        { translateY: interpolate(intro.value, [0, 1], [0, restY]) },
      ],
    };
  });

  // The visitor's pinch sits outside the drift, so the two never fight over
  // one transform: the drift freezes and this layer takes the gestures.
  const handled = useAnimatedStyle(() => ({
    transform: [{ translateX: panX.value }, { translateY: panY.value }, { scale: zoom.value }],
  }));

  const painting = (
    <Animated.View style={[StyleSheet.absoluteFill, handled]}>
      <Animated.View style={[StyleSheet.absoluteFill, drift]}>
        <Image
          source={{ uri: imageUrl }}
          style={StyleSheet.absoluteFill}
          contentFit={fit}
          transition={300}
          allowDownscaling={!zoomable}
          accessibilityLabel="The painting, alive"
        />
      </Animated.View>
    </Animated.View>
  );

  return (
    <View style={[styles.frame, { width, height }]}>
      {zoomable ? (
        <GestureDetector gesture={Gesture.Simultaneous(pinch, pan, doubleTap)}>
          {painting}
        </GestureDetector>
      ) : (
        painting
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    overflow: 'hidden',
    backgroundColor: colors.bgViewer,
  },
});
