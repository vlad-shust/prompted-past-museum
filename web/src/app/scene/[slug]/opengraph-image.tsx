import { readFile } from 'node:fs/promises';
import { join } from 'node:path';
import { ImageResponse } from 'next/og';

import { getEra } from '@shared/content/eras';
import { plainDashes } from '@/lib/format';
import { getSceneBySlug } from '@/lib/scenes';

export const alt = 'A painted moment from history · prompted.past';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function OpenGraphImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const scene = await getSceneBySlug(slug);
  const [display, italic] = await Promise.all([
    readFile(join(process.cwd(), 'src/fonts/Fraunces-Display-Regular.ttf')),
    readFile(join(process.cwd(), 'src/fonts/Fraunces-Text-Italic.ttf')),
  ]);

  const fonts = [
    { name: 'Fraunces', data: display, style: 'normal' as const },
    { name: 'FrauncesItalic', data: italic, style: 'italic' as const },
  ];

  if (!scene) {
    return new ImageResponse(
      (
        <div
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#0A0908',
            color: '#F5EDE3',
            fontFamily: 'Fraunces',
            fontSize: 54,
            letterSpacing: 12,
          }}
        >
          PROMPTED.PAST
        </div>
      ),
      { ...size, fonts },
    );
  }

  const era = plainDashes(getEra(scene.eraId));

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          backgroundColor: '#0A0908',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            width: 660,
            padding: 56,
          }}
        >
          <div
            style={{
              display: 'flex',
              fontFamily: 'FrauncesItalic',
              fontStyle: 'italic',
              fontSize: 26,
              color: '#FFB454',
            }}
          >
            {era.name} · {scene.historicalDateLabel}
          </div>
          <div
            style={{
              display: 'flex',
              fontFamily: 'Fraunces',
              fontSize: 64,
              lineHeight: 1.1,
              color: '#F5EDE3',
            }}
          >
            {scene.title}
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 20,
              letterSpacing: 6,
              color: '#8A8178',
            }}
          >
            PROMPTED.PAST
          </div>
        </div>
        <div style={{ display: 'flex', width: 540, height: 630 }}>
          <img
            src={scene.imageUrl}
            alt=""
            width={540}
            height={630}
            style={{ objectFit: 'cover', width: 540, height: 630 }}
          />
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
