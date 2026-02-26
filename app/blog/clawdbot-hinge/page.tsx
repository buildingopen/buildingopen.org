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
        <Link href="/blog" className="text-sm text-zinc-600 hover:text-white transition-colors mb-8 block">
          &larr; Blog
        </Link>

        <header className="mb-12">
          <p className="text-sm text-zinc-600 mb-2">February 22, 2026</p>
          <h1 className="text-3xl font-bold mb-3">Clawdbot Killed My Hinge Date</h1>
          <p className="text-zinc-500">Auto-replied with a config error. She blocked me.</p>
        </header>

        <section className="mb-10">
          <p className="text-zinc-400 mb-4 leading-relaxed">
            I built an AI WhatsApp assistant called Clawdbot. It reads my messages, knows my calendar, and auto-replies when I am busy. Works great for work chats.
          </p>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            Then it decided to help with my dating life.
          </p>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            A Hinge match messaged me. Clawdbot intercepted. Instead of something charming, it sent a raw config error. JSON stack trace. The whole thing.
          </p>
          <p className="text-zinc-400 mb-8 leading-relaxed">
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

          <h2 className="text-lg font-semibold mt-10 mb-3">Lesson learned</h2>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            AI agents that can read and reply to your messages are powerful. They are also dangerous. Error handling is not optional when your agent has write access to your social life.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            New items for the AI agent risk assessment checklist: scope boundaries, graceful failures, and maybe a &quot;do not reply on dating apps&quot; flag.
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
