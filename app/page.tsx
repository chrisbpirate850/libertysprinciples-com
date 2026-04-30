import Link from 'next/link';
import type { Metadata } from 'next';
import { PortfolioCard } from '@/components/PortfolioCard';
import { PORTFOLIO } from '@/components/portfolio-data';
import { Reveal } from '@/components/Reveal';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: "Liberty's Principles Media — A grassroots civic education company",
  description:
    "Lawyer-curated, veteran-built, public-funded, returned to the public. Books, music, software, journalism, and education for citizens of every age.",
  alternates: { canonical: 'https://www.libertysprinciples.com' },
};

const ORGANIZATION_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: "Liberty's Principles Media",
  alternateName: 'LPM',
  url: 'https://www.libertysprinciples.com',
  logo: 'https://www.libertysprinciples.com/monogram.svg',
  description:
    "A grassroots civic education company built for America's third quarter-millennium.",
  founder: {
    '@type': 'Person',
    name: 'Christopher J. Bradley',
    jobTitle: 'Founder',
  },
  foundingDate: '2025',
  foundingLocation: {
    '@type': 'Place',
    name: 'Niceville, Florida',
  },
  sameAs: [
    'https://libertysprinciplesmedia.com',
    'https://libertysprinciplespals.com',
    'https://commonsensequarterly.com',
    'https://whatlaw.ai',
    'https://fairbillanalyzer.com',
    'https://theartofcitizenship.com',
  ],
};

export default function Home() {
  return (
    <>
      <JsonLd data={ORGANIZATION_SCHEMA} />

      {/* HERO — single screen-height, restrained */}
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-wide px-6 lg:px-10 pt-20 pb-24 md:pt-32 md:pb-32">
          <p className="eyebrow mb-6">A grassroots civic education company</p>
          <h1 className="font-display font-semibold text-[2.5rem] sm:text-5xl md:text-[3.5rem] leading-[1.05] tracking-tight text-balance max-w-4xl">
            Liberty&rsquo;s Principles Media&nbsp;&mdash; a civic education
            company built for America&rsquo;s{' '}
            <span className="text-liberty-gold-deep">third quarter-millennium</span>.
          </h1>

          <p className="mt-8 max-w-2xl text-lg md:text-xl text-ink/80 leading-relaxed text-pretty">
            Lawyer-curated, veteran-built, public-funded, returned to the public.
            The company makes books, music, software, journalism, and education
            for citizens of every age.
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            <Link href="/about/" className="cta-secondary">
              About
            </Link>
            <Link href="/portfolio/" className="cta-secondary">
              Portfolio
            </Link>
            <Link href="/partnerships/" className="cta-secondary">
              Partnerships
            </Link>
            <Link href="/press/" className="cta-secondary">
              Press
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT THE COMPANY DOES — one paragraph, single column */}
      <Reveal>
        <section className="mx-auto max-w-prose px-6 lg:px-10 py-24 md:py-32">
          <p className="eyebrow mb-6">What the company does</p>
          <p className="lead font-display text-2xl md:text-[1.75rem] leading-snug text-ink text-pretty">
            Liberty&rsquo;s Principles Media is the editorial and product home for a
            small, plainspoken civic press. The catalog is built around a single
            spine&nbsp;&mdash; the preamble plus twenty-five founding principles drawn
            from <em>Zen and the Art of Citizenship</em>&nbsp;&mdash; and extends
            from picture books for seven-year-olds to AI-assisted legal research
            for adults navigating the courts.
          </p>
        </section>
      </Reveal>

      {/* PORTFOLIO TEASER */}
      <Reveal>
        <section className="border-t border-ink/10 bg-parchment-deep/30">
          <div className="mx-auto max-w-wide px-6 lg:px-10 py-20 md:py-28">
            <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
              <div>
                <p className="eyebrow mb-3">The properties</p>
                <h2 className="font-display text-h2 max-w-2xl text-balance">
                  Seven properties, one principle library.
                </h2>
              </div>
              <Link href="/portfolio/" className="ed-link text-base font-medium">
                See the full portfolio &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {PORTFOLIO.map((p) => (
                <PortfolioCard key={p.internal} property={p} compact />
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* CLOSING BRAND-POSITION LINE — restrained, single sentence */}
      <Reveal>
        <section className="mx-auto max-w-wide px-6 lg:px-10 py-24 md:py-32 text-center">
          <p className="font-display text-2xl md:text-3xl leading-snug text-ink/85 max-w-3xl mx-auto text-balance">
            One veteran, a lawyer&rsquo;s training, and a disability check.
            <br className="hidden md:block" /> The company is small on purpose.
          </p>
        </section>
      </Reveal>
    </>
  );
}
