import { StyleSheet, View } from 'react-native';

import { colors, spacing } from '@/theme';
import { AppText } from '@/components/ui/app-text';
import { Hairline } from '@/components/ui/hairline';
import type { BandHeaderProps } from './band-header.types';

/** A century of the river: its name, and every civilization present in it. */
export function BandHeader({ band, seasonEraId }: BandHeaderProps) {
  return (
    <View style={styles.wrap}>
      <View style={styles.textRow}>
        <AppText variant="titleSm" color={colors.textPrimary}>
          {band.label}
        </AppText>
        <AppText variant="micro" color={colors.textTertiary} style={styles.civs} numberOfLines={1}>
          {band.eras.map((era, index) => (
            <AppText
              key={era.id}
              variant="micro"
              color={era.id === seasonEraId ? colors.emberGold : colors.textTertiary}
            >
              {index > 0 ? '  ·  ' : ''}
              {era.shortName}
            </AppText>
          ))}
        </AppText>
      </View>
      <Hairline style={styles.line} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    paddingTop: spacing.xxl,
    paddingBottom: spacing.md,
    paddingHorizontal: spacing.xl,
    gap: spacing.sm,
  },
  textRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    gap: spacing.sm,
  },
  civs: {
    flexShrink: 1,
    textAlign: 'right',
  },
  line: {
    opacity: 0.7,
  },
});
