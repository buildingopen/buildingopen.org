'use client';

import { useState, useEffect } from 'react';
import { createClient } from '../lib/supabase';

export default function VoteButton({
  postId,
  commentId,
  initialCount,
}: {
  postId?: string;
  commentId?: string;
  initialCount: number;
}) {
  const [count, setCount] = useState(initialCount);
  const [voted, setVoted] = useState<1 | -1 | 0>(0);
  const supabase = createClient();

  // Restore user's existing vote on mount
  useEffect(() => {
    (async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;

      let query = supabase.from('votes').select('value').eq('user_id', user.id);
      if (postId) query = query.eq('post_id', postId);
      else query = query.is('post_id', null);
      if (commentId) query = query.eq('comment_id', commentId);
      else query = query.is('comment_id', null);

      const { data } = await query.maybeSingle();
      if (data) setVoted(data.value as 1 | -1);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleVote = async (value: 1 | -1) => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      window.dispatchEvent(new CustomEvent('auth-required'));
      return;
    }

    const newValue = voted === value ? 0 : value;
    const delta = newValue - voted;

    setVoted(newValue as 1 | -1 | 0);
    setCount((c) => c + delta);

    // Find existing vote
    let query = supabase.from('votes').select('id').eq('user_id', user.id);
    if (postId) query = query.eq('post_id', postId);
    else query = query.is('post_id', null);
    if (commentId) query = query.eq('comment_id', commentId);
    else query = query.is('comment_id', null);
    const { data: existing } = await query.maybeSingle();

    if (newValue === 0 && existing) {
      await supabase.from('votes').delete().eq('id', existing.id);
    } else if (existing) {
      await supabase.from('votes').update({ value: newValue }).eq('id', existing.id);
    } else if (newValue !== 0) {
      await supabase.from('votes').insert({
        user_id: user.id,
        post_id: postId || null,
        comment_id: commentId || null,
        value: newValue,
      });
    }

    // Recalculate actual count from votes table (avoids stale closure race condition)
    const targetId = postId || commentId;
    const table = postId ? 'posts' : 'comments';
    const column = postId ? 'post_id' : 'comment_id';
    if (targetId) {
      const { data: votes } = await supabase
        .from('votes')
        .select('value')
        .eq(column, targetId);

      const actualCount = votes?.reduce((sum, v) => sum + v.value, 0) ?? 0;
      await supabase.from(table).update({ upvotes: actualCount }).eq('id', targetId);
      setCount(actualCount);
    }
  };

  return (
    <div className="flex flex-col items-center gap-0.5">
      <button
        onClick={() => handleVote(1)}
        className={`p-1 rounded transition-colors ${
          voted === 1 ? 'text-white' : 'text-zinc-600 hover:text-zinc-400'
        }`}
        aria-label="Upvote"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
      <span className={`text-xs font-medium ${count > 0 ? 'text-white' : count < 0 ? 'text-red-400' : 'text-zinc-500'}`}>
        {count}
      </span>
      <button
        onClick={() => handleVote(-1)}
        className={`p-1 rounded transition-colors ${
          voted === -1 ? 'text-red-400' : 'text-zinc-600 hover:text-zinc-400'
        }`}
        aria-label="Downvote"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
}
