import { createBrowserClient } from '@supabase/ssr';

export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
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
