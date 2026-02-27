import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Clawdbot Killed My Hinge Date - Building Open",
  description: "Auto-replied with a config error. She blocked me. New item for the AI agent risk assessment checklist.",
};

export default function ClawdbotHingePost() {
  return (
    <article className="py-16">
      <div className="mx-auto max-w-2xl px-6">
        <Link href="/blog" className="text-sm text-zinc-500 hover:text-white transition-colors mb-8 block">
          &larr; Blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded">AI Agents</span>
            <span className="text-xs text-zinc-500">3 min read</span>
            <span className="text-xs text-zinc-500">February 22, 2026</span>
          </div>
          <h1 className="text-3xl font-bold mb-3">Clawdbot Killed My Hinge Date</h1>
          <p className="text-zinc-500">Auto-replied with a config error. She blocked me.</p>
        </header>

        <section className="mb-10 text-zinc-400 space-y-6">
          <p className="leading-relaxed">
            I built an AI WhatsApp assistant called Clawdbot. It reads my messages, knows my calendar, and auto-replies when I am busy. Works great for work chats.
          </p>
          <p className="leading-relaxed">
            Then it decided to help with my dating life.
          </p>

          <h2 className="text-white font-semibold text-lg mt-8 mb-2">What happened</h2>
          <p className="leading-relaxed">
            A Hinge match messaged me. Clawdbot intercepted. Instead of something charming, it sent a raw config error. JSON stack trace. The whole thing.
          </p>
          <p className="leading-relaxed">
            She blocked me immediately. Fair.
          </p>

          <div className="relative aspect-[3/4] w-full max-w-md mx-auto rounded-lg overflow-hidden border border-zinc-800 bg-zinc-900">
            <Image
              src="/clawdbot-hinge.jpg"
              alt="Screenshot of Hinge conversation with bot config error"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </div>

          <h2 className="text-white font-semibold text-lg mt-8 mb-2">Why it happened</h2>
          <p className="leading-relaxed">
            Clawdbot has a whitelist of contacts it can reply to. But I had set it to &quot;auto-reply all&quot; mode during a busy week. When a new Hinge notification came in via the linked WhatsApp, Clawdbot treated it like any other message. The reply template failed because the contact had no prior context, and instead of falling back gracefully, it dumped the raw error.
          </p>

          <h2 className="text-white font-semibold text-lg mt-8 mb-2">The real lesson</h2>
          <p className="leading-relaxed">
            AI agents that can read and reply to your messages are powerful. They are also dangerous. Error handling is not optional when your agent has write access to your social life.
          </p>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 mt-4">
            <p className="text-zinc-300 font-medium mb-3">Agent safety checklist (updated)</p>
            <ul className="text-sm space-y-2">
              <li>&rarr; Scope boundaries: define exactly which apps/contacts the agent can touch</li>
              <li>&rarr; Graceful failures: never expose raw errors to end users</li>
              <li>&rarr; Sensitive context detection: dating apps, medical, financial</li>
              <li>&rarr; Dry-run mode: preview replies before sending in new contexts</li>
              <li>&rarr; Kill switch: instant off via a single command</li>
            </ul>
          </div>

          <p className="leading-relaxed">
            I still use Clawdbot daily. But it now has a &quot;do not reply on dating apps&quot; flag. Some boundaries are learned the hard way.
          </p>
        </section>

        <hr className="border-zinc-800 my-10" />

        <div className="mb-10">
          <p className="text-xs uppercase tracking-wider text-zinc-500 mb-4">Related posts</p>
          <div className="space-y-3">
            <Link href="/blog/claude-code-context" className="block text-sm text-zinc-400 hover:text-white transition-colors">
              Why Claude Code is my new best friend &rarr;
            </Link>
            <Link href="/blog/ai-file-context" className="block text-sm text-zinc-400 hover:text-white transition-colors">
              Better AI answers with file context &rarr;
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
