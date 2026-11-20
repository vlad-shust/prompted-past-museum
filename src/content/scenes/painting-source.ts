import { paintingUrl } from '../../lib/env';
import { STILL_REVISIONS } from './still-revisions';

/** Paintings bucket origin, read from env. Empty by default (no remote bucket configured). */
const PAINTINGS_BUCKET = (process.env.EXPO_PUBLIC_PAINTINGS_BASE_URL ?? '').replace(/\/+$/, '');

/**
 * A still replaced in place on R2 keeps its key, so it carries a `?v=`
 * revision: expo-image, browsers and the Next image optimizer all cache by
 * URL and would otherwise keep serving the old bytes.
 */
export function bucketPainting(file: string): string {
  const url = paintingUrl(file, `${PAINTINGS_BUCKET}/${file}`);
  const revision = STILL_REVISIONS[file];
  return revision === undefined ? url : `${url}?v=${revision}`;
}

function withoutRevision(url: string): string {
  const query = url.indexOf('?');
  return query === -1 ? url : url.slice(0, query);
}

/**
 * The same still whatever revision each URL carries. Studio pieces persist
 * the URL they were opened with, so a bumped revision must still match them.
 */
export function sameStill(a: string, b: string): boolean {
  return withoutRevision(a) === withoutRevision(b);
}
