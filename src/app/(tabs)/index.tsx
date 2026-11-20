import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';

import { usePaintingAspect } from '@/components/scene/painting-wall';
import { SceneArticle } from '@/components/scene/scene-article';
import { AppText } from '@/components/ui/app-text';
import { EmberButton } from '@/components/ui/ember-button';
import { EmberDot } from '@/components/ui/ember-dot';
import { EmptyState } from '@/components/ui/empty-state';
import { ProfileOrb } from '@/components/ui/profile-orb';
import { Screen } from '@/components/ui/screen';
import { useAdminMode } from '@/hooks/use-admin';
import { useToday } from '@/hooks/use-today';
import { useTracks } from '@/hooks/use-tracks';
import { syncWidgetWithScene } from '@/lib/widget-sync';
import { useAppStore } from '@/stores/app.store';
import { useMembershipStore } from '@/stores/membership.store';
import { useProgressStore } from '@/stores/progress.store';
import { colors, radius, SCREEN_PADDING, spacing, TAB_BAR_CLEARANCE, withAlpha } from '@/theme';
import type { Scene } from '@/types/domain.types';
import { todayLessonAccess } from '@/utils/access';
import { isoDay } from '@/utils/dates';
import { todaysLesson } from '@/utils/lessons';
import { continuationFor, firstTrackSuggestion } from '@/utils/recommend';
import type { RecommendationContext } from '@/utils/recommend.types';
import { trackForEra } from '@/utils/tracks';
import type { EraTrack } from '@/utils/tracks.types';

/** The tallest a resting-era preview may hang, as a share of its width. */
const PREVIEW_MAX_ASPECT = 1.1;

function ChooseFirstWing({ suggested }: { suggested: EraTrack }) {
  const startTrack = useProgressStore((state) => state.startTrack);
  return (
    <Screen>
      <View style={styles.centered}>
        <View style={styles.orbRow}>
          <ProfileOrb />
        </View>
        <AppText variant="title" color={colors.textPrimary} style={styles.centerText}>
          Choose your first era
        </AppText>
        <AppText variant="bodySm" color={colors.textSecondary} style={styles.centerText}>
          Pick an era, then read one painting a day. There is no streak to keep
          and nothing to catch up on. The first painting is free.
        </AppText>
        <View style={styles.centerActions}>
          <EmberButton
            label={`Begin ${suggested.era.name}`}
            onPress={() => startTrack(suggested.era.id)}
          />
          <EmberButton
            label="See all eras"
            variant="ghost"
            small
            onPress={() => router.navigate('/explore')}
          />
        </View>
      </View>
    </Screen>
  );
}

function WingWalked({
  track,
  tracks,
  context,
}: {
  track: EraTrack;
  tracks: EraTrack[];
  context: RecommendationContext;
}) {
  const startTrack = useProgressStore((state) => state.startTrack);
  const { primary, secondary } = continuationFor(tracks, context);
  return (
    <Screen>
      <View style={styles.centered}>
        <View style={styles.orbRow}>
          <ProfileOrb />
        </View>
        <AppText variant="epigraph" color={colors.emberGold}>
          {track.era.name.toLowerCase()}, walked
        </AppText>
        <AppText variant="title" color={colors.textPrimary} style={styles.centerText}>
          The era is complete
        </AppText>
        <AppText variant="bodySm" color={colors.textSecondary} style={styles.centerText}>
          {track.dayCount === 1
            ? 'Its one work now hangs in your gallery.'
            : `All ${track.dayCount} works now hang in your gallery.`}
        </AppText>
        {primary ? (
          <AppText variant="bodySm" color={colors.textSecondary} style={styles.centerText}>
            {track.era.name} ends here. What came next?
          </AppText>
        ) : null}
        <View style={styles.centerActions}>
          {primary ? (
            <EmberButton
              label={`Begin ${primary.era.name}`}
              onPress={() => startTrack(primary.era.id)}
            />
          ) : null}
          {secondary ? (
            <EmberButton
              label={`Or ${secondary.era.name}`}
              variant="outline"
              small
              onPress={() => startTrack(secondary.era.id)}
            />
          ) : null}
          <EmberButton
            label="Visit your gallery"
            variant="ghost"
            small
            onPress={() => router.navigate('/gallery')}
          />
        </View>
      </View>
    </Screen>
  );
}

