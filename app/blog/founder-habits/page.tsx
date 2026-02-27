import type { Metadata } from "next";
import Link from "next/link";
import {
  Callout,
  PullQuote,
  SectionDivider,
  StatRow,
} from "../../components/blog";

export const metadata: Metadata = {
  title: "I treated my life like a product. Here's what I removed. - Building Open",
  description: "2 years into my 2nd startup. The habits that moved the needle most aren't what you'd expect.",
};

export default function FounderHabitsPost() {
  return (
    <article className="py-16">
      <div className="mx-auto max-w-2xl px-6">
        <Link href="/blog" className="text-sm text-zinc-500 hover:text-white transition-colors mb-8 block">
          &larr; Blog
        </Link>

        <header className="mb-12">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded">Founder Life</span>
            <span className="text-xs text-zinc-500">6 min read</span>
            <span className="text-xs text-zinc-500">February 26, 2026</span>
          </div>
          <h1 className="text-3xl font-bold mb-3">I treated my life like a product. Here&apos;s what I removed.</h1>
          <p className="text-zinc-500">2 years into my 2nd startup. The habits that moved the needle aren&apos;t what you&apos;d expect.</p>
        </header>

        <section className="mb-10 text-zinc-400 space-y-6">
          <p className="leading-relaxed">
            2 years on my 2nd startup. 250k ARR, led +20 people, worked across 4 continents in 2025.
          </p>

          <StatRow
            stats={[
              { value: "250k", label: "ARR" },
              { value: "20+", label: "people led" },
              { value: "4", label: "continents" },
            ]}
          />

          <p className="leading-relaxed">
            I lost my electric toothbrush charger in Seoul. Didn&apos;t order a new one for 6 months. Sounds ridiculous, but it made me realize something: I was optimizing everything in my startup and nothing in my actual life.
          </p>

          <p className="leading-relaxed">
            So I ran an experiment. I treated my personal defaults the same way I&apos;d treat a product: strip out everything that doesn&apos;t serve the user.
          </p>

          <SectionDivider />

          <h2 className="text-white font-semibold text-lg mt-8 mb-2">What I removed</h2>

          <Callout title="The removal list">
            <ul className="space-y-3">
              <li><span className="text-zinc-300 font-medium">Reels and TikTok</span> - Gone since January 2025</li>
              <li><span className="text-zinc-300 font-medium">Color on devices</span> - Black and white mode only</li>
              <li><span className="text-zinc-300 font-medium">All notifications</span> - If urgent, someone will call</li>
              <li><span className="text-zinc-300 font-medium">WhatsApp groups</span> - Every group archived</li>
              <li><span className="text-zinc-300 font-medium">Fast food</span> - Vegetarian since September</li>
              <li><span className="text-zinc-300 font-medium">Alcohol</span> - Maybe 6-7 times the entire year</li>
              <li><span className="text-zinc-300 font-medium">Founders associate</span> - AI handles 80% of it</li>
            </ul>
          </Callout>

          <p className="leading-relaxed">
            <span className="text-white font-medium">Reels and TikTok.</span> Gone since January 2025. Full year without short-form content. I didn&apos;t miss a single thing. What I got back was the ability to sit with boredom, which turns out is where most good ideas come from.
          </p>

          <p className="leading-relaxed">
            <span className="text-white font-medium">Color on my phone and laptop.</span> Black and white mode only. This one sounds weird but it&apos;s one of the highest-leverage changes I made. Every app is designed to grab your attention with color. Remove color and your phone becomes a tool instead of a slot machine. My screen time dropped without trying.
          </p>

          <p className="leading-relaxed">
            <span className="text-white font-medium">Notifications.</span> All of them. Not just social media. All. If something is actually urgent, someone will call. Everything else can wait until I choose to look at it.
          </p>

          <p className="leading-relaxed">
            <span className="text-white font-medium">WhatsApp groups.</span> Every group and every noisy person: archived. This was harder socially than any of the health changes. But the mental bandwidth it freed up was immediate and massive.
          </p>

          <p className="leading-relaxed">
            <span className="text-white font-medium">Fast food.</span> Maybe 2 burgers the entire year. No snacks. I went vegetarian in September. Not for ethical reasons. I just noticed that heavy meals made me slower in the afternoon. Eating light became a productivity decision.
          </p>

          <p className="leading-relaxed">
            <span className="text-white font-medium">Alcohol.</span> Maybe 6 or 7 times the entire year. Not zero, but close enough that the difference in sleep quality alone was worth it.
          </p>

          <p className="leading-relaxed">
            <span className="text-white font-medium">No founders associate.</span> Either I do it with AI or it has no priority. Most early-stage founders hire an FA to offload ops work. I decided against it. The coordination cost of managing another person, even a good one, is higher than people admit. AI handles 80% of what an FA would do, instantly, without onboarding or timezone gaps. The remaining 20% either wasn&apos;t important or forced me to build a better system.
          </p>

          <SectionDivider />

          <h2 className="text-white font-semibold text-lg mt-8 mb-2">What I added</h2>

          <p className="leading-relaxed">
            <span className="text-white font-medium">Running. 200+ days.</span> Not training for anything. Just running. It became the one thing in my day that was purely physical, no screens, no decisions. On days I skipped it, I could feel the difference in my ability to focus by 2pm.
          </p>

          <p className="leading-relaxed">
            <span className="text-white font-medium">Meeting blocks.</span> All meetings compressed into 3 days per week. The other 4 are for building. This was the single biggest unlock for deep work. Context switching between calls and code was destroying my afternoons.
          </p>

          <p className="leading-relaxed">
            <span className="text-white font-medium">Living from hand luggage.</span> Since August. One bag. I worked from Seoul, Bangalore, Hamburg, London, and Lisbon in 2025. Having fewer things means fewer decisions. It also means you can move fast when an opportunity shows up somewhere unexpected.
          </p>

          <p className="leading-relaxed">
            <span className="text-white font-medium">Founder mode spending.</span> Good sleep, good food, good internet, good AI tools. These pay for themselves faster than any other investment. I stopped saving on the wrong things. A bad night of sleep costs more than a nice hotel room.
          </p>

          <p className="leading-relaxed">
            <span className="text-white font-medium">Sunday nature.</span> One day a week, outside, no laptop. Not negotiable. This started as a break from burnout and turned into the day where I do my best strategic thinking, away from Slack and code editors.
          </p>

          <SectionDivider />

          <h2 className="text-white font-semibold text-lg mt-8 mb-2">Small tools that helped</h2>

          <p className="leading-relaxed">
            <span className="text-white font-medium">Maccy</span> (clipboard manager on Mac) for storing frequently used prompts. Sounds trivial, but when you&apos;re working with AI 8 hours a day, having your best prompts one shortcut away saves real time.
          </p>

          <p className="leading-relaxed">
            <span className="text-white font-medium">Email as task manager.</span> I send myself emails for everything. No Notion, no Todoist. If it&apos;s in my inbox, it gets done. If it&apos;s not, it wasn&apos;t important enough to email myself about. The simplicity is the point.
          </p>

          <p className="leading-relaxed">
            <span className="text-white font-medium">A virtual machine</span> for running code and AI, so my laptop being open and with me is never the bottleneck. I can work from a cafe on a light machine because the heavy compute happens elsewhere.
          </p>

          <SectionDivider />

          <h2 className="text-white font-semibold text-lg mt-8 mb-2">The compound effect</h2>

          <p className="leading-relaxed">
            Each of these changes felt small in isolation. None of them were hard to implement. The hard part was deciding that my personal defaults deserved the same attention as my product.
          </p>

          <p className="leading-relaxed">
            Together they rewired how I operate. Not through discipline or motivation, but by removing friction and noise until the right moves became obvious.
          </p>

          <PullQuote>
            It&apos;s not about adding systems. It&apos;s about having so little noise that the right moves become obvious.
          </PullQuote>

          <h2 className="text-white font-semibold text-lg mt-8 mb-2">What I want to change this year</h2>

          <p className="leading-relaxed">
            I&apos;m still figuring it out. Here&apos;s what I&apos;m thinking about for 2026:
          </p>

          <p className="leading-relaxed">
            <span className="text-white font-medium">Run a marathon.</span> 200 days of running and I&apos;ve never done one. Time to close that loop.
          </p>

          <p className="leading-relaxed">
            <span className="text-white font-medium">Reduce music consumption by 80%.</span> Same logic as Reels. I want to see what happens when my default state is silence instead of a playlist.
          </p>

          <p className="leading-relaxed">
            <span className="text-white font-medium">Move to SF.</span> Not for the tech scene. For reducing the number of people who ask &quot;but what if it doesn&apos;t work?&quot; When everyone around you is building, you waste less energy defending why you&apos;re building.
          </p>

          <p className="leading-relaxed">
            <span className="text-white font-medium">Finish Harvard CS50.</span> I&apos;ve been building products for 2 years without formal CS basics. AI fills the gaps, but I want the foundation.
          </p>

          <p className="leading-relaxed">
            <span className="text-white font-medium">Take better care of my health.</span> I lost my electric toothbrush charger in Seoul and didn&apos;t prioritize ordering a new one for 6 months. That level of self-neglect isn&apos;t founder mode. It&apos;s just dumb.
          </p>

          <p className="leading-relaxed">
            <span className="text-white font-medium">Be more transparent.</span> More ask-me-anythings, more writing about how I actually work. It makes me more accountable, and selfishly, explaining your process forces you to understand it.
          </p>

          <p className="leading-relaxed text-white font-medium mt-8">
            This is me starting.
          </p>
        </section>

        <hr className="border-zinc-800 my-10" />

        <div className="mb-10">
          <p className="text-xs uppercase tracking-wider text-zinc-500 mb-4">Related posts</p>
          <div className="space-y-3">
            <Link href="/blog/startup-learnings" className="block text-sm text-zinc-400 hover:text-white transition-colors">
              4 pivots in 1.5 years: what I&apos;d tell myself before starting &rarr;
            </Link>
            <Link href="/blog/claude-code-context" className="block text-sm text-zinc-400 hover:text-white transition-colors">
              Why Claude Code is my new best friend &rarr;
            </Link>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <Link
            href="/blog"
            className="px-5 py-2.5 border border-zinc-700 rounded-lg hover:border-white hover:text-white transition-colors text-sm"
          >
            All posts
          </Link>
        </div>
      </div>
    </article>
  );
}
