import type { Metadata } from 'next';
import { PropertyProfile } from '@/components/PropertyProfile';

export const metadata: Metadata = {
  title: 'Fair Bill Analyzer',
  description:
    'Corporate profile of Fair Bill Analyzer — AI legal-billing review at $29 per analysis.',
  alternates: {
    canonical: 'https://www.libertysprinciples.com/portfolio/fairbill-analyzer/',
  },
};

export default function Page() {
  return (
    <PropertyProfile
      eyebrow="Consumer legal-billing review"
      name="Fair Bill Analyzer"
      tagline="AI legal-billing review for consumers and small businesses. $29 per analysis."
      canonicalUrl="https://fairbillanalyzer.com"
      canonicalLabel="fairbillanalyzer.com"
      pricing="$29 per analysis. Subscription tiers $99–$299/month."
      what={
        <>
          <p>
            Fair Bill Analyzer is a consumer-facing AI service that reviews
            attorney bills for the markers of overcharging the legal industry
            knows by name: padded hours, block billing, vague task
            descriptions, rate violations against the engagement letter, and
            duplicative entries. A user uploads a bill; a two-stage Gemini
            pipeline extracts the line items, then analyzes them against a
            fifty-state rules database, case law, and benchmarks.
          </p>
          <p>
            The output is a written report the consumer can send to the firm or
            file with a fee dispute. The product does not give legal advice,
            but it gives a non-lawyer the same forensic vocabulary a fee-dispute
            lawyer would use.
          </p>
        </>
      }
      audience={
        <p>
          Consumers who hired a lawyer and don&rsquo;t feel right about the
          invoice. Small business owners with corporate counsel bills they
          can&rsquo;t fully parse. Estate executors managing probate firms.
          Anyone in a fee dispute who doesn&rsquo;t want to hire a second
          lawyer to fight the first one.
        </p>
      }
      problem={
        <p>
          Attorney billing has been a black box for the entire history of the
          American bar. The information asymmetry is enormous: lawyers have
          twenty different ways to describe the same task, and clients have
          no vocabulary to challenge any of them. Fair Bill Analyzer collapses
          that asymmetry to $29.
        </p>
      }
      sections={[
        {
          heading: 'Stack',
          body: (
            <p>
              React 19 + Vite 7 frontend, Firebase Cloud Functions backend.
              Two-stage Gemini pipeline (Flash for extraction, Pro for
              analysis). Stripe Checkout in live mode. Fifty-state billing
              rules database; case law and benchmark JSON corpora.
            </p>
          ),
        },
      ]}
      contact={
        <p>
          Press inquiries about the product, the underlying billing-rules
          methodology, or the access-to-justice angle should be routed through
          the press page. Bar association, legal-aid, and consumer-protection
          partnerships through the partnerships page.
        </p>
      }
    />
  );
}
