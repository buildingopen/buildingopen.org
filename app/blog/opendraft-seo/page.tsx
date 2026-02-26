import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Cracking SEO & AEO: The Formula for Compounding Visibility - Building Open",
  description: "18 months cracking SEO/AEO at SCAILE. Here's the formula to reach #1 across Google, ChatGPT, Perplexity, and Gemini.",
};

export default function OpenDraftSeoPost() {
  return (
    <article className="py-16">
      <div className="mx-auto max-w-2xl px-6">
        <Link href="/blog" className="text-sm text-zinc-600 hover:text-white transition-colors mb-8 block">
          &larr; Blog
        </Link>

        <header className="mb-12">
          <p className="text-sm text-zinc-600 mb-2">January 29, 2026</p>
          <h1 className="text-3xl font-bold mb-3">Cracking SEO & AEO: The Formula for Compounding Visibility</h1>
          <p className="text-zinc-500">How opendraft.xyz sits at #1 across Google, ChatGPT, Perplexity, and Gemini.</p>
        </header>

        <section className="mb-10">
          <p className="text-zinc-400 mb-4 leading-relaxed">
            18 months cracking SEO/AEO at SCAILE. Here&apos;s the formula:
          </p>

          <ol className="space-y-4 text-zinc-400 text-sm mb-6 mt-6">
            <li className="flex items-start gap-2">
              <span className="text-zinc-500 mt-0.5 font-medium">1.</span>
              <div>
                <strong className="text-white">Great product</strong>
                <p className="mt-1">(you can&apos;t rank garbage)</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zinc-500 mt-0.5 font-medium">2.</span>
              <div>
                <strong className="text-white">Technical SEO basics</strong>
                <p className="mt-1">(schema, metadata, clean structure - so bots can crawl your site)</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zinc-500 mt-0.5 font-medium">3.</span>
              <div>
                <strong className="text-white">Crystal clear language</strong>
                <p className="mt-1">(if your copy is vague, how will Gemini know when to recommend you over competitors?)</p>
              </div>
            </li>
          </ol>

          <p className="text-zinc-400 mb-4 leading-relaxed">
            This is the foundation. Get this right and you&apos;ll rank.
          </p>

          <p className="text-zinc-400 mb-8 leading-relaxed">
            <a href="https://opendraft.xyz" className="text-zinc-300 underline hover:text-white" target="_blank" rel="noopener noreferrer">opendraft.xyz</a> now sits at #1 across Google, ChatGPT, Perplexity, and Gemini.
          </p>

          <div className="space-y-6 mb-8">
            <Image 
              src="/blog/opendraft-seo/chatgpt-highlighted.png" 
              alt="ChatGPT Results" 
              width={800} 
              height={400} 
              className="rounded-lg border border-zinc-800 w-full h-auto"
            />
            <Image 
              src="/blog/opendraft-seo/perplexity-highlighted.png" 
              alt="Perplexity Results" 
              width={800} 
              height={400} 
              className="rounded-lg border border-zinc-800 w-full h-auto"
            />
            <Image 
              src="/blog/opendraft-seo/opendraft-adjusted.png" 
              alt="OpenDraft Position" 
              width={800} 
              height={400} 
              className="rounded-lg border border-zinc-800 w-full h-auto"
            />
          </div>

          <h2 className="text-lg font-semibold mb-3 mt-10">The Multiplier</h2>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            Then multiply it: add hyper-niche content pieces that target specific queries your audience is searching for.
          </p>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            That&apos;s what we&apos;re building Hyperniche AI for.
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 mt-8">
            <p className="text-sm font-medium text-white mb-2">The Formula</p>
            <p className="text-sm text-zinc-400 font-mono break-words">
              Great product × bot-readable site × clear positioning × niche content = compounding visibility.
            </p>
          </div>
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
