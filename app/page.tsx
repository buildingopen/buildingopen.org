import Link from "next/link";
import Card from "./components/Card";

const projects = [
  { icon: "🤖", title: "OpenClaw", description: "AI assistant setup in 10 minutes", meta: "Setup Guide", href: "/projects#openclaw" },
  { icon: "📝", title: "OpenDraft", description: "AI thesis writer with 19 agents", meta: "MIT License", href: "/projects#opendraft" },
  { icon: "📊", title: "OpenSlides", description: "Brand-first slide deck generator", meta: "Python", href: "/projects#openslides" },
];

const tutorials = [
  { icon: "🚀", title: "Getting Started", description: "Your first project in 20 min" },
  { icon: "🤝", title: "Contributing", description: "How to help improve projects" },
  { icon: "💡", title: "Building with AI", description: "Tips for AI-assisted coding" },
];

const blogPosts = [
  { title: "Why we build open", description: "Our philosophy on open source...", meta: "Feb 2026" },
  { title: "OpenDraft v3 released", description: "What's new in the latest version...", meta: "Feb 2026" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 md:py-24 text-center border-b border-dashed border-zinc-800">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 animate-fade-in-up">
            Open source for <span className="text-green-500">everyone</span>
          </h1>
          <p className="text-lg text-zinc-500 max-w-lg mx-auto mb-8 animate-fade-in-up-delay-1">
            We build tools that create opportunity. Free software for learning, creating, and growing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
            <Link
              href="/projects"
              className="px-6 py-3 bg-green-500 text-black font-medium rounded-lg hover:bg-green-600 transition-colors"
            >
              View Projects
            </Link>
            <Link
              href="/community"
              className="px-6 py-3 border border-dashed border-zinc-800 rounded-lg hover:border-green-500 hover:text-green-500 transition-colors"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-12 border-b border-dashed border-zinc-800">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <p className="text-xs uppercase tracking-wider text-green-500 mb-1">Projects</p>
              <h2 className="text-xl font-semibold">What we're building</h2>
            </div>
            <Link href="/projects" className="text-sm text-zinc-500 hover:text-green-500 transition-colors">
              View all →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {projects.map((project) => (
              <Card key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials (Future) */}
      <section className="py-12 border-b border-dashed border-zinc-800 opacity-40">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs uppercase tracking-wider text-green-500 mb-1">
            Tutorials <span className="ml-2 px-2 py-0.5 bg-zinc-800 text-zinc-500 rounded text-xs normal-case">Coming Soon</span>
          </p>
          <h2 className="text-xl font-semibold mb-6">Learn to build</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {tutorials.map((item) => (
              <Card key={item.title} icon={item.icon} title={item.title} description={item.description} disabled />
            ))}
          </div>
        </div>
      </section>

      {/* Blog (Future) */}
      <section className="py-12 opacity-40">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs uppercase tracking-wider text-green-500 mb-1">
            Blog <span className="ml-2 px-2 py-0.5 bg-zinc-800 text-zinc-500 rounded text-xs normal-case">Coming Soon</span>
          </p>
          <h2 className="text-xl font-semibold mb-6">Updates & thoughts</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {blogPosts.map((post) => (
              <Card key={post.title} icon="" title={post.title} description={post.description} meta={post.meta} disabled />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
