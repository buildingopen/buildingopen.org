import Card from "../components/Card";

const posts = [
  { title: "Why we build open", description: "Our philosophy on open source and why we believe tools should be free...", meta: "Feb 20, 2026 · 5 min read" },
  { title: "OpenDraft v3 is here", description: "What's new in the latest version of our AI thesis writer...", meta: "Feb 15, 2026 · 3 min read" },
  { title: "Meet the community", description: "Stories from people building with our tools...", meta: "Feb 10, 2026 · 7 min read" },
  { title: "Roadmap 2026", description: "What we're planning to build this year...", meta: "Jan 5, 2026 · 4 min read" },
];

export default function BlogPage() {
  return (
    <>
      <div className="py-12 border-b border-dashed border-zinc-800">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="text-3xl font-bold mb-2 animate-fade-in-up">
            Blog <span className="ml-2 px-2 py-1 bg-zinc-800 text-zinc-500 rounded text-sm font-normal">Phase 2</span>
          </h1>
          <p className="text-zinc-500 animate-fade-in-up-delay-1">Updates, thoughts, and stories from the Building Open community.</p>
        </div>
      </div>

      <section className="py-12 opacity-40">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid md:grid-cols-2 gap-4">
            {posts.map((post) => (
              <Card key={post.title} icon="" title={post.title} description={post.description} meta={post.meta} disabled />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
