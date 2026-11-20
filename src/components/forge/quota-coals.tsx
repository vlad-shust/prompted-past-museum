import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/ui/app-text';
import { EmberDot } from '@/components/ui/ember-dot';
import { colors, spacing } from '@/theme';
import type { QuotaCoalsProps } from './quota-coals.types';

/**
 * The day's quota as a small bed of coals — a gauge, not a tally. The
 * caption carries the count; the coals show fullness at a glance.
 */
export function QuotaCoals({ quota }: QuotaCoalsProps) {
  if (!quota) {
    return (
      <View style={styles.row} accessible accessibilityLabel="Reading the coals">
        <EmberDot size={6} intensity={0.4} />
      </View>
    );
  }

  const remaining = Math.max(0, quota.dailyLimit - quota.usedToday);
  const caption = remaining > 0 ? `${remaining} left today` : 'Spent for today';
  const coalCount = Math.min(quota.dailyLimit, 3);
  const lit =
    remaining === 0
      ? 0
      : Math.max(1, Math.round((remaining / quota.dailyLimit) * coalCount));

  return (
    <View style={styles.row} accessible accessibilityLabel={caption}>
      <View style={styles.coals} importantForAccessibility="no-hide-descendants">
        {Array.from({ length: coalCount }, (_, index) => (
          <EmberDot
            key={index}
            size={6}
            intensity={index < lit ? 1 : 0.14}
            breathe={index < lit}
          />
        ))}
      </View>
      <AppText variant="caption" color={colors.textSecondary}>
        {caption}
      </AppText>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  coals: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
});
