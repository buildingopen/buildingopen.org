"use client";

import { useState } from "react";

export default function Terminal({ commands }: { commands: string[] }) {
  const [copied, setCopied] = useState(false);

  const copyAll = () => {
    navigator.clipboard.writeText(commands.join("\n"));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-zinc-950 rounded-lg border border-zinc-800 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-zinc-800 bg-zinc-900/50">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
          <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
          <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
        </div>
        <button
          onClick={copyAll}
          className="text-xs text-zinc-500 hover:text-white transition-colors"
        >
          {copied ? "Copied!" : "Copy all"}
        </button>
      </div>
      <div className="p-4 font-mono text-sm">
        {commands.map((cmd, i) => (
          <div key={i} className="flex">
            <span className="text-zinc-600 select-none mr-2">$</span>
            <span className="text-zinc-300">{cmd}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
