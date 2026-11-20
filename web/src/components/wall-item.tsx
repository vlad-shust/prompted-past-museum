import Image from 'next/image';
import Link from 'next/link';

import type { Scene } from '@shared/types/domain.types';
import { formatHistoricalYear } from '@/lib/format';
import { Plaque } from './plaque';
import type { WallShape } from './wall-item.types';

export function WallItem({ scene, shape }: { scene: Scene; shape: WallShape }) {
  return (
    <Link href={`/scene/${scene.slug}`} className={`wall-item wall-${shape}`}>
      <span className="hang-frame">
        <Image
          src={scene.thumbUrl}
          alt={scene.title}
          fill
          sizes="(max-width: 640px) 70vw, 440px"
          className="hang-img"
        />
      </span>
      <Plaque line={formatHistoricalYear(scene.historicalYear)} title={scene.title} />
    </Link>
  );
}
