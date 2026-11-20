import type { EraId, ForgeId, IsoDate, MonthDay, SceneId, StudioPieceId } from './common.types';

/**
 * Rough geography/world the era's story plays out in. Coarse on purpose —
 * this is a recommendation signal, not a map. Two eras sharing a region
 * read as "the same part of the world, a different chapter."
 */
export type EraRegion =
  | 'mediterranean-world'
  | 'western-europe'
  | 'northern-europe'
  | 'east-asia'
  | 'atlantic-world'
  | 'global';

/**
 * What an era is "about", for matching purposes. An era carries several —
 * the overlap between two eras' theme sets is the content-similarity signal
 * the recommender leans on most, e.g. Medieval Europe and Feudal Japan
 * share `feudalism`, `warfare` and `religion` despite opposite ends of the
 * map.
 */
export type EraTheme =
  | 'monarchy'
  | 'religion'
  | 'architecture'
  | 'philosophy-ideas'
  | 'warfare'
  | 'trade'
  | 'empire'
  | 'seafaring'
  | 'exploration'
  | 'feudalism'
  | 'crisis-collapse'
  | 'art-innovation'
  | 'revolution'
  | 'industry';

export interface Era {
  id: EraId;
  name: string;
  shortName: string;
  /** Negative years are BCE. */
  startYear: number;
  endYear: number;
  /** One-line atmosphere shown in the Forge era picker. */
  mood: string;
  /** 2 or 3 plain sentences at the door: what happened, where it ends. */
  intro: string;
  sort: number;
  /** Coarse geography, for "elsewhere in the world at the same kind of moment" matches. */
  region: EraRegion;
  /** 3-5 tags describing what the era is about; the recommender's main similarity signal. */
  themes: readonly EraTheme[];
}

/** How a work comes alive: a pre-rendered clip, or client-side subtle motion over the still. */
export type AnimationSource =
  | { kind: 'living-still' }
  | { kind: 'video'; url: string };

export interface DetailFocus {
  /** Normalized center of the region, 0-1 from the image's top-left. */
  x: number;
  y: number;
  /** Magnification relative to the cover-fitted image. */
  scale: number;
}

/** A close look the curator wants you to take: a region of the painting and why it matters. */
export interface SceneDetail {
  id: string;
  focus: DetailFocus;
  /** 1-2 sentences, museum-label voice. */
  caption: string;
}

export interface Scene {
  id: SceneId;
  slug: string;
  title: string;
  /** One-line subtitle under the title. */
  dek: string;
  /** ~150-word story of the moment. */
  story: string;
  eraId: EraId;
  /** Prose date as displayed, e.g. "24 August, AD 79". */
  historicalDateLabel: string;
  /** Year for timeline positioning; negative is BCE. */
  historicalYear: number;
  /** Calendar anniversary of the moment, when the sources give an exact day. */
  historicalMonthDay: MonthDay | null;
  /** The calendar day this was (or will be) the daily scene. */
  publishedOn: IsoDate;
  imageUrl: string;
  thumbUrl: string;
  /** The painting's own title, when it differs from the lesson's. */
  artTitle?: string;
  /** Painter credit for mock/public-domain art; live scenes omit it. */
  artCredit?: string;
  blurhash?: string;
  /** True when the scene is tied to today's real calendar date. */
  onThisDay: boolean;
  /** Credit for scenes commissioned through the channels, e.g. a viewer's handle. */
  commissionedBy?: string;
  /** Curator close-looks under the painting; empty when none are written. */
  details?: SceneDetail[];
  /** How "Step into the art" plays for this scene. */
  animation?: AnimationSource;
}

/** The era a whole month belongs to — one era, thirty days deep. */
export interface Season {
  year: number;
  /** 1–12. */
  month: number;
  eraId: EraId;
  title: string;
}

/** The hour and weather the scene is lit by. */
export type ForgeLight = 'dawn' | 'golden-hour' | 'candlelight' | 'moonlight' | 'storm-light' | 'fog';

/** The emotional register of the scene. */
export type ForgeMood = 'serene' | 'ominous' | 'triumphant' | 'melancholy' | 'wondrous' | 'tense';

/** Where the viewer stands — framing and vantage. */
export type ForgeEye = 'up-close' | 'wide-vista' | 'from-above' | 'from-the-ground';

export interface ForgeSubmission {
  eraId: EraId;
  /** The user's scene description — never a raw model prompt. */
  description: string;
  /** Treatment tweaks; null means the forge decides. */
  light: ForgeLight | null;
  mood: ForgeMood | null;
  eye: ForgeEye | null;
}

export type ForgeStatus =
  | { phase: 'validating' }
  | { phase: 'generating' }
  | { phase: 'complete'; imageUrl: string; completedAtMs: number }
  | { phase: 'rejected'; reason: string }
  | { phase: 'failed'; message: string };

export interface Forge {
  id: ForgeId;
  eraId: EraId;
  description: string;
  /** Title given by the pipeline once complete. */
  title: string | null;
  createdAtMs: number;
  status: ForgeStatus;
}

export type Membership =
  | { kind: 'free' }
  | { kind: 'trial'; expiresAtMs: number }
  | { kind: 'member'; expiresAtMs: number | null; willRenew: boolean };

export interface ForgeQuota {
  usedToday: number;
  dailyLimit: number;
}

/** Where a piece came from: the visitor's own painting, or the house collection's staged works. */
export type StudioPieceOrigin = 'upload' | 'collection';

export interface StudioSubmission {
  /** Local file URI of the visitor's painting, or the remote URL of a collection work. */
  imageUri: string;
  /** Collection pieces are pre-staged and free: they never touch the paid quota. */
  origin: StudioPieceOrigin;
}

export type StudioStatus =
  | { phase: 'inspecting' }
  | { phase: 'animating' }
  | { phase: 'complete'; animation: AnimationSource; completedAtMs: number }
  | { phase: 'rejected'; reason: string }
  | { phase: 'failed'; message: string };

/** A painting the visitor brought in and asked the studio to wake. */
export interface StudioPiece {
  id: StudioPieceId;
  imageUri: string;
  createdAtMs: number;
  /** Free-tier pieces carry the wordmark on export. */
  watermarked: boolean;
  status: StudioStatus;
}

/** How many house-collection wakes a visitor gets: members unlimited, visitors one. */
export type CollectionWakeQuota = { kind: 'unlimited' } | { kind: 'metered'; limit: number };

/** The visitor's ledger of house-collection wakes against that quota. */
export interface CollectionWakeState {
  used: number;
  quota: CollectionWakeQuota;
}

/** The studio's pay-per-piece currency: one commission wakes one painting of your own. */
export interface CommissionLedger {
  /** Commissions bought or granted and not yet spent. */
  available: number;
}
