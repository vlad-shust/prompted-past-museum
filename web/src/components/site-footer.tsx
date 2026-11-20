import Image from 'next/image';
import Link from 'next/link';

export function SiteFooter() {
  return (
    <footer className="site-footer room">
      <div className="site-footer-top">
        <div className="site-footer-brand">
          <Link href="/" className="site-footer-wordmark">
            <Image src="/logo-pearl-keyhole.png" alt="" width={26} height={26} className="site-footer-logo" />
            PROMPTED.PAST
          </Link>
        </div>
        <nav className="site-footer-nav" aria-label="Footer">
          <Link href="/#wall" className="site-footer-link">
            the wall
          </Link>
          <Link href="/studio" className="site-footer-link">
            the studio
          </Link>
          <Link href="/privacy" className="site-footer-link">
            privacy
          </Link>
          <Link href="/terms" className="site-footer-link">
            terms
          </Link>
          <Link href="/support" className="site-footer-link">
            support
          </Link>
          <a
            className="site-footer-link"
            href="https://www.instagram.com/prompted.past"
            target="_blank"
            rel="noreferrer"
          >
            instagram
          </a>
        </nav>
      </div>
    </footer>
  );
}
