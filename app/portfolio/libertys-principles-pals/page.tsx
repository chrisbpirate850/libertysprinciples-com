import type { Metadata } from 'next';
import { PropertyProfile } from '@/components/PropertyProfile';

export const metadata: Metadata = {
  title: "Liberty's Principles Pals",
  description:
    "Corporate profile of the LPP children's book series — 29 illustrated stories on the founding principles, set in Bayou Cove.",
  alternates: {
    canonical: 'https://www.libertysprinciples.com/portfolio/libertys-principles-pals/',
  },
};

export default function Page() {
  return (
    <PropertyProfile
      eyebrow="Children&rsquo;s book series"
      name="Liberty's Principles Pals"
      tagline="29 illustrated picture books on the founding principles, in the tradition of Liberty's Kids."
      canonicalUrl="https://libertysprinciplespals.com"
      canonicalLabel="libertysprinciplespals.com"
      pricing="Print &amp; ebook editions launching July 4, 2026."
      what={
        <>
          <p>
            Liberty&rsquo;s Principles Pals is a twenty-nine-book illustrated
            series for children ages four through nine, built around the same
            preamble plus twenty-five founding principles that anchor every other
            Liberty&rsquo;s Principles Media product. Each book sets a single
            principle inside a story&nbsp;&mdash; never as a lecture&nbsp;&mdash;
            and resolves the principle through the choices the characters make.
          </p>
          <p>
            The cast: Ande, age seven, the protagonist; her brother Sam, age six;
            their caretaker Nanny Dolores; and four animal friends who live in
            Bayou Cove&nbsp;&mdash; Terra Turtle, Scout Rabbit, Buzz Bee, and
            Flora Butterfly. Two teaching characters, Cappy and Liberty Belle,
            visit the books to anchor the principle of the story.
          </p>
          <p>
            All twenty-nine manuscripts are written and complete. Production is
            in the final stretch toward the July 4, 2026 launch.
          </p>
        </>
      }
      audience={
        <p>
          Parents and caregivers of children ages four through nine. K&ndash;3
          classroom teachers. Public librarians stocking civics shelves.
          Homeschool families looking for a continuous, principle-tagged spine
          across all twenty-nine titles.
        </p>
      }
      problem={
        <p>
          Most civic-themed children&rsquo;s books either lecture or pander. The
          ones that lecture lose the child by page three; the ones that pander
          neglect to teach. <em>Liberty&rsquo;s Principles Pals</em> is built on
          the assumption that a seven-year-old can absorb a real principle when
          it is embedded inside a real story&nbsp;&mdash; the same way
          generations of American children absorbed liberty through the stories
          their parents read to them, not through the slogans printed on
          posters.
        </p>
      }
      sections={[
        {
          heading: 'Production stack',
          body: (
            <p>
              Stories live in Supabase; the public site at
              libertysprinciplespals.com is built with Next.js and pulls book
              and song content at build time. The series ships in print and
              digital formats. A companion AI character, Terra, answers
              children&rsquo;s questions about the books on the public site.
            </p>
          ),
        },
      ]}
      contact={
        <p>
          Bookseller, library, and classroom-licensing inquiries for the series
          should be routed through the partnerships page. Press copies and
          author interviews are handled by the press desk.
        </p>
      }
    />
  );
}
