import type { Metadata } from 'next';
import { PropertyProfile } from '@/components/PropertyProfile';

export const metadata: Metadata = {
  title: 'Common Sense Quarterly',
  description:
    "Corporate profile of CSQ — the 9×12 civic-education postcard distributed through chambers of commerce, with lawyer-curated copy on every spot.",
  alternates: {
    canonical: 'https://www.libertysprinciples.com/portfolio/common-sense-quarterly/',
  },
};

export default function Page() {
  return (
    <PropertyProfile
      eyebrow="Local civic publishing &amp; SaaS"
      name="Common Sense Quarterly"
      tagline="A 9×12 civic-education postcard, distributed through chambers of commerce, with lawyer-curated copy on every sponsor spot."
      canonicalUrl="https://commonsensequarterly.com"
      canonicalLabel="commonsensequarterly.com"
      pricing="$549 per sponsor spot. Operator program for chambers."
      what={
        <>
          <p>
            Common Sense Quarterly is a quarterly 9&times;12 civic-education
            postcard delivered via USPS EDDM to as many as 5,000 households per
            ZIP per day. The civic side of the postcard carries community
            spotlights, principle-of-the-quarter features, local government
            updates, a Know Your Rights amendment feature, and a collectible
            character card. The reverse holds twenty sponsor spots&nbsp;&mdash;
            and unlike any other direct-mail product on the market, every
            sponsor spot ships with lawyer-curated civic copy that connects the
            sponsor&rsquo;s industry to a founding principle.
          </p>
          <p>
            The platform is a multi-tenant SaaS. Chambers of commerce or
            qualified entrepreneurs operate editions in their own ZIP code,
            recruit sponsors, and earn roughly $24,000&ndash;$28,000 net per
            year. The platform handles content generation, design, payments,
            print logistics, and analytics.
          </p>
        </>
      }
      audience={
        <p>
          Chambers of commerce looking for a high-margin recurring program tied
          to America&rsquo;s 250th. Entrepreneurs in markets where no chamber
          has yet stepped forward. Local sponsors&nbsp;&mdash; legal,
          dental, real estate, HVAC, accounting, insurance, twenty categories
          in all&nbsp;&mdash; who want their advertising to carry civic weight
          rather than coupon-flyer noise.
        </p>
      }
      problem={
        <p>
          Direct-mail postcards have an attention problem; they get glanced at
          and tossed. Civic education has a distribution problem; the people
          who would benefit most rarely opt in. CSQ solves both by turning the
          postcard into a household-delivered civic publication that carries
          its own sponsorship economics. Households read it because it&rsquo;s
          interesting; sponsors fund it because their copy reads like an
          editorial, not an ad.
        </p>
      }
      sections={[
        {
          heading: 'Operator economics',
          body: (
            <p>
              Twenty spots at $549 = $10,980 gross per edition. Platform share
              of 15% (10% for enterprise). Production costs of roughly
              $2,200&ndash;$3,300 per edition (print, postage, mailing
              services). Net to operator: approximately
              $6,000&ndash;$7,100 per edition, around $24,000&ndash;$28,000
              annually at four editions per year.
            </p>
          ),
        },
      ]}
      quote={{
        text: 'Direct mail with civics in the marrow. Every spot earns its space because the copy actually teaches something.',
        attribution: 'Christopher J. Bradley, on the CSQ thesis',
      }}
      contact={
        <p>
          Chamber operator program inquiries should be routed through the
          partnerships page. Press inquiries about the CSQ thesis, the US
          Chamber Foundation 250th Business Playbook alignment, or operator
          economics should be routed through the press desk.
        </p>
      }
    />
  );
}
