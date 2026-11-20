import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image } from 'expo-image';
import * as ImagePicker from 'expo-image-picker';
import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, ScrollView, StyleSheet, View, useWindowDimensions } from 'react-native';

import { EmptyFrame } from '@/components/studio/frame';
import { PhotoConsentSheet } from '@/components/studio/photo-consent-sheet';
import { AppText } from '@/components/ui/app-text';
import { EmberButton } from '@/components/ui/ember-button';
import { Hairline } from '@/components/ui/hairline';
import { PressableScale } from '@/components/ui/pressable-scale';
import { Screen } from '@/components/ui/screen';
import { COMMISSION_PACKS, commissionPack, SINGLE_COMMISSION } from '@/content/membership';
import { houseWorkFor } from '@/content/studio-suggestions';
import {
  useCommissionPrices,
  useCommissions,
  usePurchaseCommission,
  useStudioPieces,
  useSubmitStudioPiece,
} from '@/hooks/use-studio';
import { useMembershipStore } from '@/stores/membership.store';
import { colors, radius, spacing, withAlpha } from '@/theme';
import { isMember } from '@/utils/access';
import { onEasel } from '@/utils/easel';
import type { CommissionPackId } from '@/content/membership.types';
import type { CommissionLedger, StudioPiece } from '@/types/domain.types';

/** An upload spends a commission, so it stops for one before the studio takes it. */
type CommissionDraft = { step: 'choosing' } | { step: 'confirming'; imageUri: string };

/**
 * Membership is the museum's front door, so the studio never re-sells it:
 * it states its own terms, one price fact at a time.
 */
function commissionLine(ledger: CommissionLedger, member: boolean, price: string | null): string | null {
  if (ledger.available > 0) {
    return ledger.available === 1 ? 'One commission ready.' : `${ledger.available} commissions ready.`;
  }
  if (!price) return member ? null : 'Membership brings one a month.';
  return member
    ? `A commission is ${price}.`
    : `A commission is ${price}. Membership brings one a month.`;
}

/** Collection pieces carry their painting's name; uploads stay the visitor's own. */
function pieceTitle(piece: StudioPiece): string {
  const suggestion = houseWorkFor(piece.imageUri);
  return suggestion ? suggestion.title : 'Your painting';
}

function statusLine(piece: StudioPiece): string {
  switch (piece.status.phase) {
    case 'inspecting':
      return 'Under inspection';
    case 'animating':
      return 'Waking';
    case 'complete':
      return 'Alive';
    case 'rejected':
      return 'Turned away';
    case 'failed':
      return 'Went dark';
    default: {
      const exhaustive: never = piece.status;
      throw new Error(`Unhandled studio phase: ${JSON.stringify(exhaustive)}`);
    }
  }
}

