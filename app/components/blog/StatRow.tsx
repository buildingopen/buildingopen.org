export function StatRow({
  stats,
}: {
  stats: { value: string; label: string }[];
}) {
  return (
    <div
      className={`grid gap-4 ${
        stats.length === 2 ? "grid-cols-2" : "grid-cols-2 md:grid-cols-3"
      }`}
    >
      {stats.map((s) => (
        <div
          key={s.label}
          className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 text-center"
        >
          <p className="text-2xl font-bold text-green-400">{s.value}</p>
          <p className="text-xs text-zinc-500 mt-1">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
