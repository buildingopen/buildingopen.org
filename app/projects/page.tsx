const projects = [
  {
    title: "OpenDraft",
    tagline: "AI research paper generator",
    description: "Generate a 40-page academic paper with proper citations in 12 minutes. Real sources from OpenAlex, exports to .docx.",
    features: ["20,000+ words", "Real academic sources", "APA/MLA/Chicago citations", "Export to Word"],
    href: "https://github.com/federicodeponte/opendraft",
    image: "/thesis-page-01.png",
    stars: 6,
  },
  {
    title: "OpenSlides",
    tagline: "Text prompt to slide deck",
    description: "Generate branded presentation decks from a simple text prompt. Professional layouts, consistent styling.",
    features: ["Multiple layouts", "Brand colors", "Export to PPTX", "Custom templates"],
    href: "https://github.com/federicodeponte/openslides",
    image: "/openslides-demo.png",
  },
  {
    title: "OpenWord",
    tagline: "Template-based document generator",
    description: "Generate contracts, letters, and documents from templates. Fill in your data, get formatted output.",
    features: ["Contract templates", "Mail merge", "PDF export", "Custom fields"],
    href: "https://github.com/federicodeponte/openword",
    image: "/openword-demo.png",
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
            <div key={project.title} className="grid md:grid-cols-2 gap-8 items-start">
              <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full"
                />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h2 className="text-xl font-bold">{project.title}</h2>
                  {project.stars && (
                    <span className="flex items-center gap-1 text-sm text-zinc-500">
                      <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                      </svg>
                      {project.stars}
                    </span>
                  )}
                </div>
                <p className="text-green-500 text-sm mb-3">{project.tagline}</p>
                <p className="text-zinc-400 text-sm mb-4">{project.description}</p>
                <ul className="space-y-1 mb-6">
                  {project.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-zinc-500">
                      <span className="text-green-500">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 bg-green-500 text-black font-medium rounded-lg hover:bg-green-400 transition-colors text-sm"
                >
                  View on GitHub
                </a>
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
            className="inline-block px-5 py-2 border border-zinc-700 rounded-lg hover:border-green-500 hover:text-green-500 transition-colors text-sm"
          >
            Follow on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}
