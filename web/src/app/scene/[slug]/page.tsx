import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getEra } from '@shared/content/eras';
import { plainDashes } from '@/lib/format';
import { AppStoreCta } from '@/components/app-store-cta';
import { DetailLens } from '@/components/detail-lens';
import { SiteNav } from '@/components/site-nav';
import { getSceneBySlug, getScenes } from '@/lib/scenes';

export const revalidate = 3600;

interface SceneParams {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const scenes = await getScenes();
  return scenes.map((scene) => ({ slug: scene.slug }));
}

export async function generateMetadata({ params }: SceneParams): Promise<Metadata> {
  const { slug } = await params;
  const scene = await getSceneBySlug(slug);
  if (!scene) return {};
  return {
    title: scene.title,
    description: scene.dek,
  };
}

export default async function ScenePage({ params }: SceneParams) {
  const { slug } = await params;
  const scenes = await getScenes();
  const index = scenes.findIndex((candidate) => candidate.slug === slug);
  if (index === -1) notFound();

  const scene = scenes[index];
  const newer = index > 0 ? scenes[index - 1] : undefined;
  const older = index < scenes.length - 1 ? scenes[index + 1] : undefined;

  const era = plainDashes(getEra(scene.eraId));

  return (
    <>
      <SiteNav />
      <main className="container">
      <div className="hero-frame">
        <Image
          src={scene.imageUrl}
          alt={scene.title}
          fill
          sizes="(max-width: 800px) 100vw, 760px"
          preload
          className="hero-img"
        />
      </div>

      <div className="hero-text">
        <p className="epigraph">
          {era.name} · {scene.historicalDateLabel}
        </p>
        <h1 className="hero-title">{scene.title}</h1>
        <p className="dek">{scene.dek}</p>
      </div>

      {scene.details?.length ? (
        <DetailLens imageUrl={scene.imageUrl} details={scene.details} />
      ) : null}

      <p className="story">{scene.story}</p>
      <div className="credits">
        {scene.artTitle || scene.artCredit ? (
          <span>{[scene.artTitle, scene.artCredit].filter(Boolean).join(' · ')}</span>
        ) : null}
        {scene.commissionedBy ? (
          <span className="credit-commissioned">Commissioned by {scene.commissionedBy}</span>
        ) : null}
      </div>

      <AppStoreCta />

      {older || newer ? (
        <nav className="scene-nav" aria-label="Nearby scenes">
          {older ? (
            <Link href={`/scene/${older.slug}`} className="scene-nav-link scene-nav-prev">
              <span className="scene-nav-dir">The day before</span>
              <span className="scene-nav-title">{older.title}</span>
            </Link>
          ) : null}
          {newer ? (
            <Link href={`/scene/${newer.slug}`} className="scene-nav-link scene-nav-next">
              <span className="scene-nav-dir">The day after</span>
              <span className="scene-nav-title">{newer.title}</span>
            </Link>
          ) : null}
        </nav>
      ) : null}

      <footer className="footer">
        <Link href="/" className="footer-browse">
          See the full gallery
        </Link>
        <span>Every scene, one per day · prompted.past</span>
      </footer>
      </main>
    </>
  );
}
