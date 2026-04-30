import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: "Terms of service for the libertysprinciples.com corporate site.",
  alternates: { canonical: 'https://www.libertysprinciples.com/legal/terms/' },
};

const EFFECTIVE = 'April 30, 2026';

export default function TermsPage() {
  return (
    <article className="mx-auto max-w-prose px-6 lg:px-10 pt-20 pb-32 md:pt-32 md:pb-40">
      <p className="eyebrow mb-6">Legal</p>
      <h1 className="font-display text-h1 leading-[1.05] text-balance mb-2">
        Terms of Service.
      </h1>
      <p className="text-sm text-ink/60 mb-12">Effective {EFFECTIVE}</p>

      <div className="space-y-10 text-lg leading-relaxed text-ink/85 text-pretty">
        <section>
          <h2 className="font-display text-h3 mb-4">1. Acceptance</h2>
          <p>
            By using libertysprinciples.com, you agree to these terms. If you
            do not agree, do not use the site. These terms apply only to this
            corporate site; each Liberty&rsquo;s Principles Media property
            (libertysprinciplespals.com, commonsensequarterly.com, whatlaw.ai,
            fairbillanalyzer.com, theartofcitizenship.com,
            libertysprinciplesmedia.com) maintains its own terms specific to
            the services it offers.
          </p>
        </section>

        <section>
          <h2 className="font-display text-h3 mb-4">2. The site is informational</h2>
          <p>
            libertysprinciples.com publishes information about Liberty&rsquo;s
            Principles Media as a company. The site does not sell products,
            does not collect payment, and does not establish any client,
            attorney-client, fiduciary, or advisory relationship with any
            visitor. Information on this site is not legal, financial,
            medical, or professional advice. The founder&rsquo;s bar license
            is inactive; nothing on this site constitutes the practice of
            law.
          </p>
        </section>

        <section>
          <h2 className="font-display text-h3 mb-4">3. Intellectual property</h2>
          <p>
            All content on libertysprinciples.com is owned by Liberty&rsquo;s
            Principles Media or used with permission. The brand identity,
            including the company name and the authorial monogram, is
            protected. You may quote short passages with attribution; please
            do not reproduce full pages or assets without permission. For
            press use of logos and assets, see{' '}
            <a className="ed-link" href="/press/">/press/</a>.
          </p>
        </section>

        <section>
          <h2 className="font-display text-h3 mb-4">4. Acceptable use</h2>
          <p>
            Do not use the site or its forms to send unlawful content,
            malware, or unsolicited commercial bulk messages. Do not attempt
            to circumvent any security measure, scrape the site at a rate
            that interferes with normal operation, or submit content that
            infringes the rights of any third party.
          </p>
        </section>

        <section>
          <h2 className="font-display text-h3 mb-4">5. Third-party links</h2>
          <p>
            The site links to other Liberty&rsquo;s Principles Media
            properties and to third-party sites (chambers, partners, source
            references). Liberty&rsquo;s Principles Media is not responsible
            for the content, accuracy, or practices of third-party sites.
            Linking does not constitute endorsement.
          </p>
        </section>

        <section>
          <h2 className="font-display text-h3 mb-4">6. Disclaimers</h2>
          <p>
            The site is provided &ldquo;as is&rdquo; without warranties of any
            kind, express or implied. Liberty&rsquo;s Principles Media does
            not warrant that the site will be uninterrupted, error-free, or
            free of harmful components. To the extent permitted by law,
            Liberty&rsquo;s Principles Media disclaims all warranties of
            merchantability, fitness for a particular purpose, and
            non-infringement.
          </p>
        </section>

        <section>
          <h2 className="font-display text-h3 mb-4">7. Limitation of liability</h2>
          <p>
            To the extent permitted by law, Liberty&rsquo;s Principles Media
            shall not be liable for indirect, incidental, special,
            consequential, or punitive damages arising out of or relating to
            your use of the site, even if advised of the possibility of such
            damages.
          </p>
        </section>

        <section>
          <h2 className="font-display text-h3 mb-4">8. Non-partisan posture</h2>
          <p>
            Liberty&rsquo;s Principles Media does not endorse candidates,
            parties, or legislation. The company&rsquo;s purpose is to
            promote constitutional literacy and civic engagement across all
            communities. References to historical figures, founding-era
            documents, or any party in any era are educational and do not
            constitute political endorsement.
          </p>
        </section>

        <section>
          <h2 className="font-display text-h3 mb-4">9. Governing law</h2>
          <p>
            These terms are governed by the laws of the State of Florida,
            without regard to conflict-of-laws principles. Any dispute
            arising out of or relating to these terms or the site shall be
            brought in the state or federal courts located in Okaloosa
            County, Florida.
          </p>
        </section>

        <section>
          <h2 className="font-display text-h3 mb-4">10. Changes</h2>
          <p>
            Liberty&rsquo;s Principles Media may revise these terms from time
            to time. Material changes will be posted with a new effective
            date. Continued use of the site after the effective date
            constitutes acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2 className="font-display text-h3 mb-4">11. Contact</h2>
          <p>
            Questions about these terms:{' '}
            <a className="ed-link" href="mailto:legal@libertysprinciples.com">
              legal@libertysprinciples.com
            </a>
            .
          </p>
        </section>
      </div>

      <p className="mt-16 text-sm text-ink/55">
        These terms were authored in plain English by Liberty&rsquo;s
        Principles Media&rsquo;s founder, who holds a J.D. and an M.I.P.
        They are not legal advice for any other party.
      </p>
    </article>
  );
}
