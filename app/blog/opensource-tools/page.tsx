import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Replacing $800+ of Software Subscriptions with Open Source - Building Open",
  description: "6 months ago, I stopped using Word, Excel, PowerPoint, Figma, and n8n. I replaced them all with Claude Code.",
};

export default function OpenSourceToolsPost() {
  return (
    <article className="py-16">
      <div className="mx-auto max-w-2xl px-6">
        <Link href="/blog" className="text-sm text-zinc-500 hover:text-white transition-colors mb-8 block">
          &larr; Blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded">Tools</span>
            <span className="text-xs text-zinc-500">4 min read</span>
            <span className="text-xs text-zinc-500">January 13, 2026</span>
          </div>
          <h1 className="text-3xl font-bold mb-3">Replacing $800+ of Software Subscriptions with Open Source</h1>
          <p className="text-zinc-500">6 months ago, I stopped using Word, Excel, PowerPoint, Figma, and n8n. I replaced them all with Claude Code.</p>
        </header>

        <section className="mb-10">
          <p className="text-zinc-400 mb-4 leading-relaxed">
            Here&apos;s what happened:
          </p>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            Instead of paying $800+/year for software subscriptions, I built open-source repos that do the same thing - but better.
          </p>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            The workflow is simple:
          </p>
          <ol className="space-y-2 text-zinc-400 text-sm mb-8">
            <li className="flex items-start gap-2">
              <span className="text-zinc-500 mt-0.5">1.</span>
              <span>Clone the repo</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zinc-500 mt-0.5">2.</span>
              <span>Write a prompt</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zinc-500 mt-0.5">3.</span>
              <span>Get production-ready output</span>
            </li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Here&apos;s what I built:</h2>
          
          <div className="space-y-4 mb-8">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
              <h3 className="font-medium mb-1">
                <a href="https://github.com/federicodeponte/openword" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">openword</a>
              </h3>
              <p className="text-sm text-zinc-400">Professional business letters &amp; contracts (replaces Word)</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
              <h3 className="font-medium mb-1">
                <a href="https://github.com/federicodeponte/opendraft" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">opendraft</a>
              </h3>
              <p className="text-sm text-zinc-400">Academic thesis generation with 19 AI agents (replaces research tools)</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
              <h3 className="font-medium mb-1">
                <a href="https://github.com/federicodeponte/openfigma" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">openfigma</a>
              </h3>
              <p className="text-sm text-zinc-400">Social graphics &amp; marketing visuals (replaces Figma/Canva)</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
              <h3 className="font-medium mb-1">
                <a href="https://github.com/federicodeponte/openblog" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">openblog</a>
              </h3>
              <p className="text-sm text-zinc-400">5-stage SEO content pipeline (replaces n8n + content tools)</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
              <h3 className="font-medium mb-1">
                <a href="https://github.com/federicodeponte/openkeyword" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">openkeyword</a>
              </h3>
              <p className="text-sm text-zinc-400">AI-powered keyword research (replaces Ahrefs/SEMrush)</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
              <h3 className="font-medium mb-1">
                <a href="https://github.com/federicodeponte/openinvoice" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">openinvoice</a>
              </h3>
              <p className="text-sm text-zinc-400">Gmail invoice extraction (replaces manual bookkeeping)</p>
            </div>
          </div>

          <p className="text-zinc-400 mb-4 leading-relaxed font-semibold">
            All free. All open source.
          </p>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            Clone them, prompt them, ship faster.
          </p>
        </section>

        <section className="mb-10">
          <div className="space-y-6">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <div key={num} className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900">
                <Image 
                  src={`/opensource-tools/slide-${num.toString().padStart(2, '0')}.png`}
                  alt={`Slide ${num}`}
                  width={1080}
                  height={1080}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </section>

        <hr className="border-zinc-800 my-10" />

        <div className="mb-10">
          <p className="text-xs uppercase tracking-wider text-zinc-500 mb-4">Related posts</p>
          <div className="space-y-3">
            <Link href="/blog/goodbye-powerpoint" className="block text-sm text-zinc-400 hover:text-white transition-colors">
              I genuinely stopped using PowerPoint &rarr;
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
