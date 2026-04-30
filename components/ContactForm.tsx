'use client';

import { useState } from 'react';

type AudienceOption = {
  value: string;
  label: string;
};

type ContactFormProps = {
  /** Heading rendered above the form. */
  heading?: string;
  /** Optional sub-heading copy. */
  intro?: string;
  /** Audience radio options; pass false to omit the audience field. */
  audiences?: AudienceOption[] | false;
  /** Email used for the mailto fallback when JS-only submission isn't wired. */
  fallbackEmail?: string;
  /** Submit button label. */
  submitLabel?: string;
  /** Subject line prefix used in the mailto fallback. */
  subjectPrefix?: string;
};

const DEFAULT_AUDIENCES: AudienceOption[] = [
  { value: 'parent', label: 'Parent or family' },
  { value: 'educator', label: 'Educator' },
  { value: 'citizen', label: 'Citizen' },
  { value: 'journalist', label: 'Journalist' },
  { value: 'partner', label: 'Partner / chamber' },
  { value: 'other', label: 'Other' },
];

/**
 * Static-export-safe contact form. Default behavior assembles a mailto:
 * draft so the static site has zero server dependency. Replace `onSubmit`
 * with a Resend or Kit endpoint when the corporate site adds a backend.
 */
export function ContactForm({
  heading,
  intro,
  audiences = DEFAULT_AUDIENCES,
  fallbackEmail = 'hello@libertysprinciples.com',
  submitLabel = 'Send',
  subjectPrefix = 'libertysprinciples.com inquiry',
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const audience = String(data.get('audience') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    const subject = encodeURIComponent(
      audience ? `${subjectPrefix} — ${audience}` : subjectPrefix
    );
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n${audience ? `Audience: ${audience}\n` : ''}\n${message}\n`
    );

    window.location.href = `mailto:${fallbackEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section aria-label={heading ?? 'Contact form'} className="bg-parchment border border-ink/15 p-8 md:p-10">
      {heading && (
        <h2 className="font-display text-h3 mb-2 text-balance">{heading}</h2>
      )}
      {intro && <p className="text-ink/75 mb-6 max-w-prose">{intro}</p>}

      <form onSubmit={handleSubmit} className="grid gap-5">
        <div className="grid gap-1.5">
          <label htmlFor="name" className="text-sm font-medium text-ink">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="border border-ink/25 bg-parchment px-3 py-2.5 text-base focus:border-ink focus:outline-none rounded-sm"
          />
        </div>

        <div className="grid gap-1.5">
          <label htmlFor="email" className="text-sm font-medium text-ink">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="border border-ink/25 bg-parchment px-3 py-2.5 text-base focus:border-ink focus:outline-none rounded-sm"
          />
        </div>

        {audiences && (
          <fieldset className="grid gap-2">
            <legend className="text-sm font-medium text-ink mb-1">
              I&rsquo;m a&hellip;
            </legend>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {audiences.map((opt) => (
                <label
                  key={opt.value}
                  className="flex items-center gap-2 text-sm text-ink/85 cursor-pointer"
                >
                  <input
                    type="radio"
                    name="audience"
                    value={opt.value}
                    className="h-4 w-4 border-ink/40 text-ink focus:ring-ink"
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          </fieldset>
        )}

        <div className="grid gap-1.5">
          <label htmlFor="message" className="text-sm font-medium text-ink">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            required
            className="border border-ink/25 bg-parchment px-3 py-2.5 text-base focus:border-ink focus:outline-none rounded-sm resize-y"
          />
        </div>

        <div className="flex items-center justify-between gap-4 pt-2">
          <p className="text-xs text-ink/60">
            Liberty&rsquo;s Principles Media aims to respond within three business days.
          </p>
          <button type="submit" className="cta-primary">
            {submitLabel}
          </button>
        </div>

        {submitted && (
          <p
            role="status"
            className="text-sm text-ink/75 border-t border-ink/10 pt-4 mt-2"
          >
            Your email client should have opened a draft. If it didn&rsquo;t, write directly to{' '}
            <a className="ed-link" href={`mailto:${fallbackEmail}`}>
              {fallbackEmail}
            </a>
            .
          </p>
        )}
      </form>
    </section>
  );
}
