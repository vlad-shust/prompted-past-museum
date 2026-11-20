import Image from 'next/image';
import Link from 'next/link';

import { SiteFooter } from '@/components/site-footer';
import { SiteNav } from '@/components/site-nav';
import { StoreLinks } from '@/components/store-links';
import { WallItem } from '@/components/wall-item';
import { WallScroll } from '@/components/wall-scroll';
import { getHeroScene, getScenes } from '@/lib/scenes';

export const revalidate = 3600;

const WALL_SHAPES = ['wide', 'standard', 'square', 'standard', 'wide', 'standard'] as const;
const WALL_COUNT = 60;

export default async function HomePage() {
  const scenes = await getScenes();
  const hero = getHeroScene(scenes);

  if (!hero) {
    return (
      <>
        <SiteNav overlay />
        <main className="hall hall-tall">
          <div className="hall-copy">
            <header className="hall-head">
              <h1 className="display">Step into the art.</h1>
            </header>
            <p className="lede hall-lede">The first era opens soon.</p>
            <StoreLinks />
          </div>
        </main>
      </>
    );
  }

  const wall = scenes.filter((s) => s.slug !== hero.slug).slice(0, WALL_COUNT);

  return (
    <>
      <SiteNav overlay />
      <main>
        <section className="hall hall-tall">
          <Image
            src={hero.imageUrl}
            alt={hero.title}
            fill
            preload
            sizes="100vw"
            className="hall-art lights-on breathes"
          />
          <div className="hall-scrim" aria-hidden />
          <div className="hall-grain" aria-hidden />
          <div className="hall-copy">
            <header className="hall-head">
              <h1 className="display">Step into the art.</h1>
            </header>
            <p className="lede hall-lede">
              Discover the history that gives the art meaning.
            </p>
            <div className="hall-actions">
              <Link href={`/scene/${hero.slug}`} className="btn">
                Read the story
              </Link>
              <Link href="/studio" className="btn-ghost">
                Enter the studio
              </Link>
            </div>
            <div className="hero-stores">
              <StoreLinks />
            </div>
          </div>
          <Link href={`/scene/${hero.slug}`} className="hall-label">
            {hero.artTitle || hero.artCredit ? (
              <span className="hall-label-line">
                {[hero.artTitle, hero.artCredit].filter(Boolean).join(' · ')}
              </span>
            ) : null}
            <span className="hall-label-title">{hero.title}</span>
            <span className="hall-label-eyebrow">now on the wall</span>
          </Link>
        </section>

        <section id="wall" className="wall">
          <header className="room section-head">
            <p className="eyebrow">the wall</p>
            <p className="section-sub">From the Nile to the machine age.</p>
          </header>
          <WallScroll>
            {wall.map((scene, index) => (
              <WallItem key={scene.id} scene={scene} shape={WALL_SHAPES[index % WALL_SHAPES.length]} />
            ))}
          </WallScroll>
        </section>

        <section id="app" className="room">
          <div className="app-panel">
            <h2 className="display display-md">The full archive lives in the app</h2>
            <p className="lede app-lede">
              Every scene, era by era, each with the history behind the painting.
            </p>
            <StoreLinks />
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
