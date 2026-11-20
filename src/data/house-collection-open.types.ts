/** How live `submitStudioPiece` must open a studio work. */
export type StudioSubmitRoute =
  | {
      action: 'serve-pre-staged';
      suggestionId: string;
      videoFile: string;
    }
  | { action: 'invoke-studio-animate' };
