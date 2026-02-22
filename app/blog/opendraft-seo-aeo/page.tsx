import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How OpenDraft hit #1 on Google, ChatGPT, Perplexity, and Gemini - Building Open",
  description: "18 months of SEO and AEO learnings distilled into a simple formula. Great product, technical SEO, crystal clear language.",
};

export default function OpenDraftSeoPost() {
  return (
    <article className="py-16">
      <div className="mx-auto max-w-2xl px-6">
        <Link href="/blog" className="text-sm text-zinc-600 hover:text-green-500 transition-colors mb-8 block">
          &larr; Blog
        </Link>

        <header className="mb-12">
          <p className="text-sm text-zinc-600 mb-2">January 29, 2026</p>
          <h1 className="text-3xl font-bold mb-3">How OpenDraft hit #1 on Google, ChatGPT, Perplexity, and Gemini</h1>
          <p className="text-zinc-500">18 months of SEO and AEO learnings, distilled.</p>
        </header>

        <section className="mb-10">
          <p className="text-zinc-400 mb-4 leading-relaxed">
            opendraft.xyz ranks #1 across Google, ChatGPT, Perplexity, and Gemini for its target queries. Not through backlink schemes or content farms. Through a formula I learned over 18 months of cracking SEO and AEO (Answer Engine Optimization) at SCAILE.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            The formula is simpler than most people think.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">The foundation: three things</h2>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            Every website that ranks well, whether on traditional search or AI answer engines, gets these three things right:
          </p>
          <div className="space-y-4">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
              <h3 className="font-medium mb-2">1. Great product</h3>
              <p className="text-sm text-zinc-400">You can&apos;t rank garbage. If the thing you&apos;re promoting doesn&apos;t create real value, no amount of SEO will save it. OpenDraft works. People use it. They tell others about it. That&apos;s the base layer everything else builds on.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
              <h3 className="font-medium mb-2">2. Technical SEO basics</h3>
              <p className="text-sm text-zinc-400">Schema markup. Proper metadata. Clean HTML structure. These aren&apos;t fancy tricks; they&apos;re the basics that let bots crawl and understand your site. If Google can&apos;t parse your page, it can&apos;t rank it. If Gemini can&apos;t read your content, it can&apos;t recommend you.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
              <h3 className="font-medium mb-2">3. Crystal clear language</h3>
              <p className="text-sm text-zinc-400">This is the one most people miss. If your copy is vague, how will an AI answer engine know when to recommend you over competitors? You need to say exactly what you do, for whom, and why it&apos;s different. Not clever marketing copy. Clear, specific language.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Why this matters more now</h2>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            Traditional SEO was about convincing Google&apos;s algorithm your page was relevant. You optimized for keywords, built backlinks, and played the ranking game.
          </p>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            AEO is different. When someone asks ChatGPT &quot;What&apos;s the best tool for generating a research paper?&quot;, the AI isn&apos;t scanning a list of blue links. It&apos;s synthesizing information from its training data and real-time search. It needs to understand what your product does in order to recommend it.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Vague positioning kills you. If your homepage says &quot;AI-powered productivity suite for modern teams,&quot; no answer engine will recommend you for anything specific. But if it says &quot;Generate a 40-page research paper with proper citations in 12 minutes,&quot; now the AI knows exactly when you&apos;re the right answer.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">The multiplier: niche content</h2>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            The foundation gets you ranking. Niche content multiplies it.
          </p>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            The strategy: create hyper-specific content pieces that target the exact queries your audience is searching for. Not broad &quot;how to write a research paper&quot; guides that compete with a million results. Specific pieces like &quot;how to generate APA citations automatically&quot; or &quot;open source alternative to Writefull.&quot;
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Each piece is a new entry point. They compound over time.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">The formula</h2>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
            <p className="text-zinc-300 font-mono text-sm text-center">
              great product &times; bot-readable site &times; clear positioning &times; niche content = compounding visibility
            </p>
          </div>
          <p className="text-zinc-400 mt-4 leading-relaxed">
            That&apos;s it. No hacks. No shortcuts. Each component is necessary, and together they compound.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">What this looked like for OpenDraft</h2>
          <ul className="space-y-3 text-zinc-400 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">&#x2022;</span>
              <span><strong className="text-white">Product:</strong> OpenDraft actually generates usable papers. People download it, run it, get real output. That creates genuine word-of-mouth and GitHub stars.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">&#x2022;</span>
              <span><strong className="text-white">Technical:</strong> Clean site structure, proper meta tags, schema markup for software application. Bots can crawl every page.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">&#x2022;</span>
              <span><strong className="text-white">Language:</strong> The homepage says exactly what it does: &quot;Generate a 40-page research paper with proper citations in 12 minutes.&quot; No ambiguity.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">&#x2022;</span>
              <span><strong className="text-white">Content:</strong> Tutorials, comparison pages, and use-case specific landing pages that target long-tail queries.</span>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Takeaway</h2>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            If you&apos;re building something and want it to be discoverable, both on Google and on AI answer engines, start with the foundation. Make something great. Make it readable by machines. Say what it does in plain language.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Then add content that targets the specific questions your users are asking. That&apos;s the whole playbook.
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
