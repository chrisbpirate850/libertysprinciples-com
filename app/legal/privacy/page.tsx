import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: "Privacy policy for Liberty's Principles Media.",
  alternates: { canonical: 'https://www.libertysprinciples.com/legal/privacy/' },
};

const EFFECTIVE = 'April 30, 2026';

export default function PrivacyPage() {
  return (
    <article className="mx-auto max-w-prose px-6 lg:px-10 pt-20 pb-32 md:pt-32 md:pb-40">
      <p className="eyebrow mb-6">Legal</p>
      <h1 className="font-display text-h1 leading-[1.05] text-balance mb-2">
        Privacy Policy.
      </h1>
      <p className="text-sm text-ink/60 mb-12">Effective {EFFECTIVE}</p>

      <div className="space-y-10 text-lg leading-relaxed text-ink/85 text-pretty">
        <section>
          <h2 className="font-display text-h3 mb-4">1. Who we are</h2>
          <p>
            This privacy policy applies to libertysprinciples.com (the
            corporate / holding-company site for Liberty&rsquo;s Principles
            Media). Each individual property owned by Liberty&rsquo;s
            Principles Media (libertysprinciplesmedia.com,
            libertysprinciplespals.com, commonsensequarterly.com, whatlaw.ai,
            fairbillanalyzer.com, theartofcitizenship.com) maintains its own
            privacy policy specific to that property and any payment processor,
            authentication provider, or analytics service it uses.
          </p>
        </section>

        <section>
          <h2 className="font-display text-h3 mb-4">2. What this site collects</h2>
          <p>
            libertysprinciples.com is a static informational site. It does
            not require an account, does not run third-party analytics by
            default, and does not host advertising. Visiting the site does
            not place tracking cookies on your device.
          </p>
          <p className="mt-4">
            If you submit the contact, partnership, or press form, the form
            opens an email draft in your local mail client containing the name,
            email address, audience selection, and message you provided. That
            information is sent only when you click send in your own mail
            client. Liberty&rsquo;s Principles Media receives the email and
            uses it solely to respond to your inquiry. The information is
            stored in standard email infrastructure and is not transferred to
            any third party for marketing purposes.
          </p>
        </section>

        <section>
          <h2 className="font-display text-h3 mb-4">3. Hosting and logs</h2>
          <p>
            The site is hosted on Vercel. Vercel&rsquo;s infrastructure logs
            standard request information (IP address, user agent, request
            path, timestamp) for operational purposes. Liberty&rsquo;s
            Principles Media does not access these logs for marketing
            analysis. Vercel&rsquo;s own privacy practices apply to that
            information.
          </p>
        </section>

        <section>
          <h2 className="font-display text-h3 mb-4">4. Cookies</h2>
          <p>
            libertysprinciples.com sets no first-party cookies and embeds no
            third-party scripts that set cookies. If this changes in the
            future, this policy will be updated and a cookie notice will be
            added to the site.
          </p>
        </section>

        <section>
          <h2 className="font-display text-h3 mb-4">5. Children&rsquo;s privacy</h2>
          <p>
            libertysprinciples.com is a corporate site intended for adults.
            Liberty&rsquo;s Principles Media&rsquo;s children&rsquo;s
            properties (most notably libertysprinciplespals.com) follow
            COPPA-aligned practices specific to those surfaces. Do not submit
            the contact form on this site on behalf of a child.
          </p>
        </section>

        <section>
          <h2 className="font-display text-h3 mb-4">6. Your rights</h2>
          <p>
            If you have submitted information to Liberty&rsquo;s Principles
            Media via this site, you may request deletion of that information
            at any time by writing to{' '}
            <a className="ed-link" href="mailto:privacy@libertysprinciples.com">
              privacy@libertysprinciples.com
            </a>
            . Requests are honored within thirty days.
          </p>
        </section>

        <section>
          <h2 className="font-display text-h3 mb-4">7. Changes to this policy</h2>
          <p>
            Material changes to this policy will be posted on this page with a
            revised effective date. Liberty&rsquo;s Principles Media does not
            email subscribers about policy changes; please check this page if
            the policy is material to you.
          </p>
        </section>

        <section>
          <h2 className="font-display text-h3 mb-4">8. Contact</h2>
          <p>
            Questions about this policy:{' '}
            <a className="ed-link" href="mailto:privacy@libertysprinciples.com">
              privacy@libertysprinciples.com
            </a>
            .
          </p>
        </section>
      </div>

      <p className="mt-16 text-sm text-ink/55">
        This policy was authored in plain English by Liberty&rsquo;s
        Principles Media&rsquo;s founder, who holds a J.D. and an M.I.P.
        It is not legal advice for any other party.
      </p>
    </article>
  );
}
