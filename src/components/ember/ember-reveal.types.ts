export interface EmberRevealProps {
  imageUrl: string;
  width: number;
  height: number;
  /** Play the ceremonial burn reveal (first open). False renders the image plainly. */
  active: boolean;
  onRevealComplete?: () => void;
}
