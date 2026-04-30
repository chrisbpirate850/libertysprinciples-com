import type { Metadata } from 'next';
import { Reveal } from '@/components/Reveal';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Press',
  description:
    "Press kit for Liberty's Principles Media — founder bio, key facts, talking points, and brand assets for journalists, podcasters, and partners.",
  alternates: { canonical: 'https://www.libertysprinciples.com/press/' },
};

export default function PressPage() {
  return (
    <>
      {/* HEADER */}
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-prose px-6 lg:px-10 pt-20 pb-16 md:pt-32 md:pb-20">
          <p className="eyebrow mb-6">Press</p>
          <h1 className="font-display text-h1 leading-[1.05] text-balance mb-8">
            Press kit.
          </h1>
          <p className="text-lg leading-relaxed text-ink/80 text-pretty">
            Self-serve materials for journalists, podcasters, and partner
            organizations covering Liberty&rsquo;s Principles Media or any of its
            seven properties. Reach out at{' '}
            <a className="ed-link" href="mailto:press@libertysprinciples.com">
              press@libertysprinciples.com
            </a>{' '}
            for anything not listed below.
          </p>
        </div>
      </section>

      {/* KEY FACTS */}
      <Reveal>
        <article className="mx-auto max-w-prose px-6 lg:px-10 py-20 md:py-24">
          <p className="eyebrow mb-4">Key facts</p>
          <h2 className="font-display text-h2 mb-8 text-balance">
            About the company.
          </h2>
          <dl className="grid grid-cols-1 sm:grid-cols-[12rem_1fr] gap-y-3 gap-x-6 text-base">
            <dt className="font-medium text-ink/65">Founded</dt>
            <dd className="text-ink/85">2025</dd>

            <dt className="font-medium text-ink/65">Founder</dt>
            <dd className="text-ink/85">Christopher J. Bradley, J.D.</dd>

            <dt className="font-medium text-ink/65">Headquarters</dt>
            <dd className="text-ink/85">Niceville, Florida (Oak Marina)</dd>

            <dt className="font-medium text-ink/65">Team size</dt>
            <dd className="text-ink/85">One founder + AI operations</dd>

            <dt className="font-medium text-ink/65">Funding</dt>
            <dd className="text-ink/85">VA disability compensation; no outside investors</dd>

            <dt className="font-medium text-ink/65">Products</dt>
            <dd className="text-ink/85">Seven properties (see Portfolio)</dd>

            <dt className="font-medium text-ink/65">Launch event</dt>
            <dd className="text-ink/85">July 4, 2026 (America 250)</dd>

            <dt className="font-medium text-ink/65">Source spine</dt>
            <dd className="text-ink/85">
              <em>Zen and the Art of Citizenship</em>; preamble + 25 founding principles
            </dd>
          </dl>
        </article>
      </Reveal>

      <hr className="editorial-rule mx-auto max-w-prose" />

      {/* FOUNDER BIO */}
      <Reveal>
        <article className="mx-auto max-w-prose px-6 lg:px-10 py-20 md:py-24">
          <p className="eyebrow mb-4">Founder bio</p>
          <h2 className="font-display text-h2 mb-8 text-balance">
            Three lengths.
          </h2>

          <h3 className="font-display text-h3 mb-3 mt-10">Short (one sentence)</h3>
          <p className="text-base leading-relaxed text-ink/85 italic border-l-2 border-ink/20 pl-4">
            Christopher J. Bradley, J.D., is a Gulf War veteran and the founder
            of Liberty&rsquo;s Principles Media, a grassroots civic education
            company built for America&rsquo;s third quarter-millennium.
          </p>

          <h3 className="font-display text-h3 mb-3 mt-10">Medium (one paragraph)</h3>
          <p className="text-base leading-relaxed text-ink/85 italic border-l-2 border-ink/20 pl-4">
            Christopher J. Bradley is a Gulf War veteran, a lawyer with a J.D.
            and a Master of Intellectual Property from Franklin Pierce Law
            Center, and the founder of Liberty&rsquo;s Principles Media. From a
            sailboat in Niceville, Florida, he runs a seven-property civic
            education company funded entirely by his VA disability
            compensation. He is the author of <em>Zen and the Art of Citizenship:
            An Inquiry into Principles</em> and the twenty-nine
            <em>Liberty&rsquo;s Principles Pals</em> picture books, both
            launching July 4, 2026.
          </p>

          <h3 className="font-display text-h3 mb-3 mt-10">Long (two paragraphs)</h3>
          <p className="text-base leading-relaxed text-ink/85 italic border-l-2 border-ink/20 pl-4">
            Christopher J. Bradley enlisted in the U.S. Army in 1988, two
            months after his seventeenth birthday, and served through the Gulf
            War that followed. He left the service, used the G.I. Bill to
            finance law school, and earned a J.D. and a Master of Intellectual
            Property from Franklin Pierce Law Center. He practiced law for
            fourteen years; his bar license is now inactive.
          </p>
          <p className="mt-4 text-base leading-relaxed text-ink/85 italic border-l-2 border-ink/20 pl-4">
            In 2025 he founded Liberty&rsquo;s Principles Media, a
            seven-property civic education company built for the country&rsquo;s
            two hundred and fiftieth anniversary. The company runs from a slip
            at Oak Marina in Niceville, Florida, and is funded entirely by
            his VA disability compensation. He is the author of <em>Zen and
            the Art of Citizenship</em> and the twenty-nine
            <em>Liberty&rsquo;s Principles Pals</em> children&rsquo;s books.
          </p>
        </article>
      </Reveal>

      <hr className="editorial-rule mx-auto max-w-prose" />

      {/* TALKING POINTS */}
      <Reveal>
        <article className="mx-auto max-w-prose px-6 lg:px-10 py-20 md:py-24">
          <p className="eyebrow mb-4">Talking points</p>
          <h2 className="font-display text-h2 mb-8 text-balance">
            What Bradley speaks on.
          </h2>
          <ul className="space-y-4 text-lg text-ink/85 leading-relaxed">
            <li>
              <strong>The grassroots America 250 angle.</strong> Why the
              two hundred and fiftieth anniversary should be the inflection
              point for civic literacy, and why the work has to come from the
              bottom up.
            </li>
            <li>
              <strong>Article&nbsp;V and constitutional amendment.</strong> The
              one mechanism the founders left for ordinary citizens to update
              their own framework, and why most Americans have never used it.
            </li>
            <li>
              <strong>The 25 founding principles, arc-of-life ordering.</strong>{' '}
              The reordering Bradley developed in <em>Zen and the Art of
              Citizenship</em>: individual, family, society, governance.
            </li>
            <li>
              <strong>The Liberty&rsquo;s Principles Pals series.</strong>{' '}
              Twenty-nine picture books, set in Bayou Cove, in the
              <em> Liberty&rsquo;s Kids</em> tradition.
            </li>
            <li>
              <strong>The veteran-funded civic press model.</strong> What it
              means to run an editorial company on disability pay, and why
              that funding source shapes the editorial standards.
            </li>
            <li>
              <strong>Lawyer-curated AI for legal access.</strong> The thesis
              behind WhatLaw.ai and Fair Bill Analyzer, and the difference
              between legal information and legal advice.
            </li>
          </ul>
        </article>
      </Reveal>

      <hr className="editorial-rule mx-auto max-w-prose" />

      {/* BRAND KIT */}
      <Reveal>
        <article className="mx-auto max-w-prose px-6 lg:px-10 py-20 md:py-24">
          <p className="eyebrow mb-4">Brand kit</p>
          <h2 className="font-display text-h2 mb-8 text-balance">
            Logos, colors, type.
          </h2>
          <p className="text-lg leading-relaxed text-ink/85 mb-6 text-pretty">
            High-resolution logos, a press-quality founder photo, and the full
            visual identity guide are available on request. Email{' '}
            <a className="ed-link" href="mailto:press@libertysprinciples.com">
              press@libertysprinciples.com
            </a>{' '}
            with the publication and intended use; assets typically arrive
            within one business day.
          </p>

          <h3 className="font-display text-h3 mb-3 mt-10">Color palette</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 my-6">
            <div className="border border-ink/15 p-4">
              <div className="h-12 mb-2 bg-parchment border border-ink/15"></div>
              <p className="text-xs font-mono text-ink/75">Parchment</p>
              <p className="text-xs text-ink/50">HSL 45 23 97</p>
            </div>
            <div className="border border-ink/15 p-4">
              <div className="h-12 mb-2 bg-ink"></div>
              <p className="text-xs font-mono text-ink/75">Ink Blue</p>
              <p className="text-xs text-ink/50">HSL 220 69 20</p>
            </div>
            <div className="border border-ink/15 p-4">
              <div className="h-12 mb-2 bg-liberty-gold"></div>
              <p className="text-xs font-mono text-ink/75">Liberty Gold</p>
              <p className="text-xs text-ink/50">HSL 46 87 65</p>
            </div>
            <div className="border border-ink/15 p-4">
              <div className="h-12 mb-2 bg-patriot-red"></div>
              <p className="text-xs font-mono text-ink/75">Patriot Red</p>
              <p className="text-xs text-ink/50">HSL 2 74 58</p>
            </div>
          </div>

          <h3 className="font-display text-h3 mb-3 mt-10">Typography</h3>
          <p className="text-base leading-relaxed text-ink/85 text-pretty">
            <strong>Display:</strong> Fraunces (Google Fonts). Weights 400&ndash;700.
            <br />
            <strong>Body:</strong> Inter Tight (Google Fonts). Weights 400&ndash;600.
          </p>
        </article>
      </Reveal>

      <hr className="editorial-rule mx-auto max-w-prose" />

      {/* RECENT PRESS */}
      <Reveal>
        <article className="mx-auto max-w-prose px-6 lg:px-10 py-20 md:py-24">
          <p className="eyebrow mb-4">Recent press</p>
          <h2 className="font-display text-h2 mb-8 text-balance">
            Coverage forthcoming.
          </h2>
          <p className="text-lg leading-relaxed text-ink/75 italic">
            Press coverage will appear here as it lands. Until then, this is
            placeholder space&nbsp;&mdash; an honest one.
          </p>
        </article>
      </Reveal>

      <hr className="editorial-rule mx-auto max-w-prose" />

      {/* PRESS CONTACT FORM */}
      <Reveal>
        <section className="mx-auto max-w-prose px-6 lg:px-10 py-20 md:py-24">
          <p className="eyebrow mb-4">Press contact</p>
          <ContactForm
            heading="Reach the press desk."
            intro="A direct line to the press desk for interview requests, fact-checks, and review copies. The press desk responds within three business days."
            audiences={false}
            fallbackEmail="press@libertysprinciples.com"
            subjectPrefix="Press inquiry — libertysprinciples.com"
            submitLabel="Send to press desk"
          />
        </section>
      </Reveal>
    </>
  );
}
