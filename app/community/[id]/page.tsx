import type { Metadata } from 'next';
import { createClient } from '@supabase/supabase-js';
import PostDetail from './PostDetail';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

async function getPost(id: string) {
  const supabase = createClient(supabaseUrl, supabaseKey);
  const { data } = await supabase
    .from('posts')
    .select('title, body, category')
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
    return { title: 'Post Not Found - Building Open' };
  }

  const title = `${post.title} - Community`;
  const description = post.body
    ? post.body.slice(0, 160) + (post.body.length > 160 ? '...' : '')
    : `Discussion in Building Open's community.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://buildingopen.org/community/${id}`,
    },
  };
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <PostDetail id={id} />;
}
