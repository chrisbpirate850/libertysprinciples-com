import type { Metadata } from 'next';
import { PropertyProfile } from '@/components/PropertyProfile';

export const metadata: Metadata = {
  title: 'Project Potsie',
  description:
    "Corporate profile of LPM's music arm — Article V (adult rock band of founders) and the LPP Band (children's companion act).",
  alternates: {
    canonical: 'https://www.libertysprinciples.com/portfolio/project-potsie/',
  },
};

export default function Page() {
  return (
    <PropertyProfile
      eyebrow="Music arm"
      name="Project Potsie"
      tagline="Original civic education music. Two acts feeding the July 4, 2026 launch."
      canonicalUrl="https://libertysprinciplesmedia.com"
      canonicalLabel="libertysprinciplesmedia.com/music"
      pricing="EPs in production. Distribution via DistroKid."
      what={
        <>
          <p>
            Project Potsie is Liberty&rsquo;s Principles Media&rsquo;s music
            division. Two acts are in active production for the July 4, 2026
            launch.
          </p>
          <p>
            <strong>Article&nbsp;V</strong> is the adult rock band: four founding
            fathers performing in different genres&nbsp;&mdash; Washington in
            arena rock, Jefferson in folk, Franklin in blues and funk, Hamilton
            in hip-hop&nbsp;&mdash; with Thomas Paine as a solo artist on the
            bill. The first EP, <em>The Philadelphia Recordings, Vol.&nbsp;1</em>,
            is in production.
          </p>
          <p>
            <strong>The LPP Band</strong> is the children&rsquo;s companion act:
            the Bayou Cove characters from <em>Liberty&rsquo;s Principles
            Pals</em> performing kid-versioned treatments of the same
            principles their books explore. The first EP, <em>The Bayou Cove
            Sessions, Vol.&nbsp;1</em>, is in production.
          </p>
          <p>
            A third concept&nbsp;&mdash; <em>Cappy &amp; Belle&rsquo;s Civics
            Jukebox</em>, an older Schoolhouse Rock-inspired idea&nbsp;&mdash; is
            on hold but not abandoned.
          </p>
        </>
      }
      audience={
        <p>
          For Article&nbsp;V: adult listeners who want their civic content
          delivered through music rather than essays, including the
          podcast-and-album crowd that already buys themed concept records.
          For the LPP Band: parents and elementary classrooms that want sing-along
          companions to the picture-book series.
        </p>
      }
      problem={
        <p>
          Civic education has a memorable-music gap: most of the founding
          principles have no song attached to them outside the few covered by
          Schoolhouse Rock. Music is one of the most reliable mnemonic vehicles
          ever discovered; Project Potsie writes the songs the founders
          themselves never had a chance to hear.
        </p>
      }
      sections={[
        {
          heading: 'Production stack',
          body: (
            <p>
              Suno.ai for lyrics-to-audio, DistroKid for distribution to 150+
              platforms, DistroVid for video. Seventeen .wav tracks recorded
              as of April 2026.
            </p>
          ),
        },
      ]}
      contact={
        <p>
          Sync, licensing, and partnership inquiries for either act should be
          routed through the partnerships page. Press requests about the
          concept (the founder-band format, the LPP-Band tie-in) through the
          press page.
        </p>
      }
    />
  );
}
