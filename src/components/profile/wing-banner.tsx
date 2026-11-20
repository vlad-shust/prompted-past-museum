import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/ui/app-text';
import { PressableScale } from '@/components/ui/pressable-scale';
import { Scrim } from '@/components/ui/scrim';
import { formatEraSpan } from '@/content/eras';
import { colors, EMBER_PALETTE, radius, spacing, withAlpha } from '@/theme';
import { wingBannerState } from './wing-banner-model';
import type { WingBannerEmptyProps, WingBannerProps } from './wing-banner.types';

const BANNER_HEIGHT = 210;

/** The wing being walked, lit by its own painting and its own colour. */
export function WingBanner({ track, walk, palette, onContinue, onChangeWing }: WingBannerProps) {
  const { walked, label, fraction, standingIn } = wingBannerState(track, walk);

  return (
    <View style={[styles.banner, { borderColor: withAlpha(palette.halo, 0.28) }]}>
      {standingIn ? (
        <Image
          source={{ uri: standingIn.thumbUrl }}
          style={StyleSheet.absoluteFill}
          contentFit="cover"
          transition={250}
        />
      ) : null}
      <LinearGradient
        pointerEvents="none"
        colors={[withAlpha(palette.wash, 0.5), withAlpha(colors.bgViewer, 0.15)]}
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      <Scrim direction="up" strength={0.96} style={styles.scrim} />

      <View style={styles.body}>
        <AppText variant="micro" color={withAlpha(palette.halo, 0.9)}>
          {label}
        </AppText>
        <AppText variant="titleSm" color={colors.textPrimary} numberOfLines={2}>
          {track.era.name}
        </AppText>
        <AppText variant="caption" color={withAlpha(colors.textPrimary, 0.72)}>
          {formatEraSpan(track.era)} · {track.dayCount} {track.dayCount === 1 ? 'work' : 'works'}
        </AppText>

        <View style={[styles.rail, { backgroundColor: withAlpha(colors.textPrimary, 0.12) }]}>
          <View
            style={[styles.railFill, { width: `${fraction * 100}%`, backgroundColor: palette.accent }]}
          />
        </View>

        <View style={styles.actions}>
          <PressableScale
            onPress={onContinue}
            accessibilityRole="button"
            accessibilityLabel={walked ? `Return to ${track.era.name}` : `Continue ${track.era.name}`}
            style={[
              styles.chip,
              { backgroundColor: withAlpha(palette.wash, 0.6), borderColor: withAlpha(palette.halo, 0.45) },
            ]}
          >
            <AppText variant="buttonSm" color={palette.halo}>
              {walked ? 'Return to the era' : 'Continue the walk'}
            </AppText>
          </PressableScale>
          <PressableScale
            onPress={onChangeWing}
            accessibilityRole="button"
            accessibilityLabel="Change era"
            style={[styles.chip, styles.chipGhost]}
          >
            <AppText variant="buttonSm" color={withAlpha(colors.textPrimary, 0.8)}>
              Change era
            </AppText>
          </PressableScale>
        </View>
      </View>
    </View>
  );
}

/** Before a wing is chosen there is no colour to borrow, so the house ember stands in. */
export function WingBannerEmpty({ onChooseWing }: WingBannerEmptyProps) {
  return (
    <View
      style={[
        styles.banner,
        styles.bannerEmpty,
        { borderColor: withAlpha(EMBER_PALETTE.halo, 0.22) },
      ]}
    >
      <View style={styles.body}>
        <AppText variant="micro" color={withAlpha(EMBER_PALETTE.halo, 0.9)}>
          NO ERA YET
        </AppText>
        <AppText variant="titleSm" color={colors.textPrimary}>
          Nothing chosen
        </AppText>
        <AppText variant="caption" color={colors.textSecondary}>
          Pick an era and the museum takes its colour from it.
        </AppText>
        <View style={styles.actions}>
          <PressableScale
            onPress={onChooseWing}
            accessibilityRole="button"
            accessibilityLabel="Choose an era"
            style={[
              styles.chip,
              {
                backgroundColor: withAlpha(EMBER_PALETTE.wash, 0.35),
                borderColor: withAlpha(EMBER_PALETTE.halo, 0.45),
              },
            ]}
          >
            <AppText variant="buttonSm" color={EMBER_PALETTE.halo}>
              See the eras
            </AppText>
          </PressableScale>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  banner: {
    height: BANNER_HEIGHT,
    borderRadius: radius.lg,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    backgroundColor: colors.bgElevated,
    borderWidth: StyleSheet.hairlineWidth,
  },
  bannerEmpty: {
    height: 'auto',
  },
  scrim: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '72%',
  },
  body: {
    padding: spacing.lg,
    gap: spacing.xxs,
  },
  rail: {
    height: 3,
    borderRadius: radius.pill,
    overflow: 'hidden',
    marginTop: spacing.sm,
  },
  railFill: {
    height: 3,
    borderRadius: radius.pill,
  },
  actions: {
    flexDirection: 'row',
    gap: spacing.xs,
    marginTop: spacing.sm,
  },
  chip: {
    height: 36,
    paddingHorizontal: spacing.md,
    borderRadius: radius.pill,
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipGhost: {
    backgroundColor: withAlpha(colors.bgViewer, 0.45),
    borderColor: withAlpha(colors.textPrimary, 0.22),
  },
});
