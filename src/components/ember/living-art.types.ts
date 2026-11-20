export interface LivingArtProps {
  imageUrl: string;
  width: number;
  height: number;
  /** Motion plays only while true; false renders the still. */
  active: boolean;
  /** Allow pinch and pan. The first touch stops the drift and hands over. */
  zoomable?: boolean;
  /** cover crops into the frame (default); contain shows the whole painting. */
  fit?: 'cover' | 'contain';
  /** The frame hangs sideways on a turned stage, so finger travel is remapped. */
  turned?: boolean;
}
