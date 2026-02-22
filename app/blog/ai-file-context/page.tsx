import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to give AI 10x better answers with file context - Building Open",
  description: "Stop asking generic questions. Give AI your files, preferences, and history. The answers change completely.",
};

export default function AiFileContextPost() {
  return (
    <article className="py-16">
      <div className="mx-auto max-w-2xl px-6">
        <Link href="/blog" className="text-sm text-zinc-600 hover:text-green-500 transition-colors mb-8 block">
          &larr; Blog
        </Link>

        <header className="mb-12">
          <p className="text-sm text-zinc-600 mb-2">February 6, 2026</p>
          <h1 className="text-3xl font-bold mb-3">How to give AI 10x better answers with file context</h1>
          <p className="text-zinc-500">Stop asking generic questions. Give AI your files, preferences, and history. The answers change completely.</p>
        </header>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">The problem</h2>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            Most people use AI like a search bar. &quot;Best hostels in Tokyo?&quot; You get a Top 10 list. Generic advice. You add more context in the chat: &quot;I like quiet places, good coffee nearby...&quot; Next conversation? Gone. Long conversation? The AI gets lost.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            There&apos;s a better way.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">The trick: file-based context</h2>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            Instead of repeating yourself every conversation, put your context in files. Then point your AI tool at those files.
          </p>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            Here&apos;s a real example. I was planning a trip to Japan. I created a folder:
          </p>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 font-mono text-sm text-zinc-300 space-y-1">
            <p className="text-zinc-500">/japan-trip</p>
            <p>&nbsp;&nbsp;preferences.md <span className="text-zinc-600"># quiet hostels, pescetarian, specialty coffee</span></p>
            <p>&nbsp;&nbsp;budget.md &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-zinc-600"># 15,000 yen/day</span></p>
            <p>&nbsp;&nbsp;bookings.md &nbsp;&nbsp;&nbsp;<span className="text-zinc-600"># JR Pass expires day 14</span></p>
          </div>
          <p className="text-zinc-400 mt-4 leading-relaxed">
            Same question: &quot;Best hostels in Tokyo?&quot;
          </p>
          <p className="text-zinc-400 mt-2 leading-relaxed">
            Completely different answer: Nui Hostel. Kuramae. Rooftop. 3,800 yen per night. Near Blue Bottle Coffee.
          </p>
          <p className="text-zinc-400 mt-4 leading-relaxed">
            The AI knew I like quiet places, specialty coffee, and rooftops because my preferences file told it. One command. No repetition.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">It works for everything</h2>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            The same pattern applies to any domain where you have accumulated context.
          </p>
          <div className="space-y-4">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
              <h3 className="font-medium mb-2">Startup decisions</h3>
              <p className="text-sm text-zinc-400 mb-2">&quot;Should we hire a designer now?&quot;</p>
              <p className="text-sm text-zinc-500">With a <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-xs">/company</code> folder containing runway, team gaps, and past decisions, the AI came back: &quot;Not yet. 8 months runway. Prioritize revenue. Hire at 600k.&quot; That&apos;s the answer I would&apos;ve given myself, but it took 3 seconds instead of 3 hours of overthinking.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
              <h3 className="font-medium mb-2">Code projects</h3>
              <p className="text-sm text-zinc-400 mb-2">&quot;What should I refactor first?&quot;</p>
              <p className="text-sm text-zinc-500">When AI can read your codebase, architecture docs, and previous decisions, it gives answers with full context instead of generic advice.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-5">
              <h3 className="font-medium mb-2">Writing and research</h3>
              <p className="text-sm text-zinc-400 mb-2">&quot;Write the introduction.&quot;</p>
              <p className="text-sm text-zinc-500">With your outline, source notes, and style preferences in files, the output matches your voice and cites your actual sources.</p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">How to set it up</h2>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            The setup is simple. You don&apos;t need special tools.
          </p>
          <ol className="space-y-4 text-zinc-400 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5 font-medium">1.</span>
              <div>
                <strong className="text-white">Create a folder for the topic.</strong>
                <p className="mt-1">One folder per project, trip, decision, or domain. Keep it in a place your AI tool can access (local filesystem, GitHub repo).</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5 font-medium">2.</span>
              <div>
                <strong className="text-white">Add context files.</strong>
                <p className="mt-1">Plain markdown files work best. Write down your preferences, constraints, history, and goals. Be specific. &quot;I prefer quiet hostels under 5,000 yen&quot; is better than &quot;I like budget travel.&quot;</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5 font-medium">3.</span>
              <div>
                <strong className="text-white">Point your AI at the folder.</strong>
                <p className="mt-1">Use any AI tool that can read local files. Claude Code, Cursor, Copilot, or even ChatGPT with file uploads. The key is that the AI reads your files before answering.</p>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-0.5 font-medium">4.</span>
              <div>
                <strong className="text-white">Keep it in version control.</strong>
                <p className="mt-1">Store your context folders in a Git repo. New laptop? Clone the repo. Full context restored. Your AI picks up right where you left off.</p>
              </div>
            </li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Why this works</h2>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            AI models are good at synthesis but bad at remembering. Every new conversation starts blank. File-based context solves this by externalizing your memory into something persistent and portable.
          </p>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            It&apos;s the difference between an assistant who meets you for the first time every morning and one who has your complete file on their desk.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            The best part: the learning happens as you go. Start with one folder. Add files when you notice the AI is missing context. Over time, you build a knowledge base that makes every AI interaction better.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Takeaway</h2>
          <p className="text-zinc-400 leading-relaxed">
            Don&apos;t ask AI better questions. Give it better context. A folder of markdown files changes AI from a search bar into a thinking partner that knows your world.
          </p>
        </section>

        <hr className="border-zinc-800 my-10" />

        <div className="flex gap-4 justify-center">
          <Link
            href="/blog"
            className="px-5 py-2.5 border border-zinc-700 rounded-lg hover:border-green-500 hover:text-green-500 transition-colors text-sm"
          >
            More posts
          </Link>
        </div>
      </div>
    </article>
  );
}
