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
        <Link href="/blog" className="text-sm text-zinc-600 hover:text-green-500 transition-colors mb-8 block">
          &larr; Blog
        </Link>

        <header className="mb-12">
          <p className="text-sm text-zinc-600 mb-2">February 22, 2026</p>
          <h1 className="text-3xl font-bold mb-3">Clawdbot Killed My Hinge Date</h1>
          <p className="text-zinc-500">Auto-replied with a config error. She blocked me.</p>
        </header>

        <section className="mb-10">
          <p className="text-zinc-400 mb-4 leading-relaxed">
            Clawdbot killed my Hinge date.
          </p>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            Auto-replied with a config error. She blocked me.
          </p>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            New item for the AI agent risk assessment checklist.
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
