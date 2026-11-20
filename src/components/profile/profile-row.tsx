import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/ui/app-text';
import { PressableScale } from '@/components/ui/pressable-scale';
import { colors, radius, spacing, withAlpha } from '@/theme';
import type { ProfileRowProps } from './profile-row.types';

export function ProfileRow({ label, note, tint, onPress }: ProfileRowProps) {
  return (
    <PressableScale
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={[styles.row, { borderColor: withAlpha(tint, 0.16) }]}
    >
      <View style={styles.text}>
        <AppText variant="cardTitle" color={colors.textPrimary}>
          {label}
        </AppText>
        {note ? (
          <AppText variant="caption" color={colors.textTertiary}>
            {note}
          </AppText>
        ) : null}
      </View>
      <AppText variant="button" color={withAlpha(tint, 0.8)}>
        ›
      </AppText>
    </PressableScale>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.lg,
    borderRadius: radius.md,
    backgroundColor: colors.bgElevated,
    borderWidth: StyleSheet.hairlineWidth,
  },
  text: {
    flex: 1,
    gap: 2,
  },
});
