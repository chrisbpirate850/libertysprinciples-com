import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Partnerships',
  description:
    "Chamber, education, and media partnership opportunities with Liberty's Principles Media. CSQ operator program, classroom licensing, and cross-promotion.",
  alternates: { canonical: 'https://www.libertysprinciples.com/partnerships/' },
};

const PARTNERSHIPS = [
  {
    title: 'Chambers of commerce',
    eyebrow: 'CSQ operator program',
    body: (
      <>
        <p>
          A chamber that operates an edition of <em>Common Sense Quarterly</em>
          earns roughly $24,000&ndash;$28,000 in net annual revenue
          (twenty spots at $549 per edition, four editions per year, after the
          15% platform share and production costs of $2,200&ndash;$3,300 per
          edition). The chamber recruits sponsors, coordinates the EDDM drop,
          and keeps the operating margin. Liberty&rsquo;s Principles Media
          handles the technology, the lawyer-curated copy, the design, and the
          payment infrastructure.
        </p>
        <p>
          The U.S. Chamber Foundation&rsquo;s 250th Business Playbook
          encourages chambers to lead civic education programming. CSQ is a
          way to step into that moment with a recurring revenue program
          attached.
        </p>
      </>
    ),
  },
  {
    title: 'Educators',
    eyebrow: 'Classroom licensing',
    body: (
      <>
        <p>
          Three classroom-ready surfaces. <em>Liberty&rsquo;s Principles Pals</em>
          for K&ndash;3 reading and read-aloud (twenty-nine titles, full set);
          <em> Zen and the Art of Citizenship</em> for high-school and
          college civics; the Citizen&rsquo;s Compass education app for
          gamified mode-based learning across Family, Citizen, and Educator
          modes.
        </p>
        <p>
          Curriculum licensing terms include lesson plans, discussion
          questions, parent guides, and printable activities tied to the
          twenty-five founding principles. The first wave covers eight
          priority principles across three grade bands (twenty-four lesson
          plans). Single-school, district, and statewide tiers available.
        </p>
      </>
    ),
  },
  {
    title: 'Media partners',
    eyebrow: 'Cross-promotion &amp; syndication',
    body: (
      <>
        <p>
          Daily-history features, Know Your Rights amendment briefings, and
          principle-of-the-quarter editorial are all available for
          syndication to local newspapers, civic newsletters, podcasts, and
          partner organizations. The terms are simple: attribution to
          Liberty&rsquo;s Principles Media, link back to the source surface,
          no paywall on the syndicated piece. Custom co-branded packages also
          available.
        </p>
      </>
    ),
  },
];

export default function PartnershipsPage() {
  return (
    <>
      {/* HEADER */}
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-prose px-6 lg:px-10 pt-20 pb-16 md:pt-32 md:pb-20">
          <p className="eyebrow mb-6">Partnerships</p>
          <h1 className="font-display text-h1 leading-[1.05] text-balance mb-8">
            Three doors.
          </h1>
          <p className="text-lg leading-relaxed text-ink/80 text-pretty">
            Liberty&rsquo;s Principles Media partners with three constituencies:
            chambers of commerce running local CSQ editions, educators licensing
            principle-tagged classroom material, and media partners syndicating
            editorial content. Each path is described below.
          </p>
        </div>
      </section>

      {/* THREE PARTNERSHIP TRACKS */}
      {PARTNERSHIPS.map((p, i) => (
        <Reveal key={i}>
          {i > 0 && <hr className="editorial-rule mx-auto max-w-prose" />}
          <article className="mx-auto max-w-prose px-6 lg:px-10 py-20 md:py-24">
            <p className="eyebrow mb-4">{p.eyebrow}</p>
            <h2 className="font-display text-h2 mb-8 text-balance">{p.title}</h2>
            <div className="text-lg leading-relaxed text-ink/85 space-y-6 text-pretty">
              {p.body}
            </div>
          </article>
        </Reveal>
      ))}

      <hr className="editorial-rule mx-auto max-w-prose" />

      {/* INQUIRY FORM */}
      <Reveal>
        <section className="mx-auto max-w-prose px-6 lg:px-10 py-20 md:py-24">
          <p className="eyebrow mb-4">Inquire</p>
          <ContactForm
            heading="Open a conversation."
            intro="Tell Liberty's Principles Media which door you're walking through and what you're trying to accomplish. The partnerships desk responds within three business days."
            audiences={[
              { value: 'chamber', label: 'Chamber of commerce' },
              { value: 'educator', label: 'Educator / school' },
              { value: 'district', label: 'District / state' },
              { value: 'media', label: 'Media / podcast' },
              { value: 'sponsor', label: 'Sponsor / advertiser' },
              { value: 'other', label: 'Other' },
            ]}
            fallbackEmail="partnerships@libertysprinciples.com"
            subjectPrefix="Partnership inquiry — libertysprinciples.com"
            submitLabel="Send to partnerships"
          />
        </section>
      </Reveal>
    </>
  );
}
