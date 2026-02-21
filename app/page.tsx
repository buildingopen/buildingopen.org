import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero - Simple */}
      <section className="py-16 md:py-24 text-center border-b border-zinc-800">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            OpenDraft
          </h1>
          <p className="text-lg text-zinc-400 mb-8">
            Generate a 40-page academic paper in 12 minutes
          </p>
          <a
            href="https://github.com/federicodeponte/opendraft"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-medium rounded-lg hover:bg-zinc-200 transition-colors"
          >
            Get it on GitHub
          </a>
        </div>
      </section>

      {/* The actual output */}
      <section className="py-16 border-b border-zinc-800">
        <div className="mx-auto max-w-5xl px-6">
          <p className="text-sm text-zinc-500 mb-6 text-center">This is what it generates:</p>

          {/* PDF Preview - scrollable */}
          <div className="bg-zinc-900 rounded-lg border border-zinc-800 p-4 md:p-8">
            <div className="flex gap-4 md:gap-6 overflow-x-auto pb-4 snap-x">
              {/* Title page */}
              <div className="shrink-0 snap-start">
                <img
                  src="/thesis-page-01.png"
                  alt="Title page"
                  className="h-[400px] md:h-[500px] w-auto rounded shadow-2xl"
                />
                <p className="text-xs text-zinc-600 mt-2 text-center">Title page</p>
              </div>

              {/* Table of contents */}
              <div className="shrink-0 snap-start">
                <img
                  src="/thesis-page-02.png"
                  alt="Table of contents"
                  className="h-[400px] md:h-[500px] w-auto rounded shadow-2xl"
                />
                <p className="text-xs text-zinc-600 mt-2 text-center">Table of contents</p>
              </div>

              {/* Introduction */}
              <div className="shrink-0 snap-start">
                <img
                  src="/thesis-page-04.png"
                  alt="Introduction"
                  className="h-[400px] md:h-[500px] w-auto rounded shadow-2xl"
                />
                <p className="text-xs text-zinc-600 mt-2 text-center">Introduction</p>
              </div>

              {/* Main body */}
              <div className="shrink-0 snap-start">
                <img
                  src="/thesis-page-09.png"
                  alt="Main body"
                  className="h-[400px] md:h-[500px] w-auto rounded shadow-2xl"
                />
                <p className="text-xs text-zinc-600 mt-2 text-center">Main body</p>
              </div>

              {/* References */}
              <div className="shrink-0 snap-start">
                <img
                  src="/thesis-page-39.png"
                  alt="References"
                  className="h-[400px] md:h-[500px] w-auto rounded shadow-2xl"
                />
                <p className="text-xs text-zinc-600 mt-2 text-center">References</p>
              </div>
            </div>

            <p className="text-xs text-zinc-600 mt-4 text-center">Scroll to see more pages →</p>
          </div>

          {/* Download link */}
          <div className="mt-6 text-center">
            <a
              href="/sample-thesis.pdf"
              target="_blank"
              className="text-sm text-zinc-400 hover:text-white transition-colors underline"
            >
              Download full PDF (41 pages)
            </a>
          </div>
        </div>
      </section>

      {/* Stats - just the facts */}
      <section className="py-12 border-b border-zinc-800">
        <div className="mx-auto max-w-3xl px-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-2xl md:text-3xl font-bold">41</p>
              <p className="text-sm text-zinc-500">pages</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold">12</p>
              <p className="text-sm text-zinc-500">minutes</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-bold">47</p>
              <p className="text-sm text-zinc-500">citations</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works - minimal */}
      <section className="py-16 border-b border-zinc-800">
        <div className="mx-auto max-w-2xl px-6">
          <h2 className="text-xl font-semibold mb-6 text-center">Run it</h2>
          <div className="bg-zinc-900 rounded-lg p-4 font-mono text-sm">
            <p className="text-zinc-500">$ git clone https://github.com/federicodeponte/opendraft</p>
            <p className="text-zinc-500">$ pip install -r requirements.txt</p>
            <p className="text-zinc-500">$ python opendraft.py --topic "Your topic"</p>
          </div>
          <p className="text-sm text-zinc-500 mt-4 text-center">
            Requires Python 3.10+ and a Gemini API key (free tier works)
          </p>
        </div>
      </section>

      {/* Other tools */}
      <section className="py-16 border-b border-zinc-800">
        <div className="mx-auto max-w-3xl px-6">
          <h2 className="text-xl font-semibold mb-6 text-center">Other tools</h2>
          <div className="space-y-4">
            <a
              href="https://github.com/federicodeponte/openslides"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border border-zinc-800 rounded-lg hover:border-zinc-600 transition-colors"
            >
              <p className="font-medium">OpenSlides</p>
              <p className="text-sm text-zinc-500">Generate slide decks from text</p>
            </a>
            <a
              href="https://github.com/federicodeponte/openword"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-4 border border-zinc-800 rounded-lg hover:border-zinc-600 transition-colors"
            >
              <p className="font-medium">OpenWord</p>
              <p className="text-sm text-zinc-500">Generate documents, contracts, letters</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer-ish */}
      <section className="py-12">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="text-sm text-zinc-500">
            Built by{" "}
            <a
              href="https://github.com/federicodeponte"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors"
            >
              Federico De Ponte
            </a>
            {" "}· MIT License · Free forever
          </p>
        </div>
      </section>
    </>
  );
}
