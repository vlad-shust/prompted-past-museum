import { DatePicker, Host } from '@expo/ui/swift-ui';
import { format } from 'date-fns';
import Constants from 'expo-constants';
import { router } from 'expo-router';
import { useMemo, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Switch, View } from 'react-native';

import { ADMIN_AVAILABLE } from '@/hooks/use-admin';
import { deleteCurrentAccount } from '@/lib/account';
import { resetToFirstVisit } from '@/lib/dev-reset';
import { hangMockCollection } from '@/lib/dev-seed';
import { env } from '@/lib/env';
import { rescheduleDailySceneNotification } from '@/lib/notifications';
import { restoreMembership } from '@/lib/purchases';
import { useAppStore } from '@/stores/app.store';
import { useMembershipStore } from '@/stores/membership.store';
import { useProgressStore } from '@/stores/progress.store';
import { colors, eraPalette, radius, SCREEN_PADDING, spacing } from '@/theme';
import { isMember } from '@/utils/access';
import { AppText } from '@/components/ui/app-text';
import { EmberDot } from '@/components/ui/ember-dot';
import { Hairline } from '@/components/ui/hairline';
import { PressableScale } from '@/components/ui/pressable-scale';
import { Screen } from '@/components/ui/screen';

function membershipLine(kind: 'free' | 'trial' | 'member'): string {
  switch (kind) {
    case 'free':
      return 'Visitor · one work, one wake';
    case 'trial':
      return 'Trial · the whole museum is open';
    case 'member':
      return 'Member · the whole museum is open';
    default: {
      const exhaustive: never = kind;
      throw new Error(`Unhandled membership kind: ${JSON.stringify(exhaustive)}`);
    }
  }
}

