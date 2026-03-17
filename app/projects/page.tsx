import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects - Building Open",
  description: "Open source AI tools: OpenDraft for research papers, OpenSky for flights, OpenSlides for presentations, OpenQueen for coding agents.",
  openGraph: {
    title: "Projects - Building Open",
    description: "Open source AI tools: OpenDraft for research papers, OpenSky for flights, OpenSlides for presentations, OpenQueen for coding agents.",
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

export default function ProjectsPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-3xl font-bold mb-2">Projects</h1>
        <p className="text-zinc-500 mb-12">Open source tools I built. Use them, fork them, build on them.</p>

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

        <div className="mt-16 p-6 bg-zinc-900 rounded-lg border border-zinc-800 text-center">
          <p className="text-zinc-400 mb-4">More tools coming. Want to contribute?</p>
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
