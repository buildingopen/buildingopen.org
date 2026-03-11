import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://cbhbfutssknfjvgvavnt.supabase.co',
  process.env.WRAPPED_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNiaGJmdXRzc2tuZmp2Z3Zhdm50Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzIxMTQ1MDksImV4cCI6MjA4NzY5MDUwOX0.LGVvXcA7lRmX-7xBMmyM7ccLbFXzPCWyTik8lwF2dfc',
);

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ hash: string }> },
) {
  const { hash } = await params;

  const { data, error } = await supabase
    .from('wrapped_reports')
    .select('html_content')
    .eq('hash', hash)
    .single();

  if (error || !data) {
    return new NextResponse('Not found', { status: 404 });
  }

  return new NextResponse(data.html_content, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  });
}
