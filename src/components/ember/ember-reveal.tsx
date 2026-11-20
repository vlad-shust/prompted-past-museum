import { Canvas, Fill, ImageShader, Shader, useImage } from '@shopify/react-native-skia';
import * as Haptics from 'expo-haptics';
import { Image } from 'expo-image';
import { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  runOnJS,
  useDerivedValue,
  useReducedMotion,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { colors, durations, easings } from '@/theme';
import { compileShader, NOISE_SKSL } from './sksl';
import type { EmberRevealProps } from './ember-reveal.types';

/**
 * The one deliberately slow moment in the app: a noise-threshold burn
 * dissolve. Fire rises — the painting ignites from the bottom, the front
 * glows halo→core ember, and the image warms as it settles.
 */
const EMBER_REVEAL_SKSL = `
uniform shader image;
uniform float progress;
uniform float2 resolution;

${NOISE_SKSL}

half4 main(float2 xy) {
  float2 uv = xy / resolution;
  half4 img = image.eval(xy);

  float field = fbm(uv * 4.0) * 0.62 + (1.0 - uv.y) * 0.38;
  float t = progress * 1.25 - 0.12;
  float d = t - field;

  if (d <= 0.0) {
    float pre = smoothstep(-0.05, 0.0, d);
    half3 coal = half3(0.030, 0.016, 0.008) + half3(0.55, 0.16, 0.03) * pre * 0.35;
    return half4(coal * (0.4 + 0.6 * pre), 1.0);
  }

  float k = clamp(d / 0.085, 0.0, 1.0);
  half3 emberCore = half3(1.0, 0.42, 0.18);
  half3 emberHalo = half3(1.0, 0.79, 0.49);
  half3 ember = mix(emberHalo, emberCore, k);
  float glow = (1.0 - k) * (1.0 - k);

  half3 col = img.rgb * (0.72 + 0.28 * k) + ember * glow * 0.9;
  return half4(col, 1.0);
}
`;

const emberRevealEffect = compileShader('Ember reveal', EMBER_REVEAL_SKSL);

const LOAD_TIMEOUT_MS = 8_000;

export function EmberReveal({ imageUrl, width, height, active, onRevealComplete }: EmberRevealProps) {
  const skImage = useImage(active ? imageUrl : null);
  const progress = useSharedValue(0);
  const reduceMotion = useReducedMotion();
  const startedRef = useRef(false);
  const [loadTimedOut, setLoadTimedOut] = useState(false);

  // If Skia's fetch stalls (flaky network), degrade to a plain image
  // rather than a black wall. The reveal is skipped, not marked done,
  // so it plays on the next successful open.
  useEffect(() => {
    if (!active || skImage) return;
    const timer = setTimeout(() => setLoadTimedOut(true), LOAD_TIMEOUT_MS);
    return () => clearTimeout(timer);
  }, [active, skImage]);

  const handleComplete = () => {
    void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    onRevealComplete?.();
  };

  useEffect(() => {
    if (!active || !skImage || startedRef.current) return;
    startedRef.current = true;
    if (reduceMotion) {
      progress.value = withTiming(1, { duration: durations.slow, easing: easings.linear }, (finished) => {
        if (finished) runOnJS(handleComplete)();
      });
      return;
    }
    void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
    progress.value = withTiming(
      1,
      { duration: durations.ceremonial, easing: easings.inOut },
      (finished) => {
        if (finished) runOnJS(handleComplete)();
      },
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, skImage, reduceMotion]);

  const uniforms = useDerivedValue(() => ({
    progress: progress.value,
    resolution: [width, height],
  }));

  if (!active || (loadTimedOut && !skImage)) {
    return (
      <Image
        source={{ uri: imageUrl }}
        style={{ width, height }}
        contentFit="cover"
        transition={durations.standard}
      />
    );
  }

  if (!skImage) {
    return <View style={[styles.pending, { width, height }]} />;
  }

  return (
    <Canvas style={{ width, height }}>
      <Fill>
        <Shader source={emberRevealEffect} uniforms={uniforms}>
          <ImageShader image={skImage} fit="cover" rect={{ x: 0, y: 0, width, height }} />
        </Shader>
      </Fill>
    </Canvas>
  );
}

const styles = StyleSheet.create({
  pending: {
    backgroundColor: colors.bgViewer,
  },
});
