const tools = [
  {
    title: "OpenDraft",
    description: "Generate academic papers with AI. 40+ pages, proper citations, 12 minutes.",
    href: "https://github.com/federicodeponte/opendraft",
  },
  {
    title: "OpenSlides",
    description: "Generate slide decks from text prompts.",
    href: "https://github.com/federicodeponte/openslides",
  },
  {
    title: "OpenWord",
    description: "Generate documents, contracts, letters.",
    href: "https://github.com/federicodeponte/openword",
  },
  {
    title: "OpenClaw",
    description: "Set up your own AI assistant in 10 minutes.",
    href: "https://github.com/buildingopen/openclaw-setup",
  },
];

export default function ProjectsPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-3xl px-6">
        <h1 className="text-3xl font-bold mb-2">Projects</h1>
        <p className="text-zinc-500 mb-10">All tools are free and open source (MIT).</p>

        <div className="space-y-4">
          {tools.map((tool) => (
            <a
              key={tool.title}
              href={tool.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 border border-zinc-800 rounded-lg hover:border-zinc-600 transition-colors"
            >
              <h2 className="font-semibold mb-1">{tool.title}</h2>
              <p className="text-sm text-zinc-500">{tool.description}</p>
            </a>
          ))}
        </div>

        <p className="text-sm text-zinc-600 mt-10 text-center">
          More tools coming. Follow on{" "}
          <a
            href="https://github.com/buildingopen"
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  );
}
