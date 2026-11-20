'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import { DIM_MS, drawLift, liftOrigin, makeWander, SWEEP_MS } from './varnish-lift';
import type { WakePhase, WakingPictureProps } from './waking-picture.types';

const EAGER_DELAY_MS = 900;
const VIEW_DELAY_MS = 350;
const ARMED_DELAY_MS = 500;
/** Hall stills top out around 1920px; more canvas than that buys nothing. */
const MAX_CANVAS_PX = 2048;

function clamp01(value: number): number {
  return Math.min(1, Math.max(0, value));
}

/**
 * A still that wakes into its film. The clip loads under the varnished still,
 * and once it plays the lift sweeps out from the focus. If the still cannot be
 * drawn (no canvas, image error) the film fades in over it instead.
 */
export function WakingPicture({
  posterUrl,
  videoUrl,
  alt,
  focus,
  eager = false,
  armed,
  paused = false,
  sizes,
  stillClassName,
}: WakingPictureProps) {
  const frameRef = useRef<HTMLDivElement>(null);
  const stillRef = useRef<HTMLImageElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [phase, setPhase] = useState<WakePhase>('still');
  const [lifting, setLifting] = useState(false);
  const focusX = focus?.x;
  const focusY = focus?.y;

  useEffect(() => {
    if (phase !== 'still') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let timer: number | undefined;
    if (armed !== undefined) {
      if (!armed) return;
      timer = window.setTimeout(() => setPhase('waking'), ARMED_DELAY_MS);
      return () => window.clearTimeout(timer);
    }
    if (eager) {
      timer = window.setTimeout(() => setPhase('waking'), EAGER_DELAY_MS);
      return () => window.clearTimeout(timer);
    }
    const frame = frameRef.current;
    if (!frame) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        timer = window.setTimeout(() => setPhase('waking'), VIEW_DELAY_MS);
      },
      { threshold: 0.3 },
    );
    observer.observe(frame);
    return () => {
      observer.disconnect();
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, [armed, eager, phase]);

  useEffect(() => {
    if (phase !== 'living') return;
    const video = videoRef.current;
    if (!video) return;
    if (paused) video.pause();
    else void video.play().catch(() => undefined);
  }, [paused, phase]);

  useEffect(() => {
    if (phase !== 'waking') return;
    const frame = frameRef.current;
    const still = stillRef.current;
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d') ?? null;
    if (!frame || !still || !video) return;

    let cancelled = false;
    let raf = 0;
    let playing = false;
    let stillLost = false;
    let dimStartedAt: number | null = null;
    let sweepStartedAt: number | null = null;
    const wander = makeWander();
    const source = new window.Image();

    const finish = () => {
      if (!cancelled) setPhase('living');
    };

    const tryStartSweep = (now: number) => {
      if (!playing || dimStartedAt === null || sweepStartedAt !== null) return;
      sweepStartedAt = Math.max(now, dimStartedAt + DIM_MS);
    };

    const draw = (now: number) => {
      if (cancelled || !canvas || !ctx || dimStartedAt === null) return;
      const width = frame.clientWidth;
      const height = frame.clientHeight;
      const scale = Math.min(window.devicePixelRatio || 1, MAX_CANVAS_PX / Math.max(width, height, 1));
      const pixelWidth = Math.round(width * scale);
      const pixelHeight = Math.round(height * scale);
      if (canvas.width !== pixelWidth || canvas.height !== pixelHeight) {
        canvas.width = pixelWidth;
        canvas.height = pixelHeight;
      }
      ctx.setTransform(scale, 0, 0, scale, 0, 0);
      const varnish = clamp01((now - dimStartedAt) / DIM_MS);
      tryStartSweep(now);
      const progress = sweepStartedAt === null ? 0 : clamp01((now - sweepStartedAt) / SWEEP_MS);
      const focus = focusX === undefined || focusY === undefined ? undefined : { x: focusX, y: focusY };
      drawLift(ctx, source, { width, height }, liftOrigin(source, { width, height }, focus), wander, varnish, progress);
      if (progress >= 1) {
        finish();
        return;
      }
      raf = window.requestAnimationFrame(draw);
    };

    const takeOver = async () => {
      // Let the still finish its own entrance before the canvas stands in for it.
      await Promise.all(still.getAnimations().map((animation) => animation.finished.catch(() => undefined)));
      if (cancelled) return;
      dimStartedAt = performance.now();
      setLifting(true);
      raf = window.requestAnimationFrame(draw);
    };

    const onPlaying = () => {
      playing = true;
      if (stillLost) finish();
    };

    source.onload = () => {
      if (!cancelled) void takeOver();
    };
    source.onerror = () => {
      // No still to lift: the film fades in over it instead.
      stillLost = true;
      if (playing) finish();
    };
    if (!ctx) {
      video.addEventListener('playing', finish, { once: true });
    } else {
      source.src = posterUrl;
      video.addEventListener('playing', onPlaying);
    }
    video.play().catch(() => {
      if (!cancelled) setPhase('still');
    });

    return () => {
      cancelled = true;
      window.cancelAnimationFrame(raf);
      video.removeEventListener('playing', onPlaying);
      video.removeEventListener('playing', finish);
    };
  }, [focusX, focusY, phase, posterUrl]);

  const stillClass = ['wake-still', stillClassName, lifting ? 'off' : null].filter(Boolean).join(' ');
  const filmClass = phase === 'living' ? 'wake-film on' : lifting ? 'wake-film under' : 'wake-film';

  return (
    <div ref={frameRef} className="wake">
      {phase === 'still' ? null : (
        <video
          ref={videoRef}
          src={videoUrl}
          muted
          loop
          playsInline
          preload="auto"
          className={filmClass}
          aria-hidden
        />
      )}
      {phase === 'waking' ? <canvas ref={canvasRef} className="wake-lift" aria-hidden /> : null}
      <Image ref={stillRef} src={posterUrl} alt={alt} fill sizes={sizes} preload={eager} className={stillClass} />
    </div>
  );
}
