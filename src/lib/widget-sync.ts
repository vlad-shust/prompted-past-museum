import { startOfTomorrow } from 'date-fns';
import { File, Paths } from 'expo-file-system';
import { Platform } from 'react-native';

import { dailySceneWidget } from '@/widgets/daily-scene-widget';
import type { Scene } from '@/types/domain.types';
import { formatYearsAgo, onThisDayYears } from '@/utils/on-this-day';

export const APP_GROUP = 'group.com.vladshusterman.promptedpast';

/** The tap opens the Today tab, which hangs the same lesson under the wall's
 *  own gating; the scene route locks a work the visitor has not finished. */
const WIDGET_LINK = 'promptedpast:///';

let lastSyncedSceneId: string | null = null;

/**
 * Mirrors today's scene into the home-screen widget: caches the painting
 * in the shared App Group container (widget processes can't fetch the
 * network reliably) and pushes a timeline entry. Fire-and-forget.
 */
export async function syncWidgetWithScene(scene: Scene): Promise<void> {
  if (Platform.OS !== 'ios' || !dailySceneWidget || lastSyncedSceneId === scene.id) return;
  try {
    const container = Paths.appleSharedContainers[APP_GROUP];
    if (!container) return;

    const imageFile = new File(container, 'today.jpg');
    if (imageFile.exists) imageFile.delete();
    const downloaded = await File.downloadFileAsync(scene.thumbUrl, imageFile);

    const yearsAgo = onThisDayYears(scene);
    dailySceneWidget.updateTimeline([
      {
        date: new Date(),
        props: {
          title: scene.title,
          dateLabel:
            yearsAgo !== null
              ? `${formatYearsAgo(yearsAgo)} ${yearsAgo === 1 ? 'year' : 'years'} ago today`
              : scene.historicalDateLabel,
          imageUri: downloaded.uri,
          linkUrl: WIDGET_LINK,
        },
      },
      {
        // At midnight this painting stops being today's. The tile asks to be
        // opened rather than hanging yesterday's work as if it were current.
        date: startOfTomorrow(),
        props: { title: '', dateLabel: '', imageUri: '', linkUrl: WIDGET_LINK },
      },
    ]);
    lastSyncedSceneId = scene.id;
  } catch (error) {
    console.warn('[widget] sync failed:', error instanceof Error ? error.message : error);
  }
}
