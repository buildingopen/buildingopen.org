import Card from "../components/Card";

const forums = [
  { icon: "💬", title: "General", description: "Introductions, announcements, and general chat", meta: "-- topics" },
  { icon: "❓", title: "Help & Support", description: "Get help with any of our tools", meta: "-- topics" },
  { icon: "🎨", title: "Showcase", description: "Share what you've built", meta: "-- topics" },
  { icon: "💡", title: "Ideas & Feedback", description: "Suggest features and improvements", meta: "-- topics" },
];

const connect = [
  { icon: "🐙", title: "GitHub Discussions", description: "Technical discussions and contributions" },
  { icon: "💬", title: "Discord", description: "Real-time chat with the community" },
];

export default function CommunityPage() {
  return (
    <>
      <div className="py-12 border-b border-dashed border-zinc-800">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="text-3xl font-bold mb-2 animate-fade-in-up">
            Community <span className="ml-2 px-2 py-1 bg-zinc-800 text-zinc-500 rounded text-sm font-normal">Phase 3</span>
          </h1>
          <p className="text-zinc-500 animate-fade-in-up-delay-1">Connect with others building open. Ask questions, share projects, get help.</p>
        </div>
      </div>

      <section className="py-12 border-b border-dashed border-zinc-800 opacity-40">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xs uppercase tracking-wider text-green-500 mb-6">Discussion Forums</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {forums.map((item) => (
              <Card key={item.title} icon={item.icon} title={item.title} description={item.description} meta={item.meta} disabled />
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 opacity-40">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-xs uppercase tracking-wider text-green-500 mb-6">Connect</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {connect.map((item) => (
              <Card key={item.title} icon={item.icon} title={item.title} description={item.description} disabled />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
