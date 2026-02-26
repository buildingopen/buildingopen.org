import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "4 pivots in 1.5 years: what I'd tell myself before starting - Building Open",
  description: "Venture studio. Marketing agency. Marketing SaaS. AI visibility SaaS. Here's what I learned.",
};

export default function StartupLearningsPost() {
  return (
    <article className="py-16">
      <div className="mx-auto max-w-2xl px-6">
        <Link href="/blog" className="text-sm text-zinc-600 hover:text-white transition-colors mb-8 block">
          &larr; Blog
        </Link>

        <header className="mb-12">
          <p className="text-sm text-zinc-600 mb-2">February 4, 2026</p>
          <h1 className="text-3xl font-bold mb-3">4 pivots in 1.5 years: what I&apos;d tell myself before starting</h1>
          <p className="text-zinc-500">Venture studio. Marketing agency. Marketing SaaS. AI visibility SaaS.</p>
        </header>

        <section className="mb-10">
          <p className="text-zinc-400 mb-6 leading-relaxed">
            Venture studio. Marketing agency. Marketing SaaS. AI visibility SaaS.
          </p>

          <p className="text-zinc-400 mb-6 leading-relaxed">
            4 pivots in 1.5 years. Here&apos;s what I&apos;d tell myself before starting.
          </p>

          <div className="space-y-6 mb-10">
            <Image 
              src="/blog/pivot-visual.png" 
              alt="4 Pivots in 1.5 Years" 
              width={800} 
              height={400} 
              className="rounded-lg border border-zinc-800 w-full h-auto"
            />
          </div>

          <h2 className="text-lg font-semibold mb-3">1) Just start.</h2>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            I was still in uni. No team. No idea. Everyone said wait - for the right co-founder, the right concept, graduation. I started anyway. That decision taught me more than 4 years of university combined. Every month of building compounds. Same as investing - time in the market beats timing the market. There is no &quot;ready.&quot;
          </p>

          <h2 className="text-lg font-semibold mb-3">2) Try everything, then cut.</h2>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            Every pivot killed something we thought we wanted. That&apos;s the point. You can&apos;t think your way to product-market fit. You have to try enough wrong things to recognize the right one. We had to build a venture studio, run an agency, and ship a marketing SaaS before we understood what we actually cared about. Clarity comes from doing, not thinking.
          </p>

          <h2 className="text-lg font-semibold mb-3">3) Build it yourself.</h2>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            No technical co-founder. No budget. We opened Cursor and built it ourselves. Kept it brutally simple. Once we had something real, the right people showed up. 4 pivots later, profitable in year 1.
          </p>

          <p className="text-zinc-400 mb-4 leading-relaxed font-medium">
            The gap between thinking about starting and starting is where most founders die.
          </p>
          <p className="text-zinc-400 leading-relaxed font-medium">
            And burnout? It doesn&apos;t come from working too hard. It comes from forgetting why you started.
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