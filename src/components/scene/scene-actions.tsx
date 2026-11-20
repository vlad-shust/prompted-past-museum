import * as Haptics from 'expo-haptics';
import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Linking, StyleSheet, View } from 'react-native';

import { getEra } from '@/content/eras';
import { useBrandedShare } from '@/hooks/use-branded-share';
import { useWallpaper } from '@/hooks/use-wallpaper';
import { useSavedSceneIds, useToggleSave } from '@/hooks/use-saves';
import { env } from '@/lib/env';
import { saveImageToPhotos } from '@/lib/hd-download';
import { useMembershipStore } from '@/stores/membership.store';
import { colors, radius, spacing, withAlpha } from '@/theme';
import type { Scene } from '@/types/domain.types';
import type { WallpaperState } from '@/components/share/wallpaper-card.types';
import { isMember } from '@/utils/access';
import { AppText } from '@/components/ui/app-text';
import { PressableScale } from '@/components/ui/pressable-scale';

type HdState = 'idle' | 'saving' | 'saved' | 'denied' | 'failed';

const WALLPAPER_LABEL: Readonly<Record<WallpaperState, string>> = {
  idle: 'Wallpaper',
  rendering: 'Framing…',
  saved: '✓ Wallpaper in Photos',
  denied: 'Settings',
  failed: 'Retry wallpaper',
};

const HD_LABEL: Readonly<Record<HdState, string>> = {
  idle: 'Full size',
  saving: 'Saving…',
  saved: '✓ In Photos',
  denied: 'Settings',
  failed: 'Retry HD',
};

export function SceneActions({ scene }: { scene: Scene }) {
  const { data: savedIds = [] } = useSavedSceneIds();
  const toggleSave = useToggleSave();
  const membership = useMembershipStore((state) => state.membership);
  const { share, shareCardElement } = useBrandedShare();
  const { save: saveWallpaper, state: wallpaperState, wallpaperElement } = useWallpaper();
  const [hdState, setHdState] = useState<HdState>('idle');
  const saved = savedIds.includes(scene.id);

  useEffect(() => {
    if (wallpaperState === 'saved') {
      void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    }
  }, [wallpaperState]);

  const handleSave = () => {
    void Haptics.impactAsync(
      saved ? Haptics.ImpactFeedbackStyle.Light : Haptics.ImpactFeedbackStyle.Medium,
    );
    toggleSave.mutate({ sceneId: scene.id, saved: !saved });
  };

  const handleHd = async () => {
    if (!isMember(membership)) {
      router.push('/paywall');
      return;
    }
    if (hdState === 'saving') return;
    // After a hard denial iOS won't re-prompt; send the user to Settings.
    if (hdState === 'denied') {
      setHdState('idle');
      void Linking.openSettings();
      return;
    }
    setHdState('saving');
    const outcome = await saveImageToPhotos(scene.imageUrl);
    setHdState(outcome);
    if (outcome === 'saved') void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
  };

  const handleWallpaper = () => {
    if (wallpaperState === 'rendering') return;
    // After a hard denial iOS won't re-prompt; send the user to Settings.
    if (wallpaperState === 'denied') {
      void Linking.openSettings();
      return;
    }
    saveWallpaper({
      imageUrl: scene.imageUrl,
      title: scene.title,
      epigraph: `${getEra(scene.eraId).name} · ${scene.historicalDateLabel}`,
      credit: scene.artCredit,
    });
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
      <View style={styles.row}>
        <PressableScale
          onPress={handleSave}
          haptic={false}
          accessibilityRole="button"
          accessibilityLabel={saved ? 'Remove from collection' : 'Save to collection'}
          style={[styles.action, saved && styles.actionActive]}
        >
          <AppText variant="buttonSm" color={saved ? colors.emberGold : colors.textSecondary}>
            {saved ? '◆ In gallery' : '◇ Save'}
          </AppText>
        </PressableScale>
        <PressableScale
          onPress={() => void handleHd()}
          haptic={false}
          accessibilityRole="button"
          accessibilityLabel="Save the painting to Photos in full resolution"
          style={[styles.action, hdState === 'saved' && styles.actionActive]}
        >
          <AppText
            variant="buttonSm"
            numberOfLines={1}
            color={hdState === 'saved' ? colors.emberGold : colors.textSecondary}
          >
            {HD_LABEL[hdState]}
          </AppText>
        </PressableScale>
        <PressableScale
          onPress={handleShare}
          accessibilityRole="button"
          accessibilityLabel="Share this scene"
          style={styles.action}
        >
          <AppText variant="buttonSm" color={colors.textSecondary}>
            Share
          </AppText>
        </PressableScale>
      </View>
      <PressableScale
        onPress={handleWallpaper}
        haptic={false}
        accessibilityRole="button"
        accessibilityLabel="Save this painting as a wallpaper"
        style={[styles.wallpaper, wallpaperState === 'saved' && styles.actionActive]}
      >
        <AppText
          variant="buttonSm"
          numberOfLines={1}
          color={wallpaperState === 'saved' ? colors.emberGold : colors.textSecondary}
        >
          {WALLPAPER_LABEL[wallpaperState]}
        </AppText>
      </PressableScale>
      {wallpaperState === 'saved' ? (
        <AppText variant="caption" color={colors.textTertiary} style={styles.wallpaperHint}>
          Open Photos, tap Share, choose Use as Wallpaper.
        </AppText>
      ) : null}
      {shareCardElement}
      {wallpaperElement}
    </>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  wallpaper: {
    marginTop: spacing.sm,
    height: 46,
    borderRadius: radius.pill,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.strokeHairline,
    backgroundColor: colors.bgElevated,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wallpaperHint: {
    marginTop: spacing.xs,
    textAlign: 'center',
  },
  action: {
    flex: 1,
    height: 46,
    borderRadius: radius.pill,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.strokeHairline,
    backgroundColor: colors.bgElevated,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionActive: {
    borderColor: withAlpha(colors.emberGold, 0.45),
    backgroundColor: withAlpha(colors.emberDeep, 0.12),
  },
});
