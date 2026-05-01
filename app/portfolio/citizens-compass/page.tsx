import type { Metadata } from 'next';
import { PropertyProfile } from '@/components/PropertyProfile';

export const metadata: Metadata = {
  title: 'The Citizens Compass',
  description:
    'Corporate profile of The Citizens Compass — a civic education PWA built on the preamble plus 25 founding principles, with Family, Citizen, and Educator modes.',
  alternates: {
    canonical: 'https://www.libertysprinciples.com/portfolio/citizens-compass/',
  },
};

export default function Page() {
  return (
    <PropertyProfile
      eyebrow="Civic education platform"
      name="The Citizens Compass"
      tagline="An interactive teaching platform for the preamble plus 25 founding principles. Family, Citizen, and Educator modes in one PWA."
      canonicalUrl="https://thecitizenscompass.com"
      canonicalLabel="thecitizenscompass.com"
      pricing="Free for families and citizens; educator licensing in development."
      what={
        <>
          <p>
            The Citizens Compass is the interactive companion to the source
            book <em>Zen and the Art of Citizenship</em>. Where the book reads
            the principles, the Compass teaches them: a progressive web app
            with three modes that meet a learner where they are.
          </p>
          <p>
            <strong>Family mode</strong> walks parents and children through
            the preamble plus twenty-five principles together, paired with
            companion stories from Liberty&rsquo;s Principles Pals.
            <strong> Citizen mode</strong> grounds the principles in active
            civic life: the Constitution, live federal bills via the
            Congress.gov API, and the connections between principle and
            policy. <strong>Educator mode</strong> is the classroom layer:
            lesson plans, standards alignment, gradebook, and student
            management. Gamification (XP, badges, streaks) carries through
            all three.
          </p>
        </>
      }
      audience={
        <p>
          Homeschooling families who want a structured civic curriculum
          without partisanship. Adult citizens looking to anchor their
          political reading in first principles. Civics teachers in middle
          school, high school, and community college who need lawyer-curated
          material that ties principle to practice. Veterans and naturalized
          citizens revisiting the founding documents.
        </p>
      }
      problem={
        <p>
          Civic education at the K-12 level has shrunk to a few hours a year
          in most curricula. Adult civic literacy has followed. The Citizens
          Compass offers a single platform that teaches the preamble plus
          twenty-five principles in the arc-of-life ordering, designed by a
          lawyer and veteran, structured so a family, a self-directed adult,
          or a classroom can each enter at the right level and find depth
          beneath each step.
        </p>
      }
      sections={[
        {
          heading: 'Companion legal-research demo',
          body: (
            <p>
              A separate companion app at app.thecitizenscompass.com
              demonstrates the principle library in active legal-research
              use, focused on Florida family law. It pairs Claude Sonnet
              with Voyage AI embeddings against a structured statute corpus
              to show educators and researchers how the principles map to
              actual legal authority.
            </p>
          ),
        },
        {
          heading: 'Stack',
          body: (
            <p>
              React 18 plus Vite plus Capacitor for Android and iOS. PWA
              first; native shells follow. Firebase Hosting and Cloud
              Functions on the back end. Claude Sonnet for retrieval-
              augmented generation in the legal-research demo; Voyage AI
              (voyage-3-lite, 1024-dim) for embeddings.
            </p>
          ),
        },
      ]}
      contact={
        <p>
          Educator licensing inquiries, classroom pilots, and homeschool
          group access requests should be routed through the contact page.
        </p>
      }
    />
  );
}
