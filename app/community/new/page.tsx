'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '../../lib/supabase';

const categories = [
  { value: 'general', label: 'General' },
  { value: 'show-and-tell', label: 'Show & Tell' },
  { value: 'help', label: 'Help' },
  { value: 'ideas', label: 'Ideas' },
];

export default function NewPostPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [category, setCategory] = useState('general');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [user, setUser] = useState<{ id: string; user_metadata: Record<string, string> } | null>(null);
  const [loading, setLoading] = useState(true);
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      if (data.user) setUser(data.user as typeof user);
      setLoading(false);
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !user) return;
    setSubmitting(true);
    setError('');

    const { data, error: insertError } = await supabase
      .from('posts')
      .insert({
        title: title.trim(),
        body: body.trim() || null,
        category,
        author_name: user.user_metadata?.user_name || user.user_metadata?.email || 'Anonymous',
        author_avatar: user.user_metadata?.avatar_url || null,
        author_id: user.id,
      })
      .select()
      .single();

    if (insertError) {
      setError(insertError.message);
      setSubmitting(false);
      return;
    }

    if (data) {
      router.push(`/community/${data.id}`);
    }
  };

  if (loading) {
    return (
      <div className="py-16 text-center">
        <div className="inline-block w-5 h-5 border-2 border-zinc-600 border-t-green-500 rounded-full animate-spin" />
      </div>
    );
  }

  if (!user) {
    return (
      <div className="py-16 text-center">
        <p className="text-zinc-500 mb-4">Sign in to create a post.</p>
        <Link href="/community" className="text-green-500 text-sm">
          Back to community
        </Link>
      </div>
    );
  }

  return (
    <div className="py-10 md:py-16">
      <div className="mx-auto max-w-2xl px-6">
        <Link
          href="/community"
          className="text-sm text-zinc-500 hover:text-white transition-colors mb-6 inline-block"
        >
          ← Back
        </Link>

        <h1 className="text-xl font-bold mb-6">New Post</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Category */}
          <div>
            <label className="text-sm text-zinc-400 mb-1.5 block">Category</label>
            <div className="flex gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setCategory(cat.value)}
                  className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                    category === cat.value
                      ? 'bg-green-500/10 text-green-500 border border-green-500/30'
                      : 'bg-zinc-900 text-zinc-500 border border-zinc-800 hover:border-zinc-700'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Title */}
          <div>
            <label htmlFor="title" className="text-sm text-zinc-400 mb-1.5 block">
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="What's on your mind?"
              required
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Body */}
          <div>
            <label htmlFor="body" className="text-sm text-zinc-400 mb-1.5 block">
              Details <span className="text-zinc-600">(optional)</span>
            </label>
            <textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Add more context..."
              rows={6}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-green-500 resize-none"
            />
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={submitting || !title.trim()}
              className="px-6 py-3 bg-green-500 text-black font-medium rounded-lg hover:bg-green-400 transition-colors disabled:opacity-50"
            >
              {submitting ? 'Posting...' : 'Post'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
