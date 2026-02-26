import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found - Building Open",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <svg viewBox="0 0 48 40" xmlns="http://www.w3.org/2000/svg" className="w-12 h-10 mb-6 opacity-30">
        <text x="0" y="32" fontFamily="Space Grotesk, system-ui, sans-serif" fontWeight="700" fontSize="40" fill="#22c55e">b</text>
        <circle cx="36" cy="22" r="11" fill="#22c55e"/>
      </svg>
      <h1 className="text-5xl font-bold mb-3">404</h1>
      <p className="text-zinc-500 mb-8">Nothing here. Maybe it moved, maybe it never existed.</p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-400 text-black text-sm font-medium rounded transition-colors"
      >
        Back to home
      </Link>
    </div>
  );
}
