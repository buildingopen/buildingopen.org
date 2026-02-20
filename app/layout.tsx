import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "Building Open",
  description: "Open source tools for opportunity and education. Free software for learning, creating, and growing.",
  openGraph: {
    title: "Building Open",
    description: "Open source tools for opportunity and education",
    url: "https://buildingopen.org",
    siteName: "Building Open",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen flex flex-col">
        <a href="#main" className="skip-link">Skip to main content</a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
