import type { PortfolioCardData } from './PortfolioCard';

/**
 * Canonical portfolio dataset. Edit here; consumed by /portfolio/, /, /about/.
 * Order matches the spec.
 */
export const PORTFOLIO: PortfolioCardData[] = [
  {
    name: "Liberty's Principles Media",
    domain: 'libertysprinciplesmedia.com',
    external: 'https://libertysprinciplesmedia.com',
    internal: '/portfolio/libertys-principles-media/',
    oneLiner:
      'The grassroots America 250 home for the public. Civics directory, principle library, daily history.',
    status: 'Marketing site',
    mark: 'M',
  },
  {
    name: "Liberty's Principles Pals",
    domain: 'libertysprinciplespals.com',
    external: 'https://libertysprinciplespals.com',
    internal: '/portfolio/libertys-principles-pals/',
    oneLiner:
      '29 illustrated children’s books on the founding principles. In the tradition of Liberty’s Kids.',
    status: 'Books complete; July 4 launch',
    mark: 'P',
  },
  {
    name: 'Common Sense Quarterly',
    domain: 'commonsensequarterly.com',
    external: 'https://commonsensequarterly.com',
    internal: '/portfolio/common-sense-quarterly/',
    oneLiner:
      'A 9×12 civic education postcard, distributed through chambers of commerce. Lawyer-curated copy on every spot.',
    status: 'Live; $549 / spot',
    mark: 'Q',
  },
  {
    name: 'WhatLaw.ai',
    domain: 'whatlaw.ai',
    external: 'https://whatlaw.ai',
    internal: '/portfolio/whatlaw-ai/',
    oneLiner:
      'What law applies to me? AI-powered legal information across federal, state, and 254 Florida municipalities.',
    status: 'Live; 239K law sections',
    mark: 'L',
  },
  {
    name: 'Fair Bill Analyzer',
    domain: 'fairbillanalyzer.com',
    external: 'https://fairbillanalyzer.com',
    internal: '/portfolio/fairbill-analyzer/',
    oneLiner: 'AI legal-billing review. Catches padded hours, block billing, and rate violations.',
    status: 'Live; $29 / analysis',
    mark: 'B',
  },
  {
    name: 'Zen and the Art of Citizenship',
    domain: 'theartofcitizenship.com',
    external: 'https://theartofcitizenship.com',
    internal: '/portfolio/citizens-compass/',
    oneLiner:
      'A memoir and civic manual on the 25 founding principles. Print and digital, July 4, 2026.',
    status: 'July 4 release',
    mark: 'Z',
  },
  {
    name: 'Project Potsie',
    domain: 'libertysprinciplesmedia.com/music',
    external: 'https://libertysprinciplesmedia.com',
    internal: '/portfolio/project-potsie/',
    oneLiner:
      'Original civic education music. Article V (adult rock band of founders) and the LPP Band (children’s companion act).',
    status: 'EPs in production',
    mark: 'P',
  },
];

export function getPortfolioBySlug(slug: string): PortfolioCardData | undefined {
  return PORTFOLIO.find((p) => p.internal === `/portfolio/${slug}/`);
}
