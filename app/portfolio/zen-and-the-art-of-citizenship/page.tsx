import type { Metadata } from 'next';
import { PropertyProfile } from '@/components/PropertyProfile';

export const metadata: Metadata = {
  title: 'Zen and the Art of Citizenship',
  description:
    'Corporate profile of ZAC — Christopher J. Bradley\'s memoir-and-civic-manual on the 25 founding principles. Print and digital, July 4, 2026.',
  alternates: {
    canonical: 'https://www.libertysprinciples.com/portfolio/zen-and-the-art-of-citizenship/',
  },
};

export default function Page() {
  return (
    <PropertyProfile
      eyebrow="Source book"
      name="Zen and the Art of Citizenship"
      tagline="A memoir and civic manual on the preamble plus 25 founding principles. The source spine for every other Liberty's Principles Media property."
      canonicalUrl="https://theartofcitizenship.com"
      canonicalLabel="theartofcitizenship.com"
      pricing="Print &amp; digital editions, July 4, 2026."
      what={
        <>
          <p>
            <em>Zen and the Art of Citizenship: An Inquiry into Principles</em>
            (ZAC) is the source book that supplies the principle ordering used
            across every Liberty&rsquo;s Principles Media product. It is at
            once a memoir&nbsp;&mdash; the founder&rsquo;s journey from
            seventeen-year-old enlistee through the Gulf War, law school,
            practice, and the long rebuild&nbsp;&mdash; and a plainspoken
            civic manual that walks the reader through the preamble plus
            twenty-five principles in the arc-of-life ordering Bradley
            developed.
          </p>
          <p>
            The arc moves from the individual outward: individual, then family,
            then society, then governance. The structural choice carries the
            argument. Most popular treatments of the founding principles
            present them as a list to be memorized; ZAC presents them as a
            ladder a citizen actually climbs.
          </p>
        </>
      }
      audience={
        <p>
          Adult readers who want a single book to ground their understanding
          of what the founders argued and why. High school and college
          civics instructors looking for a primary source they can teach.
          Veterans who recognize the arc. Anyone whose civic education ended
          in eleventh grade and who has been quietly aware of the gap since.
        </p>
      }
      problem={
        <p>
          The most popular treatments of the founding principles in the modern
          market are either dry textbooks or partisan polemics. ZAC takes a
          third path: lawyer-curated, memoir-anchored, non-partisan, and
          willing to put the writer&rsquo;s own life on the page so the
          principles read as lived rather than recited.
        </p>
      }
      sections={[
        {
          heading: 'Related property',
          body: (
            <p>
              The principle library that anchors this book is also available
              as an interactive teaching platform: <a href="/portfolio/citizens-compass/">The Citizens Compass</a>,
              a separate Liberty&rsquo;s Principles Media product with Family,
              Citizen, and Educator modes.
            </p>
          ),
        },
      ]}
      contact={
        <p>
          Press copies, podcast and interview requests, classroom adoption
          inquiries, and academic-licensing requests should each be routed
          through the appropriate page below.
        </p>
      }
    />
  );
}
