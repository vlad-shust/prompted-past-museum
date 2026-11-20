import type { MetadataRoute } from 'next';

import { webEnv } from '@/lib/env';
import { getScenes } from '@/lib/scenes';
import { getHouseWorks } from '@/lib/studio';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const scenes = await getScenes();
  const houseWorks = getHouseWorks();
  return [
    { url: webEnv.siteUrl, changeFrequency: 'daily', priority: 1 },
    { url: `${webEnv.siteUrl}/studio`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${webEnv.siteUrl}/privacy`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${webEnv.siteUrl}/support`, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${webEnv.siteUrl}/terms`, changeFrequency: 'yearly', priority: 0.3 },
    ...scenes.map((scene) => ({
      url: `${webEnv.siteUrl}/scene/${scene.slug}`,
      lastModified: new Date(scene.publishedOn),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
    ...houseWorks.map((work) => ({
      url: `${webEnv.siteUrl}/studio-piece/${work.id}`,
      changeFrequency: 'monthly' as const,
      priority: 0.65,
    })),
  ];
}
