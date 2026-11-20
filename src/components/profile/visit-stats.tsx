import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/ui/app-text';
import { colors, radius, spacing, withAlpha } from '@/theme';
import type { VisitStatsProps } from './visit-stats.types';

export function VisitStats({ worksCollected, daysVisited, wingsWalked, palette }: VisitStatsProps) {
  const tiles = [
    { key: 'works', value: worksCollected, label: worksCollected === 1 ? 'work collected' : 'works collected' },
    { key: 'days', value: daysVisited, label: daysVisited === 1 ? 'day visited' : 'days visited' },
    { key: 'wings', value: wingsWalked, label: wingsWalked === 1 ? 'era walked' : 'eras walked' },
  ];

  return (
    <View style={styles.row}>
      {tiles.map((tile) => (
        <View key={tile.key} style={[styles.tile, { borderColor: withAlpha(palette.halo, 0.16) }]}>
          <AppText variant="titleSm" color={palette.accent} style={styles.value}>
            {String(tile.value)}
          </AppText>
          <AppText variant="micro" color={colors.textTertiary} numberOfLines={2} style={styles.label}>
            {tile.label.toUpperCase()}
          </AppText>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: spacing.xs,
  },
  tile: {
    flex: 1,
    gap: spacing.xxs,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.sm,
    borderRadius: radius.md,
    backgroundColor: colors.bgElevated,
    borderWidth: StyleSheet.hairlineWidth,
  },
  /** Cormorant defaults to oldstyle figures, which turn "10" into "IO". */
  value: {
    fontVariant: ['lining-nums'],
  },
  label: {
    lineHeight: 15,
  },
});
