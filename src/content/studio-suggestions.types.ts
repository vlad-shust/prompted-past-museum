/** A close look the studio offers on a house painting. */
export interface SuggestionDetailDef {
  id: string;
  /** Normalized focus center, 0-1 from the image's top-left. */
  x: number;
  y: number;
  /** Magnification relative to the cover-fitted image. */
  scale: number;
  caption: string;
}

export interface StillSize {
  width: number;
  height: number;
}

/** A curated painting offered to visitors who arrive without one of their own. */
export interface StudioSuggestionDef {
  id: string;
  title: string;
  artist: string;
  year: string;
  imageUrl: string;
  /** The still's pixel size on the bucket: the wall hangs each work at its own proportion. */
  still: StillSize;
  /**
   * Pre-staged clip's path in the media bucket; absent until the clip is
   * uploaded. When replacing a clip under the same filename, bump a `?v=`
   * suffix: the player caches by URL and keeps serving the old copy otherwise.
   */
  videoFile?: string;
  /** What this painting has in common with others on the wall, for the related shelf. */
  tags?: readonly string[];
  /** The painting's story, told on the alive piece screen. */
  story: string;
  details: readonly SuggestionDetailDef[];
}
