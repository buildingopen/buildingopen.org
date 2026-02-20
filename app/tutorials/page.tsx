import Link from "next/link";

export default function TutorialsPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h1 className="text-3xl font-bold mb-4 animate-fade-in-up">
          Tutorials <span className="ml-2 px-2 py-1 bg-zinc-800 text-zinc-500 rounded text-sm font-normal">Phase 2</span>
        </h1>
        <p className="text-zinc-500 mb-8 animate-fade-in-up-delay-1 max-w-md mx-auto">
          We're building step-by-step guides for each tool.<br />
          For now, check the README in each project repo.
        </p>
        <Link
          href="/projects"
          className="inline-block px-6 py-3 border border-dashed border-zinc-800 rounded-lg hover:border-green-500 hover:text-green-500 transition-colors animate-fade-in-up-delay-2"
        >
          View Projects →
        </Link>
      </div>
    </div>
  );
}