export default function CommissionScreen() {
  const { width } = useWindowDimensions();
  const [draft, setDraft] = useState<CommissionDraft>({ step: 'choosing' });
  // Sizes are offered only at the till, and the smallest is always preselected:
  // one tap still buys 1, exactly as it did before packs existed.
  const [packId, setPackId] = useState<CommissionPackId>('single');
  const { data: ledger } = useCommissions();
  const { data: pieces } = useStudioPieces();
  const membership = useMembershipStore((state) => state.membership);
  const submitPiece = useSubmitStudioPiece();
  const purchase = usePurchaseCommission();
  const { data: prices } = useCommissionPrices();
  // Store prices only: no price is shown until the store has answered.
  const priceFor = (id: CommissionPackId): string | null => prices?.[id] ?? null;
  // Mount-time clock is plenty for a 24-hour failure window.
  const [easelNow] = useState(() => Date.now());

  const member = isMember(membership);
  const selectedPack = commissionPack(packId);
  const easel = (pieces ?? []).filter((piece) => onEasel(piece, easelNow));
  // The ledger spends server-side on success; here a missing commission is
  // bought in the same gesture that spends it.
  const needsCommission = (ledger?.available ?? 0) === 0;
  const frameWidth = width - spacing.xl * 2 - spacing.huge;

  const [consentOpen, setConsentOpen] = useState(false);

  const openPicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      quality: 0.92,
    });
    if (result.canceled) return;
    const asset = result.assets[0];
    if (asset) setDraft({ step: 'confirming', imageUri: asset.uri });
  };

  // The first pick asks before any photo leaves the phone; Agree is remembered.
  const pickPainting = async () => {
    const agreed = (await AsyncStorage.getItem(PHOTO_CONSENT_KEY)) === 'agreed';
    if (agreed) {
      await openPicker();
      return;
    }
    setConsentOpen(true);
  };

  const agreeToPhotoUse = async () => {
    setConsentOpen(false);
    await AsyncStorage.setItem(PHOTO_CONSENT_KEY, 'agreed');
    await openPicker();
  };

  const resetDraft = () => {
    setPackId('single');
    setDraft({ step: 'choosing' });
  };

  const confirmDraft = async (imageUri: string) => {
    if (needsCommission) {
      try {
        await purchase.mutateAsync(packId);
      } catch (error) {
        const code = error instanceof Error ? error.message : '';
        if (code === 'commission_purchase_cancelled') return;
        if (code === 'commission_identity_failed') {
          Alert.alert(
            'The studio could not reach your account',
            'Nothing was charged. Check your connection and try again.',
          );
          return;
        }
        const pending = code === 'commission_credits_pending';
        if (pending) {
          Alert.alert(
            'Purchase received',
            'Your credits may take a moment to appear. Come back to this painting shortly.',
          );
          return;
        }
        Alert.alert('The studio went dark', 'The purchase didn’t go through. Try again.');
        return;
      }
    }
    try {
      const piece = await submitPiece.mutateAsync({ imageUri, origin: 'upload' });
      resetDraft();
      // The till closes behind the visitor; the piece opens over the studio.
      router.replace({ pathname: '/studio-piece/[id]', params: { id: piece.id } });
    } catch {
      // The confirm step stays so the same painting can be tried again.
      Alert.alert('The studio went dark', "Your painting couldn't be taken in. Try again.");
    }
  };

  return (
    <Screen scroll={false} padded={false} edges={['top']}>
      <View style={styles.header}>
        <View>
          <AppText variant="title" color={colors.textPrimary}>
            The commission
          </AppText>
          <AppText variant="epigraph" color={colors.emberGold}>
            nothing is repainted
          </AppText>
        </View>
        <PressableScale
          onPress={() => router.back()}
          accessibilityRole="button"
          accessibilityLabel="Close the commission"
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        >
          <AppText variant="buttonSm" color={withAlpha(colors.textPrimary, 0.8)}>
            Done
          </AppText>
        </PressableScale>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.content}>
        {draft.step === 'choosing' ? (
          <View style={styles.choosing}>
            <EmptyFrame
              width={frameWidth}
              height={Math.round((frameWidth * 3) / 4)}
              onPress={() => void pickPainting()}
              accessibilityLabel="Choose a painting from your photos"
            />
            <AppText variant="caption" color={colors.textSecondary} style={styles.centred}>
              Your own painting, set in motion.
            </AppText>
            <EmberButton
              label="Choose a painting"
              onPress={() => void pickPainting()}
              style={styles.cta}
            />
            {ledger && commissionLine(ledger, member, priceFor(SINGLE_COMMISSION.id)) ? (
              <AppText variant="micro" color={colors.textTertiary} style={styles.priceLine}>
                {commissionLine(ledger, member, priceFor(SINGLE_COMMISSION.id))?.toUpperCase()}
              </AppText>
            ) : null}
          </View>
        ) : (
          <View style={styles.confirming}>
            <Image
              source={{ uri: draft.imageUri }}
              style={styles.preview}
              contentFit="cover"
              accessibilityLabel="Your chosen painting"
            />
            <AppText variant="caption" color={colors.textSecondary} style={styles.centred}>
              The studio chooses how this one wakes.
            </AppText>
            {needsCommission ? (
              <View style={styles.packs}>
                <View style={styles.packRow}>
                  {COMMISSION_PACKS.map((pack) => {
                    const chosen = pack.id === packId;
                    return (
                      <PressableScale
                        key={pack.id}
                        onPress={() => setPackId(pack.id)}
                        accessibilityRole="radio"
                        accessibilityState={{ selected: chosen }}
                        accessibilityLabel={
                          priceFor(pack.id) ? `${pack.count} for ${priceFor(pack.id)}` : `${pack.count}`
                        }
                        style={[styles.pack, chosen ? styles.packChosen : null]}
                      >
                        <AppText
                          variant="cardTitle"
                          color={chosen ? colors.textPrimary : colors.textSecondary}
                        >
                          {pack.count}
                        </AppText>
                        <AppText
                          variant="micro"
                          color={chosen ? colors.emberGold : colors.textTertiary}
                        >
                          {priceFor(pack.id) ?? ' '}
                        </AppText>
                      </PressableScale>
                    );
                  })}
                </View>
                {selectedPack.count > 1 ? (
                  <AppText variant="micro" color={colors.textTertiary} style={styles.centred}>
                    {`The other ${selectedPack.count - 1} wait for your next painting.`}
                  </AppText>
                ) : null}
              </View>
            ) : null}
            <EmberButton
              label={
                needsCommission
                  ? priceFor(packId)
                    ? `Commission it · ${priceFor(packId)}`
                    : 'Commission it'
                  : 'Bring it to life'
              }
              onPress={() => void confirmDraft(draft.imageUri)}
              loading={submitPiece.isPending || purchase.isPending}
            />
            <EmberButton label="Choose another" variant="ghost" small onPress={resetDraft} />
          </View>
        )}

        {easel.length > 0 ? (
          <>
            <View style={styles.shelfHeader}>
              <Hairline style={styles.shelfLine} />
              <AppText variant="sectionHeader" color={colors.textTertiary}>
                ON THE EASEL
              </AppText>
              <Hairline style={styles.shelfLine} />
            </View>
            <View style={styles.pieces}>
              {easel.map((piece) => (
                <PressableScale
                  key={piece.id}
                  onPress={() =>
                    router.push({ pathname: '/studio-piece/[id]', params: { id: piece.id } })
                  }
                  accessibilityRole="button"
                  accessibilityLabel={`${pieceTitle(piece)}, ${statusLine(piece)}`}
                  style={styles.pieceRow}
                >
                  <Image source={{ uri: piece.imageUri }} style={styles.pieceThumb} contentFit="cover" />
                  <View style={styles.rowText}>
                    <AppText variant="cardTitle" color={colors.textPrimary}>
                      {pieceTitle(piece)}
                    </AppText>
                    <AppText variant="caption" color={colors.textSecondary}>
                      {statusLine(piece)}
                    </AppText>
                  </View>
                </PressableScale>
              ))}
            </View>
          </>
        ) : null}
      </ScrollView>
      <PhotoConsentSheet
        visible={consentOpen}
        onAgree={() => void agreeToPhotoUse()}
        onCancel={() => setConsentOpen(false)}
      />
    </Screen>
  );
}

