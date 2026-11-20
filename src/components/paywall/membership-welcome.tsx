import {
  BlurMask,
  Canvas,
  Circle,
  Group,
  LinearGradient as SkiaLinearGradient,
  Path,
  PathOp,
  RadialGradient,
  Rect,
  Skia,
  vec,
} from '@shopify/react-native-skia';
import type { SkPath } from '@shopify/react-native-skia';
import * as Haptics from 'expo-haptics';
import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import type { LayoutChangeEvent, StyleProp, ViewStyle } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useDerivedValue,
  useReducedMotion,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import type { SharedValue } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { EmberField } from '@/components/ember/ember-field';
import { AppText } from '@/components/ui/app-text';
import { EmberButton } from '@/components/ui/ember-button';
import { colors, spacing, withAlpha } from '@/theme';

import { SALON, SALON_DESIGN_WIDTH, type SalonWork } from './membership-salon';
import type { MembershipWelcomeProps } from './membership-welcome.types';

/**
 * Membership, staged as the app icon come true: a keyhole in the dark with the
 * lit room behind it. The keyhole opens onto a salon wall of the house
 * collection, the picture lights come on one by one, and the words arrive
 * last. One timeline value drives everything on the UI thread.
 */

/** Keyhole rim warms up in the dark. */
const RIM_IN_MS = 500;
/** The keyhole starts to open. */
const IRIS_START_MS = 800;
const IRIS_MS = 1_600;
const IRIS_END_MS = IRIS_START_MS + IRIS_MS;
/** Picture lights after the first, which is already on behind the keyhole. */
const LAMPS_START_MS = 1_350;
const LAMP_STAGGER_MS = 150;
const LAMP_MS = 650;
const EMBERS_START_MS = IRIS_END_MS;
const COPY_START_MS = 2_450;
const COPY_STAGGER_MS = 150;
const COPY_MS = 700;
const TOTAL_MS = COPY_START_MS + COPY_STAGGER_MS * 3 + COPY_MS;
/** Longest the reveal waits for the paintings to arrive before it starts anyway. */
const PREFETCH_WAIT_MS = 600;

/** Keyhole bow radius at rest, in points. */
const KEYHOLE_RADIUS = 40;
/** Breathing room above the hang, below the status bar or the sheet's edge. */
const WALL_TOP = 20;
/** Design height of the hang, top rail to the lowest frame's bottom. */
const SALON_DESIGN_HEIGHT = 440;
/** How far the lowest frames may sink behind the scrim under the words. */
const WALL_UNDER_COPY = 36;

const GILT = '#C9974F';

function clamp01(value: number) {
  'worklet';
  return Math.min(1, Math.max(0, value));
}

/** Gentle at both ends and never steep in between: the opening is read in log scale. */
function easeInOutSine(value: number) {
  'worklet';
  return -(Math.cos(Math.PI * value) - 1) / 2;
}

function easeOutCubic(value: number) {
  'worklet';
  return 1 - Math.pow(1 - value, 3);
}

/** How open the keyhole is at time t, eased. */
function irisAt(t: number) {
  'worklet';
  return easeInOutSine(clamp01((t - IRIS_START_MS) / IRIS_MS));
}

/**
 * An old picture light catching: a quick flare, a dip, then a steady warm-up.
 * Lamp 0 hangs behind the keyhole and is on from the start.
 */
function lampAt(t: number, lamp: number) {
  'worklet';
  if (lamp === 0) return 1;
  const u = t - (LAMPS_START_MS + (lamp - 1) * LAMP_STAGGER_MS);
  if (u <= 0) return 0;
  if (u < 80) return 0.6 * (u / 80);
  if (u < 170) return 0.6 - 0.35 * ((u - 80) / 90);
  return 0.25 + 0.75 * easeOutCubic(clamp01((u - 170) / (LAMP_MS - 170)));
}

/** Bow and slot joined into one outline, centred on the bow. */
function keyholePath(radius: number): SkPath {
  const bow = Skia.Path.Make();
  bow.addCircle(0, 0, radius);
  const slot = Skia.Path.Make();
  slot.moveTo(-radius * 0.42, radius * 0.3);
  slot.lineTo(radius * 0.42, radius * 0.3);
  slot.lineTo(radius * 0.78, radius * 2.25);
  slot.lineTo(-radius * 0.78, radius * 2.25);
  slot.close();
  return Skia.Path.MakeFromOp(bow, slot, PathOp.Union) ?? bow;
}

