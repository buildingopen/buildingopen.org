import type { Metadata } from 'next';
import { createClient } from '@supabase/supabase-js';
import IdeaDetail from './IdeaDetail';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

async function getPost(id: string) {
  const supabase = createClient(supabaseUrl, supabaseKey);
  const { data } = await supabase
    .from('posts')
    .select('title, body, stage')
    .eq('id', id)
    .single();
  return data;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    return { title: 'Idea Not Found - Building Open' };
  }

  const stageLabel = post.stage ? post.stage.charAt(0).toUpperCase() + post.stage.slice(1) : '';
  const title = `${post.title} - Idea House`;
  const description = post.body
    ? post.body.slice(0, 160) + (post.body.length > 160 ? '...' : '')
    : `${stageLabel} idea on Building Open's public pipeline.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://buildingopen.org/ideas/${id}`,
    },
  };
}

export default async function IdeaDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <IdeaDetail id={id} />;
}
