import Link from "next/link";
import Card from "./components/Card";

const projects = [
  { icon: "🤖", title: "OpenClaw", description: "AI assistant setup in 10 minutes", meta: "Setup Guide", href: "/projects#openclaw" },
  { icon: "📝", title: "OpenDraft", description: "AI thesis writer with 19 agents", meta: "MIT License", href: "/projects#opendraft" },
  { icon: "📊", title: "OpenSlides", description: "Brand-first slide deck generator", meta: "Python", href: "/projects#openslides" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-32 text-center border-b border-dashed border-zinc-800 relative overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 via-transparent to-transparent pointer-events-none" />

        <div className="mx-auto max-w-5xl px-6 relative">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in-up">
            Open source for <span className="text-green-500">everyone</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-lg mx-auto mb-10 animate-fade-in-up-delay-1">
            We build tools that create opportunity. Free software for learning, creating, and growing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
            <Link
              href="/projects"
              className="group px-8 py-3.5 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-all hover:shadow-lg hover:shadow-green-500/25 btn-shine"
            >
              View Projects
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
            <a
              href="https://github.com/buildingopen"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-3.5 border border-zinc-700 rounded-lg hover:border-zinc-500 hover:bg-zinc-800/50 transition-all flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 border-b border-dashed border-zinc-800">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex justify-between items-end mb-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-green-500 mb-2 font-medium">Projects</p>
              <h2 className="text-2xl font-semibold">What we're building</h2>
            </div>
            <Link href="/projects" className="text-sm text-zinc-500 hover:text-green-500 transition-colors link-underline">
              View all
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {projects.map((project, i) => (
              <div key={project.title} className={`animate-fade-in-up stagger-${i + 1}`}>
                <Card {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto teaser */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-zinc-400 mb-6 leading-relaxed">
              We believe the best tools should be free. The best education should be accessible.
            </p>
            <Link
              href="/manifesto"
              className="group inline-flex items-center gap-2 text-green-500 hover:text-green-400 transition-colors font-medium"
            >
              Read our Manifesto
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
