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
      <div className="py-16 border-b border-dashed border-zinc-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 via-transparent to-transparent pointer-events-none" />
        <div className="mx-auto max-w-5xl px-6 relative">
          <h1 className="text-4xl font-bold mb-3 animate-fade-in-up">Projects</h1>
          <p className="text-zinc-400 text-lg animate-fade-in-up-delay-1">Open source tools we're building. All free, all open.</p>
        </div>
      </div>

      <section className="py-14 border-b border-dashed border-zinc-800">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xs uppercase tracking-widest text-green-500 mb-8 font-medium">Writing & Documents</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {writingProjects.map((project, i) => (
              <div key={project.id} id={project.id} className={`animate-fade-in-up stagger-${i + 1}`}>
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

      <section className="py-14 border-b border-dashed border-zinc-800">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xs uppercase tracking-widest text-green-500 mb-8 font-medium">Presentations & Media</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {presentationProjects.map((project) => (
              <div key={project.id} id={project.id} className="animate-fade-in-up">
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

      <section className="py-14 border-b border-dashed border-zinc-800">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xs uppercase tracking-widest text-green-500 mb-8 font-medium">AI & Chat</h2>
          <div className="grid md:grid-cols-3 gap-5">
            {aiProjects.map((project) => (
              <div key={project.id} id={project.id} className="animate-fade-in-up">
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

      <section className="py-14">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xs uppercase tracking-widest text-green-500 mb-3 font-medium">Want to contribute?</h2>
          <p className="text-zinc-400 mb-6">All projects welcome contributions. Pick one and dive in.</p>
          <a
            href="https://github.com/buildingopen"
            className="group inline-flex items-center gap-2 px-6 py-3 border border-zinc-700 rounded-lg hover:border-zinc-500 hover:bg-zinc-800/50 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View on GitHub
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </section>
    </>
  );
}
