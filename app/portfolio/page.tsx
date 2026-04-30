import type { Metadata } from 'next';
import { PortfolioCard } from '@/components/PortfolioCard';
import { PORTFOLIO } from '@/components/portfolio-data';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    "The seven properties of Liberty's Principles Media: a children's book series, a chamber-distributed civic postcard, two AI legal tools, a marketing hub, a memoir, and a music arm.",
  alternates: { canonical: 'https://www.libertysprinciples.com/portfolio/' },
};

export default function PortfolioPage() {
  return (
    <>
      {/* HEADER */}
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-wide px-6 lg:px-10 pt-20 pb-16 md:pt-32 md:pb-20">
          <p className="eyebrow mb-6">Portfolio</p>
          <h1 className="font-display text-h1 leading-[1.05] text-balance max-w-4xl mb-8">
            One spine. Seven surfaces.
          </h1>
          <p className="max-w-prose text-lg leading-relaxed text-ink/80 text-pretty">
            Each property below addresses a different audience, but every property
            traces back to the same source: the preamble plus twenty-five founding
            principles drawn from <em>Zen and the Art of Citizenship</em>. The cards
            link to the property&rsquo;s public site and to a corporate profile
            page within the holding-company site.
          </p>
        </div>
      </section>

      {/* PORTFOLIO GRID */}
      <Reveal>
        <section className="mx-auto max-w-wide px-6 lg:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {PORTFOLIO.map((property) => (
              <PortfolioCard key={property.internal} property={property} />
            ))}
          </div>
        </section>
      </Reveal>
    </>
  );
}
