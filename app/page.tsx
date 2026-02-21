import Link from "next/link";
import Card from "./components/Card";

const moreTools = [
  {
    icon: "📊",
    title: "OpenSlides",
    description: "Create branded slide decks from a single prompt",
    meta: "Python + PIL",
    href: "https://github.com/federicodeponte/openslides",
    external: true,
  },
  {
    icon: "📄",
    title: "OpenWord",
    description: "Generate contracts, invoices, and letters",
    meta: "Python + DOCX",
    href: "https://github.com/federicodeponte/openword",
    external: true,
  },
  {
    icon: "🤖",
    title: "OpenClaw",
    description: "Set up your own AI assistant in 10 minutes",
    meta: "Setup Guide",
    href: "https://github.com/buildingopen/openclaw-setup",
    external: true,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero - Problem-first */}
      <section className="py-20 md:py-28 text-center border-b border-dashed border-zinc-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 via-transparent to-transparent pointer-events-none" />

        <div className="mx-auto max-w-5xl px-6 relative">
          <p className="text-sm text-zinc-500 mb-4 animate-fade-in-up">For students and self-taught developers</p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 animate-fade-in-up">
            Stop paying for tools<br className="hidden md:block" /> you can build <span className="text-green-500">yourself</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 animate-fade-in-up-delay-1">
            Free, open source alternatives to expensive SaaS. Use them, learn from them, make them yours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up-delay-2">
            <a
              href="https://github.com/federicodeponte/opendraft"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-3.5 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-all hover:shadow-lg hover:shadow-green-500/25"
            >
              Try OpenDraft Free
              <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <Link
              href="/projects"
              className="px-8 py-3.5 border border-zinc-700 rounded-lg hover:border-zinc-500 hover:bg-zinc-800/50 transition-all"
            >
              Browse All Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof - Real numbers */}
      <section className="py-5 border-b border-dashed border-zinc-800 bg-zinc-900/30">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-sm">
            <div className="flex items-center gap-2 text-zinc-400">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
              <span><span className="text-white font-semibold">5</span> repos on GitHub</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-green-500">MIT</span>
              <span>Use commercially, modify freely</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-green-500">$0</span>
              <span>forever</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured: OpenDraft Demo */}
      <section className="py-16 border-b border-dashed border-zinc-800">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left: Value prop */}
            <div>
              <p className="text-xs uppercase tracking-widest text-green-500 mb-3 font-medium">Featured Tool</p>
              <h2 className="text-3xl font-bold mb-4">Write your thesis in 12 minutes</h2>
              <p className="text-zinc-400 mb-6 leading-relaxed">
                OpenDraft uses 19 AI agents to research, outline, and write academic papers.
                One command generates a 20,000+ word draft with 40+ citations.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-zinc-300">
                  <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Academic sources from OpenAlex API
                </li>
                <li className="flex items-center gap-3 text-zinc-300">
                  <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Proper citations in APA/MLA format
                </li>
                <li className="flex items-center gap-3 text-zinc-300">
                  <svg className="w-5 h-5 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  Outputs .docx ready for editing
                </li>
              </ul>
              <a
                href="https://github.com/federicodeponte/opendraft"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                Get OpenDraft
              </a>
            </div>

            {/* Right: Terminal demo */}
            <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-900/50">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="text-xs text-zinc-500 ml-2">Terminal</span>
              </div>
              <div className="p-5 font-mono text-sm leading-relaxed">
                <div className="text-zinc-500">$ python opendraft.py --topic "Climate change"</div>
                <div className="mt-3 text-green-400">Agents initialized (19/19)</div>
                <div className="text-green-400">Searching OpenAlex for sources...</div>
                <div className="text-green-400">Found 47 relevant papers</div>
                <div className="text-green-400">Generating outline...</div>
                <div className="text-green-400">Writing chapters...</div>
                <div className="text-zinc-600 my-2">━━━━━━━━━━━━━━━━━━━━ 100%</div>
                <div className="text-white mt-3">Done in 11m 42s</div>
                <div className="text-zinc-400 mt-1">Output: thesis_draft.docx</div>
                <div className="text-zinc-400">Words: 23,847</div>
                <div className="text-zinc-400">Citations: 47</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* More Tools */}
      <section className="py-16 border-b border-dashed border-zinc-800">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex justify-between items-end mb-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-green-500 mb-2 font-medium">More Tools</p>
              <h2 className="text-2xl font-semibold">Also free, also open</h2>
            </div>
            <Link href="/projects" className="text-sm text-zinc-500 hover:text-green-500 transition-colors">
              View all →
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {moreTools.map((tool, i) => (
              <div key={tool.title} className={`animate-fade-in-up stagger-${i + 1}`}>
                <Card {...tool} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Builder Section - No emoji, initials only */}
      <section className="py-16 border-b border-dashed border-zinc-800 bg-zinc-900/20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
              {/* Initials avatar */}
              <div className="shrink-0">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-2xl font-bold text-black">
                  FD
                </div>
              </div>

              {/* Bio */}
              <div className="text-center md:text-left">
                <p className="text-zinc-500 text-sm mb-2">Built by</p>
                <h3 className="text-xl font-semibold mb-1">Federico De Ponte</h3>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Self-taught developer from Germany. I build the tools I wished I had when starting out.
                  Everything here is MIT licensed, use it however you want.
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

      {/* CTA */}
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Start building today</h2>
            <p className="text-zinc-400 mb-8">
              Clone a repo, run it locally, make it yours. No signups, no credit cards, no strings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://github.com/federicodeponte/opendraft"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-all"
              >
                Clone OpenDraft
              </a>
              <Link
                href="/manifesto"
                className="px-8 py-3.5 border border-zinc-700 rounded-lg hover:border-zinc-500 hover:bg-zinc-800/50 transition-all"
              >
                Read the Manifesto
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
