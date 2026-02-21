import Link from "next/link";
import Terminal from "./components/Terminal";

export default function Home() {
  return (
    <>
      {/* Hero - Value prop */}
      <section className="py-20 md:py-28 border-b border-zinc-800">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Let&apos;s build the new world, together
          </h1>
          <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto">
            Open source tools you can use, learn from, and make your own.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/projects"
              className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-zinc-200 transition-colors"
            >
              View Projects
            </Link>
            <Link
              href="/manifesto"
              className="px-6 py-3 border border-zinc-700 rounded-lg hover:border-zinc-500 transition-colors"
            >
              Read the Manifesto
            </Link>
          </div>
        </div>
      </section>

      {/* What we do - Three pillars */}
      <section className="py-16 border-b border-zinc-800">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold mb-2">Tools</h3>
              <p className="text-sm text-zinc-400">
                Free, open source software that creates real value. Not demos, but tools you can actually use.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Education</h3>
              <p className="text-sm text-zinc-400">
                Learn how things work. Read the code, understand the patterns, build your own.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Community</h3>
              <p className="text-sm text-zinc-400">
                Ask questions, share what you&apos;ve built, learn from others on the same journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured: OpenDraft */}
      <section className="py-16 border-b border-zinc-800">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <div>
              <p className="text-sm text-zinc-500 mb-2">Featured Project</p>
              <h2 className="text-2xl md:text-3xl font-bold">OpenDraft</h2>
            </div>
            <a
              href="https://github.com/federicodeponte/opendraft/stargazers"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1 bg-zinc-800 rounded-full text-sm hover:bg-zinc-700 transition-colors"
            >
              <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
              </svg>
              <span>6 stars</span>
            </a>
          </div>
          <p className="text-zinc-400 mb-8">
            Generate a 40-page research paper with proper citations in 12 minutes.
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Main preview */}
            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <img
                src="/thesis-page-01.png"
                alt="OpenDraft output - title page"
                className="w-full rounded shadow-lg"
              />
              <p className="text-sm text-zinc-500 mt-4 text-center">
                Real output from OpenDraft v3
              </p>
            </div>

            {/* Details */}
            <div>
              <div className="mb-6">
                <h3 className="font-semibold mb-3">What you get:</h3>
                <ul className="space-y-2 text-zinc-400 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-0.5">•</span>
                    <span>20,000+ words across 40+ pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-0.5">•</span>
                    <span>Real academic sources from OpenAlex</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-0.5">•</span>
                    <span>Proper citations (APA, MLA, Chicago)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-0.5">•</span>
                    <span>Exports to .docx for editing</span>
                  </li>
                </ul>
              </div>

              {/* Page previews */}
              <div className="grid grid-cols-3 gap-3 mb-6">
                <div>
                  <img
                    src="/thesis-page-02.png"
                    alt="Table of contents"
                    className="w-full rounded border border-zinc-800"
                  />
                  <p className="text-xs text-zinc-600 mt-1">Contents</p>
                </div>
                <div>
                  <img
                    src="/thesis-page-09.png"
                    alt="Main body"
                    className="w-full rounded border border-zinc-800"
                  />
                  <p className="text-xs text-zinc-600 mt-1">Body</p>
                </div>
                <div>
                  <img
                    src="/thesis-page-39.png"
                    alt="References"
                    className="w-full rounded border border-zinc-800"
                  />
                  <p className="text-xs text-zinc-600 mt-1">References</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://github.com/federicodeponte/opendraft"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-white text-black font-medium rounded-lg hover:bg-zinc-200 transition-colors"
                >
                  Get OpenDraft
                </a>
                <a
                  href="/sample-thesis.pdf"
                  target="_blank"
                  className="px-5 py-2.5 border border-zinc-700 rounded-lg hover:border-zinc-500 transition-colors text-sm"
                >
                  Download sample PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Try it now */}
      <section className="py-16 border-b border-zinc-800 bg-zinc-900/30">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-xl font-bold mb-2 text-center">Try it yourself</h2>
          <p className="text-zinc-500 text-sm mb-6 text-center">
            Clone, install, run. Read the code. Make it yours.
          </p>
          <Terminal
            commands={[
              "git clone https://github.com/federicodeponte/opendraft",
              "cd opendraft && pip install -r requirements.txt",
              "python opendraft.py --topic \"Your research topic here\""
            ]}
          />
          <p className="text-xs text-zinc-600 mt-4 text-center">
            Requires Python 3.10+ and a Gemini API key (free tier works)
          </p>
        </div>
      </section>

      {/* More tools */}
      <section className="py-16 border-b border-zinc-800">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm text-zinc-500 mb-2">More Projects</p>
          <h2 className="text-xl font-bold mb-8">Same philosophy, different outputs</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* OpenSlides */}
            <a
              href="https://github.com/federicodeponte/openslides"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="bg-zinc-900 rounded-lg border border-zinc-800 group-hover:border-zinc-600 transition-colors overflow-hidden">
                <img
                  src="/openslides-demo.png"
                  alt="OpenSlides output - 4-slide strategy deck"
                  className="w-full"
                />
              </div>
              <h3 className="font-semibold mt-4 group-hover:text-white transition-colors">OpenSlides</h3>
              <p className="text-sm text-zinc-500">Text prompt → branded slide deck</p>
            </a>

            {/* OpenWord */}
            <a
              href="https://github.com/federicodeponte/openword"
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="bg-zinc-900 rounded-lg border border-zinc-800 group-hover:border-zinc-600 transition-colors overflow-hidden">
                <img
                  src="/openword-demo.png"
                  alt="OpenWord output - NDA contract"
                  className="w-full"
                />
              </div>
              <h3 className="font-semibold mt-4 group-hover:text-white transition-colors">OpenWord</h3>
              <p className="text-sm text-zinc-500">Template + data → formatted document</p>
            </a>
          </div>
        </div>
      </section>

      {/* Who */}
      <section className="py-16 border-b border-zinc-800">
        <div className="mx-auto max-w-2xl px-6">
          <div className="flex items-start gap-6">
            <div className="shrink-0">
              <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center text-xl font-bold">
                FD
              </div>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">Federico De Ponte</h2>
              <p className="text-sm text-zinc-500 mb-4">Self-taught developer from Germany</p>
              <p className="text-zinc-400 leading-relaxed mb-4">
                I believe the best tools and education should be accessible to everyone,
                regardless of where you live or what you can afford.
                That&apos;s why everything here is open source and free.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/federicodeponte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  GitHub →
                </a>
                <a
                  href="https://linkedin.com/in/federicodeponte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-500 hover:text-white transition-colors"
                >
                  LinkedIn →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-xl font-bold mb-4">Join us</h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Use the tools. Learn from the code. Contribute if you can.
            Fork it, improve it, build something new.
            That&apos;s not competition, that&apos;s the goal.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://github.com/buildingopen"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-zinc-200 transition-colors"
            >
              GitHub
            </a>
            <Link
              href="/manifesto"
              className="px-6 py-3 border border-zinc-700 rounded-lg hover:border-zinc-500 transition-colors"
            >
              Read the Manifesto
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
