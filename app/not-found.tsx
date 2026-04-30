import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Not found',
  description: 'The page you requested does not exist.',
};

export default function NotFound() {
  return (
    <section className="mx-auto max-w-prose px-6 lg:px-10 py-32 md:py-48 text-center">
      <p className="eyebrow mb-6">404</p>
      <h1 className="font-display text-h1 leading-[1.05] text-balance mb-8">
        That door doesn&rsquo;t open.
      </h1>
      <p className="text-lg text-ink/75 mb-12 text-pretty">
        The page you requested isn&rsquo;t here. Try the home page, the
        portfolio, or the about page.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link href="/" className="cta-secondary">
          Home
        </Link>
        <Link href="/portfolio/" className="cta-secondary">
          Portfolio
        </Link>
        <Link href="/about/" className="cta-secondary">
          About
        </Link>
      </div>
    </section>
  );
}
