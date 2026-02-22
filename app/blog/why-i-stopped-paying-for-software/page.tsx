import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why I stopped paying for software - Building Open",
  description: "I replaced Word, Excel, PowerPoint, Figma, and n8n with open source tools I built myself. Here's why, and how.",
};

export default function WhyIStoppedPayingPost() {
  return (
    <article className="py-16">
      <div className="mx-auto max-w-2xl px-6">
        <Link href="/blog" className="text-sm text-zinc-600 hover:text-green-500 transition-colors mb-8 block">
          &larr; Blog
        </Link>

        <header className="mb-12">
          <p className="text-sm text-zinc-600 mb-2">January 13, 2026</p>
          <h1 className="text-3xl font-bold mb-3">Why I stopped paying for software</h1>
          <p className="text-zinc-500">I replaced Word, Excel, PowerPoint, Figma, and n8n with open source tools I built myself.</p>
        </header>

        <section className="mb-10">
          <p className="text-zinc-400 mb-4 leading-relaxed">
            Six months ago I did the math. I was paying over 800 euros a year for software subscriptions. Word for documents. PowerPoint for decks. Figma for graphics. Ahrefs for keyword research. n8n for automation. Each tool did one thing, each had its own pricing page, and none of them talked to each other.
          </p>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            I replaced all of them with open source repos that I built myself using Claude Code. Not prototypes. Not demos. Tools I use every day.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            This is the origin story of Building Open.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">The workflow</h2>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            Every tool follows the same pattern:
          </p>
          <ol className="space-y-2 text-zinc-400 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">1.</span>
              <span>Clone the repo</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">2.</span>
              <span>Write a prompt</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5">3.</span>
              <span>Get production-ready output</span>
            </li>
          </ol>
          <p className="text-zinc-400 mt-4 leading-relaxed">
            No accounts. No subscriptions. No vendor lock-in. You own the code and the output.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">What I built</h2>
          <div className="space-y-4">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
              <h3 className="font-medium mb-1">
                <a href="https://github.com/federicodeponte/opendraft" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">OpenDraft</a>
              </h3>
              <p className="text-sm text-zinc-500 mb-2">Replaces: research tools, academic writing software</p>
              <p className="text-sm text-zinc-400">Generate a 40-page academic paper with real citations from OpenAlex. 19 AI agents work in parallel to produce a complete thesis in about 12 minutes.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
              <h3 className="font-medium mb-1">
                <a href="https://github.com/federicodeponte/openslides" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">OpenSlides</a>
              </h3>
              <p className="text-sm text-zinc-500 mb-2">Replaces: PowerPoint, Google Slides</p>
              <p className="text-sm text-zinc-400">Generate branded presentation decks from a text prompt. Professional layouts, consistent styling, export to PPTX.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
              <h3 className="font-medium mb-1">
                <a href="https://github.com/federicodeponte/openword" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition-colors">OpenWord</a>
              </h3>
              <p className="text-sm text-zinc-500 mb-2">Replaces: Word templates, contract generators</p>
              <p className="text-sm text-zinc-400">Generate contracts, letters, and documents from templates. Fill in your data, get formatted output.</p>
            </div>
          </div>
          <p className="text-zinc-500 text-sm mt-4">
            And more: OpenFigma for social graphics, OpenBlog for SEO content, OpenKeyword for keyword research, OpenInvoice for bookkeeping. All free, all open source.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Why open source?</h2>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            The obvious reason: I stopped paying 800 euros a year. But that&apos;s not the real reason.
          </p>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            The real reason is that these tools should be accessible to everyone. The student in Lagos who can&apos;t afford Microsoft 365. The self-taught developer who can&apos;t afford Figma. The researcher who doesn&apos;t have institutional access to expensive writing tools.
          </p>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            The best tools cost money. The best education costs more. The people who need them most can afford them least. That&apos;s a choice someone made, and I made a different one.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            Every tool I build is free. The code is open. You can use it, learn from it, fork it, improve it. That&apos;s not competition. That&apos;s the goal.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">The bigger picture</h2>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            This isn&apos;t really about replacing subscriptions. It&apos;s about what becomes possible when AI makes it practical for one person to build real tools.
          </p>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            Two years ago, building a document generator or a presentation tool was a team project. Now it&apos;s an afternoon. The cost of creating software dropped to near zero. The cost of distributing it was already zero (GitHub). The only thing left is deciding to do it.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            That&apos;s what Building Open is. A bet that one person with the right tools and the right motivation can build things that matter, and give them away.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Try it yourself</h2>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            Pick any project. Clone it. Run it. Read the code. If it&apos;s useful, use it. If you can improve it, open a PR.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="px-5 py-2.5 bg-green-500 text-black font-medium rounded-lg hover:bg-green-400 transition-colors text-sm"
            >
              View all projects
            </Link>
            <Link
              href="/manifesto"
              className="px-5 py-2.5 border border-zinc-700 rounded-lg hover:border-green-500 hover:text-green-500 transition-colors text-sm"
            >
              Read the manifesto
            </Link>
          </div>
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
