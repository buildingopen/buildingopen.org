'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '../lib/supabase';
import PostCard from '../components/PostCard';
import AuthButton from '../components/AuthButton';
import type { Post } from '../lib/supabase';

const categories = [
  { value: 'all', label: 'All' },
  { value: 'general', label: 'General' },
  { value: 'show-and-tell', label: 'Show & Tell' },
  { value: 'help', label: 'Help' },
  { value: 'ideas', label: 'Ideas' },
];

const sortOptions = [
  { value: 'hot', label: 'Hot' },
  { value: 'new', label: 'New' },
  { value: 'top', label: 'Top' },
];

export default function CommunityPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('hot');
  const [user, setUser] = useState<{ id: string } | null>(null);
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
  }, []);

  useEffect(() => {
    async function fetchPosts() {
      setLoading(true);
      let query = supabase.from('posts').select('*');

      if (category !== 'all') {
        query = query.eq('category', category);
      }

      if (sort === 'new') {
        query = query.order('created_at', { ascending: false });
      } else if (sort === 'top') {
        query = query.order('upvotes', { ascending: false });
      } else {
        // Hot: combination of upvotes and recency
        query = query.order('created_at', { ascending: false });
      }

      query = query.limit(50);

      const { data } = await query;
      if (data) {
        let sorted = data as Post[];
        if (sort === 'hot') {
          sorted = sorted.sort((a, b) => {
            const ageA = (Date.now() - new Date(a.created_at).getTime()) / 3600000;
            const ageB = (Date.now() - new Date(b.created_at).getTime()) / 3600000;
            const scoreA = (a.upvotes + a.comment_count) / Math.pow(ageA + 2, 1.5);
            const scoreB = (b.upvotes + b.comment_count) / Math.pow(ageB + 2, 1.5);
            return scoreB - scoreA;
          });
        }
        setPosts(sorted);
      }
      setLoading(false);
    }
    fetchPosts();
  }, [category, sort]);

  const handleDeadLink = (e: React.MouseEvent) => {
    e.preventDefault();
    alert('This is a wireframe. Category filtering and new discussions are coming soon!');
  };

  return (
    <div className="py-10 md:py-16">
      <div className="mx-auto max-w-3xl px-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">Community</h1>
            <p className="text-sm text-zinc-500 mt-1">Ask, share, discuss.</p>
          </div>
          <div className="flex items-center gap-3">
            <AuthButton />
            {user && (
              <Link
                href="/community/new"
                className="px-4 py-2 bg-green-500 text-black text-sm font-medium rounded-lg hover:bg-green-400 transition-colors"
              >
                New Post
              </Link>
            )}
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex gap-1 mb-4 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setCategory(cat.value)}
              className={`px-3 py-1.5 rounded-lg text-sm whitespace-nowrap transition-colors ${
                category === cat.value
                  ? 'bg-zinc-800 text-white'
                  : 'text-zinc-500 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Sort */}
        <div className="flex gap-1 mb-6">
          {sortOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => setSort(opt.value)}
              className={`px-2 py-1 rounded text-xs transition-colors ${
                sort === opt.value
                  ? 'text-green-500 bg-green-500/10'
                  : 'text-zinc-600 hover:text-zinc-400'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Posts */}
        <div className="space-y-2">
          {loading ? (
            <div className="text-center py-12">
              <div className="inline-block w-5 h-5 border-2 border-zinc-600 border-t-green-500 rounded-full animate-spin" />
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12 text-zinc-600">
              <p>No posts yet.</p>
              {user && (
                <Link href="/community/new" className="text-green-500 text-sm mt-2 inline-block">
                  Be the first to post
                </Link>
              )}
            </div>
          ) : (
            posts.map((post) => <PostCard key={post.id} post={post} />)
          )}
        </div>
      </div>
    </div>
  );
}
