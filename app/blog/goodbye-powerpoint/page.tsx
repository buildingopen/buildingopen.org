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
        <Link href="/blog" className="text-sm text-zinc-600 hover:text-green-500 transition-colors mb-8 block">
          &larr; Blog
        </Link>

        <header className="mb-12">
          <p className="text-sm text-zinc-600 mb-2">February 10, 2026</p>
          <h1 className="text-3xl font-bold mb-3">I genuinely stopped using PowerPoint</h1>
          <p className="text-zinc-500">Spending days aligning boxes feels insane.</p>
        </header>

        <section className="mb-10">
          <p className="text-zinc-400 mb-4 leading-relaxed">
            I genuinely stopped using PowerPoint.
          </p>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            Spending days aligning boxes feels insane when you can build a whole app in the same time. So I made an app for building slides.
          </p>
          
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5 my-8 font-mono text-sm text-zinc-300">
            <p className="mb-2 text-green-500">&gt; &quot;A fintech startup for African payments&quot;</p>
            <p className="mb-4 pl-4 text-zinc-500">→ Title slide appears.</p>
            
            <p className="mb-2 text-green-500">&gt; &quot;Show the problem we&apos;re solving&quot;</p>
            <p className="mb-4 pl-4 text-zinc-500">→ Data viz, done.</p>
            
            <p className="mb-2 text-green-500">&gt; &quot;Add our traction&quot;</p>
            <p className="pl-4 text-zinc-500">→ Growth charts, done.</p>
          </div>

          <p className="text-zinc-400 mb-4 leading-relaxed font-medium text-white">
            Three prompts. Full deck. 2 minutes.
          </p>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            No Figma. No templates. Just prompts.
          </p>
          <p className="text-zinc-400 mb-8 leading-relaxed">
            Open source. Free forever.
          </p>
          
          <div className="flex gap-4">
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
