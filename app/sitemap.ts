import type { MetadataRoute } from 'next';
import { PORTFOLIO } from '@/components/portfolio-data';

// Required for `output: 'export'` static export.
export const dynamic = 'force-static';

const BASE = 'https://www.libertysprinciples.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticRoutes = [
    { path: '/', priority: 1.0 },
    { path: '/about/', priority: 0.9 },
    { path: '/portfolio/', priority: 0.9 },
    { path: '/press/', priority: 0.7 },
    { path: '/partnerships/', priority: 0.8 },
    { path: '/contact/', priority: 0.7 },
    { path: '/legal/privacy/', priority: 0.3 },
    { path: '/legal/terms/', priority: 0.3 },
  ];

  const portfolioRoutes = PORTFOLIO.map((p) => ({
    path: p.internal,
    priority: 0.7,
  }));

  return [...staticRoutes, ...portfolioRoutes].map(({ path, priority }) => ({
    url: `${BASE}${path}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority,
  }));
}