const PHOTO_CONSENT_KEY = 'studio.photoConsent.v1';

const styles = StyleSheet.create({
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
  },
  choosing: {
    alignItems: 'center',
    gap: spacing.lg,
    paddingTop: spacing.md,
  },
  centred: {
    textAlign: 'center',
  },
  cta: {
    alignSelf: 'stretch',
  },
  priceLine: {
    textAlign: 'center',
    letterSpacing: 1.2,
  },
  confirming: {
    gap: spacing.lg,
    paddingTop: spacing.md,
  },
  preview: {
    width: '100%',
    aspectRatio: 4 / 3,
    borderRadius: radius.lg,
    backgroundColor: colors.bgElevated,
  },
  packs: {
    gap: spacing.sm,
  },
  packRow: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  pack: {
    flex: 1,
    alignItems: 'center',
    gap: 2,
    paddingVertical: spacing.sm,
    borderRadius: radius.md,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.strokeHairline,
    backgroundColor: colors.bgElevated,
  },
  packChosen: {
    borderColor: withAlpha(colors.emberGold, 0.5),
    backgroundColor: colors.bgRaised,
  },
  shelfHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    marginTop: spacing.xxl,
    marginBottom: spacing.md,
  },
  shelfLine: {
    flex: 1,
    opacity: 0.7,
  },
  pieces: {
    gap: spacing.sm,
  },
  pieceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    padding: spacing.sm,
    borderRadius: radius.lg,
    backgroundColor: colors.bgElevated,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.strokeHairline,
  },
  pieceThumb: {
    width: 56,
    height: 56,
    borderRadius: radius.md,
    backgroundColor: colors.bgRaised,
  },
  rowText: {
    gap: spacing.xxs,
    flexShrink: 1,
    paddingRight: spacing.md,
  },
});
