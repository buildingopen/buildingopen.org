import Link from "next/link";

export default function ManifestoPage() {
  return (
    <article className="mx-auto max-w-2xl px-6 py-12">
      <h1 className="text-3xl font-bold mb-2 animate-fade-in-up">Building Open</h1>
      <p className="text-xl text-zinc-500 mb-12 animate-fade-in-up-delay-1">Why we exist and what we believe.</p>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-green-500 mb-4">Why We Exist</h2>
        <p className="text-zinc-400 mb-4 leading-relaxed">The best tools cost money. The best education costs more. The people who need them most can afford them least.</p>
        <p className="text-zinc-400 mb-4 leading-relaxed">This isn't a technology problem. It's a choice. Someone decided that access should depend on ability to pay.</p>
        <p className="text-zinc-400 mb-4 leading-relaxed">We made a different choice.</p>
        <p className="text-zinc-400 leading-relaxed">Building Open exists to level the playing field. We build tools, create educational content, and foster a community where anyone can learn to create, regardless of where they started.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-green-500 mb-4">What We Believe</h2>
        <p className="text-zinc-400 mb-4 leading-relaxed"><strong className="text-white">Opportunity should not be gated.</strong> The student in Lagos deserves the same tools as the one in London. The self-taught developer deserves the same resources as the CS graduate. Your circumstances shouldn't determine your ceiling.</p>
        <p className="text-zinc-400 mb-4 leading-relaxed"><strong className="text-white">Transparency builds trust.</strong> We work in public. Our code is open. Our decisions are visible. Our roadmap is shared. When you can see how something works, you can learn from it, improve it, make it yours.</p>
        <p className="text-zinc-400 leading-relaxed"><strong className="text-white">Together is faster.</strong> Open source isn't charity. It's how good software gets built. When hundreds of people contribute their perspective, the result is better than anything one team could build alone.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-green-500 mb-4">What We Do</h2>
        <p className="text-zinc-400 mb-6 leading-relaxed">Building Open is an organization that runs a platform with three parts:</p>

        <h3 className="text-lg font-medium text-white mb-2">Tools</h3>
        <p className="text-zinc-400 mb-4 leading-relaxed">Free, open source software that creates real value. AI writing assistants. Document generators. Presentation tools. Not demos or toys, but software you can actually use to get things done.</p>
        <ul className="text-zinc-400 mb-6 ml-4 list-disc list-inside space-y-1">
          <li>Free to use, forever</li>
          <li>Open source (MIT licensed)</li>
          <li>Documented and maintained</li>
          <li>Built to be learned from</li>
        </ul>

        <h3 className="text-lg font-medium text-white mb-2">Education</h3>
        <p className="text-zinc-400 mb-4 leading-relaxed">Tutorials, guides, and learning paths that teach you how things work. Not just how to use our tools, but how to build your own.</p>
        <p className="text-zinc-400 mb-6 leading-relaxed">We believe in learning by doing. Use a tool. Understand how it works. Modify it. Build something new. That's the path from user to creator.</p>

        <h3 className="text-lg font-medium text-white mb-2">Community</h3>
        <p className="text-zinc-400 mb-4 leading-relaxed">A space to ask questions, share what you've built, and learn from others on the same journey.</p>
        <p className="text-zinc-400 leading-relaxed">No gatekeeping. No "read the docs" dismissals. Everyone starts somewhere. The community exists to help you get to the next level, whatever that means for you.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-green-500 mb-4">How We Work</h2>
        <p className="text-zinc-400 mb-4 leading-relaxed"><strong className="text-white">In public.</strong> Our code is on GitHub. Our roadmap is visible. When we make decisions, you can see why. This isn't performative transparency, it's how we stay accountable.</p>
        <p className="text-zinc-400 mb-4 leading-relaxed"><strong className="text-white">Together.</strong> Contributors aren't free labor, they're partners. Every contribution, from fixing a typo to building a feature, makes the platform better for everyone.</p>
        <p className="text-zinc-400 leading-relaxed"><strong className="text-white">For the long term.</strong> We're not building to flip. We're not chasing growth metrics. We're building something that lasts, that keeps working even when it's not trendy.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-green-500 mb-4">The Invitation</h2>
        <p className="text-zinc-400 mb-4 leading-relaxed">This is an open invitation.</p>
        <p className="text-zinc-400 mb-4 leading-relaxed"><strong className="text-white">If you need tools:</strong> Use them. They're free. No trials, no paywalls, no "contact sales."</p>
        <p className="text-zinc-400 mb-4 leading-relaxed"><strong className="text-white">If you want to learn:</strong> Dive in. Read the code. Follow the tutorials. Ask questions in the community. The whole point is for you to understand how things work.</p>
        <p className="text-zinc-400 mb-4 leading-relaxed"><strong className="text-white">If you want to contribute:</strong> Start anywhere. Fix a bug. Improve documentation. Answer someone's question. Every contribution matters.</p>
        <p className="text-zinc-400 leading-relaxed"><strong className="text-white">If you want to build something bigger:</strong> Do it. Fork our code. Start your own project. Build something we never imagined. That's not competition, that's the goal.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-green-500 mb-4">What Success Looks Like</h2>
        <p className="text-zinc-400 mb-4 leading-relaxed">We'll know we've succeeded when:</p>
        <ul className="text-zinc-400 mb-6 ml-4 list-disc list-inside space-y-1">
          <li>Someone builds their first project using our tools</li>
          <li>A student in a place we've never heard of learns to code from our tutorials</li>
          <li>A contributor lands a job because of skills they developed here</li>
          <li>Projects we've never seen cite our code as inspiration</li>
        </ul>
        <p className="text-zinc-400 leading-relaxed">Success isn't downloads or stars or revenue. Success is people creating things they couldn't create before.</p>
      </section>

      <section className="mb-12">
        <h2 className="text-xl font-semibold text-green-500 mb-4">Join Us</h2>
        <p className="text-zinc-400 mb-4 leading-relaxed">Building Open is exactly what it sounds like: we're building, and it's open.</p>
        <p className="text-zinc-400 mb-4 leading-relaxed">The code is on GitHub. The community is forming. The tutorials are being written. The tools are getting better every day.</p>
        <p className="text-zinc-400 mb-4 leading-relaxed">You don't need permission to join. You don't need credentials. You just need to start.</p>
        <p className="text-zinc-400 leading-relaxed">Use something. Learn something. Build something. Share it.</p>
        <p className="text-zinc-400 mt-4 leading-relaxed">That's how we level the playing field. One project at a time, together, in public.</p>
      </section>

      <hr className="border-dashed border-zinc-800 my-12" />

      <div className="text-center">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/projects"
            className="px-6 py-3 bg-green-500 text-black font-medium rounded-lg hover:bg-green-600 transition-colors"
          >
            View Projects
          </Link>
          <a
            href="https://github.com/buildingopen"
            className="px-6 py-3 border border-dashed border-zinc-800 rounded-lg hover:border-green-500 hover:text-green-500 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
