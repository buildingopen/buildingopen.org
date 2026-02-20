import Card from "../components/Card";

const tutorials = [
  { icon: "🚀", title: "Getting Started", description: "Your first project in 20 min" },
  { icon: "⚙️", title: "Setup Guide", description: "Install and configure the tools" },
  { icon: "🎯", title: "Quick Wins", description: "Small projects, big results" },
  { icon: "📝", title: "Mastering OpenDraft", description: "Advanced thesis writing techniques" },
  { icon: "📊", title: "OpenSlides Workflows", description: "Create stunning presentations" },
  { icon: "🤖", title: "AI Prompting", description: "Get better results from AI tools" },
  { icon: "🤝", title: "How to Contribute", description: "Join the community" },
  { icon: "🐛", title: "Bug Reports", description: "Help us improve" },
  { icon: "✨", title: "Feature Requests", description: "Shape the roadmap" },
];

export default function TutorialsPage() {
  return (
    <>
      <div className="py-12 border-b border-dashed border-zinc-800">
        <div className="mx-auto max-w-5xl px-6">
          <h1 className="text-3xl font-bold mb-2 animate-fade-in-up">
            Tutorials <span className="ml-2 px-2 py-1 bg-zinc-800 text-zinc-500 rounded text-sm font-normal">Phase 2</span>
          </h1>
          <p className="text-zinc-500 animate-fade-in-up-delay-1">Learn to build with our tools. Step-by-step guides for everyone.</p>
        </div>
      </div>

      <section className="py-12 opacity-40">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid md:grid-cols-3 gap-4">
            {tutorials.map((item) => (
              <Card key={item.title} icon={item.icon} title={item.title} description={item.description} disabled />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
