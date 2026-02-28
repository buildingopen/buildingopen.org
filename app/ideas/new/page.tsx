'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '../../lib/supabase';

export default function NewIdeaPage() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
        category: 'ideas',
        stage: 'idea',
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
      router.push(`/ideas/${data.id}`);
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
        <p className="text-zinc-500 mb-4">Sign in to submit an idea.</p>
        <Link href="/ideas" className="text-zinc-400 hover:text-white text-sm">
          Back to ideas
        </Link>
      </div>
    );
  }

  return (
    <div className="py-16">
      <div className="mx-auto max-w-2xl px-6">
        <Link
          href="/ideas"
          className="text-sm text-zinc-500 hover:text-white transition-colors mb-6 inline-block"
        >
          &#8592; Back
        </Link>

        <h1 className="text-xl font-bold mb-6">Submit an Idea</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="title" className="text-sm text-zinc-400 mb-1.5 block">
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="What if we built..."
              required
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-zinc-500"
            />
          </div>

          <div>
            <label htmlFor="body" className="text-sm text-zinc-400 mb-1.5 block">
              Description <span className="text-zinc-600">(optional)</span>
            </label>
            <textarea
              id="body"
              value={body}
              onChange={(e) => setBody(e.target.value)}
              placeholder="Describe the idea, why it matters, how it could work..."
              rows={6}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-zinc-500 resize-none"
            />
          </div>

          {error && <p className="text-red-400 text-sm">{error}</p>}

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={submitting || !title.trim()}
              className="px-6 py-3 bg-green-500 text-black font-medium rounded-lg hover:bg-green-400 transition-colors disabled:opacity-50"
            >
              {submitting ? 'Submitting...' : 'Submit Idea'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
