import { createBrowserClient } from '@supabase/ssr';

export function createClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) {
    throw new Error('Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY');
  }
  return createBrowserClient(url, key);
}

export type Post = {
  id: string;
  title: string;
  body: string | null;
  author_name: string;
  author_avatar: string | null;
  author_id: string | null;
  category: string;
  upvotes: number;
  comment_count: number;
  created_at: string;
};

export type Comment = {
  id: string;
  post_id: string;
  parent_id: string | null;
  body: string;
  author_name: string;
  author_avatar: string | null;
  author_id: string | null;
  upvotes: number;
  created_at: string;
  replies?: Comment[];
};
