import { Image } from 'expo-image';
import { Modal, StyleSheet, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

import { AppText } from '@/components/ui/app-text';
import { PressableScale } from '@/components/ui/pressable-scale';
import { colors, radius, spacing, springs, type, withAlpha } from '@/theme';
import { onStage } from '@/utils/stage';
import { PaintingWall, useWallStage } from './painting-wall';
import type { ArtViewerProps } from './art-viewer.types';

const MAX_ZOOM = 5;
const CAPTION_ROOM = spacing.lg + type.epigraph.lineHeight + spacing.md;
const FOOTER = { upright: CAPTION_ROOM, turned: CAPTION_ROOM };

/**
 * The painting alone on a dark wall: full frame, contain-fit, free pinch
 * and pan that stay where you leave them, double-tap to step back. A wide
 * canvas hangs sideways so it fills the phone once the phone is turned.
 */
export function ArtViewer({ imageUrl, aspect, title, visible, onClose }: ArtViewerProps) {
  const stage = useWallStage(aspect, FOOTER);
  const { turned, frame } = stage;

  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);
  const tx = useSharedValue(0);
  const ty = useSharedValue(0);
  const savedTx = useSharedValue(0);
  const savedTy = useSharedValue(0);

  const reset = () => {
    'worklet';
    scale.value = withSpring(1, springs.settle);
    savedScale.value = 1;
    tx.value = withSpring(0, springs.settle);
    ty.value = withSpring(0, springs.settle);
    savedTx.value = 0;
    savedTy.value = 0;
  };

  const pinch = Gesture.Pinch()
    .onUpdate((event) => {
      scale.value = Math.min(Math.max(savedScale.value * event.scale, 1), MAX_ZOOM);
    })
    .onEnd(() => {
      if (scale.value < 1.05) {
        reset();
        return;
      }
      savedScale.value = scale.value;
    });

  const pan = Gesture.Pan()
    .onUpdate((event) => {
      const room = scale.value - 1;
      const limitX = (frame.width * room) / 2;
      const limitY = (frame.height * room) / 2;
      const [dx, dy] = onStage(turned, event.translationX, event.translationY);
      tx.value = Math.min(Math.max(savedTx.value + dx, -limitX), limitX);
      ty.value = Math.min(Math.max(savedTy.value + dy, -limitY), limitY);
    })
    .onEnd(() => {
      savedTx.value = tx.value;
      savedTy.value = ty.value;
    });

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onEnd(() => {
      reset();
    });

  const gestures = Gesture.Simultaneous(pinch, pan, doubleTap);

  const zoomStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: tx.value }, { translateY: ty.value }, { scale: scale.value }],
  }));

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
      onRequestClose={onClose}
    >
      <PaintingWall stage={stage}>
        <GestureDetector gesture={gestures}>
          <Animated.View
            style={[
              styles.frame,
              { top: frame.y, left: frame.x, width: frame.width, height: frame.height },
              zoomStyle,
            ]}
          >
            <Image
              source={{ uri: imageUrl }}
              style={StyleSheet.absoluteFill}
              contentFit="contain"
              transition={250}
              allowDownscaling={false}
              accessibilityLabel={title}
            />
          </Animated.View>
        </GestureDetector>

        <View
          style={[
            styles.top,
            {
              paddingTop: stage.insets.top + spacing.sm,
              paddingRight: stage.insets.right + spacing.xl,
            },
          ]}
        >
          <PressableScale
            onPress={onClose}
            accessibilityRole="button"
            accessibilityLabel="Close the painting"
            hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
            style={styles.close}
          >
            <AppText variant="buttonSm" color={withAlpha(colors.textPrimary, 0.9)}>
              ✕
            </AppText>
          </PressableScale>
        </View>

        <View style={[styles.caption, { paddingBottom: stage.insets.bottom + spacing.lg }]}>
          <AppText variant="epigraph" color={withAlpha(colors.emberGold, 0.85)} numberOfLines={1}>
            {title}
          </AppText>
        </View>
      </PaintingWall>
    </Modal>
  );
}

const styles = StyleSheet.create({
  frame: {
    position: 'absolute',
  },
  top: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  close: {
    width: 36,
    height: 36,
    borderRadius: radius.pill,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: withAlpha(colors.bgRaised, 0.65),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: withAlpha(colors.glowHalo, 0.25),
  },
  caption: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    paddingHorizontal: spacing.xl,
  },
});
