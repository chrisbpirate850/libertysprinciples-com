import type { Metadata } from 'next';
import { PropertyProfile } from '@/components/PropertyProfile';

export const metadata: Metadata = {
  title: "Liberty's Principles Media",
  description:
    "Corporate profile of the libertysprinciplesmedia.com media hub: civics directory, principle library, and daily-history publishing arm.",
  alternates: {
    canonical: 'https://www.libertysprinciples.com/portfolio/libertys-principles-media/',
  },
};

export default function Page() {
  return (
    <PropertyProfile
      eyebrow="Marketing site &amp; civics directory"
      name="Liberty's Principles Media"
      tagline="The grassroots America 250 home for the public — directory, principle library, and daily-history publishing arm."
      canonicalUrl="https://libertysprinciplesmedia.com"
      canonicalLabel="libertysprinciplesmedia.com"
      pricing="Free for all readers; ad-free."
      what={
        <>
          <p>
            Liberty&rsquo;s Principles Media (the property, distinct from the
            holding company of the same name) is the company&rsquo;s public-facing
            media hub. It hosts the U.S. Civics &amp; Historical Society
            Directory&nbsp;&mdash; fifty-one civic organizations, forty-five
            historical societies, fifty-one state detail pages, plus This Day in
            History&nbsp;&mdash; and the public principle library that anchors
            search-facing content for the entire ecosystem.
          </p>
          <p>
            The hub is the surface that any first-time visitor most likely lands
            on. It exists to do one thing well: route a citizen, a parent, an
            educator, or a journalist to the right resource on the first click.
          </p>
        </>
      }
      audience={
        <p>
          Citizens looking for a non-partisan civic education starting point.
          Educators searching for vetted local resources by state. Journalists
          and researchers verifying historical context. Parents planning family
          civics activities tied to the calendar.
        </p>
      }
      problem={
        <p>
          America&rsquo;s civic-education web is fragmented&nbsp;&mdash; state
          societies, federal agencies, university archives, nonprofit advocacy
          groups, and partisan think tanks all publish in their own silos with
          no shared spine. The hub stitches the credible portions of that
          landscape into one indexed, principle-tagged surface that the public
          can actually navigate.
        </p>
      }
      sections={[
        {
          heading: 'Notable surfaces',
          body: (
            <ul className="space-y-2 list-disc pl-5">
              <li>U.S. Civics &amp; Historical Society Directory&nbsp;&mdash; 9 pages, 51 civic organizations, 45 historical societies, 51 state pages</li>
              <li>Daily-history feature&nbsp;&mdash; This Day in History, indexed against the principle library</li>
              <li>Educational articles tied to the preamble plus 25 founding principles</li>
              <li>Editorial connective tissue between the other LPM properties</li>
            </ul>
          ),
        },
      ]}
      contact={
        <p>
          Editorial inquiries, directory listing additions, and partner-cross-promotion
          requests for the media hub specifically can be routed through the press
          and partnerships pages.
        </p>
      }
    />
  );
}
