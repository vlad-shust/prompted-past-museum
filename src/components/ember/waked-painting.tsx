import { useImage } from '@shopify/react-native-skia';
import { useEvent } from 'expo';
import * as Haptics from 'expo-haptics';
import { Image } from 'expo-image';
import { useVideoPlayer, VideoView } from 'expo-video';
import { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useReducedMotion,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppText } from '@/components/ui/app-text';
import { EmberDot } from '@/components/ui/ember-dot';
import { colors, durations, easings, radius, spacing, withAlpha } from '@/theme';
import { EmberReveal } from './ember-reveal';
import { LivingArt } from './living-art';
import { VarnishLift } from './varnish-lift';
import type { WakedClipProps, WakedPaintingProps, WakeStage } from './waked-painting.types';

/**
 * One door for every way a painting wakes. Pre-rendered clips play as video;
 * everything else breathes client-side via the living still.
 */
export function WakedPainting({
  animation,
  imageUrl,
  width,
  height,
  active,
  ceremony = false,
  fit = 'cover',
  zoomable = false,
  turned = false,
  focus,
  quiet = false,
}: WakedPaintingProps) {
  // The ember burn belongs to the still-only path. A clip has a ceremony of
  // its own in the varnish lift, and two of them is one too many.
  const burn = ceremony && animation.kind !== 'video';
  const [revealDone, setRevealDone] = useState(!burn);
  const play = active && revealDone;

  const treatment =
    animation.kind === 'video' ? (
      <WakedClip
        url={animation.url}
        imageUrl={imageUrl}
        width={width}
        height={height}
        active={play}
        ceremony={ceremony}
        fit={fit}
        focus={focus}
        quiet={quiet}
      />
    ) : (
      <LivingArt
        imageUrl={imageUrl}
        width={width}
        height={height}
        active={play}
        zoomable={zoomable}
        fit={fit}
        turned={turned}
      />
    );

  return (
    <View style={{ width, height }}>
      {treatment}
      {!revealDone ? (
        <View style={StyleSheet.absoluteFill}>
          <EmberReveal
            imageUrl={imageUrl}
            width={width}
            height={height}
            active={active}
            onRevealComplete={() => setRevealDone(true)}
          />
        </View>
      ) : null}
    </View>
  );
}

/**
 * The painting is shown as a painting before anything moves: the still holds
 * the room for a second even when the clip is ready sooner.
 */
const PAINTING_HOLD_MS = 1_000;
/** After a re-activation, the wake still waits a beat. */
const MIN_HOLD_MS = 350;
/**
 * The fallback handoff, used only when the still never decodes for Skia and
 * there is no surface to clean. Long enough that its onset is invisible: the
 * clip's first frame is the painting, so the early fade changes nothing on
 * screen.
 */
const WAKE_FADE_MS = durations.slow * 4;
/**
 * Past this wait a resting still reads as the finished piece, so the wake
 * announces itself; a clip that arrives sooner never shows the notice.
 */
const NOTICE_AFTER_MS = 2_000;

/**
 * Own component so the native player only mounts when a clip exists. The
 * untouched still rests, then a conservator's cloth crosses it and the paint
 * behind the edge is clean and moving. Nothing is repainted: the shader only
 * ever takes varnish off. A soft haptic marks the moment the cloth lands.
 */
