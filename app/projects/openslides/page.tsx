import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OpenSlides - Text to Slide Deck - Building Open',
  description: 'Generate branded presentation decks from a text prompt. Professional layouts, brand colors, export to PPTX.',
};

export default function OpenSlidesPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-3xl px-6">
        <Link href="/projects" className="text-sm text-green-500 hover:text-green-400 transition-colors">
          &larr; Projects
        </Link>

        <div className="mt-6 mb-12">
          <h1 className="text-4xl font-bold mb-3">OpenSlides</h1>
          <p className="text-xl text-zinc-400">Generate branded presentation decks from a simple text prompt.</p>
        </div>

        <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden mb-12">
          <img src="/openslides-demo.png" alt="OpenSlides generates branded slide decks" className="w-full" />
        </div>

        <section className="mb-12">
          <h2 className="text-lg font-semibold mb-6">How it works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-5 bg-zinc-900 rounded-lg border border-zinc-800">
              <div className="text-green-500 font-bold text-2xl mb-2">1</div>
              <p className="font-medium mb-1">Describe your deck</p>
              <p className="text-sm text-zinc-500">Write a prompt or paste an outline. OpenSlides generates slides with proper structure and content.</p>
            </div>
            <div className="p-5 bg-zinc-900 rounded-lg border border-zinc-800">
              <div className="text-green-500 font-bold text-2xl mb-2">2</div>
              <p className="font-medium mb-1">Brand it automatically</p>
              <p className="text-sm text-zinc-500">Point it at any website URL and it extracts brand colors, fonts, and style. Your slides look on-brand instantly.</p>
            </div>
            <div className="p-5 bg-zinc-900 rounded-lg border border-zinc-800">
              <div className="text-green-500 font-bold text-2xl mb-2">3</div>
              <p className="font-medium mb-1">Export and present</p>
              <p className="text-sm text-zinc-500">Download as PPTX, PNG, or PDF. Open in PowerPoint, Google Slides, or Keynote.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-lg font-semibold mb-4">What you get</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'Multiple slide layouts (title, content, comparison)',
              'Automatic brand color extraction',
              'Export to PPTX, PNG, and PDF',
              'Custom templates support',
              'Professional typography',
              'Runs from the command line',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-zinc-400">
                <svg className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-lg font-semibold mb-4">Who it&apos;s for</h2>
          <div className="space-y-3 text-sm text-zinc-400">
            <p><strong className="text-white">Founders and marketers</strong> who need pitch decks, strategy decks, or client presentations without hiring a designer.</p>
            <p><strong className="text-white">Students</strong> who need class presentations that look professional in minutes, not hours.</p>
            <p><strong className="text-white">Consultants</strong> who create client-facing decks regularly and want consistent branding without templates.</p>
          </div>
        </section>

        <div className="flex flex-col sm:flex-row gap-3 mb-12">
          <a
            href="https://github.com/federicodeponte/openslides"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-500 text-black font-medium rounded-lg hover:bg-green-400 transition-colors text-sm text-center"
          >
            Get started on GitHub
          </a>
          <Link
            href="/tutorials/openslides-quickstart"
            className="px-6 py-3 border border-zinc-700 rounded-lg hover:border-green-500 hover:text-green-500 transition-colors text-sm text-center"
          >
            Read the quickstart guide
          </Link>
        </div>

        <hr className="border-zinc-800 mb-8" />

        <div className="flex flex-col sm:flex-row gap-4 text-sm">
          <Link href="/projects/opendraft" className="text-zinc-500 hover:text-green-500 transition-colors">
            &larr; OpenDraft
          </Link>
          <Link href="/projects/openword" className="text-zinc-500 hover:text-green-500 transition-colors">
            Next: OpenWord &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
