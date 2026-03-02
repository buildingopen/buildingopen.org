export function CardSkeleton() {
  return (
    <div className="flex gap-3 p-3 rounded-lg border border-zinc-800 bg-zinc-900/50 animate-pulse">
      <div className="flex flex-col items-center gap-1 w-7">
        <div className="w-5 h-5 bg-zinc-800 rounded" />
        <div className="w-4 h-3 bg-zinc-800 rounded" />
        <div className="w-5 h-5 bg-zinc-800 rounded" />
      </div>
      <div className="flex-1 space-y-2">
        <div className="h-4 bg-zinc-800 rounded w-3/4" />
        <div className="h-3 bg-zinc-800 rounded w-1/2" />
      </div>
    </div>
  );
}

export function CardSkeletonList({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}
