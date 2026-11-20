import { Image } from 'expo-image';
import { ScrollView, StyleSheet, View } from 'react-native';
import type { ViewStyle } from 'react-native';

import { AppText } from '@/components/ui/app-text';
import { colors, radius, spacing, withAlpha } from '@/theme';
import type { EraHallProps, HallStop } from './era-hall.types';
import { hallOpeningIndex, hallStops } from './wing-progress';

const FRAME_WIDTH = 108;
const FRAME_HEIGHT = 140;
const FRAME_GAP = spacing.sm;
const HALL_INSET = spacing.xl;

/**
 * The hall behind the door: every work in the era hangs in walking order,
 * each with its plaque number. Walked rooms glow ember, the next one is lit
 * gold, the rest wait in ordinary light.
 */
export function EraHall({ scenes, walk }: EraHallProps) {
  const step = FRAME_WIDTH + FRAME_GAP;
  const stops = hallStops(scenes, walk);
  // Open one before the lit work so it sits in view beside its neighbour.
  const firstShown = hallOpeningIndex(stops);
  const startX = Math.max(0, firstShown * step - HALL_INSET);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      snapToInterval={step}
      snapToAlignment="start"
      contentOffset={{ x: startX, y: 0 }}
      contentContainerStyle={styles.hall}
    >
      {scenes.map((scene, index) => {
        const stop = stops[index]!;
        return (
          <View
            key={scene.id}
            style={styles.work}
            accessible
            accessibilityLabel={`Work ${index + 1}, ${scene.title}, ${scene.historicalDateLabel}, ${stopLabel[stop]}`}
          >
            <View style={[styles.frame, frameStyles[stop]]}>
              <Image
                source={{ uri: scene.thumbUrl }}
                style={styles.painting}
                contentFit="cover"
                transition={250}
              />
              <View style={[styles.plaque, plaqueStyles[stop]]}>
                <AppText variant="microCaps" color={plaqueInk[stop]}>
                  {index + 1}
                </AppText>
              </View>
            </View>
            <AppText
              variant="micro"
              color={stop === 'ahead' ? colors.textTertiary : colors.emberGold}
              numberOfLines={1}
            >
              {scene.historicalDateLabel}
            </AppText>
            <AppText
              variant="bodySm"
              color={stop === 'walked' ? colors.textSecondary : colors.textPrimary}
              numberOfLines={2}
            >
              {scene.title}
            </AppText>
          </View>
        );
      })}
    </ScrollView>
  );
}

const stopLabel: Record<HallStop, string> = {
  walked: 'walked',
  next: 'next',
  ahead: 'not yet walked',
};

const plaqueInk: Record<HallStop, string> = {
  walked: colors.textPrimary,
  next: colors.emberGold,
  ahead: withAlpha(colors.textPrimary, 0.88),
};

const styles = StyleSheet.create({
  hall: {
    paddingHorizontal: HALL_INSET,
    paddingVertical: spacing.xs,
    gap: FRAME_GAP,
  },
  work: {
    width: FRAME_WIDTH,
    gap: spacing.xxs,
  },
  frame: {
    width: FRAME_WIDTH,
    height: FRAME_HEIGHT,
    borderRadius: radius.sm,
    backgroundColor: colors.bgRaised,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: withAlpha(colors.glowHalo, 0.18),
  },
  painting: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: radius.sm - 1,
  },
  plaque: {
    position: 'absolute',
    top: spacing.xs,
    left: spacing.xs,
    minWidth: 22,
    height: 22,
    paddingHorizontal: spacing.xxs,
    borderRadius: radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: StyleSheet.hairlineWidth,
  },
});

const frameStyles = StyleSheet.create<Record<HallStop, ViewStyle>>({
  walked: {
    borderColor: withAlpha(colors.emberBright, 0.45),
  },
  next: {
    borderWidth: 1,
    borderColor: withAlpha(colors.emberGold, 0.75),
    shadowColor: colors.glowHalo,
    shadowOpacity: 0.55,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 0 },
  },
  ahead: {},
});

const plaqueStyles = StyleSheet.create<Record<HallStop, ViewStyle>>({
  walked: {
    backgroundColor: withAlpha(colors.emberDeep, 0.92),
    borderColor: withAlpha(colors.emberBright, 0.6),
  },
  next: {
    backgroundColor: withAlpha(colors.bgViewer, 0.72),
    borderColor: withAlpha(colors.emberGold, 0.8),
  },
  ahead: {
    backgroundColor: withAlpha(colors.bgViewer, 0.72),
    borderColor: withAlpha(colors.glowHalo, 0.3),
  },
});
