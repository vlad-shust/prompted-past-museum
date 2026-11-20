import * as Haptics from 'expo-haptics';
import { StyleSheet, View } from 'react-native';

import { colors, radius, withAlpha } from '@/theme';
import { AppText } from './app-text';
import { PressableScale } from './pressable-scale';
import type { SegmentedProps } from './segmented.types';

export function Segmented<T extends string>({ options, value, onChange }: SegmentedProps<T>) {
  return (
    <View style={styles.track}>
      {options.map((option) => {
        const active = option.value === value;
        return (
          <PressableScale
            key={option.value}
            haptic={false}
            onPress={() => {
              if (!active) {
                void Haptics.selectionAsync();
                onChange(option.value);
              }
            }}
            accessibilityRole="tab"
            accessibilityState={{ selected: active }}
            style={[styles.segment, active && styles.segmentActive]}
          >
            <AppText variant="buttonSm" color={active ? colors.textPrimary : colors.textTertiary}>
              {option.label}
            </AppText>
          </PressableScale>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  track: {
    flexDirection: 'row',
    backgroundColor: colors.bgElevated,
    borderRadius: radius.pill,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.strokeHairline,
    padding: 3,
    gap: 3,
  },
  segment: {
    flex: 1,
    height: 36,
    borderRadius: radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
  },
  segmentActive: {
    backgroundColor: colors.bgRaised,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: withAlpha(colors.glowHalo, 0.18),
  },
});
