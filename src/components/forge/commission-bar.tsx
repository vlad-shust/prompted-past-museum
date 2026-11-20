import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, { FadeIn } from 'react-native-reanimated';

import { AppText } from '@/components/ui/app-text';
import { EmberButton } from '@/components/ui/ember-button';
import { Hairline } from '@/components/ui/hairline';
import { useKeyboardVisible } from '@/hooks/use-keyboard-visible';
import { colors, durations, SCREEN_PADDING, spacing, withAlpha } from '@/theme';
import type { CommissionBarProps, CommissionNarration } from './commission-bar.types';

/** Floating tab pill (~52pt) plus a breath of air above it. */
const TAB_PILL_CLEARANCE = 64;

function narrationText(narration: CommissionNarration): string {
  switch (narration.kind) {
    case 'need-era':
      return 'Begin with an era.';
    case 'need-moment':
      return 'Now the moment. A line or two.';
    case 'ready':
      return narration.line;
    case 'exhausted':
      return narration.member
        ? 'The forge rests. It burns again at midnight.'
        : 'Today’s free commission is spent.';
    default: {
      const exhaustive: never = narration;
      throw new Error(`Unhandled narration: ${JSON.stringify(exhaustive)}`);
    }
  }
}

/**
 * The commission slip, always in view: narrates the next step while the
 * form is incomplete, reads the commission back once it's ready, and holds
 * the one hot button. The scroll above never hides the goal.
 */
export function CommissionBar({
  narration,
  errorMessage,
  submitting,
  onForge,
  onJoin,
}: CommissionBarProps) {
  const insets = useSafeAreaInsets();
  const keyboardVisible = useKeyboardVisible();

  const ready = narration.kind === 'ready';
  const joinInstead = narration.kind === 'exhausted' && !narration.member;
  const text = errorMessage ?? narrationText(narration);

  return (
    <View
      style={[
        styles.wrap,
        {
          paddingBottom: keyboardVisible
            ? spacing.sm
            : Math.max(insets.bottom, spacing.md) + TAB_PILL_CLEARANCE,
        },
      ]}
    >
      <Hairline />
      <View style={styles.body}>
        <Animated.View key={text} entering={FadeIn.duration(durations.standard)}>
          <AppText
            variant={ready && !errorMessage ? 'epigraph' : 'caption'}
            color={
              errorMessage
                ? colors.emberGold
                : ready
                  ? withAlpha(colors.emberGold, 0.85)
                  : colors.textTertiary
            }
            numberOfLines={2}
            style={styles.narration}
          >
            {text}
          </AppText>
        </Animated.View>
        {joinInstead ? (
          <EmberButton label="Join to forge three a day" onPress={onJoin} />
        ) : (
          <EmberButton
            label="Light the forge"
            onPress={onForge}
            disabled={!ready}
            loading={submitting}
          />
        )}
        {narration.kind === 'exhausted' ? null : (
          <AppText variant="micro" color={colors.textTertiary} style={styles.promise}>
            About half a minute
          </AppText>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: colors.bgBase,
  },
  body: {
    paddingHorizontal: SCREEN_PADDING,
    paddingTop: spacing.sm,
    gap: spacing.sm,
  },
  narration: {
    textAlign: 'center',
  },
  promise: {
    textAlign: 'center',
  },
});