function WakedClip({
  url,
  imageUrl,
  width,
  height,
  active,
  ceremony = false,
  fit = 'cover',
  focus,
  quiet = false,
}: WakedClipProps) {
  const reduceMotion = useReducedMotion();
  const insets = useSafeAreaInsets();
  const player = useVideoPlayer({ uri: url, useCaching: true }, (instance) => {
    instance.loop = true;
    instance.muted = true;
  });
  const { status } = useEvent(player, 'statusChange', { status: player.status });
  const skImage = useImage(imageUrl);
  const [stage, setStage] = useState<WakeStage>('still');
  const stillOpacity = useSharedValue(1);
  const notice = useSharedValue(0);
  // Lazy init: the hold is measured from when the still first appeared, so a
  // slow-loading clip doesn't stack its wait on top of the painting's.
  const [shownAtMs] = useState(() => Date.now());
  const wokenRef = useRef(false);
  const wakeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (reduceMotion) return;
    if (!active) {
      player.pause();
      return;
    }
    if (status !== 'readyToPlay') return;
    if (wokenRef.current) {
      player.play();
      return;
    }

    const begin = () => {
      wokenRef.current = true;
      // Without a decoded still there is no surface to clean, so the clip
      // simply fades up under the plain image.
      if (!skImage) {
        setStage('fading');
        void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
        player.play();
        stillOpacity.value = withTiming(0, { duration: WAKE_FADE_MS, easing: easings.inOut });
        return;
      }
      setStage('lifting');
    };

    const heldFor = Date.now() - shownAtMs;
    wakeTimer.current = setTimeout(begin, Math.max(PAINTING_HOLD_MS - heldFor, MIN_HOLD_MS));
    return () => {
      if (wakeTimer.current) clearTimeout(wakeTimer.current);
    };
  }, [active, player, reduceMotion, shownAtMs, skImage, status, stillOpacity]);

  useEffect(() => {
    if (quiet || !active || status === 'readyToPlay' || status === 'error') {
      notice.value = withTiming(0, { duration: durations.standard, easing: easings.inOut });
      return;
    }
    const timer = setTimeout(() => {
      notice.value = withTiming(1, { duration: durations.slow, easing: easings.inOut });
    }, NOTICE_AFTER_MS);
    return () => clearTimeout(timer);
  }, [active, notice, quiet, status]);

  const stillStyle = useAnimatedStyle(() => ({
    opacity: stillOpacity.value,
  }));

  const noticeStyle = useAnimatedStyle(() => ({
    opacity: notice.value,
  }));

  // Reduced motion keeps the painting a painting; a broken or unreachable
  // clip quietly falls back to the living still instead of a dead frame.
  if (reduceMotion) {
    return <LivingArt imageUrl={imageUrl} width={width} height={height} active={false} />;
  }
  if (status === 'error') {
    return <LivingArt imageUrl={imageUrl} width={width} height={height} active={active} />;
  }

  // The Skia still and the plain one are the same pixels, so handing over
  // between them mid-wait costs nothing on screen.
  const lifting = skImage !== null && stage !== 'fading' && stage !== 'alive';

  return (
    <View style={[styles.frame, { width, height }]}>
      <VideoView player={player} style={{ width, height }} contentFit={fit} nativeControls={false} />
      {!lifting && stage !== 'alive' ? (
        <Animated.View style={[StyleSheet.absoluteFill, stillStyle]}>
          <Image
            source={{ uri: imageUrl }}
            style={StyleSheet.absoluteFill}
            contentFit={fit}
            accessibilityLabel="The painting"
          />
        </Animated.View>
      ) : null}
      {lifting && skImage ? (
        <View style={StyleSheet.absoluteFill} pointerEvents="none">
          <VarnishLift
            image={skImage}
            width={width}
            height={height}
            fit={fit}
            focus={focus}
            ceremony={ceremony}
            active={stage === 'lifting'}
            onSweepStart={() => {
              void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
              player.play();
            }}
            onLiftComplete={() => setStage('alive')}
          />
        </View>
      ) : null}
      {/* Inset-offset assumes the frame reaches the screen top, true of every
          current surface (masthead, viewer, step-into-art). */}
      <Animated.View
        pointerEvents="none"
        style={[styles.wakeNotice, { top: insets.top + spacing.sm }, noticeStyle]}
      >
        <EmberDot size={8} />
        <AppText variant="micro" color={colors.emberGold}>
          WAKING
        </AppText>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  frame: {
    backgroundColor: colors.bgViewer,
  },
  wakeNotice: {
    position: 'absolute',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radius.pill,
    backgroundColor: withAlpha(colors.bgRaised, 0.65),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: withAlpha(colors.glowHalo, 0.25),
  },
});
