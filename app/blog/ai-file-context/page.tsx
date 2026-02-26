import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "10x better answers with zero extra effort - Travel & Startups",
  description: "How providing context folders changes AI from generic to personalized. From Tokyo hostels to startup hiring decisions.",
};

export default function TravelPlanningPost() {
  return (
    <article className="py-16">
      <div className="mx-auto max-w-2xl px-6">
        <Link href="/blog" className="text-sm text-zinc-600 hover:text-white transition-colors mb-8 block">
          &larr; Blog
        </Link>

        <header className="mb-12">
          <p className="text-sm text-zinc-600 mb-2">February 6, 2026</p>
          <h1 className="text-3xl font-bold mb-3">What if AI could give you 10x better answers - with zero extra effort?</h1>
          <p className="text-zinc-500">From planning a Japan trip to making startup hiring decisions.</p>
        </header>

        <section className="mb-10">
          <div className="space-y-6 mb-10">
            <Image 
              src="/blog/fuji-bg.jpg" 
              alt="Japan Trip Planning Context" 
              width={800} 
              height={400} 
              className="rounded-lg border border-zinc-800 w-full h-auto"
            />
          </div>

          <p className="text-zinc-400 mb-6 leading-relaxed">
            Let me show you with a Japan trip example. But this applies to hiring, strategy, everything.
          </p>

          <p className="text-zinc-400 mb-6 leading-relaxed">
            I used to ask ChatGPT: &quot;Best hostels in Tokyo?&quot;<br />
            Got Top 10 lists. Generic advice.
          </p>

          <p className="text-zinc-400 mb-6 leading-relaxed">
            I&apos;d add context. &quot;I like quiet places, good coffee nearby...&quot;<br />
            Next chat? Gone. Long chat? AI gets lost.
          </p>

          <p className="text-zinc-400 mb-6 leading-relaxed">
            Then I tried something different.
          </p>

          <h2 className="text-lg font-semibold mb-3">The power of context folders</h2>
          
          <p className="text-zinc-400 mb-6 leading-relaxed">
            Same question: &quot;Best hostels in Tokyo?&quot;
          </p>

          <p className="text-zinc-400 mb-6 leading-relaxed">
            Completely different answer:<br />
            <em>Nui Hostel. Kuramae. Rooftop. ¥3,800. Near Blue Bottle.</em>
          </p>

          <p className="text-zinc-400 mb-6 leading-relaxed">
            How did AI know I like quiet places? Specialty coffee? Rooftops?
          </p>

          <p className="text-zinc-400 mb-6 leading-relaxed">
            Because my <code>/japan-trip</code> folder told it:
          </p>
          <ul className="list-disc pl-5 text-zinc-400 mb-8 space-y-2">
            <li><code>preferences.md</code> (quiet hostels, pescetarian, specialty coffee)</li>
            <li><code>budget.md</code> (¥15,000/day)</li>
            <li><code>bookings.md</code> (JR Pass expires day 14)</li>
          </ul>

          <div className="space-y-6 mb-10">
            <Image 
              src="/blog/10x_context.jpg" 
              alt="10x Better Context" 
              width={800} 
              height={400} 
              className="rounded-lg border border-zinc-800 w-full h-auto"
            />
          </div>

          <p className="text-zinc-400 mb-6 leading-relaxed font-medium">
            One command. It read everything. Knew me better than I expected.
          </p>

          <h2 className="text-lg font-semibold mb-3">Applying it to startups</h2>

          <p className="text-zinc-400 mb-6 leading-relaxed">
            Same thing happened with my startup.
          </p>

          <p className="text-zinc-400 mb-6 leading-relaxed">
            &quot;Should we hire a designer now?&quot;
          </p>

          <p className="text-zinc-400 mb-6 leading-relaxed">
            My <code>/company</code> folder has our runway, our team gaps, our past decisions.
          </p>

          <p className="text-zinc-400 mb-6 leading-relaxed">
            AI came back: &quot;Not yet. 8 months runway. Prioritize revenue. Hire at €600k.&quot;
          </p>

          <p className="text-zinc-400 mb-8 leading-relaxed">
            That&apos;s the answer I would&apos;ve given myself. But it took me 3 seconds instead of 3 hours of overthinking.
          </p>

          <h2 className="text-lg font-semibold mb-3">The learning happens along the way</h2>

          <p className="text-zinc-400 mb-6 leading-relaxed">
            These folders live in GitHub. New laptop? Clone repo. Full context restored.
          </p>

          <p className="text-zinc-400 mb-6 leading-relaxed">
            How did I figure this out? Trial and error. Lots of &quot;dumb&quot; questions that led somewhere useful.
          </p>

          <p className="text-zinc-400 leading-relaxed font-medium">
            That&apos;s the real trick: just start. Pick any AI that can read your files. The learning happens along the way.
          </p>
        </section>

        <hr className="border-zinc-800 my-10" />

        <div className="flex gap-4 justify-center">
          <Link
            href="/blog"
            className="px-5 py-2.5 border border-zinc-700 rounded-lg hover:border-white hover:text-white transition-colors text-sm"
          >
            More posts
          </Link>
        </div>
      </div>
    </article>
  );
}