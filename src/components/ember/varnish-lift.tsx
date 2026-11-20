import { Canvas, Fill, ImageShader, Shader } from '@shopify/react-native-skia';
import type { SkImage } from '@shopify/react-native-skia';
import { useEffect, useRef } from 'react';
import { runOnJS, useDerivedValue, useSharedValue, withDelay, withTiming } from 'react-native-reanimated';

import { easings } from '@/theme';
import { compileShader, NOISE_SKSL } from './sksl';
import type { VarnishLiftProps, WakePoint } from './varnish-lift.types';

/**
 * The wake, staged as a conservation pass. Old varnish gathers on the surface,
 * then a damp cloth crosses the canvas from the point the curator wants looked
 * at; behind its edge the painting is clean, true in colour, and moving. The
 * shader only ever removes: every pixel on screen is still the painter's.
 *
 * This layer draws the still alone. The clip belongs to the caller, underneath.
 */
const VARNISH_LIFT_SKSL = `
uniform shader image;
uniform float2 resolution;
uniform float2 origin;
uniform float span;
uniform float progress;
uniform float varnish;
${NOISE_SKSL}
half4 main(float2 xy) {
  half4 img = image.eval(xy);

  // The front is a circle roughed up by noise, so it reads as a cloth pass
  // rather than a wipe.
  float band = span * 0.17;
  float wander = (fbm(xy / resolution * 3.2) - 0.5) * band * 1.6;
  // The front starts at the focus itself and its trailing band follows, so
  // every millisecond of the pass moves visible paint.
  float front = progress * (span + band);
  float clean = smoothstep(0.0, band, front - (distance(xy, origin) + wander));

  // img.a carries the decal edge: under contain the letterbox stays empty
  // instead of turning into a black bar over the clip.
  float a = (1.0 - clean) * img.a;
  if (a <= 0.0) return half4(0.0);

  // Aged varnish is warm, and it lifts the blacks by scattering the light
  // that reaches the paint.
  half3 col = mix(img.rgb, img.rgb * half3(1.0, 0.96, 0.86) + half3(0.024, 0.019, 0.011), varnish);

  // Under the cloth the surface is damp: a shade deeper, with a thin warm
  // gleam riding the edge.
  float wet = clean * (1.0 - clean) * 4.0;
  col = col * (1.0 - 0.10 * wet) + half3(0.20, 0.17, 0.13) * wet * wet;

  return half4(col * a, a);
}
`;

const varnishLiftEffect = compileShader('Varnish lift', VARNISH_LIFT_SKSL);

/** The room dims: varnish gathers before anything is touched. */
const DIM_MS = 600;
/** The cloth crosses the canvas. The one deliberately slow beat. */
const SWEEP_FIRST_MS = 2_200;
/** A re-open has nothing to announce, so the same pass runs shorter. */
const SWEEP_AGAIN_MS = 1_400;

/** Where a point on the painting lands inside the fitted frame, in pixels. */
function frameFocus(
  image: SkImage,
  width: number,
  height: number,
  fit: 'cover' | 'contain',
  focus: WakePoint | undefined,
) {
  const imageWidth = image.width();
  const imageHeight = image.height();
  const scale =
    fit === 'cover'
      ? Math.max(width / imageWidth, height / imageHeight)
      : Math.min(width / imageWidth, height / imageHeight);
  const shownWidth = imageWidth * scale;
  const shownHeight = imageHeight * scale;
  return {
    x: (width - shownWidth) / 2 + (focus?.x ?? 0.5) * shownWidth,
    y: (height - shownHeight) / 2 + (focus?.y ?? 0.5) * shownHeight,
  };
}

/** How far the cloth must travel to clear the furthest corner. */
function cornerSpan(originX: number, originY: number, width: number, height: number) {
  return Math.max(
    Math.hypot(originX, originY),
    Math.hypot(width - originX, originY),
    Math.hypot(originX, height - originY),
    Math.hypot(width - originX, height - originY),
  );
}

export function VarnishLift({
  image,
  width,
  height,
  fit,
  focus,
  ceremony,
  active,
  onSweepStart,
  onLiftComplete,
}: VarnishLiftProps) {
  const progress = useSharedValue(0);
  const varnish = useSharedValue(0);
  const startedRef = useRef(false);

  const origin = frameFocus(image, width, height, fit, focus);
  const span = cornerSpan(origin.x, origin.y, width, height);

  useEffect(() => {
    if (!active || startedRef.current) return;
    startedRef.current = true;

    const dimMs = ceremony ? DIM_MS : 0;
    const sweepMs = ceremony ? SWEEP_FIRST_MS : SWEEP_AGAIN_MS;
    const complete = () => onLiftComplete?.();

    varnish.value = withTiming(1, { duration: Math.max(dimMs, 1), easing: easings.inOut });
    progress.value = withDelay(
      dimMs,
      // A cloth crosses a canvas at one speed. Anything eased pools the whole
      // travel into the middle third and reads as a wipe.
      withTiming(1, { duration: sweepMs, easing: easings.linear }, (finished) => {
        if (finished) runOnJS(complete)();
      }),
    );

    const sweepTimer = setTimeout(() => onSweepStart?.(), dimMs);
    return () => clearTimeout(sweepTimer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active, ceremony]);

  const uniforms = useDerivedValue(() => ({
    resolution: [width, height],
    origin: [origin.x, origin.y],
    span,
    progress: progress.value,
    varnish: varnish.value,
  }));

  return (
    <Canvas style={{ width, height }} pointerEvents="none">
      <Fill>
        <Shader source={varnishLiftEffect} uniforms={uniforms}>
          <ImageShader image={image} fit={fit} rect={{ x: 0, y: 0, width, height }} />
        </Shader>
      </Fill>
    </Canvas>
  );
}
