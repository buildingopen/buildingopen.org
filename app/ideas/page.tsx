'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { createClient } from '../lib/supabase';
import IdeaCard from '../components/IdeaCard';
import StageBadge from '../components/StageBadge';
import AuthButton from '../components/AuthButton';
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

  const grouped = {
    idea: posts.filter((p) => p.stage === 'idea'),
    prototype: posts.filter((p) => p.stage === 'prototype'),
    live: posts.filter((p) => p.stage === 'live'),
  };

  return (
    <div className="py-16">
      <div className="mx-auto max-w-5xl px-6">
        {/* Header */}
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

        <p className="text-sm text-zinc-500 mb-8 max-w-2xl">
          Anyone can submit a product idea. Vote on the ones you want to see built.
          Ideas that gain traction move to <span className="text-yellow-500">Prototype</span>, then
          to <span className="text-green-400">Live</span> when they ship.
        </p>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block w-5 h-5 border-2 border-zinc-600 border-t-green-500 rounded-full animate-spin" />
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
                  grouped[activeTab].map((post) => <IdeaCard key={post.id} post={post} />)
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
                      grouped[s].map((post) => <IdeaCard key={post.id} post={post} />)
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
