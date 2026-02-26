import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects - Building Open",
  description: "Free and open source tools: OpenDraft for research papers, OpenSlides for presentations, OpenWord for documents.",
};

const projects = [
  {
    id: "opendraft",
    title: "OpenDraft",
    tagline: "AI research paper generator",
    description: "Generate a 40-page academic paper with proper citations in under 15 minutes. Real sources from OpenAlex, exports to .docx.",
    features: ["20,000+ words", "Real academic sources", "APA/MLA/Chicago citations", "Export to Word"],
    href: "https://github.com/federicodeponte/opendraft",
    image: "/thesis-page-01.png",
  },
  {
    id: "openslides",
    title: "OpenSlides",
    tagline: "Text prompt to slide deck",
    description: "Generate branded presentation decks from a simple text prompt. Professional layouts, consistent styling.",
    features: ["Multiple layouts", "Brand colors", "Export to PPTX", "Custom templates"],
    href: "https://github.com/federicodeponte/openslides",
    image: "/openslides-demo.png",
    comingSoon: true,
  },
  {
    id: "openword",
    title: "OpenWord",
    tagline: "Template-based document generator",
    description: "Generate contracts, letters, and documents from templates. Fill in your data, get formatted output.",
    features: ["Contract templates", "Mail merge", "PDF export", "Custom fields"],
    href: "https://github.com/federicodeponte/openword",
    image: "/openword-demo.png",
    comingSoon: true,
  },
];

export default function ProjectsPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="text-3xl font-bold mb-2">Projects</h1>
        <p className="text-zinc-500 mb-12">Free and open source tools. Use them, learn from them, make them yours.</p>

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
                {project.comingSoon ? (
                  <span className="inline-block px-5 py-2 bg-zinc-800 text-zinc-500 font-medium rounded-lg text-sm cursor-default">
                    Coming soon
                  </span>
                ) : (
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-5 py-2 bg-green-500 text-black font-medium rounded-lg hover:bg-green-400 transition-colors text-sm"
                  >
                    View on GitHub
                  </a>
                )}
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
