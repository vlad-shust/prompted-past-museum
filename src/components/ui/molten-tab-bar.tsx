import { BlurView } from 'expo-blur';
import * as Haptics from 'expo-haptics';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { colors, radius, spacing, withAlpha } from '@/theme';
import { AppText } from './app-text';
import { EmberDot } from './ember-dot';
import { PressableScale } from './pressable-scale';
import type { MoltenTabBarProps } from './molten-tab-bar.types';

const TAB_LABELS: Readonly<Record<string, string>> = {
  index: 'Today',
  explore: 'Explore',
  studio: 'Studio',
  gallery: 'Gallery',
};

export function MoltenTabBar({ state, navigation }: MoltenTabBarProps) {
  const insets = useSafeAreaInsets();

  return (
    <View pointerEvents="box-none" style={[styles.wrap, { bottom: Math.max(insets.bottom, spacing.md) }]}>
      <View style={styles.bar}>
        <BlurView intensity={36} tint="dark" style={StyleSheet.absoluteFill} />
        <View style={styles.items}>
          {state.routes.map((route, index) => {
            const focused = state.index === index;
            const label = TAB_LABELS[route.name] ?? route.name;
            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
                canPreventDefault: true,
              });
              if (!focused && !event.defaultPrevented) {
                void Haptics.selectionAsync();
                navigation.navigate(route.name);
              }
            };
            return (
              <PressableScale
                key={route.key}
                onPress={onPress}
                haptic={false}
                accessibilityRole="tab"
                accessibilityState={{ selected: focused }}
                accessibilityLabel={label}
                style={styles.item}
              >
                <AppText
                  variant="buttonSm"
                  color={focused ? colors.textPrimary : colors.textTertiary}
                >
                  {label}
                </AppText>
                <View style={styles.dotSlot}>
                  {focused ? <EmberDot size={4} /> : null}
                </View>
              </PressableScale>
            );
          })}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  bar: {
    borderRadius: radius.pill,
    overflow: 'hidden',
    backgroundColor: withAlpha(colors.bgRaised, 0.72),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: withAlpha(colors.glowHalo, 0.14),
    shadowColor: '#000000',
    shadowOpacity: 0.55,
    shadowRadius: 24,
    shadowOffset: { width: 0, height: 10 },
    elevation: 12,
  },
  items: {
    flexDirection: 'row',
    paddingHorizontal: spacing.xs,
  },
  item: {
    paddingHorizontal: spacing.lg,
    paddingTop: spacing.md,
    paddingBottom: spacing.xs,
    alignItems: 'center',
    gap: 4,
  },
  dotSlot: {
    height: 6,
    justifyContent: 'center',
  },
});
