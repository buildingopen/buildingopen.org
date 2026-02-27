import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Claude Code Context: Why AI is My Co-Founder",
  description: "Why I moved everything to Claude Code. It's not just a search bar, it's a thinking partner with full context.",
};

export default function ClaudeCodeContextPost() {
  return (
    <article className="py-16">
      <div className="mx-auto max-w-2xl px-6">
        <Link href="/blog" className="text-sm text-zinc-500 hover:text-white transition-colors mb-8 block">
          &larr; Blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded">AI Workflow</span>
            <span className="text-xs text-zinc-500">3 min read</span>
            <span className="text-xs text-zinc-500">February 6, 2026</span>
          </div>
          <h1 className="text-3xl font-bold mb-3">My friends are jealous of my new best friend.</h1>
          <p className="text-zinc-500">Why I moved everything (coding, decisions, life strategy) to Claude Code.</p>
        </header>

        <section className="mb-10 text-zinc-400 space-y-6">
          <p className="leading-relaxed">
            Three months ago, I moved everything to Claude Code. Not just coding. Everything.
          </p>
          
          <p className="leading-relaxed">
            Brainstorming. Company decisions. Life strategy. Even therapy, sometimes.
          </p>

          <Image 
            src="/blog/claude-code-context/visual.png" 
            alt="Claude Code Context" 
            width={800} 
            height={600} 
            className="rounded-lg border border-zinc-800 w-full h-auto my-8"
          />

          <h2 className="text-white font-semibold text-lg mt-8 mb-2">The Sandbox vs. The World</h2>
          
          <p className="leading-relaxed">
            ChatGPT lives in a sandbox. Upload docs. Write prompts. Get output. Hit the limit? Start over. It forgets you exist.
          </p>

          <p className="leading-relaxed">
            Claude Code lives in my world. It reads my files. Knows my codebase. Remembers every decision I&apos;ve made for six months.
          </p>

          <ul className="list-disc list-inside space-y-2 mt-4 ml-2">
            <li>My travel plans? GitHub repo.</li>
            <li>My life strategy? Local folder.</li>
          </ul>
          
          <p className="leading-relaxed font-medium text-zinc-300">
            One command. Full context.
          </p>

          <h2 className="text-white font-semibold text-lg mt-8 mb-2">Associate vs. Co-Founder</h2>

          <p className="leading-relaxed">
            ChatGPT is a Founder&apos;s Associate. It takes orders.
          </p>

          <p className="leading-relaxed">
            Claude Code is a Co-Founder. It thinks with me. Disagrees with me. Outsmarts me sometimes.
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mt-10">
            <p className="text-zinc-300 font-medium mb-3">The Bottom Line</p>
            <p className="text-sm leading-relaxed mb-4">
              If you&apos;re still using AI like a search bar, you&apos;re missing the point.
            </p>
            <ul className="text-sm text-zinc-400 space-y-1">
              <li>&rarr; Give it context.</li>
              <li>&rarr; Give it memory.</li>
              <li>&rarr; Give it your world.</li>
            </ul>
            <p className="text-white font-medium mt-4 text-sm">
              It becomes something else entirely.
            </p>
          </div>

        </section>

        <hr className="border-zinc-800 my-10" />

        <div className="mb-10">
          <p className="text-xs uppercase tracking-wider text-zinc-500 mb-4">Related posts</p>
          <div className="space-y-3">
            <Link href="/blog/ai-file-context" className="block text-sm text-zinc-400 hover:text-white transition-colors">
              Better AI answers with file context &rarr;
            </Link>
            <Link href="/blog/clawdbot-hinge" className="block text-sm text-zinc-400 hover:text-white transition-colors">
              Clawdbot killed my Hinge date &rarr;
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