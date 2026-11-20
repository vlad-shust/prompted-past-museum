import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

import { AppText } from '@/components/ui/app-text';
import { EmberDot } from '@/components/ui/ember-dot';
import { PressableScale } from '@/components/ui/pressable-scale';
import { getEra } from '@/content/eras';
import { forgePlaceholderImage } from '@/content/forge-placeholders';
import { colors, durations, radius, SCREEN_PADDING, spacing, withAlpha } from '@/theme';
import type { CommissionCardProps, QuestStep } from './commission-card.types';

/**
 * The commission as a quest card — a small canvas beside a chain of three
 * ember nodes that ignite in order: era, moment, fire. Each row is a
 * shortcut to its step, the trail between nodes lights as you advance,
 * and the last node pulses when the forge is ready to strike.
 */
export function CommissionCard({
  eraId,
  momentDone,
  ready,
  exhausted,
  commissionNumber,
  onStepPress,
}: CommissionCardProps) {
  const era = eraId ? getEra(eraId) : null;

  const steps: readonly QuestStep[] = [
    { key: 'era', label: era ? era.name : 'Choose an era', done: era !== null },
    { key: 'moment', label: 'Describe the moment', done: momentDone },
    { key: 'forge', label: 'Light the forge', done: false, armed: ready },
  ];

  return (
    <View style={styles.wrap}>
      <View style={styles.card}>
        <View style={styles.canvas}>
          {era ? (
            <Image
              source={{ uri: forgePlaceholderImage(era.id) }}
              style={styles.ghost}
              contentFit="cover"
              transition={durations.slow}
              blurRadius={55}
              accessibilityElementsHidden
            />
          ) : (
            <EmberDot size={8} intensity={exhausted ? 0.25 : 1} />
          )}
        </View>

        <View style={styles.quest}>
          {steps.map((step, index) => {
            const lit = (step.done || step.armed === true) && !exhausted;
            return (
              <View key={step.key}>
                <PressableScale
                  haptic={false}
                  onPress={() => onStepPress(step.key)}
                  disabled={exhausted}
                  accessibilityRole="button"
                  accessibilityState={{ selected: step.done, disabled: exhausted }}
                  accessibilityLabel={`Step ${index + 1}: ${step.label}`}
                  style={styles.stepRow}
                >
                  <View style={styles.node}>
                    {lit ? (
                      <Animated.View entering={FadeIn.duration(durations.standard)}>
                        <EmberDot size={step.armed === true ? 12 : 9} breathe={step.armed === true} />
                      </Animated.View>
                    ) : (
                      <View style={styles.nodePending}>
                        <AppText variant="micro" color={colors.textTertiary}>
                          {index + 1}
                        </AppText>
                      </View>
                    )}
                  </View>
                  <AppText
                    variant="caption"
                    color={lit ? colors.emberGold : colors.textTertiary}
                    numberOfLines={1}
                    style={styles.stepLabel}
                  >
                    {step.label}
                  </AppText>
                </PressableScale>
                {index < steps.length - 1 ? (
                  <View style={[styles.connector, step.done && !exhausted && styles.connectorLit]} />
                ) : null}
              </View>
            );
          })}
        </View>
      </View>

      <AppText
        variant="micro"
        color={withAlpha(colors.emberGold, 0.75)}
        style={styles.plaque}
        numberOfLines={1}
      >
        {exhausted
          ? 'THE FORGE RESTS'
          : commissionNumber !== null
            ? `COMMISSION Nº ${commissionNumber}`
            : ' '}
      </AppText>
    </View>
  );
}

const NODE_SIZE = 18;

const styles = StyleSheet.create({
  wrap: {
    paddingHorizontal: SCREEN_PADDING,
    gap: spacing.sm,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.lg,
    borderRadius: radius.md,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.strokeHairline,
    backgroundColor: colors.bgElevated,
    padding: spacing.md,
  },
  canvas: {
    width: 104,
    aspectRatio: 1,
    borderRadius: radius.sm,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: withAlpha(colors.glowHalo, 0.35),
    backgroundColor: colors.bgViewer,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ghost: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.5,
  },
  quest: {
    flex: 1,
  },
  stepRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingVertical: spacing.xxs,
  },
  node: {
    width: NODE_SIZE,
    height: NODE_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  nodePending: {
    width: NODE_SIZE,
    height: NODE_SIZE,
    borderRadius: NODE_SIZE / 2,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.textTertiary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  stepLabel: {
    flex: 1,
  },
  connector: {
    marginLeft: NODE_SIZE / 2 - 0.5,
    width: 1,
    height: 10,
    backgroundColor: colors.strokeHairline,
  },
  connectorLit: {
    backgroundColor: withAlpha(colors.emberGold, 0.5),
  },
  plaque: {
    textAlign: 'center',
    letterSpacing: 1.6,
  },
});
