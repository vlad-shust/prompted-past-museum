import * as Haptics from 'expo-haptics';
import { useState } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { WakedPainting } from '@/components/ember/waked-painting';
import { PaintingWall, useWallStage } from '@/components/scene/painting-wall';
import { AppText } from '@/components/ui/app-text';
import { EmberButton } from '@/components/ui/ember-button';
import { EmberDot } from '@/components/ui/ember-dot';
import { PressableScale } from '@/components/ui/pressable-scale';
import { Scrim } from '@/components/ui/scrim';
import { getEra } from '@/content/eras';
import { useBrandedShare } from '@/hooks/use-branded-share';
import { env } from '@/lib/env';
import { colors, radius, spacing, type, withAlpha } from '@/theme';
import type { StepIntoArtProps } from './step-into-art.types';

const SHARE_BUTTON_HEIGHT = 44;
/** The caption sits over the button upright, and beside it once the stage is turned. */
const FOOTER = {
  upright: spacing.lg + SHARE_BUTTON_HEIGHT + spacing.md + type.epigraph.lineHeight + spacing.md,
  turned: spacing.lg + SHARE_BUTTON_HEIGHT + spacing.md,
};

/**
 * The end of the lesson: the reader has finished the text, and the painting
 * is offered alive. Share sits inside the moment, not after it.
 */
export function StepIntoArt({ scene, aspect, onSteppedIn }: StepIntoArtProps) {
  const [open, setOpen] = useState(false);
  const stage = useWallStage(aspect, FOOTER);
  const { share, shareCardElement } = useBrandedShare();

  const animation = scene.animation;
  if (!animation) return null;

  const enter = () => {
    void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    setOpen(true);
    onSteppedIn?.();
  };

  const handleShare = () => {
    share({
      imageUrl: scene.imageUrl,
      title: scene.title,
      epigraph: `${getEra(scene.eraId).name} · ${scene.historicalDateLabel}`,
      webUrl: env.webUrl ? `${env.webUrl}/scene/${scene.slug}` : undefined,
    });
  };

  return (
    <>
      <PressableScale
        onPress={enter}
        accessibilityRole="button"
        accessibilityLabel="Step into the art"
        style={styles.cta}
      >
        <View style={styles.ctaText}>
          <View style={styles.titleRow}>
            <AppText variant="cardTitle" color={colors.textPrimary} style={styles.ctaTitle}>
              Step into the art
            </AppText>
            <View style={styles.noAi}>
              <AppText variant="microCaps" color={colors.emberGold}>
                No AI
              </AppText>
            </View>
          </View>
          <AppText variant="caption" color={colors.textSecondary}>
            The whole painting, full size. Pinch to look closer.
          </AppText>
        </View>
        <EmberDot size={10} />
      </PressableScale>

      <Modal
        visible={open}
        transparent
        animationType="fade"
        statusBarTranslucent
        onRequestClose={() => setOpen(false)}
      >
        <GestureHandlerRootView style={styles.overlay}>
          <PaintingWall stage={stage}>
            <View style={[styles.frame, { top: stage.frame.y, left: stage.frame.x }]}>
              <WakedPainting
                animation={animation}
                imageUrl={scene.imageUrl}
                width={stage.frame.width}
                height={stage.frame.height}
                active={open}
                zoomable
                fit="contain"
                turned={stage.turned}
                focus={scene.details?.at(0)?.focus}
              />
            </View>
            <Scrim direction="up" style={styles.footerScrim} />
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
                onPress={() => setOpen(false)}
                accessibilityRole="button"
                accessibilityLabel="Step back out"
                hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
                style={styles.close}
              >
                <AppText variant="buttonSm" color={withAlpha(colors.textPrimary, 0.9)}>
                  ✕
                </AppText>
              </PressableScale>
            </View>
            <View
              style={[
                styles.footer,
                stage.turned ? styles.footerRow : null,
                {
                  paddingBottom: stage.insets.bottom + spacing.lg,
                  paddingLeft: stage.insets.left + spacing.xl,
                  paddingRight: stage.insets.right + spacing.xl,
                },
              ]}
            >
              <AppText
                variant="epigraph"
                color={colors.emberGold}
                style={stage.turned ? styles.footerLineRow : styles.footerLine}
                numberOfLines={stage.turned ? 1 : undefined}
              >
                {scene.artTitle ?? scene.title}, breathing
              </AppText>
              <EmberButton
                label="Share this moment"
                variant="outline"
                small
                onPress={handleShare}
              />
            </View>
          </PaintingWall>
        </GestureHandlerRootView>
      </Modal>
      {shareCardElement}
    </>
  );
}

const styles = StyleSheet.create({
  cta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.bgElevated,
    borderRadius: radius.lg,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: withAlpha(colors.emberGold, 0.35),
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.lg,
  },
  ctaText: {
    gap: spacing.xxs,
    flex: 1,
    paddingRight: spacing.md,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  ctaTitle: {
    flexShrink: 1,
  },
  noAi: {
    paddingHorizontal: spacing.xs,
    paddingVertical: spacing.xxs,
    borderRadius: radius.pill,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: withAlpha(colors.emberGold, 0.45),
  },
  overlay: {
    flex: 1,
    backgroundColor: colors.bgViewer,
  },
  frame: {
    position: 'absolute',
  },
  footerScrim: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: '38%',
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
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    gap: spacing.md,
    alignItems: 'center',
  },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  footerLine: {
    textAlign: 'center',
  },
  footerLineRow: {
    flexShrink: 1,
  },
});
