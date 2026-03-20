import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Claude Code Wrapped - Your AI coding stats, visualized';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          background: 'linear-gradient(145deg, #050505 0%, #0a1a0f 50%, #050505 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle glow */}
        <div
          style={{
            position: 'absolute',
            width: '600px',
            height: '600px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(34,197,94,0.08) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />

        {/* Label */}
        <div
          style={{
            fontSize: '18px',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#71717a',
            marginBottom: '12px',
          }}
        >
          Claude Code
        </div>

        {/* Title */}
        <div
          style={{
            fontSize: '96px',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: '#22c55e',
            lineHeight: 1,
            marginBottom: '24px',
          }}
        >
          Wrapped
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '24px',
            color: '#a1a1aa',
            marginBottom: '48px',
          }}
        >
          Your AI coding stats, visualized
        </div>

        {/* Stats row */}
        <div
          style={{
            display: 'flex',
            gap: '48px',
          }}
        >
          {[
            { stat: '20', label: 'slides' },
            { stat: '100%', label: 'local' },
            { stat: '0', label: 'API calls' },
          ].map((item) => (
            <div
              key={item.label}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <div style={{ fontSize: '36px', fontWeight: 700, color: '#22c55e' }}>
                {item.stat}
              </div>
              <div style={{ fontSize: '14px', color: '#52525b', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* CLI command */}
        <div
          style={{
            position: 'absolute',
            bottom: '40px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            color: '#3f3f46',
            fontSize: '16px',
          }}
        >
          <span style={{ color: '#22c55e', fontFamily: 'monospace' }}>npx claude-wrapped</span>
          <span>·</span>
          <span>wrapped.buildingopen.org</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
