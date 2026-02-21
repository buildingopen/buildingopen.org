import Link from 'next/link';

interface CardProps {
  href?: string;
  icon: string;
  title: string;
  description: string;
  meta?: string;
  tags?: string[];
  external?: boolean;
  disabled?: boolean;
}

export default function Card({ href, icon, title, description, meta, tags, external, disabled }: CardProps) {
  const content = (
    <>
      {icon && <div className="text-2xl mb-3 transition-transform group-hover:scale-110" aria-hidden="true">{icon}</div>}
      <h3 className="font-semibold mb-1 group-hover:text-green-500 transition-colors">{title}</h3>
      <p className="text-sm text-zinc-500 mb-3 line-clamp-2">{description}</p>
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mb-2">
          {tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 bg-zinc-800/80 text-zinc-400 rounded text-xs border border-zinc-700/50">
              {tag}
            </span>
          ))}
        </div>
      )}
      {meta && <div className="text-xs text-zinc-600">{meta}</div>}
      {external && !disabled && (
        <div className="absolute top-4 right-4 text-zinc-600 group-hover:text-green-500 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>
      )}
    </>
  );

  const className = `group relative block border border-dashed rounded-lg p-5 transition-all duration-300 ${
    disabled
      ? 'border-zinc-800/50 opacity-50 cursor-not-allowed'
      : 'border-zinc-800 hover:border-green-500/50 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/5 card-glow'
  }`;

  if (disabled || !href) {
    return <div className={className}>{content}</div>;
  }

  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
