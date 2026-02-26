import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { tutorials } from "../lib/tutorials";

export const metadata: Metadata = {
  title: "Blog - Building Open",
  description: "Thoughts on building, open source, startups, and the things we learn along the way.",
};

const posts = [
  {
    slug: "founder-habits",
    title: "I treated my life like a product. Here's what I removed.",
    description: "2 years into my 2nd startup. The habits that moved the needle most aren't what you'd expect.",
    date: "February 26, 2026",
  },
  {
    slug: "clawdbot-hinge",
    title: "Clawdbot Killed My Hinge Date",
    description: "Auto-replied with a config error. She blocked me. New item for the AI agent risk assessment checklist.",
    date: "February 22, 2026",
  },
  {
    slug: "golf-vs-datacenters",
    title: "Golf courses use 30x more water than all US data centers",
    description: "I was worried about my AI carbon footprint. Then I fact-checked it.",
    date: "February 18, 2026",
  },
  {
    slug: "goodbye-powerpoint",
    title: "I genuinely stopped using PowerPoint",
    description: "Spending days aligning boxes feels insane when you can build a whole app in the same time. So I made an app for building slides.",
    date: "February 10, 2026",
  },
  {
    slug: "ai-file-context",
    title: "Better AI answers with file context",
    description: "How to give AI 10x better answers with file context. Stop asking generic questions.",
    date: "February 6, 2026",
  },
  {
    slug: "claude-code-context",
    title: "Why Claude Code is my new best friend",
    description: "If you're still using AI like a search bar, you're missing the point. Give it context. Give it memory.",
    date: "February 6, 2026",
  },
  {
    slug: "startup-learnings",
    title: "4 pivots in 1.5 years: what I'd tell myself before starting",
    description: "Venture studio. Marketing agency. Marketing SaaS. AI visibility SaaS. Here's what I learned.",
    date: "February 4, 2026",
  },
  {
    slug: "scaile-india",
    title: "SCAILE goes to India",
    description: "One country, producing more unicorns than any country in Europe. I understand why now.",
    date: "February 3, 2026",
  },
  {
    slug: "opendraft-seo",
    title: "How OpenDraft hit #1 on Google, ChatGPT, Perplexity, and Gemini",
    description: "18 months of SEO and AEO learnings distilled into a simple formula.",
    date: "January 29, 2026",
  },
  {
    slug: "opensource-tools",
    title: "Why I stopped paying for software",
    description: "I replaced Word, Excel, PowerPoint, Figma, and n8n with open source tools I built myself. Here's why.",
    date: "January 13, 2026",
  },
];

export default function BlogPage() {
  const [featured, ...rest] = posts;

  return (
    <div className="py-16">
      <div className="mx-auto max-w-2xl px-6">
        {/* Tutorials */}
        <div className="mb-16">
          <p className="text-xs uppercase tracking-wider text-zinc-500 mb-4">Tutorials</p>
          <div className="space-y-3">
            {tutorials.map((t) => (
              <Link
                key={t.slug}
                href={`/tutorials/${t.slug}`}
                className="group block text-sm text-zinc-400 hover:text-white transition-colors"
              >
                {t.title} &rarr;
              </Link>
            ))}
          </div>
        </div>

        <h1 className="text-3xl font-bold mb-2">Blog</h1>
        <p className="text-zinc-500 mb-12">Thoughts on building, open source, and the things we learn along the way.</p>

        {/* Featured post */}
        <Link
          href={`/blog/${featured.slug}`}
          className="group block mb-12"
        >
          <div className="relative aspect-[2/1] rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800 mb-4">
            <Image
              src="/clawdbot-hinge.jpg"
              alt={featured.title}
              fill
              sizes="(max-width: 672px) 100vw, 672px"
              className="object-cover object-top"
            />
          </div>
          <p className="text-sm text-zinc-600 mb-1">{featured.date}</p>
          <h2 className="text-xl font-semibold group-hover:text-white transition-colors mb-2">
            {featured.title}
          </h2>
          <p className="text-zinc-400 text-sm">{featured.description}</p>
        </Link>

        {/* Remaining posts */}
        <div className="space-y-8">
          {rest.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block border-b border-zinc-800 pb-8"
            >
              <p className="text-sm text-zinc-600 mb-1">{post.date}</p>
              <h2 className="text-lg font-semibold group-hover:text-white transition-colors mb-2">
                {post.title}
              </h2>
              <p className="text-zinc-400 text-sm">{post.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
