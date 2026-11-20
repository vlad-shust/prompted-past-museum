import * as Haptics from 'expo-haptics';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Linking, ScrollView, StyleSheet, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { MEMBERSHIP } from '@/content/membership';
import {
  fetchOfferingPrices,
  purchaseMembership,
  purchasesAvailable,
  restoreMembership,
} from '@/lib/purchases';
import type { MembershipPlan, OfferingPrices } from '@/lib/purchases.types';
import { useMembershipStore } from '@/stores/membership.store';
import { colors, durations, radius, spacing, type, withAlpha } from '@/theme';
import { isMember } from '@/utils/access';
import { MembershipWelcome } from '@/components/paywall/membership-welcome';
import { AppText } from '@/components/ui/app-text';
import { EmberButton } from '@/components/ui/ember-button';
import { EmberDot } from '@/components/ui/ember-dot';
import { PressableScale } from '@/components/ui/pressable-scale';
import { bucketPainting } from '@/content/scenes/painting-source';
import { Screen } from '@/components/ui/screen';
import { Scrim } from '@/components/ui/scrim';

type PaywallStage = 'offer' | 'purchasing' | 'welcome';

/** The front desk hangs one instantly known face; her gaze is the pitch. */
const HERO_ART = {
  imageUrl: bucketPainting('house/pearl-earring.jpg'),
  credit: 'Girl with a Pearl Earring · Vermeer, c. 1665',
  alt: 'Girl with a Pearl Earring by Vermeer',
} as const;

/** First numeric run in a localized price string; ratio-based so a mis-parsed
 * currency format still yields a sane discount (both prices scale together). */
function parsePrice(label: string | null): number | null {
  if (!label) return null;
  const value = Number.parseFloat(label.replace(/[^0-9.]/g, ''));
  return Number.isFinite(value) && value > 0 ? value : null;
}

const TIMELINE_NODES = [
  {
    title: 'Today · full access',
    copy: 'All 10 eras and the whole archive, with a new work every day. Unlimited animations of the house collection, and 1 animation of a painting of your own each month.',
    intensity: 1,
  },
] as const;

