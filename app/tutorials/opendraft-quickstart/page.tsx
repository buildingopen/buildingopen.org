import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Generate your first research paper with OpenPaper - Building Open",
  description: "Go from a topic to a 40-page research paper with proper citations in under 15 minutes.",
};

export default function OpenPaperQuickstart() {
  return (
    <article className="py-16">
      <div className="mx-auto max-w-2xl px-6">
        <Link href="/tutorials" className="text-sm text-zinc-600 hover:text-white transition-colors mb-8 block">
          &larr; Tutorials
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded">Beginner</span>
            <span className="text-xs text-zinc-600">~15 min</span>
          </div>
          <h1 className="text-3xl font-bold mb-3">Generate your first research paper with OpenPaper</h1>
          <p className="text-zinc-500">From a topic to a 40-page paper with proper citations in under 15 minutes.</p>
          <p className="text-xs text-zinc-600 mt-3">Note: The repository still uses the original name &quot;OpenDraft.&quot;</p>
        </header>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">What you&apos;ll get</h2>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            By the end of this tutorial, you&apos;ll have a complete research paper with:
          </p>
          <ul className="space-y-2 text-zinc-400 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-zinc-500 mt-0.5">&#x2022;</span>
              <span>20,000+ words across 40+ pages</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zinc-500 mt-0.5">&#x2022;</span>
              <span>Real academic sources from OpenAlex</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zinc-500 mt-0.5">&#x2022;</span>
              <span>Proper citations in APA, MLA, or Chicago format</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zinc-500 mt-0.5">&#x2022;</span>
              <span>Export to .docx for editing in Word or Google Docs</span>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Prerequisites</h2>
          <ul className="space-y-2 text-zinc-400 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-zinc-500 mt-0.5">1.</span>
              <span>Python 3.10 or higher</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zinc-500 mt-0.5">2.</span>
              <span>A Gemini API key (free tier from <a href="https://aistudio.google.com/apikey" target="_blank" rel="noopener noreferrer" className="text-zinc-300 underline hover:text-white">Google AI Studio</a>)</span>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Step 1: Clone and install</h2>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 font-mono text-sm text-zinc-300 space-y-1">
            <p>git clone https://github.com/federicodeponte/opendraft</p>
            <p>cd opendraft</p>
            <p>pip install -r requirements.txt</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Step 2: Add your API key</h2>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            Create a <code className="text-sm bg-zinc-800 px-1.5 py-0.5 rounded">.env</code> file in the project root:
          </p>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 font-mono text-sm text-zinc-300">
            <p>GEMINI_API_KEY=your_api_key_here</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Step 3: Generate your paper</h2>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 font-mono text-sm text-zinc-300">
            <p>python opendraft.py --topic &quot;Your research topic here&quot;</p>
          </div>
          <p className="text-zinc-400 mt-4 leading-relaxed">
            That&apos;s it. OpenPaper will:
          </p>
          <ul className="space-y-2 text-zinc-400 text-sm mt-3">
            <li className="flex items-start gap-2">
              <span className="text-zinc-500 mt-0.5">1.</span>
              <span>Search OpenAlex for real academic sources relevant to your topic</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zinc-500 mt-0.5">2.</span>
              <span>Generate an outline with sections and subsections</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zinc-500 mt-0.5">3.</span>
              <span>Write each section using 19 AI agents working in parallel</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zinc-500 mt-0.5">4.</span>
              <span>Format citations and generate a bibliography</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zinc-500 mt-0.5">5.</span>
              <span>Export to .docx</span>
            </li>
          </ul>
          <p className="text-zinc-400 mt-4 leading-relaxed">
            The whole process takes about 10-15 minutes.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Options</h2>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-sm space-y-3">
            <div>
              <code className="text-zinc-300">--citation-style apa|mla|chicago</code>
              <p className="text-zinc-500 mt-1">Choose your citation format (default: APA)</p>
            </div>
            <div>
              <code className="text-zinc-300">--pages 20</code>
              <p className="text-zinc-500 mt-1">Target page count (default: 40)</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Example output</h2>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            Want to see what the output looks like before running it yourself?
          </p>
          <a
            href="/sample-thesis.pdf"
            target="_blank"
            className="inline-block px-5 py-2.5 border border-zinc-700 rounded-lg hover:border-white hover:text-white transition-colors text-sm"
          >
            Download sample PDF
          </a>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Next steps</h2>
          <ul className="space-y-2 text-zinc-400 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-zinc-500 mt-0.5">&#x2022;</span>
              <span>Read the code. The orchestration logic in <code className="text-sm bg-zinc-800 px-1.5 py-0.5 rounded">opendraft.py</code> is well-commented.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zinc-500 mt-0.5">&#x2022;</span>
              <span>Customize the prompts to match your writing style or institution&apos;s requirements.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zinc-500 mt-0.5">&#x2022;</span>
              <span>Star the repo and open issues if you find bugs or want features.</span>
            </li>
          </ul>
        </section>

        <hr className="border-zinc-800 my-10" />

        <div className="mb-10">
          <p className="text-xs uppercase tracking-wider text-zinc-500 mb-4">Related tutorials</p>
          <div className="space-y-3">
            <Link href="/tutorials/openslides-quickstart" className="block text-sm text-zinc-400 hover:text-white transition-colors">
              Create a slide deck with OpenSlides &rarr;
            </Link>
            <Link href="/tutorials/openclaw-whatsapp-assistant" className="block text-sm text-zinc-400 hover:text-white transition-colors">
              Build your own AI WhatsApp assistant &rarr;
            </Link>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/federicodeponte/opendraft"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-green-500 text-black font-medium rounded-lg hover:bg-green-400 transition-colors text-sm"
          >
            Get OpenPaper
          </a>
          <Link
            href="/tutorials"
            className="px-5 py-2.5 border border-zinc-700 rounded-lg hover:border-white hover:text-white transition-colors text-sm"
          >
            All tutorials
          </Link>
        </div>
      </div>
    </article>
  );
}
