import type { Metadata } from "next";
import Link from "next/link";
import CodeBlock from "@/app/components/CodeBlock";

export const metadata: Metadata = {
  title: "The Complete Vibecoding Setup - Building Open",
  description: "A systematic 6-step workflow for production-grade AI-assisted development. System prompts, Claude.md templates, best practices, and tooling.",
};

export default function VibeCodingSetup() {
  return (
    <article className="py-16">
      <div className="mx-auto max-w-2xl px-6">
        <Link href="/tutorials" className="text-sm text-zinc-600 hover:text-green-500 transition-colors mb-8 block">
          &larr; Tutorials
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs px-2 py-0.5 bg-yellow-500/10 text-yellow-500 rounded font-medium">Intermediate</span>
            <span className="text-xs text-zinc-600">~15 min</span>
          </div>
          <h1 className="text-3xl font-bold mb-3">The complete vibecoding setup</h1>
          <p className="text-zinc-500 text-lg">A systematic approach to AI-assisted development that produces production-grade code. The 6-step workflow, prompts, and tools.</p>
        </header>

        {/* Overview */}
        <section className="mb-10">
          <p className="text-zinc-400 mb-4 leading-relaxed">
            This is the workflow I used to build every tool on Building Open. It&apos;s not &quot;vibe coding&quot; in the sense of winging it. It&apos;s a systematic process that uses AI as a force multiplier while maintaining the code quality you&apos;d expect from a senior engineer.
          </p>
          <div className="bg-green-500/5 border-l-2 border-green-500 pl-4 py-3">
            <p className="text-zinc-300 text-sm leading-relaxed">
              <strong>Core idea:</strong> Plan thoroughly, execute with guardrails, verify obsessively. The AI writes code; you architect, review, and decide.
            </p>
          </div>
        </section>

        {/* The 6-Step Workflow */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-6">The 6-step workflow</h2>

          {/* Step 0 */}
          <div className="mb-8 relative border-l-2 border-zinc-800 pl-6 ml-1">
            <div className="absolute -left-[7px] w-3 h-3 rounded-full bg-zinc-700 top-1"></div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded">Ask mode</span>
              <h3 className="font-semibold">Step 0: Familiarize</h3>
            </div>
            <p className="text-zinc-400 text-sm mb-3 leading-relaxed">
              Before making any changes, the AI needs to understand the entire codebase. Don&apos;t skip this. The quality of everything downstream depends on it.
            </p>
            <CodeBlock language="prompt">
              Please familiarize yourself with the repository.{"\n"}
              <span className="syn-cmt">Continue your research. Fully done? Sure?</span>
            </CodeBlock>
          </div>

          {/* Step 1 */}
          <div className="mb-8 relative border-l-2 border-zinc-800 pl-6 ml-1">
            <div className="absolute -left-[7px] w-3 h-3 rounded-full bg-zinc-700 top-1"></div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded">Ask mode</span>
              <h3 className="font-semibold">Step 1: Describe</h3>
            </div>
            <p className="text-zinc-400 text-sm mb-3 leading-relaxed">
              Describe the bug or feature clearly. Include expected vs actual behavior, acceptance criteria, and relevant context. The better your description, the better the plan.
            </p>
            <CodeBlock language="example">
              <span className="syn-kw"># Example:</span>{"\n"}
              Bug: User auth fails when email contains + character{"\n"}
              Expected: Any valid RFC 5322 email should work{"\n"}
              Actual: 500 error on emails like user+tag@gmail.com
            </CodeBlock>
          </div>

          {/* Step 2 */}
          <div className="mb-8 relative border-l-2 border-zinc-800 pl-6 ml-1">
            <div className="absolute -left-[7px] w-3 h-3 rounded-full bg-zinc-700 top-1"></div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded">Ask mode</span>
              <h3 className="font-semibold">Step 2: Plan</h3>
            </div>
            <p className="text-zinc-400 text-sm mb-3 leading-relaxed">
              Ask the AI to produce a step-by-step plan with files to modify, tests to write, and risks identified. Constrain the plan with quality standards:
            </p>
            <CodeBlock language="prompt">
              Make a plan. Ensure it is:{"\n"}
              - Iterative (small, incremental changes){"\n"}
              - Test-driven{"\n"}
              - DRY, SOLID, KISS{"\n"}
              - Modular{"\n"}
              - Minimal lines of code changed{"\n"}
              <span className="syn-cmt">Continue planning. Fully done? Sure?</span>
            </CodeBlock>
          </div>

          {/* Step 3 */}
          <div className="mb-8 relative border-l-2 border-zinc-800 pl-6 ml-1">
            <div className="absolute -left-[7px] w-3 h-3 rounded-full bg-yellow-500 top-1"></div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded">Ask mode</span>
              <h3 className="font-semibold">Step 3: Verify 5x</h3>
            </div>
            <p className="text-zinc-400 text-sm mb-3 leading-relaxed">
              This is the step most people skip, and it&apos;s the most important. Ask the AI to verify its own plan <strong className="text-zinc-300">five times</strong>. Each round of self-review catches edge cases, over-engineering, and incorrect assumptions.
            </p>
            <CodeBlock language="prompt">
              Are you 100% confident with this plan?{"\n"}
              Verify it follows: iterative, test-driven,{"\n"}
              DRY, SOLID, KISS, modular, minimal changes.{"\n"}
              <span className="syn-cmt">Repeat 5 times.</span>
            </CodeBlock>
            <div className="bg-zinc-800/30 border-l-2 border-yellow-500/50 pl-4 py-3 mt-4">
              <p className="text-zinc-400 text-xs"><strong className="text-zinc-300">Red flags:</strong> &quot;I think this should work&quot; (not confident enough), large file rewrites (should be targeted), skipping tests, complex solutions where simple ones exist.</p>
            </div>
          </div>

          {/* Step 4 */}
          <div className="mb-8 relative border-l-2 border-zinc-800 pl-6 ml-1">
            <div className="absolute -left-[7px] w-3 h-3 rounded-full bg-green-500 top-1"></div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs px-2 py-0.5 bg-green-900 text-green-400 rounded">Agent mode</span>
              <h3 className="font-semibold">Step 4: Execute</h3>
            </div>
            <p className="text-zinc-400 text-sm mb-3 leading-relaxed">
              Now switch to agent mode. Let the AI implement the verified plan with full access to your codebase:
            </p>
            <CodeBlock language="prompt">
              Execute the plan. Never deviate from track.{"\n"}
              If something changes, stop and escalate.{"\n"}
              {"\n"}
              <span className="syn-kw">REQUIREMENTS:</span>{"\n"}
              - SOLID, DRY, modular, production-grade{"\n"}
              - Long-term solutions, not bandaid fixes{"\n"}
              - Find and fix ROOT CAUSES{"\n"}
              - Safe types (no &apos;any&apos; in TypeScript){"\n"}
              {"\n"}
              <span className="syn-kw">PROCESS:</span>{"\n"}
              1. Analyze &rarr; 2. Plan &rarr; 3. Self-debate{"\n"}
              4. Verify files &rarr; 5. Iterate until optimal{"\n"}
              6. Apply fix &rarr; 7. Verify correctness{"\n"}
              8. npm run type-check{"\n"}
              9. npm run lint{"\n"}
              10. npm run build{"\n"}
              11. Fix all errors iteratively
            </CodeBlock>
          </div>

          {/* Step 5 */}
          <div className="mb-8 relative border-l-2 border-zinc-800 pl-6 ml-1">
            <div className="absolute -left-[7px] w-3 h-3 rounded-full bg-yellow-500 top-1"></div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded">Ask mode</span>
              <h3 className="font-semibold">Step 5: Review 5x</h3>
            </div>
            <p className="text-zinc-400 text-sm mb-3 leading-relaxed">
              After execution, switch back to ask mode and have the AI review its own work five times:
            </p>
            <CodeBlock language="prompt">
              Are you 100% happy with your work?{"\n"}
              Verify: Done, Ready, Clean,{"\n"}
              SOLID/DRY/Modular, Tested,{"\n"}
              Minimal LOC, Safe (no deleted work).{"\n"}
              <span className="syn-cmt">Repeat 5 times.</span>
            </CodeBlock>
          </div>

          {/* Step 6 */}
          <div className="relative border-l-2 border-zinc-800 pl-6 ml-1">
            <div className="absolute -left-[7px] w-3 h-3 rounded-full bg-green-500 top-1"></div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded">Ask mode</span>
              <h3 className="font-semibold">Step 6: Close</h3>
            </div>
            <p className="text-zinc-400 text-sm mb-3 leading-relaxed">
              Final gate. Nothing pending, everything cleaned up, production-ready.
            </p>
            <CodeBlock language="prompt">
              All done? Can we close this session?{"\n"}
              Nothing pending. All cleaned up.{"\n"}
              100% confident. Production-ready.
            </CodeBlock>
          </div>
        </section>

        {/* System Prompt */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">System prompt</h2>
          <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
            Use this as your AI assistant&apos;s system prompt. It sets the quality floor for every session:
          </p>
          <CodeBlock language="system prompt">
            <span className="text-green-500"># CORE PRINCIPLES</span>{"\n"}
            We STRONGLY prefer simple, clean, maintainable{"\n"}
            solutions over clever or complex ones.{"\n"}
            {"\n"}
            <span className="text-green-500"># STRICT RULES</span>{"\n"}
            MUST match style and formatting of surrounding code{"\n"}
            MUST NEVER make changes unrelated to current task{"\n"}
            MUST NEVER remove comments unless provably false{"\n"}
            MUST NEVER rewrite without EXPLICIT permission{"\n"}
            MUST NEVER use temporal naming (&apos;improved&apos;, &apos;v2&apos;){"\n"}
            {"\n"}
            <span className="text-green-500"># CONVENTIONS</span>{"\n"}
            Core files start with 2-line ABOUTME comment:{"\n"}
            <span className="syn-kw">// ABOUTME: This file handles user authentication</span>{"\n"}
            <span className="syn-kw">// ABOUTME: Includes login, logout, session mgmt</span>{"\n"}
            {"\n"}
            NEVER refer to temporal context in comments{"\n"}
            DO NOT generate documentation unless asked
          </CodeBlock>
        </section>

        {/* Claude.md Template */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Claude.md template</h2>
          <p className="text-zinc-400 text-sm mb-4 leading-relaxed">
            Save as <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-xs text-zinc-300">CLAUDE.md</code> in your project root. It configures the AI as an intelligent agent dispatcher that uses the right tools for each task:
          </p>
          <div className="space-y-3">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 flex items-start gap-3">
              <span className="text-green-500 font-mono text-xs mt-0.5 shrink-0">UX</span>
              <div>
                <p className="text-zinc-300 text-sm font-medium">UX/UI Review</p>
                <p className="text-zinc-500 text-xs">Playwright MCP for navigation, screenshots, accessibility, responsive checks</p>
              </div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 flex items-start gap-3">
              <span className="text-green-500 font-mono text-xs mt-0.5 shrink-0">SEC</span>
              <div>
                <p className="text-zinc-300 text-sm font-medium">Security Audit</p>
                <p className="text-zinc-500 text-xs">Semgrep for static analysis, manual review for business logic and auth patterns</p>
              </div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 flex items-start gap-3">
              <span className="text-green-500 font-mono text-xs mt-0.5 shrink-0">API</span>
              <div>
                <p className="text-zinc-300 text-sm font-medium">API Design Review</p>
                <p className="text-zinc-500 text-xs">Endpoint analysis, REST compliance, error handling, CORS</p>
              </div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 flex items-start gap-3">
              <span className="text-green-500 font-mono text-xs mt-0.5 shrink-0">TEST</span>
              <div>
                <p className="text-zinc-300 text-sm font-medium">Testing Strategy</p>
                <p className="text-zinc-500 text-xs">Test suites, coverage review, untested paths, improvement suggestions</p>
              </div>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 flex items-start gap-3">
              <span className="text-green-500 font-mono text-xs mt-0.5 shrink-0">DB</span>
              <div>
                <p className="text-zinc-300 text-sm font-medium">Database Optimization</p>
                <p className="text-zinc-500 text-xs">Schema review, query patterns, indexing, RLS policies</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tools */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Supporting tools</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <p className="text-green-500 font-mono text-xs mb-2">MCP Servers</p>
              <ul className="space-y-1 text-sm text-zinc-400">
                <li><strong className="text-zinc-300">Playwright</strong> — browser testing</li>
                <li><strong className="text-zinc-300">Semgrep</strong> — security scanning</li>
                <li><strong className="text-zinc-300">Snyk</strong> — dependency vulns</li>
              </ul>
              <p className="text-xs text-zinc-600 mt-2">Tip: use <code className="bg-zinc-800 px-1 rounded">--scope user</code> to make MCP global.</p>
            </div>
            <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
              <p className="text-green-500 font-mono text-xs mb-2">Verification</p>
              <div className="font-mono text-xs text-zinc-400 space-y-1">
                <p>npm run type-check</p>
                <p>npm run lint</p>
                <p>npm run build</p>
                <p>npm test</p>
                <p>npm run test:coverage</p>
                <p>semgrep --config=auto</p>
              </div>
            </div>
          </div>
        </section>

        {/* Claude Code Tips */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Claude Code tips</h2>
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-xs text-green-400 shrink-0 mt-0.5">/init</code>
              <span className="text-zinc-400">Auto-create a CLAUDE.md from your codebase</span>
            </div>
            <div className="flex items-start gap-3">
              <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-xs text-green-400 shrink-0 mt-0.5">/rewind</code>
              <span className="text-zinc-400">Undo changes when something goes wrong</span>
            </div>
            <div className="flex items-start gap-3">
              <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-xs text-green-400 shrink-0 mt-0.5">think</code>
              <span className="text-zinc-400">3 levels: <code className="bg-zinc-800 px-1 rounded text-xs">think</code>, <code className="bg-zinc-800 px-1 rounded text-xs">think hard</code>, <code className="bg-zinc-800 px-1 rounded text-xs">ultrathink</code> — use for complex decisions</span>
            </div>
            <div className="flex items-start gap-3">
              <code className="bg-zinc-800 px-1.5 py-0.5 rounded text-xs text-green-400 shrink-0 mt-0.5">styleguide.md</code>
              <span className="text-zinc-400">Add a styleguide file for consistent UI across AI sessions</span>
            </div>
          </div>
        </section>

        <hr className="border-zinc-800 my-10" />

        <div className="mb-10">
          <p className="text-xs text-zinc-600 uppercase tracking-wide mb-4">Related</p>
          <div className="space-y-3">
            <Link href="/blog/ai-file-context" className="group block">
              <p className="text-sm font-medium group-hover:text-green-500 transition-colors">How to give AI 10x better answers with file context</p>
              <p className="text-xs text-zinc-600">Blog — The context pattern behind this workflow</p>
            </Link>
            <Link href="/tutorials/openclaw-whatsapp-assistant" className="group block">
              <p className="text-sm font-medium group-hover:text-green-500 transition-colors">Build your own AI WhatsApp assistant for ~5/month</p>
              <p className="text-xs text-zinc-600">Tutorial — 20 min</p>
            </Link>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <Link href="/tutorials" className="px-5 py-2.5 border border-zinc-700 rounded-lg hover:border-green-500 hover:text-green-500 transition-colors text-sm">
            All tutorials
          </Link>
        </div>
      </div>
    </article>
  );
}
