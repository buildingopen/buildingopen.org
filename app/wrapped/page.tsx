import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Claude Code Wrapped",
  description: "Spotify Wrapped for Claude Code. See your AI coding stats visualized.",
  openGraph: {
    title: "Claude Code Wrapped",
    description: "Spotify Wrapped for Claude Code. See your AI coding stats visualized.",
    url: "https://wrapped.buildingopen.org",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claude Code Wrapped",
    description: "Spotify Wrapped for Claude Code. See your AI coding stats visualized.",
  },
};

const slidePreview = [
  { number: "552", label: "sessions", accent: "#22c55e" },
  { number: "67%", label: "terse prompts", accent: "#f43f5e" },
  { number: "$50K", label: "API cost", accent: "#22c55e" },
  { number: "33%", label: "delusion rate", accent: "#f59e0b" },
];

export default function WrappedLandingPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050505",
        color: "#fff",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        overflow: "hidden",
      }}
    >
      {/* Hero */}
      <section
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
          padding: "2rem",
          textAlign: "center",
          position: "relative",
        }}
      >
        {/* Subtle radial glow */}
        <div
          style={{
            position: "absolute",
            width: "min(800px, 100vw)",
            height: "800px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 640, position: "relative", zIndex: 1 }}>
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
            Wrapped
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
              npx claude-wrapped
            </code>
            <div
              style={{
                color: "#52525b",
                fontSize: "0.75rem",
                marginTop: "0.5rem",
              }}
            >
              Runs locally. No AI calls. Data never leaves your machine unless
              you <code style={{ color: "#71717a" }}>--publish</code>.
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

          {/* Scroll indicator */}
          <div style={{ color: "#3f3f46", fontSize: "0.75rem" }}>
            scroll to preview
            <div style={{ marginTop: "0.5rem", fontSize: "1rem" }}>&#8595;</div>
          </div>
        </div>
      </section>

      {/* Slide Preview */}
      <section
        style={{
          padding: "4rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.2em",
            textTransform: "uppercase" as const,
            color: "#52525b",
            marginBottom: "0.75rem",
          }}
        >
          Preview
        </div>
        <h2
          style={{
            fontFamily: "var(--font-space-grotesk), system-ui, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.5rem, 4vw, 2rem)",
            color: "#fafafa",
            marginBottom: "0.5rem",
            textAlign: "center",
          }}
        >
          20 slides of your AI coding DNA
        </h2>
        <p
          style={{
            color: "#71717a",
            fontSize: "0.9rem",
            marginBottom: "3rem",
            textAlign: "center",
          }}
        >
          Here&apos;s a taste of what your report looks like.
        </p>

        {/* Mockup slide cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "1rem",
            maxWidth: 800,
            width: "100%",
            marginBottom: "3rem",
          }}
        >
          {slidePreview.map((slide) => (
            <div
              key={slide.label}
              style={{
                background: "linear-gradient(145deg, #0a0a0a, #111)",
                borderRadius: 12,
                padding: "2rem 1.5rem",
                border: "1px solid #1a1a1a",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: 160,
              }}
            >
              <div
                style={{
                  fontFamily:
                    "var(--font-space-grotesk), system-ui, sans-serif",
                  fontWeight: 800,
                  fontSize: "2.5rem",
                  color: slide.accent,
                  lineHeight: 1,
                  marginBottom: "0.5rem",
                }}
              >
                {slide.number}
              </div>
              <div
                style={{
                  color: "#71717a",
                  fontSize: "0.75rem",
                  textTransform: "uppercase" as const,
                  letterSpacing: "0.1em",
                }}
              >
                {slide.label}
              </div>
            </div>
          ))}
        </div>

        {/* Feature tags */}
        <div style={{ maxWidth: 640, textAlign: "center" }}>
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
      </section>

      {/* How it works */}
      <section
        style={{
          padding: "4rem 2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2
          style={{
            fontFamily: "var(--font-space-grotesk), system-ui, sans-serif",
            fontWeight: 700,
            fontSize: "clamp(1.3rem, 3.5vw, 1.75rem)",
            color: "#fafafa",
            marginBottom: "2rem",
            textAlign: "center",
          }}
        >
          How it works
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1.5rem",
            maxWidth: 700,
            width: "100%",
          }}
        >
          {[
            {
              step: "1",
              title: "Run one command",
              desc: "npx claude-wrapped scans your local Claude Code session files.",
            },
            {
              step: "2",
              title: "See your report",
              desc: "20 visual slides generated instantly. No AI, no API, no network.",
            },
            {
              step: "3",
              title: "Share (optional)",
              desc: "Add --publish to get a shareable link. Project names auto-sanitized.",
            },
          ].map((item) => (
            <div
              key={item.step}
              style={{
                background: "#0a0a0a",
                borderRadius: 10,
                padding: "1.5rem",
                border: "1px solid #1a1a1a",
              }}
            >
              <div
                style={{
                  fontWeight: 800,
                  fontSize: "1.25rem",
                  color: "#22c55e",
                  marginBottom: "0.5rem",
                  fontFamily:
                    "var(--font-space-grotesk), system-ui, sans-serif",
                }}
              >
                {item.step}.
              </div>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  color: "#fafafa",
                  marginBottom: "0.35rem",
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  fontSize: "0.75rem",
                  color: "#71717a",
                  lineHeight: 1.5,
                }}
              >
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer CTA */}
      <section
        style={{
          padding: "4rem 2rem 3rem",
          textAlign: "center",
        }}
      >
        <div
          style={{
            background: "#111",
            borderRadius: 12,
            padding: "1.5rem 2rem",
            marginBottom: "2rem",
            border: "1px solid #222",
            display: "inline-block",
          }}
        >
          <code
            style={{
              color: "#22c55e",
              fontSize: "clamp(0.85rem, 2vw, 1rem)",
              fontFamily: "'SF Mono', 'Fira Code', monospace",
            }}
          >
            npx claude-wrapped
          </code>
        </div>

        <div
          style={{
            color: "#3f3f46",
            fontSize: "0.65rem",
            marginTop: "1rem",
          }}
        >
          <a
            href="https://github.com/buildingopen/claude-wrapped"
            style={{ color: "#52525b", textDecoration: "none" }}
          >
            github.com/buildingopen/claude-wrapped
          </a>
          {" "}
          &middot; npm:{" "}
          <a
            href="https://www.npmjs.com/package/claude-wrapped"
            style={{ color: "#52525b", textDecoration: "none" }}
          >
            claude-wrapped
          </a>
        </div>
      </section>
    </div>
  );
}
