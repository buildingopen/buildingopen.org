export function Callout({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6">
      {title && (
        <p className="text-zinc-300 font-medium mb-3">{title}</p>
      )}
      <div className="text-sm text-zinc-400 leading-relaxed">{children}</div>
    </div>
  );
}
