import { ImageResponse } from 'next/og';

export const ogSize = { width: 1200, height: 630 };

export function createOGImage({
  title,
  subtitle,
  section,
}: {
  title: string;
  subtitle?: string;
  section?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: '#22c55e',
              }}
            />
            <span style={{ color: '#22c55e', fontSize: '22px', fontWeight: 600 }}>
              Building Open
            </span>
            {section && (
              <span style={{ color: '#71717a', fontSize: '22px' }}>/ {section}</span>
            )}
          </div>
          <h1
            style={{
              fontSize: title.length > 60 ? '44px' : '56px',
              fontWeight: 700,
              color: '#fafafa',
              lineHeight: 1.15,
              maxWidth: '950px',
            }}
          >
            {title}
          </h1>
        </div>
        {subtitle && (
          <p style={{ fontSize: '22px', color: '#71717a' }}>{subtitle}</p>
        )}
      </div>
    ),
    { ...ogSize }
  );
}
