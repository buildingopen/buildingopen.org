import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects - Building Open",
  description: "Open source AI tools and Claude Code extensions. OpenDraft, OpenSky, OpenBrowser, OpenPage, and more.",
  openGraph: {
    title: "Projects - Building Open",
    description: "Open source AI tools and Claude Code extensions. OpenDraft, OpenSky, OpenBrowser, OpenPage, and more.",
  },
};

const projects = [
  {
    id: "opendraft",
    title: "OpenDraft",
    tagline: "AI agents that write research papers",
    description: "AI agents that write thesis-level research papers with verified citations from 200M+ academic sources. Full generation in ~10 minutes.",
    features: ["5-100 page papers", "Verified citations from 200M+ sources", "Multiple specialized AI agents", "Export to .docx"],
    href: "https://opendraft.xyz",
    image: "/thesis-page-01.png",
  },
  {
    id: "opensky",
    title: "OpenSky",
    tagline: "AI flight search",
    description: "AI-powered flight search that finds hidden deals. Gemini analyzes routes across airlines to surface prices you won't find on Google Flights.",
    features: ["AI route analysis", "Cross-airline comparison", "Hidden deal detection", "Price alerts"],
    href: "https://flyfast.app",
    image: "/opensky-demo.png",
  },
  {
    id: "openqueen",
    title: "OpenQueen",
    tagline: "Coding agent controlled by WhatsApp",
    description: "Send a message from WhatsApp. Gemini compiles it into a task, Claude executes it, and you get notified when done. All while you're away from your desk.",
    features: ["WhatsApp + Telegram transport", "Gemini orchestrates Claude/Codex", "Parallel task runner", "30-second install"],
    href: "https://github.com/buildingopen/openqueen",
    landingHref: "/openqueen",
    image: "/openqueen-demo.png",
  },
  {
    id: "openslides",
    title: "OpenSlides",
    tagline: "Brand-first AI slide decks",
    description: "Point it at any website. Get a pitch deck in that brand's exact colors, fonts, and style. 65+ curated brands, real SVG logos, one command.",
    features: ["65+ curated brands", "Real SVG logos", "LLM-powered generation", "Export to PNG/PDF"],
    href: "https://openslides.buildingopen.org",
    image: "/openslides-demo.png",
  },
];

type CompactProject = {
  id: string;
  title: string;
  description: string;
  href: string;
};

const moreTools: CompactProject[] = [
  {
    id: "openbrowser",
    title: "OpenBrowser",
    description: "Give AI your browser. Check email, track orders, download receipts. Open source MCP server + CLI.",
    href: "https://github.com/buildingopen/openbrowser",
  },
  {
    id: "openpage",
    title: "OpenPage",
    description: "Open-source website builder with visual drag-and-drop editor, AI site generation, and JSON-first architecture.",
    href: "https://github.com/buildingopen/openpage",
  },
  {
    id: "opencfo",
    title: "OpenCFO",
    description: "Your Chief Food Officer. AI agent that searches delivery apps + Google Maps and picks the best restaurant.",
    href: "https://github.com/buildingopen/opencfo",
  },
  {
    id: "runit",
    title: "RunIt",
    description: "Deploy and run code from AI chats. Self-hosted.",
    href: "https://github.com/buildingopen/runit",
  },
  {
    id: "openclaw-setup",
    title: "OpenClaw Setup",
    description: "Set up your own AI assistant with OpenClaw in 10 minutes. No coding required.",
    href: "https://github.com/buildingopen/openclaw-setup",
  },
];

