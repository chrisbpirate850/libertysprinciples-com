import type { Metadata, Viewport } from 'next';
import { Fraunces, Inter_Tight } from 'next/font/google';
import { SiteHeader } from '@/components/SiteHeader';
import { SiteFooter } from '@/components/SiteFooter';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  // Fraunces is a variable font; omitting `weight` exposes the full 100–900 axis.
  // Keeping the optical-size + WONK + SOFT axes for the editorial polish.
  axes: ['SOFT', 'WONK', 'opsz'],
  variable: '--font-fraunces',
});

const interTight = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
  variable: '--font-inter-tight',
});

const SITE_URL = 'https://www.libertysprinciples.com';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Liberty's Principles Media",
    template: "%s — Liberty's Principles Media",
  },
  description:
    "A grassroots civic education company built for America's third quarter-millennium. Lawyer-curated, veteran-built, public-funded, returned to the public.",
  keywords: [
    "Liberty's Principles Media",
    'Christopher J. Bradley',
    'civic education',
    'America 250',
    'grassroots civics',
    'founding principles',
  ],
  authors: [{ name: 'Christopher J. Bradley' }],
  creator: 'Liberty\'s Principles Media',
  publisher: 'Liberty\'s Principles Media',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: "Liberty's Principles Media",
    title: "Liberty's Principles Media",
    description:
      "A grassroots civic education company built for America's third quarter-millennium.",
  },
  twitter: {
    card: 'summary_large_image',
    title: "Liberty's Principles Media",
    description:
      "Lawyer-curated, veteran-built, public-funded, returned to the public.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f9f6ee',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fraunces.variable} ${interTight.variable}`}>
      <body className="min-h-screen bg-parchment text-ink antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-ink focus:text-parchment focus:px-4 focus:py-2 focus:rounded"
        >
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
