import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "I genuinely stopped using PowerPoint - Building Open",
  description: "Spending days aligning boxes feels insane when you can build a whole app in the same time. So I made an app for building slides.",
};

export default function GoodbyePowerpointPost() {
  return (
    <article className="py-16">
      <div className="mx-auto max-w-2xl px-6">
        <Link href="/blog" className="text-sm text-zinc-600 hover:text-white transition-colors mb-8 block">
          &larr; Blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded">Tools</span>
            <span className="text-xs text-zinc-600">2 min read</span>
            <span className="text-xs text-zinc-600">February 10, 2026</span>
          </div>
          <h1 className="text-3xl font-bold mb-3">I genuinely stopped using PowerPoint</h1>
          <p className="text-zinc-500">Spending days aligning boxes feels insane.</p>
        </header>

        <section className="mb-10 text-zinc-400 space-y-6">
          <p className="leading-relaxed">
            I genuinely stopped using PowerPoint.
          </p>
          <p className="leading-relaxed">
            Spending days aligning boxes feels insane when you can build a whole app in the same time. So I made an app for building slides.
          </p>

          <h2 className="text-white font-semibold text-lg mt-8 mb-2">The old way</h2>
          <p className="leading-relaxed">
            Open PowerPoint. Pick a template that almost works. Spend 2 hours nudging boxes. Realize the font sizes are inconsistent. Fix those. Export. Client says &quot;can you make it more modern?&quot; Start over.
          </p>
          <p className="leading-relaxed">
            This loop used to eat entire days. For a 10-slide deck. It never felt like real work, just formatting tax.
          </p>

          <h2 className="text-white font-semibold text-lg mt-8 mb-2">The new way</h2>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 my-4 font-mono text-sm text-zinc-300">
            <p className="mb-2 text-green-500">&gt; &quot;A fintech startup for African payments&quot;</p>
            <p className="mb-4 pl-4 text-zinc-500">→ Title slide appears.</p>

            <p className="mb-2 text-green-500">&gt; &quot;Show the problem we&apos;re solving&quot;</p>
            <p className="mb-4 pl-4 text-zinc-500">→ Data viz, done.</p>

            <p className="mb-2 text-green-500">&gt; &quot;Add our traction&quot;</p>
            <p className="pl-4 text-zinc-500">→ Growth charts, done.</p>
          </div>

          <p className="leading-relaxed font-medium text-white">
            Three prompts. Full deck. 2 minutes.
          </p>
          <p className="leading-relaxed">
            No Figma. No templates. Just prompts. The AI handles layout, typography, color. You handle the story.
          </p>

          <h2 className="text-white font-semibold text-lg mt-8 mb-2">Why it matters</h2>
          <p className="leading-relaxed">
            The point is not that slides are bad. The point is that the time between having an idea and presenting it should be minutes, not days. Most of the friction in traditional tools is visual formatting, not thinking. Remove the formatting and you get back to what actually matters: the content.
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mt-4">
            <p className="text-zinc-300 font-medium mb-3">The shift</p>
            <p className="text-sm leading-relaxed">
              Presentation tools used to be design tools. Now they are communication tools. The value is in what you say, not how you align it.
            </p>
          </div>

          <p className="leading-relaxed">
            Open source. Free forever.
          </p>

          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/federicodeponte/openslides"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-green-500 text-black font-medium rounded-lg hover:bg-green-400 transition-colors text-sm"
            >
              Get OpenSlides
            </a>
          </div>
        </section>

        <hr className="border-zinc-800 my-10" />

        <div className="mb-10">
          <p className="text-xs uppercase tracking-wider text-zinc-500 mb-4">Related posts</p>
          <div className="space-y-3">
            <Link href="/blog/opensource-tools" className="block text-sm text-zinc-400 hover:text-white transition-colors">
              Replacing $800+ of software subscriptions with open source &rarr;
            </Link>
            <Link href="/blog/opendraft-seo" className="block text-sm text-zinc-400 hover:text-white transition-colors">
              Cracking SEO & AEO: the formula for compounding visibility &rarr;
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
