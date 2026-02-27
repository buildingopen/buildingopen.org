import Image from "next/image";

export function Figure({
  src,
  alt,
  caption,
  priority,
  width = 800,
  height = 400,
}: {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  width?: number;
  height?: number;
}) {
  return (
    <figure>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="rounded-lg border border-zinc-800 w-full h-auto"
        priority={priority}
        sizes="(max-width: 672px) 100vw, 672px"
      />
      {caption && (
        <figcaption className="text-xs text-zinc-500 mt-2 text-center">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
