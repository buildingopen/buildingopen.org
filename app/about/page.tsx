import type { Metadata } from "next";
import Link from "next/link";
import { SectionDivider } from "../components/blog";

export const metadata: Metadata = {
  title: "About - Building Open",
  description: "Why I build, why I share, and why everything is open source.",
};

export default function AboutPage() {
  return (
    <article className="py-16">
      <div className="mx-auto max-w-2xl px-6">
        <h1 className="text-3xl font-bold mb-2">About Building Open</h1>
        <p className="text-zinc-500 mb-12">Why I build, why I share, and why everything is open source.</p>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Why I build</h2>
          <p className="text-zinc-400 mb-3 leading-relaxed">I see problems and I can&apos;t leave them alone. A researcher spending weeks formatting citations. A founder hand-building slide decks at 2am. A developer copy-pasting boilerplate for the hundredth time.</p>
          <p className="text-zinc-400 mb-3 leading-relaxed">AI means I can solve these in days, not months. So I do.</p>
          <p className="text-zinc-400 leading-relaxed">Every project here started the same way: I hit a problem, built a tool, and kept going until it actually worked.</p>
        </section>

        <SectionDivider />

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Why I share</h2>
          <p className="text-zinc-400 mb-3 leading-relaxed">Not everything needs to be a product. Some things are just useful.</p>
          <p className="text-zinc-400 leading-relaxed">If I built something that solves a problem, someone else probably has the same problem. Keeping it private doesn&apos;t help anyone. Sharing it might.</p>
        </section>

        <SectionDivider />

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Why open source</h2>
          <p className="text-zinc-400 mb-3 leading-relaxed">It&apos;s the fastest way to get tools to people who need them. No signups, no waitlists, no pricing pages. Clone it, run it, done.</p>
          <p className="text-zinc-400 leading-relaxed">Open source also means you can see exactly how things work. Learn from it, improve it, fork it, build something better. That&apos;s the point.</p>
        </section>

        <SectionDivider />

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Come build with me</h2>
          <p className="text-zinc-400 mb-3 leading-relaxed">Use the tools. Read the code. Start your own project. There&apos;s no prescribed path here.</p>
          <p className="text-zinc-400 leading-relaxed">If you want to contribute, pick any repo and start. If you want to build something completely different, even better.</p>
        </section>

        <div className="flex gap-4 justify-center mt-10">
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
