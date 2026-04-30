type MonogramProps = {
  className?: string;
  size?: number;
  ariaLabel?: string;
};

/**
 * The footer authorial monogram — the single hand-drawn touch on the corporate site.
 *
 * STRETCH GOAL — Procreate-asset placeholder system:
 * To swap in the actual hand-drawn asset, drop an SVG at /public/monogram.svg
 * with the same viewBox (0 0 80 80) and uncomment the <use> branch below.
 * No other code change required; the alt monogram below is the placeholder.
 */
export function Monogram({
  className = '',
  size = 56,
  ariaLabel = "Liberty's Principles Media monogram",
}: MonogramProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 80 80"
      width={size}
      height={size}
      role="img"
      aria-label={ariaLabel}
      className={className}
    >
      {/* Procreate-asset hot-swap point.
          When /public/monogram.svg exists, replace the geometric placeholder
          below with: <image href="/monogram.svg" width="80" height="80" /> */}

      {/* Outer rule — wax-seal frame */}
      <circle
        cx="40"
        cy="40"
        r="36"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        opacity="0.55"
      />
      <circle
        cx="40"
        cy="40"
        r="32"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.75"
        opacity="0.4"
      />

      {/* Interlocked L + P, hand-drawn feel via slight asymmetry */}
      <g
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* L */}
        <path d="M 26 22 L 26 54 L 42 54" />
        {/* P bowl + stem, set into the L */}
        <path d="M 38 22 L 38 54" />
        <path d="M 38 22 Q 56 22 56 32 Q 56 42 38 42" />
      </g>

      {/* Tiny star — gold accent, single use */}
      <path
        d="M 56 56 l 2.2 4.5 4.8 0.7 -3.5 3.4 0.8 4.8 -4.3 -2.3 -4.3 2.3 0.8 -4.8 -3.5 -3.4 4.8 -0.7 z"
        fill="hsl(46 87% 65%)"
        opacity="0.85"
      />
    </svg>
  );
}
