"use client";

import { useEffect, useState } from "react";

const CACHE_TTL = 60 * 60 * 1000; // 1 hour

function getCached(repo: string): number | null {
  try {
    const raw = localStorage.getItem(`stars:${repo}`);
    if (!raw) return null;
    const { count, ts } = JSON.parse(raw);
    if (Date.now() - ts > CACHE_TTL) return null;
    return count;
  } catch {
    return null;
  }
}

function setCache(repo: string, count: number) {
  try {
    localStorage.setItem(`stars:${repo}`, JSON.stringify({ count, ts: Date.now() }));
  } catch {}
}

export default function StarCount({ repo }: { repo: string }) {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    const cached = getCached(repo);
    if (cached !== null) {
      setCount(cached);
      return;
    }

    fetch(`https://api.github.com/repos/${repo}`)
      .then((r) => r.json())
      .then((data) => {
        if (typeof data.stargazers_count === "number") {
          setCount(data.stargazers_count);
          setCache(repo, data.stargazers_count);
        }
      })
      .catch(() => {});
  }, [repo]);

  if (count === null) return null;

  return (
    <span className="inline-flex items-center gap-1 text-sm text-zinc-500">
      <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
      </svg>
      {count}
    </span>
  );
}
