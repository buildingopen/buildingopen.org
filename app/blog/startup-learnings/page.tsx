import type { Metadata } from "next";
import Link from "next/link";
import {
  Callout,
  Figure,
  PullQuote,
  StatRow,
  SectionDivider,
} from "../../components/blog";

export const metadata: Metadata = {
  title: "4 pivots in 1.5 years: what I'd tell myself before starting - Building Open",
  description: "Venture studio. Marketing agency. Marketing SaaS. AI visibility SaaS. Here's what I learned.",
};

export default function StartupLearningsPost() {
  return (
    <article className="py-16">
      <div className="mx-auto max-w-2xl px-6">
        <Link href="/blog" className="text-sm text-zinc-500 hover:text-white transition-colors mb-8 block">
          &larr; Blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded">Founder Life</span>
            <span className="text-xs text-zinc-500">3 min read</span>
            <span className="text-xs text-zinc-500">February 4, 2026</span>
          </div>
          <h1 className="text-3xl font-bold mb-3">4 pivots in 1.5 years: what I&apos;d tell myself before starting</h1>
          <p className="text-zinc-500">Venture studio. Marketing agency. Marketing SaaS. AI visibility SaaS.</p>
        </header>

        <section className="mb-10 text-zinc-400 space-y-6">
          <p className="leading-relaxed">
            Venture studio. Marketing agency. Marketing SaaS. AI visibility SaaS.
          </p>

          <p className="leading-relaxed">
            4 pivots in 1.5 years. Here&apos;s what I&apos;d tell myself before starting.
          </p>

          <Figure
            src="/blog/pivot-visual.png"
            alt="4 Pivots in 1.5 Years"
            priority
          />

          <StatRow
            stats={[
              { value: "4", label: "pivots" },
              { value: "1.5", label: "years" },
              { value: "1", label: "profitable year" },
            ]}
          />

          <SectionDivider />

          <h2 className="text-white font-semibold text-lg mt-8 mb-2">1) Just start.</h2>
          <p className="leading-relaxed">
            I was still in uni. No team. No idea. Everyone said wait - for the right co-founder, the right concept, graduation. I started anyway. That decision taught me more than 4 years of university combined. Every month of building compounds. Same as investing - time in the market beats timing the market. There is no &quot;ready.&quot;
          </p>

          <SectionDivider />

          <h2 className="text-white font-semibold text-lg mt-8 mb-2">2) Try everything, then cut.</h2>
          <p className="leading-relaxed">
            Every pivot killed something we thought we wanted. That&apos;s the point. You can&apos;t think your way to product-market fit. You have to try enough wrong things to recognize the right one. We had to build a venture studio, run an agency, and ship a marketing SaaS before we understood what we actually cared about. Clarity comes from doing, not thinking.
          </p>

          <SectionDivider />

          <h2 className="text-white font-semibold text-lg mt-8 mb-2">3) Build it yourself.</h2>
          <p className="leading-relaxed">
            No technical co-founder. No budget. We opened Cursor and built it ourselves. Kept it brutally simple. Once we had something real, the right people showed up. 4 pivots later, profitable in year 1.
          </p>

          <PullQuote>
            The gap between thinking about starting and starting is where most founders die.
          </PullQuote>

          <Callout title="The uncomfortable truth">
            Burnout does not come from working too hard. It comes from forgetting why you started.
          </Callout>
        </section>

        <hr className="border-zinc-800 my-10" />

        <div className="mb-10">
          <p className="text-xs uppercase tracking-wider text-zinc-500 mb-4">Related posts</p>
          <div className="space-y-3">
            <Link href="/blog/founder-habits" className="block text-sm text-zinc-400 hover:text-white transition-colors">
              I treated my life like a product. Here&apos;s what I removed. &rarr;
            </Link>
            <Link href="/blog/scaile-india" className="block text-sm text-zinc-400 hover:text-white transition-colors">
              SCAILE goes to India &rarr;
            </Link>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <Link
            href="/blog"
            className="px-5 py-2.5 border border-zinc-700 rounded-lg hover:border-white hover:text-white transition-colors text-sm"
          >
            All posts
          </Link>
        </div>
      </div>
    </article>
  );
}
