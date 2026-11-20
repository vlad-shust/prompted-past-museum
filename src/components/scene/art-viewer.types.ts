export interface ArtViewerProps {
  imageUrl: string;
  /** Width over height of the painting, null until the still has been read. */
  aspect: number | null;
  /** Museum-label line under the painting, e.g. the title. */
  title: string;
  visible: boolean;
  onClose: () => void;
}
