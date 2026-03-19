import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claude Code Entropy",
  description: "Spotify Wrapped for Claude Code. See your AI coding stats visualized.",
  openGraph: {
    title: "Claude Code Entropy",
    description: "Spotify Wrapped for Claude Code. See your AI coding stats visualized.",
    url: "https://entropy.buildingopen.org",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude Code Entropy",
    description: "Spotify Wrapped for Claude Code. See your AI coding stats visualized.",
    images: ["/og-image.png"],
  },
};

export default function EntropyLandingPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "#fff",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        textAlign: "center",
      }}
    >
      <div style={{ maxWidth: 640 }}>
        <div
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase" as const,
            color: "#71717a",
            marginBottom: "0.75rem",
          }}
        >
          Claude Code
        </div>

        <h1
          style={{
            fontFamily: "var(--font-space-grotesk), system-ui, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(3rem, 10vw, 5rem)",
            letterSpacing: "-0.03em",
            background: "linear-gradient(135deg, #22c55e, #06b6d4)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            lineHeight: 1.1,
            marginBottom: "1.5rem",
          }}
        >
          Entropy
        </h1>

        <p
          style={{
            fontSize: "clamp(1rem, 2.5vw, 1.25rem)",
            color: "#a1a1aa",
            lineHeight: 1.6,
            marginBottom: "2.5rem",
          }}
        >
          Your AI coding story, visualized. Sessions, tokens, errors, retry
          loops, prompting style, and the delusion score your AI gives itself.
        </p>

        <div
          style={{
            background: "#111",
            borderRadius: 12,
            padding: "1.5rem 2rem",
            marginBottom: "2rem",
            border: "1px solid #222",
            textAlign: "left" as const,
          }}
        >
          <code
            style={{
              color: "#22c55e",
              fontSize: "clamp(0.85rem, 2vw, 1rem)",
              fontFamily: "'SF Mono', 'Fira Code', monospace",
            }}
          >
            npx claude-entropy
          </code>
          <div
            style={{
              color: "#52525b",
              fontSize: "0.75rem",
              marginTop: "0.5rem",
            }}
          >
            Runs locally. No AI calls. Data never leaves your machine unless you{" "}
            <code style={{ color: "#71717a" }}>--publish</code>.
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          {[
            { stat: "20", label: "slides" },
            { stat: "100%", label: "local" },
            { stat: "0", label: "API calls" },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                background: "#111",
                borderRadius: 8,
                padding: "1rem",
                border: "1px solid #1a1a1a",
              }}
            >
              <div
                style={{
                  fontWeight: 700,
                  fontSize: "1.5rem",
                  color: "#22c55e",
                }}
              >
                {item.stat}
              </div>
              <div style={{ color: "#52525b", fontSize: "0.7rem" }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginBottom: "2rem" }}>
          <div
            style={{
              color: "#71717a",
              fontSize: "0.8rem",
              fontWeight: 500,
              marginBottom: "1rem",
            }}
          >
            What you&apos;ll see
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap" as const,
              gap: "0.5rem",
              justifyContent: "center",
            }}
          >
            {[
              "Sessions",
              "Hours",
              "Lines of Code",
              "Commits",
              "Prompting Style",
              "Tokens",
              "API Cost",
              "Error Taxonomy",
              "Retry Loops",
              "Delusion Score",
              "Tool Misuse",
              "Success Rate",
              "Niceness Score",
              "Swear Words",
              "Archetype",
            ].map((tag) => (
              <span
                key={tag}
                style={{
                  background: "#1a1a1a",
                  color: "#a1a1aa",
                  fontSize: "0.7rem",
                  padding: "0.3rem 0.6rem",
                  borderRadius: 4,
                  border: "1px solid #222",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div
          style={{
            color: "#3f3f46",
            fontSize: "0.65rem",
            marginTop: "2rem",
          }}
        >
          <a
            href="https://github.com/buildingopen/claude-entropy"
            style={{ color: "#52525b", textDecoration: "none" }}
          >
            github.com/buildingopen/claude-entropy
          </a>
          {" "}
          &middot; npm:{" "}
          <a
            href="https://www.npmjs.com/package/claude-entropy"
            style={{ color: "#52525b", textDecoration: "none" }}
          >
            claude-entropy
          </a>
        </div>
      </div>
    </div>
  );
}
