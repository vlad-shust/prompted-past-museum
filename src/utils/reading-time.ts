import type { Scene } from '@/types/domain.types';

/** Serif long-form on a phone reads slower than web copy. */
const WORDS_PER_MINUTE = 210;

function countWords(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

/** Whole-visit estimate: dek, story, and the look-closer captions. */
export function readingMinutes(scene: Scene): number {
  const words =
    countWords(scene.dek) +
    countWords(scene.story) +
    (scene.details ?? []).reduce((sum, detail) => sum + countWords(detail.caption), 0);
  return Math.max(1, Math.round(words / WORDS_PER_MINUTE));
}
