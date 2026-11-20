import type { Metadata } from 'next';

import { SiteFooter } from '@/components/site-footer';
import { SiteNav } from '@/components/site-nav';
import { StudioWall } from '@/components/studio-wall';
import { getHouseWorks, STUDIO_OPENING_ID } from '@/lib/studio';

export const metadata: Metadata = {
  title: 'the studio',
  description: 'Step into the art: house paintings, each woken into a 6-second film.',
};

export default function StudioPage() {
  const houseWorks = getHouseWorks();
  const opening = Math.max(
    0,
    houseWorks.findIndex((work) => work.id === STUDIO_OPENING_ID),
  );

  return (
    <>
      <SiteNav />
      <main>
        <StudioWall works={houseWorks} opening={opening} />
      </main>

      <SiteFooter />
    </>
  );
}