export default function SettingsScreen() {
  const membership = useMembershipStore((state) => state.membership);
  const devToggleMembership = useMembershipStore((state) => state.devToggleMembership);
  const notificationHour = useAppStore((state) => state.notificationHour);
  const notificationMinute = useAppStore((state) => state.notificationMinute);
  const setNotificationTime = useAppStore((state) => state.setNotificationTime);
  const adminMode = useAppStore((state) => state.adminMode);
  const activeEraId = useProgressStore((state) => state.activeEraId);
  const [restoreMessage, setRestoreMessage] = useState<string | null>(null);
  const [seedMessage, setSeedMessage] = useState<string | null>(null);
  const [deletingAccount, setDeletingAccount] = useState(false);
  const [deleteError, setDeleteError] = useState<string | null>(null);

  const palette = eraPalette(activeEraId);

  // The picker hands back a whole Date; only the clock time is ours to keep.
  const reminderAt = useMemo(() => {
    const at = new Date();
    at.setHours(notificationHour, notificationMinute, 0, 0);
    return at;
  }, [notificationHour, notificationMinute]);

  const handleTime = (at: Date) => {
    const hour = at.getHours();
    const minute = at.getMinutes();
    setNotificationTime(hour, minute);
    void rescheduleDailySceneNotification(hour, minute);
  };

  const handleRestore = async () => {
    const restored = await restoreMembership();
    setRestoreMessage(restored ? 'Membership restored.' : 'No previous membership found.');
  };

  const confirmDeleteAccount = () => {
    Alert.alert(
      'Delete account?',
      'Your gallery, progress through each era, saved and studio paintings, and any unused commissions will be deleted. Unused commissions can’t be restored; an App Store membership stays with Apple. This cannot be undone.',
      [
        { text: 'Keep account', style: 'cancel' },
        {
          text: 'Delete account',
          style: 'destructive',
          onPress: () => {
            void performDeleteAccount();
          },
        },
      ],
    );
  };

  const performDeleteAccount = async () => {
    if (deletingAccount) return;
    setDeletingAccount(true);
    setDeleteError(null);
    try {
      await deleteCurrentAccount();
      router.replace('/onboarding');
    } catch (error) {
      setDeleteError(error instanceof Error ? error.message : 'The account could not be deleted.');
    } finally {
      setDeletingAccount(false);
    }
  };

  const handleResetToFirstVisit = async () => {
    await resetToFirstVisit();
    router.replace('/onboarding');
  };

  return (
    <Screen padded={false} edges={[]}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        <View style={styles.headerRow}>
          <AppText variant="titleSm" color={colors.textPrimary}>
            The curator’s office
          </AppText>
          <PressableScale
            onPress={() => router.back()}
            accessibilityRole="button"
            accessibilityLabel="Close settings"
            hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
            style={styles.close}
          >
            <AppText variant="button" color={colors.textTertiary}>
              ✕
            </AppText>
          </PressableScale>
        </View>

        <AppText variant="sectionHeader" color={colors.textTertiary} style={styles.sectionLabel}>
          Membership
        </AppText>
        <View style={styles.card}>
          <View style={styles.cardRow}>
            <EmberDot size={8} intensity={isMember(membership) ? 1 : 0.35} />
            <AppText variant="bodySm" color={colors.textPrimary} style={styles.cardRowText}>
              {membershipLine(membership.kind)}
            </AppText>
          </View>
          {!isMember(membership) ? (
            <PressableScale onPress={() => router.push('/paywall')} accessibilityRole="button" style={styles.cardAction}>
              <AppText variant="buttonSm" color={palette.accent}>
                Open the whole museum
              </AppText>
            </PressableScale>
          ) : null}
          <Hairline />
          <PressableScale onPress={() => void handleRestore()} accessibilityRole="button" style={styles.cardAction}>
            <AppText variant="buttonSm" color={colors.textSecondary}>
              Restore purchases
            </AppText>
          </PressableScale>
          {restoreMessage ? (
            <AppText variant="caption" color={colors.textTertiary}>
              {restoreMessage}
            </AppText>
          ) : null}
        </View>

        {env.dataMode === 'live' ? (
          <>
            <AppText variant="sectionHeader" color={colors.textTertiary} style={styles.sectionLabel}>
              Your account
            </AppText>
            <View style={styles.card}>
              <AppText variant="bodySm" color={colors.textPrimary}>
                Delete account
              </AppText>
              <AppText variant="caption" color={colors.textTertiary}>
                This permanently deletes your account and everything kept with it: your gallery and
                your progress through each era, your visit calendar and era picks, saved paintings,
                paintings woken in the studio, and any unused commissions. An App Store membership
                stays with Apple and can be restored later; unused commissions can’t be restored.
              </AppText>
              {deleteError ? (
                <AppText variant="caption" color={colors.textSecondary}>
                  {deleteError}
                </AppText>
              ) : null}
              <PressableScale
                onPress={confirmDeleteAccount}
                disabled={deletingAccount}
                accessibilityRole="button"
                accessibilityLabel="Delete account"
                style={styles.cardAction}
              >
                <AppText variant="buttonSm" color={palette.accent}>
                  {deletingAccount ? 'Deleting...' : 'Delete account'}
                </AppText>
              </PressableScale>
            </View>
          </>
        ) : null}

        <AppText variant="sectionHeader" color={colors.textTertiary} style={styles.sectionLabel}>
          The daily ember
        </AppText>
        <View style={styles.card}>
          <View style={styles.reminderRow}>
            <AppText variant="bodySm" color={colors.textPrimary}>
              Arrives at
            </AppText>
            <Host matchContents colorScheme="dark" style={styles.reminderPicker}>
              <DatePicker
                selection={reminderAt}
                displayedComponents={['hourAndMinute']}
                onDateChange={handleTime}
              />
            </Host>
          </View>
          <AppText variant="caption" color={colors.textTertiary}>
            Tomorrow&apos;s scene arrives at {format(reminderAt, 'h:mm aaa')}.
          </AppText>
        </View>

        {env.dataMode === 'mock' ? (
          <>
            <AppText variant="sectionHeader" color={colors.textTertiary} style={styles.sectionLabel}>
              Demo mode
            </AppText>
            <View style={styles.card}>
              <View style={styles.demoRow}>
                <View style={styles.demoText}>
                  <AppText variant="bodySm" color={colors.textPrimary}>
                    Preview membership
                  </AppText>
                  <AppText variant="caption" color={colors.textTertiary}>
                    No keys are configured, so the app runs on bundled scenes. Flip this to preview member features.
                  </AppText>
                </View>
                <Switch
                  value={isMember(membership)}
                  onValueChange={() => devToggleMembership()}
                  trackColor={{ true: palette.wash, false: colors.bgRaised }}
                  thumbColor={isMember(membership) ? palette.accent : colors.textTertiary}
                />
              </View>
            </View>
          </>
        ) : null}

        {ADMIN_AVAILABLE ? (
          <>
            <AppText variant="sectionHeader" color={colors.textTertiary} style={styles.sectionLabel}>
              Admin
            </AppText>
            <View style={styles.card}>
              <AppText variant="bodySm" color={colors.textPrimary}>
                The curator’s key
              </AppText>
              <AppText variant="caption" color={colors.textTertiary}>
                Every era catalogued, every lesson openable, with the membership wall and the
                one-a-day gate lifted. {adminMode ? 'The key is turned.' : 'The key is resting.'}
              </AppText>
              <PressableScale
                onPress={() => router.push('/admin')}
                accessibilityRole="button"
                style={styles.cardAction}
              >
                <AppText variant="buttonSm" color={palette.accent}>
                  Open the catalogue
                </AppText>
              </PressableScale>
              <Hairline />
              <AppText variant="bodySm" color={colors.textPrimary}>
                Begin the museum again
              </AppText>
              <AppText variant="caption" color={colors.textTertiary}>
                Forgets this visit entirely: onboarding, membership, saves, forges, the daily ember. It returns
                to the first arrival. The app also starts from scratch on its next launch.
              </AppText>
              <PressableScale
                onPress={() => void handleResetToFirstVisit()}
                accessibilityRole="button"
                style={styles.cardAction}
              >
                <AppText variant="buttonSm" color={palette.accent}>
                  Start from the first visit
                </AppText>
              </PressableScale>
              <Hairline />
              <AppText variant="bodySm" color={colors.textPrimary}>
                Hang a mock collection
              </AppText>
              <AppText variant="caption" color={colors.textTertiary}>
                Marks the first rooms of a few eras as walked, dated yesterday, so the gallery has
                works on its walls. Today&apos;s room stays open; real progress is never touched.
              </AppText>
              <PressableScale
                onPress={() => {
                  hangMockCollection();
                  setSeedMessage('Hung. Open the gallery to see the collection.');
                }}
                accessibilityRole="button"
                style={styles.cardAction}
              >
                <AppText variant="buttonSm" color={palette.accent}>
                  Hang the collection
                </AppText>
              </PressableScale>
              {seedMessage ? (
                <AppText variant="caption" color={colors.textTertiary}>
                  {seedMessage}
                </AppText>
              ) : null}
            </View>
          </>
        ) : null}

        <AppText variant="caption" color={colors.textTertiary} style={styles.about}>
          prompted.past {Constants.expoConfig?.version ?? ''} · demo paintings are public domain, via Wikimedia
          Commons · narrations in demo are synthesized placeholders
        </AppText>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: SCREEN_PADDING,
    paddingBottom: spacing.giant,
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: spacing.lg,
    marginBottom: spacing.lg,
  },
  close: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: spacing.xs,
  },
  sectionLabel: {
    marginTop: spacing.xl,
    marginBottom: spacing.sm,
  },
  card: {
    backgroundColor: colors.bgElevated,
    borderRadius: radius.lg,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.strokeHairline,
    padding: spacing.lg,
    gap: spacing.md,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  cardRowText: {
    flex: 1,
  },
  cardAction: {
    paddingVertical: spacing.xxs,
  },
  reminderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.md,
  },
  reminderPicker: {
    alignSelf: 'flex-end',
  },
  demoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  demoText: {
    flex: 1,
    gap: spacing.xxs,
  },
  about: {
    marginTop: spacing.xxl,
    textAlign: 'center',
    lineHeight: 18,
  },
});
