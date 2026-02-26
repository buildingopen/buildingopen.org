import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Build your own AI WhatsApp assistant for ~5/month - Building Open",
  description: "Set up a personal AI agent on a cheap cloud server, accessible via WhatsApp. Uses Gemini, runs 24/7.",
};

export default function OpenClawTutorial() {
  return (
    <article className="py-16">
      <div className="mx-auto max-w-2xl px-6">
        <Link href="/tutorials" className="text-sm text-zinc-600 hover:text-white transition-colors mb-8 block">
          &larr; Tutorials
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded">Intermediate</span>
            <span className="text-xs text-zinc-600">~30 min</span>
          </div>
          <h1 className="text-3xl font-bold mb-3">Build your own AI WhatsApp assistant for ~5/month</h1>
          <p className="text-zinc-500">A personal AI agent that lives in the cloud, runs 24/7, and is accessible via WhatsApp.</p>
        </header>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">The concept</h2>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            Most people think running a powerful AI assistant requires expensive subscriptions or complex infrastructure. I&apos;ve been running mine for weeks, and it costs roughly 5 euros per month.
          </p>
          <p className="text-zinc-400 leading-relaxed">
            The goal: an AI that lives in the cloud (not just your laptop), runs 24/7, has access to your data, and is accessible via WhatsApp. Cheap, fast, and customizable.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">The stack</h2>
          <div className="space-y-3">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <p className="text-sm"><strong className="text-white">Compute:</strong> <span className="text-zinc-400">Hetzner Cloud Server (~5/month). This is where the agent lives. Always on.</span></p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <p className="text-sm"><strong className="text-white">Brain:</strong> <span className="text-zinc-400">Google Gemini Flash (free tier via API). Fast, smart enough for most tasks.</span></p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <p className="text-sm"><strong className="text-white">Interface:</strong> <span className="text-zinc-400">WhatsApp. Chat with it like you would a colleague.</span></p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <p className="text-sm"><strong className="text-white">Memory:</strong> <span className="text-zinc-400">GitHub. Connect repositories for full project context.</span></p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <p className="text-sm"><strong className="text-white">Communication:</strong> <span className="text-zinc-400">Gmail integration for reading and drafting emails.</span></p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Prerequisites</h2>
          <ul className="space-y-2 text-zinc-400 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-zinc-500 mt-0.5">1.</span>
              <span>A Hetzner Cloud account (or any VPS provider). A CX22 server (~5/month) is enough.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zinc-500 mt-0.5">2.</span>
              <span>A Google AI Studio API key for Gemini (free tier works).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zinc-500 mt-0.5">3.</span>
              <span>A phone with WhatsApp (you&apos;ll link it to the agent).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zinc-500 mt-0.5">4.</span>
              <span>Basic comfort with a terminal. You don&apos;t need to be a developer.</span>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Setup</h2>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            I used an AI coding agent (Claude Code) to handle the actual server setup. You can use any AI tool that can run terminal commands. The process:
          </p>
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium mb-2">Step 1: Spin up a server</h3>
              <p className="text-zinc-400 text-sm mb-2">Create a standard Linux server (Ubuntu) on Hetzner Cloud. SSH in to verify it works.</p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">Step 2: Clone the setup repo</h3>
              <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 font-mono text-sm text-zinc-300">
                <p>git clone https://github.com/buildingopen/openclaw-setup</p>
                <p>cd openclaw-setup</p>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">Step 3: Let the AI agent do the rest</h3>
              <p className="text-zinc-400 text-sm mb-2">
                Open the folder with Claude Code (or your preferred AI coding tool) and say: &quot;Set this up.&quot; It reads the config, installs Docker, builds the container, and gets everything running.
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium mb-2">Step 4: Link WhatsApp</h3>
              <p className="text-zinc-400 text-sm">
                The setup generates a QR code. Scan it with WhatsApp to link your account. Done.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">What you get</h2>
          <ul className="space-y-2 text-zinc-400 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-zinc-500 mt-0.5">&#x2022;</span>
              <span><strong className="text-white">Email triage:</strong> Reads incoming emails and drafts replies.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zinc-500 mt-0.5">&#x2022;</span>
              <span><strong className="text-white">Code context:</strong> Reads your repos and suggests changes with full project context.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zinc-500 mt-0.5">&#x2022;</span>
              <span><strong className="text-white">Task management:</strong> Tracks your to-dos and projects.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zinc-500 mt-0.5">&#x2022;</span>
              <span><strong className="text-white">Always on:</strong> Responds instantly via WhatsApp, even when your laptop is closed.</span>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">What&apos;s next</h2>
          <p className="text-zinc-400 mb-4 leading-relaxed">
            This is a starting point. From here you can extend it with:
          </p>
          <ul className="space-y-2 text-zinc-400 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-zinc-500 mt-0.5">&#x2022;</span>
              <span><strong className="text-white">Voice:</strong> Integrate ElevenLabs for voice conversations via WhatsApp calls.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zinc-500 mt-0.5">&#x2022;</span>
              <span><strong className="text-white">Browser automation:</strong> Give it a browser window with logged-in sessions.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-zinc-500 mt-0.5">&#x2022;</span>
              <span><strong className="text-white">Social integrations:</strong> Connect Instagram or other platforms for monitoring and posting.</span>
            </li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-lg font-semibold mb-3">Resources</h2>
          <div className="space-y-2">
            <a
              href="https://github.com/buildingopen/openclaw-setup"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-zinc-400 hover:text-white transition-colors"
            >
              Setup repo on GitHub &rarr;
            </a>
          </div>
        </section>

        <hr className="border-zinc-800 my-10" />

        <div className="flex gap-4 justify-center">
          <Link
            href="/tutorials"
            className="px-5 py-2.5 border border-zinc-700 rounded-lg hover:border-white hover:text-white transition-colors text-sm"
          >
            More tutorials
          </Link>
        </div>
      </div>
    </article>
  );
}