interface Placed extends SalonWork {
  left: number;
  top: number;
  w: number;
  h: number;
}

export function MembershipWelcome({ fromPurchase, onDismiss }: MembershipWelcomeProps) {
  const insets = useSafeAreaInsets();
  const screen = useWindowDimensions();
  const reduceMotion = useReducedMotion();
  const t = useSharedValue(reduceMotion ? TOTAL_MS : 0);
  const [size, setSize] = useState({ width: screen.width, height: screen.height });
  const [copyTop, setCopyTop] = useState(screen.height * 0.64);
  // Once the keyhole has opened its mask comes down and the sparks go up.
  const [irisDone, setOpened] = useState(false);
  const opened = irisDone || reduceMotion;
  const { width, height } = size;

  // Presented as a sheet the screen starts below the status bar, so the hang
  // only clears the safe area when it really runs full height.
  const wallTop = (height < screen.height - 1 ? 0 : insets.top) + WALL_TOP;
  const k = Math.min(
    width / SALON_DESIGN_WIDTH,
    (copyTop + WALL_UNDER_COPY - wallTop) / SALON_DESIGN_HEIGHT,
  );
  const wallLeft = (width - SALON_DESIGN_WIDTH * k) / 2;
  // On a tall screen the spare height goes above and below the hang evenly.
  const hangTop = wallTop + Math.max(0, (copyTop - spacing.sm - wallTop - SALON_DESIGN_HEIGHT * k) / 2);
  const placed = useMemo<Placed[]>(
    () =>
      SALON.map((work) => ({
        ...work,
        left: wallLeft + work.x * k,
        top: hangTop + work.y * k,
        w: work.width * k,
        h: work.height * k,
      })),
    [k, wallLeft, hangTop],
  );

  // The keyhole looks at the Vermeer's face, a little above her centre.
  const hero = placed.find((work) => work.lamp === 0) ?? placed[0];
  const cx = hero ? hero.left + hero.w / 2 : width / 2;
  const cy = hero ? hero.top + hero.h * 0.36 : height / 2;
  const radius = KEYHOLE_RADIUS * k;
  const keyhole = useMemo(() => keyholePath(radius), [radius]);
  const reach = Math.max(
    Math.hypot(cx, cy),
    Math.hypot(width - cx, cy),
    Math.hypot(cx, height - cy),
    Math.hypot(width - cx, height - cy),
  );
  const openScale = (reach / radius) * 1.08;

  useEffect(() => {
    if (reduceMotion) {
      t.value = TOTAL_MS;
      return;
    }
    let started = false;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const begin = () => {
      if (started) return;
      started = true;
      t.value = withTiming(TOTAL_MS, { duration: TOTAL_MS, easing: Easing.linear });
      timers.push(
        setTimeout(() => {
          setOpened(true);
          void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Soft);
        }, IRIS_END_MS),
      );
    };
    void Image.prefetch(SALON.map((work) => work.imageUrl)).finally(begin);
    timers.push(setTimeout(begin, PREFETCH_WAIT_MS));
    return () => {
      started = true;
      timers.forEach(clearTimeout);
    };
  }, [reduceMotion, t]);

  const roomStyle = useAnimatedStyle(() => ({
    transform: [{ scale: 1.1 - 0.1 * irisAt(t.value) }],
  }));

  const keyholeTransform = useDerivedValue(() => {
    const scale = Math.exp(Math.log(openScale) * irisAt(t.value));
    return [{ translateX: cx }, { translateY: cy }, { scale }];
  });
  const maskOpacity = useDerivedValue(() => 1 - clamp01((irisAt(t.value) - 0.82) / 0.18));
  const rimOpacity = useDerivedValue(() => {
    const warm = easeOutCubic(clamp01(t.value / RIM_IN_MS));
    const fade = 1 - clamp01((irisAt(t.value) - 0.3) / 0.45);
    return warm * fade;
  });
  // Rim and glow are drawn inside the scaled group, so their sizes shrink as it
  // grows: the rim stays a hairline and the blur stays cheap.
  const rimWidth = useDerivedValue(() => 1.5 / Math.exp(Math.log(openScale) * irisAt(t.value)));
  const glowWidth = useDerivedValue(() => 5 / Math.exp(Math.log(openScale) * irisAt(t.value)));
  const glowBlur = useDerivedValue(() => 6 / Math.exp(Math.log(openScale) * irisAt(t.value)));

  const embersStyle = useAnimatedStyle(() => ({
    opacity: 0.6 * clamp01((t.value - EMBERS_START_MS) / 1_200),
  }));

  const copyBody = fromPurchase
    ? 'Every era, every painting you missed, and the studio. Your free week starts today.'
    : 'Every era, every painting you missed, and the studio. Come back whenever you like.';

  return (
    <View
      style={styles.root}
      onLayout={(event) => {
        const { width: w, height: h } = event.nativeEvent.layout;
        if (w !== width || h !== height) setSize({ width: w, height: h });
      }}
    >
      <Animated.View
        style={[StyleSheet.absoluteFill, { transformOrigin: [cx, cy, 0] }, roomStyle]}
        pointerEvents="none"
      >
        <Canvas style={StyleSheet.absoluteFill}>
          <Rect x={0} y={0} width={width} height={height}>
            <SkiaLinearGradient
              start={vec(0, 0)}
              end={vec(0, height)}
              colors={['#17100A', '#110B07', '#070504']}
            />
          </Rect>
          {placed.map((work) => (
            <LampPool key={work.id} work={work} t={t} />
          ))}
        </Canvas>
        {placed.map((work) => (
          <SalonPainting key={work.id} work={work} t={t} />
        ))}
        <Canvas style={StyleSheet.absoluteFill}>
          <Rect x={0} y={0} width={width} height={height}>
            <RadialGradient
              c={vec(cx, cy)}
              r={Math.max(width, height) * 0.62}
              colors={[
                withAlpha(colors.bgViewer, 0),
                withAlpha(colors.bgViewer, 0.12),
                withAlpha(colors.bgViewer, 0.6),
              ]}
              positions={[0, 0.45, 1]}
            />
          </Rect>
        </Canvas>
      </Animated.View>

      {opened ? (
        <Animated.View style={[StyleSheet.absoluteFill, embersStyle]} pointerEvents="none">
          <EmberField intensity={0.55} overlay />
        </Animated.View>
      ) : null}

      <LinearGradient
        pointerEvents="none"
        colors={[withAlpha(colors.bgViewer, 0.55), withAlpha(colors.bgViewer, 0)]}
        style={[styles.topScrim, { height: insets.top + 40 }]}
      />
      <LinearGradient
        pointerEvents="none"
        colors={[
          withAlpha(colors.bgViewer, 0),
          withAlpha(colors.bgViewer, 0.82),
          withAlpha(colors.bgViewer, 0.97),
        ]}
        locations={[0, 0.5, 1]}
        style={[styles.bottomScrim, { top: copyTop - 150 }]}
      />

      {opened ? null : (
        <Canvas style={StyleSheet.absoluteFill} pointerEvents="none">
          <Group layer opacity={maskOpacity}>
            <Rect x={0} y={0} width={width} height={height} color={colors.bgViewer} />
            <Group transform={keyholeTransform}>
              <Path path={keyhole} color={colors.bgViewer} blendMode="dstOut" />
            </Group>
          </Group>
          <Group transform={keyholeTransform} opacity={rimOpacity}>
            <Path
              path={keyhole}
              style="stroke"
              strokeWidth={glowWidth}
              color={withAlpha(colors.emberBright, 0.55)}
            >
              <BlurMask blur={glowBlur} style="normal" />
            </Path>
            <Path path={keyhole} style="stroke" strokeWidth={rimWidth} color={colors.emberGold} />
          </Group>
        </Canvas>
      )}

      <View
        style={[styles.copy, { paddingBottom: insets.bottom + spacing.xl }]}
        pointerEvents="box-none"
      >
        <CopyLine
          index={0}
          t={t}
          onLayout={(event) => {
            const y = event.nativeEvent.layout.y;
            if (Math.abs(y - copyTop) > 1) setCopyTop(y);
          }}
        >
          <AppText variant="epigraph" color={colors.emberGold} style={styles.centered}>
            membership
          </AppText>
        </CopyLine>
        <CopyLine index={1} t={t}>
          <AppText variant="title" color={colors.textPrimary} style={styles.centered}>
            The museum is yours
          </AppText>
        </CopyLine>
        <CopyLine index={2} t={t}>
          <AppText variant="bodySm" color={colors.textSecondary} style={styles.body}>
            {copyBody}
          </AppText>
        </CopyLine>
        <CopyLine index={3} t={t} style={styles.buttonWrap}>
          <EmberButton label="Enter the museum" onPress={onDismiss} style={styles.button} />
        </CopyLine>
      </View>
    </View>
  );
}

