import { join } from 'node:path';
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // The gallery imports bundled content/types from ../src (see tsconfig
  // "@shared/*"); Turbopack needs the workspace root to resolve them.
  turbopack: {
    root: join(__dirname, '..'),
  },
  images: {
    // Serve images as-is: Hobby image optimization cache writes hit the fair use limit.
    unoptimized: true,
    remotePatterns: [
      { protocol: 'https', hostname: 'upload.wikimedia.org' },
      { protocol: 'https', hostname: '**.supabase.co' },
      { protocol: 'https', hostname: '**.r2.dev' },
    ],
  },
};

export default nextConfig;
