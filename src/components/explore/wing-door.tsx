import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/ui/app-text';
import { EmberDot } from '@/components/ui/ember-dot';
import { PressableScale } from '@/components/ui/pressable-scale';
import { Scrim } from '@/components/ui/scrim';
import { colors, radius, spacing, withAlpha } from '@/theme';
import type { WingDoorProps } from './wing-door.types';
import { wingMeta } from './wing-progress';

// Re-exported: onboarding and the wing sheet import it from here.
export { wingMeta };

/**
 * A doorway into a wing of the museum: an arched frame with the wing's
 * opening painting visible through it. The arch is pure geometry, so the
 * doors stay light: one image, one scrim, two lines of label.
 */
export function WingDoor({ track, walk, active, width, onPress }: WingDoorProps) {
  const height = Math.round(width * 1.45);
  const arch = {
    width,
    height,
    borderTopLeftRadius: width / 2,
    borderTopRightRadius: width / 2,
  };
  const opening = track.scenes[0];

  return (
    <PressableScale
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`${track.era.name}, ${wingMeta(track.dayCount, walk.walked)}`}
      style={{ width }}
    >
      <View style={[styles.door, arch, active ? styles.doorActive : null]}>
        {opening ? (
          <Image
            source={{ uri: opening.thumbUrl }}
            style={StyleSheet.absoluteFill}
            contentFit="cover"
            transition={250}
          />
        ) : null}
        <Scrim direction="up" style={styles.scrim} />
        <View style={styles.label}>
          {active ? <EmberDot size={7} /> : null}
          <AppText
            variant="cardTitle"
            color={colors.textPrimary}
            numberOfLines={2}
            style={styles.name}
          >
            {track.era.name}
          </AppText>
          <AppText
            variant="micro"
            color={active ? withAlpha(colors.emberGold, 0.95) : withAlpha(colors.textPrimary, 0.66)}
            numberOfLines={1}
          >
            {wingMeta(track.dayCount, walk.walked).toUpperCase()}
          </AppText>
        </View>
      </View>
    </PressableScale>
  );
}

const styles = StyleSheet.create({
  door: {
    overflow: 'hidden',
    borderBottomLeftRadius: radius.md,
    borderBottomRightRadius: radius.md,
    backgroundColor: colors.bgElevated,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: withAlpha(colors.glowHalo, 0.18),
  },
  doorActive: {
    borderWidth: 1,
    borderColor: withAlpha(colors.emberGold, 0.65),
  },
  scrim: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '58%',
  },
  label: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    gap: spacing.xxs,
    paddingHorizontal: spacing.sm,
    paddingBottom: spacing.md,
  },
  name: {
    textAlign: 'center',
  },
});
