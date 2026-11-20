import { Canvas, Fill, Shader, Skia, useClock } from '@shopify/react-native-skia';
import type { SkRuntimeEffect } from '@shopify/react-native-skia';
import { StyleSheet, useWindowDimensions } from 'react-native';
import { useDerivedValue } from 'react-native-reanimated';

import type { EmberFieldProps } from './ember-field.types';

/**
 * A field of rising embers, computed entirely in one fragment shader:
 * no per-particle JS, no per-frame allocations. The waiting room of the
 * forge, and the soft celebration behind membership welcome.
 */
const EMBER_FIELD_SKSL = `
uniform float time;
uniform float2 resolution;
uniform float intensity;
uniform float overlay;

float hash(float p) {
  return fract(sin(p * 127.1) * 43758.5453123);
}

half4 main(float2 xy) {
  float2 uv = xy / resolution;
  float aspect = resolution.x / resolution.y;
  half3 col = half3(0.010, 0.006, 0.004) * (1.0 - overlay);

  // Soft hearth under the copy so a settled mid-frame never reads as empty black.
  float2 hearth = float2(0.5, 0.68);
  float2 hd = float2((uv.x - hearth.x) * aspect * 0.85, (uv.y - hearth.y) * 1.15);
  float hearthGlow = exp(-dot(hd, hd) * 5.8) * 0.11 * intensity;
  col += half3(0.58, 0.24, 0.08) * hearthGlow * (1.0 - overlay);

  for (int i = 0; i < 48; i++) {
    float fi = float(i);
    float seedX = hash(fi * 3.7);
    float speed = 0.016 + hash(fi * 7.3) * 0.038;
    float phase = hash(fi * 13.1);
    float rise = fract(time * speed + phase);
    float y = 1.0 - rise;
    float swayAmp = 0.018 + hash(fi * 11.3) * 0.038;
    float sway = sin(time * (0.16 + hash(fi * 5.1) * 0.26) + fi * 1.7) * swayAmp;
    float x = seedX * 0.9 + 0.05 + sway;

    float2 d2 = float2((uv.x - x) * aspect, uv.y - y);
    float d = length(d2);

    float size = 0.002 + hash(fi * 17.9) * 0.0048;
    float coal = step(0.8, hash(fi * 41.1));
    size *= mix(1.0, 1.9, coal);

    float glow = size / max(d, 0.0008);
    glow = pow(min(glow, 1.9), 2.1);

    float flicker = 0.8 + 0.2 * sin(time * (1.6 + hash(fi * 23.3) * 2.8) + fi * 2.1);
    float fadeIn = smoothstep(1.0, 0.86, y);
    float fadeOut = smoothstep(0.015, 0.26, y);

    half3 tone = mix(half3(1.0, 0.4, 0.12), half3(1.0, 0.78, 0.44), hash(fi * 31.7));
    float weight = mix(0.38, 0.22, coal);
    col += tone * glow * flicker * fadeIn * fadeOut * weight * intensity;
  }

  // Overlay mode keeps only the sparks, premultiplied, so a room shows through.
  float alpha = mix(1.0, clamp(max(col.r, max(col.g, col.b)), 0.0, 1.0), overlay);
  return half4(min(col, half3(alpha)), alpha);
}
`;

function compileShader(sksl: string): SkRuntimeEffect {
  const effect = Skia.RuntimeEffect.Make(sksl);
  if (!effect) throw new Error('Ember field shader failed to compile');
  return effect;
}

const emberFieldEffect = compileShader(EMBER_FIELD_SKSL);

export function EmberField({ intensity = 1, overlay = false }: EmberFieldProps) {
  const { width, height } = useWindowDimensions();
  const clock = useClock();

  const uniforms = useDerivedValue(() => ({
    time: clock.value / 1000,
    resolution: [width, height],
    intensity,
    overlay: overlay ? 1 : 0,
  }));

  return (
    <Canvas pointerEvents="none" style={StyleSheet.absoluteFill}>
      <Fill>
        <Shader source={emberFieldEffect} uniforms={uniforms} />
      </Fill>
    </Canvas>
  );
}
