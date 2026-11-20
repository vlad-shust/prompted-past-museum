export interface SceneDraft {
  slug: string;
  title: string;
  dek: string;
  story: string;
  eraId: string;
  historicalDateLabel: string;
  historicalYear: number;
  onThisDay: boolean;
  /**
   * Calendar anniversary "MM-DD" when the date label carries an exact day.
   * Drafts written before this field existed lack it — read with `?? null`.
   */
  historicalMonthDay?: string | null;
  commissionedBy?: string | null;
  imagePrompt: string;
  sourceEvent: string;
  draftedAt: string;
}

/** One candidate event from `suggest --date MM-DD`. */
export interface SceneSuggestion {
  event: string;
  era_id: string;
  year: number;
  date_label: string;
  hook: string;
}

export interface EditorialEnv {
  anthropicKey: string | null;
  falKey: string | null;
  elevenLabsKey: string | null;
  elevenLabsVoiceId: string | null;
  supabaseUrl: string | null;
  supabaseServiceRoleKey: string | null;
  dryRun: boolean;
}
