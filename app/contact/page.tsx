import type { Metadata } from 'next';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { ContactForm } from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "General contact for Liberty's Principles Media. Press goes to /press, partnerships to /partnerships, everything else here.",
  alternates: { canonical: 'https://www.libertysprinciples.com/contact/' },
};

export default function ContactPage() {
  return (
    <>
      {/* HEADER */}
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-prose px-6 lg:px-10 pt-20 pb-16 md:pt-32 md:pb-20">
          <p className="eyebrow mb-6">Contact</p>
          <h1 className="font-display text-h1 leading-[1.05] text-balance mb-8">
            Send a note.
          </h1>
          <p className="text-lg leading-relaxed text-ink/80 text-pretty">
            For general inquiries, audience routing, and feedback. For press,
            see{' '}
            <Link href="/press/" className="ed-link">
              press
            </Link>
            ; for chamber, education, and licensing, see{' '}
            <Link href="/partnerships/" className="ed-link">
              partnerships
            </Link>
            .
          </p>
        </div>
      </section>

      {/* FORM */}
      <Reveal>
        <section className="mx-auto max-w-prose px-6 lg:px-10 py-20 md:py-24">
          <ContactForm
            heading="General contact."
            intro="A single form. Pick the audience that best describes you so the message gets to the right place."
            fallbackEmail="hello@libertysprinciples.com"
            subjectPrefix="Inquiry — libertysprinciples.com"
            submitLabel="Send"
          />
        </section>
      </Reveal>

      <hr className="editorial-rule mx-auto max-w-prose" />

      {/* DIRECT INFO */}
      <Reveal>
        <section className="mx-auto max-w-prose px-6 lg:px-10 py-20 md:py-24">
          <p className="eyebrow mb-4">Direct lines</p>
          <h2 className="font-display text-h2 mb-8 text-balance">
            Or write directly.
          </h2>

          <dl className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-y-3 gap-x-6 text-base">
            <dt className="font-medium text-ink/65">General</dt>
            <dd className="text-ink/85">
              <a className="ed-link" href="mailto:hello@libertysprinciples.com">
                hello@libertysprinciples.com
              </a>
            </dd>

            <dt className="font-medium text-ink/65">Press</dt>
            <dd className="text-ink/85">
              <a className="ed-link" href="mailto:press@libertysprinciples.com">
                press@libertysprinciples.com
              </a>
            </dd>

            <dt className="font-medium text-ink/65">Partnerships</dt>
            <dd className="text-ink/85">
              <a className="ed-link" href="mailto:partnerships@libertysprinciples.com">
                partnerships@libertysprinciples.com
              </a>
            </dd>

            <dt className="font-medium text-ink/65">Mailing</dt>
            <dd className="text-ink/85">
              Liberty&rsquo;s Principles Media
              <br />
              Niceville, Florida 32578
              <br />
              <span className="text-sm text-ink/55">
                (PO box on request; service-mail address available for
                accounts that require a non-residential filing.)
              </span>
            </dd>
          </dl>

          <p className="mt-10 text-sm text-ink/65">
            Liberty&rsquo;s Principles Media aims to respond within three
            business days.
          </p>
        </section>
      </Reveal>
    </>
  );
}
