import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'Building Open - Open source tools that actually work';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
            marginBottom: '32px',
          }}
        >
          <div
            style={{
              width: '48px',
              height: '48px',
              borderRadius: '50%',
              background: '#22c55e',
            }}
          />
          <span style={{ color: '#22c55e', fontSize: '28px', fontWeight: 700 }}>
            Building Open
          </span>
        </div>
        <h1
          style={{
            fontSize: '64px',
            fontWeight: 700,
            color: '#fafafa',
            lineHeight: 1.1,
            marginBottom: '24px',
          }}
        >
          Open source tools that actually work
        </h1>
        <p style={{ fontSize: '28px', color: '#a1a1aa' }}>
          Use them. Learn from them. Make them yours.
        </p>
      </div>
    ),
    { ...size }
  );
}
