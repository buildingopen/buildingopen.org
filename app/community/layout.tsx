import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community - Building Open",
  description: "Ask questions, share what you've built, and learn from others building in the open.",
};

export default function CommunityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
