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
        <Link href="/blog" className="text-sm text-zinc-600 hover:text-green-500 transition-colors mb-8 block">
          &larr; Blog
        </Link>

        <header className="mb-12">
          <p className="text-sm text-zinc-600 mb-2">February 3, 2026</p>
          <h1 className="text-3xl font-bold mb-3">SCAILE goes to India</h1>
          <p className="text-zinc-500">I understand why they produce so many unicorns now.</p>
        </header>

        <section className="mb-10">
          <p className="text-zinc-400 mb-4 leading-relaxed">
            Starting 2026 a bit different. Simon and I are building an AI company in Europe - and we took the whole thing to India for two weeks. Came back different.
          </p>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            Pranjal showed us his India - not the tourist version. Delhi, Jaipur, Agra - you&apos;d think they&apos;re different countries.
          </p>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            Yatharth co-organised the SCAILE track at brAInwave, the AIMS-DTU hackathon. 30 hours of agentic coding at one of India&apos;s top CS universities. The pitches ranged from military drones to AI glasses that describe the world to blind people. 20-year-olds pitching with more conviction than most Series A founders I&apos;ve met in Europe.
          </p>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            Vinita, Shuddhabrota, and Siddharth shipped product from cafes across North India.
          </p>
          
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 my-8">
            <p className="text-zinc-300 leading-relaxed font-medium">
              Back home in Europe, an engineering degree is a ticket to a stable career. In India, it&apos;s a starting line. Students at top universities sleep on campus, organise everything themselves, and build like their future depends on it. One country, producing more unicorns than any country in Europe. I understand why now.
            </p>
          </div>

          <p className="text-zinc-400 mb-4 leading-relaxed">
            We didn&apos;t nail the Taj Mahal photo. But this trip deserves a picture on the wall.
          </p>
          <p className="text-zinc-400 mb-4 leading-relaxed text-white">
            India is goated. Go before it becomes the next Bali.
          </p>
          <p className="text-zinc-400 leading-relaxed font-medium">
            We&apos;ll be back.
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
