'use client';

import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

/** Opens the wall mid-strip so works hang off both edges and either direction scrolls. */
export function WallScroll({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const items = Array.from(el.children) as HTMLElement[];
    const middle = items[Math.floor(items.length / 2)];
    if (!middle) return;
    el.scrollLeft = middle.offsetLeft + middle.offsetWidth / 2 - el.clientWidth / 2;
  }, []);

  return (
    <div ref={ref} className="wall-scroll">
      {children}
    </div>
  );
}
