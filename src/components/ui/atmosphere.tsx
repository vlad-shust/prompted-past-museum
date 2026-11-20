import { Canvas, ColorMatrix, FractalNoise, RadialGradient, Rect, vec } from '@shopify/react-native-skia';
import { StyleSheet, useWindowDimensions } from 'react-native';

/**
 * The Molten atmosphere: 4% monochrome film grain plus a warm vignette.
 * Static — renders once, no clock, no per-frame cost.
 */
const GRAYSCALE_LUMINANCE = [
  0.2126, 0.7152, 0.0722, 0, 0,
  0.2126, 0.7152, 0.0722, 0, 0,
  0.2126, 0.7152, 0.0722, 0, 0,
  0, 0, 0, 1, 0,
];

export function Atmosphere({ vignette = true }: { vignette?: boolean }) {
  const { width, height } = useWindowDimensions();
  const radiusMax = Math.max(width, height) * 0.72;

  return (
    <Canvas pointerEvents="none" style={[StyleSheet.absoluteFill, styles.canvas]}>
      <Rect x={0} y={0} width={width} height={height} opacity={0.04}>
        <FractalNoise freqX={0.9} freqY={0.9} octaves={4} />
        <ColorMatrix matrix={GRAYSCALE_LUMINANCE} />
      </Rect>
      {vignette ? (
        <Rect x={0} y={0} width={width} height={height}>
          <RadialGradient
            c={vec(width / 2, height * 0.42)}
            r={radiusMax}
            colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.30)']}
            positions={[0.55, 1]}
          />
        </Rect>
      ) : null}
    </Canvas>
  );
}

const styles = StyleSheet.create({
  canvas: {
    zIndex: 10,
  },
});
