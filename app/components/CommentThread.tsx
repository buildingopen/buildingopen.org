'use client';

import { useState } from 'react';
import VoteButton from './VoteButton';
import { createClient } from '../lib/supabase';
import type { Comment } from '../lib/supabase';

function timeAgo(date: string) {
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

function ReplyForm({
  postId,
  parentId,
  onSubmitted,
  onCancel,
}: {
  postId: string;
  parentId: string;
  onSubmitted: (comment: Comment) => void;
  onCancel: () => void;
}) {
  const [body, setBody] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const supabase = createClient();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!body.trim()) return;
    setSubmitting(true);

    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;

    const { data, error } = await supabase
      .from('comments')
      .insert({
        post_id: postId,
        parent_id: parentId,
        body: body.trim(),
        author_name: user.user_metadata?.user_name || user.email || 'Anonymous',
        author_avatar: user.user_metadata?.avatar_url || null,
        author_id: user.id,
      })
      .select()
      .single();

    if (!error && data) {
      onSubmitted(data as Comment);
      setBody('');
    }
    setSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2 ml-8">
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        placeholder="Write a reply..."
        rows={2}
        className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-zinc-500 resize-none"
      />
      <div className="flex gap-2 mt-1">
        <button
          type="submit"
          disabled={submitting || !body.trim()}
          className="px-3 py-1 bg-green-500 text-black text-xs font-medium rounded hover:bg-green-400 transition-colors disabled:opacity-50"
        >
          Reply
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="px-3 py-1 text-xs text-zinc-500 hover:text-white transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}

function CommentItem({
  comment,
  postId,
  depth = 0,
}: {
  comment: Comment;
  postId: string;
  depth?: number;
}) {
  const [showReply, setShowReply] = useState(false);
  const [replies, setReplies] = useState<Comment[]>(comment.replies || []);

  const handleReplySubmitted = (newReply: Comment) => {
    setReplies([...replies, { ...newReply, replies: [] }]);
    setShowReply(false);
  };

  return (
    <div className={`${depth > 0 ? 'ml-6 border-l border-zinc-800 pl-4' : ''}`}>
      <div className="flex gap-3 py-3">
        <VoteButton commentId={comment.id} initialCount={comment.upvotes} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1 text-xs text-zinc-500">
            {comment.author_avatar && (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={comment.author_avatar} alt="" className="w-4 h-4 rounded-full" />
            )}
            <span className="font-medium text-zinc-400">{comment.author_name}</span>
            <span>{timeAgo(comment.created_at)}</span>
          </div>
          <p className="text-sm text-zinc-300 whitespace-pre-wrap">{comment.body}</p>
          {depth < 3 && (
            <button
              onClick={() => setShowReply(!showReply)}
              className="text-xs text-zinc-600 hover:text-zinc-400 mt-1 transition-colors"
            >
              Reply
            </button>
          )}
        </div>
      </div>
      {showReply && (
        <ReplyForm
          postId={postId}
          parentId={comment.id}
          onSubmitted={handleReplySubmitted}
          onCancel={() => setShowReply(false)}
        />
      )}
      {replies.map((reply) => (
        <CommentItem
          key={reply.id}
          comment={reply}
          postId={postId}
          depth={depth + 1}
        />
      ))}
    </div>
  );
}

export default function CommentThread({
  comments,
  postId,
}: {
  comments: Comment[];
  postId: string;
}) {
  return (
    <div className="space-y-0 divide-y divide-zinc-800/50">
      {comments.map((comment) => (
        <CommentItem key={comment.id} comment={comment} postId={postId} />
      ))}
      {comments.length === 0 && (
        <p className="text-sm text-zinc-600 py-4">No comments yet. Be the first.</p>
      )}
    </div>
  );
}
