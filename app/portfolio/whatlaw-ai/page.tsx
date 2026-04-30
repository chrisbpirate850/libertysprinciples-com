import type { Metadata } from 'next';
import { PropertyProfile } from '@/components/PropertyProfile';

export const metadata: Metadata = {
  title: 'WhatLaw.ai',
  description:
    'Corporate profile of WhatLaw.ai — AI-powered legal information across federal, state, and 254 Florida municipalities.',
  alternates: {
    canonical: 'https://www.libertysprinciples.com/portfolio/whatlaw-ai/',
  },
};

export default function Page() {
  return (
    <PropertyProfile
      eyebrow="Legal information service"
      name="WhatLaw.ai"
      tagline="What law applies to me? AI-powered answers across federal, state, and 254 Florida municipalities."
      canonicalUrl="https://whatlaw.ai"
      canonicalLabel="whatlaw.ai"
      pricing="Free tier; paid tiers in development."
      what={
        <>
          <p>
            WhatLaw.ai answers a question that the legal industry has historically
            refused to answer in plain English: <em>what law actually applies to
            me right now?</em> Four inputs&nbsp;&mdash; ZIP code, age, sex, and
            activity&nbsp;&mdash; produce a personalized legal report with red
            flags, green lights, and citations. The reports stitch together three
            jurisdictional layers (federal, state, municipal) into a single
            readable narrative.
          </p>
          <p>
            The corpus, as of launch, contains 239,030 law sections across 254
            Florida municipalities, plus federal statutes from the Office of the
            Law Revision Counsel and Florida statutes scraped from the
            legislature site. National expansion is on the roadmap.
          </p>
        </>
      }
      audience={
        <p>
          Florida residents trying to understand what they can or cannot do at
          a specific address. Pro se litigants navigating courts without a
          lawyer. Small business owners checking municipal compliance.
          Journalists and researchers needing fast, citation-anchored legal
          context. Lawyers using it as a research scaffold.
        </p>
      }
      problem={
        <p>
          The American legal system is functionally unsearchable for ordinary
          people. Federal codes are on one site. State statutes are on another.
          Municipal codes&nbsp;&mdash; the layer that actually governs most
          daily life&nbsp;&mdash; are scattered across reverse-engineered
          county-by-county portals. WhatLaw.ai unifies the three layers,
          applies AI for retrieval and summarization, and refuses to give
          legal advice. The product gives information; the citizen still
          decides what to do with it.
        </p>
      }
      sections={[
        {
          heading: 'Stack',
          body: (
            <p>
              Next.js 15 frontend on Vercel; FastAPI backend on Fly.io. SQLite
              (2.5GB, FTS5 indexes) houses the corpus. Claude Sonnet handles
              report analysis; Claude Haiku handles query expansion. The site
              uses a dark-theme, amber-accent design language; the mascot,
              Cappy, is a Capitol-dome character shared with the children&rsquo;s
              book series.
            </p>
          ),
        },
      ]}
      contact={
        <p>
          Press inquiries about the corpus, the methodology, or the broader
          access-to-justice thesis should be routed through the press page.
          Partnership and licensing inquiries (legal-aid organizations, bar
          associations, law schools) through the partnerships page.
        </p>
      }
    />
  );
}
