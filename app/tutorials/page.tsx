import Link from "next/link";

const tutorials = [
  {
    slug: "openclaw-whatsapp-assistant",
    title: "Build your own AI WhatsApp assistant for ~5/month",
    description: "Set up a personal AI agent on a cheap cloud server, accessible via WhatsApp. Uses Gemini, runs 24/7.",
    difficulty: "Intermediate",
  },
  {
    slug: "opendraft-quickstart",
    title: "Generate your first research paper with OpenDraft",
    description: "Go from a topic to a 40-page paper with proper citations in under 15 minutes.",
    difficulty: "Beginner",
  },
  {
    slug: "openslides-quickstart",
    title: "Create a slide deck with OpenSlides",
    description: "Generate branded presentations from Python. Extract brand colors from any website, export to PNG or PDF.",
    difficulty: "Beginner",
  },
];

export default function TutorialsPage() {
  return (
    <div className="py-16">
      <div className="mx-auto max-w-2xl px-6">
        <h1 className="text-3xl font-bold mb-2">Tutorials</h1>
        <p className="text-zinc-500 mb-12">Step-by-step guides. Learn how things work, then build your own.</p>

        <div className="space-y-8">
          {tutorials.map((tutorial) => (
            <Link
              key={tutorial.slug}
              href={`/tutorials/${tutorial.slug}`}
              className="group block border-b border-zinc-800 pb-8"
            >
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-lg font-semibold group-hover:text-green-500 transition-colors">
                  {tutorial.title}
                </h2>
                <span className="text-xs px-2 py-0.5 bg-zinc-800 text-zinc-400 rounded">{tutorial.difficulty}</span>
              </div>
              <p className="text-zinc-400 text-sm">{tutorial.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