function MembershipWall() {
  return (
    <Screen>
      <View style={styles.centered}>
        <View style={styles.orbRow}>
          <ProfileOrb />
        </View>
        <AppText variant="title" color={colors.textPrimary} style={styles.centerText}>
          Keep going with membership
        </AppText>
        <AppText variant="bodySm" color={colors.textSecondary} style={styles.centerText}>
          Your first painting stays in Gallery. Membership unlocks every era,
          past scenes, and the studio.
        </AppText>
        <View style={styles.centerActions}>
          <EmberButton label="See membership" onPress={() => router.push('/paywall')} />
          <EmberButton
            label="Visit your gallery"
            variant="ghost"
            small
            onPress={() => router.navigate('/gallery')}
          />
        </View>
      </View>
    </Screen>
  );
}

function WingRests({
  track,
  scene,
  dayNumber,
}: {
  track: EraTrack;
  scene: Scene;
  dayNumber: number;
}) {
  const { width } = useWindowDimensions();
  const aspect = usePaintingAspect(scene.thumbUrl);
  const previewWidth = width - SCREEN_PADDING * 2;
  const previewHeight = Math.round(
    previewWidth / Math.max(aspect ?? 1 / PREVIEW_MAX_ASPECT, 1 / PREVIEW_MAX_ASPECT),
  );
  const resuming = dayNumber > 1;

  return (
    <Screen scroll contentStyle={styles.restContent}>
      <View style={styles.orbRow}>
        <ProfileOrb />
      </View>
      <AppText variant="epigraph" color={colors.emberGold}>
        {track.era.name.toLowerCase()}
      </AppText>
      <AppText variant="title" color={colors.textPrimary} style={styles.centerText}>
        This era opens tomorrow
      </AppText>
      <AppText variant="bodySm" color={colors.textSecondary} style={styles.centerText}>
        {resuming
          ? "Today's visit is complete. Your place here is kept, and tomorrow the walk goes on with:"
          : "Today's visit is complete. Tomorrow you start here:"}
      </AppText>
      <View style={styles.preview}>
        <Image
          source={{ uri: scene.thumbUrl }}
          style={[styles.previewArt, { width: previewWidth, height: previewHeight }]}
          contentFit="contain"
          transition={250}
          accessibilityLabel={scene.artTitle ?? scene.title}
        />
        <View style={styles.previewLabel}>
          <AppText variant="micro" color={colors.emberGold}>
            DAY {dayNumber} OF {track.dayCount} · {scene.historicalDateLabel.toUpperCase()}
          </AppText>
          <AppText variant="cardTitle" color={colors.textPrimary}>
            {scene.title}
          </AppText>
          {scene.artTitle ? (
            <AppText variant="caption" color={colors.textTertiary}>
              {scene.artTitle}
            </AppText>
          ) : null}
        </View>
      </View>
      <View style={styles.centerActions}>
        <EmberButton
          label="Visit your gallery"
          variant="ghost"
          small
          onPress={() => router.navigate('/gallery')}
        />
      </View>
    </Screen>
  );
}

