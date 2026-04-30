import Link from 'next/link';
import type { ReactNode } from 'react';
import { Reveal } from './Reveal';

type Section = {
  heading: string;
  body: ReactNode;
};

type Quote = {
  text: string;
  attribution?: string;
};

type PropertyProfileProps = {
  /** Eyebrow above the headline ("Property", "Software", "Music", etc.). */
  eyebrow: string;
  /** Display name. */
  name: string;
  /** One-sentence positioning. */
  tagline: string;
  /** Canonical public URL. */
  canonicalUrl: string;
  /** Short label on the canonical link button. */
  canonicalLabel?: string;
  /** Optional pricing / commercial line. */
  pricing?: string;
  /** Audience description. */
  audience: ReactNode;
  /** Problem the property addresses. */
  problem: ReactNode;
  /** What the property is — body content. */
  what: ReactNode;
  /** Optional additional sections. */
  sections?: Section[];
  /** Press / partnership contact line. */
  contact: ReactNode;
  /** Optional pull-quote. */
  quote?: Quote;
};

export function PropertyProfile(props: PropertyProfileProps) {
  return (
    <>
      {/* HEADER */}
      <section className="border-b border-ink/10">
        <div className="mx-auto max-w-prose px-6 lg:px-10 pt-20 pb-16 md:pt-28 md:pb-20">
          <Link
            href="/portfolio/"
            className="eyebrow inline-block mb-8 hover:text-ink transition-colors"
          >
            &larr; Portfolio
          </Link>
          <p className="eyebrow mb-4">{props.eyebrow}</p>
          <h1 className="font-display text-h1 leading-[1.05] text-balance mb-8">
            {props.name}
          </h1>
          <p className="text-xl md:text-2xl leading-snug text-ink/80 text-pretty max-w-2xl">
            {props.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 text-sm">
            <a
              href={props.canonicalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-secondary"
            >
              {props.canonicalLabel ?? 'Visit the site'}
              <span aria-hidden="true">&nbsp;&rarr;</span>
            </a>
            {props.pricing && (
              <span className="text-ink/65">{props.pricing}</span>
            )}
          </div>
        </div>
      </section>

      {/* WHAT */}
      <Reveal>
        <article className="mx-auto max-w-prose px-6 lg:px-10 py-20 md:py-24">
          <p className="eyebrow mb-4">What it is</p>
          <div className="prose-content text-lg leading-relaxed text-ink/85 space-y-6 text-pretty">
            {props.what}
          </div>
        </article>
      </Reveal>

      <hr className="editorial-rule mx-auto max-w-prose" />

      {/* AUDIENCE */}
      <Reveal>
        <article className="mx-auto max-w-prose px-6 lg:px-10 py-20 md:py-24">
          <p className="eyebrow mb-4">Who it&rsquo;s for</p>
          <div className="text-lg leading-relaxed text-ink/85 space-y-6 text-pretty">
            {props.audience}
          </div>
        </article>
      </Reveal>

      <hr className="editorial-rule mx-auto max-w-prose" />

      {/* PROBLEM */}
      <Reveal>
        <article className="mx-auto max-w-prose px-6 lg:px-10 py-20 md:py-24">
          <p className="eyebrow mb-4">The problem it addresses</p>
          <div className="text-lg leading-relaxed text-ink/85 space-y-6 text-pretty">
            {props.problem}
          </div>
        </article>
      </Reveal>

      {/* OPTIONAL ADDITIONAL SECTIONS */}
      {props.sections?.map((section, i) => (
        <Reveal key={i}>
          <hr className="editorial-rule mx-auto max-w-prose" />
          <article className="mx-auto max-w-prose px-6 lg:px-10 py-20 md:py-24">
            <p className="eyebrow mb-4">{section.heading}</p>
            <div className="text-lg leading-relaxed text-ink/85 space-y-6 text-pretty">
              {section.body}
            </div>
          </article>
        </Reveal>
      ))}

      {/* PULL QUOTE */}
      {props.quote && (
        <Reveal>
          <hr className="editorial-rule mx-auto max-w-prose" />
          <section className="mx-auto max-w-prose px-6 lg:px-10 py-16">
            <blockquote className="border-l-2 border-liberty-gold pl-6 md:pl-8">
              <p className="font-display text-2xl md:text-3xl leading-snug text-ink text-balance">
                &ldquo;{props.quote.text}&rdquo;
              </p>
              {props.quote.attribution && (
                <footer className="mt-4 text-sm text-ink/65 font-medium">
                  &mdash; {props.quote.attribution}
                </footer>
              )}
            </blockquote>
          </section>
        </Reveal>
      )}

      <hr className="editorial-rule mx-auto max-w-prose" />

      {/* CONTACT */}
      <Reveal>
        <section className="mx-auto max-w-prose px-6 lg:px-10 py-20 md:py-24">
          <p className="eyebrow mb-4">Press &amp; partnership</p>
          <div className="text-lg leading-relaxed text-ink/85 space-y-6 text-pretty">
            {props.contact}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/press/" className="cta-secondary">
              Press kit
            </Link>
            <Link href="/partnerships/" className="cta-secondary">
              Partner inquiry
            </Link>
          </div>
        </section>
      </Reveal>
    </>
  );
}
