import { format } from 'date-fns';
import { StyleSheet, View } from 'react-native';

import { AppText } from '@/components/ui/app-text';
import { EmberDot } from '@/components/ui/ember-dot';
import { Hairline } from '@/components/ui/hairline';
import { PressableScale } from '@/components/ui/pressable-scale';
import { MEMBERSHIP } from '@/content/membership';
import { colors, radius, spacing, withAlpha } from '@/theme';
import type { Membership } from '@/types/domain.types';
import { isMember } from '@/utils/access';
import type { MembershipCardProps, MembershipCopy } from './membership-card.types';

const PRICE_LINE = `${MEMBERSHIP.monthlyPriceLabel} · ${MEMBERSHIP.annualPriceLabel}`;

function day(ms: number): string {
  return format(new Date(ms), 'd MMMM yyyy');
}

function copyFor(membership: Membership): MembershipCopy {
  switch (membership.kind) {
    case 'free':
      return {
        status: 'Visitor',
        opens: 'The first work is yours and stays yours. The other rooms are dark.',
        term: null,
        price: PRICE_LINE,
      };
    case 'trial':
      return {
        status: 'Trial visit',
        opens: 'Every era, the whole archive, the studio.',
        term: `Runs until ${day(membership.expiresAtMs)}`,
        price: `Then ${PRICE_LINE}`,
      };
    case 'member':
      return {
        status: 'Member of the museum',
        opens: 'Every era, the whole archive, the studio.',
        term:
          membership.expiresAtMs === null
            ? 'No end date'
            : membership.willRenew
              ? `Renews ${day(membership.expiresAtMs)}`
              : `Open until ${day(membership.expiresAtMs)}, then it ends`,
        price: null,
      };
    default: {
      const exhaustive: never = membership;
      throw new Error(`Unhandled membership: ${JSON.stringify(exhaustive)}`);
    }
  }
}

export function MembershipCard({ membership, palette, onSeeMembership, onManage }: MembershipCardProps) {
  const copy = copyFor(membership);
  const member = isMember(membership);

  return (
    <View style={[styles.card, { borderColor: withAlpha(palette.halo, member ? 0.3 : 0.14) }]}>
      <View style={styles.statusRow}>
        <EmberDot size={8} intensity={member ? 1 : 0.35} />
        <AppText variant="cardTitle" color={colors.textPrimary} style={styles.statusText}>
          {copy.status}
        </AppText>
      </View>

      <AppText variant="bodySm" color={colors.textSecondary}>
        {copy.opens}
      </AppText>

      {copy.term ? (
        <AppText variant="caption" color={palette.accent}>
          {copy.term}
        </AppText>
      ) : null}

      {copy.price ? (
        <AppText variant="caption" color={colors.textTertiary}>
          {copy.price}
        </AppText>
      ) : null}

      <Hairline />

      <PressableScale
        onPress={member ? onManage : onSeeMembership}
        accessibilityRole="button"
        accessibilityLabel={member ? 'Manage membership' : 'See membership'}
        style={styles.action}
      >
        <AppText variant="buttonSm" color={palette.accent}>
          {member ? 'Manage membership' : 'Open the whole museum'}
        </AppText>
      </PressableScale>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: spacing.xs,
    padding: spacing.lg,
    borderRadius: radius.lg,
    backgroundColor: colors.bgElevated,
    borderWidth: StyleSheet.hairlineWidth,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  statusText: {
    flex: 1,
  },
  action: {
    paddingVertical: spacing.xxs,
  },
});
