'use client';

import Link from 'next/link';
import { useState } from 'react';

const NAV = [
  { href: '/about/', label: 'About' },
  { href: '/portfolio/', label: 'Portfolio' },
  { href: '/partnerships/', label: 'Partnerships' },
  { href: '/press/', label: 'Press' },
  { href: '/contact/', label: 'Contact' },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-ink/10 bg-parchment/90 backdrop-blur supports-[backdrop-filter]:bg-parchment/70 sticky top-0 z-40">
      <div className="mx-auto max-w-wide px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="font-display text-xl font-semibold tracking-tight text-ink hover:text-ink/80 transition-colors"
            aria-label="Liberty's Principles Media — home"
          >
            Liberty&rsquo;s Principles Media
          </Link>

          {/* Desktop nav */}
          <nav
            aria-label="Primary"
            className="hidden md:flex items-center gap-8"
          >
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-ink/75 hover:text-ink transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 text-ink"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {open ? (
                <path d="M6 6L18 18M6 18L18 6" />
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav drawer */}
        {open && (
          <nav
            id="mobile-nav"
            aria-label="Primary mobile"
            className="md:hidden pb-6 pt-2"
          >
            <ul className="flex flex-col gap-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 px-2 text-base font-medium text-ink/85 hover:text-ink hover:bg-ink/[0.03] rounded-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
