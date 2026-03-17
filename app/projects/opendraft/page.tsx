import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'OpenDraft - AI Research Paper Generator - Building Open',
  description: 'Generate a 40-page academic paper with proper citations in 12 minutes. Real sources, APA/MLA/Chicago, exports to Word.',
};

export default function OpenDraftPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-3xl px-6">
        {/* Breadcrumb */}
        <Link href="/projects" className="text-sm text-green-500 hover:text-green-400 transition-colors">
          &larr; Projects
        </Link>

        {/* Hero */}
        <div className="mt-6 mb-12">
          <h1 className="text-4xl font-bold mb-3">OpenDraft</h1>
          <p className="text-xl text-zinc-400">Generate a 40-page academic paper with proper citations in 12 minutes.</p>
        </div>

        {/* Preview */}
        <div className="bg-zinc-900 rounded-lg border border-zinc-800 overflow-hidden mb-12">
          <img src="/thesis-page-01.png" alt="OpenDraft generates a full research paper" className="w-full" />
        </div>

        {/* How it works */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold mb-6">How it works</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-5 bg-zinc-900 rounded-lg border border-zinc-800">
              <div className="text-green-500 font-bold text-2xl mb-2">1</div>
              <p className="font-medium mb-1">Pick a topic</p>
              <p className="text-sm text-zinc-500">Enter a research question or subject. OpenDraft structures the paper for you.</p>
            </div>
            <div className="p-5 bg-zinc-900 rounded-lg border border-zinc-800">
              <div className="text-green-500 font-bold text-2xl mb-2">2</div>
              <p className="font-medium mb-1">Real sources, real citations</p>
              <p className="text-sm text-zinc-500">Pulls from OpenAlex&apos;s 250M+ academic works. Every citation is real and verifiable.</p>
            </div>
            <div className="p-5 bg-zinc-900 rounded-lg border border-zinc-800">
              <div className="text-green-500 font-bold text-2xl mb-2">3</div>
              <p className="font-medium mb-1">Download your paper</p>
              <p className="text-sm text-zinc-500">Exports to .docx with proper formatting. APA, MLA, or Chicago citation style.</p>
            </div>
          </div>
        </section>

        {/* What you get */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold mb-4">What you get</h2>
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              '20,000+ word research papers',
              'Real academic sources (not hallucinated)',
              'APA, MLA, and Chicago citation styles',
              'Table of contents and section structure',
              'Export to Word (.docx)',
              'Abstract, introduction, conclusion',
              'Literature review section',
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

        {/* Who it's for */}
        <section className="mb-12">
          <h2 className="text-lg font-semibold mb-4">Who it&apos;s for</h2>
          <div className="space-y-3 text-sm text-zinc-400">
            <p><strong className="text-white">Students</strong> who need a starting point for their thesis or research paper. OpenDraft generates a full draft that you can refine and build on.</p>
            <p><strong className="text-white">Researchers</strong> who want to quickly survey a topic and identify relevant literature without spending days on manual searches.</p>
            <p><strong className="text-white">Anyone</strong> who needs a well-structured long-form document on any academic subject.</p>
          </div>
        </section>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 mb-12">
          <a
            href="https://github.com/federicodeponte/opendraft"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-500 text-black font-medium rounded-lg hover:bg-green-400 transition-colors text-sm text-center"
          >
            Get started on GitHub
          </a>
          <Link
            href="/tutorials/opendraft-quickstart"
            className="px-6 py-3 border border-zinc-700 rounded-lg hover:border-green-500 hover:text-green-500 transition-colors text-sm text-center"
          >
            Read the quickstart guide
          </Link>
        </div>

        <hr className="border-zinc-800 mb-8" />

        {/* Related */}
        <div className="flex flex-col sm:flex-row gap-4 text-sm">
          <Link href="/projects/openslides" className="text-zinc-500 hover:text-green-500 transition-colors">
            Next: OpenSlides &rarr;
          </Link>
          <Link href="/blog/opendraft-seo" className="text-zinc-500 hover:text-green-500 transition-colors">
            How OpenDraft hit #1 on Google
          </Link>
        </div>
      </div>
    </div>
  );
}
