import Link from 'next/link';
import { Monogram } from './Monogram';

const FOOTER_NAV = {
  company: [
    { href: '/about/', label: 'About' },
    { href: '/portfolio/', label: 'Portfolio' },
    { href: '/press/', label: 'Press' },
    { href: '/partnerships/', label: 'Partnerships' },
    { href: '/contact/', label: 'Contact' },
  ],
  properties: [
    { href: '/portfolio/libertys-principles-media/', label: "Liberty's Principles Media" },
    { href: '/portfolio/libertys-principles-pals/', label: "Liberty's Principles Pals" },
    { href: '/portfolio/common-sense-quarterly/', label: 'Common Sense Quarterly' },
    { href: '/portfolio/whatlaw-ai/', label: 'WhatLaw.ai' },
    { href: '/portfolio/fairbill-analyzer/', label: 'Fair Bill Analyzer' },
    { href: '/portfolio/citizens-compass/', label: 'Zen and the Art of Citizenship' },
    { href: '/portfolio/project-potsie/', label: 'Project Potsie' },
  ],
  legal: [
    { href: '/legal/privacy/', label: 'Privacy' },
    { href: '/legal/terms/', label: 'Terms' },
  ],
};

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-32 border-t border-ink/15 bg-parchment-deep/40">
      <div className="mx-auto max-w-wide px-6 lg:px-10 py-16">
        {/* Brand-position line — single, restrained */}
        <p className="font-display text-2xl md:text-3xl text-ink leading-snug max-w-3xl mb-12 text-balance">
          Lawyer-curated. Veteran-built. Public-funded. Returned to the public.
        </p>

        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <div className="flex items-start gap-4 text-ink">
              <Monogram size={64} />
              <div>
                <p className="font-display text-lg font-semibold leading-tight">
                  Liberty&rsquo;s Principles Media
                </p>
                <p className="text-sm text-ink/65 mt-1">
                  Niceville, Florida
                </p>
              </div>
            </div>
            <p className="mt-6 text-sm text-ink/70 max-w-xs">
              A grassroots civic education company built for America&rsquo;s third quarter-millennium.
            </p>
          </div>

          <div className="md:col-span-2">
            <h2 className="eyebrow mb-4">Company</h2>
            <ul className="space-y-2">
              {FOOTER_NAV.company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink/75 hover:text-ink transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h2 className="eyebrow mb-4">Properties</h2>
            <ul className="space-y-2">
              {FOOTER_NAV.properties.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink/75 hover:text-ink transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h2 className="eyebrow mb-4">Legal</h2>
            <ul className="space-y-2">
              {FOOTER_NAV.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink/75 hover:text-ink transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ink/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-sm text-ink/60">
          <p>&copy; {year} Liberty&rsquo;s Principles Media. All rights reserved.</p>
          <p className="text-xs">
            Liberty&rsquo;s Principles Media does not endorse candidates, parties, or legislation.
          </p>
        </div>
      </div>
    </footer>
  );
}
