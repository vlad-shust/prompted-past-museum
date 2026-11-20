import * as Haptics from 'expo-haptics';
import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/ui/app-text';
import { PressableScale } from '@/components/ui/pressable-scale';
import { colors, radius, SCREEN_PADDING, spacing, withAlpha } from '@/theme';
import type { TweakPickerProps } from './tweak-picker.types';

/**
 * One optional treatment group — chips wrap within the screen margins so
 * every option is in view and nothing bleeds off the edge. Every group can
 * stay unset; tapping the active chip clears it.
 */
export function TweakPicker<V extends string>({
  label,
  options,
  value,
  onChange,
}: TweakPickerProps<V>) {
  return (
    <View style={styles.wrap}>
      <AppText variant="micro" color={colors.textTertiary} style={styles.label}>
        {label.toUpperCase()}
      </AppText>
      <View style={styles.row}>
        {options.map((option) => {
          const active = option.value === value;
          return (
            <PressableScale
              key={option.value}
              haptic={false}
              onPress={() => {
                void Haptics.selectionAsync();
                onChange(active ? null : option.value);
              }}
              accessibilityRole="button"
              accessibilityState={{ selected: active }}
              accessibilityLabel={`${label}: ${option.label}`}
              style={[styles.chip, active && styles.chipActive]}
            >
              <AppText variant="buttonSm" color={active ? colors.emberGold : colors.textSecondary}>
                {option.label}
              </AppText>
            </PressableScale>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    gap: spacing.xs,
    paddingHorizontal: SCREEN_PADDING,
  },
  label: {
    letterSpacing: 1.2,
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
  },
  chip: {
    paddingHorizontal: spacing.sm,
    height: 34,
    borderRadius: radius.pill,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.strokeHairline,
    backgroundColor: colors.bgElevated,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipActive: {
    borderColor: withAlpha(colors.emberGold, 0.7),
    backgroundColor: withAlpha(colors.emberDeep, 0.24),
  },
});
