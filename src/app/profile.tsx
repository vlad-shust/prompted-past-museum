import { format } from 'date-fns';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useMemo } from 'react';
import { Linking, ScrollView, StyleSheet, View } from 'react-native';

import { ActivityCalendar } from '@/components/profile/activity-calendar';
import { MembershipCard } from '@/components/profile/membership-card';
import { ProfileRow } from '@/components/profile/profile-row';
import { VisitStats } from '@/components/profile/visit-stats';
import { paintingsByDay } from '@/components/profile/visit-calendar-model';
import { WingBanner, WingBannerEmpty } from '@/components/profile/wing-banner';
import { AppText } from '@/components/ui/app-text';
import { PressableScale } from '@/components/ui/pressable-scale';
import { Screen } from '@/components/ui/screen';
import { ADMIN_AVAILABLE } from '@/hooks/use-admin';
import { useTracks } from '@/hooks/use-tracks';
import { useAppStore } from '@/stores/app.store';
import { useMembershipStore } from '@/stores/membership.store';
import { useProgressStore } from '@/stores/progress.store';
import { colors, eraPalette, spacing, withAlpha } from '@/theme';
import { countWalkedTracks, walkOf } from '@/utils/lessons';
import { trackForEra } from '@/utils/tracks';

const MANAGE_SUBSCRIPTIONS_URL = 'https://apps.apple.com/account/subscriptions';

export default function ProfileScreen() {
  const membership = useMembershipStore((state) => state.membership);
  const visitDays = useProgressStore((state) => state.visitDays);
  const activeEraId = useProgressStore((state) => state.activeEraId);
  const eraProgress = useProgressStore((state) => state.eraProgress);
  const completedSceneIds = useProgressStore((state) => state.completedSceneIds);
  const dayScenes = useProgressStore((state) => state.dayScenes);
  const adminMode = useAppStore((state) => state.adminMode);
  const notificationHour = useAppStore((state) => state.notificationHour);
  const notificationMinute = useAppStore((state) => state.notificationMinute);
  const { tracks } = useTracks();
  const sceneByDay = useMemo(
    () => paintingsByDay(tracks, eraProgress, completedSceneIds, dayScenes),
    [tracks, eraProgress, completedSceneIds, dayScenes],
  );

  const palette = eraPalette(activeEraId);
  const reminderAt = new Date();
  reminderAt.setHours(notificationHour, notificationMinute, 0, 0);
  const track = activeEraId ? trackForEra(tracks, activeEraId) : null;
  const walk = track ? walkOf(track, completedSceneIds) : null;
  // Same definition of "walked" as the banner, Explore and Today.
  const wingsWalked = countWalkedTracks(tracks, completedSceneIds);

  return (
    <Screen scroll={false} padded={false} edges={['top']} atmosphere={false}>
      <LinearGradient
        pointerEvents="none"
        colors={[withAlpha(palette.wash, 0.55), withAlpha(colors.bgBase, 0)]}
        style={styles.wingLight}
      />

      <View style={styles.header}>
        <View>
          <AppText variant="title" color={colors.textPrimary}>
            Profile
          </AppText>
          <AppText variant="epigraph" color={palette.accent}>
            {track ? track.era.mood.toLowerCase() : 'No era chosen yet'}
          </AppText>
        </View>
        <PressableScale
          onPress={() => router.back()}
          accessibilityRole="button"
          accessibilityLabel="Close profile"
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        >
          <AppText variant="buttonSm" color={withAlpha(colors.textPrimary, 0.8)}>
            Done
          </AppText>
        </PressableScale>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        {track && walk ? (
          <WingBanner
            track={track}
            walk={walk}
            palette={palette}
            onContinue={() => router.dismissTo('/')}
            onChangeWing={() => router.dismissTo('/explore')}
          />
        ) : (
          <WingBannerEmpty onChooseWing={() => router.dismissTo('/explore')} />
        )}

        <VisitStats
          worksCollected={completedSceneIds.length}
          daysVisited={visitDays.length}
          wingsWalked={wingsWalked}
          palette={palette}
        />

        <AppText variant="sectionHeader" color={colors.textTertiary} style={styles.section}>
          Your visits
        </AppText>
        <ActivityCalendar
          visitDays={visitDays}
          palette={palette}
          sceneForDay={(day) => sceneByDay.get(day) ?? null}
          onOpenScene={(scene) =>
            router.push({ pathname: '/scene/[id]', params: { id: scene.id } })
          }
        />

        <AppText variant="sectionHeader" color={colors.textTertiary} style={styles.section}>
          Membership
        </AppText>
        <MembershipCard
          membership={membership}
          palette={palette}
          onSeeMembership={() => router.push('/paywall')}
          onManage={() => void Linking.openURL(MANAGE_SUBSCRIPTIONS_URL)}
        />

        <View style={styles.rows}>
          <ProfileRow
            label="Daily reminder"
            note={`The scene arrives at ${format(reminderAt, 'h:mm aaa')}`}
            tint={palette.accent}
            onPress={() => router.push('/settings')}
          />
          <ProfileRow
            label="Settings"
            note="Purchases, the ember, the rest of it"
            tint={palette.accent}
            onPress={() => router.push('/settings')}
          />
          {ADMIN_AVAILABLE ? (
            <ProfileRow
              label="The curator’s key"
              note={adminMode ? 'Turned: every room is open' : 'Open any lesson in any era'}
              tint={palette.accent}
              onPress={() => router.push('/admin')}
            />
          ) : null}
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  wingLight: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 260,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.md,
    paddingBottom: spacing.lg,
  },
  content: {
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.giant,
    gap: spacing.md,
  },
  section: {
    marginTop: spacing.sm,
  },
  rows: {
    gap: spacing.xs,
    marginTop: spacing.sm,
  },
});
