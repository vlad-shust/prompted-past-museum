import * as Haptics from 'expo-haptics';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

import { AppText } from '@/components/ui/app-text';
import { PressableScale } from '@/components/ui/pressable-scale';
import { EYE_OPTIONS, LIGHT_OPTIONS, MOOD_OPTIONS } from '@/content/forge-tweaks';
import { colors, durations, SCREEN_PADDING, spacing, withAlpha } from '@/theme';
import { TweakPicker } from './tweak-picker';
import type { DirectionPanelProps } from './direction-panel.types';

/**
 * A single catalog line, folded shut — the direction is optional, so
 * sixteen chips shouldn't shout at someone who just wants to forge.
 * Chosen whispers stay on the folded line, never hidden state.
 */
export function DirectionPanel({
  light,
  mood,
  eye,
  onLightChange,
  onMoodChange,
  onEyeChange,
  whisperLine,
}: DirectionPanelProps) {
  const [open, setOpen] = useState(false);
  const chosen = whisperLine !== null;

  const toggle = () => {
    void Haptics.selectionAsync();
    setOpen((current) => !current);
  };

  return (
    <View style={styles.wrap}>
      <PressableScale
        haptic={false}
        onPress={toggle}
        accessibilityRole="button"
        accessibilityState={{ expanded: open }}
        accessibilityLabel="The direction, optional. Tune the light, mood, and vantage"
        style={styles.headerRow}
      >
        <AppText variant="sectionHeader" color={colors.textTertiary}>
          The Direction
        </AppText>
        <AppText variant="caption" color={withAlpha(colors.emberGold, 0.85)} style={styles.toggle}>
          {open ? 'Hide' : 'Tune'}
        </AppText>
      </PressableScale>

      {open ? (
        <Animated.View entering={FadeIn.duration(durations.standard)} style={styles.groups}>
          <TweakPicker label="Light" options={LIGHT_OPTIONS} value={light} onChange={onLightChange} />
          <TweakPicker label="Mood" options={MOOD_OPTIONS} value={mood} onChange={onMoodChange} />
          <TweakPicker label="Vantage" options={EYE_OPTIONS} value={eye} onChange={onEyeChange} />
        </Animated.View>
      ) : (
        <Animated.View key={whisperLine ?? 'unset'} entering={FadeIn.duration(durations.standard)}>
          {chosen ? (
            <AppText
              variant="epigraph"
              color={withAlpha(colors.emberGold, 0.85)}
              style={styles.summary}
            >
              {`${whisperLine.charAt(0).toUpperCase()}${whisperLine.slice(1)}.`}
            </AppText>
          ) : (
            <AppText variant="caption" color={colors.textTertiary} style={styles.summary}>
              Light, mood, vantage. The forge decides.
            </AppText>
          )}
        </Animated.View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: colors.strokeHairline,
    paddingVertical: spacing.md,
    gap: spacing.sm,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: SCREEN_PADDING,
  },
  toggle: {
    marginLeft: 'auto',
  },
  summary: {
    paddingHorizontal: SCREEN_PADDING,
  },
  groups: {
    gap: spacing.md,
    paddingTop: spacing.xxs,
  },
});
