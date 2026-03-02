'use client';

import { useEffect, useState, useCallback } from 'react';
import Link from 'next/link';
import { createClient } from '../lib/supabase';
import IdeaCard from '../components/IdeaCard';
import IdeaDrawer from '../components/IdeaDrawer';
import StageBadge from '../components/StageBadge';
import AuthButton from '../components/AuthButton';
import { CardSkeletonList } from '../components/Skeleton';
import type { Post } from '../lib/supabase';

const stages = ['idea', 'prototype', 'live'] as const;

const stageColors = {
  idea: 'border-blue-500/30',
  prototype: 'border-yellow-500/30',
  live: 'border-green-500/30',
} as const;

export default function IdeasPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<(typeof stages)[number]>('idea');
  const [user, setUser] = useState<{ id: string } | null>(null);
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [search, setSearch] = useState('');
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    async function fetchIdeas() {
      setLoading(true);
      const { data } = await supabase
        .from('posts')
        .select('*')
        .not('stage', 'is', null)
        .order('upvotes', { ascending: false });

      if (data) setPosts(data as Post[]);
      setLoading(false);
    }
    fetchIdeas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sync vote changes from drawers/detail views back to the list
  const handleVoteChanged = useCallback((e: Event) => {
    const { postId, count } = (e as CustomEvent).detail;
    setPosts((prev) => prev.map((p) => p.id === postId ? { ...p, upvotes: count } : p));
    setSelectedPost((prev) => prev && prev.id === postId ? { ...prev, upvotes: count } : prev);
  }, []);

  useEffect(() => {
    window.addEventListener('vote-changed', handleVoteChanged);
    return () => window.removeEventListener('vote-changed', handleVoteChanged);
  }, [handleVoteChanged]);

  const filtered = search.trim()
    ? posts.filter((p) => p.title.toLowerCase().includes(search.toLowerCase()))
    : posts;

  const grouped = {
    idea: filtered.filter((p) => p.stage === 'idea'),
    prototype: filtered.filter((p) => p.stage === 'prototype'),
    live: filtered.filter((p) => p.stage === 'live'),
  };

  return (
    <div className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold">Idea House</h1>
            <p className="text-sm text-zinc-500 mt-1">Building Open&apos;s public product pipeline.</p>
          </div>
          <div className="flex items-center gap-3">
            <AuthButton />
            {user && (
              <Link
                href="/ideas/new"
                className="px-4 py-2 bg-green-500 text-black text-sm font-medium rounded-lg hover:bg-green-400 transition-colors"
              >
                Submit Idea
              </Link>
            )}
          </div>
        </div>

        <p className="text-sm text-zinc-500 mb-6 max-w-2xl">
          Anyone can submit a product idea. Vote on the ones you want to see built.
          Ideas that gain traction move to <span className="text-yellow-500">Prototype</span>, then
          to <span className="text-green-400">Live</span> when they ship.
        </p>

        <div className="mb-6">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Filter ideas..."
            className="w-full max-w-sm bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-zinc-500 placeholder:text-zinc-600"
          />
        </div>

        {loading ? (
          <div className="hidden md:grid md:grid-cols-3 gap-4">
            {stages.map((s) => (
              <div key={s} className={`rounded-xl border ${stageColors[s]} bg-zinc-900/30 p-4`}>
                <div className="flex items-center justify-between mb-4">
                  <StageBadge stage={s} />
                </div>
                <CardSkeletonList count={2} />
              </div>
            ))}
          </div>
        ) : (
          <>
            {/* Mobile: tabs */}
            <div className="md:hidden mb-4">
              <div className="flex gap-1 bg-zinc-900 rounded-lg p-1">
                {stages.map((s) => (
                  <button
                    key={s}
                    onClick={() => setActiveTab(s)}
                    className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      activeTab === s ? 'bg-zinc-800 text-white' : 'text-zinc-500'
                    }`}
                  >
                    <StageBadge stage={s} /> <span className="ml-1 text-zinc-600">{grouped[s].length}</span>
                  </button>
                ))}
              </div>
              <div className="mt-4 space-y-2">
                {grouped[activeTab].length === 0 ? (
                  <p className="text-sm text-zinc-600 text-center py-8">No ideas in this stage yet.</p>
                ) : (
                  grouped[activeTab].map((post) => (
                    <IdeaCard key={post.id} post={post} onSelect={setSelectedPost} />
                  ))
                )}
              </div>
            </div>

            {/* Desktop: kanban columns */}
            <div className="hidden md:grid md:grid-cols-3 gap-4">
              {stages.map((s) => (
                <div key={s} className={`rounded-xl border ${stageColors[s]} bg-zinc-900/30 p-4`}>
                  <div className="flex items-center justify-between mb-4">
                    <StageBadge stage={s} />
                    <span className="text-xs text-zinc-600">{grouped[s].length}</span>
                  </div>
                  <div className="space-y-2">
                    {grouped[s].length === 0 ? (
                      <p className="text-sm text-zinc-600 text-center py-6">None yet</p>
                    ) : (
                      grouped[s].map((post) => (
                        <IdeaCard key={post.id} post={post} onSelect={setSelectedPost} />
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <IdeaDrawer post={selectedPost} onClose={() => setSelectedPost(null)} />
    </div>
  );
}
