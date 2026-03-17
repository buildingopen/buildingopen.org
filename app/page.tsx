'use client';

import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "./components/animations/FadeIn";

const blogTeasers = [
  { slug: "agent-protocol", title: "The Agent Protocol Layer", date: "Feb 27" },
  { slug: "founder-habits", title: "I treated my life like a product. Here\u2019s what I removed.", date: "Feb 26" },
  { slug: "clawdbot-hinge", title: "Clawdbot Killed My Hinge Date", date: "Feb 22" },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <FadeIn className="border-b border-zinc-800 px-6 py-14 md:py-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-[620px]">
            <h1 className="text-[28px] md:text-4xl font-bold tracking-tight leading-tight">
              I see problems. I build solutions.
            </h1>
            <p className="text-zinc-400 mt-3 text-base leading-relaxed">
              Then I share everything. Tools, ideas, experiments, code. Take what&apos;s useful, ignore the rest.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <Image
                src="/fede.jpg"
                alt="Federico De Ponte"
                width={56}
                height={56}
                className="rounded-xl object-cover border border-zinc-800 flex-shrink-0"
              />
              <div className="text-sm">
                <div className="font-semibold">Federico De Ponte</div>
                <div className="text-zinc-500 mt-0.5">AI engineer &middot; Hamburg &rarr; San Francisco</div>
              </div>
            </div>
          </div>
          <div className="flex-shrink-0">
            <a
              href="#featured"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm text-zinc-400 border border-zinc-800 rounded-lg hover:border-zinc-600 hover:text-white transition-colors"
            >
              <span className="text-lg leading-none">&darr;</span> See what I&apos;m building
            </a>
          </div>
        </div>
      </FadeIn>

      {/* Featured Project */}
      <FadeIn delay={0.1} className="bg-[#111113] px-6 py-12" id="featured">
        <div className="max-w-5xl mx-auto">
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-[#0a0a0a] border border-zinc-800">
            <Image
              src="/openpaper-hero.png"
              alt="OpenPaper - AI research paper generator"
              fill
              sizes="(max-width: 768px) 100vw, 1080px"
              className="object-cover object-top"
              priority
            />
          </div>
          <div className="mt-6 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="max-w-[560px]">
              <h2 className="text-[22px] font-bold">OpenPaper</h2>
              <p className="text-zinc-400 text-[15px] leading-relaxed mt-2">
                18 AI agents write thesis-level research papers with verified citations from 200M+ academic sources. Full generation in ~10 minutes.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <a
                href="https://openpaper.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-green-500 hover:bg-green-400 text-black text-sm font-semibold rounded-lg transition-colors"
              >
                Try OpenPaper &rarr;
              </a>
              <Link
                href="/projects"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 border border-zinc-800 text-zinc-400 text-sm font-medium rounded-lg hover:border-zinc-600 hover:text-white transition-colors"
              >
                All projects &rarr;
              </Link>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Secondary Projects */}
      <FadeIn delay={0.2} className="border-b border-zinc-800">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <Link
            href="/projects#openqueen"
            className="group block p-6 border-b md:border-b-0 md:border-r border-zinc-800 hover:bg-[#111113] transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-[#111113] border border-zinc-800 flex-shrink-0">
                <Image
                  src="/openqueen-demo.png"
                  alt="OpenQueen"
                  fill
                  sizes="96px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <h3 className="text-base font-semibold">OpenQueen</h3>
                <p className="text-zinc-500 text-[13px] mt-1">Coding agent controlled by WhatsApp. Send a task, get code back.</p>
                <span className="text-zinc-600 text-xs mt-2 inline-block group-hover:text-zinc-400 transition-colors">View project &rarr;</span>
              </div>
            </div>
          </Link>
          <Link
            href="/projects#openslides"
            className="group block p-6 hover:bg-[#111113] transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className="relative w-24 h-24 rounded-lg overflow-hidden bg-[#111113] border border-zinc-800 flex-shrink-0">
                <Image
                  src="/openslides-demo.png"
                  alt="OpenSlides"
                  fill
                  sizes="96px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <h3 className="text-base font-semibold">OpenSlides</h3>
                <p className="text-zinc-500 text-[13px] mt-1">Text &rarr; branded slide deck. Point at any website, get matching slides.</p>
                <span className="text-zinc-600 text-xs mt-2 inline-block group-hover:text-zinc-400 transition-colors">View project &rarr;</span>
              </div>
            </div>
          </Link>
        </div>
      </FadeIn>

      {/* Blog Teasers */}
      <FadeIn delay={0.3} className="border-b border-zinc-800 px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-lg font-semibold">Latest writing</h2>
            <Link href="/blog" className="text-[13px] text-zinc-500 hover:text-white transition-colors">
              Read all &rarr;
            </Link>
          </div>
          <div className="flex flex-col">
            {blogTeasers.map((post, idx) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`group flex items-baseline justify-between py-3.5 ${idx < blogTeasers.length - 1 ? 'border-b border-zinc-800' : ''} transition-colors`}
              >
                <span className="text-[15px] font-medium text-zinc-400 group-hover:text-white transition-colors">
                  {post.title}
                </span>
                <span className="text-[13px] text-zinc-500 flex-shrink-0 ml-6 tabular-nums hidden md:inline">
                  {post.date}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Closing */}
      <FadeIn delay={0.4} className="bg-[#111113] px-6 py-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-[520px]">
            <p className="text-lg font-medium leading-relaxed text-zinc-400">
              <strong className="text-white font-semibold">I build because I see problems.</strong><br />
              <strong className="text-white font-semibold">I share because why not.</strong><br />
              Come build with me.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              href="/about"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 border border-zinc-800 text-zinc-400 text-sm font-medium rounded-lg hover:border-zinc-600 hover:text-white transition-colors"
            >
              About Building Open &rarr;
            </Link>
            <a
              href="https://github.com/buildingopen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 bg-green-500 hover:bg-green-400 text-black text-sm font-semibold rounded-lg transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
