type MissionStatementProps = {
  variant?: 'lead' | 'inline';
};

/**
 * The brand-position component. Use at most once per page (per spec).
 * Variant 'lead' is the home/about hero use; 'inline' is the smaller body use.
 */
export function MissionStatement({ variant = 'lead' }: MissionStatementProps) {
  if (variant === 'inline') {
    return (
      <p className="font-display text-xl md:text-2xl leading-snug text-ink/90 max-w-2xl text-balance">
        Lawyer-curated. Veteran-built. Public-funded. Returned to the public.
      </p>
    );
  }

  return (
    <blockquote className="border-l-2 border-liberty-gold pl-6 md:pl-8 py-2">
      <p className="font-display text-2xl md:text-3xl leading-snug text-ink text-balance">
        The grassroots America&nbsp;250 home for the American public, given to them by a veteran.
      </p>
      <footer className="mt-4 text-sm text-ink/65 font-medium">
        <span className="eyebrow">Mission</span>
      </footer>
    </blockquote>
  );
}
