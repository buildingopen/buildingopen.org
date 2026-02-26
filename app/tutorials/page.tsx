import type { Metadata } from "next";
import Link from "next/link";
import { tutorials } from "../lib/tutorials";

export const metadata: Metadata = {
  title: "Tutorials - Building Open",
  description: "Step-by-step guides for building with open source tools. Learn how things work, then build your own.",
};

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
                <h2 className="text-lg font-semibold group-hover:text-white transition-colors">
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
