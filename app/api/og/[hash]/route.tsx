import { ImageResponse } from 'next/og';
import { createClient } from '@supabase/supabase-js';

export const runtime = 'edge';

const supabase = createClient(
  'https://cbhbfutssknfjvgvavnt.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNiaGJmdXRzc2tuZmp2Z3Zhdm50Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIxMTQ1MDksImV4cCI6MjA4NzY5MDUwOX0.LGVvXcA7lRmX-7xBMmyM7ccLbFXzPCWyTik8lwF2dfc',
);

const ARCHETYPE_LABELS: Record<string, string> = {
  firefighter: 'THE FIREFIGHTER',
  architect: 'THE ARCHITECT',
  speedrunner: 'THE SPEEDRUNNER',
  perfectionist: 'THE PERFECTIONIST',
  whisperer: 'THE WHISPERER',
  commander: 'THE COMMANDER',
};

function fmtCompact(n: number): string {
  if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(1)}B`;
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`;
  if (n >= 1_000) return `${Math.round(n / 1_000)}K`;
  return String(n);
}

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ hash: string }> },
) {
  const { hash } = await params;

  const { data, error } = await supabase
    .from('wrapped_reports')
    .select('metrics, author_name')
    .eq('hash', hash)
    .single();

  if (error || !data?.metrics) {
    // Fallback generic card
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
            alignItems: 'center',
            padding: '80px',
          }}
        >
          <div style={{ color: '#22c55e', fontSize: '48px', fontWeight: 700 }}>
            CLAUDE CODE WRAPPED
          </div>
          <div style={{ color: '#a1a1aa', fontSize: '28px', marginTop: '16px' }}>
            wrapped.buildingopen.org
          </div>
        </div>
      ),
      { width: 1200, height: 630 },
    );
  }

  const m = data.metrics;
  const archetype = ARCHETYPE_LABELS[m.archetype_key] || m.archetype_name || 'CODER';
  const overallPct = m.overall_percentile || 0;
  const topPct = overallPct >= 50 ? `Top ${100 - overallPct}%` : '';
  const author = m.author_name || data.author_name || '';

  const stats = [
    { value: fmtCompact(m.sessions || 0), label: 'sessions' },
    { value: fmtCompact(m.hours || 0), label: 'hours' },
    { value: fmtCompact(m.loc || 0), label: 'LOC' },
    { value: m.tokens_display || '0', label: 'tokens' },
    { value: `${m.success_pct || 0}%`, label: 'success' },
  ];

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
          padding: '60px 80px',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ color: '#a1a1aa', fontSize: '24px', letterSpacing: '4px', fontWeight: 700 }}>
              CLAUDE CODE WRAPPED
            </div>
          </div>
        </div>

        {/* Archetype + percentile */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <div style={{ color: '#22c55e', fontSize: '56px', fontWeight: 700 }}>
              {archetype}
            </div>
            {topPct && (
              <div
                style={{
                  color: '#22c55e',
                  fontSize: '36px',
                  fontWeight: 700,
                  border: '2px solid rgba(34,197,94,0.4)',
                  borderRadius: '12px',
                  padding: '4px 20px',
                }}
              >
                {topPct}
              </div>
            )}
          </div>
        </div>

        {/* Stats row */}
        <div style={{ display: 'flex', gap: '48px', alignItems: 'flex-end' }}>
          {stats.map((s) => (
            <div key={s.label} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ color: '#22c55e', fontSize: '48px', fontWeight: 700 }}>
                {s.value}
              </div>
              <div style={{ color: '#a1a1aa', fontSize: '20px', marginTop: '4px' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div style={{ color: '#ffffff', fontSize: '24px', fontWeight: 600 }}>
            {author}
          </div>
          <div style={{ color: '#52525b', fontSize: '20px' }}>
            wrapped.buildingopen.org
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      headers: {
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    },
  );
}
