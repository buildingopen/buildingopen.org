import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Badge Generator - Building Open",
  description: "Generate a Building Open badge for your project. Show that you build in the open.",
};

export default function BadgeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
