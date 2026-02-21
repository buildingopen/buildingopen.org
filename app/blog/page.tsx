export default function BlogPage() {
  return (
    <div className="py-24">
      <div className="mx-auto max-w-xl px-6 text-center">
        <h1 className="text-2xl font-bold mb-3">Blog</h1>
        <p className="text-zinc-500 mb-6">
          Coming soon. Follow on GitHub for updates.
        </p>
        <a
          href="https://github.com/buildingopen"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-zinc-400 hover:text-white transition-colors"
        >
          GitHub →
        </a>
      </div>
    </div>
  );
}
