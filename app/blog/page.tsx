import Link from "next/link";

const posts = [
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
    slug: "travel-planning",
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
  return (
    <div className="py-16">
      <div className="mx-auto max-w-2xl px-6">
        <h1 className="text-3xl font-bold mb-2">Blog</h1>
        <p className="text-zinc-500 mb-12">Thoughts on building, open source, and the things we learn along the way.</p>

        <div className="space-y-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block border-b border-zinc-800 pb-8"
            >
              <p className="text-sm text-zinc-600 mb-1">{post.date}</p>
              <h2 className="text-lg font-semibold group-hover:text-green-500 transition-colors mb-2">
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
