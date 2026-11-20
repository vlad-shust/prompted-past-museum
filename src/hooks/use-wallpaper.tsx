import { File } from 'expo-file-system';
import { useRef, useState } from 'react';
import { Dimensions } from 'react-native';
import type { ReactElement } from 'react';

import { WallpaperCard } from '@/components/share/wallpaper-card';
import type { WallpaperPayload, WallpaperState } from '@/components/share/wallpaper-card.types';
import { savePhotoFile } from '@/lib/hd-download';

/**
 * Renders the painting offscreen at screen size, captures it at native
 * resolution, and puts it in Photos. Render `wallpaperElement` in the screen
 * tree; iOS has no API to set a wallpaper, so Photos is the handoff.
 */
export function useWallpaper(): {
  save: (payload: WallpaperPayload) => void;
  state: WallpaperState;
  wallpaperElement: ReactElement | null;
} {
  const [payload, setPayload] = useState<WallpaperPayload | null>(null);
  const [state, setState] = useState<WallpaperState>('idle');
  // A ref, not the state: two taps in one frame would both read a stale 'idle'.
  const busyRef = useRef(false);

  const save = (next: WallpaperPayload) => {
    if (busyRef.current) return;
    busyRef.current = true;
    setState('rendering');
    setPayload(next);
  };

  const handleCaptured = async (uri: string | null) => {
    setPayload(null);
    if (uri === null) {
      busyRef.current = false;
      setState('failed');
      return;
    }
    setState(await savePhotoFile(uri));
    busyRef.current = false;
    try {
      new File(uri).delete();
    } catch {
      // The capture lives in the cache directory; iOS reclaims it either way.
    }
  };

  const screen = Dimensions.get('screen');

  return {
    save,
    state,
    wallpaperElement: payload ? (
      <WallpaperCard
        payload={payload}
        screen={{ width: screen.width, height: screen.height }}
        onCaptured={(uri) => void handleCaptured(uri)}
      />
    ) : null,
  };
}
