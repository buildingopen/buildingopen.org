'use client';

import { useRef, useState } from 'react';

export default function CopyButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    const pre = ref.current?.querySelector('pre');
    if (pre) {
      await navigator.clipboard.writeText(pre.textContent || '');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div ref={ref} className="relative group">
      <button
        onClick={copy}
        className="absolute top-3 right-3 z-10 text-xs text-zinc-600 hover:text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer select-none"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      {children}
    </div>
  );
}
