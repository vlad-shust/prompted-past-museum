'use client';

import Link from 'next/link';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { Plaque } from './plaque';
import { WakingPicture } from './waking-picture';
import type { AspectByWork, StudioWallProps } from './studio-wall.types';

/** Below this width the wall hangs lower and the frames are smaller. */
const STACKED_QUERY = '(max-width: 880px)';

function readAspect(url: string): Promise<number> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image.naturalWidth / image.naturalHeight);
    image.onerror = () => reject(new Error('still_lost'));
    image.src = url;
  });
}

/**
 * The hanging height: every work shares it and widths follow their proportions.
 * On a phone a wide work would overrun the screen, so it hangs smaller instead.
 */
function hangLimits(): { height: number; maxWidth: number } {
  const stacked = window.matchMedia(STACKED_QUERY).matches;
  const height = Math.round(Math.max(300, Math.min(window.innerHeight * (stacked ? 0.5 : 0.66), 860)));
  return { height, maxWidth: stacked ? Math.round(window.innerWidth * 0.86) : Number.POSITIVE_INFINITY };
}

function fitFrame(limits: { height: number; maxWidth: number }, aspect: number) {
  const width = Math.min(Math.round(limits.height * aspect), limits.maxWidth);
  return { width, height: Math.round(width / aspect) };
}

/** Where the scroller must sit for a work to hang in the middle of the room. */
function centerOf(scroller: HTMLElement, item: HTMLElement): number {
  return item.offsetLeft + item.offsetWidth / 2 - scroller.clientWidth / 2;
}

/**
 * A wall you walk along: the works hang side by side at one height, each at
 * its own proportion. The one in front of you is lit and wakes; the rest wait
 * in the half-dark until you reach them. A click opens the painting's article.
 */
export function StudioWall({ works, opening }: StudioWallProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [aspects, setAspects] = useState<AspectByWork>({});
  const [limits, setLimits] = useState<{ height: number; maxWidth: number } | null>(null);
  const [centered, setCentered] = useState(opening);
  const placedRef = useRef(false);

  useEffect(() => {
    const measure = () => setLimits(hangLimits());
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Read every still's proportions; a lost still hangs at the wall's default.
  useEffect(() => {
    let cancelled = false;
    works.forEach((work) => {
      readAspect(work.posterUrl)
        .catch(() => 3 / 2)
        .then((aspect) => {
          if (!cancelled) setAspects((known) => ({ ...known, [work.id]: aspect }));
        });
    });
    return () => {
      cancelled = true;
    };
  }, [works]);

  // The wall opens once everything up to the opening work has its width, so
  // the opening work can be placed mid-room before the first paint.
  const ready =
    limits !== null && works.slice(0, opening + 1).every((work) => aspects[work.id] !== undefined);
  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || !ready || placedRef.current) return;
    const item = scroller.children[opening];
    if (!(item instanceof HTMLElement)) return;
    placedRef.current = true;
    scroller.scrollLeft = centerOf(scroller, item);
  }, [ready, opening]);

  // The light follows the visitor: whichever work is nearest the middle is lit.
  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;
    let raf = 0;
    const settle = () => {
      raf = 0;
      const middle = scroller.scrollLeft + scroller.clientWidth / 2;
      let best = 0;
      let bestDistance = Number.POSITIVE_INFINITY;
      Array.from(scroller.children).forEach((child, i) => {
        if (!(child instanceof HTMLElement)) return;
        const distance = Math.abs(child.offsetLeft + child.offsetWidth / 2 - middle);
        if (distance < bestDistance) {
          bestDistance = distance;
          best = i;
        }
      });
      setCentered(best);
    };
    const onScroll = () => {
      if (raf === 0) raf = window.requestAnimationFrame(settle);
    };
    scroller.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      scroller.removeEventListener('scroll', onScroll);
      if (raf !== 0) window.cancelAnimationFrame(raf);
    };
  }, []);

  const walkTo = (index: number) => {
    const scroller = scrollerRef.current;
    if (!scroller || works.length === 0) return;
    const target = Math.max(0, Math.min(works.length - 1, index));
    const item = scroller.children[target];
    if (!(item instanceof HTMLElement)) return;
    scroller.scrollTo({ left: centerOf(scroller, item), behavior: 'smooth' });
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') walkTo(centered + 1);
      if (event.key === 'ArrowLeft') walkTo(centered - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [centered, works.length]);

  return (
    <section id="room" className="studio-wall">
      <header className="studio-wall-head">
        <h1 className="motto studio-motto">Step into the art.</h1>
        <p className="section-sub">{works.length} paintings the studio has already woken. Walk the wall.</p>
      </header>

      <div ref={scrollerRef} className={ready ? 'studio-scroll open' : 'studio-scroll'}>
        {works.map((work, i) => {
          const aspect = aspects[work.id];
          const hung = aspect !== undefined && limits !== null;
          const frame = hung ? fitFrame(limits, aspect) : { width: 630, height: 420 };
          const lit = i === centered;
          return (
            <figure
              key={work.id}
              className={['studio-work', hung ? 'hung' : null, lit ? 'lit' : null].filter(Boolean).join(' ')}
              style={{ width: frame.width }}
              aria-current={lit ? 'true' : undefined}
            >
              <Link
                href={`/studio-piece/${work.id}`}
                className="studio-work-link"
                aria-label={`Open ${work.title}`}
              >
                <span className="hang-frame studio-frame" style={{ width: frame.width, height: frame.height }}>
                  <span className="studio-window">
                    {hung ? (
                      <WakingPicture
                        armed={lit}
                        paused={!lit}
                        posterUrl={work.posterUrl}
                        videoUrl={work.videoUrl}
                        focus={work.focus}
                        alt={`${work.title}, woken by the studio`}
                        sizes="(max-width: 880px) 90vw, 1000px"
                      />
                    ) : null}
                  </span>
                </span>
              </Link>
              <figcaption className="studio-caption">
                <Plaque line={`${work.artist}, ${work.year}`} title={work.title} />
                <p className="studio-label">{work.label}</p>
              </figcaption>
            </figure>
          );
        })}
      </div>

      <div className="studio-wall-nav">
        <button type="button" className="wall-step" onClick={() => walkTo(centered - 1)} disabled={centered === 0}>
          Previous
        </button>
        <span className="wall-count">
          {centered + 1} of {works.length}
        </span>
        <button
          type="button"
          className="wall-step"
          onClick={() => walkTo(centered + 1)}
          disabled={centered === works.length - 1}
        >
          Next
        </button>
      </div>
    </section>
  );
}
