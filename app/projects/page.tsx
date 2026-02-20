import Card from "../components/Card";

const writingProjects = [
  {
    icon: "🤖",
    title: "OpenClaw",
    description: "Set up your own AI assistant in 10 minutes. No coding required.",
    tags: ["Beginner", "Setup Guide"],
    meta: "MIT License",
    href: "https://github.com/buildingopen/openclaw-setup",
    id: "openclaw"
  },
  {
    icon: "📝",
    title: "OpenDraft",
    description: "AI thesis writer with 19 specialized agents. Generate 20k+ word research drafts.",
    tags: ["Python", "Gemini", "AI"],
    meta: "MIT License",
    href: "https://github.com/federicodeponte/opendraft",
    id: "opendraft"
  },
  {
    icon: "📄",
    title: "OpenWord",
    description: "AI document generator. Create business letters, invoices, contracts with natural language.",
    tags: ["Python", "PDF", "Gemini"],
    meta: "MIT License",
    href: "https://github.com/federicodeponte/openword",
    id: "openword"
  },
];

const presentationProjects = [
  {
    icon: "📊",
    title: "OpenSlides",
    description: "Brand-first slide deck generator. Create presentations with full creative control.",
    tags: ["Python", "PNG/PDF", "Branding"],
    meta: "MIT License",
    href: "https://github.com/federicodeponte/openslides",
    id: "openslides"
  },
];

const aiProjects = [
  {
    icon: "💬",
    title: "OpenChat",
    description: "Claude Code for everyone. Accessible AI chat for non-techies.",
    tags: ["Next.js", "Claude", "TypeScript"],
    meta: "Coming soon",
    id: "openchat"
  },
];

export default function ProjectsPage() {
  return (
    <>
      <div className="py-12 border-b border-dashed border-zinc-800">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="text-3xl font-bold mb-2 animate-fade-in-up">Projects</h1>
          <p className="text-zinc-500 animate-fade-in-up-delay-1">Open source tools we're building. All free, all open.</p>
        </div>
      </div>

      <section className="py-12 border-b border-dashed border-zinc-800">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xs uppercase tracking-wider text-green-500 mb-6">Writing & Documents</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {writingProjects.map((project) => (
              <div key={project.id} id={project.id}>
                <Card
                  icon={project.icon}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  meta={project.meta}
                  href={project.href}
                  external
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 border-b border-dashed border-zinc-800">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xs uppercase tracking-wider text-green-500 mb-6">Presentations & Media</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {presentationProjects.map((project) => (
              <div key={project.id} id={project.id}>
                <Card
                  icon={project.icon}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  meta={project.meta}
                  href={project.href}
                  external
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 border-b border-dashed border-zinc-800">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xs uppercase tracking-wider text-green-500 mb-6">AI & Chat</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {aiProjects.map((project) => (
              <div key={project.id} id={project.id}>
                <Card
                  icon={project.icon}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  meta={project.meta}
                  disabled
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xs uppercase tracking-wider text-green-500 mb-2">Want to contribute?</h2>
          <p className="text-zinc-500 mb-4">All projects welcome contributions. Pick one and dive in.</p>
          <a
            href="https://github.com/buildingopen"
            className="inline-block px-6 py-3 border border-dashed border-zinc-800 rounded-lg hover:border-green-500 hover:text-green-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub →
          </a>
        </div>
      </section>
    </>
  );
}
