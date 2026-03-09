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
  stage: 'idea' | 'prototype' | 'live' | 'rejected' | null;
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

export function timeAgo(date: string) {
  const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);
  if (seconds < 60) return 'just now';
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 30) return `${days}d ago`;
  return new Date(date).toLocaleDateString();
}
