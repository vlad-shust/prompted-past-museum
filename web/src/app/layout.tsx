import { Analytics } from '@vercel/analytics/next';
import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import { Figtree, Fraunces, Literata } from 'next/font/google';

import { webEnv } from '@/lib/env';
import '@/styles/tokens.css';
import './globals.css';
import '@/styles/gallery.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  style: ['normal', 'italic'],
  axes: ['opsz'],
  variable: '--font-display',
  display: 'swap',
});

const literata = Literata({
  subsets: ['latin'],
  variable: '--font-story',
  display: 'swap',
});

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(webEnv.siteUrl),
  title: {
    default: 'prompted.past · history through art',
    template: '%s · prompted.past',
  },
  description:
    'History through the art that recorded it. A new painting each morning with the true story behind it, and a studio that wakes paintings: step into the art.',
  openGraph: {
    siteName: 'prompted.past',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0908',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${literata.variable} ${figtree.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
