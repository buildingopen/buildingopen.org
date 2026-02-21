import Link from "next/link";

export default function TutorialsPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-xl px-6 text-center">
        <h1 className="text-2xl font-bold mb-3">Tutorials</h1>
        <p className="text-zinc-500 mb-6">
          Coming soon. For now, check the README in each project repo.
        </p>
        <Link
          href="/projects"
          className="text-sm text-zinc-400 hover:text-white transition-colors"
        >
          View Projects →
        </Link>
      </div>
    </div>
  );
}
