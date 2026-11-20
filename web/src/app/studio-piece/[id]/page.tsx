import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { relatedPaintings } from '@shared/content/studio-suggestions';
import { AppStoreCta } from '@/components/app-store-cta';
import { DetailLens } from '@/components/detail-lens';
import { Plaque } from '@/components/plaque';
import { SiteFooter } from '@/components/site-footer';
import { SiteNav } from '@/components/site-nav';
import { WakingPicture } from '@/components/waking-picture';
import { getHouseWork, getHouseWorks } from '@/lib/studio';

export const revalidate = 3600;

interface PieceParams {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return getHouseWorks().map((work) => ({ id: work.id }));
}

export async function generateMetadata({ params }: PieceParams): Promise<Metadata> {
  const { id } = await params;
  const work = getHouseWork(id);
  if (!work) return {};
  const dek = work.story.split('\n')[0] ?? work.label;
  return {
    title: work.title,
    description: `${work.artist}, ${work.year}. ${dek}`,
  };
}

export default async function StudioPiecePage({ params }: PieceParams) {
  const { id } = await params;
  const work = getHouseWork(id);
  if (!work) notFound();

  const lensDetails = work.details.map((detail) => ({
    id: detail.id,
    focus: { x: detail.x, y: detail.y, scale: detail.scale },
    caption: detail.caption,
  }));
  const related = relatedPaintings(work.id).filter((sibling) => sibling.videoFile !== undefined);

  return (
    <>
      <SiteNav />
      <main className="container piece">
        <Link href="/studio" className="piece-back">
          Studio
        </Link>

        <div className="piece-hero">
          <div
            className="hang-frame piece-frame"
            style={{ aspectRatio: `${work.still.width} / ${work.still.height}` }}
          >
            <span className="studio-window">
              <WakingPicture
                eager
                armed
                posterUrl={work.posterUrl}
                videoUrl={work.videoUrl}
                focus={work.focus}
                alt={`${work.title}, woken by the studio`}
                sizes="(max-width: 800px) 100vw, 760px"
              />
            </span>
          </div>
          <div className="piece-plaque">
            <Plaque line={`${work.artist}, ${work.year}`} title={work.title} />
            <p className="piece-alive">Alive</p>
          </div>
        </div>

        <p className="story">{work.story}</p>

        {lensDetails.length > 0 ? (
          <DetailLens imageUrl={work.posterUrl} details={lensDetails} />
        ) : null}

        {related.length > 0 ? (
          <section className="piece-related" aria-label="More like this">
            <p className="eyebrow">more like this</p>
            <ul className="piece-related-list">
              {related.map((sibling) => (
                <li key={sibling.id}>
                  <Link href={`/studio-piece/${sibling.id}`} className="piece-related-link">
                    <span className="piece-related-thumb">
                      <Image src={sibling.imageUrl} alt="" fill sizes="96px" />
                    </span>
                    <span className="piece-related-copy">
                      <span className="piece-related-title">{sibling.title}</span>
                      <span className="piece-related-meta">
                        {sibling.artist} · {sibling.year}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <AppStoreCta />

        <footer className="footer">
          <Link href="/studio" className="footer-browse">
            Back to the studio
          </Link>
          <span>House works, woken · prompted.past</span>
        </footer>
      </main>
      <SiteFooter />
    </>
  );
}
