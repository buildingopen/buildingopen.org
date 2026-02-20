import Link from 'next/link';

interface CardProps {
  href?: string;
  icon: string;
  title: string;
  description: string;
  meta?: string;
  external?: boolean;
  disabled?: boolean;
}

export default function Card({ href, icon, title, description, meta, external, disabled }: CardProps) {
  const content = (
    <>
      <div className="text-2xl mb-3" aria-hidden="true">{icon}</div>
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-zinc-500 mb-3">{description}</p>
      {meta && <div className="text-xs text-zinc-600">{meta}</div>}
    </>
  );

  const className = `block border border-dashed border-zinc-800 rounded-lg p-5 transition-all ${
    disabled
      ? 'opacity-50 cursor-not-allowed'
      : 'hover:border-green-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/5'
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
