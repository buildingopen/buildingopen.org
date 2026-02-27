'use client';

import Link from "next/link";
import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "./components/animations/FadeIn";

const projects = [
  {
    name: "OpenDraft",
    tagline: "40-page research paper in ~15 min",
    image: "/thesis-page-01.png",
    href: "/projects#opendraft",
    featured: true,
  },
  {
    name: "OpenSlides",
    tagline: "Text → branded slide deck",
    image: "/openslides-demo.png",
    href: "/projects#openslides",
  },
  {
    name: "OpenWord",
    tagline: "Template + data → document",
    image: "/openword-demo.png",
    href: "/projects#openword",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero line */}
      <FadeIn className="border-b border-zinc-800 px-6 py-8 md:py-12">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight">
            Open source tools that <span className="text-white">actually work</span>
          </h1>
          <p className="text-zinc-500 mt-2">Use them. Learn from them. Make them yours.</p>
          <a
            href="https://github.com/federicodeponte/opendraft"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-green-500 hover:bg-green-400 text-black text-sm font-medium rounded transition-colors"
          >
            Try OpenDraft &rarr;
          </a>
        </div>
      </FadeIn>

      {/* Gallery Grid */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, idx) => (
          <StaggerItem key={project.name}>
            <Link
              href={project.href}
              className="group block relative aspect-[4/3] overflow-hidden bg-zinc-900 border-b border-zinc-800 md:border-r h-full"
            >
              {/* Image - full bleed */}
              <Image
                src={project.image}
                alt={project.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                priority={idx === 0}
              />

              {/* Gradient overlay - always visible, stronger on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />

              {/* Info - always visible */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h2 className="text-xl font-bold mb-1">{project.name}</h2>
                <p className="text-zinc-400 text-sm">{project.tagline}</p>
              </div>

              {/* Featured tag */}
              {project.featured && (
                <div className="absolute top-4 left-4 px-2 py-1 bg-green-500 text-black text-xs font-medium rounded">
                  Featured
                </div>
              )}
            </Link>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Proof bar */}
      <FadeIn delay={0.3} className="border-b border-zinc-800 px-6 py-12">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-zinc-900 border border-zinc-800">
            <Image
              src="/thesis-page-02.png"
              alt="OpenDraft generated research paper"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
          <div>
            <p className="text-zinc-300 text-lg leading-relaxed mb-4">
              OpenDraft generates 40-page papers with real citations. Clone it, run it, get a paper.
            </p>
            <a
              href="https://github.com/federicodeponte/opendraft"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 hover:text-white transition-colors"
            >
              See the code on GitHub &rarr;
            </a>
          </div>
        </div>
      </FadeIn>

      {/* Bottom row */}
      <FadeIn delay={0.4} className="grid grid-cols-1 md:grid-cols-3 border-b border-zinc-800">
        {/* About */}
        <div className="border-b md:border-b-0 md:border-r border-zinc-800 p-8 flex items-center gap-5">
          <Image
            src="/fede.jpg"
            alt="Federico De Ponte"
            width={56}
            height={56}
            className="rounded-full object-cover flex-shrink-0"
          />
          <div>
            <h3 className="font-semibold">Federico De Ponte</h3>
            <p className="text-zinc-500 text-sm">Self-taught dev building in the open</p>
            <div className="flex gap-3 mt-2">
              <a href="https://github.com/federicodeponte" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-500 hover:text-white">GitHub</a>
              <a href="https://linkedin.com/in/federicodeponte" target="_blank" rel="noopener noreferrer" className="text-xs text-zinc-500 hover:text-white">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Manifesto teaser */}
        <Link
          href="/manifesto"
          className="group border-b md:border-b-0 md:border-r border-zinc-800 p-8 hover:bg-zinc-900/50 transition-colors"
        >
          <p className="text-zinc-400 text-sm mb-2">The Manifesto</p>
          <p className="text-zinc-400 text-sm leading-relaxed">
            &ldquo;The best tools and education should be accessible to everyone,
            regardless of where you live or what you can afford.&rdquo;
          </p>
          <p className="text-zinc-600 text-sm mt-3 group-hover:text-white transition-colors">Read more &rarr;</p>
        </Link>

        {/* CTA */}
        <Link
          href="/blog"
          className="bg-green-500 hover:bg-green-400 transition-colors p-8 flex flex-col justify-center"
        >
          <h3 className="text-lg font-semibold text-black">Read the blog</h3>
          <p className="text-black/60 text-sm mt-1">Stories from building in the open.</p>
        </Link>
      </FadeIn>

    </div>
  );
}
