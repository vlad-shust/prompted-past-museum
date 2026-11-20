'use client';

import Image from 'next/image';
import { useState } from 'react';

import type { DetailFocus } from '@shared/types/domain.types';
import type { DetailLensProps } from './detail-lens.types';

const STAGE_ASPECT = 25 / 18;

/**
 * Places the painting so the focus point sits at the window's center, never past
 * the canvas edge. The box carries the *painting's* aspect, not the window's:
 * sizing it to the window cover-crops the canvas, which put up to half of some
 * paintings permanently out of reach. x/y are true points on the painting.
 *
 * Mirrors regionStyle() in src/components/today/detail-lens.tsx. Keep the two in sync.
 */
function boxStyle({ x, y, scale }: DetailFocus, aspect: number, windowAspect: number) {
  const w = 100;
  const h = 100 / windowAspect;
  const base = Math.max(w / aspect, h);
  const boxW = aspect * base * scale;
  const boxH = base * scale;
  const left = Math.min(Math.max(w / 2 - x * boxW, w - boxW), 0);
  const top = Math.min(Math.max(h / 2 - y * boxH, h - boxH), 0);
  return {
    width: `${boxW}%`,
    height: `${(boxH / h) * 100}%`,
    left: `${left}%`,
    top: `${(top / h) * 100}%`,
  };
}

/** The curator's close-looks: circular windows into the painting, one stage under them. */
export function DetailLens({ imageUrl, details }: DetailLensProps) {
  const [index, setIndex] = useState(0);
  // Until the painting reports its shape, frame it as the stage: same as before.
  const [aspect, setAspect] = useState(STAGE_ASPECT);
  if (details.length === 0) return null;

  const current = details[index] ?? details[0];

  return (
    <section className="lens" aria-label="Look closer">
      <p className="eyebrow">look closer</p>

      <div className="lens-thumbs">
        {details.map((detail, thumbIndex) => (
          <button
            key={detail.id}
            type="button"
            className={thumbIndex === index ? 'lens-thumb is-current' : 'lens-thumb'}
            onClick={() => setIndex(thumbIndex)}
            aria-label={`Detail ${thumbIndex + 1} of ${details.length}`}
            aria-current={thumbIndex === index}
          >
            <span className="lens-box" style={boxStyle(detail.focus, aspect, 1)}>
              <Image src={imageUrl} alt="" fill sizes="256px" className="lens-img" />
            </span>
          </button>
        ))}
      </div>

      <div className="lens-stage">
        <span className="lens-box" style={boxStyle(current.focus, aspect, STAGE_ASPECT)}>
          <Image
            src={imageUrl}
            alt={current.caption}
            fill
            sizes="1920px"
            className="lens-img"
            onLoad={(event) => {
              const { naturalWidth, naturalHeight } = event.currentTarget;
              if (naturalWidth > 0 && naturalHeight > 0) setAspect(naturalWidth / naturalHeight);
            }}
          />
        </span>
      </div>

      <p className="lens-caption" key={current.id}>
        {current.caption}
      </p>
    </section>
  );
}
