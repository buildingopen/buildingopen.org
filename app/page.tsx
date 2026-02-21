'use client';

import Link from "next/link";

const projects = [
  {
    name: "OpenDraft",
    tagline: "40-page research paper in 12 min",
    image: "/thesis-page-01.png",
    href: "https://github.com/federicodeponte/opendraft",
    stars: 6,
    featured: true,
  },
  {
    name: "OpenSlides",
    tagline: "Text → branded slide deck",
    image: "/openslides-demo.png",
    href: "https://github.com/federicodeponte/openslides",
    stars: 2,
  },
  {
    name: "OpenWord",
    tagline: "Template + data → document",
    image: "/openword-demo.png",
    href: "https://github.com/federicodeponte/openword",
    stars: 1,
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero line */}
      <div className="border-b border-zinc-800 px-6 py-8 md:py-12">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
              Open source tools that <span className="text-green-500">actually work</span>
            </h1>
            <p className="text-zinc-500 mt-2">Use them. Learn from them. Make them yours.</p>
          </div>
          <Link
            href="/manifesto"
            className="text-sm text-zinc-500 hover:text-green-500 transition-colors whitespace-nowrap"
          >
            Read the manifesto →
          </Link>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <a
            key={project.name}
            href={project.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-[4/3] overflow-hidden bg-zinc-900 border-b border-zinc-800 md:border-r"
          >
            {/* Image - full bleed */}
            <img
              src={project.image}
              alt={project.name}
              className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />

            {/* Gradient overlay - always visible, stronger on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />

            {/* Info - always visible */}
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <div className="flex items-center gap-3 mb-1">
                <h2 className="text-xl font-bold">{project.name}</h2>
                <div className="flex items-center gap-1 text-sm text-zinc-400">
                  <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/>
                  </svg>
                  {project.stars}
                </div>
              </div>
              <p className="text-zinc-400 text-sm">{project.tagline}</p>
            </div>

            {/* Featured tag */}
            {project.featured && (
              <div className="absolute top-4 left-4 px-2 py-1 bg-green-500 text-black text-xs font-medium rounded">
                Featured
              </div>
            )}
          </a>
        ))}
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-1 md:grid-cols-3 border-b border-zinc-800">
        {/* About */}
        <div className="border-b md:border-b-0 md:border-r border-zinc-800 p-8 flex items-center gap-5">
          <img
            src="/fede.jpg"
            alt="Federico De Ponte"
            className="w-14 h-14 rounded-full object-cover flex-shrink-0"
          />
          <div>
            <h3 className="font-semibold">Federico De Ponte</h3>
            <p className="text-zinc-500 text-sm">Self-taught dev building in the open</p>
            <div className="flex gap-3 mt-2">
              <a href="https://github.com/federicodeponte" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-500 hover:text-green-500">GitHub</a>
              <a href="https://linkedin.com/in/federicodeponte" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-500 hover:text-green-500">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Manifesto teaser */}
        <Link
          href="/manifesto"
          className="group border-b md:border-b-0 md:border-r border-zinc-800 p-8 hover:bg-zinc-900/50 transition-colors"
        >
          <p className="text-green-500 text-sm mb-2">The Manifesto</p>
          <p className="text-zinc-400 text-sm leading-relaxed">
            &ldquo;The best tools and education should be accessible to everyone,
            regardless of where you live or what you can afford.&rdquo;
          </p>
          <p className="text-zinc-600 text-sm mt-3 group-hover:text-green-500 transition-colors">Read more →</p>
        </Link>

        {/* CTA */}
        <a
          href="https://github.com/buildingopen"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-400 transition-colors p-8 flex flex-col justify-center"
        >
          <h3 className="text-xl font-bold text-black">Join the movement</h3>
          <p className="text-green-900 text-sm mt-1">Fork it. Improve it. Build something new.</p>
        </a>
      </div>

    </div>
  );
}
