'use client';

import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "./components/animations/FadeIn";

const blogTeasers = [
  { slug: "agent-protocol", title: "The Agent Protocol Layer", date: "Feb 27" },
  { slug: "founder-habits", title: "I treated my life like a product. Here\u2019s what I removed.", date: "Feb 26" },
  { slug: "clawdbot-hinge", title: "Clawdbot Killed My Hinge Date", date: "Feb 22" },
];

function PulseDot({ className }: { className?: string }) {
  return (
    <span className={`inline-block w-1.5 h-1.5 rounded-full animate-pulse ${className}`} />
  );
}

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <FadeIn className="border-b border-zinc-800 px-6 py-14 md:py-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div className="max-w-[620px]">
            <h1 className="text-[28px] md:text-4xl font-bold tracking-tight leading-tight">
              We see problems. We build solutions.
            </h1>
            <p className="text-zinc-400 mt-3 text-base leading-relaxed">
              Then we share everything. Tools, ideas, experiments, code. Take what&apos;s useful, ignore the rest.
            </p>
            <a
              href="https://linkedin.com/in/federicodeponte"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center gap-4 group"
            >
              <Image
                src="/fede.jpg"
                alt="Federico De Ponte"
                width={56}
                height={56}
                className="rounded-xl object-cover border border-zinc-800 flex-shrink-0"
              />
              <div className="text-sm">
                <div className="font-semibold group-hover:text-green-500 transition-colors">Federico De Ponte</div>
                <div className="text-zinc-500 mt-0.5">Founder &middot; Building Open</div>
              </div>
            </a>
          </div>
          <div className="flex-shrink-0">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm text-zinc-400 border border-zinc-800 rounded-lg hover:border-zinc-600 hover:text-white transition-colors"
            >
              <span className="text-lg leading-none">&darr;</span> See what we&apos;re building
            </a>
          </div>
        </div>
      </FadeIn>

      {/* Projects Bento */}
      <FadeIn delay={0.1} className="px-6 py-12" id="projects">
        <div className="max-w-5xl mx-auto">
          {/* Featured: OpenDraft */}
          <div className="border border-zinc-800 rounded-xl overflow-hidden mb-px">
            <a
              href="https://opendraft.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-[#0a0a0a] hover:bg-[#111113] transition-colors p-8 md:p-9"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
                <div className="max-w-[520px]">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-green-500 font-medium mb-4">
                    <PulseDot className="bg-green-500" />
                    Live
                  </div>
                  <h2 className="text-2xl md:text-[28px] font-bold tracking-tight">OpenDraft</h2>
                  <p className="text-zinc-500 text-[14px] leading-relaxed mt-2">
                    AI agents that write thesis-level research papers with verified citations from 200M+ academic sources.
                  </p>
                </div>

                {/* Activity feed */}
                <div className="flex-1 max-w-[400px] p-4 bg-[#111113] group-hover:bg-[#18181b] rounded-lg border border-zinc-800/60 font-mono text-[12px] transition-colors">
                  <div className="flex items-center gap-2.5 py-1.5 text-zinc-600">
                    <span className="text-green-500 text-[10px]">&#9679;</span>
                    <span className="flex-1">Research complete &middot; 51 sources found</span>
                    <span className="text-zinc-700 text-[11px]">4:49</span>
                  </div>
                  <div className="flex items-center gap-2.5 py-1.5 text-zinc-600 border-t border-zinc-800/40">
                    <span className="text-green-500 text-[10px]">&#9679;</span>
                    <span className="flex-1">Outline ready &middot; 7 sections</span>
                    <span className="text-zinc-700 text-[11px]">2:05</span>
                  </div>
                  <div className="flex items-center gap-2.5 py-1.5 text-zinc-600 border-t border-zinc-800/40">
                    <span className="text-amber-500 text-[10px]">&#9679;</span>
                    <span className="flex-1">Writing section 3 of 7...</span>
                    <span className="text-zinc-700 text-[11px]">now</span>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <span className="text-[13px] text-zinc-600 group-hover:text-green-500 transition-colors">
                  Try OpenDraft &rarr;
                </span>
              </div>
            </a>
          </div>

          {/* 3 secondary projects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-zinc-800 border border-zinc-800 border-t-0 rounded-b-xl overflow-hidden">
            {/* OpenSky */}
            <a
              href="https://flyfast.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#0a0a0a] hover:bg-[#111113] transition-colors p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-blue-400 font-medium mb-4">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-400" />
                  Live
                </div>
                <h3 className="text-lg font-bold tracking-tight">OpenSky</h3>
                <p className="text-zinc-500 text-[13px] leading-relaxed mt-2">
                  AI flight search that finds hidden deals. Gemini analyzes routes across airlines.
                </p>
                <div className="mt-4 px-3 py-2.5 bg-[#111113] group-hover:bg-[#18181b] rounded-md border border-zinc-800/60 font-mono text-[12px] text-zinc-700 transition-colors">
                  <span className="text-blue-400">opensky &middot; flyfast.app</span>
                </div>
              </div>
              <div className="mt-5">
                <span className="text-[13px] text-zinc-600 group-hover:text-green-500 transition-colors">
                  Try OpenSky &rarr;
                </span>
              </div>
            </a>

            {/* OpenQueen */}
            <Link
              href="/projects#openqueen"
              className="group bg-[#0a0a0a] hover:bg-[#111113] transition-colors p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-amber-400 font-medium mb-4">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-amber-400" />
                  New
                </div>
                <h3 className="text-lg font-bold tracking-tight">OpenQueen</h3>
                <p className="text-zinc-500 text-[13px] leading-relaxed mt-2">
                  Coding agent controlled by WhatsApp. Send a task, get code back.
                </p>
                <div className="mt-4 px-3 py-2.5 bg-[#111113] group-hover:bg-[#18181b] rounded-md border border-zinc-800/60 font-mono text-[12px] text-zinc-700 transition-colors">
                  <code>$ </code><span className="text-green-500">npx openqueen</span><code> --transport whatsapp</code>
                </div>
              </div>
              <div className="mt-5">
                <span className="text-[13px] text-zinc-600 group-hover:text-green-500 transition-colors">
                  GitHub &rarr;
                </span>
              </div>
            </Link>

            {/* OpenSlides */}
            <Link
              href="/projects#openslides"
              className="group bg-[#0a0a0a] hover:bg-[#111113] transition-colors p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider text-purple-400 font-medium mb-4">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-purple-400" />
                  65+ brands
                </div>
                <h3 className="text-lg font-bold tracking-tight">OpenSlides</h3>
                <p className="text-zinc-500 text-[13px] leading-relaxed mt-2">
                  Point at any website, get a pitch deck in that brand&apos;s exact colors and fonts.
                </p>
                <div className="mt-4 px-3 py-2.5 bg-[#111113] group-hover:bg-[#18181b] rounded-md border border-zinc-800/60 font-mono text-[12px] text-zinc-700 transition-colors">
                  <code>$ </code><span className="text-green-500">openslides</span><code> --brand stripe.com</code>
                </div>
              </div>
              <div className="mt-5">
                <span className="text-[13px] text-zinc-600 group-hover:text-green-500 transition-colors">
                  Try it &rarr;
                </span>
              </div>
            </Link>
          </div>

          <div className="text-center mt-5">
            <Link href="/projects" className="text-[13px] text-zinc-600 hover:text-white transition-colors">
              All projects &rarr;
            </Link>
          </div>
        </div>
      </FadeIn>

      {/* Blog Teasers */}
      <FadeIn delay={0.2} className="border-t border-b border-zinc-800 px-6 py-12">
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
      <FadeIn delay={0.3} className="bg-[#111113] px-6 py-16">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-[520px]">
            <p className="text-lg font-medium leading-relaxed text-zinc-400">
              <strong className="text-white font-semibold">We build because we see problems.</strong><br />
              <strong className="text-white font-semibold">We share because why not.</strong><br />
              Come build with us.
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
