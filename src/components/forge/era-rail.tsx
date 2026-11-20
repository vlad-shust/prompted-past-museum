import * as Haptics from 'expo-haptics';
import { ScrollView, StyleSheet } from 'react-native';

import { AppText } from '@/components/ui/app-text';
import { PressableScale } from '@/components/ui/pressable-scale';
import { ERAS, formatEraSpan } from '@/content/eras';
import { colors, fonts, radius, SCREEN_PADDING, spacing, withAlpha } from '@/theme';
import type { EraRailProps } from './era-rail.types';

/**
 * The wings of the museum as a browsable shelf — small gallery cards, name
 * over years. Swiping the rail while the frame above answers with each
 * era's atmosphere is the play that makes choosing feel like wandering.
 */
export function EraRail({ value, onChange }: EraRailProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={styles.row}
    >
      {ERAS.map((era) => {
        const active = era.id === value;
        return (
          <PressableScale
            key={era.id}
            haptic={false}
            onPress={() => {
              if (!active) {
                void Haptics.selectionAsync();
                onChange(era.id);
              }
            }}
            accessibilityRole="button"
            accessibilityState={{ selected: active }}
            accessibilityLabel={`${era.name}, ${formatEraSpan(era)}`}
            style={[styles.card, active && styles.cardActive]}
          >
            <AppText
              variant="bodySm"
              color={active ? colors.emberGold : colors.textPrimary}
              style={styles.name}
              numberOfLines={1}
            >
              {era.shortName}
            </AppText>
            <AppText variant="micro" color={colors.textTertiary} numberOfLines={1}>
              {formatEraSpan(era)}
            </AppText>
          </PressableScale>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: spacing.xs,
    paddingHorizontal: SCREEN_PADDING,
  },
  card: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    gap: 3,
    borderRadius: radius.md,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.strokeHairline,
    backgroundColor: colors.bgElevated,
  },
  cardActive: {
    borderColor: withAlpha(colors.emberGold, 0.7),
    backgroundColor: withAlpha(colors.emberDeep, 0.24),
    shadowColor: colors.emberCore,
    shadowOpacity: 0.3,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  name: {
    fontFamily: fonts.serifMedium,
    lineHeight: 20,
  },
});
