export default function CommunityPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h1 className="text-3xl font-bold mb-4 animate-fade-in-up">
          Community <span className="ml-2 px-2 py-1 bg-zinc-800 text-zinc-500 rounded text-sm font-normal">Phase 3</span>
        </h1>
        <p className="text-zinc-500 mb-8 animate-fade-in-up-delay-1 max-w-md mx-auto">
          Forums and chat coming later.<br />
          For now, open issues on GitHub or start a discussion.
        </p>
        <a
          href="https://github.com/buildingopen"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 border border-dashed border-zinc-800 rounded-lg hover:border-green-500 hover:text-green-500 transition-colors animate-fade-in-up-delay-2"
        >
          GitHub →
        </a>
      </div>
    </div>
  );
}
