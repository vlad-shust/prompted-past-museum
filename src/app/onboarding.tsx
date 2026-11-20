import { DatePicker, Host } from '@expo/ui/swift-ui';
import { Image } from 'expo-image';
import { router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';

import { ERAS, formatEraSpan } from '@/content/eras';
import { MOCK_SCENES } from '@/content/scenes';
import { STUDIO_SUGGESTIONS } from '@/content/studio-suggestions';
import { enableDailySceneNotification } from '@/lib/notifications';
import { DEFAULT_NOTIFICATION_HOUR, useAppStore } from '@/stores/app.store';
import { colors, durations, radius, spacing, withAlpha } from '@/theme';
import type { EraId } from '@/types/common.types';
import type { MockSceneDef } from '@/content/scenes.types';
import { EmberReveal } from '@/components/ember/ember-reveal';
import { wingMeta } from '@/components/explore/wing-door';
import { AppText } from '@/components/ui/app-text';
import { Atmosphere } from '@/components/ui/atmosphere';
import { EmberButton } from '@/components/ui/ember-button';
import { PressableScale } from '@/components/ui/pressable-scale';
import { Scrim } from '@/components/ui/scrim';

type OnboardingStep = 'arrival' | 'promise' | 'eras' | 'ritual';

const RITUAL_HOURS = [7, 8, 9, 12, 19, 21] as const;

/** "8:00", "Noon", "7:30 in the evening": the clock time the way the chips say it. */
function timeLabel(hour: number, minute: number): string {
  const clock = `${hour % 12 || 12}:${String(minute).padStart(2, '0')}`;
  if (hour === 12 && minute === 0) return 'Noon';
  if (hour < 12) return clock;
  if (hour < 17) return `${clock} in the afternoon`;
  return `${clock} in the evening`;
}

/** The wing's first room: its oldest moment, the way the Explore tab orders it. */
function wingOpening(eraId: EraId): { opening: MockSceneDef; dayCount: number } | null {
  const scenes = MOCK_SCENES.filter((scene) => scene.eraId === eraId).sort(
    (a, b) => a.historicalYear - b.historicalYear,
  );
  const opening = scenes[0];
  return opening ? { opening, dayCount: scenes.length } : null;
}

const coldOpenScene = MOCK_SCENES[0];
/** Named, not indexed: the collection gets reordered and the slide must not follow. */
const studioSlidePainting = STUDIO_SUGGESTIONS.find((def) => def.id === 'pearl-earring');
const PROMISE_LINES = [
  {
    title: 'The painting you just passed',
    copy: 'Bryullov’s Last Day of Pompeii. He painted himself into the crowd, paint box on his head. Every painting here comes with the day it shows and a fact like that about the picture itself.',
    imageUrl: coldOpenScene.thumbUrl,
  },
  {
    title: 'An era at a time',
    copy: 'Egypt to the machine age, 10 eras in all. Each day opens the next room in the one you are walking.',
    imageUrl: wingOpening(ERAS[0].id)?.opening.thumbUrl ?? coldOpenScene.thumbUrl,
  },
  {
    title: 'The studio',
    copy: 'Bring a painting of your own and watch it wake, or start with one from the house collection.',
    imageUrl: studioSlidePainting?.imageUrl ?? coldOpenScene.thumbUrl,
  },
] as const;

export default function OnboardingScreen() {
  const { width, height } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const completeOnboarding = useAppStore((state) => state.completeOnboarding);
  const [step, setStep] = useState<OnboardingStep>('arrival');
  const [interests, setInterests] = useState<EraId[]>([]);
  const [hour, setHour] = useState<number>(DEFAULT_NOTIFICATION_HOUR);
  const [minute, setMinute] = useState(0);
  const [finishing, setFinishing] = useState(false);
  const [emberDenied, setEmberDenied] = useState(false);
  // The wing shown under the chips: the last one tapped, or the last one still chosen.
  const [previewEraId, setPreviewEraId] = useState<EraId | null>(null);

  const toggleInterest = (eraId: EraId) => {
    const next = interests.includes(eraId)
      ? interests.filter((id) => id !== eraId)
      : [...interests, eraId].slice(-3);
    setInterests(next);
    setPreviewEraId(next.includes(eraId) ? eraId : (next.at(-1) ?? null));
  };

  const previewEra = previewEraId ? ERAS.find((era) => era.id === previewEraId) : undefined;
  const preview = previewEra ? wingOpening(previewEra.id) : null;

  // The picker hands back a whole Date; only the clock time is ours to keep.
  const arriveAt = new Date();
  arriveAt.setHours(hour, minute, 0, 0);
  const pickTime = (at: Date) => {
    setHour(at.getHours());
    setMinute(at.getMinutes());
  };
  const label = timeLabel(hour, minute);

  const enterMuseum = () => {
    completeOnboarding(hour, minute, interests);
    router.replace('/');
  };

  const finish = async () => {
    setFinishing(true);
    const granted = await enableDailySceneNotification(hour, minute);
    if (!granted) {
      setFinishing(false);
      setEmberDenied(true);
      return;
    }
    enterMuseum();
  };

  if (step === 'arrival') {
    return (
      <View style={styles.arrivalRoot}>
        <EmberReveal imageUrl={coldOpenScene.imageUrl} width={width} height={height} active />
        <Scrim direction="up" style={styles.arrivalScrim} />
        <Animated.View
          entering={FadeInDown.duration(durations.slow).delay(1_800)}
          style={[styles.arrivalContent, { paddingBottom: insets.bottom + spacing.xxl }]}
        >
          <AppText variant="epigraph" color={colors.emberGold}>
            prompted.past
          </AppText>
          <AppText variant="hero" color={colors.textPrimary}>
            History through art.{'\n'}Art through history.
          </AppText>
          <EmberButton
            label="Come in"
            onPress={() => setStep('promise')}
            style={styles.arrivalButton}
          />
        </Animated.View>
      </View>
    );
  }

  return (
    <View style={styles.root}>
      <Atmosphere />
      <View
        style={[
          styles.body,
          { paddingTop: insets.top + spacing.xxl, paddingBottom: insets.bottom + spacing.xl },
        ]}
      >
        {step === 'promise' ? (
          <Animated.View
            key="promise"
            entering={FadeIn.duration(durations.slow)}
            exiting={FadeOut.duration(durations.standard)}
            style={styles.stepWrap}
          >
            <AppText variant="title" color={colors.textPrimary}>
              The ritual is small.{'\n'}That’s the point.
            </AppText>
            <View style={styles.promiseList}>
              {PROMISE_LINES.map((line, index) => (
                <Animated.View
                  key={line.title}
                  entering={FadeInDown.duration(durations.slow).delay(220 + index * 140)}
                  style={styles.promiseRow}
                >
                  <Image
                    source={{ uri: line.imageUrl }}
                    style={styles.promiseThumb}
                    contentFit="cover"
                    transition={250}
                  />
                  <View style={styles.promiseText}>
                    <AppText variant="cardTitle" color={colors.textPrimary}>
                      {line.title}
                    </AppText>
                    <AppText variant="bodySm" color={colors.textSecondary}>
                      {line.copy}
                    </AppText>
                  </View>
                </Animated.View>
              ))}
            </View>
            <View style={styles.stepFooter}>
              <EmberButton label="Continue" onPress={() => setStep('eras')} />
            </View>
          </Animated.View>
        ) : null}

        {step === 'eras' ? (
          <Animated.View
            key="eras"
            entering={FadeIn.duration(durations.slow)}
            exiting={FadeOut.duration(durations.standard)}
            style={styles.stepWrap}
          >
            <AppText variant="title" color={colors.textPrimary}>
              What draws you?
            </AppText>
            <AppText variant="bodySm" color={colors.textSecondary}>
              Pick up to 3 eras. You start walking in one of them.
            </AppText>
            <View style={styles.eraGrid}>
              {ERAS.map((era) => {
                const active = interests.includes(era.id);
                return (
                  <PressableScale
                    key={era.id}
                    onPress={() => toggleInterest(era.id)}
                    accessibilityRole="button"
                    accessibilityState={{ selected: active }}
                    style={[styles.eraChip, active && styles.eraChipActive]}
                  >
                    <AppText
                      variant="buttonSm"
                      color={active ? colors.emberGold : colors.textSecondary}
                    >
                      {era.shortName}
                    </AppText>
                  </PressableScale>
                );
              })}
            </View>
            {previewEra && preview ? (
              <Animated.View
                key={previewEra.id}
                entering={FadeIn.duration(durations.standard)}
                style={[styles.wingPreview, { height: Math.min(Math.round(width * 0.5), 190) }]}
              >
                <Image
                  source={{ uri: preview.opening.thumbUrl }}
                  style={StyleSheet.absoluteFill}
                  contentFit="cover"
                  transition={250}
                />
                <Scrim direction="up" style={styles.wingPreviewScrim} />
                <View style={styles.wingPreviewLabel}>
                  <AppText variant="micro" color={colors.emberGold}>
                    {formatEraSpan(previewEra).toUpperCase()} ·{' '}
                    {wingMeta(preview.dayCount, 0).toUpperCase()}
                  </AppText>
                  <AppText variant="cardTitle" color={colors.textPrimary} numberOfLines={1}>
                    {previewEra.name}
                  </AppText>
                  <AppText
                    variant="caption"
                    color={withAlpha(colors.textPrimary, 0.72)}
                    numberOfLines={2}
                  >
                    Opens with {preview.opening.title} · {preview.opening.artCredit}
                  </AppText>
                </View>
              </Animated.View>
            ) : null}
            <View style={styles.stepFooter}>
              <EmberButton label="Continue" onPress={() => setStep('ritual')} />
              <PressableScale
                onPress={() => setStep('ritual')}
                style={styles.skip}
                accessibilityRole="button"
              >
                <AppText variant="caption" color={colors.textTertiary}>
                  Skip
                </AppText>
              </PressableScale>
            </View>
          </Animated.View>
        ) : null}

        {step === 'ritual' ? (
          <Animated.View
            key="ritual"
            entering={FadeIn.duration(durations.slow)}
            exiting={FadeOut.duration(durations.standard)}
            style={styles.stepWrap}
          >
            <AppText variant="title" color={colors.textPrimary}>
              When should your ember arrive?
            </AppText>
            <AppText variant="bodySm" color={colors.textSecondary}>
              One quiet notification a day, when the new scene is hung.
            </AppText>
            <View style={styles.eraGrid}>
              {RITUAL_HOURS.map((candidate) => {
                const active = candidate === hour && minute === 0;
                return (
                  <PressableScale
                    key={candidate}
                    onPress={() => {
                      setHour(candidate);
                      setMinute(0);
                    }}
                    accessibilityRole="button"
                    accessibilityState={{ selected: active }}
                    style={[styles.eraChip, active && styles.eraChipActive]}
                  >
                    <AppText
                      variant="buttonSm"
                      color={active ? colors.emberGold : colors.textSecondary}
                    >
                      {timeLabel(candidate, 0)}
                    </AppText>
                  </PressableScale>
                );
              })}
            </View>
            <View style={styles.anyTimeRow}>
              <AppText variant="bodySm" color={colors.textSecondary}>
                Or any time
              </AppText>
              <Host matchContents colorScheme="dark">
                <DatePicker
                  selection={arriveAt}
                  displayedComponents={['hourAndMinute']}
                  onDateChange={pickTime}
                />
              </Host>
            </View>
            <View style={styles.stepFooter}>
              <EmberButton
                label={emberDenied ? 'Enter the museum' : `Arrive at ${label.toLowerCase()}`}
                onPress={emberDenied ? enterMuseum : () => void finish()}
                loading={finishing}
              />
              <AppText variant="micro" color={colors.textTertiary} style={styles.ritualNote}>
                {emberDenied
                  ? 'Notifications are off. Turn the daily ember on anytime in the curator’s office.'
                  : `Tomorrow’s scene arrives at ${label.toLowerCase()}. You can change this anytime.`}
              </AppText>
            </View>
          </Animated.View>
        ) : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  arrivalRoot: {
    flex: 1,
    backgroundColor: colors.bgViewer,
  },
  arrivalScrim: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '58%',
  },
  arrivalContent: {
    position: 'absolute',
    left: spacing.xl,
    right: spacing.xl,
    bottom: 0,
    gap: spacing.md,
  },
  arrivalButton: {
    marginTop: spacing.md,
  },
  root: {
    flex: 1,
    backgroundColor: colors.bgBase,
  },
  body: {
    flex: 1,
    paddingHorizontal: spacing.xl,
  },
  stepWrap: {
    flex: 1,
    gap: spacing.md,
  },
  promiseList: {
    marginTop: spacing.lg,
    gap: spacing.xl,
  },
  promiseRow: {
    flexDirection: 'row',
    gap: spacing.md,
    alignItems: 'flex-start',
  },
  promiseThumb: {
    width: 56,
    height: 56,
    borderRadius: radius.md,
    backgroundColor: colors.bgElevated,
  },
  promiseText: {
    flex: 1,
    gap: spacing.xxs,
  },
  eraGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
    marginTop: spacing.md,
  },
  anyTimeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.md,
    marginTop: spacing.lg,
  },
  eraChip: {
    paddingHorizontal: spacing.md,
    height: 42,
    borderRadius: radius.pill,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.strokeHairline,
    backgroundColor: colors.bgElevated,
    alignItems: 'center',
    justifyContent: 'center',
  },
  eraChipActive: {
    borderColor: withAlpha(colors.emberGold, 0.55),
    backgroundColor: withAlpha(colors.emberDeep, 0.16),
  },
  wingPreview: {
    marginTop: spacing.lg,
    borderRadius: radius.lg,
    overflow: 'hidden',
    backgroundColor: colors.bgElevated,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: withAlpha(colors.emberGold, 0.35),
  },
  wingPreviewScrim: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '70%',
  },
  wingPreviewLabel: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: spacing.md,
    gap: spacing.xxs,
  },
  stepFooter: {
    marginTop: 'auto',
    gap: spacing.sm,
  },
  skip: {
    alignSelf: 'center',
    padding: spacing.xs,
  },
  ritualNote: {
    textAlign: 'center',
  },
});
