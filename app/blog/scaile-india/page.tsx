import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SCAILE goes to India - Building Open",
  description: "One country, producing more unicorns than any country in Europe. I understand why now.",
};

export default function ScaileIndiaPost() {
  return (
    <article className="py-16">
      <div className="mx-auto max-w-2xl px-6">
        <Link href="/blog" className="text-sm text-zinc-600 hover:text-white transition-colors mb-8 block">
          &larr; Blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded">Travel</span>
            <span className="text-xs text-zinc-600">3 min read</span>
            <span className="text-xs text-zinc-600">February 3, 2026</span>
          </div>
          <h1 className="text-3xl font-bold mb-3">SCAILE goes to India</h1>
          <p className="text-zinc-500">I understand why they produce so many unicorns now.</p>
        </header>

        <section className="mb-10 text-zinc-400 space-y-6">
          <p className="leading-relaxed">
            Starting 2026 a bit different. Simon and I are building an AI company in Europe, and we took the whole thing to India for two weeks. Came back different.
          </p>

          <h2 className="text-white font-semibold text-lg mt-8 mb-2">The real India</h2>
          <p className="leading-relaxed">
            Pranjal showed us his India, not the tourist version. Delhi, Jaipur, Agra. You&apos;d think they&apos;re different countries. The energy in each city is completely different, but the ambition is the same everywhere.
          </p>

          <h2 className="text-white font-semibold text-lg mt-8 mb-2">The hackathon</h2>
          <p className="leading-relaxed">
            Yatharth co-organised the SCAILE track at brAInwave, the AIMS-DTU hackathon. 30 hours of agentic coding at one of India&apos;s top CS universities. The pitches ranged from military drones to AI glasses that describe the world to blind people. 20-year-olds pitching with more conviction than most Series A founders I&apos;ve met in Europe.
          </p>
          <p className="leading-relaxed">
            Vinita, Shuddhabrota, and Siddharth shipped product from cafes across North India. No office, no Slack standups. Just building.
          </p>

          <h2 className="text-white font-semibold text-lg mt-8 mb-2">What I took home</h2>

          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 my-4">
            <p className="text-zinc-300 leading-relaxed font-medium">
              Back home in Europe, an engineering degree is a ticket to a stable career. In India, it&apos;s a starting line. Students at top universities sleep on campus, organise everything themselves, and build like their future depends on it. One country, producing more unicorns than any country in Europe. I understand why now.
            </p>
          </div>

          <p className="leading-relaxed">
            We didn&apos;t nail the Taj Mahal photo. But this trip deserves a picture on the wall.
          </p>
          <p className="leading-relaxed text-white font-medium">
            India is goated. Go before it becomes the next Bali.
          </p>
          <p className="leading-relaxed font-medium">
            We&apos;ll be back.
          </p>
        </section>

        <hr className="border-zinc-800 my-10" />

        <div className="mb-10">
          <p className="text-xs uppercase tracking-wider text-zinc-500 mb-4">Related posts</p>
          <div className="space-y-3">
            <Link href="/blog/startup-learnings" className="block text-sm text-zinc-400 hover:text-white transition-colors">
              4 pivots in 1.5 years: what I&apos;d tell myself before starting &rarr;
            </Link>
            <Link href="/blog/founder-habits" className="block text-sm text-zinc-400 hover:text-white transition-colors">
              I treated my life like a product. Here&apos;s what I removed. &rarr;
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
