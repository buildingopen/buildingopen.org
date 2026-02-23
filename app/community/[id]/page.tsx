import Link from 'next/link';

export default function DiscussionPage({ params }: { params: { id: string } }) {
  return (
    <div className="py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-8">
          <Link href="/community" className="text-sm text-zinc-500 hover:text-white transition-colors flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Back to Community
          </Link>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-8 text-center">
          <div className="w-16 h-16 bg-zinc-800 rounded-full flex items-center justify-center mx-auto mb-6 text-zinc-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
          <h1 className="text-2xl font-bold mb-4">Discussion Wireframe</h1>
          <p className="text-zinc-400 max-w-md mx-auto mb-8">
            You navigated to discussion thread #{params.id}. This is a static wireframe, so individual threads haven&apos;t been fully built out or connected to a database yet.
          </p>
          <Link 
            href="/community"
            className="px-6 py-2.5 bg-white text-black font-medium rounded-lg hover:bg-zinc-200 transition-colors inline-block"
          >
            Return to Community
          </Link>
        </div>
      </div>
    </div>
  );
}