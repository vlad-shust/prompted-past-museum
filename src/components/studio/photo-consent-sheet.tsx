import { Linking, Modal, Pressable, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { AppText } from '@/components/ui/app-text';
import { EmberButton } from '@/components/ui/ember-button';
import { PressableScale } from '@/components/ui/pressable-scale';
import { colors, radius, spacing, withAlpha } from '@/theme';
import type { PhotoConsentSheetProps } from './photo-consent-sheet.types';

export const PRIVACY_URL = 'https://promptedpast.app/privacy';

/** Asked once, before the first photo leaves the device for the Studio. */
export function PhotoConsentSheet({ visible, onAgree, onCancel }: PhotoConsentSheetProps) {
  const insets = useSafeAreaInsets();
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onCancel}>
      <Pressable style={styles.backdrop} onPress={onCancel} accessibilityLabel="Close" />
      <View style={[styles.sheet, { paddingBottom: insets.bottom + spacing.xl }]}>
        <AppText variant="title" color={colors.textPrimary}>
          Before you choose a painting
        </AppText>
        <AppText variant="bodySm" color={colors.textSecondary}>
          To bring your painting to life, the photo you pick is sent to xAI, which makes the moving
          clip. We keep it with your piece so you can come back to it. Nothing else from your
          library leaves your phone.
        </AppText>
        <PressableScale
          onPress={() => void Linking.openURL(PRIVACY_URL)}
          accessibilityRole="link"
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <AppText variant="caption" color={colors.emberGold} style={styles.link}>
            Read our Privacy Policy
          </AppText>
        </PressableScale>
        <View style={styles.actions}>
          <EmberButton label="Agree" onPress={onAgree} />
          <EmberButton label="Cancel" variant="ghost" onPress={onCancel} />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: { flex: 1, backgroundColor: withAlpha(colors.bgViewer, 0.6) },
  sheet: {
    backgroundColor: colors.bgElevated,
    borderTopLeftRadius: radius.lg,
    borderTopRightRadius: radius.lg,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: colors.strokeHairline,
    paddingHorizontal: spacing.xl,
    paddingTop: spacing.xl,
    gap: spacing.md,
  },
  link: { textDecorationLine: 'underline' },
  actions: { gap: spacing.xs, marginTop: spacing.xs },
});
