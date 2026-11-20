import { Image } from 'expo-image';
import { Modal, Pressable, ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppText } from '@/components/ui/app-text';
import { EmberButton } from '@/components/ui/ember-button';
import { PressableScale } from '@/components/ui/pressable-scale';
import { Scrim } from '@/components/ui/scrim';
import { formatEraSpan } from '@/content/eras';
import { colors, radius, spacing, withAlpha } from '@/theme';
import { EraHall } from './era-hall';
import { wingMeta } from './wing-door';
import type { WingSheetMode, WingSheetProps } from './wing-sheet.types';

function confirmLabel(mode: WingSheetMode, shortName: string): string {
  if (mode.kind === 'begin') return `Begin ${shortName}`;
  if (mode.kind === 'return') return 'Return to the era';
  return `Change to ${shortName}`;
}

/**
 * The label beside the door: what hangs in this wing and how far along the
 * visitor is, before they commit a day to it.
 */
export function WingSheet({ track, walk, mode, onConfirm, onClose }: WingSheetProps) {
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const opening = track?.scenes[0];

  return (
    <Modal
      visible={track !== null}
      transparent
      animationType="slide"
      statusBarTranslucent
      onRequestClose={onClose}
    >
      <Pressable style={styles.backdrop} onPress={onClose} accessibilityLabel="Close" />
      {track && walk ? (
        <View
          style={[
            styles.sheet,
            { maxHeight: height - insets.top - spacing.md, paddingBottom: insets.bottom + spacing.lg },
          ]}
        >
          <ScrollView style={styles.scroll} bounces={false} showsVerticalScrollIndicator={false}>
            <View style={[styles.cover, { height: Math.round(width * 0.42) }]}>
              {opening ? (
                <Image
                  source={{ uri: opening.thumbUrl }}
                  style={StyleSheet.absoluteFill}
                  contentFit="cover"
                  transition={250}
                />
              ) : null}
              <Scrim direction="up" style={styles.coverScrim} />
              <View style={styles.coverLabel}>
                <AppText variant="micro" color={colors.emberGold}>
                  {formatEraSpan(track.era).toUpperCase()} ·{' '}
                  {wingMeta(track.dayCount, walk.walked).toUpperCase()}
                </AppText>
                <AppText variant="title" color={colors.textPrimary}>
                  {track.era.name}
                </AppText>
                <AppText variant="epigraph" color={withAlpha(colors.textPrimary, 0.72)}>
                  {track.era.mood}
                </AppText>
              </View>
            </View>

            <AppText variant="bodySm" color={colors.textSecondary} style={styles.intro}>
              {track.era.intro}
            </AppText>
            <View style={styles.hallHeader}>
              <AppText variant="sectionHeader" color={colors.textTertiary}>
                IN THIS ERA
              </AppText>
              <AppText variant="micro" color={colors.textTertiary}>
                {track.dayCount} {track.dayCount === 1 ? 'WORK' : 'WORKS'} · ONE A DAY
              </AppText>
            </View>
            <EraHall scenes={track.scenes} walk={walk} />
          </ScrollView>
          <View style={styles.actions}>
            {mode.kind === 'change' ? (
              <AppText variant="caption" color={colors.textTertiary}>
                Your place in {mode.fromName} is kept. Return whenever you like.
              </AppText>
            ) : null}

            <EmberButton label={confirmLabel(mode, track.era.shortName)} onPress={onConfirm} />
            <PressableScale onPress={onClose} accessibilityRole="button" style={styles.dismiss}>
              <AppText variant="caption" color={colors.textTertiary}>
                Not now
              </AppText>
            </PressableScale>
          </View>
        </View>
      ) : null}
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: withAlpha(colors.bgViewer, 0.6),
  },
  sheet: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.bgElevated,
    borderTopLeftRadius: radius.xl,
    borderTopRightRadius: radius.xl,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: withAlpha(colors.glowHalo, 0.18),
    overflow: 'hidden',
  },
  cover: {
    backgroundColor: colors.bgRaised,
  },
  coverScrim: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '75%',
  },
  coverLabel: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.md,
    gap: spacing.xxs,
  },
  scroll: {
    flexShrink: 1,
  },
  intro: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.md,
  },
  hallHeader: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.md,
    paddingBottom: spacing.xs,
  },
  actions: {
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.md,
    gap: spacing.md,
  },
  dismiss: {
    alignSelf: 'center',
    padding: spacing.xs,
  },
});