const claudeCodeTools: CompactProject[] = [
  {
    id: "claude-setup",
    title: "Claude Setup",
    description: "Production-grade Claude Code configuration: CLAUDE.md templates, 12 safety hooks, 40+ skills, memory system.",
    href: "https://github.com/buildingopen/claude-setup",
  },
  {
    id: "session-recall",
    title: "Session Recall",
    description: "Search and analyze Claude Code session transcripts to recover context after compaction.",
    href: "https://github.com/buildingopen/session-recall",
  },
  {
    id: "claude-wrapped",
    title: "Claude Wrapped",
    description: "Spotify Wrapped for Claude Code. Visualize your AI coding stats with npx claude-entropy.",
    href: "https://github.com/buildingopen/claude-wrapped",
  },
  {
    id: "claude-code-stats",
    title: "Claude Code Stats",
    description: "Terminal dashboard for Claude Code. Track token usage, costs, and session metrics from the command line.",
    href: "https://github.com/buildingopen/claude-code-stats",
  },
  {
    id: "bouncer",
    title: "Bouncer",
    description: "Gemini stands at the door. Independent quality gate that audits Claude Code's output before it can stop.",
    href: "https://github.com/buildingopen/bouncer",
  },
  {
    id: "cc-resilience",
    title: "CC Resilience",
    description: "Crash-resilient automation for Claude Code. Verified iteration loops + automatic crash recovery.",
    href: "https://github.com/buildingopen/cc-resilience",
  },
  {
    id: "blast-radius",
    title: "Blast Radius",
    description: "Find all files affected by your changes. One bash script, zero dependencies.",
    href: "https://github.com/buildingopen/blast-radius",
  },
  {
    id: "dep-check",
    title: "Dep Check",
    description: "Find dead imports in your project. One bash script.",
    href: "https://github.com/buildingopen/dep-check",
  },
  {
    id: "hook-stats",
    title: "Hook Stats",
    description: "Analyze your Claude Code bash command log.",
    href: "https://github.com/buildingopen/hook-stats",
  },
  {
    id: "ai-error-analyzer",
    title: "AI Error Analyzer",
    description: "6 rules to reduce wasted AI coding retries. Analyze your own Claude Code, Cursor, or Copilot errors.",
    href: "https://github.com/buildingopen/ai-error-analyzer",
  },
];

export default function ProjectsPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-3xl font-bold mb-2">Projects</h1>
        <p className="text-zinc-500 mb-12">Open source tools we build. Use them, fork them, build on them.</p>

        <div className="space-y-16">
          {projects.map((project) => (
            <div key={project.id} id={project.id} className="scroll-mt-24 grid md:grid-cols-2 gap-8 items-start">
              <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                <p className="text-zinc-400 text-sm mb-3">{project.tagline}</p>
                <p className="text-zinc-400 text-sm mb-4">{project.description}</p>
                <ul className="space-y-1 mb-6">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-zinc-500">
                      <span className="text-zinc-500">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3">
                  {"landingHref" in project && (
                    <a
                      href={(project as { landingHref: string }).landingHref}
                      className="inline-block px-5 py-2 bg-green-500 text-black font-medium rounded-lg hover:bg-green-400 transition-colors text-sm"
                    >
                      Learn more
                    </a>
                  )}
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-2 bg-zinc-800 text-zinc-300 font-medium rounded-lg hover:bg-zinc-700 transition-colors text-sm"
                  >
                    {project.href.includes("github") ? "GitHub" : "Try it"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 mb-6">
          <h2 className="text-lg font-semibold">More Tools</h2>
          <p className="text-zinc-500 text-sm mt-1">Smaller utilities and experiments.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {moreTools.map((tool) => (
            <a
              key={tool.id}
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              id={tool.id}
              className="group scroll-mt-24 bg-zinc-900 rounded-lg border border-zinc-800 p-5 hover:border-zinc-600 hover:bg-zinc-800/50 transition-colors"
            >
              <h3 className="text-sm font-bold mb-1 group-hover:text-green-500 transition-colors">
                {tool.title}
              </h3>
              <p className="text-zinc-500 text-[13px] leading-relaxed">
                {tool.description}
              </p>
              <span className="text-[12px] text-zinc-600 mt-3 inline-block group-hover:text-zinc-400 transition-colors">
                GitHub →
              </span>
            </a>
          ))}
        </div>

        <div className="mt-16 mb-6">
          <h2 className="text-lg font-semibold">Claude Code Tools</h2>
          <p className="text-zinc-500 text-sm mt-1">Extensions, quality gates, and analytics for Claude Code.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {claudeCodeTools.map((tool) => (
            <a
              key={tool.id}
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              id={tool.id}
              className="group scroll-mt-24 bg-zinc-900 rounded-lg border border-zinc-800 p-5 hover:border-zinc-600 hover:bg-zinc-800/50 transition-colors"
            >
              <h3 className="text-sm font-bold mb-1 group-hover:text-green-500 transition-colors">
                {tool.title}
              </h3>
              <p className="text-zinc-500 text-[13px] leading-relaxed">
                {tool.description}
              </p>
              <span className="text-[12px] text-zinc-600 mt-3 inline-block group-hover:text-zinc-400 transition-colors">
                GitHub →
              </span>
            </a>
          ))}
        </div>

        <div className="mt-16 p-6 bg-zinc-900 rounded-lg border border-zinc-800 text-center">
          <p className="text-zinc-400 mb-4">All open source. Want to contribute?</p>
          <a
            href="https://github.com/buildingopen"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 border border-zinc-700 rounded-lg hover:border-white hover:text-white transition-colors text-sm"
          >
            Follow on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
