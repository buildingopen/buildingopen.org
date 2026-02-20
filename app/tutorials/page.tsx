import Card from "../components/Card";

const gettingStarted = [
  { icon: "🎯", title: "Pick Your First Tool", description: "Choose the right tool for what you want to build" },
  { icon: "⚙️", title: "Set Up Your Environment", description: "Install Python, Node, and essential tools in 10 min" },
  { icon: "🚀", title: "Build Something in 20 Min", description: "Follow along and ship your first project" },
];

const techStacks = [
  { icon: "🐍", title: "Python + Gemini", description: "Used in OpenDraft, OpenSlides, OpenWord. AI-powered document generation.", meta: "Most projects" },
  { icon: "⚛️", title: "Next.js + Tailwind", description: "Modern React framework for web apps. TypeScript, fast builds.", meta: "Websites" },
  { icon: "🤖", title: "Claude Code", description: "AI-assisted development. Build faster with natural language.", meta: "Workflow" },
  { icon: "🗄️", title: "Supabase", description: "Open source Firebase alternative. Postgres, Auth, Storage.", meta: "Backend" },
];

const resources = [
  { icon: "📚", title: "Learning Paths", description: "Structured guides from beginner to advanced" },
  { icon: "🔧", title: "Recommended Tools", description: "VSCode, Git, terminal setup, and more" },
  { icon: "🔗", title: "External Resources", description: "Best tutorials, docs, and courses we recommend" },
  { icon: "💬", title: "Community Links", description: "Discord, GitHub Discussions, office hours" },
];

const projectGuides = [
  { icon: "📝", title: "Mastering OpenDraft", description: "Advanced thesis writing: agents, citations, exports" },
  { icon: "📊", title: "OpenSlides Workflows", description: "Brand extraction, templates, batch generation" },
  { icon: "📄", title: "OpenWord Deep Dive", description: "Document templates, PDF styling, automation" },
  { icon: "🤖", title: "OpenClaw Customization", description: "Configure your AI assistant, add tools" },
];

const contributing = [
  { icon: "🤝", title: "How to Contribute", description: "Fork, branch, PR workflow explained" },
  { icon: "🐛", title: "Bug Reports", description: "Write effective bug reports that get fixed" },
  { icon: "✨", title: "Feature Requests", description: "Propose ideas and shape the roadmap" },
];

export default function TutorialsPage() {
  return (
    <>
      <div className="py-12 border-b border-dashed border-zinc-800">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="text-3xl font-bold mb-2 animate-fade-in-up">
            Tutorials <span className="ml-2 px-2 py-1 bg-zinc-800 text-zinc-500 rounded text-sm font-normal">Phase 2</span>
          </h1>
          <p className="text-zinc-500 animate-fade-in-up-delay-1">Learn to build with our tools. Step-by-step guides for everyone.</p>
        </div>
      </div>

      {/* Getting Started */}
      <section className="py-12 border-b border-dashed border-zinc-800 opacity-40">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xs uppercase tracking-wider text-green-500 mb-2">Getting Started</h2>
          <p className="text-zinc-500 mb-6">New here? Start with these.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {gettingStarted.map((item) => (
              <Card key={item.title} icon={item.icon} title={item.title} description={item.description} disabled />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stacks */}
      <section className="py-12 border-b border-dashed border-zinc-800 opacity-40">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xs uppercase tracking-wider text-green-500 mb-2">Tech Stacks</h2>
          <p className="text-zinc-500 mb-6">The technologies behind our projects.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {techStacks.map((item) => (
              <Card key={item.title} icon={item.icon} title={item.title} description={item.description} meta={item.meta} disabled />
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-12 border-b border-dashed border-zinc-800 opacity-40">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xs uppercase tracking-wider text-green-500 mb-2">Resources</h2>
          <p className="text-zinc-500 mb-6">Tools, links, and learning materials.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {resources.map((item) => (
              <Card key={item.title} icon={item.icon} title={item.title} description={item.description} disabled />
            ))}
          </div>
        </div>
      </section>

      {/* Project Guides */}
      <section className="py-12 border-b border-dashed border-zinc-800 opacity-40">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xs uppercase tracking-wider text-green-500 mb-2">Project Guides</h2>
          <p className="text-zinc-500 mb-6">Deep dives into each tool.</p>
          <div className="grid md:grid-cols-2 gap-4">
            {projectGuides.map((item) => (
              <Card key={item.title} icon={item.icon} title={item.title} description={item.description} disabled />
            ))}
          </div>
        </div>
      </section>

      {/* Contributing */}
      <section className="py-12 opacity-40">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xs uppercase tracking-wider text-green-500 mb-2">Contributing</h2>
          <p className="text-zinc-500 mb-6">Help us build.</p>
          <div className="grid md:grid-cols-3 gap-4">
            {contributing.map((item) => (
              <Card key={item.title} icon={item.icon} title={item.title} description={item.description} disabled />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
