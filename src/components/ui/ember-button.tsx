import { LinearGradient } from 'expo-linear-gradient';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

import { colors, radius, spacing, withAlpha } from '@/theme';
import { AppText } from './app-text';
import type { EmberButtonProps } from './ember-button.types';
import { PressableScale } from './pressable-scale';

const INK_ON_EMBER = '#200A02';

export function EmberButton({
  label,
  onPress,
  variant = 'ember',
  loading = false,
  disabled = false,
  small = false,
  style,
}: EmberButtonProps) {
  const height = small ? 44 : 56;
  const inactive = disabled || loading;

  const inner = (
    <View style={[styles.inner, { height }]}>
      {loading ? (
        <ActivityIndicator color={variant === 'ember' ? INK_ON_EMBER : colors.textPrimary} />
      ) : (
        <AppText
          variant={small ? 'buttonSm' : 'button'}
          color={
            variant === 'ember'
              ? INK_ON_EMBER
              : variant === 'outline'
                ? colors.textPrimary
                : colors.textSecondary
          }
        >
          {label}
        </AppText>
      )}
    </View>
  );

  return (
    <PressableScale
      onPress={onPress}
      disabled={inactive}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ disabled: inactive, busy: loading }}
      style={[{ opacity: inactive && !loading ? 0.4 : 1 }, style]}
    >
      {variant === 'ember' ? (
        <View style={styles.glow}>
          <LinearGradient
            colors={[colors.emberDeep, colors.emberCore, colors.emberBright]}
            start={{ x: 0, y: 1 }}
            end={{ x: 1, y: 0 }}
            style={[styles.gradient, { height }]}
          >
            {inner}
          </LinearGradient>
        </View>
      ) : (
        <View
          style={[
            styles.gradient,
            { height },
            variant === 'outline' && styles.outline,
          ]}
        >
          {inner}
        </View>
      )}
    </PressableScale>
  );
}

const styles = StyleSheet.create({
  glow: {
    borderRadius: radius.pill,
    shadowColor: colors.emberCore,
    shadowOpacity: 0.45,
    shadowRadius: 18,
    shadowOffset: { width: 0, height: 6 },
    elevation: 8,
  },
  gradient: {
    borderRadius: radius.pill,
    overflow: 'hidden',
    justifyContent: 'center',
  },
  inner: {
    paddingHorizontal: spacing.xl,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  outline: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: withAlpha(colors.textPrimary, 0.28),
  },
});
