import { router } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import { StyleSheet } from 'react-native';

import { colors, radius, withAlpha } from '@/theme';
import { EmberDot } from './ember-dot';
import { PressableScale } from './pressable-scale';

/** The visitor's ember: the header doorway to Profile, marked so it reads as one. */
export function ProfileOrb() {
  return (
    <PressableScale
      onPress={() => router.push('/profile')}
      accessibilityRole="button"
      accessibilityLabel="Profile"
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      style={styles.orb}
    >
      <SymbolView
        name="person.fill"
        size={14}
        tintColor={colors.emberGold}
        type="monochrome"
        fallback={<EmberDot size={7} />}
      />
    </PressableScale>
  );
}

const styles = StyleSheet.create({
  orb: {
    width: 30,
    height: 30,
    borderRadius: radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: withAlpha(colors.glowHalo, 0.35),
    backgroundColor: withAlpha(colors.bgRaised, 0.6),
  },
});
