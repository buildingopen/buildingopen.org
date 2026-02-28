import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Idea House - Building Open",
  description: "Submit ideas, vote on them, and watch them progress from concept to prototype to live product. Public idea pipeline for Building Open.",
  openGraph: {
    title: "Idea House - Building Open",
    description: "Submit ideas, vote on them, and watch them become real.",
    url: "https://buildingopen.org/ideas",
  },
};

export default function IdeasLayout({ children }: { children: React.ReactNode }) {
  return children;
}
