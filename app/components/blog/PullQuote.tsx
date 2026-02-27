export function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote className="py-4 border-t border-b border-zinc-800 text-lg text-zinc-300 font-medium leading-relaxed text-center">
      {children}
    </blockquote>
  );
}