/** Warm pool thrown on the wall by one picture light. */
function LampPool({ work, t }: { work: Placed; t: SharedValue<number> }) {
  const opacity = useDerivedValue(() => lampAt(t.value, work.lamp));
  const x = work.left + work.w / 2;
  const y = work.top;
  const r = Math.max(work.w, work.h) * 0.95;
  return (
    <Group opacity={opacity}>
      <Circle cx={x} cy={y} r={r}>
        <RadialGradient
          c={vec(x, y)}
          r={r}
          colors={[
            withAlpha(colors.glowHalo, 0.36),
            withAlpha(colors.emberBright, 0.12),
            withAlpha(colors.emberBright, 0),
          ]}
          positions={[0, 0.45, 1]}
        />
      </Circle>
    </Group>
  );
}

/** One framed work with its picture light: dim until its lamp comes on. */
function SalonPainting({ work, t }: { work: Placed; t: SharedValue<number> }) {
  const dimStyle = useAnimatedStyle(() => ({ opacity: 0.82 * (1 - lampAt(t.value, work.lamp)) }));
  const lightStyle = useAnimatedStyle(() => ({ opacity: lampAt(t.value, work.lamp) }));
  const barStyle = useAnimatedStyle(() => ({
    opacity: 0.35 + 0.65 * lampAt(t.value, work.lamp),
  }));
  const barWidth = Math.max(24, work.w * 0.34);

  return (
    <>
      <Animated.View
        style={[
          styles.lampBar,
          { left: work.left + (work.w - barWidth) / 2, top: work.top - 6, width: barWidth },
          barStyle,
        ]}
      />
      <View style={[styles.frame, { left: work.left, top: work.top, width: work.w, height: work.h }]}>
        <View style={styles.canvas}>
          <Image
            source={{ uri: work.imageUrl }}
            style={StyleSheet.absoluteFill}
            contentFit="cover"
            cachePolicy="memory-disk"
            accessible={false}
          />
          <Animated.View style={[StyleSheet.absoluteFill, styles.dim, dimStyle]} />
          <Animated.View style={[StyleSheet.absoluteFill, lightStyle]}>
            <LinearGradient
              colors={[withAlpha(colors.glowHalo, 0.22), withAlpha(colors.glowHalo, 0)]}
              locations={[0, 0.6]}
              style={StyleSheet.absoluteFill}
            />
          </Animated.View>
        </View>
      </View>
    </>
  );
}

