import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/ui/app-text';
import { PressableScale } from '@/components/ui/pressable-scale';
import { colors, withAlpha } from '@/theme';
import type { EmptyFrameProps, FrameProps } from './house-wall.types';

/** Gold hairline, black mat, inner hairline: what the frame takes from each side of the canvas. */
export const FILLET = 6;

/**
 * The wall's gilded frame, the same one the web hangs: a hair of gold, a dark
 * mat, a fainter line at the canvas edge, and a warm halo on the wall behind.
 */
export function Frame({ width, height, onPress, accessibilityLabel, children }: FrameProps) {
  return (
    <View style={styles.halo}>
      <PressableScale
        onPress={onPress}
        accessibilityRole="button"
        accessibilityLabel={accessibilityLabel}
        style={[styles.frame, { width, height }]}
      >
        <View style={styles.canvas}>{children}</View>
      </PressableScale>
    </View>
  );
}

/** The frame the museum keeps empty for the visitor's own painting. */
export function EmptyFrame({ width, height, onPress, accessibilityLabel }: EmptyFrameProps) {
  return (
    <Frame width={width} height={height} onPress={onPress} accessibilityLabel={accessibilityLabel}>
      <View style={styles.mat}>
        <AppText variant="epigraph" color={withAlpha(colors.emberGold, 0.7)}>
          your painting
        </AppText>
      </View>
    </Frame>
  );
}

const styles = StyleSheet.create({
  halo: {
    shadowColor: colors.glowHalo,
    shadowOpacity: 0.16,
    shadowRadius: 40,
    shadowOffset: { width: 0, height: 0 },
  },
  frame: {
    borderWidth: 1,
    borderColor: withAlpha(colors.emberGold, 0.42),
    padding: 4,
    backgroundColor: colors.bgViewer,
    shadowColor: colors.bgViewer,
    shadowOpacity: 0.9,
    shadowRadius: 30,
    shadowOffset: { width: 0, height: 24 },
    elevation: 10,
  },
  canvas: {
    flex: 1,
    borderWidth: 1,
    borderColor: withAlpha(colors.emberGold, 0.22),
    overflow: 'hidden',
    backgroundColor: colors.bgElevated,
  },
  mat: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bgElevated,
  },
});
