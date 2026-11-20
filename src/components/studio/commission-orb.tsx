import { router } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/ui/app-text';
import { EmberDot } from '@/components/ui/ember-dot';
import { PressableScale } from '@/components/ui/pressable-scale';
import { colors, radius, withAlpha } from '@/theme';

/**
 * The studio's other door: bring a painting of your own. Marked with an ember
 * while something of the visitor's is still on the easel.
 */
export function CommissionOrb({ busy }: { busy: boolean }) {
  return (
    <PressableScale
      onPress={() => router.push('/commission')}
      accessibilityRole="button"
      accessibilityLabel={busy ? 'Bring your own painting. One is on the easel' : 'Bring your own painting'}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      style={styles.orb}
    >
      <SymbolView
        name="plus"
        size={14}
        weight="medium"
        tintColor={colors.emberGold}
        type="monochrome"
        fallback={
          <AppText variant="buttonSm" color={colors.emberGold}>
            +
          </AppText>
        }
      />
      {busy ? (
        <View style={styles.mark}>
          <EmberDot size={7} />
        </View>
      ) : null}
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
  mark: {
    position: 'absolute',
    top: -2,
    right: -2,
  },
});
