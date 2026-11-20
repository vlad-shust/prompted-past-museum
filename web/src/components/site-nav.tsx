import Image from 'next/image';
import Link from 'next/link';

export function SiteNav({ overlay = false }: { overlay?: boolean }) {
  return (
    <nav className={overlay ? 'nav nav-overlay' : 'nav'}>
      <Link href="/" className="nav-wordmark">
        <Image src="/logo-pearl-keyhole.png" alt="" width={30} height={30} className="nav-logo" />
        PROMPTED.PAST
      </Link>
      <div className="nav-links">
        <Link href="/#wall" className="nav-link">
          the wall
        </Link>
        <Link href="/studio" className="nav-link">
          the studio
        </Link>
        <a
          className="nav-link nav-ig"
          href="https://www.instagram.com/prompted.past"
          target="_blank"
          rel="noreferrer"
          aria-label="prompted.past on Instagram"
        >
          <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden>
            <rect x="3" y="3" width="18" height="18" rx="5" />
            <circle cx="12" cy="12" r="4.2" />
            <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
          </svg>
        </a>
      </div>
    </nav>
  );
}
