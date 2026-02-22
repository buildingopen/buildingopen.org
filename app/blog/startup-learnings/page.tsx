import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "4 pivots in 1.5 years: what I'd tell myself before starting - Building Open",
  description: "Venture studio. Marketing agency. Marketing SaaS. AI visibility SaaS. Here's what I learned.",
};

export default function StartupLearningsPost() {
  return (
    <article className="py-16">
      <div className="mx-auto max-w-2xl px-6">
        <Link href="/blog" className="text-sm text-zinc-600 hover:text-green-500 transition-colors mb-8 block">
          &larr; Blog
        </Link>

        <header className="mb-12">
          <p className="text-sm text-zinc-600 mb-2">February 4, 2026</p>
          <h1 className="text-3xl font-bold mb-3">4 pivots in 1.5 years: what I&apos;d tell myself before starting</h1>
          <p className="text-zinc-500">Venture studio. Marketing agency. Marketing SaaS. AI visibility SaaS.</p>
        </header>

        <section className="mb-10">
          <p className="text-zinc-400 mb-4 leading-relaxed">
            When I started building my first company, I had no team, no idea, and no plan beyond &quot;start.&quot; Everyone around me said to wait. Wait for the right co-founder. Wait for the right concept. Wait until after graduation.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            I started anyway. Four pivots later, here&apos;s what I wish I&apos;d known.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">1. Just start</h2>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            I was still in uni. Every month I spent building taught me more than the previous semester. The compounding effect is real, same as investing: time in the market beats timing the market.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            There is no &quot;ready.&quot; The decision to start taught me more than four years of university combined.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">2. Try everything, then cut</h2>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            Every pivot killed something we thought we wanted. That&apos;s the point.
          </p>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            You can&apos;t think your way to product-market fit. You have to try enough wrong things to recognize the right one. We had to build a venture studio, run an agency, and ship a marketing SaaS before we understood what we actually cared about.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Clarity comes from doing, not thinking.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">3. Build it yourself</h2>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            No technical co-founder. No budget. We opened Cursor and built it ourselves. Kept it brutally simple. Once we had something real, the right people showed up.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Four pivots later, profitable in year one.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">The gap that kills founders</h2>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            The gap between thinking about starting and actually starting is where most founders die. It&apos;s not the pivot that kills you. It&apos;s the hesitation before the first step.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            And burnout? It doesn&apos;t come from working too hard. It comes from forgetting why you started.
          </p>
        </section>

        <hr className="border-zinc-800 my-10" />

        <div className="flex gap-4 justify-center">
          <Link
            href="/blog"
            className="px-5 py-2.5 border border-zinc-700 rounded-lg hover:border-green-500 hover:text-green-500 transition-colors text-sm"
          >
            More posts
          </Link>
        </div>
      </div>
    </article>
  );
}
