import Link from "next/link";
import Card from "./components/Card";

const projects = [
  {
    icon: "🤖",
    title: "OpenClaw",
    description: "AI assistant setup in 10 minutes",
    meta: "Setup Guide",
    href: "/projects#openclaw",
    screenshot: "/screenshots/openclaw.png"
  },
  {
    icon: "📝",
    title: "OpenDraft",
    description: "AI thesis writer with 19 agents",
    meta: "6 stars on GitHub",
    href: "/projects#opendraft",
    screenshot: "/screenshots/opendraft.png"
  },
  {
    icon: "📊",
    title: "OpenSlides",
    description: "Brand-first slide deck generator",
    meta: "Python",
    href: "/projects#openslides",
    screenshot: "/screenshots/openslides.png"
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-32 text-center border-b border-dashed border-zinc-800 relative overflow-hidden">
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

      {/* Social Proof Bar */}
      <section className="py-6 border-b border-dashed border-zinc-800 bg-zinc-900/30">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm">
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-2xl font-bold text-white">5</span>
              <span>open source tools</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-2xl font-bold text-white">MIT</span>
              <span>licensed, forever free</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-2xl font-bold text-white">100%</span>
              <span>open source</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects with Screenshots */}
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

      {/* Builder Section - The Face Behind It */}
      <section className="py-16 border-b border-dashed border-zinc-800">
        <div className="mx-auto max-w-5xl px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-widest text-green-500 mb-6 font-medium text-center">Who's behind this</p>

            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Photo */}
              <div className="shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-green-500/20 to-zinc-800 p-1">
                  <div className="w-full h-full rounded-full bg-zinc-800 flex items-center justify-center text-4xl md:text-5xl">
                    👨‍💻
                  </div>
                </div>
              </div>

              {/* Bio */}
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold mb-1">Federico De Ponte</h3>
                <p className="text-green-500 text-sm mb-4">Founder & Builder</p>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Self-taught developer from Germany. Building tools I wished existed when I was learning to code.
                  Every project here started as a personal itch that needed scratching.
                </p>
                <div className="flex flex-wrap justify-center md:justify-start gap-4">
                  <a
                    href="https://github.com/federicodeponte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-500 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                    @federicodeponte
                  </a>
                  <a
                    href="https://linkedin.com/in/federicodeponte"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-zinc-500 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What it looks like - Demo section */}
      <section className="py-16 border-b border-dashed border-zinc-800">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs uppercase tracking-widest text-green-500 mb-2 font-medium text-center">See it in action</p>
          <h2 className="text-2xl font-semibold text-center mb-8">What OpenDraft actually looks like</h2>

          <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900">
            {/* Fake browser chrome */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-900">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
                <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
              </div>
              <div className="flex-1 mx-4">
                <div className="bg-zinc-800 rounded px-3 py-1 text-xs text-zinc-500 max-w-md mx-auto">
                  github.com/federicodeponte/opendraft
                </div>
              </div>
            </div>

            {/* Screenshot placeholder - terminal style */}
            <div className="p-6 font-mono text-sm">
              <div className="text-zinc-500 mb-2">$ python opendraft.py --topic &quot;Climate change impacts&quot;</div>
              <div className="text-green-500 mb-1">✓ Initializing 19 specialized agents...</div>
              <div className="text-green-500 mb-1">✓ Research agent gathering sources...</div>
              <div className="text-green-500 mb-1">✓ Outline agent structuring chapters...</div>
              <div className="text-green-500 mb-1">✓ Writing agents generating content...</div>
              <div className="text-zinc-400 mb-4">...</div>
              <div className="text-white mb-2">📄 Generated: thesis_draft.docx (23,847 words)</div>
              <div className="text-white mb-2">📚 Citations: 47 academic sources</div>
              <div className="text-white">⏱️  Time: 12 minutes</div>
            </div>
          </div>

          <p className="text-center text-zinc-500 text-sm mt-4">
            Real output from OpenDraft v3. One command, 20k+ words.
          </p>
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
