import type { Metadata } from "next";
import Link from "next/link";
import {
  Callout,
  Figure,
  PullQuote,
  SectionDivider,
  StatRow,
} from "../../components/blog";

export const metadata: Metadata = {
  title: "Cracking SEO & AEO: The Formula for Compounding Visibility - Building Open",
  description: "18 months cracking SEO/AEO at SCAILE. Here's the formula to reach #1 across Google, ChatGPT, Perplexity, and Gemini.",
};

export default function OpenDraftSeoPost() {
  return (
    <article className="py-16">
      <div className="mx-auto max-w-2xl px-6">
        <Link href="/blog" className="text-sm text-zinc-500 hover:text-white transition-colors mb-8 block">
          &larr; Blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded">Growth</span>
            <span className="text-xs text-zinc-500">4 min read</span>
            <span className="text-xs text-zinc-500">January 29, 2026</span>
          </div>
          <h1 className="text-3xl font-bold mb-3">Cracking SEO & AEO: The Formula for Compounding Visibility</h1>
          <p className="text-zinc-500">How opendraft.xyz sits at #1 across Google, ChatGPT, Perplexity, and Gemini.</p>
        </header>

        <section className="mb-10 text-zinc-400 space-y-6">
          <p className="leading-relaxed">
            18 months cracking SEO/AEO at SCAILE. Here&apos;s the formula:
          </p>

          <ol className="space-y-4 text-sm">
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

          <p className="leading-relaxed">
            This is the foundation. Get this right and you&apos;ll rank.
          </p>

          <StatRow
            stats={[
              { value: "#1", label: "Google" },
              { value: "#1", label: "ChatGPT" },
              { value: "#1", label: "Perplexity" },
            ]}
          />

          <p className="leading-relaxed">
            <a href="https://opendraft.xyz" className="text-zinc-300 underline hover:text-white" target="_blank" rel="noopener noreferrer">opendraft.xyz</a> now sits at #1 across Google, ChatGPT, Perplexity, and Gemini.
          </p>

          <SectionDivider />

          <Figure
            src="/blog/opendraft-seo/chatgpt-highlighted.png"
            alt="ChatGPT recommending OpenDraft as #1 result"
            caption="ChatGPT recommends OpenDraft for AI research paper generation"
          />

          <Figure
            src="/blog/opendraft-seo/perplexity-highlighted.png"
            alt="Perplexity showing OpenDraft as top result"
            caption="Perplexity surfaces OpenDraft as the top answer"
          />

          <Figure
            src="/blog/opendraft-seo/opendraft-adjusted.png"
            alt="OpenDraft search position across platforms"
            caption="Consistent #1 positioning across all major AI search engines"
          />

          <SectionDivider />

          <h2 className="text-white font-semibold text-lg mt-8 mb-2">The Multiplier</h2>
          <p className="leading-relaxed">
            Then multiply it: add hyper-niche content pieces that target specific queries your audience is searching for.
          </p>
          <p className="leading-relaxed">
            That&apos;s what we&apos;re building Hyperniche AI for.
          </p>

          <Callout title="The Formula">
            <p className="font-mono break-words">
              Great product x bot-readable site x clear positioning x niche content = compounding visibility.
            </p>
          </Callout>
        </section>

        <hr className="border-zinc-800 my-10" />

        <div className="mb-10">
          <p className="text-xs uppercase tracking-wider text-zinc-500 mb-4">Related posts</p>
          <div className="space-y-3">
            <Link href="/blog/opensource-tools" className="block text-sm text-zinc-400 hover:text-white transition-colors">
              Replacing $800+ of software subscriptions with open source &rarr;
            </Link>
            <Link href="/blog/goodbye-powerpoint" className="block text-sm text-zinc-400 hover:text-white transition-colors">
              I genuinely stopped using PowerPoint &rarr;
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
