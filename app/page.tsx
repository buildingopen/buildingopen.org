import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 md:py-28 border-b border-zinc-800">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm text-zinc-500 mb-4">For students, researchers, and indie hackers</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            The tools you need but can&apos;t afford
          </h1>
          <p className="text-lg text-zinc-400 mb-8 max-w-xl mx-auto">
            Thesis writers. Slide generators. Document automation.
            All open source. All free. No catch.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
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

      {/* Featured: OpenDraft */}
      <section className="py-16 border-b border-zinc-800">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-8">
            <p className="text-sm text-zinc-500 mb-2">Featured</p>
            <h2 className="text-2xl md:text-3xl font-bold">OpenDraft</h2>
            <p className="text-zinc-400 mt-2">
              Generate a 40-page research paper with proper citations in 12 minutes.
            </p>
          </div>

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

      {/* Other tools - with concrete outputs */}
      <section className="py-16 border-b border-zinc-800">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm text-zinc-500 mb-2">More tools</p>
          <h2 className="text-xl font-bold mb-6">Same idea, different outputs</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* OpenSlides */}
            <a
              href="https://github.com/federicodeponte/openslides"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 border border-zinc-800 rounded-lg hover:border-zinc-600 transition-colors group"
            >
              <h3 className="font-semibold mb-2 group-hover:text-white transition-colors">OpenSlides</h3>
              <p className="text-sm text-zinc-500 mb-4">Text prompt → branded slide deck</p>
              <div className="bg-zinc-900 rounded p-3 text-xs font-mono text-zinc-600">
                <p className="text-zinc-500">Input: &quot;10 slides on climate change for investors&quot;</p>
                <p className="text-zinc-400 mt-2">Output: presentation.pdf (10 slides, branded)</p>
              </div>
            </a>

            {/* OpenWord */}
            <a
              href="https://github.com/federicodeponte/openword"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 border border-zinc-800 rounded-lg hover:border-zinc-600 transition-colors group"
            >
              <h3 className="font-semibold mb-2 group-hover:text-white transition-colors">OpenWord</h3>
              <p className="text-sm text-zinc-500 mb-4">Template + data → formatted document</p>
              <div className="bg-zinc-900 rounded p-3 text-xs font-mono text-zinc-600">
                <p className="text-zinc-500">Input: contract template + client details</p>
                <p className="text-zinc-400 mt-2">Output: contract_signed.docx (ready to send)</p>
              </div>
            </a>
          </div>

          <div className="mt-6">
            <a
              href="https://github.com/buildingopen/openclaw-setup"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-6 border border-zinc-800 rounded-lg hover:border-zinc-600 transition-colors group"
            >
              <h3 className="font-semibold mb-2 group-hover:text-white transition-colors">OpenClaw</h3>
              <p className="text-sm text-zinc-500 mb-4">Step-by-step guide to set up your own AI assistant (Claude, GPT, etc.)</p>
              <div className="bg-zinc-900 rounded p-3 text-xs font-mono text-zinc-600">
                <p className="text-zinc-500">Time: ~10 minutes</p>
                <p className="text-zinc-400 mt-2">Result: Your own AI assistant, running locally or in the cloud</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Who built this */}
      <section className="py-16 border-b border-zinc-800">
        <div className="mx-auto max-w-2xl px-6">
          <p className="text-sm text-zinc-500 mb-2">Who&apos;s behind this</p>
          <h2 className="text-xl font-bold mb-4">One person, building in public</h2>
          <p className="text-zinc-400 leading-relaxed mb-4">
            I&apos;m Federico, a self-taught developer from Germany. I built these tools because I needed them
            and couldn&apos;t afford the alternatives.
          </p>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Now they&apos;re free for anyone. MIT licensed, no strings attached.
            If you find them useful, that&apos;s the whole point.
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
      </section>

      {/* Why */}
      <section className="py-16">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="text-xl font-bold mb-4">Why free?</h2>
          <p className="text-zinc-400 leading-relaxed mb-6">
            Because I was the broke student who couldn&apos;t afford the $50/month tools.
            If you&apos;re in that position now, these are for you.
          </p>
          <Link
            href="/manifesto"
            className="text-sm text-zinc-500 hover:text-white transition-colors"
          >
            Read the full manifesto →
          </Link>
        </div>
      </section>
    </>
  );
}
