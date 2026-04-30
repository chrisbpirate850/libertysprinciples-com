import Link from 'next/link';

export type PortfolioCardData = {
  name: string;
  shortName?: string;
  domain: string;
  external: string;
  internal: string;
  oneLiner: string;
  status?: string;
  /** Single character / mark / abbreviation rendered in the corner. */
  mark?: string;
};

type PortfolioCardProps = {
  property: PortfolioCardData;
  compact?: boolean;
};

/**
 * Two distinct links per card (read-the-profile + visit-the-site) — no
 * card-wide click handler, so this remains a server component and renders
 * cleanly under static export.
 */
export function PortfolioCard({ property, compact = false }: PortfolioCardProps) {
  return (
    <article
      className={`group relative flex flex-col border border-ink/15 bg-parchment hover:border-ink/35 transition-colors ${
        compact ? 'p-6' : 'p-8'
      }`}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="flex-1 min-w-0">
          <p className="eyebrow mb-2 truncate">{property.domain}</p>
          <h3
            className={`font-display font-medium text-ink leading-tight text-balance ${
              compact ? 'text-xl' : 'text-2xl'
            }`}
          >
            <Link
              href={property.internal}
              className="hover:text-patriot-red transition-colors"
            >
              {property.name}
            </Link>
          </h3>
        </div>
        {property.mark && (
          <span
            aria-hidden="true"
            className="font-display text-3xl text-liberty-gold-deep/40 leading-none flex-shrink-0"
          >
            {property.mark}
          </span>
        )}
      </div>

      <p
        className={`text-ink/75 leading-relaxed ${
          compact ? 'text-sm' : 'text-base'
        } flex-1 mb-6`}
      >
        {property.oneLiner}
      </p>

      <div className="flex items-center justify-between gap-4 mt-auto pt-4 border-t border-ink/10 text-sm">
        <Link
          href={property.internal}
          className="text-ink/65 hover:text-ink font-medium transition-colors"
        >
          Read profile
        </Link>
        <a
          href={property.external}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ink font-medium hover:text-patriot-red transition-colors inline-flex items-center gap-1"
        >
          Visit
          <span aria-hidden="true">&nbsp;&rarr;</span>
        </a>
      </div>
    </article>
  );
}
