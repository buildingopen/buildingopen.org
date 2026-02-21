import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero - Building Open intro */}
      <section className="py-20 md:py-28 border-b border-zinc-800">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Free tools for people who build
          </h1>
          <p className="text-lg text-zinc-400 mb-8 max-w-xl mx-auto">
            Open source software for writing, presenting, and creating.
            Use them, learn from them, make them yours.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/projects"
              className="px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-zinc-200 transition-colors"
            >
              View Projects
            </Link>
            <a
              href="https://github.com/buildingopen"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 border border-zinc-700 rounded-lg hover:border-zinc-500 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Featured: OpenDraft with large preview */}
      <section className="py-16 border-b border-zinc-800">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-8">
            <p className="text-sm text-zinc-500 mb-2">Featured</p>
            <h2 className="text-2xl md:text-3xl font-bold">OpenDraft</h2>
            <p className="text-zinc-400 mt-2">
              Generate a 40-page research paper with proper citations in 12 minutes.
            </p>
          </div>

          {/* Large PDF preview */}
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Main preview - large */}
            <div className="bg-zinc-900 rounded-lg p-6 border border-zinc-800">
              <img
                src="/thesis-page-01.png"
                alt="OpenDraft output - title page"
                className="w-full rounded shadow-lg"
              />
              <p className="text-sm text-zinc-500 mt-4 text-center">
                Title page with proper academic formatting
              </p>
            </div>

            {/* Details + more pages */}
            <div>
              <div className="mb-8">
                <h3 className="font-semibold mb-3">What you get:</h3>
                <ul className="space-y-2 text-zinc-400">
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
                    <span>Table of contents, abstract, references</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-white mt-0.5">•</span>
                    <span>Exports to .docx for editing</span>
                  </li>
                </ul>
              </div>

              {/* Smaller page previews */}
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

              <div className="flex gap-3">
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

      {/* Other tools */}
      <section className="py-16 border-b border-zinc-800">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm text-zinc-500 mb-2">More tools</p>
          <h2 className="text-xl font-bold mb-6">Also free, also open source</h2>

          <div className="grid md:grid-cols-3 gap-4">
            <a
              href="https://github.com/federicodeponte/openslides"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 border border-zinc-800 rounded-lg hover:border-zinc-600 transition-colors group"
            >
              <h3 className="font-semibold mb-1 group-hover:text-white transition-colors">OpenSlides</h3>
              <p className="text-sm text-zinc-500">Generate branded slide decks from a text prompt</p>
            </a>
            <a
              href="https://github.com/federicodeponte/openword"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 border border-zinc-800 rounded-lg hover:border-zinc-600 transition-colors group"
            >
              <h3 className="font-semibold mb-1 group-hover:text-white transition-colors">OpenWord</h3>
              <p className="text-sm text-zinc-500">Generate documents, contracts, and letters</p>
            </a>
            <a
              href="https://github.com/buildingopen/openclaw-setup"
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 border border-zinc-800 rounded-lg hover:border-zinc-600 transition-colors group"
            >
              <h3 className="font-semibold mb-1 group-hover:text-white transition-colors">OpenClaw</h3>
              <p className="text-sm text-zinc-500">Set up your own AI assistant in 10 minutes</p>
            </a>
          </div>
        </div>
      </section>

      {/* About / Why */}
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-xl font-bold mb-4">Why we build in the open</h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            The best tools cost money. We think they shouldn&apos;t.
            Everything here is MIT licensed, free forever, and built to be learned from.
          </p>
          <Link
            href="/manifesto"
            className="text-sm text-zinc-500 hover:text-white transition-colors"
          >
            Read the manifesto →
          </Link>
        </div>
      </section>
    </>
  );
}
