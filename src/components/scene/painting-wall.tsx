import { Image } from 'expo-image';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import { AppText } from '@/components/ui/app-text';
import { colors, durations, spacing } from '@/theme';
import type { PaintingWallProps, WallFooter, WallStage } from './painting-wall.types';

/** Turning the phone has to buy at least this much more painting. */
const TURN_GAIN = 1.5;
const HINT_MS = 3_200;
const NO_FOOTER: WallFooter = { upright: 0, turned: 0 };

/** The painting's width over its height, read from the still itself. */
export function usePaintingAspect(imageUrl: string): number | null {
  const [read, setRead] = useState<{ url: string; aspect: number } | null>(null);

  useEffect(() => {
    let current = true;
    Image.loadAsync({ uri: imageUrl })
      .then((ref) => {
        if (current && ref.height > 0) setRead({ url: imageUrl, aspect: ref.width / ref.height });
        ref.release();
      })
      .catch(() => undefined);
    return () => {
      current = false;
    };
  }, [imageUrl]);

  return read?.url === imageUrl ? read.aspect : null;
}

/** Area of a painting contain-fitted into a frame. */
function hungArea(aspect: number, frameWidth: number, frameHeight: number): number {
  const width = Math.min(frameWidth, frameHeight * aspect);
  return width * (width / aspect);
}

/**
 * A wide canvas on a tall phone turns on its side, so the visitor turns the
 * phone and the painting fills it. Everything hung on the stage turns too.
 * The stage turns only when that buys real size, footer included.
 */
export function useWallStage(aspect: number | null, footer: WallFooter = NO_FOOTER): WallStage {
  const { width, height } = useWindowDimensions();
  const screen = useSafeAreaInsets();
  const uprightFrame = {
    width: width - screen.left - screen.right,
    height: height - screen.top - screen.bottom - footer.upright,
  };
  const turnedFrame = {
    width: height - screen.top - screen.bottom,
    height: width - screen.left - screen.right - footer.turned,
  };
  const turned =
    aspect !== null &&
    width < height &&
    hungArea(aspect, turnedFrame.width, turnedFrame.height) >=
      TURN_GAIN * hungArea(aspect, uprightFrame.width, uprightFrame.height);
  // Turned clockwise: the stage's top runs down the screen's right edge.
  const insets = turned
    ? { top: screen.right, right: screen.bottom, bottom: screen.left, left: screen.top }
    : screen;
  const frame = turned ? turnedFrame : uprightFrame;
  return {
    turned,
    width: turned ? height : width,
    height: turned ? width : height,
    insets,
    frame: { x: insets.left, y: insets.top, ...frame },
  };
}

export function PaintingWall({ stage, children }: PaintingWallProps) {
  const { width, height } = useWindowDimensions();
  const [hintShown, setHintShown] = useState(false);
  const hint = stage.turned && !hintShown;

  useEffect(() => {
    if (!hint) return;
    const timer = setTimeout(() => setHintShown(true), HINT_MS);
    return () => clearTimeout(timer);
  }, [hint]);

  return (
    <View style={styles.wall}>
      <StatusBar hidden />
      <View
        style={[
          styles.stage,
          {
            width: stage.width,
            height: stage.height,
            left: (width - stage.width) / 2,
            top: (height - stage.height) / 2,
          },
          stage.turned ? styles.turned : null,
        ]}
      >
        {children}
        {hint ? (
          <Animated.View
            pointerEvents="none"
            entering={FadeIn.duration(durations.slow).delay(durations.standard)}
            exiting={FadeOut.duration(durations.slow)}
            style={[styles.hint, { top: stage.insets.top + spacing.md }]}
          >
            <AppText variant="micro" color={colors.textTertiary}>
              TURN YOUR PHONE
            </AppText>
          </Animated.View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wall: {
    flex: 1,
    backgroundColor: colors.bgViewer,
  },
  stage: {
    position: 'absolute',
  },
  turned: {
    transform: [{ rotate: '90deg' }],
  },
  hint: {
    position: 'absolute',
    alignSelf: 'center',
  },
});
