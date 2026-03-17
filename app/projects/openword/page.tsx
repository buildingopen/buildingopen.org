import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OpenWord - Template-Based Document Generator - Building Open',
  description: 'Generate contracts, letters, and documents from templates. Fill in your data, get formatted output.',
};

export default function OpenWordPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-3xl px-6">
        <Link href="/projects" className="text-sm text-green-500 hover:text-green-400 transition-colors">
          &larr; Projects
        </Link>

        <div className="mt-6 mb-12">
          <h1 className="text-4xl font-bold mb-3">OpenWord</h1>
          <p className="text-xl text-zinc-400">Generate contracts, letters, and documents from templates. Fill in your data, get formatted output.</p>
        </div>

        <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden mb-12">
          <img src="/openword-demo.png" alt="OpenWord generates documents from templates" className="w-full" />
        </div>

        <section className="mb-12">
          <h2 className="text-lg font-semibold mb-6">How it works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-5 bg-zinc-900 rounded-lg border border-zinc-800">
              <div className="text-green-500 font-bold text-2xl mb-2">1</div>
              <p className="font-medium mb-1">Pick a template</p>
              <p className="text-sm text-zinc-500">Choose from built-in templates (NDA, invoice, cover letter) or create your own with placeholder fields.</p>
            </div>
            <div className="p-5 bg-zinc-900 rounded-lg border border-zinc-800">
              <div className="text-green-500 font-bold text-2xl mb-2">2</div>
              <p className="font-medium mb-1">Fill in your data</p>
              <p className="text-sm text-zinc-500">Pass your data as JSON or key-value pairs. OpenWord replaces all placeholders with your content.</p>
            </div>
            <div className="p-5 bg-zinc-900 rounded-lg border border-zinc-800">
              <div className="text-green-500 font-bold text-2xl mb-2">3</div>
              <p className="font-medium mb-1">Get your document</p>
              <p className="text-sm text-zinc-500">Exports to Word (.docx) or PDF with proper formatting, headers, and page numbers.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-lg font-semibold mb-4">What you get</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              'Built-in contract and letter templates',
              'Mail merge for batch generation',
              'Export to Word and PDF',
              'Custom placeholder fields',
              'Professional formatting out of the box',
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
            <p><strong className="text-white">Freelancers</strong> who send the same types of contracts and invoices regularly. Create once, generate forever.</p>
            <p><strong className="text-white">Small businesses</strong> that need consistent document formatting without paying for enterprise document management.</p>
            <p><strong className="text-white">Developers</strong> who want to generate documents programmatically as part of a larger workflow.</p>
          </div>
        </section>

        <div className="flex flex-col sm:flex-row gap-3 mb-12">
          <a
            href="https://github.com/federicodeponte/openword"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-500 text-black font-medium rounded-lg hover:bg-green-400 transition-colors text-sm text-center"
          >
            Get started on GitHub
          </a>
        </div>

        <hr className="border-zinc-800 mb-8" />

        <div className="flex flex-col sm:flex-row gap-4 text-sm">
          <Link href="/projects/openslides" className="text-zinc-500 hover:text-green-500 transition-colors">
            &larr; OpenSlides
          </Link>
          <Link href="/projects/opendraft" className="text-zinc-500 hover:text-green-500 transition-colors">
            Back to OpenDraft
          </Link>
        </div>
      </div>
    </div>
  );
}
