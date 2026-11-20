import { router } from 'expo-router';
import { useState } from 'react';
import { ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, {
  FadeInDown,
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import { getEra } from '@/content/eras';
import { useToday } from '@/hooks/use-today';
import { useAppStore } from '@/stores/app.store';
import { colors, durations, radius, spacing, springs, TAB_BAR_CLEARANCE, withAlpha } from '@/theme';
import { formatMastheadDate } from '@/utils/dates';
import { formatYearsAgo, onThisDayYears } from '@/utils/on-this-day';
import { readingMinutes } from '@/utils/reading-time';
import { EmberReveal } from '@/components/ember/ember-reveal';
import { DetailLens } from '@/components/today/detail-lens';
import { StepIntoArt } from '@/components/today/step-into-art';
import { ArtViewer } from './art-viewer';
import { usePaintingAspect } from './painting-wall';
import { AppText } from '@/components/ui/app-text';
import { EmberDot } from '@/components/ui/ember-dot';
import { Hairline } from '@/components/ui/hairline';
import { PressableScale } from '@/components/ui/pressable-scale';
import { ProfileOrb } from '@/components/ui/profile-orb';
import { Scrim } from '@/components/ui/scrim';
import { SceneActions } from './scene-actions';
import type { SceneArticleProps } from './scene-article.types';

/**
 * Past this, the hero's cover crop keeps under 40% of the canvas, and a
 * panorama reads as a random slice. Such a painting hangs whole instead.
 */
const HANG_WHOLE_ABOVE_ASPECT = 1.6;
const ORB_SIZE = 30;

export function SceneArticle({ scene, variant, lessonLine, footerNote, onSteppedIn }: SceneArticleProps) {
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const today = useToday();
  const revealedSceneIds = useAppStore((state) => state.revealedSceneIds);
  const markSceneRevealed = useAppStore((state) => state.markSceneRevealed);
  const [viewerOpen, setViewerOpen] = useState(false);
  const aspect = usePaintingAspect(scene.imageUrl);

  const hungWhole = aspect !== null && aspect > HANG_WHOLE_ABOVE_ASPECT;
  const mastheadClearance = insets.top + spacing.sm + ORB_SIZE + spacing.md;
  const heroHeight = Math.round(height * (variant === 'today' ? 0.76 : 0.66));
  const paintingHeight = hungWhole && aspect ? Math.round(width / aspect) : heroHeight;
  const revealActive = variant === 'today' && !revealedSceneIds.includes(scene.id);
  const reduceMotion = useReducedMotion();
  const contentDelay = revealActive ? (reduceMotion ? durations.slow : durations.ceremonial) : 80;
  const era = getEra(scene.eraId);
  const yearsAgo = onThisDayYears(scene);

  // Free pinch on the hero: magnify to look, spring home on release.
  const pinchScale = useSharedValue(1);
  const pinch = Gesture.Pinch()
    .onUpdate((event) => {
      pinchScale.value = Math.min(Math.max(event.scale, 1), 3.2);
    })
    .onEnd(() => {
      pinchScale.value = withSpring(1, springs.settle);
    });
  const heroZoom = useAnimatedStyle(() => ({
    transform: [{ scale: pinchScale.value }],
  }));

  return (
    <View style={styles.root}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: TAB_BAR_CLEARANCE }}
        contentInsetAdjustmentBehavior="never"
      >
        <GestureDetector gesture={pinch}>
        <Animated.View
          style={[{ width, height: hungWhole ? undefined : heroHeight, zIndex: 1 }, heroZoom]}
        >
          {hungWhole ? <View style={{ height: mastheadClearance }} /> : null}
          <EmberReveal
            imageUrl={scene.imageUrl}
            width={width}
            height={paintingHeight}
            active={revealActive}
            onRevealComplete={() => markSceneRevealed(scene.id)}
          />
          {hungWhole ? null : <Scrim direction="up" style={styles.heroScrim} />}

          {variant === 'today' ? (
            <View style={[styles.masthead, { paddingTop: insets.top + spacing.sm }]}>
              <View style={styles.mastheadRow}>
                <AppText variant="micro" color={withAlpha(colors.textPrimary, 0.82)} style={styles.wordmark}>
                  PROMPTED.PAST
                </AppText>
                <View style={styles.mastheadRight}>
                  <AppText variant="micro" color={withAlpha(colors.textPrimary, 0.6)}>
                    {formatMastheadDate(today).toUpperCase()}
                  </AppText>
                  <ProfileOrb />
                </View>
              </View>
            </View>
          ) : (
            <View style={[styles.masthead, { paddingTop: insets.top + spacing.sm }]}>
              <PressableScale
                onPress={() => router.back()}
                accessibilityRole="button"
                accessibilityLabel="Back to the archive"
                style={styles.backButton}
              >
                <AppText variant="buttonSm" color={withAlpha(colors.textPrimary, 0.85)}>
                  Gallery
                </AppText>
              </PressableScale>
            </View>
          )}

          <PressableScale
            onPress={() => setViewerOpen(true)}
            accessibilityRole="button"
            accessibilityLabel="Open the painting full size"
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            style={[styles.expandButton, { top: insets.top + spacing.xxl + spacing.lg }]}
          >
            <AppText variant="buttonSm" color={withAlpha(colors.textPrimary, 0.85)}>
              ⤢
            </AppText>
          </PressableScale>

          <View style={[styles.titleBlock, hungWhole ? styles.titleBlockHung : null]}>
            {lessonLine ? (
              <AppText variant="micro" color={withAlpha(colors.textPrimary, 0.7)} style={styles.lessonLine}>
                {lessonLine.toUpperCase()}
              </AppText>
            ) : null}
            {yearsAgo !== null ? (
              <View style={styles.onThisDay}>
                <AppText variant="micro" color={colors.emberGold}>
                  ON THIS DAY · {formatYearsAgo(yearsAgo)} {yearsAgo === 1 ? 'YEAR' : 'YEARS'} AGO
                </AppText>
              </View>
            ) : null}
            <AppText variant="epigraph" color={colors.emberGold}>
              {era.name} · {scene.historicalDateLabel} · {readingMinutes(scene)} min
            </AppText>
            <AppText variant="title" color={colors.textPrimary} style={styles.title}>
              {scene.title}
            </AppText>
            <AppText variant="bodySm" color={withAlpha(colors.textPrimary, 0.72)} style={styles.dek}>
              {scene.dek}
            </AppText>
            {scene.artTitle ? (
              <AppText
                variant="caption"
                color={withAlpha(colors.textPrimary, 0.82)}
                style={styles.artCredit}
              >
                {scene.artTitle}
              </AppText>
            ) : null}
            {scene.artCredit ? (
              <AppText
                variant="caption"
                color={withAlpha(colors.textPrimary, 0.6)}
                style={scene.artTitle ? undefined : styles.artCredit}
              >
                {scene.artCredit}
              </AppText>
            ) : null}
          </View>
        </Animated.View>
        </GestureDetector>

        <Animated.View
          entering={FadeInDown.duration(durations.slow).delay(contentDelay)}
          style={styles.content}
        >
          {scene.details && scene.details.length > 0 ? (
            <View style={styles.lensSlot}>
              <DetailLens imageUrl={scene.imageUrl} details={scene.details} />
            </View>
          ) : null}

          <View style={styles.ornament}>
            <Hairline style={styles.ornamentLine} />
            <EmberDot size={6} />
            <Hairline style={styles.ornamentLine} />
          </View>

          <AppText variant="story" color={colors.textPrimary} style={styles.story}>
            {scene.story}
          </AppText>

          {scene.commissionedBy ? (
            <View style={styles.credits}>
              <AppText variant="caption" color={withAlpha(colors.emberGold, 0.75)}>
                Commissioned by {scene.commissionedBy}
              </AppText>
            </View>
          ) : null}

          {scene.animation ? (
            <View style={styles.stepSlot}>
              <StepIntoArt scene={scene} aspect={aspect} onSteppedIn={onSteppedIn} />
            </View>
          ) : null}

          <View style={styles.actionsSlot}>
            <SceneActions scene={scene} />
          </View>

          {footerNote ? (
            <AppText variant="caption" color={colors.textTertiary} style={styles.footerNote}>
              {footerNote}
            </AppText>
          ) : null}

          <ArtViewer
            imageUrl={scene.imageUrl}
            aspect={aspect}
            title={scene.artTitle ?? scene.title}
            visible={viewerOpen}
            onClose={() => setViewerOpen(false)}
          />

        </Animated.View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bgViewer,
  },
  heroScrim: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '52%',
  },
  masthead: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    paddingHorizontal: spacing.xl,
    gap: spacing.xs,
  },
  mastheadRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  wordmark: {
    letterSpacing: 2.4,
  },
  mastheadRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  backButton: {
    paddingVertical: spacing.xs,
    paddingRight: spacing.md,
  },
  titleBlock: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: spacing.xl,
    paddingBottom: spacing.xl,
    gap: spacing.xs,
  },
  titleBlockHung: {
    position: 'relative',
    paddingTop: spacing.lg,
  },
  lessonLine: {
    letterSpacing: 1.4,
    marginBottom: spacing.xxs,
  },
  expandButton: {
    position: 'absolute',
    right: spacing.xl,
    width: 34,
    height: 34,
    borderRadius: radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: withAlpha(colors.bgRaised, 0.55),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: withAlpha(colors.glowHalo, 0.25),
  },
  onThisDay: {
    alignSelf: 'flex-start',
    paddingHorizontal: spacing.sm,
    paddingVertical: 5,
    borderRadius: radius.pill,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: withAlpha(colors.emberGold, 0.5),
    marginBottom: spacing.xxs,
  },
  title: {
    marginTop: spacing.xxs,
  },
  dek: {
    fontStyle: 'normal',
  },
  artCredit: {
    marginTop: spacing.xxs,
  },
  content: {
    backgroundColor: colors.bgBase,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
  },
  lensSlot: {
    marginBottom: spacing.xl,
  },
  stepSlot: {
    marginBottom: spacing.lg,
  },
  footerNote: {
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  ornament: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginBottom: spacing.xl,
  },
  ornamentLine: {
    flex: 1,
  },
  story: {
    marginBottom: spacing.lg,
  },
  credits: {
    gap: spacing.xxs,
    marginBottom: spacing.xl,
  },
  actionsSlot: {
    marginBottom: spacing.lg,
  },
});
