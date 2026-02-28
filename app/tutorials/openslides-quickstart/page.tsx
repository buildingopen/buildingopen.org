import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Create a slide deck with OpenSlides - Building Open",
  description: "Generate branded presentations from Python. Extract brand colors from any website, write slides as HTML, export to PNG or PDF.",
};

export default function OpenSlidesQuickstart() {
  return (
    <article className="py-16">
      <div className="mx-auto max-w-2xl px-6">
        <Link href="/tutorials" className="text-sm text-zinc-600 hover:text-white transition-colors mb-8 block">
          &larr; Tutorials
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded">Beginner</span>
            <span className="text-xs text-zinc-600">~10 min</span>
          </div>
          <h1 className="text-3xl font-bold mb-3">Create a slide deck with OpenSlides</h1>
          <p className="text-zinc-500">Generate branded presentations from a text prompt or Python script. No PowerPoint, no Figma, no templates.</p>
        </header>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">What you&apos;ll get</h2>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            A complete slide deck with your brand colors, fonts, and logo. Exported as PNG images or PDF. The whole process takes about 2 minutes.
          </p>
          <ul className="space-y-2 text-zinc-400 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-zinc-500 mt-0.5">&#x2022;</span>
              <span>Auto-extract brand colors and fonts from any website</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zinc-500 mt-0.5">&#x2022;</span>
              <span>Full creative control via HTML/CSS (no theme fighting)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zinc-500 mt-0.5">&#x2022;</span>
              <span>Export to PNG or PDF</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zinc-500 mt-0.5">&#x2022;</span>
              <span>~300 lines of code, easy to understand and customize</span>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Prerequisites</h2>
          <ul className="space-y-2 text-zinc-400 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-zinc-500 mt-0.5">1.</span>
              <span>Python 3.9 or higher</span>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Step 1: Install</h2>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 font-mono text-sm text-zinc-300 space-y-1">
            <p>pip install openslides-ai</p>
            <p>playwright install chromium</p>
          </div>
          <p className="text-zinc-500 text-sm mt-2">
            Optional: <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-xs">pip install aiohttp</code> for brand extraction from URLs.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Step 2: Extract your brand</h2>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            Point OpenSlides at any website and it auto-extracts colors, fonts, and logo:
          </p>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 font-mono text-sm text-zinc-300 space-y-1">
            <p><span className="text-zinc-500">from</span> openslides <span className="text-zinc-500">import</span> Brand, export, base_html</p>
            <p></p>
            <p>brand = Brand.from_domain(<span className="text-green-400">&quot;stripe.com&quot;</span>)</p>
            <p></p>
            <p><span className="text-zinc-500">print</span>(brand.primary)       <span className="text-zinc-600"># &quot;#635bff&quot;</span></p>
            <p><span className="text-zinc-500">print</span>(brand.font_headline) <span className="text-zinc-600"># &quot;Inter&quot;</span></p>
          </div>
          <p className="text-zinc-400 mt-4 leading-relaxed">
            Or define brand values manually if you prefer:
          </p>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 font-mono text-sm text-zinc-300 space-y-1">
            <p>brand = Brand(</p>
            <p>    primary=<span className="text-green-400">&quot;#054dfe&quot;</span>,</p>
            <p>    background=<span className="text-green-400">&quot;#fdfbf5&quot;</span>,</p>
            <p>    text=<span className="text-green-400">&quot;#191919&quot;</span>,</p>
            <p>    font_headline=<span className="text-green-400">&quot;Syne&quot;</span>,</p>
            <p>    font_body=<span className="text-green-400">&quot;Inter&quot;</span>,</p>
            <p>)</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Step 3: Write your slides</h2>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            Each slide is a Python function that returns HTML. Use f-strings to inject brand values:
          </p>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 font-mono text-sm text-zinc-300 space-y-1">
            <p><span className="text-zinc-500">def</span> slide_hero():</p>
            <p>    <span className="text-zinc-500">return</span> f<span className="text-green-400">&apos;&apos;&apos;</span></p>
            <p>    <span className="text-green-400">{'{'}base_html(brand){'}'}</span></p>
            <p>    <span className="text-green-400">&lt;body style=&quot;background:{'{'}brand.background{'}'}&quot;&gt;</span></p>
            <p>      <span className="text-green-400">&lt;h1 style=&quot;color:{'{'}brand.text{'}'}&quot;&gt;</span></p>
            <p>        <span className="text-green-400">Your headline here</span></p>
            <p>      <span className="text-green-400">&lt;/h1&gt;</span></p>
            <p>    <span className="text-green-400">&lt;/body&gt;&lt;/html&gt;</span></p>
            <p>    <span className="text-green-400">&apos;&apos;&apos;</span></p>
          </div>
          <p className="text-zinc-400 mt-4 leading-relaxed">
            No abstractions to learn. It&apos;s just HTML with your brand values injected. If you can write a webpage, you can make slides.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Step 4: Export</h2>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 font-mono text-sm text-zinc-300 space-y-1">
            <p>slides = [slide_hero(), slide_solution(), slide_cta()]</p>
            <p></p>
            <p><span className="text-zinc-600"># Export to PNG</span></p>
            <p>export(slides, <span className="text-green-400">&quot;/tmp/my-deck/&quot;</span>)</p>
            <p></p>
            <p><span className="text-zinc-600"># Or export to PDF</span></p>
            <p>export(slides, <span className="text-green-400">&quot;/tmp/my-deck/&quot;</span>, format=<span className="text-green-400">&quot;pdf&quot;</span>)</p>
          </div>
          <p className="text-zinc-400 mt-4 leading-relaxed">
            That&apos;s it. Your slides are in <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-xs">/tmp/my-deck/</code> as <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-xs">slide-01.png</code>, <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-xs">slide-02.png</code>, etc.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">CLI alternative</h2>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            Prefer the command line? Save your slides as a Python file and build from the terminal:
          </p>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 font-mono text-sm text-zinc-300 space-y-1">
            <p><span className="text-zinc-600"># Build to PNG</span></p>
            <p>openslides build my_deck.py -o /tmp/output/</p>
            <p></p>
            <p><span className="text-zinc-600"># Build to PDF</span></p>
            <p>openslides build my_deck.py -o /tmp/output/ -f pdf</p>
            <p></p>
            <p><span className="text-zinc-600"># Custom dimensions</span></p>
            <p>openslides build my_deck.py -W 1280 -H 720</p>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Next steps</h2>
          <ul className="space-y-2 text-zinc-400 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-zinc-500 mt-0.5">&#x2022;</span>
              <span>Check the <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-xs">examples/</code> folder in the repo for full deck examples.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zinc-500 mt-0.5">&#x2022;</span>
              <span>The library is ~300 lines. Read it, understand it, make it yours.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zinc-500 mt-0.5">&#x2022;</span>
              <span>Use an AI coding tool to generate slides from a text prompt (describe what you want, it writes the HTML).</span>
            </li>
          </ul>
        </section>

        <hr className="border-zinc-800 my-10" />

        <div className="mb-10">
          <p className="text-xs uppercase tracking-wider text-zinc-500 mb-4">Related tutorials</p>
          <div className="space-y-3">
            <Link href="/tutorials/opendraft-quickstart" className="block text-sm text-zinc-400 hover:text-white transition-colors">
              Generate your first research paper with OpenPaper &rarr;
            </Link>
            <Link href="/tutorials/openclaw-whatsapp-assistant" className="block text-sm text-zinc-400 hover:text-white transition-colors">
              Build your own AI WhatsApp assistant &rarr;
            </Link>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <a
            href="https://github.com/federicodeponte/openslides"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-green-500 text-black font-medium rounded-lg hover:bg-green-400 transition-colors text-sm"
          >
            Get OpenSlides
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
