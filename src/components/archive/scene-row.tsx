import { Image } from 'expo-image';
import { router } from 'expo-router';
import { StyleSheet, View } from 'react-native';

import { colors, radius, spacing, withAlpha } from '@/theme';
import { formatHistoricalYear } from '@/utils/dates';
import { AppText } from '@/components/ui/app-text';
import { EmberDot } from '@/components/ui/ember-dot';
import { PressableScale } from '@/components/ui/pressable-scale';
import type { SceneRowProps } from './scene-row.types';

const THUMB_SIZE = 64;
const AXIS_WIDTH = 44;
const YEAR_WIDTH = 58;

/**
 * A scene on the timeline. Unlocked: bright ember, clear thumb.
 * Locked: dim spark, blurred painting, one-line hook — the tease sells,
 * the padlock icon appears nowhere. When the river crosses into another
 * civilization mid-century, the row opens with a "Meanwhile" line.
 */
export function SceneRow({ scene, access, era, crossover }: SceneRowProps) {
  const locked = access === 'locked';

  const handlePress = () => {
    if (locked) {
      router.push('/paywall');
      return;
    }
    router.push({ pathname: '/scene/[id]', params: { id: scene.id } });
  };

  return (
    <View>
      {crossover ? (
        <AppText variant="epigraph" color={withAlpha(colors.emberGold, 0.85)} style={styles.meanwhile}>
          Meanwhile, in {era.name.replace(/^The /, 'the ')}
        </AppText>
      ) : null}
      <PressableScale
        onPress={handlePress}
        accessibilityRole="button"
        accessibilityLabel={
          locked
            ? `${scene.title}, ${era.name}, locked. Membership opens the full archive.`
            : `${scene.title}, ${era.name}`
        }
        style={styles.row}
      >
        <View style={styles.axis}>
          <View style={styles.axisLine} />
          <EmberDot size={locked ? 6 : 9} intensity={locked ? 0.25 : 1} />
          <View style={styles.axisLine} />
        </View>

        <AppText variant="micro" color={locked ? colors.textTertiary : colors.emberGold} style={styles.year}>
          {formatHistoricalYear(scene.historicalYear)}
        </AppText>

        <View style={[styles.card, locked && styles.cardLocked]}>
          <View style={styles.thumbWrap}>
            <Image
              source={{ uri: scene.thumbUrl }}
              style={styles.thumb}
              contentFit="cover"
              blurRadius={locked ? 14 : 0}
              transition={200}
            />
            {locked ? <View style={styles.thumbVeil} /> : null}
          </View>
          <View style={styles.cardText}>
            <AppText
              variant="cardTitle"
              color={locked ? colors.textSecondary : colors.textPrimary}
              numberOfLines={1}
            >
              {scene.title}
            </AppText>
            <AppText variant="caption" color={colors.textTertiary} numberOfLines={1}>
              {locked ? scene.dek : `${era.shortName} · ${scene.historicalDateLabel}`}
            </AppText>
          </View>
        </View>
      </PressableScale>
    </View>
  );
}

const styles = StyleSheet.create({
  meanwhile: {
    paddingLeft: AXIS_WIDTH + YEAR_WIDTH,
    paddingRight: spacing.xl,
    paddingTop: spacing.md,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: spacing.xl,
    height: 92,
  },
  axis: {
    width: AXIS_WIDTH,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  axisLine: {
    flex: 1,
    width: StyleSheet.hairlineWidth,
    backgroundColor: colors.strokeHairline,
  },
  year: {
    width: YEAR_WIDTH,
    textAlign: 'left',
    fontVariant: ['tabular-nums'],
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: colors.bgElevated,
    borderRadius: radius.md,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.strokeHairline,
    padding: spacing.xs,
    paddingRight: spacing.md,
  },
  cardLocked: {
    backgroundColor: withAlpha(colors.bgElevated, 0.55),
  },
  thumbWrap: {
    width: THUMB_SIZE,
    height: THUMB_SIZE,
    borderRadius: radius.sm,
    overflow: 'hidden',
  },
  thumb: {
    width: THUMB_SIZE,
    height: THUMB_SIZE,
  },
  thumbVeil: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: withAlpha(colors.bgViewer, 0.45),
  },
  cardText: {
    flex: 1,
    gap: 3,
  },
});
