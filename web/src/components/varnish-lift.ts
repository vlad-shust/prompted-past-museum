import type { LiftFrame, LiftOrigin, WakePoint, Wander } from './varnish-lift.types';

/**
 * The web port of the app's varnish lift: old varnish gathers on the still,
 * then a damp cloth crosses it from the curator's focus, and behind the edge
 * the clip shows through. Every pixel drawn is the painter's; the pass only
 * removes. Drawn with 2D canvas because the bucket sends no CORS headers, so
 * a WebGL texture of the still would be tainted.
 */

/** The room dims before anything is touched. */
export const DIM_MS = 600;
/** The cloth crosses the canvas at one speed. The one deliberately slow beat. */
export const SWEEP_MS = 2_200;

const TAU = Math.PI * 2;
/** The feather is built from rings, each erased a step deeper than the last. */
const RINGS = 24;
const VERTICES = 360;

function smoothstep(t: number): number {
  const x = Math.min(1, Math.max(0, t));
  return x * x * (3 - 2 * x);
}

/** Cover-fit, as the video and the still both are. */
function coverBox(image: HTMLImageElement, frame: LiftFrame) {
  const scale = Math.max(frame.width / image.naturalWidth, frame.height / image.naturalHeight);
  const width = image.naturalWidth * scale;
  const height = image.naturalHeight * scale;
  return { x: (frame.width - width) / 2, y: (frame.height - height) / 2, width, height };
}

/** Where the focus lands on the canvas, and the distance to the furthest corner. */
export function liftOrigin(image: HTMLImageElement, frame: LiftFrame, focus: WakePoint | undefined): LiftOrigin {
  const box = coverBox(image, frame);
  const x = box.x + (focus?.x ?? 0.5) * box.width;
  const y = box.y + (focus?.y ?? 0.5) * box.height;
  const span = Math.max(
    Math.hypot(x, y),
    Math.hypot(frame.width - x, y),
    Math.hypot(x, frame.height - y),
    Math.hypot(frame.width - x, frame.height - y),
  );
  return { x, y, span };
}

/** 3 sines with phases fixed per wake: a circle roughed up so it reads as a cloth pass, not a wipe. */
export function makeWander(): Wander {
  const phase = [0, 1, 2].map(() => Math.random() * TAU);
  return (theta, radius) =>
    Math.sin(theta * 3 + phase[0] + radius * 0.002) * 0.5 +
    Math.sin(theta * 5 + phase[1] - radius * 0.003) * 0.3 +
    Math.sin(theta * 8 + phase[2] + radius * 0.004) * 0.2;
}

export function drawLift(
  ctx: CanvasRenderingContext2D,
  image: HTMLImageElement,
  frame: LiftFrame,
  origin: LiftOrigin,
  wander: Wander,
  varnish: number,
  progress: number,
): void {
  const { width, height } = frame;
  const box = coverBox(image, frame);

  ctx.globalCompositeOperation = 'source-over';
  ctx.clearRect(0, 0, width, height);
  ctx.drawImage(image, box.x, box.y, box.width, box.height);

  if (varnish > 0) {
    // Aged varnish is warm, and it lifts the blacks by scattering the light.
    ctx.globalCompositeOperation = 'multiply';
    ctx.fillStyle = `rgb(255, ${Math.round(255 - 10 * varnish)}, ${Math.round(255 - 36 * varnish)})`;
    ctx.fillRect(0, 0, width, height);
    ctx.globalCompositeOperation = 'lighter';
    ctx.fillStyle = `rgb(${Math.round(6 * varnish)}, ${Math.round(5 * varnish)}, ${Math.round(3 * varnish)})`;
    ctx.fillRect(0, 0, width, height);
  }

  if (progress <= 0) return;

  // The front starts at the focus itself and its trailing band follows, so
  // every millisecond of the pass moves visible paint.
  const band = origin.span * 0.17;
  const front = progress * (origin.span + band);

  // The whole feather band is displaced by the wander, so the edge stays
  // rough all the way through instead of only at its outer line. The
  // roughness grows in with the front: a rough edge on a tiny circle is a star.
  const roughness = band * 0.6 * smoothstep(front / band);
  const shift: number[] = [];
  for (let k = 0; k <= VERTICES; k += 1) {
    shift.push(wander((k / VERTICES) * TAU, front) * roughness);
  }

  ctx.globalCompositeOperation = 'destination-out';
  let remaining = 1;
  for (let j = 0; j < RINGS; j += 1) {
    const erased = j === RINGS - 1 ? 1 : smoothstep((j + 0.5) / RINGS);
    const alpha = 1 - (1 - erased) / remaining;
    remaining = 1 - erased;
    const inset = (j * band) / RINGS;
    ctx.fillStyle = `rgba(0, 0, 0, ${alpha})`;
    ctx.beginPath();
    for (let k = 0; k <= VERTICES; k += 1) {
      const theta = (k / VERTICES) * TAU;
      const radius = Math.max(0, front - shift[k] - inset);
      const x = origin.x + Math.cos(theta) * radius;
      const y = origin.y + Math.sin(theta) * radius;
      if (k === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.closePath();
    ctx.fill();
  }

  // Under the cloth the surface is damp: a thin warm gleam rides the edge.
  ctx.globalCompositeOperation = 'source-atop';
  const gleam = ctx.createRadialGradient(origin.x, origin.y, Math.max(0, front - band), origin.x, origin.y, front + 1);
  gleam.addColorStop(0, 'rgba(51, 43, 33, 0)');
  gleam.addColorStop(0.5, 'rgba(51, 43, 33, 0.35)');
  gleam.addColorStop(1, 'rgba(51, 43, 33, 0)');
  ctx.fillStyle = gleam;
  ctx.fillRect(0, 0, width, height);
}
