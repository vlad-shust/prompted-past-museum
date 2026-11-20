import * as Haptics from 'expo-haptics';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  FadeIn,
  FadeOut,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import { colors, durations, radius, spacing, withAlpha } from '@/theme';
import { AppText } from '@/components/ui/app-text';
import type { TimelineBand } from './timeline-model.types';
import type { TimelineScrubberProps } from './timeline-scrubber.types';

const THUMB_HEIGHT = 44;
const THUMB_HIT_SLOP = { left: 12, right: 12, top: 8, bottom: 8 } as const;

/**
 * Photos-style edge scrubber, done properly this time: the grip is a real
 * thumb that rides the rail as the list scrolls, drags with no delay, and
 * maps straight to scroll offset — no index snapping. Tapping the rail
 * jumps. A floating period lens names the century under the thumb, with
 * one haptic tick per century — never per pixel.
 *
 * The pan lives on the thumb only, so flicking the list near the screen
 * edge still scrolls the list.
 */
export function TimelineScrubber({
  bandAtIndex,
  progress,
  scrubbing,
  onScrubToRatio,
}: TimelineScrubberProps) {
  const [lens, setLens] = useState<TimelineBand | null>(null);
  const railHeight = useSharedValue(1);
  const startProgress = useSharedValue(0);

  const scrubStateRef = useRef({ bandAtIndex, onScrubToRatio, lensKey: lens?.key ?? null });
  useEffect(() => {
    scrubStateRef.current = { bandAtIndex, onScrubToRatio, lensKey: lens?.key ?? null };
  }, [bandAtIndex, onScrubToRatio, lens]);

  const applyRatio = useCallback((ratio: number, showLens: boolean) => {
    const { bandAtIndex: bands, onScrubToRatio: scrubTo, lensKey } = scrubStateRef.current;
    if (bands.length === 0) return;
    scrubTo(ratio);
    const band = bands[Math.min(bands.length - 1, Math.floor(ratio * bands.length))];
    if (showLens && band.key !== lensKey) {
      void Haptics.selectionAsync();
      setLens(band);
    }
  }, []);

  const endScrub = useCallback(() => setLens(null), []);

  // react-hooks/refs false positive below: these callbacks are RNGH worklets
  // that run on the UI thread at gesture time, never during render.
  const thumbPan = useMemo(
    () =>
      Gesture.Pan()
        .minDistance(0)
        .hitSlop(THUMB_HIT_SLOP)
        .onBegin(() => {
          'worklet';
          scrubbing.set(true);
          startProgress.set(progress.get());
        })
        // eslint-disable-next-line react-hooks/refs
        .onUpdate((event) => {
          'worklet';
          const travel = Math.max(1, railHeight.get() - THUMB_HEIGHT);
          const ratio = Math.min(1, Math.max(0, startProgress.get() + event.translationY / travel));
          progress.set(ratio);
          runOnJS(applyRatio)(ratio, true);
        })
        .onFinalize(() => {
          'worklet';
          scrubbing.set(false);
          runOnJS(endScrub)();
        }),
    [applyRatio, endScrub, progress, railHeight, scrubbing, startProgress],
  );

  const railTap = useMemo(
    () =>
      Gesture.Tap()
        .maxDuration(250)
        // eslint-disable-next-line react-hooks/refs
        .onEnd((event) => {
          'worklet';
          const travel = Math.max(1, railHeight.get() - THUMB_HEIGHT);
          const ratio = Math.min(1, Math.max(0, (event.y - THUMB_HEIGHT / 2) / travel));
          progress.set(ratio);
          runOnJS(applyRatio)(ratio, false);
        }),
    [applyRatio, progress, railHeight],
  );

  const thumbStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: progress.get() * Math.max(0, railHeight.get() - THUMB_HEIGHT) },
    ],
  }));

  return (
    <>
      {lens ? (
        <Animated.View
          entering={FadeIn.duration(durations.micro)}
          exiting={FadeOut.duration(durations.standard)}
          pointerEvents="none"
          style={styles.lens}
        >
          <AppText variant="epigraph" color={colors.emberGold}>
            {lens.label}
          </AppText>
          <AppText variant="micro" color={colors.textSecondary}>
            {lens.eras.map((era) => era.shortName).join(' · ')}
          </AppText>
        </Animated.View>
      ) : null}

      <GestureDetector gesture={railTap}>
        <View
          style={styles.rail}
          onLayout={(event) => railHeight.set(Math.max(1, event.nativeEvent.layout.height))}
          accessibilityRole="adjustable"
          accessibilityLabel="Timeline scrubber. Drag the grip to sweep through history"
        >
          <View style={styles.railLine} />
          <GestureDetector gesture={thumbPan}>
            <Animated.View style={[styles.thumb, thumbStyle]}>
              <View style={[styles.gripBar, lens ? styles.gripBarActive : null]} />
              <View style={[styles.gripBar, lens ? styles.gripBarActive : null]} />
              <View style={[styles.gripBar, lens ? styles.gripBarActive : null]} />
            </Animated.View>
          </GestureDetector>
        </View>
      </GestureDetector>
    </>
  );
}

const styles = StyleSheet.create({
  rail: {
    position: 'absolute',
    right: 0,
    top: 90,
    bottom: 140,
    width: 34,
    alignItems: 'center',
  },
  railLine: {
    flex: 1,
    width: 3,
    borderRadius: 1.5,
    marginVertical: spacing.lg,
    backgroundColor: withAlpha(colors.glowHalo, 0.22),
  },
  thumb: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: THUMB_HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  gripBar: {
    width: 14,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: withAlpha(colors.glowHalo, 0.55),
  },
  gripBarActive: {
    backgroundColor: withAlpha(colors.emberGold, 0.9),
  },
  lens: {
    position: 'absolute',
    right: 44,
    top: '38%',
    alignItems: 'flex-end',
    backgroundColor: withAlpha(colors.bgRaised, 0.94),
    borderRadius: radius.md,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: withAlpha(colors.glowHalo, 0.2),
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    gap: 2,
    zIndex: 20,
    maxWidth: 260,
  },
});
