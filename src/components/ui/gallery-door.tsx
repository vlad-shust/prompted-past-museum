import { router } from 'expo-router';
import { StyleSheet } from 'react-native';

import { colors, radius, withAlpha } from '@/theme';
import { AppText } from './app-text';
import { PressableScale } from './pressable-scale';

/** The framed doorway in the masthead: every walked room, kept in the Gallery. */
export function GalleryDoor() {
  return (
    <PressableScale
      onPress={() => router.push('/gallery')}
      accessibilityRole="button"
      accessibilityLabel="Open your gallery"
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
      style={styles.door}
    >
      <AppText variant="buttonSm" color={withAlpha(colors.textPrimary, 0.85)}>
        ◫
      </AppText>
    </PressableScale>
  );
}

const styles = StyleSheet.create({
  door: {
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
