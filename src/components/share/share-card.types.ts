export interface SharePayload {
  imageUrl: string;
  title: string;
  /** "Ancient Rome · 24 August, AD 79" or "Feudal Japan · your commission". */
  epigraph: string;
  /** Public web page for this scene, once the gallery is deployed. */
  webUrl?: string;
}

export interface ShareCardProps {
  payload: SharePayload;
  /** Called with the captured file URI, or null when capture failed. */
  onCaptured: (uri: string | null) => void;
}