function CopyLine({
  index,
  t,
  style,
  onLayout,
  children,
}: {
  index: number;
  t: SharedValue<number>;
  style?: StyleProp<ViewStyle>;
  onLayout?: (event: LayoutChangeEvent) => void;
  children: ReactNode;
}) {
  const animated = useAnimatedStyle(() => {
    const p = easeOutCubic(clamp01((t.value - (COPY_START_MS + index * COPY_STAGGER_MS)) / COPY_MS));
    return { opacity: p, transform: [{ translateY: 12 * (1 - p) }] };
  });
  return (
    <Animated.View style={[style, animated]} onLayout={onLayout}>
      {children}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: colors.bgViewer,
    overflow: 'hidden',
  },
  frame: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: withAlpha(GILT, 0.85),
    padding: 3,
    backgroundColor: '#0B0806',
    shadowColor: colors.bgViewer,
    shadowOpacity: 0.85,
    shadowRadius: 14,
    shadowOffset: { width: 0, height: 10 },
  },
  canvas: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: withAlpha(GILT, 0.45),
    overflow: 'hidden',
    backgroundColor: colors.bgElevated,
  },
  dim: {
    backgroundColor: '#050302',
  },
  lampBar: {
    position: 'absolute',
    height: 3,
    borderRadius: 1.5,
    backgroundColor: GILT,
    shadowColor: colors.glowHalo,
    shadowOpacity: 0.9,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  topScrim: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  bottomScrim: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  copy: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    paddingHorizontal: spacing.xxl,
    gap: spacing.sm,
  },
  centered: {
    textAlign: 'center',
  },
  body: {
    textAlign: 'center',
    marginTop: spacing.xxs,
  },
  buttonWrap: {
    marginTop: spacing.lg,
  },
  button: {
    alignSelf: 'stretch',
  },
});
