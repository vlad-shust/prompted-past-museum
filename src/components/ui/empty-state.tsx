import { StyleSheet, View } from 'react-native';

import { colors, spacing } from '@/theme';
import { AppText } from './app-text';
import { EmberButton } from './ember-button';
import { EmberDot } from './ember-dot';

export function EmptyState({
  title,
  message,
  actionLabel,
  onAction,
}: {
  title: string;
  message: string;
  actionLabel?: string;
  onAction?: () => void;
}) {
  return (
    <View style={styles.wrap}>
      <EmberDot size={10} intensity={0.8} />
      <AppText variant="titleSm" color={colors.textPrimary} style={styles.title}>
        {title}
      </AppText>
      <AppText variant="bodySm" color={colors.textSecondary} style={styles.message}>
        {message}
      </AppText>
      {actionLabel && onAction ? (
        <EmberButton label={actionLabel} onPress={onAction} variant="outline" small style={styles.action} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: spacing.huge,
    gap: spacing.sm,
  },
  title: {
    textAlign: 'center',
    marginTop: spacing.md,
  },
  message: {
    textAlign: 'center',
  },
  action: {
    marginTop: spacing.md,
    minWidth: 180,
  },
});
