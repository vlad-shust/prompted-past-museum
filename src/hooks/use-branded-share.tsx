import { useState } from 'react';
import { Share } from 'react-native';
import type { ReactElement } from 'react';

import { ShareCard } from '@/components/share/share-card';
import type { SharePayload } from '@/components/share/share-card.types';

/**
 * Branded sharing: mounts an offscreen ShareCard, captures it, hands the
 * framed image to the share sheet. Render `shareCardElement` somewhere in the
 * screen tree.
 */
export function useBrandedShare(): {
  share: (payload: SharePayload) => void;
  shareCardElement: ReactElement | null;
} {
  const [payload, setPayload] = useState<SharePayload | null>(null);

  const handleCaptured = async (uri: string | null) => {
    const current = payload;
    setPayload(null);
    if (!current) return;
    // Attach the title + web link to the caption so the shared post carries a
    // route back to the museum. Sharing.shareAsync would send the bare JPEG
    // alone (no text), severing the growth loop — so use RN Share, which rides
    // the caption alongside the framed card, and falls back to a link share
    // when the capture failed.
    const message =
      `${current.title} · from prompted.past, a museum that paints one new masterpiece every day.` +
      (current.webUrl ? ` ${current.webUrl}` : '');
    await Share.share(
      uri
        ? { url: uri, message, title: current.title }
        : { message, url: current.webUrl ?? current.imageUrl },
    );
  };

  return {
    share: setPayload,
    shareCardElement: payload ? (
      <ShareCard payload={payload} onCaptured={(uri) => void handleCaptured(uri)} />
    ) : null,
  };
}
