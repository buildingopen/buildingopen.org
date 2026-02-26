import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journey - Building Open",
  description: "The building process, caught on tape. The iterations, the failures, and the final products.",
};

const videos = [
  {
    title: "OpenClaw AI WhatsApp Assistant",
    description: "Setting up a 24/7 AI agent running on Hetzner with full GitHub memory. Built over the course of a weekend.",
    src: "/videos/openclaw-setup.mp4",
    poster: "/clawdbot-hinge.jpg",
    date: "February 2026",
  },
  {
    title: "OpenSlides Beta",
    description: "The moment the prompt-to-presentation pipeline finally clicked. Generated 10 slides in 30 seconds with data visualizations.",
    src: "/videos/openslides-final.mp4",
    poster: "/openslides-demo.png",
    date: "February 2026",
  },
  {
    title: "OpenSlides V12 (Early UI)",
    description: "Testing early UI iterations before we stripped away all the buttons and went pure-prompt.",
    src: "/videos/openslides-v12.mp4",
    poster: "/thesis-page-01.png",
    date: "February 2026",
  }
];

export default function JourneyPage() {
  return (
    <div className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <header className="mb-16">
          <h1 className="text-3xl font-bold mb-4">The Journey</h1>
          <p className="text-zinc-400 max-w-xl">
            We build in public. Here is the raw footage of features coming together, from early broken prototypes to the final polished tools.
          </p>
        </header>

        <div className="space-y-24">
          {videos.map((video, idx) => (
            <div key={idx} className="group">
              <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-4">
                <h2 className="text-xl font-semibold">{video.title}</h2>
                <span className="text-sm text-zinc-500 font-mono">{video.date}</span>
              </div>
              <p className="text-zinc-400 mb-6 max-w-2xl">{video.description}</p>

              <div className="relative rounded-xl overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl">
                <video
                  src={video.src}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full h-auto max-h-[70vh] object-contain bg-black"
                  poster={video.poster}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
