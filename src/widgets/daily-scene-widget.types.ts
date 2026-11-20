export interface DailySceneWidgetProps {
  title: string;
  dateLabel: string;
  /** file:// URI inside the shared App Group container, or empty string. */
  imageUri: string;
  /** Deep link the whole widget opens; empty leaves the tap to the app icon. */
  linkUrl: string;
}