export default function PaywallScreen() {
  const membership = useMembershipStore((state) => state.membership);
  const insets = useSafeAreaInsets();
  const [stage, setStage] = useState<PaywallStage>('offer');
  // Live builds show only the store's localized prices; the USD fallbacks
  // are for mock mode, where there is no store to ask.
  const [prices, setPrices] = useState<OfferingPrices>(() =>
    purchasesAvailable()
      ? { monthlyLabel: null, annualLabel: null, monthlyTrial: false, annualTrial: false }
      : {
          monthlyLabel: MEMBERSHIP.monthlyPriceLabel,
          annualLabel: MEMBERSHIP.annualPriceLabel,
          monthlyTrial: true,
          annualTrial: true,
        },
  );
  const [restoreMessage, setRestoreMessage] = useState<string | null>(null);
  // Pre-select the higher-value plan; the annual card carries the savings badge.
  const [plan, setPlan] = useState<MembershipPlan>('annual');

  useEffect(() => {
    void fetchOfferingPrices().then(setPrices);
  }, []);

  const planLabel = (which: MembershipPlan): string =>
    (which === 'annual' ? prices.annualLabel : prices.monthlyLabel) ?? '...';
  // Promise the free week only to visitors the store will actually give it to.
  const trial = plan === 'annual' ? prices.annualTrial : prices.monthlyTrial;
  const timeline = TIMELINE_NODES;

  const planPeriod = (which: MembershipPlan): string => (which === 'annual' ? 'year' : 'month');

  const monthlyPrice = parsePrice(prices.monthlyLabel);
  const annualPrice = parsePrice(prices.annualLabel);
  const savingsPct =
    monthlyPrice && annualPrice ? Math.round((1 - annualPrice / (monthlyPrice * 12)) * 100) : null;
  const annualBadge = savingsPct !== null && savingsPct >= 5 && savingsPct <= 95 ? `SAVE ${savingsPct}%` : 'BEST VALUE';

  const handlePurchase = async () => {
    setStage('purchasing');
    const outcome = await purchaseMembership(plan);
    if (outcome === 'purchased') {
      void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      setStage('welcome');
      return;
    }
    setStage('offer');
    if (outcome === 'failed' || outcome === 'unavailable') {
      setRestoreMessage('The store didn’t answer. Try again in a moment.');
    }
  };

  const handleRestore = async () => {
    const restored = await restoreMembership();
    setRestoreMessage(restored ? 'Membership restored.' : 'No previous membership found.');
    if (restored) void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  };

  if (stage === 'welcome' || (isMember(membership) && stage === 'offer')) {
    return (
      <MembershipWelcome
        fromPurchase={stage === 'welcome'}
        onDismiss={() => router.back()}
      />
    );
  }

  return (
    <Screen padded={false} edges={[]}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <View style={styles.hero}>
          <Image
            source={{ uri: HERO_ART.imageUrl }}
            style={StyleSheet.absoluteFill}
            contentFit="cover"
            contentPosition="top center"
            transition={400}
            accessibilityLabel={HERO_ART.alt}
          />
          <Scrim direction="down" strength={0.55} style={styles.heroTopScrim} />
          <Scrim color={colors.bgBase} strength={1} style={styles.heroFade} />
          <PressableScale
            onPress={() => router.back()}
            accessibilityRole="button"
            accessibilityLabel="Close"
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            style={[styles.close, { top: insets.top + spacing.xs }]}
          >
            <AppText variant="button" color={colors.textPrimary}>
              ✕
            </AppText>
          </PressableScale>
          <Animated.View entering={FadeInDown.duration(durations.slow)} style={styles.heroText}>
            <AppText variant="epigraph" color={colors.emberGold}>
              membership
            </AppText>
            <AppText variant="title" color={colors.textPrimary}>
              Every era, every day
            </AppText>
          </Animated.View>
        </View>

        <View style={styles.body}>
        <AppText variant="micro" color={colors.textTertiary} style={styles.heroCredit}>
          {HERO_ART.credit}
        </AppText>

        <View style={styles.timeline}>
          {timeline.map((node, index) => (
            <View key={node.title} style={styles.node}>
              <View style={styles.nodeRail}>
                <EmberDot size={11} intensity={node.intensity} breathe={index === 0} />
                {index < timeline.length - 1 ? <View style={styles.nodeLine} /> : null}
              </View>
              <View style={styles.nodeText}>
                <AppText variant="cardTitle" color={colors.textPrimary}>
                  {node.title}
                </AppText>
                <AppText variant="bodySm" color={colors.textSecondary}>
                  {node.copy}
                </AppText>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.plans}>
          {(['monthly', 'annual'] as const).map((option) => {
            const active = plan === option;
            return (
              <PressableScale
                key={option}
                haptic={false}
                onPress={() => {
                  void Haptics.selectionAsync();
                  setPlan(option);
                }}
                accessibilityRole="button"
                accessibilityState={{ selected: active }}
                style={[styles.plan, active && styles.planActive]}
              >
                <AppText variant="caption" color={active ? colors.emberGold : colors.textSecondary}>
                  {option === 'annual' ? 'Annual' : 'Monthly'}
                </AppText>
                <AppText variant="cardTitle" color={active ? colors.textPrimary : colors.textTertiary}>
                  {planLabel(option)}/{planPeriod(option)}
                </AppText>
                <View style={styles.planBadge}>
                  {option === 'annual' ? (
                    <AppText variant="micro" color={withAlpha(colors.emberGold, 0.9)}>
                      {annualBadge}
                    </AppText>
                  ) : null}
                </View>
              </PressableScale>
            );
          })}
        </View>

        <View style={styles.footer}>
          <EmberButton
            label="Become a member"
            onPress={() => void handlePurchase()}
            loading={stage === 'purchasing'}
          />
          <AppText variant="caption" color={colors.textSecondary} style={styles.centered}>
            {trial
              ? `${planLabel(plan)}/${planPeriod(plan)}. Includes ${MEMBERSHIP.trialDays} days free. `
              : `${planLabel(plan)}/${planPeriod(plan)}. `}
            Renews automatically every {planPeriod(plan)} until you cancel. Cancel anytime in Settings,
            then Apple ID, then Subscriptions, at least 24 hours before{' '}
            {trial ? 'the trial ends' : 'the period ends'}.
          </AppText>
          <PressableScale
            onPress={() => void handleRestore()}
            accessibilityRole="button"
            style={styles.restore}
          >
            <AppText variant="caption" color={colors.textTertiary}>
              Restore purchases
            </AppText>
          </PressableScale>
          {restoreMessage ? (
            <AppText variant="caption" color={colors.emberGold} style={styles.centered}>
              {restoreMessage}
            </AppText>
          ) : null}
          <View style={styles.legalRow}>
            <PressableScale
              onPress={() => void Linking.openURL(MEMBERSHIP.termsUrl)}
              accessibilityRole="link"
              hitSlop={{ top: 10, bottom: 10, left: 8, right: 8 }}
            >
              <AppText variant="micro" color={colors.textTertiary}>
                Terms of Use
              </AppText>
            </PressableScale>
            <AppText variant="micro" color={colors.textTertiary}>
              ·
            </AppText>
            <PressableScale
              onPress={() => void Linking.openURL(MEMBERSHIP.privacyUrl)}
              accessibilityRole="link"
              hitSlop={{ top: 10, bottom: 10, left: 8, right: 8 }}
            >
              <AppText variant="micro" color={colors.textTertiary}>
                Privacy Policy
              </AppText>
            </PressableScale>
          </View>
        </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingBottom: spacing.giant,
  },
  hero: {
    height: 400,
    justifyContent: 'flex-end',
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xs,
    gap: spacing.xs,
    backgroundColor: colors.bgElevated,
  },
  heroTopScrim: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 150,
  },
  heroFade: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 230,
  },
  heroText: {
    gap: spacing.xs,
  },
  close: {
    position: 'absolute',
    right: spacing.lg,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius.pill,
    backgroundColor: withAlpha(colors.bgViewer, 0.35),
  },
  body: {
    paddingHorizontal: spacing.xl,
  },
  heroCredit: {
    marginTop: spacing.sm,
    marginBottom: spacing.xxl,
  },
  timeline: {
    gap: 0,
    marginBottom: spacing.xxl,
  },
  node: {
    flexDirection: 'row',
    gap: spacing.lg,
  },
  nodeRail: {
    alignItems: 'center',
    width: 12,
    paddingTop: 6,
  },
  nodeLine: {
    flex: 1,
    width: StyleSheet.hairlineWidth,
    backgroundColor: withAlpha(colors.emberGold, 0.35),
    marginVertical: 6,
  },
  nodeText: {
    flex: 1,
    gap: spacing.xxs,
    paddingBottom: spacing.xl,
  },
  plans: {
    flexDirection: 'row',
    gap: spacing.sm,
    marginBottom: spacing.xl,
  },
  plan: {
    flex: 1,
    gap: spacing.xxs,
    alignItems: 'center',
    paddingVertical: spacing.md,
    borderRadius: radius.lg,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.strokeHairline,
    backgroundColor: colors.bgElevated,
  },
  planActive: {
    borderColor: withAlpha(colors.emberGold, 0.55),
    backgroundColor: withAlpha(colors.emberDeep, 0.16),
  },
  planBadge: {
    height: type.micro.lineHeight,
    justifyContent: 'center',
  },
  footer: {
    gap: spacing.md,
  },
  restore: {
    alignSelf: 'center',
    padding: spacing.xs,
  },
  legalRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: spacing.xs,
    marginTop: spacing.xs,
  },
  centered: {
    textAlign: 'center',
  },
});
