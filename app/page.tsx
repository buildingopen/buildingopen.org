'use client';

import Link from "next/link";

const projects = [
  {
    name: "OpenDraft",
    tagline: "40-page research paper in 12 min",
    image: "/thesis-page-01.png",
    href: "https://github.com/federicodeponte/opendraft",
    featured: true,
  },
  {
    name: "OpenSlides",
    tagline: "Text → branded slide deck",
    image: "/openslides-demo.png",
    href: "https://github.com/federicodeponte/openslides",
  },
  {
    name: "OpenWord",
    tagline: "Template + data → document",
    image: "/openword-demo.png",
    href: "https://github.com/federicodeponte/openword",
  },
];

export default function Home() {
  return (
    <div className="min-h-[calc(100vh-65px)]">
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-[4/3] overflow-hidden bg-zinc-900 border-b border-r border-zinc-800"
          >
            {/* Image */}
            <div className="absolute inset-0 flex items-center justify-center p-8 transition-transform duration-500 group-hover:scale-105">
              <img
                src={project.image}
                alt={project.name}
                className="max-h-full max-w-full object-contain drop-shadow-2xl"
              />
            </div>

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Info */}
            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-1">{project.name}</h2>
              <p className="text-zinc-400">{project.tagline}</p>
            </div>

            {/* Corner tag for featured */}
            {project.featured && (
              <div className="absolute top-4 left-4 px-2 py-1 bg-green-500 text-black text-xs font-medium rounded">
                Featured
              </div>
            )}
          </a>
        ))}

        {/* Manifesto card */}
        <Link
          href="/manifesto"
          className="group relative aspect-[4/3] overflow-hidden bg-zinc-950 border-b border-r border-zinc-800 flex items-center justify-center"
        >
          <div className="text-center p-8">
            <div className="text-6xl mb-6 opacity-20 group-hover:opacity-40 transition-opacity">✦</div>
            <h2 className="text-2xl font-bold mb-2 group-hover:text-green-500 transition-colors">The Manifesto</h2>
            <p className="text-zinc-500">Why we build open</p>
          </div>
        </Link>

        {/* About card */}
        <div className="group relative aspect-[4/3] overflow-hidden bg-zinc-950 border-b border-r border-zinc-800 flex items-center justify-center p-8">
          <div className="text-center">
            <img
              src="/fede.jpg"
              alt="Federico De Ponte"
              className="w-20 h-20 rounded-full object-cover mx-auto mb-4 grayscale group-hover:grayscale-0 transition-all duration-300"
            />
            <h2 className="text-lg font-bold mb-1">Federico De Ponte</h2>
            <p className="text-zinc-500 text-sm mb-4">Self-taught dev from Germany</p>
            <div className="flex gap-4 justify-center">
              <a
                href="https://github.com/federicodeponte"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-500 hover:text-green-500 transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/federicodeponte"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-500 hover:text-green-500 transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        {/* Join card */}
        <a
          href="https://github.com/buildingopen"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative aspect-[4/3] overflow-hidden bg-green-500 border-b border-r border-green-400 flex items-center justify-center"
        >
          <div className="text-center p-8">
            <h2 className="text-3xl font-bold text-black mb-2">Join us</h2>
            <p className="text-green-900">Fork it. Improve it. Make it yours.</p>
          </div>
        </a>
      </div>
    </div>
  );
}