export default function TodayScreen() {
  const { tracks, isPending, isError, refetch } = useTracks();
  const activeEraId = useProgressStore((state) => state.activeEraId);
  const eraProgress = useProgressStore((state) => state.eraProgress);
  const completedSceneIds = useProgressStore((state) => state.completedSceneIds);
  const dayScenes = useProgressStore((state) => state.dayScenes);
  const completeDay = useProgressStore((state) => state.completeDay);
  const recordVisit = useProgressStore((state) => state.recordVisit);
  const membership = useMembershipStore((state) => state.membership);
  const eraInterests = useAppStore((state) => state.eraInterests);
  const adminMode = useAdminMode();
  const today = isoDay(useToday());
  const recommendationContext: RecommendationContext = {
    eraProgress,
    completedSceneIds,
    eraInterests,
    today,
  };

  // The quiet activity record: opening the app is the only thing it counts.
  useEffect(() => {
    recordVisit(today);
  }, [recordVisit, today]);

  const track = activeEraId ? trackForEra(tracks, activeEraId) : null;
  const entry = track ? eraProgress[track.era.id] : undefined;
  const completedToday = entry?.lastCompletedOn === today;
  // One lesson a day, museum-wide: after switching wings mid-day, the new
  // wing rests until tomorrow instead of offering a second lesson.
  const restingUntilTomorrow =
    !adminMode &&
    !completedToday &&
    Object.values(eraProgress).some((progress) => progress.lastCompletedOn === today);
  // The first painting in walking order not yet stepped into — not
  // `scenes[daysDone]`, which breaks once editorial adds paintings to an era.
  const lesson = track
    ? todaysLesson(track, { completedSceneIds, dayScenes, completedToday, today })
    : null;
  const trackDone = lesson?.trackDone ?? false;
  const scene = lesson?.scene ?? null;
  const lessonLocked =
    !adminMode && todayLessonAccess(membership, completedSceneIds, completedToday) === 'locked';

  useEffect(() => {
    // The widget mirrors what the visitor can see; a resting wing (or the
    // membership wall) would leak tomorrow's unopened room.
    if (scene && !restingUntilTomorrow && !lessonLocked) void syncWidgetWithScene(scene);
  }, [scene, restingUntilTomorrow, lessonLocked]);

  if (isPending) {
    return (
      <View style={styles.pending}>
        <EmberDot size={12} />
      </View>
    );
  }

  if (isError || tracks.length === 0) {
    return (
      <View style={styles.pending}>
        <EmptyState
          title="The gallery is dark"
          message="Today's room couldn't be lit. Check your connection and try again."
          actionLabel="Relight"
          onAction={() => void refetch()}
        />
      </View>
    );
  }

  if (!track) {
    const suggested = firstTrackSuggestion(tracks, recommendationContext) ?? tracks[0];
    return <ChooseFirstWing suggested={suggested} />;
  }

  // The wall outranks every other state: once the gift is hung, a visitor
  // without membership gets no second lesson from any wing.
  if (lessonLocked) {
    return <MembershipWall />;
  }

  if (trackDone || !scene || !lesson) {
    return <WingWalked track={track} tracks={tracks} context={recommendationContext} />;
  }

  if (restingUntilTomorrow) {
    return <WingRests track={track} scene={scene} dayNumber={lesson.dayNumber} />;
  }

  const nextScene = lesson.upNext;
  const footerNote = completedToday
    ? nextScene
      ? `Today's visit is complete. Tomorrow · ${nextScene.title}`
      : "Today's visit is complete."
    : undefined;

  return (
    <SceneArticle
      scene={scene}
      variant="today"
      lessonLine={`Day ${lesson.dayNumber} of ${track.dayCount} · ${track.era.shortName}`}
      footerNote={footerNote}
      onSteppedIn={
        completedToday ? undefined : () => completeDay(track.era.id, scene.id, today)
      }
    />
  );
}

const styles = StyleSheet.create({
  pending: {
    flex: 1,
    backgroundColor: colors.bgViewer,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    gap: spacing.md,
    paddingBottom: spacing.colossal,
  },
  orbRow: {
    position: 'absolute',
    top: spacing.md,
    right: 0,
  },
  centerText: {
    textAlign: 'left',
  },
  restContent: {
    flexGrow: 1,
    justifyContent: 'center',
    gap: spacing.md,
    paddingTop: spacing.giant,
    paddingBottom: TAB_BAR_CLEARANCE,
  },
  preview: {
    gap: spacing.sm,
    marginTop: spacing.xs,
  },
  previewArt: {
    borderRadius: radius.md,
    backgroundColor: colors.bgElevated,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: withAlpha(colors.glowHalo, 0.18),
  },
  previewLabel: {
    gap: spacing.xxs,
  },
  centerActions: {
    gap: spacing.sm,
    marginTop: spacing.lg,
  },
});
