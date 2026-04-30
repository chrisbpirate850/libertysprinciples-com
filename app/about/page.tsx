import Link from 'next/link';
import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';
import { MissionStatement } from '@/components/MissionStatement';
import { JsonLd } from '@/components/JsonLd';

export const metadata: Metadata = {
  title: 'About',
  description:
    "The mission, the founder, and the editorial standards behind Liberty's Principles Media — a one-veteran civic press building toward July 4, 2026.",
  alternates: { canonical: 'https://www.libertysprinciples.com/about/' },
};

const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Christopher J. Bradley',
  jobTitle: 'Founder',
  worksFor: {
    '@type': 'Organization',
    name: "Liberty's Principles Media",
  },
  alumniOf: [
    {
      '@type': 'CollegeOrUniversity',
      name: 'Pennsylvania State University',
    },
    {
      '@type': 'CollegeOrUniversity',
      name: 'Franklin Pierce Law Center',
    },
  ],
  description:
    'Gulf War veteran, lawyer (J.D. and M.I.P.), author of Zen and the Art of Citizenship.',
  url: 'https://www.libertysprinciples.com/about/',
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={PERSON_SCHEMA} />

      {/* HEADER */}
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-prose px-6 lg:px-10 pt-20 pb-16 md:pt-32 md:pb-20">
          <p className="eyebrow mb-6">About</p>
          <h1 className="font-display text-h1 leading-[1.05] text-balance mb-8">
            A one-veteran civic press, building toward July&nbsp;4,&nbsp;2026.
          </h1>
          <MissionStatement />
        </div>
      </section>

      {/* THE MISSION */}
      <Reveal>
        <article className="mx-auto max-w-prose px-6 lg:px-10 py-24 md:py-28">
          <p className="eyebrow mb-4">The mission</p>
          <h2 className="font-display text-h2 mb-8 text-balance">
            Civic education, returned to the public.
          </h2>
          <p className="lead text-lg leading-relaxed text-ink/85 text-pretty">
            Liberty&rsquo;s Principles Media exists because the country is approaching its
            two hundred and fiftieth anniversary, and most of the institutions that
            used to teach citizens what the founding principles actually said have
            either drifted into partisan combat or gone quiet altogether. The company
            fills that gap from the bottom up: a small catalog of books, music,
            software, and journalism written for ordinary people, in plain English,
            without a flag waved at any party.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ink/85 text-pretty">
            The work is built around a single spine&nbsp;&mdash; the preamble plus
            twenty-five founding principles drawn from <em>Zen and the Art of
            Citizenship</em>. Same principles for a seven-year-old in a picture book,
            for a chamber-sponsored postcard on a household kitchen table, and for an
            adult typing a legal question into a search box. One library, many doors.
          </p>
        </article>
      </Reveal>

      <hr className="editorial-rule mx-auto max-w-prose" />

      {/* THE FOUNDER — third-person bio per spec */}
      <Reveal>
        <article className="mx-auto max-w-prose px-6 lg:px-10 py-24 md:py-28">
          <p className="eyebrow mb-4">The founder</p>
          <h2 className="font-display text-h2 mb-8 text-balance">
            Christopher&nbsp;J.&nbsp;Bradley.
          </h2>

          <p className="text-lg leading-relaxed text-ink/85 text-pretty">
            Christopher J. Bradley is a Gulf War veteran. He enlisted in the Army in
            1988, two months after his seventeenth birthday, and served through the
            war that followed. After his discharge he went back to school on the
            G.I. Bill, earning a Bachelor of Science in the Administration of
            Justice, Penn State University, Class of &rsquo;96, then a J.D. and a
            Master of Intellectual Property from Franklin Pierce Law Center. He
            practiced law for fourteen years; his bar license is now inactive.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ink/85 text-pretty">
            The path between the courtroom and Liberty&rsquo;s Principles Media was
            not a straight line. It included homelessness, a long rebuild, and a
            move to a sailboat in Niceville, Florida, where the company is run from
            a slip at Oak Marina. The operating budget is funded entirely by his
            VA disability compensation. Every dollar the company spends comes from
            money the federal government pays him for service-connected injuries,
            which is why the company&rsquo;s output is given back to the public:
            it was already paid for, once, by everyone.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ink/85 text-pretty">
            Bradley is the author of <em>Zen and the Art of Citizenship: An Inquiry
            into Principles</em>, the book that supplies the principle ordering used
            across every Liberty&rsquo;s Principles Media product. He wrote the
            twenty-nine <em>Liberty&rsquo;s Principles Pals</em> children&rsquo;s
            books that anchor the educational catalog. He also wrote and produced
            the <em>Peaceful Pirate Adventures</em> series.
          </p>
        </article>
      </Reveal>

      <hr className="editorial-rule mx-auto max-w-prose" />

      {/* NON-PARTISAN COMMITMENT */}
      <Reveal>
        <article className="mx-auto max-w-prose px-6 lg:px-10 py-24 md:py-28">
          <p className="eyebrow mb-4">Editorial standards</p>
          <h2 className="font-display text-h2 mb-8 text-balance">
            Non-partisan, on the record.
          </h2>
          <p className="text-lg leading-relaxed text-ink/85 text-pretty">
            Liberty&rsquo;s Principles Media does not endorse candidates, parties,
            or legislation. The company&rsquo;s purpose is to promote constitutional
            literacy and civic engagement across all communities. The voice is
            lawyer-curated rather than partisan-curated&nbsp;&mdash; a deliberate
            choice that rules out restoration-or-decline framing, inflammatory
            adjectives, and the us-versus-them register that has become the
            default in American civic content.
          </p>
          <p className="mt-6 text-lg leading-relaxed text-ink/85 text-pretty">
            All source attribution traces back to <em>Zen and the Art of
            Citizenship</em>, Bradley&rsquo;s own treatment of the founding
            principles. The company does not cite earlier popularizations of the
            same material; the position is that an honest civic education company
            should be willing to publish its own argument and stand on it.
          </p>
        </article>
      </Reveal>

      <hr className="editorial-rule mx-auto max-w-prose" />

      {/* THE SEVEN PROPERTIES — brief mention */}
      <Reveal>
        <article className="mx-auto max-w-prose px-6 lg:px-10 py-24 md:py-28">
          <p className="eyebrow mb-4">The properties</p>
          <h2 className="font-display text-h2 mb-8 text-balance">
            One spine, seven surfaces.
          </h2>
          <p className="text-lg leading-relaxed text-ink/85 text-pretty">
            The company maintains seven properties: a marketing and directory hub at
            libertysprinciplesmedia.com; a children&rsquo;s book series at{' '}
            libertysprinciplespals.com; a 9&times;12 civic-education postcard
            distributed through chambers of commerce at commonsensequarterly.com; an
            AI-powered legal-information service at whatlaw.ai; an AI legal-billing
            review tool at fairbillanalyzer.com; the source book and a memoir
            companion at theartofcitizenship.com; and a music arm called Project
            Potsie. Each property is described in detail on the{' '}
            <Link href="/portfolio/" className="ed-link">
              portfolio
            </Link>{' '}
            page.
          </p>
        </article>
      </Reveal>

      <hr className="editorial-rule mx-auto max-w-prose" />

      {/* THE TEAM */}
      <Reveal>
        <article className="mx-auto max-w-prose px-6 lg:px-10 py-24 md:py-28">
          <p className="eyebrow mb-4">The team</p>
          <h2 className="font-display text-h2 mb-8 text-balance">
            One founder, one assistant, room for one more.
          </h2>
          <p className="text-lg leading-relaxed text-ink/85 text-pretty">
            Liberty&rsquo;s Principles Media is run by Christopher&nbsp;J.&nbsp;Bradley.
            Day-to-day operations are supported by an internal AI assistant called
            Liberty Belle, which manages outreach, scheduling, and the catalog of
            ongoing work. The company is small on purpose. There is room on the
            roster for one more partner if the right one ever appears; until then
            the work continues at one-veteran scale.
          </p>
        </article>
      </Reveal>

      <hr className="editorial-rule mx-auto max-w-prose" />

      {/* GET IN TOUCH */}
      <Reveal>
        <section className="mx-auto max-w-prose px-6 lg:px-10 py-24 md:py-28">
          <p className="eyebrow mb-4">Get in touch</p>
          <h2 className="font-display text-h2 mb-8 text-balance">
            Choose the right door.
          </h2>
          <ul className="space-y-4 text-lg">
            <li>
              <Link href="/contact/" className="ed-link">
                General inquiries &rarr;
              </Link>
            </li>
            <li>
              <Link href="/partnerships/" className="ed-link">
                Chamber, education, and licensing partnerships &rarr;
              </Link>
            </li>
            <li>
              <Link href="/press/" className="ed-link">
                Press, podcast, and media requests &rarr;
              </Link>
            </li>
          </ul>
        </section>
      </Reveal>
    </>
  );
}
