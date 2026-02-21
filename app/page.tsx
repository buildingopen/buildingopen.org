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

      {/* Social Proof - Real GitHub stats */}
      <section className="py-5 border-b border-dashed border-zinc-800 bg-zinc-900/30">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-sm">
            <a
              href="https://github.com/federicodeponte/opendraft/stargazers"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
              <span><span className="text-white font-semibold">6</span> stars</span>
            </a>
            <a
              href="https://github.com/federicodeponte/opendraft/forks"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors"
            >
              <svg className="w-4 h-4 text-zinc-400" fill="currentColor" viewBox="0 0 24 24"><path d="M7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm14 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM5 7v4h14V7H5zm0 6v7a2 2 0 0 0 2 2h2v-5h6v5h2a2 2 0 0 0 2-2v-7H5z"/></svg>
              <span><span className="text-white font-semibold">3</span> forks</span>
            </a>
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-green-500 font-medium">MIT</span>
              <span>Use commercially</span>
            </div>
            <div className="flex items-center gap-2 text-zinc-400">
              <span className="text-green-500 font-medium">$0</span>
              <span>forever</span>
            </div>
          </div>
        </div>
      </section>

      {/* How it works - 3 steps */}
      <section className="py-14 border-b border-dashed border-zinc-800">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-xs uppercase tracking-widest text-green-500 mb-2 font-medium text-center">How it works</p>
          <h2 className="text-2xl font-semibold text-center mb-10">Up and running in 3 commands</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center mx-auto mb-4 text-green-500 font-mono font-bold">1</div>
              <h3 className="font-semibold mb-2">Clone</h3>
              <code className="text-sm text-zinc-500 bg-zinc-900 px-3 py-1.5 rounded block">git clone repo</code>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center mx-auto mb-4 text-green-500 font-mono font-bold">2</div>
              <h3 className="font-semibold mb-2">Install</h3>
              <code className="text-sm text-zinc-500 bg-zinc-900 px-3 py-1.5 rounded block">pip install -r requirements.txt</code>
            </div>
            <div className="text-center">
              <div className="w-10 h-10 rounded-full bg-zinc-800 border border-zinc-700 flex items-center justify-center mx-auto mb-4 text-green-500 font-mono font-bold">3</div>
              <h3 className="font-semibold mb-2">Run</h3>
              <code className="text-sm text-zinc-500 bg-zinc-900 px-3 py-1.5 rounded block">python opendraft.py</code>
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
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/federicodeponte/opendraft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 text-black font-semibold rounded-lg hover:bg-green-400 transition-all"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                  Get OpenDraft
                </a>
                <a
                  href="https://github.com/federicodeponte/opendraft#readme"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-zinc-700 rounded-lg hover:border-zinc-500 hover:bg-zinc-800/50 transition-all text-sm"
                >
                  Read the docs
                </a>
              </div>
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

      {/* Why I built this - Personal story */}
      <section className="py-14 border-b border-dashed border-zinc-800 bg-zinc-900/20">
        <div className="mx-auto max-w-3xl px-6">
          <div className="relative">
            <svg className="absolute -top-2 -left-2 w-8 h-8 text-green-500/20" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
            <blockquote className="text-lg md:text-xl text-zinc-300 leading-relaxed pl-8">
              I was a broke student who needed a thesis writer but couldn&apos;t afford the $50/month tools.
              So I built my own. Then I realized: if I needed this, others probably do too.
              <span className="block mt-4 text-green-500 font-medium">That&apos;s Building Open.</span>
            </blockquote>
          </div>
          <div className="flex items-center gap-4 mt-8 pl-8">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-sm font-bold text-black">
              FD
            </div>
            <div>
              <p className="font-semibold">Federico De Ponte</p>
              <p className="text-sm text-zinc-500">Self-taught developer, Germany</p>
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
