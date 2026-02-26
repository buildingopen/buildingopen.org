import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Manifesto - Building Open",
  description: "Equal opportunity through open source. Why Building Open exists and what we believe.",
};

export default function ManifestoPage() {
  return (
    <article className="py-16">
      <div className="mx-auto max-w-2xl px-6">
        <h1 className="text-3xl font-bold mb-2">Equal opportunity through open source</h1>
        <p className="text-zinc-500 mb-12">Why Building Open exists and what we believe.</p>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Why We Exist</h2>
          <p className="text-zinc-400 mb-3 leading-relaxed">The best tools cost money. The best education costs more. The people who need them most can afford them least.</p>
          <p className="text-zinc-400 mb-3 leading-relaxed">This isn&apos;t a technology problem. It&apos;s a choice. Someone decided that access should depend on ability to pay.</p>
          <p className="text-zinc-400 mb-3 leading-relaxed">We made a different choice.</p>
          <p className="text-zinc-400 leading-relaxed">Building Open exists to level the playing field. We build tools, create educational content, and foster a community where anyone can learn to create, regardless of where they started.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">What We Believe</h2>
          <p className="text-zinc-400 mb-3 leading-relaxed"><strong className="text-white">Opportunity should not be gated.</strong> The student in Lagos deserves the same tools as the one in London. The self-taught developer deserves the same resources as the CS graduate.</p>
          <p className="text-zinc-400 mb-3 leading-relaxed"><strong className="text-white">Transparency builds trust.</strong> We work in public. Our code is open. Our decisions are visible. When you can see how something works, you can learn from it, improve it, make it yours.</p>
          <p className="text-zinc-400 leading-relaxed"><strong className="text-white">Together is faster.</strong> Open source isn&apos;t charity. It&apos;s how good software gets built. When hundreds of people contribute their perspective, the result is better than anything one team could build alone.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">What We Do</h2>
          <p className="text-zinc-400 mb-4 leading-relaxed">Building Open runs a platform with three parts:</p>

          <p className="text-zinc-400 mb-3 leading-relaxed"><strong className="text-white">Tools</strong> - Free, open source software that creates real value. AI writing assistants. Document generators. Presentation tools. Not demos or toys, but software you can actually use.</p>

          <p className="text-zinc-400 mb-3 leading-relaxed"><strong className="text-white">Education</strong> - Tutorials, guides, and learning paths that teach you how things work. Not just how to use our tools, but how to build your own.</p>

          <p className="text-zinc-400 leading-relaxed"><strong className="text-white">Community</strong> - A space to ask questions, share what you&apos;ve built, and learn from others on the same journey.</p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">The Invitation</h2>
          <p className="text-zinc-400 mb-3 leading-relaxed"><strong className="text-white">If you need tools:</strong> Use them. They&apos;re free. No trials, no paywalls.</p>
          <p className="text-zinc-400 mb-3 leading-relaxed"><strong className="text-white">If you want to learn:</strong> Dive in. Read the code. Follow the tutorials. The whole point is for you to understand how things work.</p>
          <p className="text-zinc-400 mb-3 leading-relaxed"><strong className="text-white">If you want to contribute:</strong> Start anywhere. Fix a bug. Improve documentation. Every contribution matters.</p>
          <p className="text-zinc-400 leading-relaxed"><strong className="text-white">If you want to build something bigger:</strong> Do it. Fork our code. Start your own project. That&apos;s not competition, that&apos;s the goal.</p>
        </section>

        <hr className="border-zinc-800 my-10" />

        <div className="flex gap-4 justify-center">
          <Link
            href="/projects"
            className="px-5 py-2.5 bg-green-500 text-black font-medium rounded-lg hover:bg-green-400 transition-colors"
          >
            View Projects
          </Link>
          <a
            href="https://github.com/buildingopen"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-zinc-700 rounded-lg hover:border-zinc-500 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}