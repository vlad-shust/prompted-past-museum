import { File, Paths } from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

import type { PhotoSaveOutcome } from './hd-download.types';

/** A file already on disk (a capture, a download) into Photos. */
export async function savePhotoFile(uri: string): Promise<PhotoSaveOutcome> {
  try {
    const permission = await MediaLibrary.requestPermissionsAsync(true);
    if (!permission.granted) return 'denied';
    await MediaLibrary.Asset.create(uri);
    return 'saved';
  } catch {
    return 'failed';
  }
}

/** Member perk: the full-resolution painting straight into Photos. */
export async function saveImageToPhotos(imageUrl: string): Promise<PhotoSaveOutcome> {
  try {
    // Ask before spending the download: a denial here saves megabytes.
    const permission = await MediaLibrary.requestPermissionsAsync(true);
    if (!permission.granted) return 'denied';
    const target = new File(Paths.cache, `prompted-past-${Date.now()}.jpg`);
    const downloaded = await File.downloadFileAsync(imageUrl, target);
    const outcome = await savePhotoFile(downloaded.uri);
    downloaded.delete();
    return outcome;
  } catch {
    return 'failed';
  }
}
